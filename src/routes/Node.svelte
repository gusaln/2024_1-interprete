<script>
    import Python3Parser from "$lib/parser/Python3Parser";

    export let ruleIndex = 0;
    export let children = [];
    export let indent = 0.5;
    export let color = 0;    

    let open = true;

    function toggleOpen() {
        open = !open;
    }

    const astNodeNameList = Python3Parser.ruleNames;

    const colorcitos = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff", "#72efdd"]
</script>

<div style="border-left: 2px solid {colorcitos[color % colorcitos.length]}; margin-left: 0.5rem;"> 
    <p style="padding-left: {indent}rem" on:click={toggleOpen}>
        {astNodeNameList[ruleIndex]}
        <span style="font-size: 0.5rem; margin-left:0.5rem; background-color: rgba(255,255,255, 0.1); padding:0.3rem; border-radius:100rem; position:relative; bottom: 0.3rem;">{open ? "▼" : "►"}</span>
    </p>

    {#if open}
        {#each children as child}
            <svelte:self {...child}  color={color + 1} />
        {/each}
    {/if}
</div>

<style>
    h3 {
        cursor: pointer;
        user-select: none;
    }
</style>
