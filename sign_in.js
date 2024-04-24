const titlebar=document.getElementById('title');
const nameField=document.getElementById('name');
const loginbtn=document.getElementById('loginBtn');
const signinbtn=document.getElementById('signBtn');

signinbtn.onclick=function(){
    nameField.style.display="block";
    titlebar.innerHTML="sign up"
}

loginbtn.onclick=function(){
    nameField.style.display="none";
    titlebar.innerHTML="Login"
}