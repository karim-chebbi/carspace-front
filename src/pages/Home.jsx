import React from 'react'
import Hero from '../components/sections/Hero'
import Feature from '../components/sections/Feuture'
import CTASection from '../components/sections/CTASection'
import TeamSection from '../components/sections/TeamSection'
import LogoSection from '../components/sections/LogoSection'
import StatSection from '../components/sections/StatSection'
import BlogSection from '../components/sections/BlogSection'

const Home = () => {
  return (
    <div>
        <Hero />
        <Feature />
        <CTASection />
        <TeamSection />
        <LogoSection />
        <BlogSection />
        <StatSection />
    </div>
  )
}

export default Home