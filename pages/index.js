import Head from "next/head";

import Header from "../components/Home/Header";
import Main from "../components/Home/Main";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Chat Application</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
