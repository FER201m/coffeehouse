import { Box } from '@mui/material'
import React from 'react'

const style = {
    search: {
        width: '100%',
        height: '50px',
        display: 'flex',
        padding: '5px',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: '80%',
        padding: '0 15px',
        outline: 'none',
        borderRadius: '15px',
        border: "none",
        fontSize: '15px',
        marginRight: '10px',
        width: '30%'
    },
    button: {
        height: '80%',
        padding: '0 15px',
        fontWeight: 'bold',
        backgroundColor: '#876445',
        outline: 'none',
        border: 'none',
        color: '#F4DFBA',
        borderRadius: '2px'
    },
}

function Staff() {
    return (
        <>
            <Box sx={style.search}>
                <input type="text" placeholder='Search by name' style={style.input} />
                <button style={style.button}>Search</button>
            </Box></>
    )
}

export default Staff 