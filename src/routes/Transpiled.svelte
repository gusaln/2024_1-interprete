<script>
    import { parse } from "$lib/parser";

    export let input;

    $: result = parse(input);
    $: isError = result == null;
</script>

<div class="container">
    {#await result}
        procesando...
    {:then value}
        <pre>{value}</pre>
    {:catch error}
        Error procesando entrada: {error}
    {/await}
</div>

<style>
    h3 {
        cursor: pointer;
        user-select: none;
    }
</style>
