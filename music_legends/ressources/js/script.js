function handleToggle(){
    const navigation = document.getElementById('navigation');
    const buttonToggle = document.getElementById('button_toggle');
    navigation.classList.toggle('active');
    buttonToggle.classList.toggle('active');
}

const MAX_Time = 100;
let time = 0;
let isPlaying = false;
let timeEvent = null;

function resetMusic(){
    time = 0;
    isPlaying = false;
    clearInterval(timeEvent);
}

function playMusic(){

    const buttonPlay = document.getElementById('button_play');

    isPlaying = !isPlaying;
    if(isPlaying){

        buttonPlay.classList.remove('play');
        buttonPlay.classList.add('pause');

        const timeline = document.getElementById('timeline');
        timeEvent = setInterval(()=>{
            if(time>=MAX_Time){
                resetMusic();
            }
            time++;
            timeline.style.width = `${time}%`;
        }, 1000);
    }else{
        buttonPlay.classList.remove('pause');
        buttonPlay.classList.add('play');
        clearInterval(timeEvent);
    }
}