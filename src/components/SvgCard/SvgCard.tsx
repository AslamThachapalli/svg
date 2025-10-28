import "./SvgCard.css";

interface SvgCardProps {
    onClick?: () => void;
    svg: React.ReactNode;
}

export function SvgCard(props: SvgCardProps) {
    const { svg, onClick } = props;

    return (
        <div className="svg-card" onClick={onClick}>
            {svg}
        </div>
    );
}
