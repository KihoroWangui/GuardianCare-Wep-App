const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
function showNotes(){
  notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click," ()=>{
  let inputBox=document.createElement("p");
  inputBox.className="input-box";
  inputBox.setAttribute("contendeditable", "true");
  notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click", function(e{
  if(e.target.tagName==="IMG"){
    e.targetparentElement.remove();
    updateStorage();
  }
  else if(e.target.tagName ==="P"){
    notes=document.querySelectorAll(".input-box");
    notes.forEach(nt  =>{
      nt.onkeyup=function(){
        updateStorage();
      }
    })

  }
}))
document.addEventListener("keydown", event=> {
  if(event.key ==== "Enter"){
    document.execCommand("insertLineBreak")
    event.preventDefault();
  }
})
document.getElementById("Login").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get email and password input values
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Your login validation logic goes here
  // For example, you might check if the credentials are correct
  if (email === "your_email" && password === "your_password") {
    // Redirect to the account page upon successful login
    window.location.href = "Login.html"; // Replace 'account.html' with your account page URL
  } else {
    // Display an error message for invalid credentials
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerText = "Invalid email or password";
  }
  document
    .getElementById("userForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get user input values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      // Create a new row for the table
      const table = document
        .getElementById("userTable")
        .getElementsByTagName("tbody")[0];
      const newRow = table.insertRow();

      // Insert cells for the new row
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);

      // Populate cells with user input
      cell1.innerHTML = name;
      cell2.innerHTML = email;
      cell3.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

      // Clear the form after adding the user
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
    });

  function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  // Simulated authentication function (Replace this with your authentication logic)
  function authenticate(username, password) {
    // Perform authentication (backend logic)
    // Return user data if successful, else return null
    // Example:
    if (username === "user" && password === "password") {
      return { displayName: "John Doe", email: "john@example.com" };
    } else {
      return null;
    }
  }

  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Get username and password from the form
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Simulated authentication (replace with actual backend call)
      const userData = authenticate(username, password);

      if (userData) {
        // Display profile section and hide login form
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("profileSection").style.display = "block";

        // Display user info
        document.getElementById("userDisplayName").innerText =
          userData.displayName;
        document.getElementById("userEmail").innerText = userData.email;
      } else {
        alert("Invalid username or password");
      }
    });

  function logout() {
    // Simulated logout - clear session or cookie (replace with actual logout logic)
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("profileSection").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
});
function toggleChat() {
  var chatbotContainer = document.getElementById("chatbot-container");
  chatbotContainer.classList.toggle("hidden");
}

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  var chatbotContent = document.getElementById("chatbot-content");

  // Append user message to chat box
  chatbotContent.innerHTML += "<p>You: " + userInput + "</p>";

  // Clear user input field
  document.getElementById("user-input").value = "";

  // Send user message to backend server
  fetch("/chatbot", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "message=" + encodeURIComponent(userInput),
  })
    .then((response) => response.json())
    .then((data) => {
      // Append bot response to chat box
      chatbotContent.innerHTML += "<p>Bot: " + data.response + "</p>";

      // Scroll to bottom of chat box
      chatbotContent.scrollTop = chatbotContent.scrollHeight;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
