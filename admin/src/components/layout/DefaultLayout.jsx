import React from 'react'
import { Sidebar } from './Sidebar'
import { Grid } from '@mui/material';

function DefaultLayout({ children }) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2} >
                <Sidebar />
            </Grid>
            <Grid item xs={10} sx={{ width: '100%', backgroundColor: '#f3f1ef', paddingRight: '20px' }}>
                {children}
            </Grid>
        </Grid>
    )
}

export default DefaultLayout