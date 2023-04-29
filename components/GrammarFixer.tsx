import Button from "@/components/Button";

type GrammarFixerProps = {};

const GrammarFixer = (props: GrammarFixerProps) => {
  return (
    <div className="mt-10">
      <h6 className="mb-2 mt-4">Grammar</h6>
      <textarea
        id="body"
        rows={6}
        minLength={0}
        className="text-input"
        placeholder="Enter paragraph"
        value={""}
        onChange={() => {}}
        required
      ></textarea>
      <br />
    </div>
  );
};

export default GrammarFixer;
