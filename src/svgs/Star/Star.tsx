export function Star() {
    return (
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <g transform="translate(0 5)">
                <g id="star-arm">
                    <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                    <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                </g>
                <use href="#star-arm" transform="rotate(72)" />
                <use href="#star-arm" transform="rotate(-72)" />
                <use href="#star-arm" transform="rotate(144)" />
                <use href="#star-arm" transform="rotate(-144)" />
            </g>
        </svg>
    );
}

export const starHtmlSource = `<svg width="200" height="200" viewBox="-100 -100 200 200">
    <g transform="translate(0 5)">
        <g id="star-arm">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
        </g>
        <use href="#star-arm" transform="rotate(72)" />
        <use href="#star-arm" transform="rotate(-72)" />
        <use href="#star-arm" transform="rotate(144)" />
        <use href="#star-arm" transform="rotate(-144)" />
    </g>
</svg>`;

export const starCssSource = null;
