import { CardProps } from "../../components/Card";
import { winConditionSatisfied } from '../../game/winCondition';

test('None matched', () => {
    const card = {
        key: "1",
        image: "image",
        selected: false,
        matched: false,
    } as CardProps;

    const isWin = winConditionSatisfied([card]);

    expect(isWin).toBe(false);
})

test('All matched', () => {
    const card = {
        key: "1",
        image: "image",
        selected: false,
        matched: true,
    } as CardProps;

    const isWin = winConditionSatisfied([card]);

    expect(isWin).toBe(true);
})

test('Multiple some matched', () => {
    const card1 = {
        key: "1",
        image: "image",
        selected: false,
        matched: true,
    } as CardProps;
    const card2 = {
        key: "2",
        image: "image",
        selected: false,
        matched: false,
    } as CardProps;
    const card3 = {
        key: "3",
        image: "image",
        selected: false,
        matched: true,
    } as CardProps;

    const isWin = winConditionSatisfied([card1, card2, card3]);

    expect(isWin).toBe(false);
})

test('Multiple all matched', () => {
    const card1 = {
        key: "1",
        image: "image",
        selected: false,
        matched: true,
    } as CardProps;
    const card2 = {
        key: "2",
        image: "image",
        selected: false,
        matched: true,
    } as CardProps;
    const card3 = {
        key: "3",
        image: "image",
        selected: false,
        matched: true,
    } as CardProps;

    const isWin = winConditionSatisfied([card1, card2, card3]);

    expect(isWin).toBe(true);
})