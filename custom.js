const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//단순히 string이라 대문자로표기

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  //로컬스토리지에 유저네임 저장

  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hi ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  paintGreetings(savedUsername);
}
