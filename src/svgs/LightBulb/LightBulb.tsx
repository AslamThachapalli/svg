export function LightBulb() {
    return (
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <path
                d="M -30 20 
                A 50 50 0 1 1 30 20
                Q 20 30 20 50
                L -20 50
                Q -20 30 -30 20
                "
                fill="gold"
                stroke="black"
                stroke-width="10"
                stroke-linejoin="round"
            />

            <path
                d="M -30 -20 
                A 30 30 0 0 1 0 -50"
                fill="none"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
            />

            <path
                d="M -18 62
                L 18 62
                M -15 75
                L 15 75"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
            />
        </svg>
    );
}

export const lightBulbHtmlSource = `<svg width="200" height="200" viewBox="-100 -100 200 200">
    <path
        d="M -30 20 
        A 50 50 0 1 1 30 20
        Q 20 30 20 50
        L -20 50
        Q -20 30 -30 20
        "
        fill="gold"
        stroke="black"
        stroke-width="10"
        stroke-linejoin="round"
    />

    <path
        d="M -30 -20 
        A 30 30 0 0 1 0 -50"
        fill="none"
        stroke="black"
        stroke-width="10"
        stroke-linecap="round"
    />
    
    <path
        d="M -18 62
        L 18 62
        M -15 75
        L 15 75"
        stroke="black"
        stroke-width="10"
        stroke-linecap="round"
    />
</svg>`;

export const lightBulbCssSource = null;
