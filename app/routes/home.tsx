import Hero from '~/components/Hero';
import { Link } from 'react-router';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Lumiere Beauty Salon - Go\'zallik olami' },
    {
      name: 'description',
      content:
        'Lumiere Beauty Salon - Toshkentdagi eng zamonaviy go\'zallik saloni. Soch turmaklari, makiyaj, manikyur va boshqa xizmatlar.',
    },
  ];
}

export default function Home() {
  const services = [
    {
      title: 'Soch turmaklari',
      description: 'Professional soch kesish, bo\'yash va turmaklash xizmatlari.',
      icon: '💇‍♀️',
    },
    {
      title: 'Makiyaj',
      description: 'Kelinlar va tadbirlar uchun professional pardoz xizmati.',
      icon: '💄',
    },
    {
      title: 'Manikyur',
      description: 'Tirnoqlar parvarishi, gel-lak va zamonaviy dizaynlar.',
      icon: '💅',
    },
    {
      title: 'Kosmetologiya',
      description: 'Yuz terisini parvarish qilish va yoshartirish muolajalari.',
      icon: '✨',
    },
  ];

  return (
    <main>
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-brand-green/10">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-brand-green/20 rounded-2xl border border-brand-gold/20 flex items-center justify-center relative overflow-hidden">
              <span className="text-brand-gold/20 text-[200px] font-bold italic rotate-12 select-none">
                L
              </span>
              <div className="absolute inset-4 border border-brand-gold/10 rounded-xl" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-dark p-8 border border-brand-gold/20 rounded-lg hidden md:block">
              <p className="text-brand-gold text-5xl font-bold mb-1">10+</p>
              <p className="text-xs uppercase tracking-widest text-white/60">
                Yillik Tajriba
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold">
                Biz haqimizda
              </h2>
              <h3 className="text-4xl md:text-5xl font-medium leading-tight">
                Go'zallik va mukammallik <br />
                <span className="italic gold-gradient-text">bir joyda</span>
              </h3>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Lumiere Beauty Salon - bu faqatgina go'zallik saloni emas, balki
              o'zingizni erkin va go'zal his qilishingiz uchun yaratilgan maskandir.
              Biz har bir mijozga individual yondashamiz va eng so'nggi
              texnologiyalardan foydalanamiz.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Professional ustalar',
                'Yuqori sifatli mahsulotlar',
                'Shinam atmosfera',
                'Hamyonbop narxlar',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-outline inline-block">
              Batafsil bilish
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold">
              Xizmatlarimiz
            </h2>
            <h3 className="text-4xl md:text-5xl font-medium">
              Siz uchun <span className="italic gold-gradient-text">eng yaxshisi</span>
            </h3>
            <p className="text-white/60">
              Bizning keng ko'lamli xizmatlarimiz orqali o'zingizni yangidan
              kashf eting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 bg-brand-green/5 border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-500 rounded-lg hover:-translate-y-2"
              >
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-brand-gold text-xs uppercase tracking-widest font-bold flex items-center gap-2 group/link"
                >
                  Batafsil
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services" className="btn-primary">
              Barcha xizmatlarni ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold/5 -z-10" />
        <div className="container">
          <div className="bg-brand-dark border border-brand-gold/20 p-12 md:p-20 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium">
                Go'zallik sari <span className="italic gold-gradient-text">birinchi qadamni</span> qo'ying
              </h2>
              <p className="text-white/70 text-lg">
                Hoziroq onlayn navbatga yoziling va vaqtingizni tejang. Biz sizni
                kutmoqdamiz!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="btn-primary w-full sm:w-auto">
                  Navbatga yozilish
                </Link>
                <a
                  href="tel:+998901234567"
                  className="btn-outline w-full sm:w-auto"
                >
                  Bog'lanish
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
