import Hero from "@/components/Hero/Hero";
import OfficialWare from "@/components/OfficalWare/OfficialWare";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section>
        <section>
          {/* Hero Banner */}
          <Hero />
        </section>

        {/* Official ware */}
        <OfficialWare />
      </section>
    </main>
  );
}
