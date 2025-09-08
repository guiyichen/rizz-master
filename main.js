// Chat demo (simple local echo with tips)
const chatWindow = document.querySelector('.chat-window');
const input = document.querySelector('#inputMessage');
const sendBtn = document.querySelector('#sendBtn');

function appendMessage(text, from) {
  const div = document.createElement('div');
  div.className = `message ${from === 'user' ? 'from-user' : 'from-bot'}`;
  div.textContent = text;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function botReply(userText){
  const replies = [
    'Interesting point! Can you elaborate on that?',
    'I like your approach, keep going~',
    'What if we look at it from a different angle?',
    'How does that connect to your interests?',
    'That\'s a great conversation starter!'
  ];
  const tip = [
    'Pro tip: Ask open-ended questions to keep the conversation flowing.',
    'Try paraphrasing their point to show understanding and empathy.',
    'Share a bit about yourself to build connection.'
  ];
  const reply = replies[Math.floor(Math.random()*replies.length)];
  const extra = Math.random() > 0.6 ? `\n${tip[Math.floor(Math.random()*tip.length)]}` : '';
  return `${reply}${extra}`;
}

function handleSend(){
  const text = (input.value || '').trim();
  if(!text) return;
  
  // Add user message
  appendMessage(text, 'user');
  input.value='';
  
  // Auto-reply after a short delay
  setTimeout(() => {
    const reply = botReply(text);
    appendMessage(reply, 'bot');
  }, 500);
}

if (sendBtn && input) {
  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ handleSend(); }});
}


