/* 
A path cubic bezier is used to create the body of the user.
C Control Points 1 (x, y) Control Points 2 (x, y) End Points (x,y).
Cubic Bezier has 2 control points to control the curve of the line.
*/
export function User() {
    return (
        <svg
            width="200"
            height="200"
            viewBox="-100 -100 200 200"
            fill="none"
            stroke="black"
            stroke-width="10"
        >
            <circle cy="-40" r="20" />
            <path
                d="
                M -50,70
                C -50,-20 50,-20 50,70
                Z"
            />
        </svg>
    );
}

export const userHtmlSource = `<svg
    width="200"
    height="200"
    viewBox="-100 -100 200 200"
    fill="none"
    stroke="black"
    stroke-width="10"
>
    <circle cy="-40" r="20" />
    <path
        d="
        M -50,70
        C -50,-20 50,-20 50,70
        Z"
    />
</svg>`;

export const userCssSource = null;
