import Button from "@/components/Button";

type RephraserProps = {};

const Rephraser = (props: RephraserProps) => {
  return (
    <div className="mt-10">
      <h6 className="mb-2 mt-4">Rephrase</h6>
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
