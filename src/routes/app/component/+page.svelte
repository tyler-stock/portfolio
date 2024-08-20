<script lang="ts">
    import { onMount } from 'svelte';

    let isMobile = false;

    onMount(() => {
        const userAgent = navigator.userAgent || navigator.vendor;
        if (/android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) {
            isMobile = true;
        } else {
            isMobile = false;
        }
    });
</script>

{#if isMobile}
    <p class="dark:text-white/80">Mobile Layout</p>
    <!-- Your mobile layout here -->
    <aside class="mobile-sidebar">
        <!-- Mobile-specific sidebar content -->
    </aside>
{:else}
    <p class="dark:text-white/80">Desktop Layout</p>
    <!-- Your desktop layout here -->
    <aside class="desktop-sidebar">
        <!-- Desktop-specific sidebar content -->
    </aside>
{/if}
