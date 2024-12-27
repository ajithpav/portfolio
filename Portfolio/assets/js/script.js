// Disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable certain keyboard shortcuts (e.g., F12, Ctrl+Shift+I)
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
        event.preventDefault();
    }
});


const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const headerMenu = document.querySelector(".header__menu"),
menuBtn = document.querySelector(".menu-btn"),
headerMenuItems = headerMenu.querySelectorAll("li a");

menuBtn.addEventListener("click", () => {
    headerMenu.classList.toggle("show")
})

headerMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
        headerMenu.classList.remove("show")
    })
})

// var typingEffect = new Typed(".multiText", {
//     strings : ["Developer", "Coder", "Designer"],
//     loop : true,
//     typeSpeed : 100,
//     backSpeed : 80,
//     backDelay : 3000
// })


document.addEventListener('DOMContentLoaded', function () {
    const popupBox = document.getElementById('popupBox');

    // Show the box after 8 seconds
    setTimeout(() => {
        popupBox.classList.add('show');

        // Fade out after 10 seconds
        setTimeout(() => {
            popupBox.classList.add('fade-out');
        }, 10000); // 10000 ms = 10 seconds
    }, 10000); // 8000 ms = 8 seconds
});








const texts = ["Designer", "Coder", "Developer"];
let index = 0;
const shuffleSpeed = 60; 
const displaySpeed = 1500;

function shuffleText(element, text, callback) {
    const shuffleLength = text.length;
    let shuffledText = Array(shuffleLength).fill('');
    let iterations = 0;

    const shuffleInterval = setInterval(() => {
        iterations++;
        for (let i = 0; i < shuffleLength; i++) {
            if (shuffledText[i] !== text[i]) {
                shuffledText[i] = randomChar();
            }
        }
        element.textContent = shuffledText.join('');

        if (iterations > shuffleLength) {
            for (let i = 0; i < shuffleLength; i++) {
                if (shuffledText[i] !== text[i]) {
                    shuffledText[i] = text[i];
                }
            }
            element.textContent = shuffledText.join('');
            clearInterval(shuffleInterval);
            setTimeout(callback, displaySpeed);
        }
    }, shuffleSpeed);
}

function randomChar() {
    const chars = "DesignerCoderDeveloper";
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function displayNextText() {
    const textElement = document.getElementById('text-shuffle');
    shuffleText(textElement, texts[index], () => {
        index = (index + 1) % texts.length;
        setTimeout(displayNextText, 500); 
    });
}

displayNextText();






document.addEventListener('DOMContentLoaded', function () {
    const aboutImg = document.querySelector('.about_img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutImg.classList.add('visible');
            }
        });
    }, { threshold: 0.4 }); 

    observer.observe(aboutImg);
});


document.addEventListener('DOMContentLoaded', function () {
    const aboutMe = document.querySelector('.aboutme');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutMe.classList.add('visible');
            }
        });
    }, { threshold: 0.4 }); 

    observer.observe(aboutMe);
});


document.addEventListener('DOMContentLoaded', function () {
    const serviceHeading = document.querySelector('.service_heading');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                serviceHeading.classList.add('visible');
            }
        });
    }, { threshold: 0.4 }); 

    observer.observe(serviceHeading);
});



// HERO IMAGE ZOOMIN

document.addEventListener('DOMContentLoaded', function () {
    const heroImg = document.querySelector('.hero__img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroImg.classList.add('visible');
            }
        });
    }, { threshold: 0.4 }); 

    observer.observe(heroImg);
});



document.addEventListener('DOMContentLoaded', function () {
    const projectSub = document.querySelector('.project_sub');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectSub.classList.add('visible');
            }
        });
    }, { threshold: 0.4 }); 

    observer.observe(projectSub);
});






document.addEventListener('DOMContentLoaded', function () {
    const timeline = document.querySelector('.timeline');
    const timeContainers = document.querySelectorAll('.time_container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timeline.classList.add('animate-line');
                timeContainers.forEach((container, index) => {
                    setTimeout(() => {
                        container.classList.add('animate-down');
                    }, index * 1000); 
                });
            }
        });
    }, { threshold: 0.1}); 

    observer.observe(timeline);
});


document.addEventListener('DOMContentLoaded', function () {
    const expHeading = document.querySelector('.exp_heading');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                expHeading.classList.add('visible');
            }
        });
    }, { threshold: 0.4 }); 

    observer.observe(expHeading);
});




document.addEventListener('DOMContentLoaded', function () {
    const members = document.querySelectorAll('.member');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.4 }); 

    members.forEach(member => {
        observer.observe(member);
    });
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbyxx3jVRP5K1OnvxoqABtnqoGusZGkOKRxrtaI3nCiZhYO4r1nQcqEAnoLhypfH-ZvK5A/exec';
const form = document.forms['contact__form'];
const loadingOverlay = document.getElementById('loading-overlay');

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent the default form submission

    // Show loading overlay only when the submit button is clicked
    loadingOverlay.style.display = 'flex';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // Hide loading overlay when the response is received
            loadingOverlay.style.display = 'none';
            
            Swal.fire({
                title: 'Message Sent!',
                text: 'Thank you for reaching out. Your message has been successfully delivered. I will respond to you shortly.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                form.reset(); // Optionally reset the form after successful submission
                window.location.reload(); // Reload the page after the alert
            });
        })
        .catch(error => {
            // Hide loading overlay in case of an error
            loadingOverlay.style.display = 'none';

            Swal.fire({
                title: 'Error!',
                text: 'There was an issue submitting your message. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error('Error!', error.message);
        });
});



