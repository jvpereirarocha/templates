document.addEventListener('DOMContentLoaded', function() {
  const dropdownButton = document.querySelector('.dropdown-btn');
  dropdownButton.addEventListener('click', function() {
    this.classList.toggle('active');
    const dropdownContainer = document.querySelector('.dropdown-container');
    if (dropdownContainer.style.display === 'block') {
      dropdownContainer.setAttribute('style', 'display: none');
    } else {
      dropdownContainer.style.display = 'block';
      dropdownContainer.style.transition = 'all 0.5s ease-in';
    }
  })
})