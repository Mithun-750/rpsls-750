import React from 'react';
import spockImage from '../../../images/icon-spock.svg'

export default function Spock({ onClick, className }) {
    const spockStyle = {
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
        border: '20px solid hsl(189, 58%, 57%)',
        boxShadow: '0px 0px 50px #000000b8',
        transition: 'all 1s ease-out',
    };

    return (
        <div className={"circle " + className} style={circleStyle} >

            <div id='spock' style={spockStyle} onClick={onClick}>
                <img src={spockImage} alt="A spock" style={{ width: '50px', height: '50px' }} />
            </div>
        </div>
    );
}
