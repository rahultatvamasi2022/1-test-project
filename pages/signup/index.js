import Head from "next/head";

import Header from "../../components/SignUp/Header";
import Main from "../../components/SignUp/Main";
import Footer from "../../components/SignUp/Footer";

export default function SignUpPage() {
  return (
    <>
      <div className="overflow-hidden">
        <Head>
          <title>Sign Up</title>
        </Head>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
