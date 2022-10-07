<script>
    import {items_list} from "$lib/stores/itemstore";
    import { onMount } from "svelte";
    import Itemtile from "./itemtile.svelte";
    import Icon from "./icons.svelte"

    let searchterm = "";
    let filteredItems = [];
	let m = { x: 0, y: 0 };

    $: {
        if (searchterm){
            console.log(searchterm);
            filteredItems = $items_list.filter(item => item.name.toLowerCase().includes(searchterm.toLowerCase()));
        }else{
            filteredItems = [...$items_list];
        }
    }


    let hovering = false;
    let hovereditem;

	const leave = () => (hovering = false);

    function handleMousemove(event) {
		m.x = event.pageX;
		m.y = event.pageY;
	}
    const hover_item = (e) => {
        hovering = true;
        console.log(e.detail);
        hovereditem = e.detail;
    }

    onMount(async () => {
        console.log($items_list);
        fetch("https://meldbackend-production.up.railway.app/")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            items_list.set(data);
            }).catch(error => {
                console.log(error);
                return [];
            });
    });
</script>

<svelte:head>
    <title>Items</title>
</svelte:head>

<input bind:value={searchterm} class="w-full rounded-md text-lg p-4 focus:outline-0 focus:shadow-md duration-100 bg-gray-200 focus:bg-gray-50" type="text" placeholder="You WILL search for an item">

<div class="flex " style="margin-left:-12px; margin-right:-12px;">
    {#each filteredItems as item}
    <Itemtile item={item} on:mousemove={handleMousemove} on:hoveritem={hover_item} on:mouseleave={leave}/>
    {/each}
</div>

{#if hovering}
<div class="tooltipthing" style="top:{m.y}px;left:{m.x}px;">
    <div class="bg-gray-900 py-3 px-4 mt-4 ml-8 relative shadow-2xl">
        <h1 class="text-xl text-white">{hovereditem.name}</h1>
        <p class="text-xs text-white">{hovereditem.desc}</p>
        <!-- <img src="{hovereditem.image}.png"> -->
    </div>
</div>
{/if}

<style>
    .tooltipthing{
        position:absolute;
        pointer-events: none;
    }

    .tooltipthing img{
        position:absolute;
        left: 0;
        top:0;
        height: 64px;
        width: 64px;
        transform: translate(-110%, 0%)
    }
</style>
