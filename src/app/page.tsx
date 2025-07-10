'use client'
import { motion } from 'framer-motion'
import styles from '../styles/home.module.css'
import Section from '../components/Section'
import AboutSection from '../components/About'
import ResearchSection from '../components/ResearchSection'
import WorkExperienceTree from '../components/WorkExperienceTree'
import AwardsSection from '../components/AwardsSection'
import VolunteerSection from '../components/VolunteerSection'
import ContactSection from '../components/ContactSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
    
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AboutSection />

      <ResearchSection />

      <WorkExperienceTree />
      <AwardsSection />
      <VolunteerSection />
      <ContactSection />
    </>
  )
}

  