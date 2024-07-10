import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <main className="space-y-6 sm:space-y-8">
      <Hero />

      <div className="max-w-7xl mx-auto px-6 sm:px-4 space-y-4">
        <Navbar />
      </div>
    </main>
  );
}
