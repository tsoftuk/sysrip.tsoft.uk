document.getElementById('special-button').addEventListener('click', function() {
  document.getElementById('confirmation-modal').style.display = 'flex';
});

document.getElementById('confirm-button').addEventListener('click', function() {
  window.location.href = 'https://tsoft.uk'; /* Replace with your desired URL */
});

document.getElementById('cancel-button').addEventListener('click', function() {
  document.getElementById('confirmation-modal').style.display = 'none';
});
