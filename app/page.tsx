import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'


const Page = () => {
  return (
    <main>
      <h1 >
        Popular Companions
      </h1>
      <section className='home-section'>
        <CompanionCard
        id="123"
        name="Neura the Brainy explorer"
        topic="Neural Network of Brain"
        subject="Science"
        duration={45}
        color="#ffda6e"
        />
        <CompanionCard
        id="234"
        name="Countsy the number wizard"
        topic="Derivatives & Integral"
        subject="Maths"
        duration={30}
        color="#e5d0ff"
        />
        <CompanionCard
        id="236"
        name="Verba the vocabulary builder"
        topic="Neural Network of Brain"
        subject="language"
        duration={45}
        color="#BDE7FF"
        />
        
      </section> 
      <section className='home-section'>
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page