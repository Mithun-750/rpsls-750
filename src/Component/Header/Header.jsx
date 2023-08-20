import './Header.css'

export default function Header({ Score }) {
    return (
        <div id='header'>
            <div className="text-light" id='title'>
                <h1>ROCK</h1>
                <h1>PAPER</h1>
                <h1>SCISSORS</h1>
                <h1>LIZARD</h1>
                <h1>SPOCK</h1>
            </div>

            <div id='score-container'>
                <h2 className="text-blue" >SCORE</h2>
                <h1 className="text-dark" id="score">{Score}</h1>
            </div>
        </div>
    )
}
