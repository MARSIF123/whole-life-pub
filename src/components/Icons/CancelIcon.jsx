'use client'
import React from 'react'

function CancelIcon({style, onClick}) {
    
    return (
        <svg style={style}  onClick={onClick}
        width="14" height="13" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4.06066" y1="1.93934" x2="31.0607" y2="28.9393" stroke="black" strokeWidth="3" />
            <line x1="1.93934" y1="28.9393" x2="28.9393" y2="1.93934" stroke="black" strokeWidth="3" />
        </svg>

    )
}

export default CancelIcon