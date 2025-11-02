import "./WindMill.css";

export function WindMill() {
    return (
        <div style={{ height: "408px" }}>
            <svg
                width="200"
                height="400"
                viewBox="-100 -200 200 400"
                fill="rgba(0, 0, 0, 0.5)"
            >
                <g transform="translate(0, -40)">
                    <g id="windmill-head">
                        <circle r="6" />
                        <path
                            id="arm"
                            d="M -7 -20
                        C -7 -5 7 -5 7 -20
                        L 2 -85 
                        L -2 -85"
                        />
                        <use href="#arm" transform="rotate(120)" />
                        <use href="#arm" transform="rotate(-120)" />
                    </g>

                    <path
                        d="M -3 12
                    L 3 12
                    L 6 160 L -6 160"
                    />
                </g>
            </svg>
        </div>
    );
}

export const windMillHtmlSource = `<svg
    width="200"
    height="400"
    viewBox="-100 -200 200 400"
    fill="rgba(0, 0, 0, 0.5)"
>
    <g transform="translate(0, -40)">
        <g id="windmill-head">
            <circle r="6" />
            <path
                id="arm"
                d="M -7 -20
            C -7 -5 7 -5 7 -20
            L 2 -85 
            L -2 -85"
            />
            <use href="#arm" transform="rotate(120)" />
            <use href="#arm" transform="rotate(-120)" />
        </g>

        <path
            d="M -3 12
        L 3 12
        L 6 160 L -6 160"
        />
    </g>
</svg>`;

export const windMillCssSource = `#windmill-head {
    animation: rotate 4s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}`;
