<script lang="ts">
    import "../app.css"
    import DrawerNav from "$lib/component/base/DrawerNav.svelte"
    import { isDark } from "$lib/store/theme"
    import { onMount } from 'svelte'
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'
    import { inject } from '@vercel/analytics'

    injectSpeedInsights()
    inject()

    onMount(() => {
        document.body.classList.toggle('dark', $isDark)
    })

    $: {
        if (typeof window !== 'undefined') {
            document.body.classList.toggle('dark', $isDark)
        }
    }

</script>

<div class="h-screen flex">
    <DrawerNav />
    <div class="h-full w-full bg-primary-50 dark:bg-[#212121] duration-300">
        <slot />
    </div>
</div>