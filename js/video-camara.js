let n = navigator,
  d = document;

export function videoCamara(vid) {
  let $videoCam = d.querySelector(vid);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        $videoCam.srcObject = stream;
        $videoCam.play();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
