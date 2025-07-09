import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeatureIntroSection from './components/FeatureIntroSection'
import DesignGallerySection from './components/DesignGallerySection'
import ExpressYourselfSection from './components/ExpressYourselfSection'
import ProcessStepsSection from './components/ProcessStepsSection'
import GuestManagementSection from './components/GuestManagementSection'
import TestimonialsSection from './components/TestimonialsSection'
import StatisticsSection from './components/StatisticsSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-katsudoto-cream">
      <Header />
      <HeroSection />
      <FeatureIntroSection />
      <DesignGallerySection />
      <ExpressYourselfSection />
      <ProcessStepsSection />
      <GuestManagementSection />
      <TestimonialsSection />
      <StatisticsSection />
      <Footer />
    </div>
  );
}
