import Head from 'next/head'
import { Inter } from 'next/font/google'
import CardTopTrending from '@/components/CardHomeTopTrending'
import CardExploreDubaii from '@/components/CardExploreDubai' 
import CardBlogsOfFinsouqq from '@/components/CardBlogsOfFinsouq'
import ClientExperienceTestimoniall from '@/components/ClientExperienceTestimonial' 
import WelcomeToFinsouqee from '@/components/WelcomeToFinsouqe'
import OurProperty from '@/components/OurProperty'
import PropertyCount from '@/components/PropertyCount'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <WelcomeToFinsouqee />

      <CardTopTrending />

      <PropertyCount/>

      <CardExploreDubaii />

      <ClientExperienceTestimoniall />

      <OurProperty />

      <CardBlogsOfFinsouqq /> 

    </>
  )
}
