const user_name = document.querySelector('#user-name');
const password = document.querySelector('#password');
const btnLogIn = document.querySelector('#btnLogIn');

eventListeners();

function eventListeners(){

    btnLogIn.addEventListener("click",login);
}

function login(e){
    e.preventDefault();
    
    if(user_name.value == "" || password.value == ""){
        alert("please do not leave blank spaces...")
    }else{

        $.ajax({
            url: "http://localhost/live/register.php",
            method: "POST",
            data: {
              "user_name":user_name.value.trim(),
              "password": password.value.trim(),
              "type":'query',
            }
          }).done(function(response) {
            $( this ).addClass( "done" );
            if(Number(response)){
                window.localStorage.setItem('user_id',response)
                window.localStorage.setItem('user_name',user_name.value)
                window.location.href = "todo_list.html"
                alert("Login successful...") 
            }else{
                alert("Username or password is incorrect...")
            }
          });

    }
}