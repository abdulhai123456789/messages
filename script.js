document.getElementById('sendMessageButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageDisplay = document.getElementById('messageDisplay');

    if (messageInput.value.trim() !== "") {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = messageInput.value;

        messageDisplay.appendChild(newMessage);
        messageInput.value = "";
        messageDisplay.scrollTop = messageDisplay.scrollHeight;
    }
});

document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('sendMessageButton').click();
    }
});
