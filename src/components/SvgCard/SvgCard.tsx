import "./SvgCard.css";

interface SvgCardProps {
    onClick?: () => void;
    svg: React.ReactNode;
    name?: string;
}

export function SvgCard(props: SvgCardProps) {
    const { svg, onClick, name } = props;

    return (
        <div className="svg-card" onClick={onClick}>
            {svg}
            {name && <span className="svg-card-name">{name}</span>}
        </div>
    );
}
