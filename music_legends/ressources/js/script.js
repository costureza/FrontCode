const MAX_Time = 100;
let time = 0;
let music = 0;
let musics = [];
let isPlaying = false;
let timeEvent = null;

fetch("./musics.json")
    .then(response => response.json())
    .then(data => {
        musics = data;
        changeMusic();
    });


function handleToggle(){
    const navigation = document.getElementById('navigation');
    const buttonToggle = document.getElementById('button_toggle');
    navigation.classList.toggle('active');
    buttonToggle.classList.toggle('active');
}


function resetMusic(){
    time = 0;
    isPlaying = false;
    changeIconbuttonPlay();  
    clearInterval(timeEvent);
}

function changeIconbuttonPlay(){  
    const buttonPlay = document.getElementById('button_play');
    if(isPlaying) {
        buttonPlay.classList.remove('play');
        buttonPlay.classList.add('pause');
    }else{
        buttonPlay.classList.remove('pause');
        buttonPlay.classList.add('play');
    }
}

function playMusic(){
    isPlaying = !isPlaying;

    changeIconbuttonPlay();
    
    if(isPlaying){
        
        const timeline = document.getElementById('timeline');

        timeEvent = setInterval(()=>{
            if(time>=MAX_Time){
                resetMusic();
            }
            time++;
            timeline.style.width = `${time}%`;
        }, 1000);
    }else{
        clearInterval(timeEvent);
    }
}

function changeMusic(direction){
    music = music + direction
    
    if(music<0){
        music = musics.length - 1;
    };        
    if(music>musics.length - 1){
        music = 0;
    };
}