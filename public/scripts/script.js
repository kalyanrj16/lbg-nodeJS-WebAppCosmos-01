fetch('/api/mortgage')
  .then(response => response.json())
  .then(data => {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = JSON.stringify(data);
  });