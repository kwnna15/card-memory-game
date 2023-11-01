import { useEffect, MouseEventHandler } from "react";

export interface ScoreBoardProps {
    wins: number;
    onNewGameClick: MouseEventHandler<HTMLButtonElement>;
}

export const ScoreBoard = ({ wins, onNewGameClick }: ScoreBoardProps) => {
    useEffect(() => {
        document.title = `${wins} wins`;
    }, [wins]);

    return (
        <header className="score-board">
            <h2>{wins} wins</h2>
            <h2>Card Memory Game</h2>
            <button onClick={onNewGameClick}>New Game</button>
        </header>
    );
};
