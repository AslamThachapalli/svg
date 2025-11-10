export function Text() {
    return (
        <svg width="200" height="100" viewBox="-100 -50 200 100" >
            <path
                id="curve"
                d="M -80, 29 Q 0, 10 80, 29"
                fill="transparent"
                stroke="red"
                stroke-width="2"
            />

            <text
                font-family="Arial"
                font-size="120"
                font-weight="bold"
                fill="white"
                stroke="black"
                stroke-width="2"
                letter-spacing="-20"
            >
                <textPath href="#curve">svg</textPath>
            </text>
        </svg>
    );
}

export const textHtmlSource = `<svg width="200" height="200" viewBox="-100 -100 200 200">
  <path
    id="curve"
    d="M -80, 40 Q 0, 20 80, 40"
    fill="transparent"
    stroke="red"
    stroke-width="2"
  />

  <text
    font-family="Arial"
    font-size="120"
    font-weight="bold"
    fill="white"
    stroke="black"
    stroke-width="2"
    letter-spacing="-20"
  >
    <textPath href="#curve">svg</textPath>
  </text>
</svg>`;

export const textCssSource = null;
