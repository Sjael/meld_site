<script context="module" lang="ts">
	export const prerender = true;
</script>
<script>
    import {items} from "../stores/itemstore";
    import Itemgrid from "$lib/components/itemgrid.svelte";
    import Itemtile from "$lib/components/itemtile.svelte";
    import Icon from "$lib/components/icons.svelte"


</script>

<svelte:head>
    <title>Meld</title>
</svelte:head>
<div class="wrap">
    <figure class="center-figure">
        <img src="logo-export.png" alt="" style=""/>
    </figure>
    <figure class="center-figure">
        <img src="map_shot1.png" alt="" style="max-height:300px;border-radius:6px;"/>
    </figure>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <div>
        <Itemgrid />
    </div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    
</div>

<style>
    .center-figure{
        width: 100% !important;
        display: flex;
    }

    .center-figure img{
        margin-left:auto;
        margin-right:auto;
    }

    .wrap{
        margin: 0 auto;
        padding-top:40px;
    }

    .wrap > *{
        margin-bottom:36px;
    }

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
