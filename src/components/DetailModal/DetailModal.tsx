import { useState } from "react";
import "./DetailModal.css";
import { CodeBlock } from "../CodeBlock";

interface DetailModalProps {
    open?: boolean;
    onClose?: () => void;
    svg?: React.ReactNode;
    htmlSource?: string;
    cssSource?: string | null;
}

export function DetailModal(props: DetailModalProps) {
    const { open, onClose, svg, htmlSource, cssSource } = props;

    const [selectedTab, setSelectedTab] = useState<"html" | "css">("html");

    // Determine which tabs to show
    const hasCss = cssSource && cssSource.trim().length > 0;
    const tabs = hasCss ? ["html", "css"] : ["html"];

    return (
        <div className={`modal ${open ? "modal--open" : ""}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-content-close" onClick={onClose}>
                    X
                </button>

                <div className="modal-svg-content">{svg}</div>

                <div className="modal-code-block">
                    <div className="modal-code-block-header">
                        {tabs.map((tab) => (
                            <div
                                key={tab}
                                className={`modal-code-block-header-item ${
                                    selectedTab === tab
                                        ? "modal-code-block-header-item--selected"
                                        : ""
                                }`}
                                onClick={() => {
                                    setSelectedTab(tab as "html" | "css");
                                }}
                            >
                                {tab.toUpperCase()}
                            </div>
                        ))}
                    </div>
                    <div className="modal-code-block-content">
                        {selectedTab === "html" && htmlSource && (
                            <CodeBlock code={htmlSource} language="html" />
                        )}
                        {selectedTab === "css" && cssSource && (
                            <CodeBlock code={cssSource} language="css" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
