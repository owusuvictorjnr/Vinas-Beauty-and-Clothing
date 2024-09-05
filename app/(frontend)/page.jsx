import BestSelling from "@/components/BestSell/BestSelling";
import PromoCountdown from "@/components/Countdown/Countdown";
import FeaturedCollection from "@/components/FeaturedCollection/FeaturedCollection";
import Hero from "@/components/Hero/Hero";
import NewArrival from "@/components/NewArrival/NewArrival";
import OfficialWare from "@/components/OfficalWare/OfficialWare";

export default function Home() {
  const promoEndDate = "2024-12-31T23:59:59"; // Set your promo end date

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

        {/* Promo countdown */}
        <section>
          <PromoCountdown targetDate={promoEndDate} />
        </section>

        <section>
          <FeaturedCollection />
        </section>

        <section>
          <NewArrival />
        </section>
      </section>
    </main>
  );
}
