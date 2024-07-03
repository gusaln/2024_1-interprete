<script>
  /**
   * @type {import('tokenizr').Token[]}
   */
  export let tokens = [];
</script>

<div class="container">
  {#each tokens as t}
    {#if t.type == "NEWLINE"}
      <div class="token newline tooltip newline">
        <!-- <pre>{" "}</pre> -->
        <div class="tooltiptext">{t.type} {t.line}:{t.column}</div>
      </div>
      <br />

      {:else if t.type == "SPACES"}
      <div class="token tooltip">
        <pre class="spaces">{t.text.replaceAll(" ", "•")}</pre>
        <div class="tooltiptext">{t.type} {t.line}:{t.column}</div>
      </div>
    {:else}
    <div class="token tooltip">
      <pre class:keyword={t.type.startsWith("K_")} class:number={t.type == "NUMBER"} class:comment={t.type == "COMMENT"}  class:string={t.type == "STRING"}>{t.text}</pre>
      <div class="tooltiptext">{t.type} {t.line}:{t.column}</div>
    </div>
    {/if}
  {/each}
</div>

<style>
  .container {
    /* display: flex; */
    /* flex-wrap: wrap; */
  }

  .token {
    display: inline-block;
    border: 1px dashed white;
    padding: 2px;
  }
  

  .token:hover {
    border: 1px dashed grey;
    background-color: thistle;
  }

  .token.newline {
    border: 1px dashed grey;
  }

  .tooltip {
    /* position: relative; */
  }

  /* Tooltip text */
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }

  .keyword {
    color: salmon;
    font-weight: 600;
  }

  .number {
    color: goldenrod;
  }

  .string {
    color: cornflowerblue;
  }

  .spaces {
    color: darkslateblue;
  }

  .comment {
    color: green;
  }
</style>
