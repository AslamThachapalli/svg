import * as ChristmasOrnament from "./ChristmasOrnament";
import * as ChristmasTree from "./ChristmasTree";
import * as GingerBread from "./GingerBread";
import * as Heart from "./Heart";
import * as Arrow from "./Arrow";
import * as WavyTree from "./WavyTree";
import * as User from "./User";
import * as LightBulb from "./LightBulb";
import * as WindMill from "./WindMill";
import * as Text from "./Text";
import * as Nature from "./Nature";
import * as Star from "./Star";
import * as Hat from "./Hat";

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
        id: "heart",
        name: "Heart",
        svg: Heart.Heart,
        htmlSource: Heart.heartHtmlSource,
        cssSource: Heart.heartCssSource,
    },
    {
        id: "arrow",
        name: "Arrow",
        svg: Arrow.Arrow,
        htmlSource: Arrow.arrowHtmlSource,
        cssSource: Arrow.arrowCssSource,
    },
    {
        id: "wavy-tree",
        name: "Wavy Tree",
        svg: WavyTree.WavyTree,
        htmlSource: WavyTree.wavyTreeHtmlSource,
        cssSource: WavyTree.wavyTreeCssSource,
    },
    {
        id: "ginger-bread",
        name: "Ginger Bread",
        svg: GingerBread.GingerBread,
        htmlSource: GingerBread.gingerBreadHtmlSource,
        cssSource: GingerBread.gingerBreadCssSource,
    },
    {
        id: "user",
        name: "User",
        svg: User.User,
        htmlSource: User.userHtmlSource,
        cssSource: User.userCssSource,
    },
    {
        id: "wind-mill",
        name: "Wind Mill",
        svg: WindMill.WindMill,
        htmlSource: WindMill.windMillHtmlSource,
        cssSource: WindMill.windMillCssSource,
    },
    {
        id: "light-bulb",
        name: "Light Bulb",
        svg: LightBulb.LightBulb,
        htmlSource: LightBulb.lightBulbHtmlSource,
        cssSource: LightBulb.lightBulbCssSource,
    },
    {
        id: "hat",
        name: "Hat",
        svg: Hat.Hat,
        htmlSource: Hat.hatHtmlSource,
        cssSource: Hat.hatCssSource,
    },

    {
        id: "nature",
        name: "Nature",
        svg: Nature.Nature,
        htmlSource: Nature.natureHtmlSource,
        cssSource: Nature.natureCssSource,
    },
    {
        id: "star",
        name: "Star",
        svg: Star.Star,
        htmlSource: Star.starHtmlSource,
        cssSource: Star.starCssSource,
    },
];
