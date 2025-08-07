import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodePreview = ({ code, title, language = 'jsx' }) => {
  return (
    <div className="code-preview">
      <h3>{title}</h3>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '8px',
          fontSize: '14px',
          maxHeight: '600px',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;