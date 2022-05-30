import './yandex.html';

document.addEventListener('DOMContentLoaded', () => {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map('map', {
      center: [59.94158, 30.276959],
      zoom: 10,
    });
  }
});