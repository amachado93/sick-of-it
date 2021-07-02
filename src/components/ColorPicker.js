import React from 'react';

const ColorPicker = () => {

    // 9 key/value pairs for colors and corresponding tempo
    const colorData = [
        {
            color: 'red',
            bpm: 70
        },
        {
            color: 'orange',
            bpm: 95
        },
        {
            color: 'yellow',
            bpm: 120
        },
        {
            color: 'yellow-green',
            bpm: 135
        },
        {
            color: 'green',
            bpm: 155
        },
        {
            color: 'teal',
            bpm: 165
        },
        {
            color: 'blue',
            bpm: 180
        },
        {
            color: 'indigo',
            bpm: 200
        },
        {
            color: 'violet',
            bpm: 220
        }
    ];
    
    const colorSquares = colorData.map( color => {
       return <div key={color.bpm} className={color.color}><p>{color.bpm}</p></div>
        }

    )

    return(
        <div className="colorPicker">
            {colorSquares}
        </div>
    )
}

export default ColorPicker;