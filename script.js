document.addEventListener("keyup", function(e) {
    console.log(`[KeyBoard Event : UP - ${e.code}]`);
});

$("botton").click(function() {
    console.log(`Button click.`);
});

let expression = "";
let current = 0;
let display = document.querySelector("#display").children[current];

document.addEventListener("keydown", function(e) {
    let code = e.code;
    // alert(`{ ${code}, ${key}, ${keyCode}, ${char}}`);
    if (code === "Enter" || (code === "Equal" && !e.shiftKey)) {
        try {
            let result = math.evaluate(expression);
            alert(result);
        } catch (event) {
            alert(expression.concat(" is invalid."));
        }
        expression = "";
    } else if (code === "ShiftLeft" || code === "ShiftRight") {} else if (code === "Backspace") {
        expression = expression.slice(0, -1);
    } else {
        expression += e.key;
        try {
            display.innerHTML = "$$".concat(math.parse(expression).toTex()).concat("$$");
            MathJax.typeset();
        } catch (event) {
//             alert(" toTex() ");
        }
    }
    display.value = expression;
});
