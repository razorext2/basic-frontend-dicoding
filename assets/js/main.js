document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');
    const startButton = document.getElementById('start');
    const controllerOne = document.getElementById('controller-one');
    const controllerThree = document.getElementById('controller-three');
    const controllerFour = document.getElementById('controller-four');
    const controllerSix = document.getElementById('controller-six');

    // menetapkan animasi pada navbar
    window.addEventListener('scroll', function () {
        const showHeader = window.scrollY > 100 && window.scrollY < window.innerHeight;
        const showBackground = window.scrollY > window.innerHeight;

        header.style.animation = showHeader ? 'fadeOut 0.5s forwards' : showBackground ? 'fadeInStay 0.5s forwards' : '';
        header.style.backgroundColor = showBackground ? '#000' : '';
        header.style.borderBottom = showBackground ? '1px #121212 solid' : '';
    });

    // menenampilkan first-page jika start diklik
    startButton.addEventListener('click', function () {
        const contentContainer = document.getElementById('first-page');
        const hero = document.getElementById('hero');
        const controllerTwo = document.getElementById('controller-two');

        controllerTwo.style.animation = 'scaleUp 0.5s forwards';
        controllerTwo.style.animationDelay = '100ms';
        contentContainer.style.display = 'flex';
        hero.style.animation = 'fadeOutNone 0.5s forwards';
        setTimeout(function () {
            hero.style.display = 'none';
        }, 500);
    });

    controllerOne.addEventListener('click', function () {
        document.getElementById('hero').style.display = 'block';
        document.getElementById('hero').style.animation = 'fadeInStay 0.5s forwards';
        document.getElementById('first-page').style.display = 'none';
    })

    controllerThree.addEventListener('click', function () {
        const controllerTwo = document.getElementById('controller-five');

        document.getElementById('first-page').style.display = 'none';
        document.getElementById('second-page').style.display = 'flex';
        document.getElementById('second-page').style.animation = 'fadeInStay 0.5s forwards';
        controllerTwo.style.animation = 'scaleUp 0.5s forwards';
        controllerTwo.style.animationDelay = '100ms';
    })

    controllerFour.addEventListener('click', function () {
        document.getElementById('first-page').style.display = 'flex';
        document.getElementById('second-page').style.display = 'none';
    })

    controllerSix.addEventListener('click', function () {
        document.getElementById('second-page').style.display = 'none';
        document.getElementById('third-page').style.display = 'flex';
        document.getElementById('to-top').style.display = 'block';
    })

    document.getElementById('to-top').addEventListener('click', function () {
        document.getElementById('hero').style.display = 'block';
        document.getElementById('hero').style.animation = 'fadeInStay 0.5s forwards';
        document.getElementById('first-page').style.display = 'none';
        document.getElementById('third-page').style.display = 'none';
        document.getElementById('to-top').style.display = 'none';
    })
});