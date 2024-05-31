document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const sliderItems = document.querySelectorAll('.slider-item');
    let startX = 0;
    let isDragging = false;

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('touchend', handleTouchEnd);

    function handleMouseDown(event) {
      startX = event.clientX;
      isDragging = true;
    }

    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
      isDragging = true;
    }

    function handleMouseMove(event) {
      if (!isDragging) return;
      const endX = event.clientX;
      handleSlide(endX);
    }

    function handleTouchMove(event) {
      if (!isDragging) return;
      const endX = event.touches[0].clientX;
      handleSlide(endX);
    }

    function handleMouseUp(event) {
      isDragging = false;
    }

    function handleTouchEnd(event) {
      isDragging = false;
    }

    function handleSlide(endX) {
      const deltaX = startX - endX;
      if (deltaX > 50) {
        slideNext();
      } else if (deltaX < -50) {
        slidePrev();
      }
    }

    function slideNext() {
      const currentIndex = Array.from(sliderItems).findIndex(item => item.classList.contains('slide-enter'));
      const nextIndex = (currentIndex + 1) % sliderItems.length;
      updateSlider(nextIndex);
    }

    function slidePrev() {
      const currentIndex = Array.from(sliderItems).findIndex(item => item.classList.contains('slide-enter'));
      const prevIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
      updateSlider(prevIndex);
    }

    function updateSlider(index) {
      sliderItems.forEach(item => {
        item.classList.remove('slide-enter');
      });
      sliderItems[index].classList.add('slide-enter');
    }
  });


  function changeColor(button) {
    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add 'active' class to the clicked button
    button.classList.add('active');
  }


  window.addEventListener('scroll', reveal);

  function reveal() {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
      const productPosition = product.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (productPosition < screenPosition) {
        product.classList.add('active');
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector(".text-eater");
    const textToEat = document.getElementById("textToEat").textContent.trim();
    const emoji = "\u{1F37D}"; // Unicode for the emoji (you can replace it with any emoji you want)
    
    // Function to eat text recursively
    function eatText(index) {
      if (index >= textToEat.length) {
        index = 0; // Reset index once all characters are eaten
      }
      
      let eatenText = textToEat.substring(0, index + 1);
      let remainingText = textToEat.substring(index + 1);
      
      // Update the text with the eaten text and emoji
      textContainer.innerHTML = `<h1 class="text-2xl font-bold text-zinc-900 dark:text-white mb-4">${eatenText}${emoji}<span class="eaten">${remainingText}</span></h1>`;
      
      // Call eatText recursively with the next index
      setTimeout(() => {
        eatText(index + 1);
      }, 500); // Adjust the speed of eating here (500 milliseconds per character)
    }
  
    // Start the eating animation
    eatText(0);
  });

  function addToCart(event) {
    const cartIcon = event.target;
    const flyingItem = document.createElement('div');
    flyingItem.classList.add('flying-item');
    flyingItem.innerHTML = '<i class="fas fa-box"></i>';
    cartIcon.appendChild(flyingItem);

    flyingItem.addEventListener('animationend', () => {
      cartIcon.removeChild(flyingItem);
      cartIcon.classList.add('run-cart'); // Add class to trigger the cart animation
    });
  }

  /** popup */
  const openModalButton = document.getElementById('openModalButton');
  const closeModalButton = document.getElementById('closeModalButton');
  const modal = document.getElementById('myModal');

  openModalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

