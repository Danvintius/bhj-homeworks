const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(evt) {
        progress.value = evt.loaded / evt.total;
    }
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    const formData = new FormData(form);
    xhr.send(formData);
})