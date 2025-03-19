document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.home-main .top-navbar ul');
    const image = [
        'url(/assets/bg-image.jpg)',
        'url(/assets/background.jpg)',
        'url(/assets/download (1).jpg)',
        'url(/assets/download.jpg)'
    ];
    let currentImageIndex = 0;
    const header = document.getElementById('header');

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % image.length;
        header.style.backgroundImage = image[currentImageIndex];
    }

    setInterval(changeBackgroundImage, 3000);
    // navbar
    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
});
  // slider
  const images = [
    'url(/assets/bg-image.jpg)',
    'url(/assets/background.jpg)',
    'url(/assets/download (1).jpg)',
    'url(/assets/download.jpg)'
];
  let currentIndex = 0;
  function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = image.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById('migration-carausal').style.backgroundImage = images[currentIndex];
}

document.getElementById('migration-carausal').style.backgroundImage = images[currentIndex];

// open para
function toggleAccordion(element) {
    element.parentElement.classList.toggle("active");
}
