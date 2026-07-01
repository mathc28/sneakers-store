import Authenticity from 'components/authenticity';
import BrandMarquee from "components/brand-marquee";
import Featuredproducts from "components/featured-products";
import Hero from "components/hero/hero";
import HowItWorks from 'components/howitworks';
import Footer from "components/layout/footer";


export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <Featuredproducts />
      <Authenticity />
      <HowItWorks />
      <Footer />
    </>
  );
}
