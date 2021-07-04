import React from 'react';
import './Tracks.css';

const Tracks = (props) => {
    
    const trackMap = props.tracks.map(track => {
        return <div key={track.id} className="track">
        <div className="track-artwork">
            <img src={track.album.images[1].url} alt="album" />
        </div>
        <div className="track-datapoints">
            <p>artist</p>
            <p>title</p>
            <p>album</p>
        </div>
        <div className="track-info">
            <p><b>{track.artists[0].name}</b></p>
            <p>{track.name}</p>
            <p>{track.album.name}</p>
        </div>
    </div>
    })
    
    return(
        <div>
            <h3>your music</h3>
            <div className="music-area">
                {trackMap}
            </div>
        </div>
    )
}

export default Tracks;