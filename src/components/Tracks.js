import React from 'react';

const Tracks = (props) => {
    return(
        <div>
            <h3>your music</h3>
            <div className="music-area">
                <div className="track">
                    <img src="https://i.scdn.co/image/ab67616d00001e020f7ad6d8d829906c17cae210" alt="album" />
                    <div>
                        <p>artist</p>
                        <p>title</p>
                        <p>album</p>
                        <p>vibe</p>
                    </div>
                    <div>
                        <p><b>dolly parton</b></p>
                        <p>city girl</p>
                        <p>here you come again</p>
                        <p>country</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracks;