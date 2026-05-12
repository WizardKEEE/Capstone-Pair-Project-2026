import { useState } from "react"
export const Base64Ciph = ({ciphVal}) => {
    const [inputVal, setInputVal] = useState('');

    const handleChange = (e) => {
        setInputVal(e.target.value);
    }

    return (
        <>
            <div>
                <input type="text" value={inputVal} onChange={handleChange} placeholder="Type a sentance to encode it"/>
            </div>
        </>
    )
}