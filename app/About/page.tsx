import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const About = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <main className="min-h-screen rounded-2xl bg-linear-to-b from-gray-900 via-gray-950 to-black text-gray-100 relative overflow-hidden ">
      <div className="flex flex-col  justify-center gap-4  absolute inset-0 m-4">
        <div className="flex  gap-2  items-center max-w-full ">
          <div className="flex">
            <Image
              className="rounded-4xl"
              src="/images/profile.jpg"
              alt="profile-pic"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-2xl text-center md:text-left">
              Full Stack Developer
            </p>
            <div className="flex flex-row gap-2 hover:scale-110 transition-transform">
              {[
                "/icons/html.svg",
                "/icons/Tailwind CSS.svg",
                "/icons/Next.js.svg",
                "/icons/PostgresSQL.svg",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="tech-logo"
                  width={30}
                  height={30}
                  className="hover:scale-110 transition-transform"
                />
              ))}
            </div>
          </div>
        </div>
        <section className="max-w-2xl space-y-3 text-lg leading-relaxed bg-gray-800 rounded-2xl p-7 shadow-lg backdrop-blur-md ">
          <p>
            Hi,{" "}
            <span className="text-blue-400 font-semibold">
              {user.firstName}
            </span>
            ! My name is <span className="font-semibold">Rudra</span>, and I am
            from India 🇮🇳.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Currently pursuing B.Tech in Information Technology from IIEST,
              Shibpur.
            </li>
            <li>
              <strong>Converso</strong> is my first full stack project
              integrating multiple technologies.
            </li>
            <li>It’s been an amazing learning journey so far!</li>
            <li>
              This app is evolving — and I’m excited to improve it further.
            </li>
          </ul>
        </section>

        <section className="flex gap-8 mt-8">
          <p className="text-3xl font-bold  md:text-3xl  text-center bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text whitespace-nowrap">
            Feel free to reachout to me on my
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-transform hover:scale-110 text-indigo-100"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </Link>
            and
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-400 transition-transform hover:scale-110 text-indigo-100"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                ></path>
              </svg>
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
