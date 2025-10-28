let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let currentMode = "COMP";
let shiftMode = false;
let alphaMode = false;

function powerOn() {
  line1.textContent = "Mode: " + currentMode;
  line2.textContent = "";
}

function setMode(mode) {
  currentMode = mode;
  line1.textContent = "Mode: " + mode;
  line2.textContent = "";
}

function toggleShift() {
  shiftMode = !shiftMode;
  alphaMode = false;
  line1.textContent = shiftMode ? "SHIFT mode" : "Mode: " + currentMode;
}

function toggleAlpha() {
  alphaMode = !alphaMode;
  shiftMode = false;
  line1.textContent = alphaMode ? "ALPHA mode" : "Mode: " + currentMode;
}

function insert(value) {
  if (shiftMode) {
    if (value === 'sin(') value = 'asin(';
    if (value === 'cos(') value = 'acos(';
    if (value === 'tan(') value = 'atan(';
    if (value === 'log(') value = 'ln(';
    shiftMode = false;
    line1.textContent = "Mode: " + currentMode;
  } else if (alphaMode) {
    if (value === '1') value = 'A';
    if (value === '2') value = 'B';
    if (value === '3') value = 'C';
    alphaMode = false;
    line1.textContent = "Mode: " + currentMode;
  }

  line2.textContent += value;
}

function clearDisplay() {
  line1.textContent = "";
  line2.textContent = "";
}

function delChar() {
  line2.textContent = line2.textContent.slice(0, -1);
}

function calculate() {
  try {
    line1.textContent = line2.textContent;
    line2.textContent = eval(line2.textContent);
  } catch {
    line2.textContent = "Error";
  }
}


