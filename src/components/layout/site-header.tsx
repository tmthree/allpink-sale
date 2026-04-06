"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-shadow bg-white",
        scrolled && "shadow-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-pink-600">
            {SITE_CONFIG.shortName}
          </span>
          <span className="hidden text-sm text-gray-500 sm:block">
            Nhựa tái chế
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-pink-600",
                pathname === link.href
                  ? "text-pink-600 bg-pink-50"
                  : "text-gray-700"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/lien-he"
            className="ml-3 inline-flex items-center justify-center rounded-md bg-pink-600 hover:bg-pink-700 text-white h-8 px-3 text-sm font-medium transition-colors"
          >
            Liên hệ ngay
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <MenuIcon className="size-5" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-0">
            <SheetHeader className="border-b p-4">
              <SheetTitle className="text-left text-pink-600 font-bold text-lg">
                {SITE_CONFIG.shortName}
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:text-pink-600 hover:bg-pink-50",
                    pathname === link.href
                      ? "text-pink-600 bg-pink-50"
                      : "text-gray-700"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t mt-2">
                <Link
                  href="/lien-he"
                  className="w-full inline-flex items-center justify-center rounded-md bg-pink-600 hover:bg-pink-700 text-white h-9 px-4 text-sm font-medium transition-colors"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
