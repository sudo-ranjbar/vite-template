console.log('test');

import imgURL from '/images/pic1-1360.png'

// dynamic importing url
const dynamicImgURL = new URL('/images/400x7.png', import.meta.url).href;

document.getElementById("myImg").src = imgURL;

document.getElementById("dynamicImg").src = dynamicImgURL;

console.log(import.meta.env);

console.log(import.meta.env.VITE_TEST);

import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()