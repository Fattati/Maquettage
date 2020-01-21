function nameValidation(nom){
  var letters =/^[A-Za-z ]+$/;
  return letters.test(nom);
}
function validation(){
  var text = document.getElementById("input1").value;
  if(text == ""){
    alert("Write your message");
  }
  else{
    if(nameValidation(text))
    {
      alert("message send");
    }
    else {
      alert("message is not valide");
    }
  }

} 