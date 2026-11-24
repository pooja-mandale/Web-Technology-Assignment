/**
 * Module 01 - Login Page Script
 * Web Technology Assignment 01
 * Vanilla JavaScript Form Validation
 */

function login() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const msg = document.getElementById("msg");

  if (!user || !pass) {
    msg.innerText = "Enter username and password.";
    msg.className = "msg-error";
  } else {
    msg.innerText = "Login details entered! Login successful.";
    msg.className = "msg-success";
  }
}
