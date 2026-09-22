"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { ChevronDown, Check } from "lucide-react";
import { usePathname, useRouter } from "@/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n";

/**
 * Flag artwork is served from /public/flags rather than drawn inline or set as
 * an emoji: Windows ships no flag glyphs and renders them as bare letter pairs
 * ("GB", "ES"), which looks broken on the platform most visitors use.
 *
 * A plain <img> keeps the 4:3 source ratio intact and avoids routing a tiny
 * static SVG through the image optimizer.
 */
function Flag({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={localeFlags[locale]}
      alt=""
      aria-hidden="true"
      width={24}
      height={18}
      className={className}
    />
  );
}

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close on outside click and on Escape, so the panel never strands itself
  // open over the page.
  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent | TouchEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function switchTo(locale: Locale) {
    setOpen(false);
    if (locale === currentLocale) return;
    // `pathname` from next-intl is locale-agnostic, so the visitor lands on the
    // same page rather than being sent back to the home page.
    startTransition(() => router.replace(pathname, { locale }));
  }

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 z-[60] print:hidden"
      data-testid="language-switcher"
    >
      {open && (
        <div
          role="listbox"
          aria-label="Select language"
          className="absolute bottom-full right-0 mb-2 min-w-[200px] overflow-hidden rounded-md border border-black/10 bg-white shadow-[0_12px_40px_rgba(17,24,39,0.18)]"
        >
          {locales.map((locale) => {
            const active = locale === currentLocale;
            return (
              <button
                key={locale}
                role="option"
                aria-selected={active}
                onClick={() => switchTo(locale)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-[15px] transition-colors hover:bg-[#F8F6F2] ${
                  active ? "font-semibold text-[#1B1E49]" : "text-[#14163A]"
                }`}
              >
                <Flag
                  locale={locale}
                  className="h-[18px] w-[24px] shrink-0 rounded-[2px] object-cover shadow-sm ring-1 ring-black/10"
                />
                <span className="flex-1">{localeNames[locale]}</span>
                {active && <Check size={15} className="shrink-0 text-[#C29A3E]" />}
              </button>
            );
          })}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Change language — currently ${localeNames[currentLocale]}`}
        className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2.5 shadow-[0_6px_24px_rgba(17,24,39,0.16)] transition-all hover:border-[#C29A3E]/50 hover:shadow-[0_8px_28px_rgba(17,24,39,0.22)] disabled:opacity-60"
      >
        <Flag
          locale={currentLocale}
          className="h-[18px] w-[24px] shrink-0 rounded-[2px] object-cover shadow-sm ring-1 ring-black/10"
        />
        <ChevronDown
          size={15}
          className={`text-[#4B5563] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}
