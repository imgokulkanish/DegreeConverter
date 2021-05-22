function convertToCelcius(){
  var far=document.getElementById('faren').value;
  var cel=(far-32)*(5/9)
  document.getElementById('cel').value = cel.toFixed(2)
}
function convertToFahrenheit(){
  var cel=document.getElementById('cel').value;
  var far=(9/5)*cel+32
  document.getElementById('faren').value = far
}
