const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

const obama = new Obama(250, 250, -25.2, 10.4);

const tick = () => {
  //   console.log('Tick');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  obama.tick();

  window.requestAnimationFrame(tick);
};

tick();
