
const playButton = document.querySelector('button');

playButton.addEventListener('click', function () {
   generateCode()
});

function generateCode() {

  var sygusSolution = document.getElementById('sygus').value;

  //a bit of string manipulations to pick apart the bits we want
  var extractDef = new RegExp(/\(.*?\)\) [^ ]* /);
  var fxnDef = sygusSolution.replace(extractDef, "").slice(0, -1);
  var fxnName = sygusSolution.split(" ")[1];

  console.log(astToJs(smt_parser(fxnDef)))
}
