import React from 'react';
import lizardImage from '../../../images/icon-lizard.svg';

export default function Lizard({ onClick, className }) {
    const lizardStyle = {
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
        border: '20px solid hsl(261, 72%, 63%)',
        boxShadow: '0px 0px 50px #000000b8',
        transition: 'all 1s ease-out',
    };

    return (
        <div className={"circle " + className} style={circleStyle} >
            <div id='lizard' style={lizardStyle} onClick={onClick}>
                <img src={lizardImage} alt="A lizard" style={{ width: '50px', height: '50px' }} />
            </div>
        </div>
    );
}
