
const start = document.getElementById("start");
const border = document.getElementById("border");
const shoe = document.getElementById("shoe");
const page_one = document.getElementById("page_one");

const one = document.getElementById("one");
const letter = document.getElementById("letter");

const memories = document.getElementById("memories");

const song = document.getElementById("song");

const back = document.getElementById("back");
const back2 = document.getElementById("back2");
const back3 = document.getElementById("back3");

//click button screen

start.addEventListener('click', () =>{
    start.style.display = "none";
    page_one.style.display = "flex";
    song.loop = true;
    song.play();
    back.style.display = "block";
    back2.style.display = "none";
    back3.style.display = "none";
});

//letter screen
one.addEventListener('click', () =>{
    page_one.style.display = "none";
    letter.style.display = "flex";
    border.style.display = "none";
    document.body.style.backgroundImage = "url('date.jpg')";
    document.body.style.backgroundSize = "1800px 800px";
    document.body.style.backgroundAttachment = 'fixed';
    back.style.display = "none";
    back2.style.display = "block";
    back3.style.display = "none";

});


two.addEventListener('click', () =>{
    page_one.style.display = "none";
    memories.style.display = "block";
    document.body.style.overflow = 'auto';
    border.style.display = "none";
    document.body.style.backgroundImage = "url('shoe.JPG')";
    document.body.style.backgroundSize = "1415px 900px";
    document.body.style.backgroundAttachment = 'fixed';
    back.style.display = "none";
    back2.style.display = "none";
    letter.style.display = "none";
    back3.style.display = "block";

});

back.addEventListener('click', () =>{
    start.style.display = "block";
    page_one.style.display = "none";
    back.style.display = "none";
    back2.style.display = "none";
    letter.style.display = "none";
    back3.style.display = "none";
    window.scrollTo(0, 0);
});

back2.addEventListener('click', () =>{
    border.style.display = "block";
    start.style.display = "none";
    page_one.style.display = "flex";
    back.style.display = "block";
    back2.style.display = "none";
    letter.style.display = "none";
    document.body.style.backgroundImage = "none";
    back3.style.display = "none";
    window.scrollTo(0, 0);
});

back3.addEventListener('click', () =>{
    border.style.display = "block";
    start.style.display = "none";
    page_one.style.display = "flex";
    back.style.display = "block";
    back2.style.display = "none";
    letter.style.display = "none";
    document.body.style.backgroundImage = "none";
    back3.style.display = "none";
    memories.style.display = "none";
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
});