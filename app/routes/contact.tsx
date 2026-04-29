import type { Route } from './+types/contact';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Bog\'lanish - Lumiere Beauty Salon' },
    { name: 'description', content: 'Lumiere go\'zallik saloni bilan bog\'laning va xizmatga yoziling.' },
  ];
}

export default function Contact() {
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column: Info */}
          <div>
            <h2 className="text-brand-gold uppercase tracking-[4px] text-sm mb-6">Bog'lanish</h2>
            <h1 className="text-4xl md:text-6xl text-white font-light leading-tight mb-12">
              Biz bilan <span className="italic gold-gradient">aloqada</span> bo'ling
            </h1>

            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-brand-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Manzilimiz</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Toshkent shahri, Mirobod tumani,<br />
                    Amir Temur ko'chasi, 108-uy
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-brand-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Telefon va Email</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    +998 (90) 123-45-67<br />
                    info@lumieresalon.uz
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-brand-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Ish vaqti</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Dushanba - Shanba: 09:00 - 20:00<br />
                    Yakshanba: 10:00 - 18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 h-80 bg-brand-green/20 border border-white/5 relative group grayscale hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 flex items-center justify-center text-gray-500 uppercase tracking-widest text-sm">
                 [ Xarita bu yerda bo'ladi ]
               </div>
               <img
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop"
                 alt="Map Placeholder"
                 className="w-full h-full object-cover opacity-20"
               />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl text-white font-light mb-8">Xizmatga yozilish</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-[2px] text-gray-400 font-bold">Ismingiz</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-brand-gold outline-none transition-colors"
                    placeholder="Abbos Ali"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[10px] uppercase tracking-[2px] text-gray-400 font-bold">Telefon raqamingiz</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-brand-gold outline-none transition-colors"
                    placeholder="+998 90 123 45 67"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-[10px] uppercase tracking-[2px] text-gray-400 font-bold">Xizmat turi</label>
                <select
                  id="service"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-brand-gold outline-none transition-colors appearance-none"
                >
                  <option className="bg-brand-dark">Soch parvarishi</option>
                  <option className="bg-brand-dark">Makiyaj</option>
                  <option className="bg-brand-dark">Kosmetologiya</option>
                  <option className="bg-brand-dark">Tirnoq xizmati</option>
                  <option className="bg-brand-dark">Boshqa</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-[2px] text-gray-400 font-bold">Xabar (ixtiyoriy)</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-brand-gold outline-none transition-colors resize-none"
                  placeholder="Xohishlaringizni yozib qoldiring..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-brand-gold text-brand-green font-bold uppercase tracking-[3px] text-xs hover:bg-white transition-all duration-300 mt-4"
              >
                Yozilishni tasdiqlash
              </button>

              <p className="text-center text-gray-500 text-xs mt-6">
                Biz siz bilan 15 daqiqa ichida bog'lanib, vaqtni aniqlashtiramiz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
