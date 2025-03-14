document.addEventListener("DOMContentLoaded", function () {
    const chatbotButton = document.getElementById("chatbot-button");
    const chatbot = document.getElementById("chatbot");
    const closeChat = document.getElementById("close-chat");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotInput = document.getElementById("chatbot-input");

    chatbotButton.addEventListener("click", function () {
        chatbot.style.display = "flex";
        chatbotButton.style.display = "none";
    });

    closeChat.addEventListener("click", function () {
        chatbot.style.display = "none";
        chatbotButton.style.display = "flex";
    });

    chatbotInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            let userMessage = chatbotInput.value.trim();
            if (userMessage) {
                addMessage("You: " + userMessage, "user");
                chatbotInput.value = "";
                setTimeout(() => {
                    botResponse(userMessage);
                }, 1000);
            }
        }
    });

    function addMessage(text, sender) {
        let messageDiv = document.createElement("div");
        messageDiv.textContent = text;
        messageDiv.classList.add(sender);
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function botResponse(message) {
        let response = "I am just a simple bot!";
        if (message.toLowerCase().includes("hello")) {
            response = "Hello! How can I help you?";
        } else if (message.toLowerCase().includes("help")) {
            response = "Sure! What do you need help with?";
        }
        addMessage("Bot: " + response, "bot");
    }
});
