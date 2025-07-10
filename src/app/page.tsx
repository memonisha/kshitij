'use client'
import { motion } from 'framer-motion'
import styles from '../styles/home.module.css'
import Section from '../components/Section'
import AboutSection from '../components/About'
import ResearchSection from '../components/ResearchSection'
import WorkExperienceTree from '../components/WorkExperienceTree'
import AwardsSection from '../components/AwardsSection'
export default function Home() {
  return (
    <>
      <AboutSection />
   
      <ResearchSection />

         <WorkExperienceTree />
      <AwardsSection />
    </>
  )
}
