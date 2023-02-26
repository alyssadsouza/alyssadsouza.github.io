import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeTypewriter = ({ headers, restartingIndex = 0 }) => {
  /* Typewriter effect */
  const [header, setHeader] = useState("");
  const [adding, setAdding] = useState(true);
  const [headerText, setHeaderText] = useState(headers[0]);
  const [index, setIndex] = useState(0);
  const [headerIndex, setHeaderIndex] = useState(headers.length === 1 ? 0 : 1);

  useEffect(() => {
    if (adding) {
      if (index <= headerText.length) {
        setHeader(headerText.slice(0, index));
        setTimeout(() => setIndex(index + 1), 75);
      }
      if (index === headerText.length) {
        setTimeout(() => {
          setAdding(false);
          setIndex(index - 1);
        }, 7500); // hold on full header for 7.5 seconds
      }
    } // there's a period between adding still being true but index > text length where text holds for a few seconds
    else {
      if (index >= restartingIndex) {
        setHeader(headerText.slice(0, index));
        if (index === restartingIndex) {
          setAdding(true);
          setHeaderText(headers[headerIndex]);
          if (headers.length === 1 || headerIndex === headers.length - 1) {
            setHeaderIndex(0);
          } else {
            setHeaderIndex(headerIndex + 1);
          }
          setTimeout(() => setIndex(index + 1), 300);
        } else {
          setTimeout(() => setIndex(index - 1), 75);
        }
      }
    }
  }, [index, adding, headerIndex, headerText, headers, restartingIndex]);

  return (
    <>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers wrapLongLines wrapLines customStyle={{"padding": 0}}>
        {header}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeTypewriter;