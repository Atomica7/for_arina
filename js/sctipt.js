new Swiper ('.swiper', {
  autoplay: {//
    delay: 20000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },
  spaceBetween: 30,
  loop: true,
  speed: 5500,
  effect: 'coverflow',
});
let sound = document.createElement('audio');
sound.setAttribute('src' , 'музыка.mp3');
sound.volume = 0.1;
let cap = document.querySelector('.box-cap');
let capButton = document.querySelector('#capButton');
let box = document.querySelector('.box');
capButton.onclick = function() {
  cap.classList.add('cap_open');
  box.classList.add('box_open');
  sound.play();
}
// setTimeout(() => {
//   document.querySelector('.wrapper').classList.add('wrapper_hide');
// }, 3000);
