var skull = `
     ____
   / o  \\
  |    o |
 / o    \\
 \\______/
  |_|_|_|
  /_|_|_\\
`;

function showSkull() {
    var pre = document.getElementById('skull');
    pre.textContent = skull;
}

function animateSkull(direction) {
    var pre = document.getElementById('skull');
    if (direction === 'right') {
        skull = ' ' + skull.slice(0, -1);
    } else {
        skull = skull.slice(1) + ' ';
    }
    pre.textContent = skull;
    setTimeout(function() {
        if (direction === 'right') {
            animateSkull('left');
        } else {
            animateSkull('right');
        }
    }, 100);
}

showSkull();
animateSkull('right');
