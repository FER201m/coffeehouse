import { Box, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const style = {
    container: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        right: '0',
        zIndex: '1',
        backgroundColor: '#a0a0a04a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: '300px',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: '5px',
        position: 'relative',
    },
    image: {
        width: '60%',
        height: 'auto',
        objectFit: 'contain',
        marginBottom: '20px'
    },
    name: {
        fontWeight: 'bold'
    },
    price: {
        color: '#876445',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "10px",
        padding: '10px',
        position: 'relative',
    },
    icons: {
        position: 'absolute',
        right: '20px',
        top: '20px',
    },
    button: {
        padding: '10px 15px',
        fontWeight: 'bold',
        backgroundColor: '#876445',
        outline: 'none',
        border: 'none',
        color: '#F4DFBA',
        borderRadius: '2px',
    },
}

export const DrinkPopup = () => {
    return (
        <Box sx={style.container}>
            <Box sx={style.box}>
                <Box sx={style.content} >
                    <img src="https://phuclong.com.vn/uploads/dish/a66aecd5b760eb-traolongmangcau.png" style={style.image} alt="" />
                    <Typography sx={style.name}>Trà Ô Long Mãng Cầu</Typography>
                    <Typography sx={style.price}>50.000 đ</Typography>
                    <button style={style.button}>Save</button>
                </Box>
                <CloseIcon style={style.icons} />
            </Box>

        </Box>
    )
}
