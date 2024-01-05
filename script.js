const video = document.querySelector('#imgzz');
video.addEventListener('mouseenter', () => {
  video.play();
});
video.addEventListener('mouseleave', () => {
  video.pause();
  video.currentTime = 0;
});
const videoo = document.querySelector('#imgww');
videoo.addEventListener('mouseenter', () => {
    videoo.play();
});
videoo.addEventListener('mouseleave', () => {
  videoo.pause();
  videoo.currentTime = 0;
});
const videooo = document.querySelector('#tunnel-video');
videooo.addEventListener('mouseenter', () => {
    videooo.play();
});
videooo.addEventListener('mouseleave', () => {
  videooo.pause();
  videooo.currentTime = 0;
});
const videoooo = document.querySelector('#cut-video');
videoooo.addEventListener('mouseenter', () => {
  videoooo.play();
});
videoooo.addEventListener('mouseleave', () => {
  videoooo.pause();
  videoooo.currentTime = 0;
});
const videooooo = document.querySelector('#viaduct-video');
videooooo.addEventListener('mouseenter', () => {
  videooooo.play();
});
videooooo.addEventListener('mouseleave', () => {
  videooooo.pause();
  videooooo.currentTime = 0;
});
  const btn = document.getElementById('drop');
  const hamburger = document.getElementById('hamburger');
  const mainbody  = document.getElementById('main-body');
  const btn2 = document.getElementById('cross');
  btn.onclick =()=>{
    hamburger.style.display='block';
    mainbody.style.display='none';
  }
  btn2.onclick =()=>{
    mainbody.style.display='block';
    hamburger.style.display='none';
  }
  const btn3 = document.getElementById('arrow-left');
  const btn4 = document.getElementById('arrow-right');
  const btn5 = document.getElementById('arrow-left-duplicate');
  const btn6 = document.getElementById('arrow-right-duplicate');
  btn3.onclick =()=>{
    x.style.display='none';
    x_duplicate.style.display='flex';
  }
  btn4.onclick =()=>{
    x.style.display='none';
    x_duplicate.style.display='flex';
  }
  btn5.onclick =()=>{
    x_duplicate.style.display='none';
    x.style.display='flex';
  }
  btn6.onclick =()=>{
    x_duplicate.style.display='none';
    x.style.display='flex';
  }