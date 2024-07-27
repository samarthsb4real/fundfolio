"use client"
import CardInfo from "./_components/Cardinfo";

export default function Dashboard() {
  return (
    <main>
      <div className="p-8">
        <h1 className="font-bold text-4xl">Hi,</h1>
        <p className="font-semibold mt-2 text-gray-500">
          Here's what's happening with your money. Let's manage your expenses.
        </p>
        <CardInfo/>
      </div>
    </main>
  );
}
