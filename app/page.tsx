import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-md shadow-blue-500/20">
              S
            </div>

            <div>
              <h1 className="text-xl font-bold leading-none tracking-tight">
                Super<span className="text-blue-600">Ride</span>
              </h1>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Partner
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-blue-600">
              About
            </a>
            <a href="#services" className="transition hover:text-blue-600">
              Services
            </a>
            <a href="#how-it-works" className="transition hover:text-blue-600">
              How It Works
            </a>
            <a href="#benefits" className="transition hover:text-blue-600">
              Benefits
            </a>
            <a href="#faq" className="transition hover:text-blue-600">
              FAQ
            </a>
            <a href="#contact" className="transition hover:text-blue-600">
              Contact
            </a>
          </nav>

          <a
            href="#register"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
          >
            Become a Partner
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span>🚀 Grow Your Local Business</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Partner with SuperRide and{" "}
              <span className="text-blue-600">grow your business.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you drive a taxi, manage a delivery fleet, or own a hotel
              or homestay, SuperRidePartner connects you directly with customers
              in your area.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#register"
                className="w-full rounded-xl bg-blue-600 px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 sm:w-auto"
              >
                Become a Partner Today
              </a>

              <a
                href="#services"
                className="w-full rounded-xl border border-slate-300 bg-white px-8 py-4 text-center text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
              >
                Explore Partner Categories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                About SuperRidePartner
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Empowering local service providers across travel & logistics.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                SuperRidePartner is designed to help service providers earn more
                and stay in control. From local taxi drivers and parcel couriers
                to hotel and homestay owners, our platform offers a unified space
                to accept bookings and expand your operational reach.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-3xl">🚕</div>
                <h3 className="mt-3 font-bold text-slate-900">Rides</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Connect with riders for daily city and outstation travel.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-3xl">📦</div>
                <h3 className="mt-3 font-bold text-slate-900">Deliveries</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Fulfill local and long-distance package delivery orders.
                </p>
              </div>

              <div className="col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-3xl">🏨</div>
                <h3 className="mt-3 font-bold text-slate-900">Accommodations</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Fill room inventory by receiving direct guest reservations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Services Section */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Partner Categories
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Select the service category that matches your business model.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Taxi Partner */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                🚕
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Taxi Partner
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Drive and earn on your schedule with full booking flexibility.
              </p>
              <ul className="mt-6 space-y-3 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Local city rides
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Airport transfers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Outstation trips
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Accept or reject booking requests
                </li>
              </ul>
            </div>

            {/* Parcel Partner */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                📦
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Parcel Partner
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Provide courier and goods delivery services with custom rates.
              </p>
              <ul className="mt-6 space-y-3 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Local parcel delivery
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Long-distance freight
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> View full parcel details before accepting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Accept requests or submit custom rates
                </li>
              </ul>
            </div>

            {/* Hotel Partner */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                🏨
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Hotel Partner
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                List your property and manage room reservations seamlessly.
              </p>
              <ul className="mt-6 space-y-3 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> List your hotel, lodge, or homestay
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Configure rooms and dynamic pricing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Receive direct guest booking requests
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Manage all reservations online
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Partner Process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How to get started
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Join the SuperRide network in 7 straightforward steps.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard number="01" title="Register" desc="Create your partner account with basic credentials." />
            <StepCard number="02" title="Submit Details" desc="Upload required business or vehicle documents." />
            <StepCard number="03" title="Verification" desc="Our team reviews and validates your submitted information." />
            <StepCard number="04" title="Partner Approval" desc="Receive formal partner account activation." />
            <StepCard number="05" title="Receive Customers" desc="Get live ride, parcel, or stay booking requests." />
            <StepCard number="06" title="Complete Service" desc="Deliver quality service to the customer." />
            <StepCard number="07" title="Earn" desc="Receive prompt payouts for fulfilled services." />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Partner Advantages
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why partner with SuperRide?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BenefitCard title="Fair Commission Structures" desc="Keep more of what you earn with transparent service rates." />
            <BenefitCard title="Multiple Business Verticals" desc="Provide taxi, parcel, or stay services from one ecosystem." />
            <BenefitCard title="Direct Customer Access" desc="Reach customers needing travel and accommodation services." />
            <BenefitCard title="Flexible Work & Rates" desc="Accept requests on your terms and set competitive parcel rates." />
            <BenefitCard title="Reliable Settlements" desc="Timely digital payouts directly into your verified bank account." />
            <BenefitCard title="Dedicated Partner Support" desc="Assistance available for account, booking, and payment queries." />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            <FaqItem
              question="Who can become a SuperRide Partner?"
              answer="Any licensed taxi driver, commercial transport provider, delivery courier, or registered hotel/homestay owner can apply for partnership."
            />
            <FaqItem
              question="How long does document verification take?"
              answer="Verification typically takes between 24 to 48 hours after all required documents are submitted."
            />
            <FaqItem
              question="Can I register for multiple services?"
              answer="Yes. Depending on your business model and documentation, you can provide taxi, parcel delivery, or hotel accommodation services."
            />
            <FaqItem
              question="How do partner payouts work?"
              answer="Earnings are calculated based on completed orders and transferred directly to your registered bank account on a regular schedule."
            />
          </div>
        </div>
      </section>

      {/* Become a Partner Form CTA */}
      <section id="register" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Become a SuperRide Partner
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Submit your interest below and our onboarding team will contact you.
            </p>
          </div>

          <form className="mt-10 space-y-4 rounded-2xl bg-slate-800/50 p-6 border border-slate-700/50">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 Mobile number"
                  className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300">
                  Service Category
                </label>
                <select className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none">
                  <option value="taxi">Taxi Driver / Operator</option>
                  <option value="parcel">Parcel / Delivery Courier</option>
                  <option value="hotel">Hotel / Homestay Owner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="Your operational city"
                  className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
            >
              Submit Registration Interest
            </button>
          </form>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-bold">
                Super<span className="text-blue-600">Ride</span>Partner
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Partner network platform for rides, deliveries, and stays.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-600">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#services" className="hover:text-blue-600">Services</a>
              <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
              <a href="#benefits" className="hover:text-blue-600">Benefits</a>
              <a href="#faq" className="hover:text-blue-600">FAQ</a>
            </div>

            <div className="text-xs text-slate-400">
              © {new Date().getFullYear()} SuperRidePartner. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StepCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <span className="text-xs font-bold text-blue-600">{number}</span>
      <h3 className="mt-2 font-bold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function BenefitCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-600">{desc}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="font-bold text-slate-900">{question}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{answer}</p>
    </div>
  );
}