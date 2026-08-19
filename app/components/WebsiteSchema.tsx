export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SuperRide Partner",
    alternateName: ["SuperRidePartner", "SuperRide"],
    url: "https://superridepartner.vercel.app/",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}