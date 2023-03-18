import { Avatar, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PersonIcon from '@mui/icons-material/Person';
import StyleIcon from '@mui/icons-material/Style';
import { v4 as uuidv4 } from 'uuid';
import LogoutIcon from '@mui/icons-material/Logout';

const style = {
    container: {
        width: '100%',
        backgroundColor: '#ffffff',
        height: '100vh',
        padding: "20px 10px",
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '20px'
    },
    avatar: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px'
    },
    name: {
        fontWeight: "medium"
    },
    selectBox: {
        width: '100%',
        height: 'auto',
    },
    selectItem: {
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: '#88878642',
        borderRadius: '5px',
        margin: '12px 0px',
        color: '#876445',

    },
    selectItemChoice: {
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: '#F4DFBA',
        borderRadius: '5px',
        margin: '12px 0px',
        color: 'black'
    },
    itemText: {
        padding: " 10px 10px",
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontWeight: "medium",
        fontSize: '17px',
        width: '50%',
    },
    logout: {
        display: 'flex',
        padding: '10px',
        width: '100%',
        gap: '10px',
        marginTop: 'auto',
        boxSizing: 'border-box',
        borderRadius: '5px',
        '&:hover': {
            cursor: 'pointer'
        }
    }
}

export const Sidebar = () => {
    const [choiceIndex, setChoiceIndex] = useState(0);

    const onSelectRouter = (index) => setChoiceIndex(index)

    const selectRouter = [
        { path: '/', logo: <HomeIcon />, name: 'Dashboard' },
        { path: '/home', logo: <FastfoodIcon />, name: 'Drinks' },
        { path: '/', logo: <PersonIcon />, name: 'Staff' },
        { path: '/cards', logo: <StyleIcon />, name: 'Card' },
    ]

    return (
        <Box sx={style.container}>
            {/* Logo */}
            <h2>COFFEE.HOUSE</h2>

            {/* Avatar */}
            <Box sx={style.avatar}>
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                />
                <Typography sx={style.name} >ADMIN</Typography>
            </Box>

            {/* Select Router */}
            <Box sx={style.selectBox}>

                {/* Select Item */}
                {
                    selectRouter.map((router, index) => (
                        <Link to={router.path} key={uuidv4()}>
                            <Box onClick={() => onSelectRouter(index)} sx={index == choiceIndex ? style.selectItemChoice : style.selectItem}>
                                <Typography sx={style.itemText}>
                                    {router.logo}
                                    {router.name}
                                </Typography>
                            </Box>
                        </Link>
                    ))
                }
            </Box>

            {/* Logout */}
            <Box sx={style.logout}>
                <LogoutIcon />
                <Typography>Exit</Typography>
            </Box>
        </Box>
    )
}
