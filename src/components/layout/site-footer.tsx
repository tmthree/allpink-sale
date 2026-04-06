import Link from "next/link";
import { PhoneIcon, MapPinIcon, ClockIcon, BuildingIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  SITE_CONFIG,
  CONTACT_INFO,
  BANK_INFO,
  NAV_LINKS,
} from "@/lib/constants";
import { formatPhone } from "@/lib/format";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Col 1: Company info */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">
              {SITE_CONFIG.shortName}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Liên kết nhanh
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-pink-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact + Bank */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Liên hệ
              </h3>
              <div className="flex items-start gap-2 text-sm">
                <PhoneIcon className="size-4 mt-0.5 shrink-0 text-pink-400" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-pink-400 transition-colors"
                >
                  {formatPhone(CONTACT_INFO.phone)}
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPinIcon className="size-4 mt-0.5 shrink-0 text-pink-400" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <ClockIcon className="size-4 mt-0.5 shrink-0 text-pink-400" />
                <span>{CONTACT_INFO.workingHours}</span>
              </div>
            </div>

            {BANK_INFO && (
              <>
                <Separator className="bg-gray-700" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <BuildingIcon className="size-4 shrink-0 text-pink-400" />
                    <span className="font-medium text-white">{BANK_INFO.bankName}</span>
                  </div>
                  <p className="text-sm pl-6">
                    STK:{" "}
                    <span className="font-mono text-white">
                      {BANK_INFO.accountNumber}
                    </span>
                  </p>
                  <p className="text-sm pl-6 text-gray-400">
                    {BANK_INFO.accountHolder}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <p className="text-center text-xs text-gray-500">
            &copy; {currentYear} {SITE_CONFIG.name}. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
