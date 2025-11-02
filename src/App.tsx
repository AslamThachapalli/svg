import "./App.css";
import { SvgCard } from "./components/SvgCard/SvgCard";
import { DetailModal } from "./components/DetailModal";
import { useState } from "react";
import { svgList } from "./svgs/svgList";

function App() {
    const [svgDetail, setSvgDetail] = useState<{
        isOpen: boolean;
        svg?: React.ReactNode;
        htmlSource?: string;
        cssSource?: string | null;
    }>();

    function handleSvgCardClick(index: number) {
        setSvgDetail({
            isOpen: true,
            svg: svgList[index].svg(),
            htmlSource: svgList[index].htmlSource,
            cssSource: svgList[index].cssSource,
        });
    }

    return (
        <div>
            <h1>SVGs</h1>
            <div className="svg-card-container">
                {svgList.map((item, index) => (
                    <div key={item.id} className={item.id}>
                        <SvgCard
                            onClick={() => handleSvgCardClick(index)}
                            svg={<item.svg />}
                            name={item.name}
                        />
                    </div>
                ))}
            </div>

            <DetailModal
                open={svgDetail?.isOpen}
                onClose={() => setSvgDetail({ isOpen: false })}
                svg={svgDetail?.svg}
                htmlSource={svgDetail?.htmlSource}
                cssSource={svgDetail?.cssSource}
            />
        </div>
    );
}

export default App;
