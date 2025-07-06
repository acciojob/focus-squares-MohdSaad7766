const squares = document.querySelectorAll('.square');

squares.forEach((square, index) => {
  square.addEventListener('mouseenter', () => {
    squares.forEach((otherSquare, i) => {
      if (i !== index) {
        otherSquare.style.backgroundColor = '#6F4E37'; // Coffee
      }
    });
  });

  square.addEventListener('mouseleave', () => {
    squares.forEach(sq => {
      sq.style.backgroundColor = '#E6E6FA'; // Lavender
    });
  });
});
