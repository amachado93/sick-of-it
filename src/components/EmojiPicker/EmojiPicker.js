import React from 'react';

import { Emojis } from './Emojis';

const EmojiPicker = (props) => {

    const handleClick = e => {
        props.emojiChoice(e.target.className)
    }

    const emojiMap = Emojis.map(emoji => {
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