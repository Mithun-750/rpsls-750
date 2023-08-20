import React from 'react';
import paperImage from '../../../images/icon-paper.svg';

export default function Paper({ onClick, className }) {
    const paperStyle = {
        backgroundColor: 'azure',
        display: 'inline-block',
        padding: '25px',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0px 0px 50px #000000b8',
    };
    const circleStyle = {
        display: 'inline-block',
        borderRadius: '50%',
        border: '20px solid hsl(230, 89%, 65%)',
        boxShadow: '0px 0px 50px #000000b8',
        transition: 'all 1s ease-out',
    };

    return (
        <div className={"circle " + className} style={circleStyle}>
            <div id='papre' style={paperStyle} onClick={onClick}>
                <img src={paperImage} alt="A paper" style={{ width: '50px', height: '50px' }} />
            </div>
        </div>
    );
}
