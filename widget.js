// https://kasunrasa.github.io/chabot/widget.js
document.addEventListener('DOMContentLoaded', function() {
  const chatbotHTML = `
    <div id="chat-container" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999;">
      <iframe src="https://kasunrasa.github.io/chabot/" 
              style="width: 350px; height: 500px; border: none; border-radius: 10px; box-shadow: 0 0 15px rgba(0,0,0,0.2);"></iframe>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', chatbotHTML);
});
