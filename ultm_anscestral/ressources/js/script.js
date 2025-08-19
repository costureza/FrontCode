const MAX_Time = 100;
let time = 0;
let music = 0;
let musics = [];
let isPlaying = false;
let timeEvent = null;

// Carrega o JSON
fetch("./musics.json")
    .then(response => response.json())
    .then(data => {
        musics = data;
        changeMusic(0); 
    });

// Alterna menu
function handleToggle() {
    const navigation = document.getElementById('navigation');
    const buttonToggle = document.getElementById('button_toggle');
    navigation.classList.toggle('active');
    buttonToggle.classList.toggle('active');
}

// Troca de música
function changeMusic(direction) {
    time = 0;

    // Se direction for undefined (ex: na chamada inicial com 0), não soma
    if (typeof direction === 'number') {
        music += direction;
    }

    // Corrige looping
    if (music < 0) {
        music = musics.length - 1;
    }
    if (music > musics.length - 1) {
        music = 0;
    }

    // Atualiza nome/artista
    document.querySelectorAll('h2').forEach(element => {
        element.innerHTML = musics[music].name;
    });
    document.querySelectorAll('h3').forEach(element => {
        element.innerHTML = musics[music].artist.trim(); // remove espaços
    });

    // Reseta barra de progresso
    const timeline = document.getElementById('timeline');
    timeline.style.width = '0%';
}

// Alterna ícone de play/pause
function changeIconbuttonPlay() {
    const buttonPlay = document.getElementById('button_play');
    if (isPlaying) {
        buttonPlay.classList.remove('play');
        buttonPlay.classList.add('pause');
    } else {
        buttonPlay.classList.remove('pause');
        buttonPlay.classList.add('play');
    }
}

// Reseta música e toca próxima
function resetMusic() {
    time = 0;
    changeMusic(1);
    isPlaying = false;
    changeIconbuttonPlay();
    clearInterval(timeEvent);

    const timeline = document.getElementById('timeline');
    timeline.style.width = '0%'; 
}

// Play/Pause
function playMusic() {
    isPlaying = !isPlaying;
    changeIconbuttonPlay();

    const timeline = document.getElementById('timeline');

    if (isPlaying) {
        timeEvent = setInterval(() => {
            time++; 
            if (time >= MAX_Time) {
                resetMusic();
            }
            timeline.style.width = `${(time / MAX_Time) * 100}%`;
        }, 1000);
    } else {
        clearInterval(timeEvent);
    }
}
