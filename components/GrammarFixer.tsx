import Button from "@/components/Button";

type GrammarFixerProps = {};

const GrammarFixer = (props: GrammarFixerProps) => {
  return (
    <div className="mt-10">
      Grammar
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
