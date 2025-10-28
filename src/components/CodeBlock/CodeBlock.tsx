import "./CodeBlock.css";

interface CodeBlockProps {
    code: string;
    language: "html" | "css";
}

export function CodeBlock(props: CodeBlockProps) {
    const { code } = props;

    return (
        <pre className={`code-block`}>
            <code>{code}</code>
        </pre>
    );
}
