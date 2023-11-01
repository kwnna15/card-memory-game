import { useEffect, useState } from "react";
import { Card, CardProps } from "./components/Card";
import { ScoreBoard } from "./components/ScoreBoard";
import { getRandomizedCards } from "./datastore/cardRepository";
import { cardSelection, CardSelectionProps } from "./game/cardSelection";
import { winConditionSatisfied } from "./game/winCondition";

function App() {
    const [wins, setWins] = useState(0);
    const [cards, setCards] = useState<Array<CardProps>>(getRandomizedCards());
    const [firstCard, setFirstCard] = useState<CardProps | null>(null);
    const [secondCard, setSecondCard] = useState<CardProps | null>(null);
    const [cardSelectionDisabled, setCardSelectionDisabled] = useState(false);

    const handleClickOnCard = (card: CardProps) => {
        if (!cardSelectionDisabled) {
            firstCard ? setSecondCard(card) : setFirstCard(card);
        }
    };

    const handleNewTurn = () => {
        setFirstCard(null);
        setSecondCard(null);
        setCardSelectionDisabled(false);
    };

    const handleNewGame = () => {
        setWins(0);
        handleNewTurn();
        setCards(getRandomizedCards());
    };

    useEffect(
        () =>
            cardSelection({
                firstCard: firstCard,
                secondCard: secondCard,
                newTurn: handleNewTurn,
                setCards: setCards,
                setCardSelectionDisabled: setCardSelectionDisabled,
            } as CardSelectionProps),
        [cards, firstCard, secondCard, wins]
    );

    useEffect(() => {
        if (winConditionSatisfied(cards)) {
            setWins(wins + 1);
            handleNewTurn();
            setCards(getRandomizedCards);
        }
    }, [cards, wins]);

    return (
        <>
            <ScoreBoard onNewGameClick={handleNewGame} wins={wins} />
            <div className="card-grid">
                {cards.map((card) => {
                    const { key, image, matched } = card;
                    return (
                        <Card
                            key={key}
                            image={image}
                            selected={
                                card === firstCard ||
                                card === secondCard ||
                                matched
                            }
                            matched={matched}
                            onCardBackClick={() => handleClickOnCard(card)}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default App;
