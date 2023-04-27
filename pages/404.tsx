import Link from "next/link";

import Button from "@/components/Button";

const PageNotFound = () => {
  return (
    <section className="flex h-full items-center p-16 dark:text-gray-100">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-8 text-9xl font-extrabold dark:text-blue-500">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we could not find this page.
          </p>
          <p className="mb-8 mt-4 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/">
            <Button
              className="bg-blue-500 px-6 text-white duration-300 ease-in"
              onClick={() => {}}
            >
              Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
