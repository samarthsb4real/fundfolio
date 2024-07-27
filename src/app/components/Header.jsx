import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <section className="flex flex-row items-center justify-between py-4 px-8 border-b">
      <div className="flex items-center gap-2">
        <Image src="/favicon.ico" width={30} height={40} />
        <h1 className="text-2xl font-bold">FundFolio</h1>
      </div>
      <div className="flex flex-row gap-3">
        <Button variant="outline">Dashboard</Button>
        <Button>Get started</Button>
      </div>
    </section>
  );
}
