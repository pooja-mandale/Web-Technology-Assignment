/**
 * Module 01 - Login Page Script
 * Web Technology Assignment 01
 * Form Validation using Vanilla JavaScript with On-Screen Popups
 */

function showPopup(message, type = "info", duration = 3000) {
  let container = document.getElementById("popupContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "popupContainer";
    container.className = "popup-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `popup-toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="popup-close" onclick="this.parentElement.remove()" aria-label="Close">&times;</button>
  `;
  container.appendChild(toast);

  if (duration > 0) {
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px)";
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    }, duration);
  }
}

function login() {
  const userInput = document.getElementById("user");
  const passInput = document.getElementById("pass");
  const msgElement = document.getElementById("msg");

  const u = userInput ? userInput.value.trim() : "";
  const p = passInput ? passInput.value.trim() : "";

  if (u && p) {
    // Save authentication session
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("currentUser", u);

    // Display on-screen inline message
    msgElement.innerText = "Login details entered! Redirecting...";
    msgElement.className = "msg-success";

    // Display on-screen popup notification
    showPopup("✅ Login details entered! Redirecting to student marks...", "success", 2000);

    // Redirect to Student Marks Table (Module 02) after a brief delay
    setTimeout(() => {
      window.location.href = "../02-Student-Marks/students.html";
    }, 1000);
  } else {
    // Display on-screen inline message
    msgElement.innerText = "Enter username and password.";
    msgElement.className = "msg-error";

    // Display on-screen popup notification
    showPopup("⚠️ Enter username and password.", "error", 3000);
  }
}

// Check for redirect notifications (e.g., logged out, access restricted)
document.addEventListener("DOMContentLoaded", () => {
  const authError = sessionStorage.getItem("authError");
  if (authError) {
    showPopup("🔒 " + authError, "error", 3500);
    sessionStorage.removeItem("authError");
  }

  const logoutMsg = sessionStorage.getItem("logoutMessage");
  if (logoutMsg) {
    showPopup("👋 " + logoutMsg, "info", 3500);
    sessionStorage.removeItem("logoutMessage");
  }
});

