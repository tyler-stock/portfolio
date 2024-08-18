<script lang="ts">
    export let onSelect: (suggestion: string) => void

    const suggestions = [
        { icon: 'drafts', text: 'Draft an email to customer', color: '#5564EF' },
        { icon: 'bar_chart', text: 'Summarize the latest AI trends', color: '#FF5D9D' },
        { icon: 'folder', text: 'Generate a project plan', color: '#009399' },
        { icon: 'cloud', text: 'Explain a technical concept', color: '#007CFB' },
        { icon: 'lightbulb', text: 'Discuss the benefits of AI', color: '#FFAB00' },
        { icon: 'sentiment_satisfied', text: 'Invent a witty business joke', color: '#526372' }
    ]
</script>


<div class="grid grid-cols-2 gap-4">
    {#each suggestions as { icon, text, color }}
        <button class="flex border border-primary-100 dark:border-white/25 text-primary-500 dark:text-white/40 hover:bg-primary-100 hover:border-primary-100 dark:hover:bg-[#2f2f2f] text-sm text-left rounded-lg p-4 duration-200 whitespace-nowrap" on:click={() => onSelect(text)}>
            <div class="flex items-start gap-3 pr-2">
                <i class="material-symbols-rounded text-[18px]" style="color: {color}">{icon}</i>
                <div class="flex items-center text-sm -mt-[1px]">{text}</div>
            </div>
        </button>
    {/each}
</div>