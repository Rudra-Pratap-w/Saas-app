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
    <main className="About-card min-h-screen flex flex-col rounded-2xl bg-linear-to-b from-gray-900 via-gray-950 to-black text-gray-100 relative overflow-auto m-10">
      <div className="flex flex-col  gap-4  absolute inset-0 m-4">
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
        <section className="max-w-2xl space-y-3 text-lg leading-relaxed bg-gray-800 rounded-2xl p-7 shadow-lg backdrop-blur-md mb-10 ">
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
      </div>
    </main>
  );
};

export default About;
