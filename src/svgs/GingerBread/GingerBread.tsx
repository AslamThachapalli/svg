import "./GingerBread.css";

export function GingerBread() {
    return (
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <circle className="head" cx="0" cy="-50" r="30" fill="brown" />
            <line className="limb" x1="-40" y1="-10" x2="40" y2="-10" />
            <line className="limb" x1="-25" y1="50" x2="0" y2="-15" />
            <line className="limb" x1="25" y1="50" x2="0" y2="-15" />
            <rect
                className="mouth"
                x="-10"
                y="-40"
                height="5"
                width="20"
                rx="2"
            />
            <circle cx="-12" cy="-55" r="3" fill="white" />
            <circle cx="12" cy="-55" r="3" fill="white" />
            <circle cx="0" cy="-10" r="5" />
            <circle cx="0" cy="10" r="5" />
        </svg>
    );
}

export const gingerBreadHtmlSource = `<svg width="200" height="200" viewBox="-100 -100 200 200">
    <circle className="head" cx="0" cy="-50" r="30" fill="brown" />
    <line className="limb" x1="-40" y1="-10" x2="40" y2="-10" />
    <line className="limb" x1="-25" y1="50" x2="0" y2="-15" />
    <line className="limb" x1="25" y1="50" x2="0" y2="-15" />
    <rect
        className="mouth"
        x="-10"
        y="-40"
        height="5"
        width="20"
        rx="2"
    />
    <circle cx="-12" cy="-55" r="3" fill="white" />
    <circle cx="12" cy="-55" r="3" fill="white" />
    <circle cx="0" cy="-10" r="5" />
    <circle cx="0" cy="10" r="5" />
</svg>
        `;

export const gingerBreadCssSource = `:root {
    --ginger-bread-color: #cd803d;
}

.head {
    fill: var(--ginger-bread-color);
}
.limb {
    stroke: var(--ginger-bread-color);
    stroke-width: 30px;
    stroke-linecap: round;
}
.mouth {
    fill: none;
    stroke-width: 2px;
    stroke: white;
}`;
