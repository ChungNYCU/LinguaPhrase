import { useState } from "react";

import Button from "@/components/Button";
import Loading from "./Loading";

const EmailWriter = () => {
  const [sender, setSender] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [propose, setPropose] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isLoading, setLoading] = useState(false);

  const handleGenerateClick = () => {
    setResult("");
    setLoading(true);
    fetch("/api/emailWriter", {
      method: "POST",
      body: JSON.stringify({
        sender: sender,
        recipient: recipient,
        propose: propose,
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
        setResult("Error fetching result:"+error);
        setLoading(false);
      });
  };

  const handleSenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSender(event.target.value);
  };

  const handleRecipientChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecipient(event.target.value);
  };

  const handleProposeChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPropose(event.target.value);
  };

  return (
    <div className="mt-10">
      <h6 className="mb-2 mt-4">From</h6>
      <input
        type="text"
        id="sender"
        className="text-input"
        placeholder="Sender"
        value={sender}
        onChange={handleSenderChange}
        required
      />

      <h6 className="mb-2 mt-4">To</h6>
      <input
        type="text"
        id="recipient"
        className="text-input"
        placeholder="Recipient"
        value={recipient}
        onChange={handleRecipientChange}
        required
      />

      <h6 className="mb-2 mt-4">Propose</h6>
      <textarea
        id="Propose"
        rows={6}
        minLength={0}
        className="text-input"
        placeholder="For what"
        value={propose}
        onChange={handleProposeChange}
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

export default EmailWriter;
