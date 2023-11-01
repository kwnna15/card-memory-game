import { CardProps } from "../components/Card";

export interface CardSelectionProps {
    firstCard: CardProps;
    secondCard: CardProps;
    newTurn: () => void;
    setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
    setCardSelectionDisabled: (isDisabled: boolean | null) => void;
}

export const cardSelection = ({
    firstCard,
    secondCard,
    newTurn,
    setCards,
    setCardSelectionDisabled,
}: CardSelectionProps) => {
    let timer: NodeJS.Timer;

    if (firstCard && secondCard) {
        if (firstCard.image === secondCard.image) {
            setCards((prevCards) =>
                updateMatchedState({
                    prevCards: prevCards,
                    matchedCard: firstCard
                } as UpdateMatchedStateProps)
            );
            newTurn();
        } else {
            setCardSelectionDisabled(true);
            timer = setTimeout(() => {
                newTurn();
            }, 500);
        }
    }

    return () => {
        clearTimeout(timer);
    };
};

interface UpdateMatchedStateProps {
    prevCards: CardProps[];
    matchedCard: CardProps;
}

const updateMatchedState = ({
    prevCards,
    matchedCard,
}: UpdateMatchedStateProps) => {
    return prevCards.map((card) => {
        if (card.image === matchedCard.image) {
            return { ...card, matched: true };
        } else {
            return card;
        }
    });
};
