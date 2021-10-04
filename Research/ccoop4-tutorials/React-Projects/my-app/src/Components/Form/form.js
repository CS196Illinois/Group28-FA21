import React from 'react';

export const Form = ({ userInput, onFormChange })=> {

    const handleChange = (event) => {
        onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return(
        <>
            <form>
                <input type='text' required value={userInput} onChange={handleChange}></input>
                <input type='submit'></input>
            </form>
        </>)
}