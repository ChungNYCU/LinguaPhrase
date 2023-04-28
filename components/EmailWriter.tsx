import Button from "@/components/Button";

type EmailWriterProps = {};

const EmailWriter = (props: EmailWriterProps) => {
  return (
    <div className="mt-10">
      Title
      <input
        type="text"
        id="title"
        name="title"
        className="text-input"
        placeholder="Enter email title"
        value={""}
        onChange={() => {}}
        required
      />
      Propose
      <textarea
        id="body"
        rows={6}
        minLength={0}
        className="text-input"
        placeholder="Enter issue body"
        value={""}
        onChange={() => {}}
        required
      ></textarea>
      <br />
    </div>
  );
};

export default EmailWriter;
