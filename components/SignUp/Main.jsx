import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import cookie from "js-cookie";

import baseUrl from "../../helpers/baseUrl";

function Main() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const res = await fetch(`${baseUrl}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email,
        confirmEmail,
        password,
      }),
    });

    const data = await res.json();

    if (data.error) {
      console.log({ error: data.error });
    } else {
      console.log({ message: data.message, token: data.token });
      cookie.set("token", data.token, {
        path: "/",
        secure: false,
        sameSite: "strict",
        expires: 1,
      });
      router.push("/");
    }
  };

  return (
    <>
      <main className="w-full h-auto flex justify-center py-20">
        <section>
          <Image
            src="https://liontrex.com/images/user/signup.png"
            alt="Sign Up Page"
            width="700"
            height="500"
          />
        </section>
        <section>
          <div className="flex flex-col">
            <h1 className="text-xl text-primary font-bold">Sign Up</h1>
            <h3 className="text-[16px] text-secondary mt-2">
              Create your new account
            </h3>
            <form
              className="text-primary text-md font-normal"
              onSubmit={handleSignUp}
            >
              <div className="flex py-3">
                <div className="flex flex-col mr-3">
                  <label>First Name</label>
                  <input
                    className="h-12 px-2 text-md outline-none border border-inputBorder rounded-md "
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label>Last Name</label>
                  <input
                    className="h-12 px-2 outline-none border border-inputBorder rounded-md"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col py-3">
                <label>Email Address</label>
                <input
                  className="h-12 px-2 outline-none border border-inputBorder rounded-md"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col py-3">
                <label>Confirm Email Address</label>
                <input
                  className="h-12 px-2 outline-none border border-inputBorder rounded-md"
                  type="email"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col py-3">
                <label>Password</label>
                <input
                  className="h-12 px-2 outline-none border border-inputBorder rounded-md"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="h-12 flex items-center justify-center text-white text-lg font-bold my-4 rounded-md bg-buttonBackground">
                <button type="submit" className="w-full h-full">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center">
              <p className="mr-1">
                <span>Already have an account? </span>
              </p>
              <Link href="/signin">
                <span> Sign In</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
