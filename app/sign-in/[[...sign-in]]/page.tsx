import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex items-center justify-center mt-10 h-screen rounded-4xl shadow-2xl backdrop-blur-3xl bg-transparent">
      <SignIn />
    </main>
  );
}
