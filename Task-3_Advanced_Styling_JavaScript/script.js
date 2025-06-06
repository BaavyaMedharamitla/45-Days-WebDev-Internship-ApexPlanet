// Quiz logic
function checkAnswer(ans) {
    const result = document.getElementById('quizResult');
    result.style.fontWeight = "bold";
    result.textContent = (ans === 4) ? "✅ Correct!" : "❌ Try again!";
  }
  
  // Updated Carousel Logic
const carouselImages = [
    "https://images.pexels.com/photos/1403653/pexels-photo-1403653.jpeg",
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg"
  ];
  let currentSlide = 0;
  
  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = carouselImages.length - 1;
    if (currentSlide >= carouselImages.length) currentSlide = 0;
  
    const img = document.getElementById('carouselImage');
    img.style.opacity = 0;
  
    setTimeout(() => {
      img.src = carouselImages[currentSlide];
      img.style.opacity = 1;
    }, 200);
  }
  
  
  // Joke fetch logic
  async function getJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    document.getElementById('jokeDisplay').textContent = `${data.setup} — ${data.punchline}`;
  }
  