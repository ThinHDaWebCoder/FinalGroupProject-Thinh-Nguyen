



function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var cpw = document.getElementById('cpw')

    if(name.value.length == 0){
        alert('Please fill in email');
    }else if(pw.value.length <= 7){
        alert('Please set minimum password length to at least a value of 8');
    }else if(pw.value !== cpw.value){
        alert('your confirm password is wrong')
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        location.href="shop.html"
    }
}
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    if(userName.value == storedName && userPw.value == storedPw){
        location.href="shop.html"
    }else{
        alert('Error on login');
    }
}