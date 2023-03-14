const btn = document.querySelector('.btn');
const message = document.querySelector('.message');
const input = document.querySelector('#email');

// e.preventDefault();
btn.addEventListener('click', () => {
    



    if(input.value.length < 1) {

        // message.textContent = 'Please enter a valid email address';
        alert('Please enter a valid email address');
    } else {
        // 
        alert('Your Email has been saved!');
    }
    
    })



