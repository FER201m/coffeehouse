import React from 'react'
import { Sidebar } from './Sidebar'

function DefaultLayout({ children }) {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}

export default DefaultLayout