const generateLinkBtn = document.getElementById('generateLink');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const linkOutput = document.getElementById('link');

generateLinkBtn.addEventListener('click', generateLink);

function generateLink() {
  const phone = phoneInput.value;
  const message = messageInput.value.replace(/ /g, "%20");
  const link = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
  linkOutput.innerHTML = `<a href="${link}" target="_blank">Clique aqui para ir para o WhatsApp</a>`;
}