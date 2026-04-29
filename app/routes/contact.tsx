import type { Route } from './+types/contact';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Bog\'lanish - Lumiere Beauty Salon' },
    {
      name: 'description',
      content:
        'Lumiere Beauty Salon bilan bog\'laning. Manzilimiz, telefon raqamimiz va onlayn yozilish formasi.',
    },
  ];
}

export default function Contact() {
  return (
    <main className="pt-32 pb-24">
      <div className="container">
        <header className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold">
            Bog'lanish
          </h1>
          <h2 className="text-5xl md:text-6xl font-medium">
            Biz bilan <span className="italic gold-gradient-text">aloqada</span> bo'ling
          </h2>
          <p className="text-white/60 text-lg">
            Savollaringiz bormi yoki xizmatga yozilmoqchimisiz? Quyidagi formani
            to'ldiring yoki bizga qo'ng'iroq qiling.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-brand-green/5 border border-brand-gold/10 p-8 md:p-12 rounded-3xl">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    placeholder="Masalan: Malika"
                    className="w-full bg-brand-dark/50 border border-brand-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                    Telefon raqamingiz
                  </label>
                  <input
                    type="tel"
                    placeholder="+998"
                    className="w-full bg-brand-dark/50 border border-brand-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                  Xizmat turi
                </label>
                <select className="w-full bg-brand-dark/50 border border-brand-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-white/60">
                  <option>Soch turmaklash</option>
                  <option>Makiyaj</option>
                  <option>Manikyur / Pedikyur</option>
                  <option>Kosmetologiya</option>
                  <option>Boshqa</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                  Xabaringiz
                </label>
                <textarea
                  rows={4}
                  placeholder="Xabaringizni shu yerda qoldiring..."
                  className="w-full bg-brand-dark/50 border border-brand-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-white"
                />
              </div>

              <button type="submit" className="btn-primary w-full py-4">
                Yuborish
              </button>
            </form>
          </div>

          {/* Contact Info & Map Placeholder */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-brand-gold text-lg font-semibold italic">
                  Manzil
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Toshkent shahar, <br />
                  Navoiy ko'chasi, 24-uy <br />
                  (Mo'ljal: Milliy kutubxona yaqinida)
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-brand-gold text-lg font-semibold italic">
                  Aloqa
                </h3>
                <p className="text-white/70 leading-relaxed">
                  +998 (90) 123-45-67 <br />
                  +998 (71) 200-00-00 <br />
                  info@lumieresalon.uz
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-brand-gold text-lg font-semibold italic">
                  Ish vaqti
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Dushanba - Yakshanba <br />
                  09:00 - 20:00 <br />
                  Dam olish kunisiz
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-brand-gold text-lg font-semibold italic">
                  Ijtimoiy tarmoqlar
                </h3>
                <div className="flex gap-4">
                  {['Instagram', 'Telegram', 'FB'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-white/60 hover:text-brand-gold transition-colors underline decoration-brand-gold/20 underline-offset-4"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full aspect-video bg-brand-green/20 rounded-3xl border border-brand-gold/20 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-gold/5 group-hover:bg-brand-gold/10 transition-colors" />
              <div className="relative z-10 text-center space-y-2">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-brand-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                  Google Maps
                </p>
                <p className="text-white/40 text-xs">
                  Xaritani ko'rish uchun bosing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
