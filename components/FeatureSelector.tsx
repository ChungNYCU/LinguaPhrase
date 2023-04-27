import Button from "@/components/Button";
import { useState } from "react";
import EmailWriter from "./EmailWriter";
import GrammarFixer from "./GrammarFixer";
import Rephraser from "./Rephraser";

type FeatureSelectorProps = {};

const FeatureSelector = (props: FeatureSelectorProps) => {
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
      <Button className="blue-button" onClick={displayEmail}>
        Email
      </Button>
      <Button className="blue-button" onClick={displayRephrase}>
        Rephrase
      </Button>
      <Button className="blue-button" onClick={displayGrammar}>
        Grammar
      </Button>
      {emailDisplay && <EmailWriter />}
      {rephraseDisplay && <Rephraser />}
      {grammarDisplay && <GrammarFixer />}
    </div>
  );
};

export default FeatureSelector;
