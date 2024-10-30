document.getElementById('special-button').addEventListener('click', function() {
  document.getElementById('confirmation-modal').style.display = 'flex';
});

document.getElementById('confirm-button').addEventListener('click', function() {
  window.location.href = 'https://drive.google.com/uc?export=download&id=1oHezJyWNLKeQEiffxE0nCtivpCdoLIpj'; /* Replace with your desired URL */
});

document.getElementById('cancel-button').addEventListener('click', function() {
  document.getElementById('confirmation-modal').style.display = 'none';
});
