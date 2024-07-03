<script>
    // import { lexer, Visitor } from "$lib/parser";
    // import tokenizr from "tokenizr";
    import Tokens from "./Tokens.svelte";
    import antlr4 from "antlr4";
    import Python3Lexer from "$lib/parser/Python3Lexer";
    import Python3Parser from "$lib/parser/Python3Parser";

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
    /**
     * @type {import('tokenizr').Token[]}
     */
    let tokens = [];

    $: tokensJson = JSON.stringify(tokens, null, 2);

    class MyVisitor extends antlr4.tree.ParseTreeVisitor {
        /**
         * @param {antlr4.ParserRuleContext} ctx
         */
        visitChildren(ctx) {
            if (!ctx) {
                return;
            }

            // if (ctx.children) {
            //     return ctx.children.map((child) => {
            //         if (child.children && child.children.length != 0) {
            //             return child.accept(this);
            //         } else {
            //             return child.getText();
            //         }
            //     });
            // }

            // console.log(ctx)
            return ctx
        }
    }

    function parse() {
        // tokens = []
        // lexer.input(input)
        // while (true) {
        // 	try {
        // 		tokens[tokens.length] = lexer.token()
        // 	} catch (error) {
        // 		if (error instanceof tokenizr.ParsingError) {
        // 			console.log({error})
        // 		}
        // 		console.error(error)
        // 		break;
        // 	}

        //     if (tokens[tokens.length-1] .type == "EOF") {
        //         break
        //     }
        // }

        // console.table(new Python3Lexer(new antlr4.InputStream(input)).getAllTokens())

        const chars = new antlr4.InputStream(input);
        const lexer = new Python3Lexer(chars);
        
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new Python3Parser(tokens);
        const tree = parser.file_input();

        console.log(tree.accept(new MyVisitor()))
    }
</script>

<svelte:head>
    <title>Parser</title>
    <meta name="description" content="Parser" />
</svelte:head>

<section>
    <h1 class="title">Parse Python</h1>

    <h2></h2>

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
            <Tokens {tokens}></Tokens>
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
        border: 2px black solid;
        background-color: white;
        padding: 8px;
    }
</style>
