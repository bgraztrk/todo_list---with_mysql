const inputUserName = document.querySelector('#inputUserName');
const inputPassword = document.querySelector('#inputPassword');
const inputEmail = document.querySelector('#inputEmail');
const inputAdress = document.querySelector('#inputAdress');
const btnRegister = document.querySelector('#btnRegister');
eventListeners();

function eventListeners(){
    btnRegister.addEventListener("click",sendDB);
}

function sendDB(e){
    
    e.preventDefault();

    if(inputUserName.value == "" || inputPassword.value == "" || inputEmail.value == "" || inputAdress.value == ""){
        
        alert("please do not leave blank spaces...")
    }
    else{

        $.ajax({
            url: "http://localhost/live/register.php",
            method: "POST",
            data: {
              "user_name":inputUserName.value.trim(),
              "password": inputPassword.value.trim(),
              "email":inputEmail.value.trim(),
              "adress":inputAdress.value.trim(),
              "type":'add',
            }
          }).done(function() {
            
            $( this ).addClass( "done" );
          });

          alert("Registration Successful");
    }


}