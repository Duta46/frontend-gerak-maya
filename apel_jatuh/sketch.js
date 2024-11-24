let appleImg;
let x, y;
let yspeed = 0;
let gravity = 0.5;

function preload() {
  appleImg = loadImage('apple.png'); // Pastikan gambar apel ada di folder yang sama atau tentukan path yang benar
}

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = 0;
}

function draw() {
  background(220);

  // Tambahkan gaya gravitasi ke kecepatan
  yspeed += gravity;

  // Perbarui posisi y
  y += yspeed;

  // Gambar apel
  image(appleImg, x - appleImg.width/2, y - appleImg.height/2);

  // Jika apel menyentuh dasar, berhentikan
  if (y > height) {
    y = height;
    yspeed = 0;
  }
}