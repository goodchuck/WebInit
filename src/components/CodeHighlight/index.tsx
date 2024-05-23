import { useEffect } from 'react';
import Prism from 'prismjs';

export default function CodeHighlight({ code }: { code: string }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-typescript">{code}</code>
    </pre>
  );
}
