import './MusicPlayer.css';

export default function MusicPlayer(){
    return (
        <div className="music-player">
            <h2>Music Player</h2>
            <iframe
                width="100%"
                height="300"
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PL18d2lPAowrdMgN_pRJ8bfq8eX9PAIL9C"
                title="Background music"
                allow="encrypted-media"
                allowFullScreen
            ></iframe>
        </div>
    );
}