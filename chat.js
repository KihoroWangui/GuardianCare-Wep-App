function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const chatBox = document.getElementById("chat-box");

  // Display user message
  chatBox.innerHTML += `<div>User: ${userInput}</div>`;

  // Simple bot logic (you can modify this for more sophisticated responses)
  const botResponse = getBotResponse(userInput);
  chatBox.innerHTML += `<div>Bot: ${botResponse}</div>`;

  // Clear input field
  document.getElementById("user-input").value = "";
}

function getBotResponse(userInput) {
  // Simple bot responses based on user input (modify as needed)
  if (userInput.toLowerCase().includes("hi")) {
    return "Hi Hannah,how can i assist you today?";
  } else if (userInput.toLowerCase().includes("am feeling quite low today")) {
    return "What's the problem?";
  } else {
    return "Sorry, I did not understand that.";
  }
}
