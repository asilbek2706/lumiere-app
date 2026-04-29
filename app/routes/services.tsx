import type { Route } from './+types/services';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Xizmatlarimiz - Lumiere Beauty Salon' },
    { name: 'description', content: 'Lumiere go\'zallik saloni tomonidan taqdim etiladigan barcha xizmatlar va narxlar.' },
  ];
}

const servicesData = [
  {
    category: "Soch Parvarishi",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1169&auto=format&fit=crop",
    items: [
      { name: "Ayollar soch turmagi", price: "100,000 UZS", duration: "45 min" },
      { name: "Soch bo'yash (Ombre/Balayage)", price: "450,000 UZS", duration: "120 min" },
      { name: "Kreatinli tekislash", price: "600,000 UZS", duration: "180 min" },
      { name: "Kechki turmaklar", price: "250,000 UZS", duration: "60 min" },
      { name: "Soch davolash muolajalari", price: "200,000 UZS", duration: "40 min" },
    ]
  },
  {
    category: "Makiyaj va Vizaj",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1171&auto=format&fit=crop",
    items: [
      { name: "Kundalik makiyaj", price: "150,000 UZS", duration: "30 min" },
      { name: "Kechki/Bayramona makiyaj", price: "300,000 UZS", duration: "60 min" },
      { name: "Kelinlar makiyaji", price: "800,000 UZS", duration: "120 min" },
      { name: "Qosh shakllantirish", price: "50,000 UZS", duration: "20 min" },
      { name: "Kiprik o'stirish", price: "250,000 UZS", duration: "90 min" },
    ]
  },
  {
    category: "Kosmetologiya",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1170&auto=format&fit=crop",
    items: [
      { name: "Yuzni tozalash (Chistka)", price: "300,000 UZS", duration: "60 min" },
      { name: "Piling muolajalari", price: "250,000 UZS", duration: "45 min" },
      { name: "Yuz massaji", price: "150,000 UZS", duration: "30 min" },
      { name: "Anti-age terapiya", price: "500,000 UZS", duration: "60 min" },
      { name: "Gidrofatsial", price: "400,000 UZS", duration: "50 min" },
    ]
  },
  {
    category: "Tirnoq Xizmatlari",
    image: "https://images.unsplash.com/photo-1604654894610-df490998570d?q=80&w=1074&auto=format&fit=crop",
    items: [
      { name: "Apparatli manikyur", price: "80,000 UZS", duration: "40 min" },
      { name: "Gel-lak qoplash", price: "120,000 UZS", duration: "60 min" },
      { name: "Tirnoq o'stirish (Narashivanie)", price: "250,000 UZS", duration: "120 min" },
      { name: "Pedikyur", price: "150,000 UZS", duration: "60 min" },
      { name: "Dizayn (har bir tirnoq)", price: "10,000 UZS", duration: "10 min" },
    ]
  }
];

export default function Services() {
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-gold uppercase tracking-[4px] text-sm mb-6">Narxlar ro'yxati</h2>
          <h1 className="text-4xl md:text-6xl text-white font-light leading-tight mb-8">
            Go'zallik uchun <span className="italic">professional</span> xizmatlar
          </h1>
          <p className="text-gray-400 text-lg">
            Biz har bir mijozimizga yuqori sifatli mahsulotlar va mahoratli ustalar xizmatini kafolatlaymiz.
            Xizmatlarimiz turi va narxlari bilan quyida tanishishingiz mumkin.
          </p>
        </div>

        <div className="space-y-32">
          {servicesData.map((section, sectionIdx) => (
            <div key={section.category} className={`grid lg:grid-cols-2 gap-16 items-start ${sectionIdx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-8 ${sectionIdx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <img
                    src={section.image}
                    alt={section.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h2 className="text-3xl text-white font-light border-l-2 border-brand-gold pl-6 tracking-wide">
                  {section.category}
                </h2>
              </div>

              <div className={`space-y-2 ${sectionIdx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                {section.items.map((item, idx) => (
                  <div key={idx} className="group py-6 border-b border-white/10 flex justify-between items-end hover:border-brand-gold/50 transition-colors duration-300">
                    <div className="flex-1 mr-4">
                      <div className="flex justify-between items-end mb-1">
                        <h3 className="text-xl text-white group-hover:text-brand-gold transition-colors duration-300">{item.name}</h3>
                        <span className="text-brand-gold font-semibold">{item.price}</span>
                      </div>
                      <p className="text-gray-500 text-sm uppercase tracking-widest">{item.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-white/5 border border-white/10 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl text-white mb-6">Xizmatga yozilishni xohlaysizmi?</h3>
          <p className="text-gray-400 mb-10 text-lg">
            Biz sizga eng mos vaqtni belgilashda yordam beramiz. Onlayn ariza qoldiring yoki bizga qo'ng'iroq qiling.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+998901234567" className="px-10 py-4 bg-brand-gold text-brand-green font-bold uppercase tracking-[2px] text-xs hover:bg-white transition-all duration-300">
              Qo'ng'iroq qilish
            </a>
            <a href="/contact" className="px-10 py-4 border border-white text-white font-bold uppercase tracking-[2px] text-xs hover:bg-white hover:text-brand-green transition-all duration-300">
              Onlayn yozilish
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
