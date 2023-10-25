let text = document.getElementById('text');

let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');
let cloud4 = document.getElementById('cloud4');
let cloud5 = document.getElementById('cloud5');

let initialTopCloud1 = cloud1.offsetTop;
let initialLeftCloud1 = cloud1.offsetLeft;

let initialTopCloud2 = cloud2.offsetTop;
let initialLeftCloud2 = cloud2.offsetLeft;

let initialTopCloud3 = cloud3.offsetTop;
let initialLeftCloud3 = cloud3.offsetLeft;

let initialTopCloud4 = cloud4.offsetTop;
let initialLeftCloud4 = cloud4.offsetLeft;

let initialTopCloud5 = cloud5.offsetTop;
let initialLeftCloud5 = cloud5.offsetLeft;


window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 0.95 + 'px';


  cloud1.style.top = initialTopCloud1 - value * 0.21 + 'px'; // Move up
  cloud1.style.left = initialLeftCloud1 + value * -0.3 + 'px'; // Move right

  cloud2.style.top = initialTopCloud2 - value * 0.25 + 'px'; // Move up
  cloud2.style.left = initialLeftCloud2 + value * 0.8 + 'px'; // Move right

  cloud3.style.top = initialTopCloud3 - value * 0.3 + 'px'; // Move up
  cloud3.style.left = initialLeftCloud3 - value * 0.3 + 'px'; // Move right

  cloud4.style.top = initialTopCloud4 - value * 0.22 + 'px'; // Move up
  cloud4.style.left = initialLeftCloud4 - value * -0.3 + 'px'; // Move right

  cloud5.style.top = initialTopCloud5 + value * -0.36 + 'px'; // Move up
  cloud5.style.left = initialLeftCloud5 + value * -0.2 + 'px'; // Move right
});


