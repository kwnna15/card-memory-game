import { MouseEventHandler } from "react";

export interface CardProps {
    key: string;
    image: string;
    selected: boolean;
    matched: boolean;
    onCardBackClick: MouseEventHandler<HTMLImageElement>;
}

export const Card = ({ image, selected, onCardBackClick }: CardProps) => {
    return (
        <div className="card">
            <div className={selected ? "selected" : ""}>
                <img alt="" src={image} className="card-face" />
                <img
                    alt=""
                    className="card-back"
                    src={"/assets/question-mark.png"}
                    onClick={onCardBackClick}
                />
            </div>
        </div>
    );
};
