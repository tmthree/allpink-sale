"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FILTER_OPTIONS = [
  { value: "all", label: "Tất cả" },
  { value: "PP", label: "PP" },
  { value: "PE", label: "PE" },
  { value: "HDPE", label: "HDPE" },
  { value: "LDPE", label: "LDPE" },
] as const;

export function ProductFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("loai") ?? "all";

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("loai");
    } else {
      params.set("loai", value);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {FILTER_OPTIONS.map((opt) => (
        <Button
          key={opt.value}
          variant={active === opt.value ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilter(opt.value)}
          className={cn(
            active === opt.value
              ? "bg-pink-600 hover:bg-pink-700 text-white border-pink-600"
              : "hover:border-pink-400 hover:text-pink-600"
          )}
        >
          {opt.label}
        </Button>
      ))}
    </div>
  );
}
