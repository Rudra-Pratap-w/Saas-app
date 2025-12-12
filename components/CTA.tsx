import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way </div>
      <h2 className="text-3xl font-bold">
        Build and Personalise Learning Companion
      </h2>
      <p>
        Pick a name,subject,voice & personality and start learning through voice
        conversations that feel natural and fun
      </p>
      <Image src="/images/cta.svg" alt="cta" height={380} width={240} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" height={12} width={12} />
        <Link href="/companions/new">Build your own Companion</Link>
      </button>
    </section>
  );
};

export default CTA;
