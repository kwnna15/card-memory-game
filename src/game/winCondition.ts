import { CardProps } from "../components/Card";

export const winConditionSatisfied = (cards: CardProps[]) => {
    const checkWin = cards.filter((card) => !card.matched);
    if (cards.length && checkWin.length < 1) {
        return true;
    }
    return false;
};
