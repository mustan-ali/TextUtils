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

    const [text, setText] = useState('Enter text here');
    return (
        <>
            <h4>{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary me-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary me-1" onClick={handleLowClick}>Convert to Lower Case</button>
        </>
    )
}

TextForm.propTypes = { heading: PropTypes.string }
