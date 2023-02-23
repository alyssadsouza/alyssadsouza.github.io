import { useState, useEffect } from "react";

const Typewriter = ({ phrases, restartingIndex = 0 }) => {
  /* Typewriter effect */
  const [phrase, setPhrase] = useState("");
  const [adding, setAdding] = useState(true);
  const [selectedPhrase, setSelectedPhrase] = useState(phrases[0]);
  const [index, setIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(phrases.length === 1 ? 0 : 1);

  useEffect(() => {
    if (adding) {
      if (index <= selectedPhrase.length) {
        setPhrase(selectedPhrase.slice(0, index));
        setTimeout(() => setIndex(index + 1), 75);
      }
      if (index === selectedPhrase.length) {
        setTimeout(() => {
          setAdding(false);
          setIndex(index - 1);
        }, 7500); // hold on full phrase for 7.5 seconds
      }
    } // there's a period between adding still being true but index > text length where text holds for a few seconds
    else {
      if (index >= restartingIndex) {
        setPhrase(selectedPhrase.slice(0, index));
        if (index === restartingIndex) {
          setAdding(true);
          setSelectedPhrase(phrases[phraseIndex]);
          if (phrases.length === 1 || phraseIndex === phrases.length - 1) {
            setPhraseIndex(0);
          } else {
            setPhraseIndex(phraseIndex + 1);
          }
          setTimeout(() => setIndex(index + 1), 300);
        } else {
          setTimeout(() => setIndex(index - 1), 75);
        }
      }
    }
  }, [index]);

  return (
    <>
      {phrase}
      <span className="caret"></span>
    </>
  );
};

export default Typewriter;
