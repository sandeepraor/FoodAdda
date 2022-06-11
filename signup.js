function toggleButton() {
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;

  if (name == "" && number == "") {
    document.getElementById("submitButton").disabled = true;
  } else {
    document.getElementById("submitButton").disabled = false;
  }
}

function myFun() {
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;

  if (name == "") {
    document.getElementById("message2").innerHTML = "";
    document.getElementById("message").innerHTML = "**Please enter username";
    return false;
  } else {
    document.getElementById("message").innerHTML = "";
    document.getElementById("message2").innerHTML = "Looks Good!!";
  }

  if (name.length <= 4) {
    document.getElementById("message2").innerHTML = "";
    document.getElementById("message").innerHTML =
      "**Username must be greater than 4 characters";
    return false;
  }

  if (name.length > 10) {
    document.getElementById("message2").innerHTML = "";
    document.getElementById("message").innerHTML =
      "**Username must be lesser than 10 characters";
    return false;
  }

  if (number == "") {
    document.getElementById("message1").innerHTML =
      "**Please fill mobile number";
    return false;
  }

  if (isNaN(number)) {
    document.getElementById("message1").innerHTML =
      "**Only didgits are allowed";
    return false;
  }
  if (number.length < 10) {
    document.getElementById("message1").innerHTML =
      "**Mobile number must be 10digit";
    return false;
  }
  if (number.length > 10) {
    document.getElementById("message1").innerHTML =
      "**Mobile number must be 10digit";
    return false;
  }
  if (number.charAt(0) != 9 && number.charAt(0) != 8 && number.charAt(0) != 7) {
    document.getElementById("message1").innerHTML =
      "**Mobile number must start with 9 or 8 or 7";
    return false;
  }
}

// var test = document.getElementById("name");
// console.log(test);

// var number = document.getElementById("number").value;
// console.log(number);

// var test2 = document.getElementById("message");
// console.log(test2);

// var test3 = document.getElementById("submitButton");
// console.log(test3);

// var test4 = document.getElementsByClassName("container");
// console.log(test4);

// var test5 = document.getElementsByClassName("d-grid gap-2");
// console.log(test5);

// var test6 = document.getElementsByClassName("form-control");
// console.log(test6);

// var test7 = document.getElementsByClassName("form-control[1]");
// console.log(test7);
// // test7.style.backgroundColor = "yellow";

// var test8 = document.getElementsByTagName("h2");
// // console.log(test8);
// test8.textContent = "Come On";
// console.log(test8);

// var test9 = document.getElementById("head");
// test9.textContent = "Come On";
// // console.log(test9);

// var test10 = document.querySelector("input");
// test10.value = "Hello";
// console.log(test10);

// var test11 = document.querySelectorAll("input");
// // test10.value = "Hello";
// console.log(test11);

// test11[1].value = "Pranav";
// test11[1].style.backgroundColor = "red";
