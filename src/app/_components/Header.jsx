import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="flex flex-row items-center justify-between py-4 px-8 border-b">
      <div className="flex items-center gap-2">
        <Image src="/favicon.ico" width={30} height={40} />
        <h1 className="text-2xl font-bold">FundFolio</h1>
      </div>
      <div className="flex flex-row gap-3">
        <Button variant="outline"><Link href="#">Dashboard</Link></Button>
        <Button><Link href="#">Get started</Link></Button>
      </div>
    </section>
  );
}
