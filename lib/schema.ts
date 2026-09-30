import { RouteItem, Vehicle } from "@/lib/data";
import siteConfig from "@/data/site.json";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": siteConfig.name,
    "url": siteConfig.domain,
    "telephone": siteConfig.phoneDisplay,
    "email": siteConfig.email,
    "description": "Premier spiritual and intercity taxi & tour operator based in Varanasi, serving Ayodhya, Prayagraj, Vindhyachal, Gaya, and beyond.",
    "priceRange": siteConfig.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.locality,
      "addressRegion": siteConfig.address.region,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": siteConfig.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.geo.latitude,
      "longitude": siteConfig.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": siteConfig.areaServed.map((city) => ({
      "@type": "City",
      "name": city
    }))
  };
}

export function getRouteProductSchema(route: RouteItem, vehicles: Vehicle[]) {
  const url = `${siteConfig.domain}/${route.slug}`;

  const offers = vehicles
    .filter((v) => route.pricing[v.id] !== undefined)
    .map((v) => ({
      "@type": "Offer",
      "name": `${v.name} (${route.name})`,
      "description": `${v.category} service for ${route.name}. Passenger capacity: ${v.passengers}. AC: Yes.`,
      "price": String(route.pricing[v.id]),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": url,
      "priceValidUntil": "2027-12-31",
      "seller": {
        "@type": "TravelAgency",
        "name": siteConfig.name
      }
    }));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": route.name,
    "description": route.summary,
    "url": url,
    "brand": {
      "@type": "Brand",
      "name": siteConfig.name
    },
    "offers": offers
  };
}

export function getRouteFaqSchema(route: RouteItem) {
  if (!route.faq || route.faq.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": route.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
