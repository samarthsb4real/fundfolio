import Image from "next/image";

export default function Header() {
  return (
    <section className="flex flex-row items-center justify-between">
      <div className="flex items-center">
        <Image src="/favicon.ico" width={40} height={40} />
        <h1 className="text-2xl">FundFolio</h1>
      </div>
      <div className="flex flex-row gap-3">
        <button>Dashboard</button>
        <button>Get Started</button>
      </div>
    </section>
  );
}
