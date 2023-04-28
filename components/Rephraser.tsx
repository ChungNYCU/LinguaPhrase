import Button from "@/components/Button";

type RephraserProps = {};

const Rephraser = (props: RephraserProps) => {
  return (
    <div className="mt-10">
      Rephrase
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

export default Rephraser;
