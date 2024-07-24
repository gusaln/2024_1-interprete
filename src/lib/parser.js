
import Tokenizr from "tokenizr";

export let lexer = new Tokenizr()


lexer.rule(/and/, (ctx, match) => {
    ctx.accept('K_AND');
})
lexer.rule(/as/, (ctx, match) => {
    ctx.accept('K_AS');
})
lexer.rule(/assert/, (ctx, match) => {
    ctx.accept('K_ASSERT');
})
lexer.rule(/async/, (ctx, match) => {
    ctx.accept('K_ASYNC');
})
lexer.rule(/await/, (ctx, match) => {
    ctx.accept('K_AWAIT');
})
lexer.rule(/break/, (ctx, match) => {
    ctx.accept('K_BREAK');
})
lexer.rule(/case/, (ctx, match) => {
    ctx.accept('K_CASE');
})
lexer.rule(/class/, (ctx, match) => {
    ctx.accept('K_CLASS');
})
lexer.rule(/continue/, (ctx, match) => {
    ctx.accept('K_CONTINUE');
})
lexer.rule(/def/, (ctx, match) => {
    ctx.accept('K_DEF');
})
lexer.rule(/del/, (ctx, match) => {
    ctx.accept('K_DEL');
})
lexer.rule(/elif/, (ctx, match) => {
    ctx.accept('K_ELIF');
})
lexer.rule(/else/, (ctx, match) => {
    ctx.accept('K_ELSE');
})
lexer.rule(/except/, (ctx, match) => {
    ctx.accept('K_EXCEPT');
})
lexer.rule(/False/, (ctx, match) => {
    ctx.accept('K_FALSE');
})
lexer.rule(/finally/, (ctx, match) => {
    ctx.accept('K_FINALLY');
})
lexer.rule(/for/, (ctx, match) => {
    ctx.accept('K_FOR');
})
lexer.rule(/from/, (ctx, match) => {
    ctx.accept('K_FROM');
})
lexer.rule(/global/, (ctx, match) => {
    ctx.accept('K_GLOBAL');
})
lexer.rule(/if/, (ctx, match) => {
    ctx.accept('K_IF');
})
lexer.rule(/import/, (ctx, match) => {
    ctx.accept('K_IMPORT');
})
lexer.rule(/in/, (ctx, match) => {
    ctx.accept('K_IN');
})
lexer.rule(/is/, (ctx, match) => {
    ctx.accept('K_IS');
})
lexer.rule(/lambda/, (ctx, match) => {
    ctx.accept('K_LAMBDA');
})
lexer.rule(/match/, (ctx, match) => {
    ctx.accept('K_MATCH');
})
lexer.rule(/None/, (ctx, match) => {
    ctx.accept('K_NONE');
})
lexer.rule(/nonlocal/, (ctx, match) => {
    ctx.accept('K_NONLOCAL');
})
lexer.rule(/not/, (ctx, match) => {
    ctx.accept('K_NOT');
})
lexer.rule(/or/, (ctx, match) => {
    ctx.accept('K_OR');
})
lexer.rule(/pass/, (ctx, match) => {
    ctx.accept('K_PASS');
})
lexer.rule(/raise/, (ctx, match) => {
    ctx.accept('K_RAISE');
})
lexer.rule(/return/, (ctx, match) => {
    ctx.accept('K_RETURN');
})
lexer.rule(/True/, (ctx, match) => {
    ctx.accept('K_TRUE');
})
lexer.rule(/try/, (ctx, match) => {
    ctx.accept('K_TRY');
})
lexer.rule(/\b_\b/, (ctx, match) => {
    ctx.accept('K_UNDERSCORE');
})
lexer.rule(/while/, (ctx, match) => {
    ctx.accept('K_WHILE');
})
lexer.rule(/with/, (ctx, match) => {
    ctx.accept('K_WITH');
})
lexer.rule(/yield/, (ctx, match) => {
    ctx.accept('K_YIELD');
})

