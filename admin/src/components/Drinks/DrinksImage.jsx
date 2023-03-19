import React, { memo, useEffect } from 'react'

const style = {
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
}


const DrinksImage = React.memo(({ image, status }) => {
    if (!image) {
        return <p>Loading...</p>
    }
    return status ? <img src={image} style={style.image} alt="" /> : <img src={image} style={style.image_disable} alt="" />
});

export default DrinksImage;