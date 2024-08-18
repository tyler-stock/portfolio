import type { ChatMessage } from '$lib/types'

export async function sendMessageToOpenAI(messages: ChatMessage[], onMessageUpdate: (content: string) => void): Promise<void> {
  const response = await fetch('/api/openai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messages }),
  })

  if (!response.ok) {
    throw new Error('Failed to communicate with OpenAI')
  }

  const reader = response.body?.getReader()
  const decoder = new TextDecoder()
  let done = false
  let content = ''

  while (!done) {
    const { value, done: readerDone } = await reader!.read()
    done = readerDone
    content += decoder.decode(value, { stream: true })
    onMessageUpdate(content)
  }
}