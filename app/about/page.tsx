import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SuperRide Partner",
  description:
    "Learn about SuperRide Partner, a platform connecting taxi drivers, bike and auto partners, cab operators, parcel delivery partners, hotels and homestays with customers.",
  alternates: {
    canonical: "https://superridepartner.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          About SuperRide Partner
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          SuperRide Partner
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          SuperRide Partner connects taxi drivers, bike and auto partners,
          cab operators, parcel delivery partners, hotels and homestays
          with customers looking for local travel, delivery and
          accommodation services.
        </p>

        <h2 className="mt-12 text-2xl font-bold">
          Our Partner Network
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          Partners can register their services, receive customer requests,
          manage bookings and grow their local business through the
          SuperRide ecosystem.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border p-5">
            <h3 className="font-bold">Taxi & Ride Partners</h3>
            <p className="mt-2 text-sm text-slate-600">
              Connect with customers for local and outstation rides.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-bold">Parcel Partners</h3>
            <p className="mt-2 text-sm text-slate-600">
              Provide local and long-distance parcel delivery services.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-bold">Hotel Partners</h3>
            <p className="mt-2 text-sm text-slate-600">
              List hotels, lodges and homestays for customer bookings.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-bold">Local Businesses</h3>
            <p className="mt-2 text-sm text-slate-600">
              Build your customer reach through the SuperRide network.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}