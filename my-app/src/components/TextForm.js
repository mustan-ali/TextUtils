import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const handleLowClick = () => {
        console.log("Lowercase Button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleUpClick = () => {
        console.log("Uppercase Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    let vowelCount = 0;
    const handleVowelCount = () => {

        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i).match(/[aeiou]/i)) {
                vowelCount++;
            }
        }
    }

    let consonantCount = 0;
    const ConsonantCount = () => {
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i).match(/[bcdfghjklmnpqrstvwxyz]/i)) {
                consonantCount++;
            }
        }
    }

    const handleRemoveSpaceClick = () => {
        console.log("Remove Space Button was clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleCopyClick = () => {
        console.log("Copy Button was clicked");
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleClearClick = () => {
        console.log("Clear Button was clicked");
        let newText = '';
        setText(newText);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#404040' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveSpaceClick}>Remove Extra Space</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Text Summary</h4>
                <p>Total Words: {text.split(" ").length}</p>
                <p>Total Characters: {text.length}</p>
                {handleVowelCount()}
                <p>Total Vowels: {vowelCount}</p>
                {ConsonantCount()}
                <p>Total Consonants: {consonantCount}</p>
                <p>Time required to Read: {0.008 * text.split(" ").length} minutes</p>
            </div>

        </>
    )
}

TextForm.propTypes = { heading: PropTypes.string }
