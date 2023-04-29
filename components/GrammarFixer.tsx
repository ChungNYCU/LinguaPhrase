import { useState } from "react";

import Button from "@/components/Button";
import Loading from "./Loading";

type GrammarFixerProps = {};

const GrammarFixer = (props: GrammarFixerProps) => {

  const [paragraph, setParagraph] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isLoading, setLoading] = useState(false);


  const handleGenerateClick = () => {
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
      });
  };


  const handleParagraphChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setParagraph(event.target.value);
  };


  return (
    <div className="mt-10">
      <h6 className="mb-2 mt-4">Correct your grammar</h6>
      <textarea
        id="body"
        rows={20}
        minLength={0}
        className="text-input"
        placeholder="Enter paragraph"
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
      {result &&
        <div className="result-display mt-10 w-full">
          <div className="m-20 mt-10">
            <p className="whitespace-pre-wrap">{result}</p>
          </div>
        </div>}


    </div>
  );
};

export default GrammarFixer;
