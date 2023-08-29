import Head from 'next/head' 
import { Inter } from 'next/font/google' 
import CardTopTrending from '@/components/CardHomeTopTrending'
import CardExploreDubaii from '@/components/CardExploreDubai'
import CardExporeAvailablle from '@/components/CardExporeAvailable'
import CardBlogsOfFinsouqq from '@/components/CardBlogsOfFinsouq'
import ClientExperienceTestimoniall from '@/components/ClientExperienceTestimonial'
import CardHomeLastt from '@/components/CardHomeLast'
import WelcomeToFinsouqee from '@/components/WelcomeToFinsouqe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

    <WelcomeToFinsouqee />

      <CardTopTrending />

      <CardExploreDubaii />

      <CardExporeAvailablle />

      <ClientExperienceTestimoniall />

      <CardBlogsOfFinsouqq />

      <CardHomeLastt />

    </>
  )
}