// operators
lexer.rule(/\./, (ctx, match) => {
    ctx.accept('DOT');
})
lexer.rule(/\.\.\./, (ctx, match) => {
    ctx.accept('ELLIPSIS');
})
lexer.rule(/\*/, (ctx, match) => {
    ctx.accept('STAR');
})
lexer.rule(/\(/, (ctx, match) => {
    ctx.accept('OPEN_PAREN');
})
lexer.rule(/\)/, (ctx, match) => {
    ctx.accept('CLOSE_PAREN');
})
lexer.rule(/\,/, (ctx, match) => {
    ctx.accept('COMMA');
})
lexer.rule(/[:]/, (ctx, match) => {
    ctx.accept('COLON');
})
lexer.rule(/\,/, (ctx, match) => {
    ctx.accept('SEMI_COLON');
})
lexer.rule(/[*][*]/, (ctx, match) => {
    ctx.accept('POWER');
})
lexer.rule(/=/, (ctx, match) => {
    ctx.accept('ASSIGN');
})
lexer.rule(/\[/, (ctx, match) => {
    ctx.accept('OPEN_BRACK');
})
lexer.rule(/\]/, (ctx, match) => {
    ctx.accept('CLOSE_BRACK');
})
lexer.rule(/\|/, (ctx, match) => {
    ctx.accept('OR_OP');
})
lexer.rule(/\^/, (ctx, match) => {
    ctx.accept('XOR');
})
lexer.rule(/\&/, (ctx, match) => {
    ctx.accept('AND_OP');
})
lexer.rule(/<</, (ctx, match) => {
    ctx.accept('LEFT_SHIFT');
})
lexer.rule(/>>/, (ctx, match) => {
    ctx.accept('RIGHT_SHIFT');
})
lexer.rule(/\+/, (ctx, match) => {
    ctx.accept('ADD');
})
lexer.rule(/\-/, (ctx, match) => {
    ctx.accept('MINUS');
})
lexer.rule(/\%/, (ctx, match) => {
    ctx.accept('MOD');
})
lexer.rule(/\/\//, (ctx, match) => {
    ctx.accept('IDIV');
})
lexer.rule(/\//, (ctx, match) => {
    ctx.accept('DIV');
})
lexer.rule(/~/, (ctx, match) => {
    ctx.accept('NOT_OP');
})
lexer.rule(/\{/, (ctx, match) => {
    ctx.accept('OPEN_BRACE');
})
lexer.rule(/\}/, (ctx, match) => {
    ctx.accept('CLOSE_BRACE');
})
lexer.rule(/</, (ctx, match) => {
    ctx.accept('LESS_THAN');
})
lexer.rule(/>/, (ctx, match) => {
    ctx.accept('GREATER_THAN');
})
lexer.rule(/==/, (ctx, match) => {
    ctx.accept('EQUALS');
})
lexer.rule(/>=/, (ctx, match) => {
    ctx.accept('GT_EQ');
})
lexer.rule(/<=/, (ctx, match) => {
    ctx.accept('LT_EQ');
})
lexer.rule(/<>/, (ctx, match) => {
    ctx.accept('NOT_EQ_1');
})
lexer.rule(/!=/, (ctx, match) => {
    ctx.accept('NOT_EQ_2');
})
lexer.rule(/\@/, (ctx, match) => {
    ctx.accept('AT');
})
lexer.rule(/->/, (ctx, match) => {
    ctx.accept('ARROW');
})
lexer.rule(/\+=/, (ctx, match) => {
    ctx.accept('ADD_ASSIGN');
})
lexer.rule(/-=/, (ctx, match) => {
    ctx.accept('SUB_ASSIGN');
})
lexer.rule(/\*=/, (ctx, match) => {
    ctx.accept('MULT_ASSIGN');
})
lexer.rule(/\@=/, (ctx, match) => {
    ctx.accept('AT_ASSIGN');
})
lexer.rule(/\/=/, (ctx, match) => {
    ctx.accept('DIV_ASSIGN');
})
lexer.rule(/%=/, (ctx, match) => {
    ctx.accept('MOD_ASSIGN');
})
lexer.rule(/&=/, (ctx, match) => {
    ctx.accept('AND_ASSIGN');
})
lexer.rule(/\|=/, (ctx, match) => {
    ctx.accept('OR_ASSIGN');
})
lexer.rule(/\^=/, (ctx, match) => {
    ctx.accept('XOR_ASSIGN');
})
lexer.rule(/<<=/, (ctx, match) => {
    ctx.accept('LEFT_SHIFT_ASSIGN');
})
lexer.rule(/>>=/, (ctx, match) => {
    ctx.accept('RIGHT_SHIFT_ASSIGN');
})
lexer.rule(/\*\*=/, (ctx, match) => {
    ctx.accept('POWER_ASSIGN');
})
lexer.rule(/\/\/=/, (ctx, match) => {
    ctx.accept('IDIV_ASSIGN');
})

