import FeatureSelector from "@/components/FeatureSelector";

const IndexBody = () => {
  return (
    <section className="mt-5">
      <h1 className="mb-10 font-bold">
        <span className="dark:text-blue-500">LinguaPhrase</span>
      </h1>
      <div>
        If the response time is too long, it could be due to an excessive number
        of requests. To deploy your own service, consider cloning the project
        from my GitHub and using your OpenAI API key. <br />
        Link:{" "}
        <a
          href="https://github.com/ChungNYCU/LinguaPhrase"
          className="text-blue-500 hover:text-blue-700"
        >
          https://github.com/ChungNYCU/LinguaPhrase
        </a>
      </div>
      <FeatureSelector></FeatureSelector>
    </section>
  );
};
export default IndexBody;
