// var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmpassword = document.getElementById("confirmpassword");
var upper = document.getElementById("upper");
var lower = document.getElementById("lower");
var special_char = document.getElementById("special_char");
var length = document.getElementById("length");
var number = document.getElementById("number");
// var loginbutton = document.getElementById("button");
var arr = [];
var signUpUser = [];
var id = 1;
console.log("signUpUser", signUpUser);
function validate() {
  let nameFlag = 0;
  let emailFlag = 0;
  let passwordFlag = 0;
  let confirmPasswordFlag = 0;
  const name = document.getElementById("name");
  if (validateName(name)) {
    document.getElementById("namePara").innerHTML = "";
    nameFlag = 1;
  } else {
    document.getElementById("namePara").innerHTML =
      "Name should at least contain 3 or more characters.";
    nameFlag = 0;
  }
  if (validateEmail(email)) {
    document.getElementById("emailPara").innerHTML = "";
    emailFlag = 1;
  } else {
    document.getElementById("emailPara").innerHTML =
      "Please enter valid email.";
    emailFlag = 0;
  }
  if (validatePassword(password)) {
    document.getElementById("passwordPara").innerHTML = "";
    passwordFlag = 1;
  } else {
    document.getElementById("passwordPara").innerHTML =
      "Password should contain at least 1 capital letter, 1 small, 1 number and 1 special characters. Also password can't be same as name or email";
    passwordFlag = 0;
  }
  if (validateConfirmPassword(confirmpassword)) {
    document.getElementById("confirmpasswordPara").innerHTML = "";
    confirmPasswordFlag = 1;
  } else {
    document.getElementById("confirmpasswordPara").innerHTML =
      "Confirm Password doesn't match with Password";
    confirmPasswordFlag = 0;
  }
  console.log("nameFlag", nameFlag);
  console.log("emailFlag", emailFlag);
  console.log("passwordFlag", passwordFlag);
  console.log("confirmPasswordFlag", confirmPasswordFlag);
  if (nameFlag && emailFlag && passwordFlag && confirmPasswordFlag) {
    console.log("name.value", name.value);
    console.log("email.value", email.value);
    console.log("password.value", password.value);
    // console.log("name.value",name.value,);
    signUpUser.push({
      id: id,
      name: name.value,
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("signUpUser", JSON.stringify(signUpUser));
    window.open("/login.html", "_self");
  }
  // window.location.replace("/login.html");

  // window.open("/login.html", "_self", "noopener,noreferrer");
  //   signUpUser.push({
  //     id: id,
  //     name: name.value,
  //     email: email.value,
  //     password: password.value,
  //   });
  //   sessionStorage.setItem("signUpUser", JSON.stringify(signUpUser));
  console.log("signUpUser", signUpUser);
  id = id + 1;
}

function validateName(name) {
  if (name.value.length > 2) return true;
  return false;
}

function validateEmail(email) {
  //   console.log("email", email);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) return true;
  return false;
}

// 1 capital letter, 1 small, 1 number and 1 special characters, but password cannot be the same as name or email.

function validatePassword(password) {
  console.log("password", password.value);
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  if (password.value === name || password.value === email) return false;
  var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
  if (password.value.match(decimal)) return true;
  else return false;
}

function validateConfirmPassword(confirmpassword) {
  console.log("passconfirmpasswordword", confirmpassword.value);
  const password = document.getElementById("password");
  if (
    confirmpassword.value.length > 0 &&
    password.value === confirmpassword.value
  )
    return true;
  return false;
}






passwordBOx.setAttribute('type','text')

function nextpage() {
  window.location = "login page.html";
}

function passvalue(){
var email = document.getElementById("email").value;
localStorage.setItem("textvalue",email);
return false;
}

function passvalue1(){
  var password = document.getElementById("password").value;
  localStorage.setItem("textvalue",password);
  return false;
  }