import { Box, Grid, Typography } from '@mui/material';
import React, { memo, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { DrinkPopup } from '~/components/DrinksPopup/DrinkPopup';
import useFormatMoney from '~/hooks/useFormatMoney';
import SettingsIcon from '@mui/icons-material/Settings';
import ROUTER from '~/api/server';
import axios from 'axios';
import DrinksImage from '../Drinks/DrinksImage';

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
    image_disable: {
        width: '60%',
        height: 'auto',
        objectFit: 'contain',
        marginBottom: '20px',
        filter: 'grayscale(100%)'
    },
    name: {
        fontWeight: 'bold'
    },
    price: {
        color: '#876445',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    price_disable: {
        color: '#dbdbdb',
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
    content_disable: {
        backgroundColor: '#888888',
        borderRadius: '7px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "10px",
        padding: '20px 2px',
        color: "#dbdbdb"
    },
    newContent: {
        backgroundColor: '#F4DFBA',
        borderRadius: '7px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "10px",
        padding: '20px 2px',
        height: '100%',
        width: '100%',
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
    newButton: {
        height: '10%',
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
    },
    newDrink: {
        fontSize: '100px'
    },
    newDrinkTxt: {
        fontSize: '20px',
        fontWeight: 'bold'
    },

}

function CardDrink({ drink, DrinkList, setDrinkList }) {
    const [OpenSetting, setOpenSetting] = useState(false);
    const [popupDrink, setPopupDrink] = useState(false);


    const onChangStatus = async (drink_id, status) => {
        const drinkTmp = DrinkList;
        const updateIndex = drinkTmp.findIndex(drink => drink._id == drink_id)
        drinkTmp[updateIndex].status = status
        const response = status ? axios.put(`${ROUTER}/api/drinks/${drink_id}`, drinkTmp[updateIndex]) : axios.delete(`${ROUTER}/api/drinks/${drink_id}`)
        setDrinkList(() => drinkTmp)

    }

    const addUpdateDrinks = (updateDrinks) => {
        const drinksTmp = DrinkList;
        const updateIndex = drinksTmp.findIndex(drink => drink._id == updateDrinks._id)
        console.log(drinksTmp[updateIndex]);
        console.log();
        drinksTmp[updateIndex] = updateDrinks
        setDrinkList(() => [...drinksTmp])
    }

    const onChangeSettingPopup = (status) => {
        setOpenSetting(status)
    }

    const onToggleDrinkDetail = (status) => {
        setPopupDrink(status)
    }

    const onMouseLeave = () => {
        setOpenSetting(false);
    }


    return (
        <Grid item sx={style.card} xs={3} >
            <Box sx={drink.status ? style.content : style.content_disable} >
                <DrinksImage image={drink.image} status={drink.status} />
                <Typography sx={style.name}>{drink.name}</Typography>
                <Typography sx={drink.status ? style.price : style.price_disable}>{useFormatMoney(drink.price)}</Typography>
                {OpenSetting ?
                    <Box onMouseLeave={onMouseLeave}
                        sx={{
                            width: '100px',
                            heihgt: "400px",
                            backgroundColor: "white",
                            position: "absolute",
                            right: '30px',
                            top: '30px',
                            zIndex: '1',
                            borderRadius: "5px"
                        }}>
                        <Box onClick={() => onToggleDrinkDetail(true)} sx={{
                            padding: "10px",
                            fontWeight: "600",
                            '&:hover': {
                                cursor: 'pointer',
                                opacity: '0.5'
                            }
                        }}>Edit</Box>
                        {
                            drink.status ?
                                <Box sx={{
                                    padding: "10px",
                                    fontWeight: "600",
                                    '&:hover': {
                                        cursor: 'pointer',
                                        opacity: '0.5'
                                    }
                                }} onClick={() => onChangStatus(drink._id, false)} >Disable</Box>
                                :
                                <Box sx={{
                                    padding: "10px",
                                    fontWeight: "600",

                                    '&:hover': {
                                        cursor: 'pointer',
                                        opacity: '0.5'
                                    }
                                }} onClick={() => onChangStatus(drink._id, true)} >Enable</Box>
                        }
                    </Box> : undefined}
                <SettingsIcon onClick={() => onChangeSettingPopup(true)} className="hover" style={style.icons} />

            </Box>
            {popupDrink ? <DrinkPopup addUpdateDrinks={addUpdateDrinks} drink={drink} onClose={() => onToggleDrinkDetail(false)} /> : undefined}
        </Grid>
    )
}

export default memo(CardDrink)