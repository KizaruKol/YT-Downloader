var convertButton = document.querySelector('.convert-button');
function sendURL(URL) {
    window.open(`http://localhost:4001/download?URL=${URL}`)
}