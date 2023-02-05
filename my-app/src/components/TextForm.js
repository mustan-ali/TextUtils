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
        props.showAlert("Converted to lowercase", "success");
    }

    const handleUpClick = () => {
        console.log("Uppercase Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
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
        props.showAlert("Extra spaces removed", "success");
    }

    const handleCopyClick = () => {
        console.log("Copy Button was clicked");
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    }

    const handleClearClick = () => {
        console.log("Clear Button was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 80 100)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaceClick}>Remove Extra Space</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Text Summary</h4>
                <p className='my-1'><strong>Total Words:</strong> {text.split(" ").filter((element) => { return element.length !== 0 }).length}</p>
                <p className='my-1'><strong>Total Characters:</strong> {text.length}</p>
                {handleVowelCount()}
                <p className='my-1'><strong>Total Vowels:</strong> {vowelCount}</p>
                {ConsonantCount()}
                <p className='my-1'><strong>Total Consonants:</strong> {consonantCount}</p>
                <p className='my-1'><strong>Time required to Read:</strong> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes</p>
            </div>

        </>
    )
}

TextForm.propTypes = { heading: PropTypes.string }
