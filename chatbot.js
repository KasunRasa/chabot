console.log('Chatbot script loaded!');

(function() {
    // Predefined responses
    const responses = {
        "hi": "Hello! How can I assist you today?",
        "hello": "Hi there! What can I do for you?",
        "how are you": "I'm just a bot, but I'm here to help!",
        "what is your name": "I'm your friendly ISM Chatbot.",
        "help": "Sure! Here are some things I can help with: \n1. Reset your password. \n2. Check system status. \n3. Provide IT support contact info.",
        "bye": "Goodbye! Have a great day! 👋",
        "default": "I'm sorry, I didn't understand that. Can you please rephrase?"
    };

    // Create chatbot container
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    chatbotContainer.style.position = 'fixed';
    chatbotContainer.style.bottom = '20px';
    chatbotContainer.style.right = '20px';
    chatbotContainer.style.width = '300px';
    chatbotContainer.style.height = '400px';
    chatbotContainer.style.border = '2px solid red';  // Debug style
    chatbotContainer.style.backgroundColor = '#fff';
    chatbotContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    chatbotContainer.style.display = 'flex';
    chatbotContainer.style.flexDirection = 'column';
    chatbotContainer.style.zIndex = '9999';  // Ensure it's on top

    // Create chatbot header
    const chatbotHeader = document.createElement('div');
    chatbotHeader.id = 'chatbot-header';
    chatbotHeader.textContent = 'ISM Chatbot';
    chatbotHeader.style.backgroundColor = '#0078d7';
    chatbotHeader.style.color = '#fff';
    chatbotHeader.style.padding = '10px';
    chatbotHeader.style.textAlign = 'center';
    chatbotHeader.style.fontWeight = 'bold';

    // Create chatbot messages container
    const chatbotMessages = document.createElement('div');
    chatbotMessages.id = 'chatbot-messages';
    chatbotMessages.style.flex = '1';
    chatbotMessages.style.padding = '10px';
    chatbotMessages.style.overflowY = 'auto';

    // Create chatbot input container
    const chatbotInput = document.createElement('div');
    chatbotInput.id = 'chatbot-input';
    chatbotInput.style.display = 'flex';
    chatbotInput.style.borderTop = '1px solid #ccc';

    // Create chatbot input field
    const chatbotInputField = document.createElement('input');
    chatbotInputField.id = 'chatbot-input-field';
    chatbotInputField.type = 'text';
    chatbotInputField.placeholder = 'Type a message...';
    chatbotInputField.style.flex = '1';
    chatbotInputField.style.padding = '10px';
    chatbotInputField.style.border = 'none';
    chatbotInputField.style.outline = 'none';

    // Create chatbot send button
    const chatbotSendButton = document.createElement('button');
    chatbotSendButton.id = 'chatbot-send-btn';
    chatbotSendButton.textContent = 'Send';
    chatbotSendButton.style.padding = '10px';
    chatbotSendButton.style.backgroundColor = '#0078d7';
    chatbotSendButton.style.color = '#fff';
    chatbotSendButton.style.border = 'none';
    chatbotSendButton.style.cursor = 'pointer';

    // Append elements to the chatbot container
    chatbotInput.appendChild(chatbotInputField);
    chatbotInput.appendChild(chatbotSendButton);
    chatbotContainer.appendChild(chatbotHeader);
    chatbotContainer.appendChild(chatbotMessages);
    chatbotContainer.appendChild(chatbotInput);

    // Append chatbot container to the body
    document.body.appendChild(chatbotContainer);

    console.log('Chatbot container created and appended to the body!');

    // Chatbot interaction logic
    chatbotSendButton.addEventListener('click', sendMessage);
    chatbotInputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const userMessage = chatbotInputField.value.trim().toLowerCase();
        if (!userMessage) return;

        // Display user message
        appendMessage('user', userMessage);
        chatbotInputField.value = '';

        // Get chatbot response
        const botResponse = getResponse(userMessage);

        // Display chatbot response
        appendMessage('bot', botResponse);
    }

    function getResponse(message) {
        // Check for predefined responses
        for (const key in responses) {
            if (message.includes(key)) {
                return responses[key];
            }
        }
        // Default response
        return responses["default"];
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
})();
