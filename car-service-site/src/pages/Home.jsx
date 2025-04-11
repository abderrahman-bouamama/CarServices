import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import Quotes from "../pages/Quotes";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
    return (
        <>
            <Header />
            <main className="pt-40">
                <HeroSection />
                <ServicesSection />
                <TestimonialsSection />
                <ContactSection />
                <Quotes />
            </main>


            <FooterSection />
        </>
    );
}
