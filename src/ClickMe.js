import React, { useState } from 'react'
import './style.css'

export default function ClickMe() {
    const [activeBox, setActiveBox] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const colors = {
        '1': '#FF0000', // Red
        '2': '#FFA500', // Orange
        '3': '#FFFF00', // Yellow
        '4': '#008000', // Green
        '5': '#0000FF', // Blue
        '6': '#800080', // Purple
        '7': '#908009', // Brown
        '8': '#809809', // Olive
        '9': '#408090', // Teal
      };

  const handleColorClick = () => {
    const boxId = `box-${inputValue}`;    
    // const randomIndex = Math.floor(Math.random() * myArray.length);
    // const randomClr = myArray[randomIndex];
    // console.log(randomClr)

    // Reset previous green box

    setActiveBox(null);
    setTimeout(() => {
      setActiveBox(boxId);
    }, 0);

    // Validate input
    if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 9) {
      setError('');
    } else {
      setError('Please input a number between 1-9');
    }
    setInputValue('');
};



  return (
    <div className='container'>
      <div className='input-section'>
      
        <div className='boxs'>
            <ul id='box-list'>
                {
                    [1,2,3,4,5,6,7,8,9].map((num) =>{
                        return(
                            <li key={num} className={`box ${activeBox === `box-${num}` ? 'green' : ''}`}
                            style={{
                                backgroundColor: activeBox === `box-${num}` ? colors[num] : '#fff',
                              }}
              
                            >{num}</li>
                        )
                    })
                }
            </ul>
        </div>
        <br/>
        <div>
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter number (1-9)"
            />
        </div>
        <br/>
        <div>
            <button onClick={handleColorClick}>Color me</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        
      </div>
    </div>
  )
}
