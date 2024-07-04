document.addEventListener('DOMContentLoaded', function () {
  const waveContainer = document.querySelector('.wave-container .wave');
  const percentageText = document.querySelector('.percentage');
  let percentage = 0;
  let interval = setInterval(() => {
      if (percentage <= 100) {
          percentageText.textContent = percentage + '%';
          waveContainer.style.transform = `translateY(${100 - percentage}%)`;
          percentage++;
      } else {
          clearInterval(interval);
      }
  }, 100); // 100ms마다 1%씩 증가
});
