import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-brand-gold/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-linear-to-tr from-brand-gold/5 to-transparent pointer-events-none" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-brand-gold uppercase tracking-[0.4em] text-sm md:text-base font-semibold animate-fade-in">
              Premium Beauty Salon
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-tight">
              O'zingizni <br />
              <span className="italic gold-gradient-text">eng go'zal</span> <br />
              his eting
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Professional ustalar, zamonaviy texnologiyalar va yuqori sifatli
            mahsulotlar bilan sizning go'zalligingizni yanada yorqinroq qilamiz.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
            <Link to="/contact" className="btn-primary">
              Hozir yozilish
            </Link>
            <Link
              to="/services"
              className="text-white uppercase tracking-widest text-sm font-semibold hover:text-brand-gold transition-colors flex items-center gap-2 group"
            >
              Xizmatlarimiz
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Hero Image / Illustration Placeholder */}
        <div className="relative hidden lg:block animate-fade-in-right">
          <div className="relative z-10 w-full aspect-[4/5] rounded-t-full border-2 border-brand-gold/30 p-4">
            <div className="w-full h-full rounded-t-full overflow-hidden bg-brand-green/20 backdrop-blur-sm flex items-center justify-center border border-brand-gold/20">
              <span className="text-brand-gold/40 text-8xl font-bold italic tracking-tighter">
                Lumiere
              </span>
            </div>
          </div>
          {/* Decorative frames */}
          <div className="absolute -top-4 -right-4 w-full h-full rounded-t-full border border-brand-gold/10 -z-10 translate-x-4 translate-y-4" />
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 p-8 bg-brand-dark/80 backdrop-blur-md border border-brand-gold/20 z-20">
            <p className="text-brand-gold text-4xl font-bold">10+</p>
            <p className="text-[10px] uppercase tracking-widest text-white/60">
              Yillik Tajriba
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
