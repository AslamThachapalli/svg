/* 
Cubic Bezier Curve is used to create the wavy shape of the tree.
Q Control Points (x, y) End Points (x,y).
The line will start at the start point and end at the end point, and the control points will be used to control the curve of the line.
*/
export function WavyTree() {
    return (
        <div style={{ height: "408px" }}>
            <svg width="200" height="400" viewBox="-100 -200 200 400">
                <path
                    d="
                    M 0 -80
                    Q 5 -75 0 -70
                    Q -10 -65 0 -60
                    Q 15 -55 0 -50
                    Q -20 -45 0 -40
                    Q 25 -35 0 -30
                    Q -30 -25 0 -20
                    Q 35 -15 0 -10
                    Q -40 -5 0 0
                    Q 45 5 0 10
                    Q -50 15 0 20
                    Q 55 25 0 30
                    Q -60 35 0 40
                    Q 65 45 0 50
                    Q -70 55 0 60
                    Q 75 65 0 70
                    Q -80 75 0 80
                    Q 85 85 0 90
                    Q -90 95 0 100
                    Q 95 105 0 110
                    Q -100 115 0 120
                    L 0 150
                    L -20 150
                    M 0 150 
                    L 20 150"
                    fill="none"
                    stroke="#2d6a54"
                    strokeWidth="5"
                />
            </svg>
        </div>
    );
}

export const wavyTreeHtmlSource = `<svg width="200" height="400" viewBox="-100 -200 200 400">
    <path
        d="
            M 0 -80
            Q 5 -75 0 -70
            Q -10 -65 0 -60
            Q 15 -55 0 -50
            Q -20 -45 0 -40
            Q 25 -35 0 -30
            Q -30 -25 0 -20
            Q 35 -15 0 -10
            Q -40 -5 0 0
            Q 45 5 0 10
            Q -50 15 0 20
            Q 55 25 0 30
            Q -60 35 0 40
            Q 65 45 0 50
            Q -70 55 0 60
            Q 75 65 0 70
            Q -80 75 0 80
            Q 85 85 0 90
            Q -90 95 0 100
            Q 95 105 0 110
            Q -100 115 0 120
            L 0 150
            L -20 150
            M 0 150 
            L 20 150"
        fill="none"
        stroke="#2d6a54"
        strokeWidth="5"
    />
</svg>`;

export const wavyTreeCssSource = null;
