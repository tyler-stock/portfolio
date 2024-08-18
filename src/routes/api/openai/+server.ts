import { json, type RequestEvent } from '@sveltejs/kit'
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
})

export async function POST({ request }: RequestEvent) {
    try {
        const { messages } = await request.json()

        const stream = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'Always respond in Markdown format. Avoid using triple backticks for code blocks. Use more business type emojis sparingly.' },
                ...messages
            ],
            model: 'gpt-4o',
            stream: true,
        })          
        
        const readableStream = new ReadableStream({
            async start(controller) {
                for await (const part of stream) {
                    if (part.choices && part.choices[0].delta.content) {
                        const text = part.choices[0].delta.content
                        controller.enqueue(text)
                    }
                }
                controller.close()
            }
        })

        return new Response(readableStream, {
            headers: {
                'Content-Type': 'text/plain',
            },
        })
    } catch (error) {
        console.error('Error communicating with OpenAI:', error)
        return json({ error: 'Failed to communicate with OpenAI' }, { status: 500 })
    }
}