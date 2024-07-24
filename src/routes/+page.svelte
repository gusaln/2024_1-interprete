<script>
    import { lexer as tokenizer } from "$lib/parser";
    import Python3Lexer from "$lib/parser/Python3Lexer";
    import Python3Parser from "$lib/parser/Python3Parser";
    import antlr4 from "antlr4";
    import tokenizr from "tokenizr";
    import Node from "./Node.svelte";
    import Tokens from "./Tokens.svelte";
    import Transpiled from "./Transpiled.svelte";

    let input = `import sys
import glob
import serial
import serial.tools.list_ports
from pprint import pprint


import uuid


def getserialport():
    ports = serial.tools.list_ports.comports()

    if len(ports) < 1:
        print("No serial port connected")
        exit(1)
        
    return ports[0]

if __name__ == '__main__':
    # print(serial_ports())

    port = getserialport()
    s = serial.Serial(port.device, 115200)

    uid = uuid.uuid4()


    print("Waiting for card")


    s.close()`;
    let codeInput = "";

    /**
     * @type {import('tokenizr').Token[]}
     */
    let tokens = [];

    /**
     * @type {any}
     */
    let astRoot = null;


    export let astNodeName = "";
    export let children = [];
    export let indent = 0;

    let open = true;

    function toggleOpen() {
        open = !open;
    }

    function parse() {
        tokens = [];
        tokenizer.input(input);
        while (true) {
            try {
                tokens[tokens.length] = tokenizer.token();
            } catch (error) {
                if (error instanceof tokenizr.ParsingError) {
                    tokens[tokens.length] = {
                        type: "ERROR",
                        value: error.cause,
                        text: error.name,
                        pos: error.pos,
                        line: error.line,
                        column: error.column,
                    };
                }
                console.error(error);
                break;
            }

            if (tokens[tokens.length - 1].type == "EOF") {
                break;
            }
        }

        const charsInputStream = new antlr4.InputStream(input);
        const lexer = new Python3Lexer(charsInputStream);
        const tokenNames = lexer.getTokenNames();

        // tokens = new Python3Lexer(new antlr4.InputStream(input))
        //     .getAllTokens()
        //     .map((t) => {

        //         return {
        //             type: tokenNames[t.type],
        //             value: t.text,
        //             text: t.text,
        //             pos: t.start,
        //             line: t.line,
        //             column: t.column,
        //         };
        //     });

        const tokensStream = new antlr4.CommonTokenStream(lexer);
        const parser = new Python3Parser(tokensStream);
        astRoot = parser.file_input();

        // console.log(treeCtx.accept(new MyVisitor()));

        codeInput = input
    }

    let tab = 1;
</script>

<svelte:head>
    <title>Parser</title>
    <meta name="description" content="Parser" />
</svelte:head>

<section>
    <h1 class="title">Parse Python</h1>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
        <div>
            <div>
                <button on:click={parse} class="parse">Parse</button>
            </div>

            <div>
                <textarea
                    name="input"
                    id="input"
                    cols="80"
                    rows="20"
                    bind:value={input}
                ></textarea>
            </div>
        </div>

        <div class="tokens">
            <div class="tabs">
                <button class:active={tab==1} on:click={() => (tab = 1)}>Tokens</button>
                <button class:active={tab==2}  on:click={() => (tab = 2)}>AST</button>
                <button class:active={tab==3}  on:click={() => (tab = 3)}>Transpiler</button>
            </div>

            {#if tab == 1}
                <div class="code">
                    <h3 style="margin-bottom: 1rem;">Tokens</h3>
                    <Tokens {tokens}></Tokens>
                </div>
            {:else if tab == 2}
                <div class="tree">
                    <h3 style="margin-bottom: 1rem;">AST Arbol</h3>
                    <Node {...astRoot} />
                </div>
            {:else}
                <div class="code">
                    <Transpiled input={codeInput}></Transpiled>
                </div>
            {/if}
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    textarea {
        min-height: 100dvh;
        margin: auto;
        border: 2px black solid;
        padding: 8px;
    }

    .tokens {
        width: 100%;
        max-width: 100%;
        /* height: 100dvh; */
        min-height: 100dvh;
        margin: auto;
    }

    .tabs {
        display: flex;
        /* padding-left: 5px; */
    }

    .tabs button {
        margin-right: 1rem;

        color: rgba(var(--main-color), 1);
        font-weight: 800;
        text-transform: uppercase;
        border: none;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
        background-color: rgba(var(--main-color), 0.3);
        backdrop-filter: blur(10px);

        transition: all 150ms ease-in-out;
    }
    .tabs button.active {
        margin-left: 3px;

        outline: 3px;
        outline-color: rgba(var(--main-color), 1);
        outline-style: solid;

        transition: all 150ms ease-in-out;
    }
</style>
