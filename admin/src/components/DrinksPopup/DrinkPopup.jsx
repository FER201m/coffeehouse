import { Box, CircularProgress, TextField, Typography, Zoom } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import useFormatMoney from '~/hooks/useFormatMoney';
import AddIcon from '@mui/icons-material/Add';
import uploadImageToFirebase from './uploadImageToFirebase';
import ROUTER from '~/api/server';
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';
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
        padding: '20px 0',
        display: 'flex',
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
        position: 'relative',
        width: "100%",
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
    inputFile: {
        width: '120px',
        // backgroundColor: 'black',
        height: '120px',
        borderRadius: '10px',
        border: "dashed 3px #876445",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        fontSize: "50px",
        color: "#876445"
    },
    delete: {
        position: "absolute",
        top: "70px",
        fontWeight: 'bold',
        backgroundColor: '#876445',
        outline: 'none',
        border: 'none',
        color: '#F4DFBA',
        borderRadius: '50%',
        height: "50px",
        width: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',

    }
}

export const DrinkPopup = ({ drink, onClose, addNewDrinks, addUpdateDrinks }) => {
    const [name, setName] = useState(drink ? drink.name : "");
    const [price, setPrice] = useState(drink ? drink.price : "");
    const [image, setImage] = useState(drink ? drink.image : "");
    const [file, setFile] = useState()
    const formatMoney = useFormatMoney()
    const [isLoading, setIsLoading] = useState(false);
    const [showDeleteBtn, setShowDeleteBtn] = useState(false);

    const onAddNewImages = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file)
            setImage(URL.createObjectURL(file))
        }
    }

    const onUpdateNewDrinks = async () => {
        try {
            let imgFirebaseURL = ""
            setIsLoading(true)
            if (!drink) {
                imgFirebaseURL = await uploadImageToFirebase(file);
            }
            // name, price, image
            const data = {
                name: name,
                price: price,
                image: drink ? drink.image : imgFirebaseURL,
                status: drink.status
            }
            const respone = drink ? await axios.put(`${ROUTER}/api/drinks/${drink._id}`, data) : await axios.post(`${ROUTER}/api/drinks`, data);

            if (respone) {
                setIsLoading(false)
                setName("")
                setPrice("")
                setImage("")
                if (drink) {
                    return addUpdateDrinks(respone.data)
                }
                addNewDrinks(respone.data)
            }


        } catch (error) {
            console.log(error);
        }
    }

    if (!drink) {
        return (
            <Box sx={style.container}>
                <Zoom in={true}>
                    <Box sx={style.box}>
                        <Box sx={style.content} >
                            {
                                !image ?
                                    <label label className="hover" style={style.inputFile}>
                                        <AddIcon style={style.icon} />
                                        <input type="file" style={{ display: 'none' }} id="file-upload" onChange={(e) => onAddNewImages(e)} />
                                    </label>
                                    :
                                    <img src={image} style={style.image} alt="" />
                            }
                            <TextField
                                id="standard-password-input"
                                label="Name"
                                type="text"
                                autoComplete="current-password"
                                variant="standard"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                            <TextField
                                id="standard-password-input"
                                label="Price"
                                type="number"
                                autoComplete="current-password"
                                variant="standard"
                                onChange={e => setPrice(e.target.value)}
                                value={price}
                            />
                            {
                                isLoading ?
                                    <Box sx={{ height: "50px", width: "50px" }} >
                                        <CircularProgress />
                                    </Box>
                                    :
                                    <button onClick={onUpdateNewDrinks} className="hover" style={style.button}>Save</button>
                            }
                        </Box>
                        <CloseIcon className="hover" onClick={() => onClose(null)} style={style.icons} />
                    </Box>
                </Zoom>
            </Box>
        )
    }

    const onDeleteImage = () => {
        setImage(null)
        setShowDeleteBtn(false)
    }

    return (
        <Box sx={style.container}>
            <Zoom in={true}>
                <Box sx={style.box}>
                    <Box sx={style.content} >
                        <img onMouseOver={() => setShowDeleteBtn(true)}
                            onMouseOut={() => setShowDeleteBtn(false)} src={image} style={style.image} alt="" />
                        {
                            !image ?
                                <label label className="hover" style={style.inputFile}>
                                    <AddIcon style={style.icon} />
                                    <input type="file" style={{ display: 'none' }} id="file-upload" onChange={(e) => onAddNewImages(e)} />
                                </label>
                                :
                                showDeleteBtn ?
                                    <button onClick={onDeleteImage} style={style.delete} onMouseOver={() => setShowDeleteBtn(true)}>
                                        <ClearIcon />
                                    </button> : undefined
                        }
                        <TextField
                            id="standard-password-input"
                            label="Name"
                            type="text"
                            autoComplete="current-password"
                            variant="standard"
                            defaultValue={name}
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Price"
                            type="number"
                            autoComplete="current-password"
                            variant="standard"
                            defaultValue={price}
                            onChange={e => setPrice(e.target.value)}
                            value={price}
                        />
                        {
                            isLoading ?
                                <Box sx={{ height: "50px", width: "50px" }} >
                                    <CircularProgress />
                                </Box>
                                :
                                <button onClick={onUpdateNewDrinks} className="hover" style={style.button}>Save</button>
                        }
                    </Box>
                    <CloseIcon className="hover" onClick={() => onClose(null)} style={style.icons} />
                </Box>
            </Zoom>
        </Box>
    )
}
