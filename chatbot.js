// Chatbot UI Logic
(function() {
    // Create chatbot container
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    chatbotContainer.style.position = 'fixed';
    chatbotContainer.style.bottom = '20px';
    chatbotContainer.style.right = '20px';
    chatbotContainer.style.width = '300px';
    chatbotContainer.style.height = '400px';
    chatbotContainer.style.border = '1px solid #ccc';
    chatbotContainer.style.backgroundColor = '#fff';
    chatbotContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    chatbotContainer.style.display = 'flex';
    chatbotContainer.style.flexDirection = 'column';

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

    // Chatbot interaction logic
    chatbotSendButton.addEventListener('click', sendMessage);
    chatbotInputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const userMessage = chatbotInputField.value.trim();
        if (!userMessage) return;

        // Display user message
        appendMessage('user', userMessage);
        chatbotInputField.value = '';

        // Send message to chatbot backend
        fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage })
        })
        .then(response => response.json())
        .then(data => {
            // Display chatbot response
            appendMessage('bot', data.response);
        })
        .catch(error => {
            console.error('Error:', error);
            appendMessage('bot', 'Sorry, something went wrong. Please try again.');
        });
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
})();
