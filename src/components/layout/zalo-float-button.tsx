import { MessageCircleIcon } from "lucide-react";
import { ZALO_LINK } from "@/lib/constants";

export function ZaloFloatButton() {
  return (
    <a
      href={ZALO_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Liên hệ Zalo"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors"
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-blue-400 opacity-50" />
      <MessageCircleIcon className="size-7 relative z-10" />
    </a>
  );
}
