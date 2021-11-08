import React from 'react'
import imgloading from '../../assets/image/loading.gif'

export default function Loading() {
    const Style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div className={`${Style}`}>
            <img src={`${imgloading}`} alt="loading...." />
        </div>
    )
}
