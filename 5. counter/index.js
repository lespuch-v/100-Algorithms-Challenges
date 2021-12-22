const btn = document.getElementById("btn")
const container = document.getElementById("middle-container")
const audioBlyat = document.getElementById("myAudio")
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
let timeout;
let isPlaying = false

// Setting up the date you are trying to countdown to.
let endDate = 15
let seconds = 60
let myInterval


function randomColor(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    console.log(r)
    return container.style.color = `rgb(${r}, ${g}, ${b})`
}


function stopAndReset(){
    console.log("Done")
    timer.innerHTML = `15:00`
    endDate = 15
    seconds = 60
    // Killing Audio Blyat
    audioBlyat.pause()
    audioBlyat.currentTime = 0;
    isPlaying = false
    clearInterval(myInterval)
    console.log("final")
}



btn.addEventListener("click", () => {
    container.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?xmas')"
    audioBlyat.play()
    audioBlyat.loop = true
    isPlaying = !isPlaying
    btn.innerText = isPlaying === false ? "Bust stress" : "Restart"
    
    if(isPlaying == false){
        stopAndReset()
    }
    myInterval = setInterval(()=>{
        // Shake it baby
        randomColor()
        seconds = seconds - 1
        if(seconds == 0){
            endDate = endDate - 1
            seconds = 60
        }
        if(endDate == 0){
            seconds = 0
        }                  
        timer.innerHTML = `${endDate-1 <= 9 ? `0${endDate-1}` : endDate-1}:${seconds <= 9 ? `0${seconds}` :seconds}` 
    if(endDate == 0 & isPlaying){
        stopAndReset()
    }
    }, 1000)
    if(isPlaying == false){
        stopAndReset()
    }
})
