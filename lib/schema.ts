import { RouteItem, Vehicle } from "@/lib/data";
import siteConfig from "@/data/site.json";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "TravelAgency", "AutoRental"],
    "name": siteConfig.name,
    "alternateName": ["Utkarsh Travels Varanasi", "Utkarsh Singh Travels"],
    "url": siteConfig.domain,
    "image": `${siteConfig.domain}/images/destinations/ayodhya.jpg`,
    "logo": `${siteConfig.domain}/images/brand-logo-horizontal.png`,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "description": "Premier spiritual pilgrimage and intercity taxi service based in Mehmoorganj, Varanasi. Operating AC sedans, Innova Crysta, Tempo Travellers, and luxury coaches to Ayodhya Ram Mandir, Prayagraj Sangam, Vindhyachal, and Gaya.",
    "priceRange": "₹2400 - ₹56000",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Net Banking, Credit Card, Debit Card",
    "founder": {
      "@type": "Person",
      "name": siteConfig.founder,
      "jobTitle": "Tour Coordinator & Founder"
    },
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "348",
      "bestRating": "5",
      "worstRating": "1"
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
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pilgrimage Taxi Packages from Varanasi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Varanasi to Ayodhya Taxi Service",
            "description": "Same day AC cab for Ram Mandir & Hanuman Garhi darshan"
          },
          "price": "5500",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Varanasi to Prayagraj Taxi Service",
            "description": "Same day AC cab for Triveni Sangam Snan & Bade Hanuman Ji"
          },
          "price": "3500",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Varanasi to Vindhyachal Taxi Service",
            "description": "Same day AC cab for Maa Vindhyavasini Shaktipeeth Trikona Parikrama"
          },
          "price": "2400",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Varanasi to Gaya & Bodh Gaya Taxi Service",
            "description": "Same day AC cab for Vishnupad Pind Daan and Mahabodhi Temple"
          },
          "price": "7000",
          "priceCurrency": "INR"
        }
      ]
    }
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
