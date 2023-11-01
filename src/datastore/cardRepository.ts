import { CardProps } from "../components/Card";

export const getRandomizedCards = () => {
    const assets = [
        { image: "/assets/volvo.png" },
        { image: "/assets/volkswagen.png" },
        { image: "/assets/lamborghini.png" },
        { image: "/assets/skoda.png" },
        { image: "/assets/tesla.png" },
        { image: "/assets/bmw.png" },
        { image: "/assets/mercedes.png" },
        { image: "/assets/saab.png" },
    ];

    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, key: Math.random() }))
        .map((card) => {
            return {
                key: "" + card.key,
                image: card.image,
                selected: false,
                matched: false,
            } as CardProps;
        });
};
