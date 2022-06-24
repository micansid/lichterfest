console.log("Javascript Calculator Made by Harsh Trivedi\nhttps://harsh98trivedi.github.io")

document.getElementById('answer').readOnly = true; //set this attribute in Html file
document.getElementById('answer2').readOnly = true; //set this attribute in Html file
let screen = document.getElementById('answer');
let screen2 = document.getElementById('answer2');
buttons = document.querySelectorAll('button');

var button_texts = []
var button_values = []
var counts = {}

bier_count = 0
pfand_count = 0
soft_count = 0

screen.value = calc()
screen2.value = desc()

function calc() {
    let result = 0
    for (let i = 0; i < button_texts.length; i++) {
        result = result + button_values[i] * counts[button_texts[i]]
    }
    //return bier_count * 7 + pfand_count * (-2) + soft_count * 4
    return result + ' €'
}

function desc() {
    let result = ''
    let elements = 0
    for (let i = 0; i < button_texts.length; i++) {
        if (counts[button_texts[i]]) {
            if (elements > 0) {
                result = result + '\n'
            }
            elements = elements + 1
            result = result + counts[button_texts[i]] + ' ' + button_texts[i]
        }
    }
    //return bier_count + ' Bier | ' + pfand_count + ' Pfand | ' + soft_count + ' Soft'
    return result
}

for (item of buttons) {
    buttonText = item.innerText;
    buttonValue = item.value;
    if (buttonText != 'C') {
        button_texts.push(buttonText)
        button_values.push(buttonValue)
        counts[buttonText] = 0
    }
}

let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        // console.log(buttonText, "has been pressed");
        buttonText = e.target.innerText;
        buttonValue = e.target.value;
        console.log(buttonValue)
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            for (let i = 0; i < button_texts.length; i++) {
                counts[button_texts[i]] = 0
            }
            screen.value = calc()
            screen2.value = desc()
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            counts[buttonText] = counts[buttonText] + 1
            screen.value = calc()
            screen2.value = desc()
        }

    })
}

  window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      screenValue = "";
      screen.value = screenValue;
      console.clear();
  }
