// Simple frontend logic for the AI Chatbot
async function sendMessage() {
    const input = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');
    const userText = input.value;
    if (!userText) return;
    chatbox.innerHTML += `<div><b>You:</b> ${userText}</div>`;
    input.value = '';
    // Send to backend (to be implemented)
    const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
    });
    const data = await response.json();
    chatbox.innerHTML += `<div><b>Bot:</b> ${data.reply}</div>`;
}
