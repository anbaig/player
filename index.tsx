const backgroundbar = document.getElementById("backgroundbar");
const progressbar = document.getElementById("progressbar");
const timePosition = document.getElementById("time-position");
const mouseTimePosition = document.getElementById("mouse-time-position");

const videoLength = 300;
const backgroundbarScreenWidth = backgroundbar?.clientWidth;

const convertTotalSecondsIntoTimeDisplay = (seconds) => {
  const minutesIntoVideo = Math.floor(seconds / 60);
  const secondsIntoVideoMod60 = seconds % 60;
  const minutesIntoVideoDisplay =
    minutesIntoVideo.toString().length == 1
      ? `0${minutesIntoVideo}`
      : minutesIntoVideo.toString();
  const secondsIntoVideoDisplay =
    secondsIntoVideoMod60.toString().length == 1
      ? `0${secondsIntoVideoMod60}`
      : secondsIntoVideoMod60.toString();
  return `${minutesIntoVideoDisplay}:${secondsIntoVideoDisplay}`;
};

const widthOneSecondProgress = backgroundbarScreenWidth! / videoLength;

/* TODO: Create a seeker time display as you hover over the progress bar
backgroundbar?.addEventListener("mouseover", (e) => {
  const x = e.clientX;
  const secondsElapsed = Math.floor(x / widthOneSecondProgress);

  mouseTimePosition!.textContent =
    convertTotalSecondsIntoTimeDisplay(secondsElapsed);
});
backgroundbar?.addEventListener("mouseleave", (e) => {
  mouseTimePosition!.textContent = "";
});
*/

let secondsIntoVideo = 0;

const updateProgressBar = () => {
  if (secondsIntoVideo < videoLength) {
    secondsIntoVideo++;

    timePosition!.textContent = `${convertTotalSecondsIntoTimeDisplay(
      secondsIntoVideo
    )}/${convertTotalSecondsIntoTimeDisplay(videoLength)}`;
    progressbar!.style.width = `${secondsIntoVideo * widthOneSecondProgress}px`;
  }
  setTimeout(() => {
    requestAnimationFrame(updateProgressBar);
  }, 1000);
};
updateProgressBar();
