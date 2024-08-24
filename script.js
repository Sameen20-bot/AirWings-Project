const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const budgetImages = document.querySelectorAll('.Budget-Images img');
budgetImages.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sameenzk005@gmail.com",
        Password : "mastu201",
        To : 'businessfellow49@gmail.com',
        From : document.getElementById("emails").value,
        Subject : "New contact form enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}



