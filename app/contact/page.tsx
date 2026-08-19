import Link from "next/link";

export const metadata = {
  title: "Contact SuperRide Partner",
  description:
    "Contact SuperRide Partner for taxi, bike, auto, cab, parcel delivery, hotel and homestay partnership support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          ← Back to SuperRide Partner
        </Link>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Contact SuperRide Partner
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
            Get in touch with us
          </h1>

          <p className="mt-5 leading-7 text-slate-600">
            Have questions about becoming a SuperRide Partner? Contact our
            team for partnership, registration, booking, payment, or account
            support.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-bold">Partner Support</h2>
              <p className="mt-2 text-sm text-slate-600">
                Get help with partner registration and verification.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-bold">Business Enquiries</h2>
              <p className="mt-2 text-sm text-slate-600">
                Contact us about taxi, parcel, hotel and homestay partnerships.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-blue-50 p-6">
            <h2 className="font-bold text-slate-900">SuperRide Partner</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Partner network for rides, deliveries and accommodation services.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/#register"
              className="inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}