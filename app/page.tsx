import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import FooterSection from "@/components/footer";
import {
  getAllCompanions,
  getRecentSessions,
  getUserCompanions,
  getUserSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
export const revalidate = 30; // seconds

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);
  return (
    <main
      className=" min-h-screen
      rounded-2xl
      bg-linear-to-b
      from-blue-900
      via-green-300
      to-black
      relative
      overflow-hidden mt-5 backdrop-blur-3xl"
    >
      <h1 className="text-4xl font-bold text-white">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
      <section>
        <FooterSection />
      </section>
    </main>
  );
};

export default Page;
