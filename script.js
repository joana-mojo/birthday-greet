document.getElementById('reveal-btn').addEventListener('click', function() {
    const surprise = document.getElementById('surprise-area');
    const music = document.getElementById('birthday-music');
    const greeting = document.getElementById('greeting');
    const btn = this;
    

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#fce4ec', '#ffffff']
    });

    
    setTimeout(() => {
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff69b4', '#ff1493']
        });
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff69b4', '#ff1493']
        });
    }, 1000);


    surprise.classList.remove('hidden');

 
    music.currentTime = 131; 
    music.play().catch(error => {
        console.log("Audio play failed.", error);
    });


    music.addEventListener('timeupdate', function() {
        if (music.currentTime >= 183) {
            music.pause();
        }
    });


    btn.innerHTML = "Happy 21st Birthday, bb! ✨";
    btn.disabled = true; 
    btn.style.opacity = "0.7";


    greeting.style.animation = "bounce 0.5s infinite alternate ease-in-out";
});