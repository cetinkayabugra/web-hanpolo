export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
          Digital Solutions For<br className="hidden sm:block" /> Modern Businesses
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Hanpolo helps businesses improve their online presence, streamline operations,
          and leverage modern technology through websites, automation, and custom digital solutions.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-slate-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
