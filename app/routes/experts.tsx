import type { Route } from './+types/experts';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Mutaxassislarimiz - Lumiere Beauty Salon' },
    { name: 'description', content: 'Lumiere go\'zallik salonining professional ustalari bilan tanishing.' },
  ];
}

const expertsData = [
  {
    id: 1,
    name: "Mohira Salimova",
    specialty: "Top Stalist / Rang berish ustasi",
    experience: "10 yillik tajriba",
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1000&auto=format&fit=crop",
    bio: "Mohira soch bo'yash va murakkab turmaklar bo'yicha yetakchi mutaxassis. U Parij va Milandagi mahorat darslarida qatnashgan."
  },
  {
    id: 2,
    name: "Zarina Usmonova",
    specialty: "Professional Vizajist",
    experience: "7 yillik tajriba",
    image: "https://images.unsplash.com/photo-1583946210796-c4125149151f?q=80&w=1000&auto=format&fit=crop",
    bio: "Zarina yuz go'zalligini ta'kidlash bo'yicha mahorat egasi. Uning ishlari ko'plab moda jurnallarida chop etilgan."
  },
  {
    id: 3,
    name: "Kamola Akromova",
    specialty: "Vrach-Kosmetolog",
    experience: "12 yillik tajriba",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
    bio: "Kamola tibbiy ma'lumotga ega mutaxassis bo'lib, yuz terisini parvarish qilish va yoshartirish bo'yicha xalqaro sertifikatlarga ega."
  },
  {
    id: 4,
    name: "Diyora Ergasheva",
    specialty: "Tirnoq servisi ustasi",
    experience: "5 yillik tajriba",
    image: "https://images.unsplash.com/photo-1598460390528-54210dd2c274?q=80&w=1000&auto=format&fit=crop",
    bio: "Diyora tirnoqlarda haqiqiy san'at asarlarini yaratadi. U har bir mijoz uchun o'ziga xos dizayn tanlaydi."
  },
  {
    id: 5,
    name: "Aziza Karimova",
    specialty: "Soch parvarishi va davolash",
    experience: "8 yillik tajriba",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop",
    bio: "Aziza sochning sog'lom ko'rinishi va tiklanishi uchun mas'ul. U tabiiy mahsulotlar bilan ishlashni afzal ko'radi."
  },
  {
    id: 6,
    name: "Laylo Sharipova",
    specialty: "Kelinlar makiyaji ustasi",
    experience: "9 yillik tajriba",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    bio: "Laylo kelinlarning hayotidagi eng muhim kunda ularning go'zalligiga mas'ul. U eng so'nggi trendlardan xabardor."
  }
];

export default function Experts() {
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-brand-gold uppercase tracking-[4px] text-sm mb-6">Mutaxassislarimiz</h2>
          <h1 className="text-4xl md:text-6xl text-white font-light leading-tight mb-8">
            Go'zallik <span className="italic gold-gradient">ijodkorlari</span> bilan tanishing
          </h1>
          <p className="text-gray-400 text-lg">
            Bizning jamoamiz o'z ishining chinakam ustalari va o'z sohasidagi fidoyilardan tashkil topgan.
            Ularning har biri sizga eng yaxshi xizmatni ko'rsatishga tayyor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {expertsData.map((expert) => (
            <div key={expert.id} className="group">
              <div className="relative mb-8 overflow-hidden aspect-[3/4] bg-brand-green/20">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors">
                      <span className="sr-only">Telegram</span>
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.414 17.15c-.172.193-.418.303-.674.303-.11 0-.222-.02-.328-.063-2.316-.948-5.332-2.185-7.666-3.136-.328-.133-.538-.456-.525-.81.014-.354.254-.66.598-.76 1.49-.434 4.542-1.321 6.035-1.754.436-.126.74-.528.74-.98 0-.012 0-.023-.001-.035-.008-.475-.386-.867-.864-.875-.116-.002-.232.019-.34.062-2.316.948-7.667 3.136-7.667 3.136-.328.133-.538.456-.525.81.014.354.254.66.598.76 1.49.434 3.03 1.321 4.523 1.754.436.126.74.528.74.98 0 .012 0 .023-.001.035-.008.475-.386.867-.864.875-.116.002-.232-.019-.34-.062-2.316-.948-3.332-2.185-5.666-3.136-.328-.133-.538-.456-.525-.81.014-.354.254-.66.598-.76 1.49-.434 1.542-1.321 3.035-1.754.436-.126.74-.528.74-.98z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl text-white mb-2 font-light group-hover:text-brand-gold transition-colors">{expert.name}</h3>
              <p className="text-brand-gold text-[10px] uppercase tracking-[3px] font-bold mb-4">{expert.specialty}</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">{expert.experience}</p>
              <p className="text-gray-400 leading-relaxed border-l border-white/10 pl-6 group-hover:border-brand-gold transition-colors duration-500">
                {expert.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 border border-white/5 bg-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-5 blur-[120px] rounded-full"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl text-white font-light mb-6">Bizga qo'shilmoqchimisiz?</h3>
              <p className="text-gray-400 text-lg mb-0">
                Lumiere jamoasi har doim iqtidorli va o'z ishini sevuvchi mutaxassislarni qidiradi.
                Agar siz ham biz bilan ishlashni xohlasangiz, rezyumengizni yuboring.
              </p>
            </div>
            <div className="md:text-right">
              <a href="mailto:hr@lumieresalon.uz" className="inline-block px-10 py-4 bg-white text-brand-green font-bold uppercase tracking-[2px] text-xs hover:bg-brand-gold transition-all duration-300">
                Rezyume yuborish
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
