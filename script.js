document.addEventListener("keyup", function(e) {
  console.log(`[KeyBoard Event : UP - ${e.code}]`);
});

$("botton").click(function() {
  console.log(`Button click.`);
});

let expression = "";
let display = document.querySelector("#display");

document.addEventListener("keydown", function(e) {
  let code = e.code;
  // alert(`{ ${code}, ${key}, ${keyCode}, ${char}}`);
  if (code === "Enter" || (code === "Equal" && !e.shiftKey)) {
    let result = math.evaluate(expression);
    alert(result);
    expression = "";
  } else if (code === "ShiftLeft" || code === "ShiftRight") {
  } else if (code === "Backspace") {
    expression = expression.slice(0, -1);
  } else {
    expression += e.key;
    console.log("exp : " + expression);
  }
  display.value = expression;
});
