import './App.css';

import React, { useState, useEffect } from 'react';

import axios from 'axios';

import ColorPicker from './components/ColorPicker';
import EmojiPicker from './components/EmojiPicker';

function App() {
  // variables for api call
  const genre = 'rock';
  const tempo = 120;

  // Set up states for retrieving access token and top tracks
	const [token, setToken] = useState('');
	const [tracks, setTracks] = useState([]);

  // useEffect(()=>{

	// 	// Api call for retrieving token
	// 	axios('https://accounts.spotify.com/api/token', {
	// 		'method': 'POST',
	// 		'headers': {
	// 			 'Content-Type':'application/x-www-form-urlencoded',
	// 			 'Authorization': 'Basic ' + (Buffer.from('47121a7fd2fb4c1bae39b1fe32d26270' + ':' + '56586566642040fe8f71b83a6be94ce6').toString('base64')),
	// 		},
	// 		data: 'grant_type=client_credentials'
	// 	}).then(tokenresponse => {
	// 		console.log(tokenresponse.data.access_token);
	// 		setToken(tokenresponse.data.access_token);

	// 		// Api call for retrieving tracks data
	// 		axios(`https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=${genre}&seed_tracks=0c6xIDDpzE81m2q797ordA&max_tempo=${tempo}`,{
	// 			'method': 'GET',
	// 			'headers': {
	// 				'Content-Type': 'application/json',
	// 				'Accept': 'application/json',
	// 				'Authorization': 'Bearer ' + tokenresponse.data.access_token
	// 			}
	// 		}).then(trackresponse=> {
	// 			console.log(trackresponse.data.tracks);
	// 			setTracks(trackresponse.data.tracks);
	// 		}).catch(error=> console.log(error))
	// 	}).catch(error => console.log(error));
	// },[])


  return (
    <div className="App">
      <ColorPicker />
      <EmojiPicker />
    </div>
  );
}

export default App;
