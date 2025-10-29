import * as ChristmasOrnament from "./ChristmasOrnament";
import * as ChristmasTree from "./ChristmasTree";
import * as GingerBread from "./GingerBread";

type SvgList = {
    id: string;
    name: string;
    svg: () => React.ReactNode;
    htmlSource: string;
    cssSource: string | null;
};

export const svgList: SvgList[] = [
    {
        id: "christmas-ornament",
        name: "Christmas Ornament",
        svg: ChristmasOrnament.ChristmasOrnament,
        htmlSource: ChristmasOrnament.christmasOrnamentHtmlSource,
        cssSource: ChristmasOrnament.christmasOrnamentCssSource,
    },
    {
        id: "christmas-tree",
        name: "Christmas Tree",
        svg: ChristmasTree.ChristmasTree,
        htmlSource: ChristmasTree.christmasTreeHtmlSource,
        cssSource: ChristmasTree.christmasTreeCssSource,
    },
    {
        id: "ginger-bread",
        name: "Ginger Bread",
        svg: GingerBread.GingerBread,
        htmlSource: GingerBread.gingerBreadHtmlSource,
        cssSource: GingerBread.gingerBreadCssSource,
    },
];
