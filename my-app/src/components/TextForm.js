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

    const handleClearClick = () => {
    console.log("Clear Button was clicked");
    let newText = '';
    setText(newText);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container">
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container my-3">
                <h4>Text Summary</h4>
                <p>Total Words: {text.split(" ").length}</p>
                <p>Total Characters: {text.length}</p>
                <p>Time required to Read: {0.008 * text.split(" ").length} minutes</p>
            </div>

        </>
    )
}

TextForm.propTypes = { heading: PropTypes.string }
