function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6R6LyJzeJpM":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="sound fun toy.mp3";
audio.load();
audio.play();
audio.volume=0.3,
}

