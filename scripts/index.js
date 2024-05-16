window.onload = init;

function init() {
    const greetUserBtn = document.getElementById('greetUserBtn');
    greetUserBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
    const nameField = document.getElementById('nameField');
    const userName = nameField.value;
    const message = `Hello ${userName}`;
    
    const messageDiv = document.getElementById('messageDiv');
    messageDiv.textContent = message;
}