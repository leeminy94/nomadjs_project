const images = ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg", "a5.jpg", "a6.jpg", "a7.jpg"];

randImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${randImage})`;