<script>
    function toggle() {
    window.document.body.classList.toggle('dark-mode')
}
</script>
<button on:click={toggle}>
    <slot/>
</button>
<style>
    button {
        background-color: #eee;
        font-family:'PT Sans';
        color: #222;
        border: none;
        font-size: 12px;
        letter-spacing:1px;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
        
    }
    :global(body.dark-mode) button {
        background-color: #222226;
        color: white;
    }
</style>