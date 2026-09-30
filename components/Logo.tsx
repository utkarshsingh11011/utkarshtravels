import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const logoSrc = isLight ? "/images/logo-light.png" : "/images/logo.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center group transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label="Utkarsh Travels - Your Journey Our Priority"
    >
      <div className="relative h-12 sm:h-14 w-40 sm:w-48">
        <Image
          src={logoSrc}
          alt="Utkarsh Travels Official Logo"
          fill
          priority
          className="object-contain object-left"
          sizes="(max-width: 640px) 160px, 200px"
        />
      </div>
    </Link>
  );
}
