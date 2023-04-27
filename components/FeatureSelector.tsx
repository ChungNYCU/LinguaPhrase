import Button from "@/components/Button";

type FeatureSelectorProps = {};

const FeatureSelector = (props: FeatureSelectorProps) => {
  return (
    <div className="mt-10">
      <Button className="blue-button" onClick={() => {}}>
        Email
      </Button>
      <Button className="blue-button" onClick={() => {}}>
        Grammar
      </Button>
    </div>
  );
};

export default FeatureSelector;
