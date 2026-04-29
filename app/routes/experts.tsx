import type { Route } from './+types/experts';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ustalarimiz - Lumiere Beauty Salon' },
    {
      name: 'description',
      content:
        'Lumiere Beauty Salon professional ustalari bilan tanishing. O\'z sohasining yetuk mutaxassislari.',
    },
  ];
}

const experts = [
  {
    name: 'Malika Axmedova',
    role: 'Top Stalist / Kolorist',
    experience: '12 yil',
    specialty: 'Slojnoe okrashivanie, Airtouch',
    image: '👩‍🎨',
  },
  {
    name: 'Nigora Usmonova',
    role: 'Art Makiyaj Ustasi',
    experience: '8 yil',
    specialty: 'Wedding & Fashion Makeup',
    image: '💄',
  },
  {
    name: 'Elena Petrova',
    role: 'Vrach-Kosmetolog',
    experience: '15 yil',
    specialty: 'In' + 'yektsion kosmetologiya',
    image: '👩‍⚕️',
  },
  {
    name: 'Zuhra Karimova',
    role: 'Nail Artist',
    experience: '6 yil',
    specialty: 'Murakkab dizaynlar, Pedikyur',
    image: '💅',
  },
  {
    name: 'Sardor Aliev',
    role: 'Barber / Stalist',
    experience: '7 yil',
    specialty: 'Erkaklar soch turmaklari',
    image: '💇‍♂️',
  },
  {
    name: 'Madina Tursunova',
    role: 'Kiprik va Qosh ustasi',
    experience: '5 yil',
    specialty: 'Lamination, Lash extension',
    image: '👁️',
  },
];

export default function Experts() {
  return (
    <main className="pt-32 pb-24">
      <div className="container">
        <header className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold">
            Bizning jamoa
          </h1>
          <h2 className="text-5xl md:text-6xl font-medium">
            O'z ishining <span className="italic gold-gradient-text">ustalari</span>
          </h2>
          <p className="text-white/60 text-lg">
            Sizning go'zalligingizni ishonchli qo'llarga topshiring. Bizning
            ustalarimiz doimiy ravishda o'z malakalarini oshirib boradilar.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="group relative bg-brand-green/5 border border-brand-gold/10 p-1 rounded-2xl overflow-hidden hover:border-brand-gold/50 transition-all duration-500"
            >
              <div className="aspect-[3/4] bg-brand-dark/50 rounded-xl overflow-hidden flex items-center justify-center relative">
                <span className="text-8xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
                  {expert.image}
                </span>

                {/* Overlay Info */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-brand-dark via-brand-dark/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-2">
                    Mutaxassisligi:
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {expert.specialty}
                  </p>
                </div>
              </div>

              <div className="p-6 text-center space-y-2">
                <h3 className="text-2xl font-semibold group-hover:text-brand-gold transition-colors">
                  {expert.name}
                </h3>
                <p className="text-brand-gold/80 text-sm uppercase tracking-widest font-medium">
                  {expert.role}
                </p>
                <div className="pt-4 flex items-center justify-center gap-2">
                  <span className="h-[1px] w-8 bg-brand-gold/30" />
                  <span className="text-white/40 text-xs uppercase tracking-tighter">
                    Tajriba: {expert.experience}
                  </span>
                  <span className="h-[1px] w-8 bg-brand-gold/30" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-24 bg-brand-green/10 border border-brand-gold/10 rounded-3xl p-12 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-3xl font-medium">
            Jamoamizga <span className="italic gold-gradient-text">qo'shilishni</span> istaysizmi?
          </h3>
          <p className="text-white/60">
            Agar siz ham o'z ishingizning ustasi bo'lsangiz va bizning shinam
            salonimizda ishlashni xohlasangiz, biz bilan bog'laning.
          </p>
          <a href="/contact" className="btn-outline inline-block">
            Rezyume yuborish
          </a>
        </div>
      </div>
    </main>
  );
}
