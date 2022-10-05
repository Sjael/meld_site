<script>
    import {createEventDispatcher} from "svelte";
    export let item;

    const dispatch = createEventDispatcher();

    const handleHover = (item) => {
        dispatch('hoveritem', item)
    }

</script>

<div class="m-3 shadow-sm hover:shadow-lg duration-200 border-black border" on:mouseenter={() => handleHover(item)} on:mousemove on:mouseleave>
    <img src="items/{item.image}.png" alt={item.name}/>
</div>

<style>
    div img{
        height:64px;
        width:64px;
    }
</style>