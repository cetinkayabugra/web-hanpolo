export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-semibold text-slate-900">Hanpolo</p>
          <p className="text-sm text-slate-500 mt-0.5">Digital Solutions For Modern Businesses</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1">
          <a
            href="mailto:contact@hanpolo.com"
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            contact@hanpolo.com
          </a>
          <p className="text-xs text-slate-400">© 2026 Hanpolo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
