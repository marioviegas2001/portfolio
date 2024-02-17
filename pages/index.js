import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Quote from '@/components/Quote'
import About from '@/components/About'
import Work from '@/components/Work'
import Socials from '@/components/Socials'
import Contact from '@/components/Contact'
import CustomCursor from '@/components/CustomCursor'
import Preloader from '@/components/Preloader'
import { useEffect, useState } from 'react'
import gsap from 'gsap'


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloader = document.querySelector('.preloader-page');

    // Animation to fade out preloader and set loading to false
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
      }
    });

    tl.to(preloader, { opacity: 0, duration: 1, delay: 4 });
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className='parent-container'>
      <Head>
        <title>Mário | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate"/>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <CustomCursor />
      <div className='bg'></div>
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
