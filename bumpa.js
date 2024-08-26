
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains('active');

            // Close all other accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle the current accordion item
            if (!isActive) {
                accordionItem.classList.add('active');
            }

            // Toggle the chevron icon
            const icon = header.querySelector('.care');
            document.querySelectorAll('.care').forEach(i => i.classList.remove('bi-chevron-up'));
            if (!isActive) {
                icon.classList.add('bi-chevron-up');
            }
        });
    });
    // Function to animate the counter
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Event listener for scroll event
window.addEventListener('scroll', function() {
    const counterElement = document.querySelector('.number');
    const endValue = parseInt(counterElement.getAttribute('data-counter'));
    if (isInViewport(counterElement)) {
        animateCounter(counterElement, 0, endValue, 2000); // 2000ms for 2 seconds
        // Remove the event listener once the animation starts
        window.removeEventListener('scroll', arguments.callee);
    }
});
//  const plans = document.getElementById("plans");

//  function changecolour(event){
//     event.target.style.backgroundcolor = #292929
//  }
//  plans.addEventListener("click",changecolour);
  // Get all h1 elements with the class "plan"
  const buttons = document.querySelectorAll('.plan-button');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          buttons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
      });
  });
  //code for the last slider
  const sliderTrack = document.querySelector('.slider-track');

sliderTrack.addEventListener('mouseenter', () => {
    sliderTrack.style.animationPlayState = 'paused';
});

sliderTrack.addEventListener('mouseleave', () => {
    sliderTrack.style.animationPlayState = 'running';
});