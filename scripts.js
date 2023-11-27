const entities = [
    {
      text: 'Первый кот',
      img: './images/image1.jpg'
    },
    {
      text: 'Второй кот',
      img: './images/image2.jpg'
    },
    {
      text: 'Третий кот',
      img: './images/image3.jpg'
    }
  ]
  
  const text = document.querySelector('.text')
  const img = document.querySelector('.image')
  
  const setEntity = (index) => {
    
    let safeIndex = index % entities.length;

    if (safeIndex < 0) {
        safeIndex = entities.length + safeIndex;
    }
    text.innerText = entities[safeIndex].text;
    img.style.backgroundImage = `url(${entities[safeIndex].img})`;
}
  
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')
  let currentIndex = 0
  
  prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
  })
  next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
  })