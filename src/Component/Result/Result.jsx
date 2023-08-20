import React, { useEffect, useState } from 'react'
import './Result.css'
import Rock from '../Moves/Rock/Rock';
import Paper from '../Moves/Paper/Paper';
import Scissors from '../Moves/Scissors/Scissors';
import Spock from '../Moves/Spock/Spock';
import Lizard from '../Moves/Lizard/Lizard';
import { Link, useNavigate } from 'react-router-dom';

export default function Result({ Pmove, CMove, Status }) {

    const [winClass, setWinClass] = useState('')
    const [ShowCMove, setShowCMove] = useState(false)
    const Navigate = useNavigate();

    useEffect(() => {
        return () => {
            setTimeout(() => {
                if (!ShowCMove) {
                    setShowCMove(true)
                    setTimeout(() => {
                        setWinClass('win')
                    }, 300);
                }
            }, 1000);
        }
    }, [Status])

    useEffect(() => {
        return () => {
            if (Status === '') {
                Navigate('/')
            }
        }
    })


    const restWin = () => {
        setShowCMove(false)
        setWinClass('')
    }


    return (
        <>
            <div id="result">

                <div className='picked result-comp'>
                    <h1 className='text-light' >You Picked</h1>
                    {(Pmove == 'rock') && (
                        <Rock className={(Status === "WIN") ? winClass : ""} />
                    )}
                    {(Pmove == 'paper') && (
                        <Paper className={(Status === "WIN") ? winClass : ""} />
                    )}
                    {(Pmove == 'scissors') && (
                        <Scissors className={(Status === "WIN") ? winClass : ""} />
                    )}
                    {(Pmove == 'lizard') && (
                        <Lizard className={(Status === "WIN") ? winClass : ""} />
                    )}
                    {(Pmove == 'spock') && (
                        <Spock className={(Status === "WIN") ? winClass : ""} />
                    )}
                </div>
                {ShowCMove && (<div id='result-status' className={'text-light text-center result-comp ' + winClass} >
                    <h1> {(Status === "DRAW") ? "" : "You"} {Status}!</h1>
                    <Link to={'/'}>
                        <button className='btn' onClick={restWin}>
                            Play Again
                        </button>
                    </Link>
                </div>)}
                <div className='picked result-comp'>
                    <h1 className='text-light'>House Picked</h1>
                    <div className='CMove-con'>

                        {(ShowCMove) && (CMove == 'rock') && (
                            <Rock className={(Status === "LOSE") ? winClass : ""} />
                        )}
                        {(ShowCMove) && (CMove == 'paper') && (
                            <Paper className={(Status === "LOSE") ? winClass : ""} />
                        )}
                        {(ShowCMove) && (CMove == 'scissors') && (
                            <Scissors className={(Status === "LOSE") ? winClass : ""} />
                        )}
                        {(ShowCMove) && (CMove == 'lizard') && (
                            <Lizard className={(Status === "LOSE") ? winClass : ""} />
                        )}
                        {(ShowCMove) && (CMove == 'spock') && (
                            <Spock className={(Status === "LOSE") ? winClass : ""} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
