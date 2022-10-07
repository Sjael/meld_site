<script context="module">
    export const load = async ({params, fetch}) => {
        const ver = params.id;
        console.log(ver);
		var response = await fetch('/json/'+ver+'.json');
		var loading_patch = await response.json();
        return {
            props: {
                loading_patch,
            }
        };
    }
</script>
<script>
    import Icon from "$lib/components/icons.svelte";
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import {unslug, attr_flip} from '$lib/utils'
    let quote_showing = false;

    
    export let loading_patch;
    let patch_list = ['1.3', '1.2', '1.0', '1.02', '1.1'];
    patch_list.sort().reverse();

    let version = '1.3';
    if ($page.url.searchParams.has('v')){
        if (patch_list.includes($page.url.searchParams.get('v'))){
            version = $page.url.searchParams.get('v');
        }
    }
    console.log(version);

    let notes = {};
    onMount(async () => {
		var response = await fetch('/json/'+version+'.json');
		var result = await response.json();
        console.log(result);
		return result;
    });
    console.log(notes);
    const get_patch = async (version) => {
		var response = await fetch(version);
		var result = await response.json();
        console.log(result);
		return result;
	}


</script>

<svelte:head>
    <title>LS 1.3</title>
</svelte:head>
<div class="sidebar">
    <div class="sticky">
        <ul>
            {#each patch_list as patch}
            <li><a href="/patch_notes?v={patch}">{patch}</a></li>
            {/each}
        </ul>
       </div>
</div>
<div class="sidebar right">
    <div class="sticky">
        <ul>
            <li><a href="#chars-head">Gods</a></li>
            <li><a href="#items-head">Items</a></li>
        </ul>
        <button id="hide_quotes" on:click={() => {quote_showing = !quote_showing}}>Show <Icon name="quote" /> </button>
    </div>
</div>

<h1>1.3 Into Cinder</h1>
<div class="timeline"></div>

<div class="explanation pad">
    <p>The first bonus update for Mid Season 9 is ready to go! The most important change to the new mid season items are the bug fixes. Sphinx’s Bauble is going to be back and will be closely watched for possible balance changes in the second bonus update coming 2 weeks later. Looking beyond the new content, we set our sights on Warrior Junglers. These are still overperforming and thus pushing many Assassins out of the viable god pool, so we are stacking some specific nerfs across the top gods and items in this archetype. Hopefully we will see Erlang Shen and Osiris drop in their prioritization in SPL and make room for more gods in that role.</p>
</div>
<h5 id="chars-head">Gods</h5>
<section id="chars">
    {#await loading_patch}
    {:then selected_patch}
        {#each selected_patch.chars as char}
        <div>
            <div class="image-head">
                <img src="/chars/{char["char"]}.png" alt="" class="char-icon"/>
                <h2>{unslug(char["char"])}</h2>
                <p class="quote" class:shown={quote_showing}>{char["quote"]}</p>   
            </div>    
            {#each char["changes"] as change}
            <div class="sub-note pad">

                <img src="/chars/{change["ability"]}.png" alt="" class="char-icon"/>
                <h3>{unslug(change["ability"])}</h3>
                {#each change["bullets"] as bullet}
                <p>
                    {#if bullet["old"] == ""}
                    <span class="tag new">new</span>
                    {/if}
                    {#if bullet["new"] == ""}
                    <span class="tag removed">removed</span>
                    {/if}
                    <span class="bullet">{bullet["attr"]}</span> 
                    <s>{bullet["old"]}</s>              
                    {#if bullet["new"] != "" && bullet["old"] != ""}
                    <Icon name="arrow-right" /> 
                    {/if}
                    {#if parseFloat(bullet["old"]) < parseFloat(bullet["new"]) && !attr_flip.includes(bullet["attr"])}
                    <span class="green">{bullet["new"]}</span>
                    {:else if bullet["new"] != "" && bullet["old"] != ""}
                    <span class="red">{bullet["new"]}</span>
                    {:else}
                    <span>{bullet["new"]}</span>
                    {/if}
                </p>
                {/each}
            </div>
            {/each}
        </div>
        {/each}
    {:catch err}
        <h2>Error while loading the data</h2>
    {/await}     
</section>
<h5 id="items-head">Items</h5>
<section id="items">
    {#await loading_patch}
    {:then selected_patch}
        {#each selected_patch.items as item}
            <div>
                <div class="image-head">
                    <img src="/items/{item["item"]}.png" alt="" class="char-icon"/>
                    <h2>{unslug(item["item"])}</h2>
                    <p class="quote" class:shown={quote_showing}>{item["quote"]}</p>   
                </div>    
                {#each item["bullets"] as bullet}
                <div class="sub-note">
                    <p>
                        {#if bullet["old"] == ""}
                        <span class="tag new">new</span>
                        {/if}
                        {#if bullet["new"] == ""}
                        <span class="tag removed">removed</span>
                        {/if}
                        <span class="bullet">{bullet["attr"]}</span> 
                        <s>{bullet["old"]}</s>                
                        {#if bullet["new"] != "" && bullet["old"] != ""}
                        <Icon name="arrow-right" /> 
                        {/if}
                        {#if parseFloat(bullet["old"]) < parseFloat(bullet["new"]) && !attr_flip.includes(bullet["attr"])}
                        <span class="green">{bullet["new"]}</span>
                        {:else if bullet["new"] != "" && bullet["old"] != ""}
                        <span class="red">{bullet["new"]}</span>
                        {:else}
                        <span>{bullet["new"]}</span>
                        {/if}
                    </p>
                </div>
                {/each}
            </div>
        {/each}
    {:catch err}
        <h2>Error while loading the data</h2>
    {/await}     
    
    
</section>

<style>
    .sidebar{
        position:absolute;
        left:0;
        padding-top:200px;
        transform: translateX(-200%);
        height:100%;
    }
    .sidebar.right{        
        transform: translateX(200%);
        padding-top:200px;
        right:0;
        left:auto;
    }
    .sticky{
        position:sticky;
        top:50px;
    }


    .sidebar ul{
        padding-bottom:30px;
    }

    .sidebar li{
        text-align:right;
        padding-bottom:10px;
    }

    .sidebar:not(.right) ul a{
        font-size: 20px;
    }

    .sidebar.right li{
        text-align: left;
    }

    .sidebar a{
        color:#ccc;
        text-transform: uppercase;
        font-size:14px;
        letter-spacing:1px;
    }
    .sidebar ul a:hover{
        color:#e09162;
    }


    #hide_quotes{
        padding:8px;
        border-radius:3px;
        background:#eee;
        font-size:12px;
        text-transform:uppercase;
        letter-spacing:1px;
        color:#888;
    }

    #hide_quotes:hover{
        background:#e5e5e5;
    }

    *{
        font-family:'PT Sans';
    }


    h1{
        text-align:left;
        font-size:5rem;
        margin-top:60px;
        font-family:'Arvo';
        font-weight:bold;
        color:#000;
    }
    
    .pad{
        padding-top:20px;
        padding-bottom:20px;
        position:relative;
    }

    
    section > div:not(:last-child){
        border-bottom: 1px solid rgba(127, 127, 127, 0.5);
    }

    section > div:not(:first-child){
        padding-top:45px;
    }

    section > div{
        padding: 20px 0px 20px 0px;
    }

    section > div:first-child {
        padding-top:15px;
    }
    
    h5{
        font-size: 16px;
        color:#777;
        letter-spacing: 4px;
        text-transform:uppercase;
        margin-top:60px;
        margin-bottom:30px;
    }

    .quote{
        line-height:1.5em;
        font-size:16px;
        font-family:'PT Sans';
        font-style:italic;
        padding-left:10px;
        padding-top:20px;
        display:none;
    }

    .quote:before{
        content:"“";
        font-size:36px;
        font-style:normal;
    }

    .quote.shown{
        display:block;
    }



    #items .sub-note p{
        margin-bottom:10px;
    }

    .image-head{
        position:relative;
    }
    .image-head > img{
        width:64px;
        height:64px;
        position: absolute;
    }

    .image-head > h2{
        font-size:48px;
        padding-left:80px;
        font-family:'PT Sans';
        font-weight:bold;
        color:#000;
    }

    .sub-note{
        margin-left:80px;
    }

    .sub-note img{
        width:40px;
        height:40px;
        left: -56px;
        position: absolute;
    }

    .sub-note > h3{
        font-size:22px;
        font-weight:bold;
        padding-top:4px;
        padding-bottom:4px;
    }

    .sub-note p{
        position:relative;
    }

    p span{
        color:#000;
        padding:auto -5px auto -5px;
        font-weight:bold;
    }

    p .bullet{
        text-transform: uppercase;
        font-weight:normal;
        color:rgba(0,0,0,0.7);
        font-size: 12px;
        letter-spacing:1px;
    }

    p span.green{
        background:var(--highlight-green);
        margin:auto 5px auto 5px;
    }

    p span.red{
        background:var(--highlight-red);
        margin:auto 5px auto 5px;
    }

    p s{
        color:#888;
        font-weight:bold;
        margin: auto 5px auto 7px;
    }




    .tag{
        padding:3px 3px 3px 5px;
        font-size:0.5rem;
        text-transform: uppercase;
        font-weight:bold;
        color:#fff;
        letter-spacing: 1.5px;
        text-align: center;
        position:absolute;
        left:-16px;
        top: 57%;
        transform: translateX(-100%) translateY(-50%);
    }

    .new{
        background-color: rgb(78, 166, 78);
    }

    .removed{
        background-color: rgb(233, 47, 47);
    }


    
    :global(body.dark-mode) .image-head > h2,
    :global(body.dark-mode) p span,
    :global(body.dark-mode) h1,
    :global(body.dark-mode) p,
    :global(body.dark-mode) .sub-note > h3{
        color:#fff;
    }
    
    :global(body.dark-mode) .tag,
    :global(body.dark-mode) #hide_quotes{
        color:#000;
    }

</style>