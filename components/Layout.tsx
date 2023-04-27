import Head from "next/head";

import Footer from "@/sections/Footer";
import Header from "@/sections/Header";

type LayoutProps = {
  children: any;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Head>
        <title>LinguaPhrase</title>
        <meta name="description content" content="LinguaPhrase" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
