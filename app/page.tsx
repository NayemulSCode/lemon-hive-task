import Sponsor from "./components/common/Sponsor";
import Conferences from "./components/home/Conferences";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <Conferences />
      <Sponsor />
    </main>
  );
}
