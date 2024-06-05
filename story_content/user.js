function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Mkm4pAXKlM":
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

