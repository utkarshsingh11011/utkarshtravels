import siteConfig from "@/data/site.json";
import vehiclesData from "@/data/vehicles.json";
import routesData from "@/data/routes.json";

export interface Vehicle {
  id: string;
  name: string;
  shortName: string;
  category: string;
  image?: string;
  seating: string;
  passengers: number;
  luggage: string;
  ac: boolean;
  idealFor: string;
  description: string;
  features: string[];
}

export interface RouteItineraryItem {
  time: string;
  title: string;
  description: string;
}

export interface RouteFaqItem {
  question: string;
  answer: string;
}

export interface RoutePricing {
  dzire: number;
  ertiga: number;
  innovaCrysta: number;
  urbania16: number;
  tempoTraveller17: number;
  tempoTraveller26: number;
  miniBus35: number;
  [key: string]: number;
}

export interface RouteItem {
  slug: string;
  name: string;
  origin: string;
  destination: string;
  image?: string;
  packageType: string;
  distance: string;
  duration: string;
  summary: string;
  pricing: RoutePricing;
  highlights: string[];
  itinerary: RouteItineraryItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  faq: RouteFaqItem[];
  relatedSlugs: string[];
}

export function getSiteConfig() {
  return siteConfig;
}

export function getAllRoutes(): RouteItem[] {
  return routesData as RouteItem[];
}

export function getRouteBySlug(slug: string): RouteItem | undefined {
  return (routesData as RouteItem[]).find((r) => r.slug === slug);
}

export function getRelatedRoutes(slugs: string[]): RouteItem[] {
  return (routesData as RouteItem[]).filter((r) => slugs.includes(r.slug));
}

export function getAllVehicles(): Vehicle[] {
  return vehiclesData as Vehicle[];
}

export function getVehicleById(id: string): Vehicle | undefined {
  return (vehiclesData as Vehicle[]).find((v) => v.id === id);
}

export function formatINR(val: number): string {
  return `₹${val.toLocaleString("en-IN")}`;
}
