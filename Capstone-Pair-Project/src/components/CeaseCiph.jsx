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
        if (asciicodes[index] === ' ') {
            asciiArr[index] = 32;
            continue;
        }
        asciiArr.push(parseInt(asciicodes.charCodeAt(index)) + parseInt(shiftAmount));
        if (asciiArr[index] >= 123) {
            let offset = asciiArr[index] - 123;
            asciiArr[index] =  97 + offset;
        } else if (asciiArr[index] <= 96) {
            let offset = asciiArr[index] - 97;  
            asciiArr[index] = 123 + offset;
        }
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