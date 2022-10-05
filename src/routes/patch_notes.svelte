<script>
    import Icon from "$lib/components/icons.svelte";
    import { onMount } from 'svelte';
    import { page } from '$app/stores';


    console.log($page.url.pathname);
    let quote_showing = false;
    const non_cap_words = ['and', 'or', 'the', 'of'];
    function unslug(slug){
        slug = slug.replaceAll('_', ' ');
        slug = slug.replaceAll('-', ' ');
        var text = slug
            .split(' ')
            .map(function(s) { 
                if (!non_cap_words.includes(s)){
                    s = s.charAt(0).toUpperCase() + s.substring(1)
                }
                return s;
            })
            .join(' ');
        return text;
    }

    var attr_flip = ["cooldown", "mana cost"];

    var characters = [{
        "char": "nemesis",
        "quote": "This goddess has continued to be a top Jungler even with a nerf to her Ultimate earlier this year. Divine Judgment is especially strong in a world where gods have higher base HP, and her pace in the Jungle has remained at the top of the pack. Both of these changes should decrease her overall damage output and slow her down to be a closer match to the rest of the class.",
        "changes": [{
            "ability": "slice_and_dice",
            "bullets" :[{
                "attr": "cooldown",
                "old": "11",
                "new": "12"
                },{
                "attr": "mana cost",
                "old": "80",
                "new": "100"
                }]
            },{
            "ability": "divine_judgement",
            "bullets" :[{
                "attr": "percent damage",
                "old": "20/22.5/25/27.5/30%",
                "new": "25/27.5/30/32.5/35% of current HP"
                }]
            }]       
    },{
        "char": "nu_wa",
        "quote": "She needs to be OP at least one patch.",
        "changes": [{
            "ability": "shining_metal",
            "bullets" :[{
                "attr": "stun duration",
                "old": "1.1/1.2/1.3/1.4/1.5s",
                "new": "1.2/1.4/1.6/1.8/2.0s"
                },{
                "attr": "mana cost",
                "old": "40",
                "new": "70"
                }]
            },{
            "ability": "fire_shards",
            "bullets" :[{
                "attr": "cooldown",
                "old": "100",
                "new": "110"
                }]
            }]    
    }];
    var items = [{
        "item": "stone_cutting_sword",
        "quote": "This shit was too bussin' fr",
        "bullets" :[{
            "attr": "prot debuff",
            "old": "12",
            "new": "10"
            }]      
    },{
        "item": "hydras_lament",
        "quote": "plz meld",
        "bullets" :[{
            "attr": "bonus damage",
            "old": "40%",
            "new": ""
            },{
            "attr": "crit machine",
            "old": "",
            "new": "After casting an ability, your next auto attack is a guarenteed critical strike."
            }]                 
    }];


</script>

<svelte:head>
    <title>LS 1.3</title>
</svelte:head>

<div class="sidebar">
    <div class="sticky">
        <ul>
            <li><a href="/patch_notes?v=1.3">1.3</a></li>
            <li><a href="/patch_notes?v=1.2">1.2</a></li>
            <li><a href="/patch_notes?v=1.2">1.1</a></li>
            <li><a href="/patch_notes?v=1.2">1.02</a></li>
            <li><a href="/patch_notes?v=1.2">1.0</a></li>
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
    {#each characters as char}
    <div>
        <div class="image-head">
            <img src="chars/{char["char"]}.png" alt="" class="char-icon"/>
            <h2>{unslug(char["char"])}</h2>
            <p class="quote" class:shown={quote_showing}>{char["quote"]}</p>   
        </div>    
        {#each char["changes"] as change}
        <div class="sub-note pad">

            <img src="chars/{change["ability"]}.png" alt="" class="char-icon"/>
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
    
</section>
<h5 id="items-head">Items</h5>
<section id="items">
    {#each items as item}
    <div>
        <div class="image-head">
            <img src="items/{item["item"]}.png" alt="" class="char-icon"/>
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
        border:1px solid #d0b760;
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
        background-color: rgb(255, 58, 58);
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