import { Circle, circleHtmlSource, circleCssSource } from "./Circle";

type SvgList = {
    name: string;
    svg: () => React.ReactNode;
    htmlSource: string;
    cssSource: string | null;
};

export const svgList: SvgList[] = [
    {
        name: "Circle",
        svg: Circle,
        htmlSource: circleHtmlSource,
        cssSource: circleCssSource,
    },
];
