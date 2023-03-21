import { Box, Button, Menu, MenuItem, createTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import SettingsIcon from '@mui/icons-material/Settings';

import ROUTER from '~/api/server';
import SraffPopup from '~/components/StaffPopup/SraffPopup';
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
    createButton: {
        height: '80%',
        padding: '0 15px',
        fontWeight: 'bold',
        backgroundColor: '#876445',
        outline: 'none',
        border: 'none',
        color: '#F4DFBA',
        borderRadius: '2px',
        marginLeft: "20px"
    }

}

function Staff() {
    const [Staff, setStaff] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedIdPopup, setSelectedIdPopup] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isCreateNew, setIsCreateNew] = useState(false)
    // useEffect(() => {
    //     if (!selectedIdPopup) return
    //     setSelectedUser(Staff.find(staff => staff._id === selectedIdPopup))

    // }, [selectedIdPopup])

    console.log(selectedUser)

    useEffect(() => {
        getAllStaff();
    }, [])

    const handleMenuClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };

    const addToStaff = async (id) => {
        console.log(id);
    };

    const getAllStaff = async () => {
        try {
            const response = await axios.get(`${ROUTER}/api/users/staff`);
            const formatArr = await response.data.map(staff => ({ ...staff, id: staff._id }))
            setStaff(formatArr)
        } catch (error) {
            console.log(error.message);
        }
    }

    const onUpdateStatusStaff = (status, user_id) => {
        const userTmp = [...Staff];
        const updateIndex = userTmp.findIndex(staff => staff._id == user_id)
        userTmp[updateIndex].status = status;
        setStaff(userTmp);
    }

    const columns = [
        // { field: 'id', headerName: 'ID', width: 70 },
        { field: 'fullname', headerName: 'Full name', width: 210 },
        { field: 'phone', headerName: 'Phone', width: 210 },
        { field: 'role', headerName: 'Role', width: 210 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'gender', headerName: 'Gender', width: 210 },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            flex: 1,
            width: 100,
            renderCell: (params) => (
                <button style={{
                    // height: '50%',
                    padding: '5px 10px',
                    fontWeight: 'bold',
                    backgroundColor: 'inherit',
                    outline: 'none',
                    border: 'none',
                    color: '#876445',
                    fontSise: "10px",
                    borderRadius: '10px'
                }} variant="contained" className='hover' onClick={(event) => handleMenuClick(event, params.row)}>
                    <SettingsIcon style={{ fontSize: "20px" }} />
                </button>
            ),
        },

    ];

    return (
        <>
            <Box sx={style.search}>
                <input type="text" placeholder='Search by name' style={style.input} />
                <button style={style.button}>Search</button>
                <button onClick={() => setIsCreateNew(true)} className='hover' style={style.createButton}>Create user</button>
            </Box>

            {isCreateNew ? <SraffPopup setStaff={setStaff} onClose={setIsCreateNew} /> : undefined}


            <DataGrid
                rows={Staff}
                sx={{ height: '90%', width: '100%' }}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowClassName={(params) => (params.row.status ? "" : "MuiDataGrid-row-disabled")} // apply the MuiDataGrid-row-disabled class to specific rows

            // checkboxSelection
            />
            {selectedIdPopup ? <SraffPopup Staff={Staff} setStaff={setStaff} user={selectedUser} onClose={setSelectedIdPopup} /> : undefined}

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={() => {
                    setSelectedIdPopup(selectedRow.id)
                    setSelectedUser(Staff.find(staff => staff._id === selectedRow.id))
                }}>
                    <Box sx={{
                        fontWeight: "600",
                        fontSize: "15px",
                        '&:hover': {
                            cursor: 'pointer',
                            opacity: '0.5'
                        }
                    }}>Edit</Box>
                </MenuItem>
                <MenuItem onClick={() => onUpdateStatusStaff(false, selectedRow.id)}>
                    <Box sx={{
                        fontWeight: "600",
                        fontSize: "15px",
                        '&:hover': {
                            cursor: 'pointer',
                            opacity: '0.5'
                        }
                    }}>Disable</Box>
                </MenuItem>
            </Menu>

        </>
    )
}

export default Staff 