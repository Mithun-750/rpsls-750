import React from 'react';
import scissorsImage from '../../../images/icon-scissors.svg';

export default function Scissors({ onClick, className }) {
    const scissorsStyle = {
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
        border: '20px solid hsl(40, 84%, 53%)',
        boxShadow: '0px 0px 50px #000000b8',
        transition: 'all 1s ease-out',
    };

    return (
        <div className={"circle " + className} style={circleStyle} >

            <div id='scissors' style={scissorsStyle} onClick={onClick}>
                <img src={scissorsImage} alt="A pair of scissors" style={{ width: '50px', height: '50px' }} />
            </div>
        </div>
    );
}
