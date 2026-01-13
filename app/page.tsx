import styles from "./page.module.css";
import Hero from "@/components/Hero";
import GlitchBackground from "@/components/GlitchBackground";
import EventsSlider from "@/components/EventsSlider";
import PinnacleReveal from "@/components/PinnacleReveal";

export default function Home() {
  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative min-h-screen">
        <GlitchBackground>
          <Hero />
        </GlitchBackground>
        {/* Fade transition overlay at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
      </section>
      
      {/* Pinnacle Reveal Protocol Section */}
      <PinnacleReveal />
      
      {/* Events Slider Section */}
      <section className="relative z-10 bg-black">
        <EventsSlider />
      </section>
    </>
  );
}

