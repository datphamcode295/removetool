var input = document.querySelector('.filein');
var output = document.querySelector('.fileout');
input.contentEditable=true;
output.contentEditable=true;
// Since Async Clipboard API is not supported for all browser!
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  
    document.body.removeChild(textArea);
  }
var getnumber = document.querySelector('#getnumber');
var reg;
let handleClick = ()=>{
    input = document.querySelector('.filein');
    var n = document.querySelector('#n').value;
    var temp = "\\n[\\S\\s]{" + n + "}";
    reg = new RegExp(temp,"g");
    var newtext = input.innerText.replace(reg,"\n");
    console.log(newtext, reg);
    output.innerText = newtext.substr(n,newtext.length);

    var text = output.innerText;
    copyTextToClipboard(text);
}
getnumber.addEventListener("click",()=>handleClick());


