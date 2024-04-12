var typingText = new Array("Write without pauses", "If you stop, everything", "will be deleted...")
var iSpeed = 100;
var iIndex = 0;
var iArrLength = typingText[0].length;
var iScrollAt = 10;
var iTextPos = 0;
var sContents = '';
var iRow;

function typeWriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex-iScrollAt);
  var destination = document.getElementById("typedtext");
  while (iRow < iIndex) {
    sContents += typingText[iRow++] + '<br />'};
  destination.innerHTML = sContents + typingText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != typingText.length ) {
   iArrLength = typingText[iIndex].length;
   setTimeout("typeWriter()", 500);
  }
 } else {
    setTimeout("typeWriter()", iSpeed);
 }
}

typeWriter();

function toggle_textarea() {
  var textArea = document.getElementById("hidden");
  var copyBtn = document.getElementById("copyToClipboard-a");

  if (textArea.classList.contains("hidden")) {
      textArea.classList.remove("hidden");
      copyBtn.style.display = 'block';
  } else {
      textArea.classList.add("hidden");
      copyBtn.style.display = 'none';
  }
}

let warningTimer;
let deletionTimer;
const warningTimeout = 2000;
const deletionTimeout = 5000;

const typer = document.getElementById('textArea');

typer.addEventListener('input', handleInput);

function handleInput(event)  {
  clearTimeout(warningTimer);
  clearTimeout(deletionTimer);
  typer.style.color = 'black';
  warningTimer = setTimeout(() => {
    typer.style.color = 'red';
  }, warningTimeout);

  deletionTimer = setTimeout(() => {
   typer.value = '';
  }, deletionTimeout);
 }


document.getElementById('copyToClipboard-a').addEventListener('click', function() {
  var text = document.getElementById('textArea');
  text.select();
  document.execCommand('copy');
});