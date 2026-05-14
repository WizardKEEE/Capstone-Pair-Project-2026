import { useState } from "react";

export const CeaseCiph = () => {
    const [inputVal, setInputVal] = useState('');
    const [shiftVal, setShiftVal] = useState('');
    if (shiftVal === '') {
        setShiftVal(0) 
    }
    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    }
    const handleShiftChange = (e) => {
        setShiftVal(e.target.value);
    }

    const shiftAmount = shiftVal;

    const asciicodes = inputVal;
    asciicodes.split('');
    const asciiArr = [];
    for (let index = 0; index < asciicodes.length; index++) {
        asciiArr.push(parseInt(asciicodes.charCodeAt(index)) + parseInt(shiftAmount));
    }
    const wordArr = [];
    for (let index = 0; index < asciiArr.length; index++) {
        wordArr.push(String.fromCharCode(asciiArr[index]));
    }
    const joinedString = wordArr.join('');
    console.log(asciicodes);

    return (
        <>
            <h1>Ceaser Cipher</h1>
            <div>
                <input type="text" value={inputVal} onChange={handleInputChange} placeholder="Type a sentance to encode it"/>
                <input type="number" value={shiftVal} onChange={handleShiftChange} placeholder="Enter the amount you want to shift by"/>
                <textarea readOnly placeholder="Output" value={joinedString}></textarea>
            </div>
        </>
    )
}