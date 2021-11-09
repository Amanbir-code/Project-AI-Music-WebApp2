el_shaddai_song="";
dhoom_tara_song="";

function preload()
{
    song=loadSound("El Shaddai.mp3");
    song2=loadSound("Dhoom Tara - Bell Bottom.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    
}