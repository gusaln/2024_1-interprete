import sys from "sys"
function foo(a, b, c, d, e = null) {
    return [a, b, c, d, e]
}
let [a, b, c, d, e] = foo(1, 2, 3, 4)