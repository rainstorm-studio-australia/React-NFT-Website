import React from 'react'
import { Container } from 'reactstrap'
import HeroSection from '../components/ui/HeroSection'
import LiveAuction from '../components/ui/Live-auction/LiveAuction'
import SellerSection from '../components/ui/Seller-section/SellerSection'
import StepSection from '../components/ui/Step-sesction/StepSection'
import Trending from '../components/ui/Trending-section/Trending'

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  )
}

export default Home