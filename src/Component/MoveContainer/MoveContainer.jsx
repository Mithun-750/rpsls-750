import { useNavigate } from 'react-router-dom'
import Lizard from '../Moves/Lizard/Lizard'
import Paper from '../Moves/Paper/Paper'
import Rock from '../Moves/Rock/Rock'
import Scissors from '../Moves/Scissors/Scissors'
import Spock from '../Moves/Spock/Spock'
import './MoveContainer.css'

export default function MoveContainer({ setScore, setCMove, Score, setPmove, setStatus }) {

    const navigate = useNavigate();

    const handleMoveClick = (move) => {
        let moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

        setPmove(move)

        let ComMove = Math.floor(Math.random() * 5);
        setCMove(moves[ComMove]);

        if ((moves.indexOf(move) === 0) && (ComMove === 1)) {
            setScore((Score - 1));
            setStatus("LOSE")
        } else if ((moves.indexOf(move) === 1) && (ComMove === 2)) {
            setScore((Score - 1));
            setStatus("LOSE")
        } else if ((moves.indexOf(move) === 2) && (ComMove === 0)) {
            setScore((Score - 1));
            setStatus("LOSE")
        } else if ((moves.indexOf(move) === 1) && (ComMove === 0)) {
            setScore((Score + 1));
            setStatus("WIN")
        } else if ((moves.indexOf(move) === 2) && (ComMove === 1)) {
            setScore((Score + 1));
            setStatus("WIN")
        } else if ((moves.indexOf(move) === 0) && (ComMove === 2)) {
            setScore((Score + 1));
            setStatus("WIN")
        } else if ((moves.indexOf(move) === 3) && (ComMove === 4)) {
            setScore((Score + 1));
            setStatus("WIN")
        } else if ((moves.indexOf(move) === 4) && (ComMove === 0)) {
            setScore((Score + 1));
            setStatus("WIN")
        } else if ((moves.indexOf(move) === 0) && (ComMove === 3)) {
            setScore((Score + 1));
            setStatus("WIN")
        } else if ((moves.indexOf(move) === 4) && (ComMove === 3)) {
            setScore((Score - 1));
            setStatus("LOSE")
        } else if ((moves.indexOf(move) === 3) && (ComMove === 2)) {
            setScore((Score - 1));
            setStatus("LOSE")
        } else if ((moves.indexOf(move) === 2) && (ComMove === 4)) {
            setScore((Score - 1));
            setStatus("LOSE")
        } else if ((moves.indexOf(move) === 2) && (ComMove === 3)) {
            setScore((Score + 1));
            setStatus("WIN")
        } else if ((moves.indexOf(move) === 1) && (ComMove === 3)) {
            setScore((Score - 1));
            setStatus("LOSE")
        } else if ((moves.indexOf(move) === 3) && (ComMove === 0)) {
            setScore((Score - 1));
            setStatus("LOSE")
        } else if ((moves.indexOf(move) === 0) && (ComMove === 4)) {
            setScore((Score - 1));
            setStatus("LOSE")
        } else if ((moves.indexOf(move) === 4) && (ComMove === 2)) {
            setScore((Score + 1));
            setStatus("WIN")
        } else if ((moves.indexOf(move) === 4) && (ComMove === 1)) {
            setScore((Score - 1));
            setStatus("LOSE")
        } else if ((moves.indexOf(move) === 1) && (ComMove === 4)) {
            setScore((Score + 1));
            setStatus("WIN")
        } else if ((moves.indexOf(move) === 3) && (ComMove === 1)) {
            setScore((Score + 1));
            setStatus("WIN")
        } else {
            setStatus("DRAW")
        }

        navigate('/result')

    }
    return (
        <div id='MoveContainer'>
            <div className='inner-moveCon' id="con1">
                <Scissors onClick={() => { handleMoveClick('scissors') }} />
            </div>
            <div className='inner-moveCon' id="con2">
                <Spock onClick={() => { handleMoveClick('spock') }} />
                <Paper onClick={() => { handleMoveClick('paper') }} />
            </div>
            <div className='inner-moveCon' id="con3">
                <Lizard onClick={() => { handleMoveClick('lizard') }} />
                <Rock onClick={() => { handleMoveClick('rock') }} />
            </div>
        </div>
    )
}
