import styles from "./page.module.css";
import Hero from "@/components/Hero";
import GlitchBackground from "@/components/GlitchBackground";
import EventsSlider from "@/components/EventsSlider";

export default function Home() {
  return (
    <main className={styles.landing}>
      <GlitchBackground />

      <div className={styles.main}>
        <Hero />
      </div>
      
      {/* Events Slider Section */}
      <EventsSlider />
    </main>
  );
}

