import LoginForm from "./LoginForm";

export const metadata = {
  title: "Admin Login — Vivente",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-brand-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src="/white_logo.png" alt="Vivente" className="h-8 w-auto mx-auto mb-4 opacity-90" />
          <p className="text-cream-200/30 text-xs tracking-widest uppercase">Admin Access</p>
        </div>

        {/* Card */}
        <div className="bg-brand-900/50 border border-brand-700/30 rounded-2xl p-8">
          <h1
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-cream-100 text-xl font-semibold mb-6 text-center"
          >
            Sign In
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
