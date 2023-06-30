const textarea = document.getElementById('editor');

textarea.oninput = function() {
    let value = textarea.value;
    localStorage.setItem('value', value)
}

const storedText = localStorage.getItem('value');
textarea.value = storedText;