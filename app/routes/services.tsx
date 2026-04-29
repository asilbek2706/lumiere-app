import type { Route } from './+types/services';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Xizmatlar - Lumiere Beauty Salon' },
    {
      name: 'description',
      content:
        'Lumiere Beauty Salon tomonidan taqdim etiladigan barcha go\'zallik xizmatlari va narxlari.',
    },
  ];
}

const serviceCategories = [
  {
    name: 'Soch parvarishi',
    services: [
      { name: 'Ayollar soch kesimi', price: '150,000' },
      { name: 'Soch bo\'yash (bir rang)', price: '300,000+' },
      { name: 'Slojnoe okrashivanie (Airtouch, Balayage)', price: '800,000+' },
      { name: 'Soch turmaklash (vechernyaya)', price: '250,000+' },
      { name: 'Keratin bilan tekislash', price: '600,000+' },
    ],
  },
  {
    name: 'Makiyaj va pardoz',
    services: [
      { name: 'Kunduzgi makiyaj', price: '200,000' },
      { name: 'Kechki (vecherniy) makiyaj', price: '400,000' },
      { name: 'Kelinlar makiyaji', price: '800,000' },
      { name: 'Qosh terish va bo\'yash', price: '80,000' },
      { name: 'Kiprik o\'stirish (Lamination)', price: '250,000' },
    ],
  },
  {
    name: 'Nails (Tirnoq xizmati)',
    services: [
      { name: 'Manikyur + Gel-lak', price: '150,000' },
      { name: 'Pedikyur + Gel-lak', price: '250,000' },
      { name: 'Tirnoq o\'stirish (Narashivanie)', price: '350,000' },
      { name: 'Tirnoq dizayni (murakkab)', price: '50,000+' },
      { name: 'Parafinoterapiya', price: '70,000' },
    ],
  },
  {
    name: 'Kosmetologiya',
    services: [
      { name: 'Yuzni tozalash (Chistka)', price: '350,000' },
      { name: 'Piling (kimyoviy)', price: '300,000' },
      { name: 'Mezoterapiya', price: '500,000+' },
      { name: 'Yuz massaji', price: '150,000' },
      { name: 'Gidrofeshial muolajasi', price: '450,000' },
    ],
  },
];

export default function Services() {
  return (
    <main className="pt-32 pb-24">
      <div className="container">
        <header className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold">
            Xizmatlar va narxlar
          </h1>
          <h2 className="text-5xl md:text-6xl font-medium">
            Bizning <span className="italic gold-gradient-text">menyuyimiz</span>
          </h2>
          <p className="text-white/60 text-lg">
            Sizga eng yuqori sifatli xizmatlarni eng maqbul narxlarda taklif
            etamiz. Barcha narxlar so'mda ko'rsatilgan.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {serviceCategories.map((category) => (
            <div
              key={category.name}
              className="bg-brand-green/5 border border-brand-gold/10 p-8 md:p-12 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-8 border-b border-brand-gold/20 pb-4 text-brand-gold italic">
                {category.name}
              </h3>
              <ul className="space-y-6">
                {category.services.map((service) => (
                  <li
                    key={service.name}
                    className="flex justify-between items-end gap-4 group"
                  >
                    <div className="flex-1">
                      <span className="text-white/90 group-hover:text-brand-gold transition-colors font-medium">
                        {service.name}
                      </span>
                      <div className="border-b border-dotted border-white/20 mt-1 flex-1" />
                    </div>
                    <span className="text-brand-gold font-semibold tracking-wider">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-20 p-8 bg-brand-dark border border-brand-gold/20 rounded-xl text-center max-w-4xl mx-auto">
          <p className="text-white/60 italic">
            * Narxlar ishlatiladigan materiallar hajmi va ishning murakkabligiga
            qarab o'zgarishi mumkin. Yakuniy narx usta tomonidan maslahatdan so'ng
            belgilanadi.
          </p>
        </div>
      </div>
    </main>
  );
}
