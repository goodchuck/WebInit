import { useEffect } from "react"
import Prism from 'prismjs'

export const CodeHighlight = ({ code }: { code: string }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [])

    return (
        <pre>
            <code className="language-typescript">{code}</code>
        </pre>
    )
}