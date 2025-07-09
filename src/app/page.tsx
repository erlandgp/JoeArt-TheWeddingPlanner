import Header from './landing/components/Header'
import HeroSection from './landing/components/HeroSection'
import FeatureIntroSection from './landing/components/FeatureIntroSection'
import DesignGallerySection from './landing/components/DesignGallerySection'
import ExpressYourselfSection from './landing/components/ExpressYourselfSection'
import ProcessStepsSection from './landing/components/ProcessStepsSection'
import GuestManagementSection from './landing/components/GuestManagementSection'
import TestimonialsSection from './landing/components/TestimonialsSection'
import StatisticsSection from './landing/components/StatisticsSection'
import Footer from './landing/components/Footer'

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
