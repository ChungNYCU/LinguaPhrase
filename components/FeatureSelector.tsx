import Button from "@/components/Button";

type FeatureSelectorProps = {};

const FeatureSelector = (props: FeatureSelectorProps) => {
  return (
    <div className="mt-10">
      <Button className="classic-blue-button" onClick={() => {}}>
        Email
      </Button>
      <Button className="classic-blue-button" onClick={() => {}}>
        Grammar
      </Button>
    </div>
  );
};

export default FeatureSelector;
