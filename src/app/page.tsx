export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 60% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 60%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        {/* Logo / Brand */}
        <div className="mb-8">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-6"
            style={{
              background:
                "linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #14b8a6 100%)",
              boxShadow: "0 0 60px rgba(14, 165, 233, 0.4)",
            }}
          >
            {/* Eye icon SVG - megagoz = büyük göz */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 24C4 24 12 10 24 10C36 10 44 24 44 24C44 24 36 38 24 38C12 38 4 24 4 24Z"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r="7"
                stroke="white"
                strokeWidth="3"
                fill="rgba(255,255,255,0.2)"
              />
              <circle cx="24" cy="24" r="3" fill="white" />
            </svg>
          </div>

          <h1
            className="text-5xl md:text-6xl font-800 tracking-tight mb-2"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
            }}
          >
            Megagöz
          </h1>
          <p
            className="text-sm font-medium tracking-[0.3em] uppercase"
            style={{ color: "#0ea5e9" }}
          >
            Göz Sağlığı Merkezi
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-24 h-px mb-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, #0ea5e9, transparent)",
          }}
        />

        {/* Main message */}
        <div
          className="rounded-2xl p-8 md:p-10 mb-10 w-full"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{
              background: "rgba(14, 165, 233, 0.1)",
              border: "1px solid rgba(14, 165, 233, 0.3)",
              color: "#0ea5e9",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#0ea5e9" }}
            />
            Yapım Aşamasında
          </div>

          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#f1f5f9" }}
          >
            Web Sitemiz Çok Yakında!
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#94a3b8" }}
          >
            Yeni web sitemizi sizler için hazırlıyoruz. Çok yakında tüm
            hizmetlerimizle karşınızda olacağız. Bizi takipte kalın!
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <a
            href="tel:+90"
            className="flex items-center justify-center gap-3 flex-1 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
              color: "white",
              boxShadow: "0 8px 32px rgba(14, 165, 233, 0.3)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.38 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 8 8l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 18" />
            </svg>
            Bizi Arayın
          </a>
          <a
            href="mailto:info@megagoz.com"
            className="flex items-center justify-center gap-3 flex-1 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#e2e8f0",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            E-posta Gönder
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-6 text-xs"
        style={{ color: "#475569" }}
      >
        © {new Date().getFullYear()} Megagöz Göz Sağlığı Merkezi — Tüm hakları saklıdır.
      </div>
    </main>
  );
}
