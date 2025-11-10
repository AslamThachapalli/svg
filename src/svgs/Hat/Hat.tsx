import "./Hat.css";

export function Hat() {
    return (
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <def>
                <g id="hat-star">
                    <polygon
                        id="hat-star-arm"
                        points="-3,0 0,-12 3,0 0,5"
                        fill="#FDCD60"
                    />
                    <use href="#hat-star-arm" transform="rotate(90)" />
                    <use href="#hat-star-arm" transform="rotate(-90)" />
                    <use href="#hat-star-arm" transform="rotate(180)" />
                </g>

                <path
                    id="hat-flower-petal"
                    d="M -2 0
                    C -5 -18 5 -18 2 0"
                    stroke="#5546CB"
                    fill="white"
                    stroke-width="2"
                />
            </def>

            <ellipse
                className="hat-stroke"
                cx="0"
                cy="35"
                rx="80"
                ry="30"
                fill="#AFBCF3"
            />

            <path
                className="hat-stroke"
                d="M -50 -10 
                L -50 30
                Q 0 45 50 30 
                L 50 -10
                Q 0 0 -50 -10"
                fill="#F97744"
            />

            <path
                className="hat-stroke"
                d="M -50 -10
                C -50 -60 50 -60 50 -10
                Q 0 0 -50 -10"
                fill="#FDCD60"
            />

            <use href="#hat-star" transform="translate(-60 75)" />
            <use href="#hat-star" transform="translate(-65 -5) scale(0.5)" />
            <use href="#hat-star" transform="translate(60 -45) scale(1.5)" />
            <use href="#hat-star" transform="translate(80 -25) scale(0.75)" />

            <circle cx="-65" cy="-40" r="2" fill="#5546CB" />
            <circle
                cx="65"
                cy="70"
                r="5"
                fill="none"
                stroke="#5546CB"
                stroke-width="4"
            />

            <g transform="translate(44 27)">
                <use href="#hat-flower-petal" />
                <use href="#hat-flower-petal" transform="rotate(45)" />
                <use href="#hat-flower-petal" transform="rotate(90)" />
                <use href="#hat-flower-petal" transform="rotate(135)" />
                <use href="#hat-flower-petal" transform="rotate(180)" />
                <use href="#hat-flower-petal" transform="rotate(225)" />
                <use href="#hat-flower-petal" transform="rotate(270)" />
                <use href="#hat-flower-petal" transform="rotate(315)" />
                <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#FDCD60"
                    stroke="#5546CB"
                    stroke-width="2"
                />
            </g>
        </svg>
    );
}

export const hatHtmlSource = `<svg width="200" height="200" viewBox="-100 -100 200 200">
    <def>
        <g id="hat-star">
            <polygon
                id="hat-star-arm"
                points="-3,0 0,-12 3,0 0,5"
                fill="#FDCD60"
            />
            <use href="#hat-star-arm" transform="rotate(90)" />
            <use href="#hat-star-arm" transform="rotate(-90)" />
            <use href="#hat-star-arm" transform="rotate(180)" />
        </g>

        <path
            id="hat-flower-petal"
            d="M -2 0
            C -5 -18 5 -18 2 0"
            stroke="#5546CB"
            fill="white"
            stroke-width="2"
        />
    </def>

    <ellipse
        className="hat-stroke"
        cx="0"
        cy="35"
        rx="80"
        ry="30"
        fill="#AFBCF3"
    />

    <path
        className="hat-stroke"
        d="M -50 -10 
        L -50 30
        Q 0 45 50 30 
        L 50 -10
        Q 0 0 -50 -10"
        fill="#F97744"
    />

    <path
        className="hat-stroke"
        d="M -50 -10
        C -50 -60 50 -60 50 -10
        Q 0 0 -50 -10"
        fill="#FDCD60"
    />

    <use href="#hat-star" transform="translate(-60 75)" />
    <use href="#hat-star" transform="translate(-65 -5) scale(0.5)" />
    <use href="#hat-star" transform="translate(60 -45) scale(1.5)" />
    <use href="#hat-star" transform="translate(80 -25) scale(0.75)" />

    <circle cx="-65" cy="-40" r="2" fill="#5546CB" />
    <circle
        cx="65"
        cy="70"
        r="5"
        fill="none"
        stroke="#5546CB"
        stroke-width="4"
    />

    <g transform="translate(44 27)">
        <use href="#hat-flower-petal" />
        <use href="#hat-flower-petal" transform="rotate(45)" />
        <use href="#hat-flower-petal" transform="rotate(90)" />
        <use href="#hat-flower-petal" transform="rotate(135)" />
        <use href="#hat-flower-petal" transform="rotate(180)" />
        <use href="#hat-flower-petal" transform="rotate(225)" />
        <use href="#hat-flower-petal" transform="rotate(270)" />
        <use href="#hat-flower-petal" transform="rotate(315)" />
        <circle
            cx="0"
            cy="0"
            r="5"
            fill="#FDCD60"
            stroke="#5546CB"
            stroke-width="2"
        />
    </g>
</svg>`;

export const hatCssSource = `.hat-stroke {
    stroke: #5546CB;
    stroke-width: 5;
    stroke-linejoin: round;
}`;
