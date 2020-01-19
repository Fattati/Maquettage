function validation(){
    var email = document.getElementById("input1").value;


function validEmail(email){
                   
    var exp =  new RegExp(/^[A-Za-z-0-9-_.]+@[A-Za-z]{4,7}.[A-Za-z]{2,3}$/);
    var valid = exp.test(email);
      
      if(valid){
        
          return true;
          
        }
     else{
      console.log("message");
        return false;
     }
      
    }
  function validMesage(msg){
   
    if(msg.length<=250){
           return true;
     }
     else{
        return false;
     }
}