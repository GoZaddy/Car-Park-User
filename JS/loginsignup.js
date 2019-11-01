const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
var overlay = document.getElementById("overlay-container");
var link1 = document.getElementById("sign-up-link");
var link2 = document.getElementById("sign-in-link");
var signInContainer=  document.getElementById("sign-in-container1");
var signUpContainer=  document.getElementById("sign-up-container1");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
  signInContainer.style.display="none";

});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
  signInContainer.style.display="block";
});

link1.addEventListener("click", function(){
  signInContainer.style.display="none";
  signUpContainer.style.display="block";
  signUpContainer.style.opacity="1";
  signUpContainer.style.width="100%";

});
link2.addEventListener("click", function(){
signUpContainer.style.display="none";
signInContainer.style.display="block";
signInContainer.style.opacity="1";
signInContainer.style.width="100%";
});







function checkForm(){
  var username = document.forms["RegForm"]["username"];
  var email = document.forms["RegForm"]["email"];
  var pword = document.forms["RegForm"]["pword"];

  if(username.value== ""){
    window.alert("Please enter your name.");
    username.focus();
    return false;
  }
  re= /^\w+$/;
  if(!re.test(username.value)){
    window.alert("Your name must contain only letters, numbers and underscore.");
    username.focus;
    return false;
  }
  if(pword.value != ""){
    if(pword.value.length < 6){
      window.alert("Your password must not be less than six characters.");
      pword.focus();
      return false; 
    }
    if(pword.value==username.value){
      window.alert("Your password and Username must not be the same.")
      pword.focus();
      return false;
    }
    re= /[0-9]/;
    if(!re.test(pword.value)){
      window.alert("Password should contain at least one number(0-9).")
      pword.focus();
      return false;
    }
    re= /[a-z]/;
    if(!re.test(pword.value)){
      window.alert("Password should contain at least one lowercase letter(a-z).")
      pword.focus();
      return false;
    }
    re= /[A-Z]/;
    if(!re.test(pword.value)){
      window.alert("Password should contain at least one uppercase letter(A-Z).")
      pword.focus();
      return false;
  }
  window.alert("REGISTRATION COMPLETE!")
  return true
}
}
