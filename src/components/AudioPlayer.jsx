import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function QuranAudioPlayer({ audioUrl }) {
  return (
    <div className="audio-player">
      <AudioPlayer src={audioUrl} autoPlay={false} />
    </div>
  );
}

export default QuranAudioPlayer;
