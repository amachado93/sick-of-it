import React from 'react';

const EmojiPicker = () => {

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

    const emojiMap = emojiArray.map(emoji => {
        return <div key={emoji.emoji}><p>{emoji.emoji}</p></div>
    })

    return(
        <div>
            {emojiMap}
            <p>hello from EmojiPicker</p>
        </div>
    )
}

export default EmojiPicker;