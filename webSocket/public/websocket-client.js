document.addEventListener('DOMContentLoaded', function () {
  const socket = io('http://localhost:3000'); // Substitua 'localhost:3000' pelo seu endereço do servidor se necessário

  socket.on('connect', () => {
    console.log('Conectado ao servidor!');
  });

  socket.on('msgToClient', (message, clientId, user) => {
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('li');
    messageElement.textContent = `Cliente ${user}-${clientId}: ${message}`;
    messages.appendChild(messageElement);
  });

  socket.on('connectionClient', (messages) => {
    messages.forEach(message => {
      const messages = document.getElementById('messages');
      const messageElement = document.createElement('li');
      messageElement.textContent = `Cliente ${message.clientId}: ${message.message}`;
      messages.appendChild(messageElement);    
    });
  });

  document.getElementById('sendButton').addEventListener('click', function () {
    const messageInput = document.getElementById('messageInput');
    const userInput = document.getElementById('userInput');
    const message = messageInput.value;
    const user = userInput.value;
    const data = {
      "message": message,
      "user": user
    }

    socket.emit('msgToServer', data);
    messageInput.value = '';
  });
});
