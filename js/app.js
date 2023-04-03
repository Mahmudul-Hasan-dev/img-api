// console.log('connected')
function loadPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data))
}
loadPhoto();

function displayPhoto(photos) {
    const photoContainer = document.getElementById('imageContainer')
    for (const photo of photos) {
        console.log(photo)
        const div = document.createElement('div')
        div.classList = "col-4"
        div.innerHTML = `<img src="${photo.thumbnailUrl}" alt="">
        <h4>${photo.title}</h4>`
        photoContainer.appendChild(div);
    }
}