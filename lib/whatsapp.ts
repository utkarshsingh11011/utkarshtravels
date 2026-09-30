/**
 * Utilities for WhatsApp lead generation with contextual pre-filled messages.
 * Compliant with PRD section 11.1
 */

const WHATSAPP_PHONE = "919648974238";

export interface WhatsAppMessageParams {
  slug?: string;
  routeName?: string;
  packageType?: string;
  vehicleName?: string;
  price?: number;
  customMessage?: string;
}

export function getWhatsAppUrl(params: WhatsAppMessageParams = {}): string {
  const { slug, routeName, packageType, vehicleName, price, customMessage } = params;

  let text = "";

  if (customMessage) {
    text = customMessage;
  } else if (routeName && vehicleName && price) {
    text = `Hello Utkarsh Travels, I want to book a ${vehicleName} for ${routeName} (${packageType || "Trip"}) at the listed fare of ₹${price.toLocaleString("en-IN")}. Please share availability and booking details.`;
  } else if (routeName) {
    text = `Hello Utkarsh Travels, I am interested in booking a vehicle for ${routeName} (${packageType || "Same Day"}). Please share vehicle availability and details.`;
  } else if (slug === "contact" || slug === "custom") {
    text = `Hello Utkarsh Travels, I need a customized pilgrimage/intercity taxi package from Varanasi. Please contact me with options.`;
  } else {
    text = `Hello Utkarsh Travels, I would like to inquire about taxi booking and tour packages from Varanasi.`;
  }

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export const PHONE_NUMBER = "+919648974238";
export const PHONE_DISPLAY = "+91 9648974238";
export const EMAIL_ADDRESS = "utkarshtravelsvns@gmail.com";
