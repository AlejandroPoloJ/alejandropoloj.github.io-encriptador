const textArea = document.querySelector(".txt-area");
const btnCopy = document.querySelector(".btn-copiar");
const imgMunieco = document.querySelector(".munieco");
const msjInfo = document.querySelector(".msj-info");
const msjOutput = document.querySelector(".msj-output");
const ouputArea = document.getElementById("output-area");

const HIDDEN_CLASS = "hidden";
const ENCRYPTED_CLASS = "txt-encripted";

function hideBtnCopy(){
  btnCopy.classList.add(HIDDEN_CLASS);
}

hideBtnCopy();

function getText(){
    return textArea.value;
}

function showAlert() {
  swal("Ooops!", "¡Debe ingresar un texto!", "warning");
}

function showResult(textoCifrado) {
  btnCopy.classList.remove(HIDDEN_CLASS);
  imgMunieco.classList.add(HIDDEN_CLASS);
  msjInfo.classList.add(HIDDEN_CLASS);
  msjOutput.classList.add(ENCRYPTED_CLASS);
  textArea.value = "";
  msjOutput.textContent = textoCifrado;
}

function setOutputStyle() {
  if (screen.width > 750 && screen.width < 1450) {
    ouputArea.style.height = '40vh';
    msjOutput.style.left = '1%';
    msjOutput.style.width = '66vw';
    msjOutput.style.top = '5vh';
  } else if (screen.width < 750) {
    ouputArea.style.height = '60vh';
    msjOutput.style.left = '1%';
    msjOutput.style.width = '70vw';
    msjOutput.style.top = '5vh';
  }
}

function encrypt() {
  if (getText().length !== 0) {
    let txtEncrypt = getText()
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    showResult(txtEncrypt);
    setOutputStyle();
  } else {
    showAlert();
  }
}

function decrypt() {
  if (getText().length !== 0) {
    let textDecrypt = getText()
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    showResult(textDecrypt);
    setOutputStyle();
  } else {
    showAlert();
  }
}

btnCopy.addEventListener("click", copy = () => {
  navigator.clipboard.writeText(msjOutput.textContent);
})

