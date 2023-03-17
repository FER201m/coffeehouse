import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { DrinkPopup } from '~/components/DrinksPopup/DrinkPopup';

const style = {
    container: {
        // backgroundColor: 'red'
        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "10px",
        padding: '10px',
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
        backgroundColor: '#F4DFBA',
        borderRadius: '7px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "10px",
        padding: '20px 2px'
    },
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
    icons: {
        position: 'absolute',
        right: '20px',
        top: '20px',
    }
}

export const Drinks = () => {
    return (
        <>
            <Box sx={style.search}>
                <input type="text" placeholder='Search by name' style={style.input} />
                <button style={style.button}>Search</button>
            </Box>
            <Grid sx={style.container} spacing={4}>
                <Grid item sx={style.card} xs={3}>
                    <Box sx={style.content} >
                        <img src="https://phuclong.com.vn/uploads/dish/a66aecd5b760eb-traolongmangcau.png" style={style.image} alt="" />
                        <Typography sx={style.name}>Trà Ô Long Mãng Cầu</Typography>
                        <Typography sx={style.price}>50.000 đ</Typography>
                    </Box>
                    <SettingsIcon style={style.icons} />
                </Grid>

                <Grid item sx={style.card} xs={3}>
                    <Box sx={style.content} >
                        <img src="https://phuclong.com.vn/uploads/dish/a66aecd5b760eb-traolongmangcau.png" style={style.image} alt="" />
                        <Typography sx={style.name}>Trà Ô Long Mãng Cầu</Typography>
                        <Typography sx={style.price}>50.000 đ</Typography>
                    </Box>
                    <SettingsIcon style={style.icons} />

                </Grid>

                <Grid item sx={style.card} xs={3}>
                    <Box sx={style.content} >
                        <img src="https://phuclong.com.vn/uploads/dish/a66aecd5b760eb-traolongmangcau.png" style={style.image} alt="" />
                        <Typography sx={style.name}>Trà Ô Long Mãng Cầu</Typography>
                        <Typography sx={style.price}>50.000 đ</Typography>
                    </Box>
                    <SettingsIcon style={style.icons} />
                </Grid>

                <Grid item sx={style.card} xs={3}>
                    <Box sx={style.content} >
                        <img src="https://phuclong.com.vn/uploads/dish/a66aecd5b760eb-traolongmangcau.png" style={style.image} alt="" />
                        <Typography sx={style.name}>Trà Ô Long Mãng Cầu</Typography>
                        <Typography sx={style.price}>50.000 đ</Typography>
                    </Box>
                    <SettingsIcon style={style.icons} />
                    <DrinkPopup />
                </Grid>

                <Grid item sx={style.card} xs={3}>
                    <Box sx={style.content} >
                        <img src="https://phuclong.com.vn/uploads/dish/a66aecd5b760eb-traolongmangcau.png" style={style.image} alt="" />
                        <Typography sx={style.name}>Trà Ô Long Mãng Cầu</Typography>
                        <Typography sx={style.price}>50.000 đ</Typography>
                    </Box>
                    <SettingsIcon style={style.icons} />

                </Grid>



            </Grid>
        </>
    )
}
