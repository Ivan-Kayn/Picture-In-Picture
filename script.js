const videoElement = document.querySelector('#video');
const buttonElement = document.querySelector('#button');

// prompt to select media stream
// pass to video element
// then play
async function selectMediaStream() {
    try {
        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia();
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (e) {
        console.log(e);
    }
}

buttonElement.addEventListener('click', async () => {
    if (videoElement.onloadedmetadata) {
        // disable button
        buttonElement.disabled = true;
        // start picture in picture
        await videoElement.requestPictureInPicture();
        // reset Button
        buttonElement.disabled = false;
    } else {
        alert('Please reload page and select video to stream before starting.');
    }
});

selectMediaStream();