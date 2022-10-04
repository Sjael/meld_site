<script>
    import {items} from "../stores/itemstore";
    import Icon from "$lib/components/icons.svelte"

</script>

<svelte:head>
    <title>Patch Notes</title>
</svelte:head>

<h1>1.3 Into Cinder</h1>
<div class="timeline"></div>

<div class="explanation pad">
    <p>After six great years of payload pushing and high-intensity brawls around the world, 
        the fight for the future is just beginning. Now, as we prepare to enter a new era of epic competition, 
        it’s time for one last hurrah. Join the party in style with remixed skins Tagged Tracer, Varsity D.Va, 
        Genjiman Genji, and more. 
        Earn weekly rewards and play all your favorite seasonal brawls for the final time before the launch of Overwatch 2!</p>
</div>
<h5>Gods</h5>
<section class="chars">
    <div>
        <div class="image-head pad">
            <img src="nemesis.jpg" class="char-icon"/>
            <h2>Nemesis</h2>
            <p class="quote">This goddess has continued to be a top Jungler even with a nerf to her Ultimate earlier this year. 
                Divine Judgment is especially strong in a world where gods have higher base HP, and her pace in the 
                Jungle has remained at the top of the pack. Both of these changes should decrease her overall 
                damage output and slow her down to be a closer match to the rest of the class.</p>
        
        </div>    
        <div class="sub-note pad">
            
            <img src="slice-and-dice.png" class="char-icon"/>
            <h3>SLICE AND DICE</h3>
            <p>
                COOLDOWN <span>11</span>
                <Icon name="arrow-right" /> 
                <span class="red">12</span>
            </p>
        </div>
        <div class="sub-note pad">
            
            <img src="divine-judgement.png" class="char-icon"/>
            <h3>DIVINE JUDGEMENT</h3>
            <p>        
                PERCENT DAMAGE <s>20/22.5/25/27.5/30%</s>         
                <Icon name="arrow-right" /> 
                <span class="green">15/17.5/20/22.5/25%</span> of current HP
            </p>
            
        </div>
    </div>
    <div>
        <div class="image-head pad">
            <img src="nuwa.png" class="char-icon"/>
            <h2>Nu Wa</h2>
            <p class="quote">She needs to be OP at least one patch.</p>
        
        </div>    
        <div class="sub-note pad">
            
            <img src="shining_metal.png" class="char-icon"/>
            <h3>Shining Metal</h3>
            <p>        
                STUN DURATION <s>1.1/1.2/1.3/1.4/1.5s</s>         
                <Icon name="arrow-right" /> 
                <span class="green">1.2/1.4/1.6/1.8/2.0s</span>
            </p>
            
        </div>
        <div class="sub-note pad">
            
            <img src="fire_shards.png" class="char-icon"/>
            <h3>Clay Soldiers</h3>
            <p>
                COOLDOWN <span>100</span>
                <Icon name="arrow-right" /> 
                <span class="red">110</span>
            </p>
        </div>
    </div>
</section>
<h5>Items</h5>
<section class="items">
    <div>
        <div class="image-head">
            <img src="stonecutting.png" class="char-icon"/>
            <h2>Stone Cutting Sword</h2>
            
        </div>    
        <div class="sub-note">
            <p>
                PROT DEBUFF <span>12</span>
                <Icon name="arrow-right" /> 
                <span class="red">10</span>
            </p>
        </div>
    </div>
    <div>
        <div class="image-head">
            <img src="hydras.png" class="char-icon"/>
            <h2>Hydra's Lament</h2>
            
        </div>    
        <div class="sub-note">
            <p>
                BONUS DAMAGE <span>40%</span>
                <Icon name="arrow-right" /> 
                <span class="red">10%</span>
            </p>
        </div>
        <div class="sub-note">
            <span class="tag">NEW</span>
            <p>
                CRIT MACHINE <span> After every ability cast, your next AA is a guaranteed crit.</span>
    
            </p>
        </div>
    </div>
</section>

<style>
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
    }

    .quote{
        line-height:1.5em;
        font-size:16px;
        font-family:'PT Sans';
        font-style:italic;
        padding-left:10px;
        padding-top:20px;
    }

    .quote:before{
        content:"“";
        font-size:36px;
        font-style:normal;
    }



    .items .sub-note p{
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
        position:relative;
    }

    .sub-note img{
        width:40px;
        height:40px;
        left: -56px;
        position: absolute;
        border:1px solid #d0b760;
    }

    .sub-note > h3{
        font-size:20px;
        font-weight:bold;
    }

    

    p span{
        color:#000;
        margin: auto 5px auto 5px;
        padding:auto -5px auto -5px;
        font-weight:bold;
    }

    p span.green{
        background:var(--highlight-green);
    }

    p span.red{
        background:var(--highlight-red);
    }

    p s{
        color:#777;
        font-weight:bold;
        margin: auto 5px auto 7px;
    }




    .tag{
        background-color: rgb(78, 166, 78);
        padding:3px 3px 3px 5px;
        font-size:0.5rem;
        font-weight:bold;
        color:#fff;
        letter-spacing: 1.5px;
        text-align: center;
        position:absolute;
        left:-16px;
        top: 50%;
        transform: translateX(-100%) translateY(-50%);
    }


</style>