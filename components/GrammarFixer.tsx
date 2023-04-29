import { useState } from "react";

import Button from "@/components/Button";
import Loading from "./Loading";

const GrammarFixer = () => {
  const MIN_LENGTH = 0;
  const MAX_LENGTH = 500;
  const MAX_ROW = 10;

  const [paragraph, setParagraph] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isLoading, setLoading] = useState(false);

  const handleGenerateClick = () => {
    if (!paragraph) {
      setResult("\nPlease enter your paragraph.");
      return;
    }
    setResult("");
    setLoading(true);
    fetch("/api/grammarFixer", {
      method: "POST",
      body: JSON.stringify({
        paragraph: paragraph,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setResult(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching result:", error);
        setResult("\nError fetching result:" + error);
        setLoading(false);
      });
  };

  const handleParagraphChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setParagraph(event.target.value);
  };

  return (
    <div className="mt-10">
      <h6 className="mb-2 mt-4">Correct your grammar</h6>
      <textarea
        id="body"
        rows={MAX_ROW}
        minLength={MIN_LENGTH}
        maxLength={MAX_LENGTH}
        className="text-input"
        placeholder={`Maximum ${MAX_LENGTH} characters`}
        value={paragraph}
        onChange={handleParagraphChange}
        required
      ></textarea>
      <br />

      <div className="flex justify-end">
        <Button className="blue-button" onClick={handleGenerateClick}>
          Generate
        </Button>
      </div>

      {isLoading && <Loading />}
      {result && (
        <div className="result-display mt-10 w-full">
          <div className="result-margin">
            <p className="whitespace-pre-wrap">{result}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrammarFixer;
