import Button from "@/components/Button";
import { useState } from "react";
import EmailWriter from "./EmailWriter";
import GrammarFixer from "./GrammarFixer";
import Rephraser from "./Rephraser";

const FeatureSelector = () => {
  const [emailDisplay, setEmailDisplay] = useState(false);
  const [rephraseDisplay, setRephraseDisplay] = useState(false);
  const [grammarDisplay, setGrammarDisplay] = useState(false);

  const displayEmail = () => {
    if (!emailDisplay) {
      console.log("email");
      disableAll();
      setEmailDisplay(true);
    }
  };

  const displayRephrase = () => {
    if (!rephraseDisplay) {
      console.log("rephrase");
      disableAll();
      setRephraseDisplay(true);
    }
  };

  const displayGrammar = () => {
    if (!grammarDisplay) {
      console.log("grammar");
      disableAll();
      setGrammarDisplay(true);
    }
  };

  const disableAll = () => {
    setEmailDisplay(false);
    setRephraseDisplay(false);
    setGrammarDisplay(false);
  };

  return (
    <div className="mt-10">
      <Button
        className={`${
          emailDisplay ? "selected-blue-button" : "blue-button"
        } mr-5`}
        onClick={displayEmail}
      >
        Email
      </Button>
      <Button
        className={`${
          rephraseDisplay ? "selected-blue-button" : "blue-button"
        } mr-5`}
        onClick={displayRephrase}
      >
        Rephrase
      </Button>
      <Button
        className={`${grammarDisplay ? "selected-blue-button" : "blue-button"}`}
        onClick={displayGrammar}
      >
        Grammar
      </Button>
      {emailDisplay && <EmailWriter />}
      {rephraseDisplay && <Rephraser />}
      {grammarDisplay && <GrammarFixer />}
    </div>
  );
};

export default FeatureSelector;
