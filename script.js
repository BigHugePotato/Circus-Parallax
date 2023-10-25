let text = document.getElementById('text');

let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');
let cloud4 = document.getElementById('cloud4');
let cloud5 = document.getElementById('cloud5');

let initialTopCloud1 = cloud1.offsetTop;
let initialLeftCloud1 = cloud1.offsetLeft;

let initialTopCloud2 = cloud2.offsetTop;
let initialTopCloud3 = cloud3.offsetTop;
let initialTopCloud4 = cloud4.offsetTop;
let initialLeftCloud5 = cloud5.offsetLeft;


window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + 'px';

  // For cloud1: Assuming it starts to the right of center and above center
  cloud1.style.top = initialTopCloud1 - value * 0.9 + 'px'; // Move up
  cloud1.style.left = initialLeftCloud1 + value * 0.9 + 'px'; // Move right

  cloud2.style.top = value * -1.5 + 'px';

  // For cloud3: Adjust based on its initial position.
  // This is just an example; adjust as per its actual position.
  cloud3.style.top = initialTopCloud3 - value * 1.5 + 'px'; // Move up if it's above center
  cloud3.style.left = initialLeftCloud3 - value * 1.5 + 'px'; // Move left if it's to the left of center

  // Do similar adjustments for cloud4 and cloud5. Use initial positions to determine the direction.

  cloud4.style.top = initialTopCloud4 - value * 2.5 + 'px'; // Example
  cloud4.style.left = initialLeftCloud4 - value * 2.5 + 'px'; // Example

  cloud5.style.top = initialTopCloud5 + value * 1.5 + 'px'; // Example
  cloud5.style.left = initialLeftCloud5 + value * 1.5 + 'px'; // Example
});


