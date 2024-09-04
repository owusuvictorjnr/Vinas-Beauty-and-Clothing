import BestSelling from "@/components/BestSell/BestSelling";
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
        <section>
          <OfficialWare />
        </section>
        
        {/* Best Selling */}
        <section>
          <BestSelling />
        </section>
      </section>
    </main>
  );
}
