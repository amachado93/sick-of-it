import React from 'react';

const EmojiPicker = (props) => {

    const emojiArray = [
        {
            emoji: '🪘',
            genre: "afrobeat"
        },
        {
            emoji: '👩‍🎤',
            genre: "alt-rock"
        },
        {
            emoji: '🎸',
            genre: "alternative"
        },
        {
            emoji: '🌊',
            genre: "ambient"
        },
        {
            emoji: '🍣',
            genre: "anime"
        },
    ];

    const handleClick = e => {
        props.emojiChoice(e.target.className)
    }

    const emojiMap = emojiArray.map(emoji => {
        return <div key={emoji.emoji}>
                   <p className={emoji.genre} onClick={handleClick}>{emoji.emoji}</p>
               </div>
    })

    return(
        <div>
            <h3>select an emoji</h3>
            <div className="emojiArea">
                {emojiMap}
            </div>
        </div>
    )
}

export default EmojiPicker;