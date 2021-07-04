import React from 'react';

const ColorPicker = (props) => {

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
    
    const handleClick = e => {
        props.colorChoice(e.target.className)
    }

    const colorSquares = colorData.map( color => {
       return <div key={color.bpm} className={color.bpm} onClick={handleClick}>
                {color.color}
            </div>
        }
    )

    return(
        <div>
            <h3>select a color</h3>
            <div className="colorArea">
                {colorSquares}
            </div>
        </div>
    )
}

export default ColorPicker;