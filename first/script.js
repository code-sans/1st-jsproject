document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const resetButton = document.getElementById('reset');
    const body = document.querySelector("body");


    buttons.forEach(function(button) {
        console.log(button);
        button.addEventListener('click', function(e) {
            console.log(e);
            console.log(e.target);
            if (e.target.id === 'box1') {
                body.style.backgroundColor = 'aliceblue';
            } else if (e.target.id === 'box2') {
                body.style.backgroundColor = 'yellow';
            } else if (e.target.id === 'box3') {
                body.style.backgroundColor = 'red';
            } else if (e.target.id === 'box4') {
                body.style.backgroundColor = 'blue';
            }
            
            resetButton.addEventListener('click', function() {
                    body.style.backgroundColor = 'rgb(18, 15, 15)'; // Reset to initial color
                });
            });
            
            
        });
    });

