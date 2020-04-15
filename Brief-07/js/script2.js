



// popup 2
var nom = document.getElementById("nomClient");
var age = document.getElementById("age");
var loc = document.getElementById("locationP");
var res = document.getElementById("reserve");
var cancel = document.getElementById("cancel");

res.addEventListener("click",function(){
	if(document.getElementById("inp1").value == "" || document.getElementById("inp2").value == "" || document.getElementById("inp3").value == ""){
		alert("Fill the Form");
	}
	else{
		nom.innerText = document.getElementById("inp1").value;
		age.innerText = document.getElementById("inp2").value;
		loc.innerText = document.getElementById("inp3").value;
		document.getElementById("myForm2").style.display = "block";
		document.getElementById("myForm").style.display = "none";
	}

});

cancel.addEventListener("click", function(){
	document.getElementById("inp1").value = "";
	document.getElementById("inp2").value = "";
	document.getElementById("inp3").value = "";
	document.getElementById("myForm2").style.display = "none";


	document.getElementById("myForm").style.display = "block";
	

})

// popup

function openForm() {
	document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {

	document.getElementById("myForm").style.display = "none";
  }		

//   Validation Email
function nameValidation(email){
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(email);
  }
  function validation(){
	var email = document.getElementById("input1").value;
	if(email == ""){
	  alert("Entre Your Email");
	}
	else{
	  if(nameValidation(email))
	  {
		alert("Done");
	  }
	  else {
		alert("Email is not Valid");
	  }
	}
  
  } 

//   Password Confirmation

function Validate() {
	var password = document.getElementById("txtPassword").value;
	var confirmPassword = document.getElementById("txtConfirmPassword").value;
	if (password != confirmPassword) {
		alert("Passwords do not match.");
		return false;
	}
	return true;
}


