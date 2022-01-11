let audio = new Audio("audio/dancin.mp3");
let play = document.querySelector(".pla");
let previous = document.querySelector(".pre");
let next = document.querySelector(".nex");
let bar = document.querySelector(".bar");
let songindex = 0;
let arrayhtml = Array.from(document.getElementsByClassName("songlist"));

let songs = [
  { songName: "dancin", path: "audio/dancin.mp3" },
  { songName: "Devil Eyes", path: "audio/Devil Eyes.mp3" },
  { songName: "FRIENDS", path: "audio/FRIENDS.mp3" },
  { songName: "Harleys In Hawaii", path: "audio/Harleys In Hawaii.mp3" },
  { songName: "heat waves", path: "audio/heat waves.mp3" },
  { songName: "hey mama", path: "audio/hey mama.mp3" },
  { songName: "Industry Baby", path: "audio/Industry Baby.mp3" },
  { songName: "Infinity", path: "audio/Infinity.mp3" },
  { songName: "just the two of us", path: "audio/just the two of us.mp3" },
  { songName: "Movements", path: "audio/Movements.mp3" },
  { songName: "Old Town Road", path: "audio/Old Town Road.mp3" },
  { songName: "One Dance", path: "audio/One Dance.mp3" },
  { songName: "Playdate", path: "audio/Playdate.mp3" },
  { songName: "say my name", path: "audio/say my name.mp3" },
  { songName: "sometimes all i ", path: "audio/sometimes all i .mp3" },
  { songName: "Stereo Hearts", path: "audio/Stereo Hearts.mp3" },
  { songName: "Unstoppable", path: "audio/Unstoppable.mp3" },
  { songName: "Vacation", path: "audio/Vacation.mp3" },
  { songName: "Without Me", path: "audio/Without Me.mp3" },
  { songName: "Положение", path: "audio/Положение.mp3" },
];


arrayhtml.forEach((element, i) => {
  element.innerText = songs[i].songName;
});

function makeallwhite() {
  arrayhtml.forEach((element, i) => {
  element.style.color = "#2E2E2E";

  });
}

play.addEventListener("click", () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    play.innerText = "||";
  } else {
    audio.pause();
    play.innerText = "▶";
  }
});

audio.addEventListener("timeupdate", () => {
  value = (audio.currentTime / audio.duration) * 100;
  bar.value = value;
});

bar.addEventListener("change", () => {
  audio.currentTime = (audio.duration * bar.value) / 100;
});

arrayhtml.forEach((element) => {
  element.addEventListener("click", () => {
    makeallwhite();
    audio.play();
    songindex = element.id;
    console.log(songindex);
    audio.src = songs[parseInt(songindex)].path;
    audio.play();
    play.innerText = "||";
    document.getElementById(element.id).style.color = "#F16B26";
    document.querySelector(".playingsong").innerText = songs[element.id].songName;

  });
});

next.addEventListener("click", () => {
  if(parseInt(songindex) >= 19 ){
    songindex = -1;
    alert("oore kitna next karge gandu list hatam ho gai hai pehele se shuru kar raha hu bosdk Ghure kya raha hai ok daba")
  }
  makeallwhite();

  audio.src = songs[parseInt(songindex) + 1 ].path;
  audio.play();
  songindex = parseInt(songindex) + 1 ;
  console.log(songindex);
  document.getElementById(songindex).style.color = "#F16B26";
});

previous.addEventListener("click", () => {
  if(parseInt(songindex) <= 0 ){
    alert("Oore kitna piche karega chutiye list khatam ho gai hai issi liye last ka laga raha hu Gandu Ghure kya raha hai ok daba ")
    songindex = 20;
  }
  makeallwhite();
  audio.src = songs[parseInt(songindex)-1].path;
  audio.play();
  songindex = parseInt(songindex) - 1 ;
  console.log(songindex);
  document.getElementById(songindex).style.color = "#F16B26";
});