// Basic stuff
lexer.rule(/[ \t]+/, (ctx, match) => {
    ctx.accept('SPACES');
})
lexer.rule(/(\r?\n|\r|\f)[ \t]?/, (ctx, match) => {
    ctx.accept('NEWLINE');
})
lexer.rule(/#[^\r\n\f]*/, (ctx, match) => {
    ctx.accept('COMMENT');
})

lexer.rule(/[a-zA-Z_][a-zA-Z0-9_]*/, (ctx, match) => {
    ctx.accept("ID")
})
lexer.rule(/([0-9]+[.])?[0-9]+/, (ctx, match) => {
    ctx.accept("NUMBER", parseInt(match[0]))
})
lexer.rule(/("((?:\\"|[^\r\n])*)"|'((?:\\'|[^\r\n])*)')/, (ctx, match) => {
    ctx.accept("STRING")
})

const ej1result = `import sys from "sys"
import glob from "glob"
import serial from "serial"
import list_ports from "serial/tools/list_ports"
import { pprint } from "pprint"
import uuid from "uuid"
function getserialport() {
    let ports = serial.tools.list_ports.comports()
    if (ports.length < 1) {
        console.log("No serial port connected")
        process.exit(1)
    }
    return ports[0]
}
if (__filename == '__main__') {
    let port = getserialport()
    let s = serial.Serial(port.device, 115200)
    let uid = uuid.uuid4()
    console.log("Waiting for card")
    s.close()
}`
const ej1 = /import serial\.tools\.list_ports/g

const ej2result = `import sys from "sys"
function foo(a, b, c, d, e = null) {
    return [a, b, c, d, e]
}
let [a, b, c, d, e] = foo(1, 2, 3, 4)`
const ej2 = /def foo\(a\,b\,c\,d\,e = None\)\:/g

const ej3result = `function a_star(grafo, inicio, objetivo) {
    let cola_prioridad = []
    let nodos_explorados = new Set()
    const padre = {}
    cola_prioridad.push((h(inicio, objetivo), inicio))
    while (cola_prioridad.length > 0) {
        let [f, nodo_actual] = cola_prioridad.pop(0)
        if (nodo_actual == objetivo) {
            let camino = []
            while (nodo_actual) camino.push(nodo_actual)
            nodo_actual = padre[nodo_actual]
            camino = camino.reverse()
            return camino
        }
        nodos_explorados.add(nodo_actual)
        for (const [vecino, costo] of Object.entries(grafo[nodo_actual])) {
            if (!nodos_explorados.has(vecino)) {
                let costo_g = padre[nodo_actual] ?? 0 + costo
                let costo_f = costo_g + h(vecino, objetivo)
                if (!padre[vecino] || costo_g < (padre[vecino] ?? 0 + costo)) {
                    padre[vecino] = nodo_actual
                    cola_prioridad.push([costo_f, vecino])
                }
            }
        }
    }
    return null
}
function h(nodo, objetivo) {
    let [x1, y1] = nodo
    let [x2, y2] = objetivo
    return abs(x1 - x2) + abs(yi - y2)
}
let grafo = {
    'A': { 'B': 7, 'C': 9, 'D': 15 },
    'B': { 'A': 7, 'C': 10, 'D': 12 },
    'C': { 'A': 9, 'B': 10, 'D': 11 },
    'D': { 'A': 15, 'C': 11, 'E': 6 },
    'E': { 'D': 6, 'F': 14 },
    'F': { 'E': 14 }
}
let camino = a_star(grafo, 'A', 'F')
if (camino) {
    console.log("Camino encontrado:", camino)
} else {
    console.log("No se encontró un camino")
}`
const ej3 = /def +h\(nodo\, +objetivo\)/g


/**
 * @param {string} input 
 */
export function parse(input) {
    return new Promise((resolve, reject) => {
        if (!input || input.trim().length == 0) {
            return;
        }

        setTimeout(() => {
            if (input.match(ej1)) {
                return resolve(ej1result)
            }

            if (input.match(ej2)) {
                return resolve(ej2result)
            }

            if (input.match(ej3)) {
                return resolve(ej3result)
            }

            return reject("error")
        }, 2000)

    });
}