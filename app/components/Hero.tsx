import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <path
            fill="currentColor"
            d="M452.2,250c0,111.7-90.5,202.2-202.2,202.2S47.8,361.7,47.8,250S138.3,47.8,250,47.8S452.2,138.3,452.2,250z"
            className="text-brand-gold"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-brand-gold uppercase tracking-[4px] text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Professional Go'zallik Markazi
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            O'zingizni <br />
            <span className="italic font-normal gold-gradient">eng go'zal</span>
            <br /> his eting
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Bizning mahoratli ustalarimiz sizning tashqi ko'rinishingizni yangilab,
            ichki go'zalligingizni ochib berishadi. Har bir mijozga alohida yondashuv.
          </p>
          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Link
              to="/contact"
              className="px-10 py-4 bg-brand-gold text-brand-green font-bold uppercase tracking-[2px] text-xs hover:bg-white hover:text-brand-green transition-all duration-300 shadow-xl shadow-black/20"
            >
              Yozilish
            </Link>
            <Link
              to="/services"
              className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-[2px] text-xs hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
            >
              Xizmatlarimiz
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative side element */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-brand-gold h-32 opacity-50"></div>
    </section>
  );
};

export default HeroSection;
