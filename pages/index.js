import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Quote from '@/components/Quote'
import About from '@/components/About'
import Work from '@/components/Work'
import Socials from '@/components/Socials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className='parent-container'>
      <Head>
        <title>Mário | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <section className='section1'><Main/></section>
      <section className='section2'><Quote/></section>
      <section className='section3'><About/></section>
      <section className='section4'><Work/></section>
      <section className='section5'><Socials/></section>
      <section className='section6'><Contact/></section>
    </div>
  )
}
