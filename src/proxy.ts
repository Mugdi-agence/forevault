import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LANGS = ["en", "fr", "es", "de", "pt", "ja", "ko"];
const DEFAULT_LANG    = "en";

const BYPASS_PREFIXES = [
    "/_next", "/api", "/favicon", "/robots",
    "/sitemap", "/manifest", "/icons", "/images", "/fonts", "/og",
];

function detectLang(request: NextRequest): string {
    const header = request.headers.get("accept-language") ?? "";
    const preferred = header
        .split(",")
        .map((entry) => {
            const [tag, q] = entry.trim().split(";q=");
            return { code: tag.split("-")[0].toLowerCase().trim(), quality: q ? parseFloat(q) : 1.0 };
        })
        .sort((a, b) => b.quality - a.quality);
    for (const { code } of preferred) {
        if (SUPPORTED_LANGS.includes(code)) return code;
    }
    return DEFAULT_LANG;
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (BYPASS_PREFIXES.some((p) => pathname.startsWith(p))) return NextResponse.next();

    const firstSegment = pathname.split("/")[1];
    if (SUPPORTED_LANGS.includes(firstSegment)) return NextResponse.next();

    const cookieLang = request.cookies.get("preferred_lang")?.value;
    const lang = cookieLang && SUPPORTED_LANGS.includes(cookieLang) ? cookieLang : detectLang(request);

    const url = request.nextUrl.clone();
    url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;

    const response = NextResponse.redirect(url, { status: 307 });
    response.headers.set("x-detected-lang", lang);
    return response;
}

export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
  };