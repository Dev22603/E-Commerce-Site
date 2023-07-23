function storeData() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    alert(email);

    localStorage.setItem('e', email);
    localStorage.setItem('p', pass);
    alert(localStorage.getItem('e'));
    alert(localStorage.getItem('p'));
}
function fetchData() {

    var Email = localStorage.getItem('e');
    var Pwd = localStorage.getItem('p');
    var userEmail = document.getElementById('email');
    var userPw = document.getElementById('password');

    
    if(userEmail.value === Email && userPw.value === Pwd){
        alert('You are logged in.');
        window.location.replace("prod.html");
    }else{
        alert('Error on login');
    }
}
