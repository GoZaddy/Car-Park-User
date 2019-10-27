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