import Image from "next/image";
import Header from "../components/Header";
import { HeroScrollDemo } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroScrollDemo/>
    </main>
  );
}
