import './App.css';

import React, { useState, useEffect } from 'react';

import axios from 'axios';

import ColorPicker from './components/ColorPicker/ColorPicker';
import EmojiPicker from './components/EmojiPicker/EmojiPicker';
import Tracks from './components/Tracks/Tracks';

function App() {
  

  // Set up states for retrieving access token and top tracks
	const [token, setToken] = useState('');
	const [tracks, setTracks] = useState([]);

  // State for choosing a color
  const [color, setColor] = useState('');

  // State for choosing an emoji
  const [emoji, setEmoji] = useState('');

  // variables for api call
  const genre = emoji;
  const tempo = color;

  useEffect(()=>{

		// Api call for retrieving token
		axios('https://accounts.spotify.com/api/token', {
			'method': 'POST',
			'headers': {
				 'Content-Type':'application/x-www-form-urlencoded',
				 'Authorization': 'Basic ' + (Buffer.from('47121a7fd2fb4c1bae39b1fe32d26270' + ':' + '56586566642040fe8f71b83a6be94ce6').toString('base64')),
			},
			data: 'grant_type=client_credentials'
		}).then(tokenresponse => {
			console.log(tokenresponse.data.access_token);
			setToken(tokenresponse.data.access_token);

			// Api call for retrieving tracks data
			axios(`https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=${genre}&seed_tracks=0c6xIDDpzE81m2q797ordA&max_tempo=${tempo}`,{
				'method': 'GET',
				'headers': {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + tokenresponse.data.access_token
				}
			}).then(trackresponse=> {
				console.log(trackresponse.data.tracks);
				setTracks(trackresponse.data.tracks);
			}).catch(error=> console.log(error))
		}).catch(error => console.log(error));
	}, [emoji])

  const colorChoice = colorPick => {
	setColor(colorPick);
  }

  const emojiChoice = emojiPick => {
	setEmoji(emojiPick);
  }

  return (
    <div className="App">
	  <header>
	  <h1>sick of it</h1>
	 	<img src="https://www.pinclipart.com/picdir/big/52-529647_download-new-emoji-icons-transparent-background-sick-emoji.png" alt="nauseous emoji" /> 
	  </header>
      <ColorPicker color={color} colorChoice={colorChoice} />
      <EmojiPicker emoji={emoji} emojiChoice={emojiChoice} />
	  {emoji 
		? <Tracks tracks={tracks} />
		: null
	  }
    </div>
  );
}

export default App;
