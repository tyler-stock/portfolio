<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    function chatReset() { dispatch('reset') }
    // function chatHistory() { dispatch('history') }

</script>

<div class="">
    <div class="h-20 flex justify-between text-primary-900 border-b border-primary-100 dark:border-neutral-600 mx-4 dark:text-white/80 duration-300 select-none">
        <p class="flex items-center justify-center py-1 pl-4 gap-3 font-[500]">
            ChatGPT 4o
        </p>
        <div class="flex justify-center items-center gap-4 pr-2">
            <button class="flex justify-center items-center px-4 py-2 gap-[10px] duration-100 rounded-lg text-primary-800 bg-[#2f2f2f] hover:bg-primary-50 dark:hover:bg-[#2f2f2f] dark:text-white/80 active:text-indigo-500 dark:active:text-indigo-500" on:click={chatReset}>
                <span class="material-symbols-rounded text-[18px]">sms</span>
                <p class="whitespace-nowrap pb-[1px]">New Chat</p>
            </button>
        </div>
    </div>
</div>