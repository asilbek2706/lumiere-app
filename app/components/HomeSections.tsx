import { Link } from 'react-router';

export const StorySection = () => (
  <section className="py-24 bg-white/5">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] bg-brand-green/30 overflow-hidden relative z-10 border border-brand-gold/20">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1074&auto=format&fit=crop"
              alt="Salon Interior"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-brand-gold/10 -z-0 border border-brand-gold/20"></div>
        </div>
        <div>
          <h2 className="text-brand-gold uppercase tracking-[4px] text-sm mb-6">Biz haqimizda</h2>
          <h3 className="text-4xl md:text-5xl text-white font-light leading-tight mb-8">
            Lumiere - bu shunchaki salon emas, bu <span className="italic">san'at markazi</span>
          </h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Biz 2015-yildan buyon ayollar va erkaklar uchun eng zamonaviy go'zallik xizmatlarini ko'rsatib kelmoqdamiz.
            Bizning maqsadimiz - har bir mijozni nafaqat chiroyli, balki o'ziga bo'lgan ishonchi ortgan holda kuzatishdir.
          </p>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Professional mutaxassislarimiz dunyo standartlariga mos keladigan eng sara kosmetik vositalardan foydalanishadi.
            Biz har bir detalga e'tibor beramiz.
          </p>
          <Link
            to="/experts"
            className="inline-block px-10 py-4 border border-brand-gold text-brand-gold font-bold uppercase tracking-[2px] text-xs hover:bg-brand-gold hover:text-brand-green transition-all duration-300"
          >
            Mutaxassislarimiz bilan tanishing
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export const FeaturedServices = () => {
  const services = [
    {
      title: "Soch Turmaklash",
      desc: "Kechki va kundalik turmaklar, bo'yash va parvarish.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      )
    },
    {
      title: "Makiyaj",
      desc: "Professional makiyaj xizmatlari har qanday tadbir uchun.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-5.25v9" />
        </svg>
      )
    },
    {
      title: "Kosmetologiya",
      desc: "Yuz terisini parvarish qilish va yoshartirish muolajalari.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
      )
    },
    {
      title: "Manikyur & Pedikyur",
      desc: "Tirnoqlar parvarishi va zamonaviy dizayn xizmatlari.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-brand-gold uppercase tracking-[4px] text-sm mb-6">Xizmatlarimiz</h2>
          <h3 className="text-4xl md:text-5xl text-white font-light leading-tight">
            Mukammallikka erishish uchun bizning <span className="italic">yo'nalishlar</span>
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border border-white/10 hover:border-brand-gold/50 transition-all duration-500 group">
              <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <Link to="/services" className="text-brand-gold text-[10px] uppercase tracking-[2px] font-bold border-b border-brand-gold/30 pb-1 hover:border-brand-gold transition-all duration-300">
                Batafsil
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const reviews = [
    {
      name: "Malika Ahmedova",
      role: "Mijoz",
      text: "Lumiere saloni mening sevimli maskanim. Bu yerdagi muhit va xizmat ko'rsatish darajasi shunchaki ajoyib. Har doim mamnun bo'lib ketaman."
    },
    {
      name: "Sitora Karimova",
      role: "Mijoz",
      text: "Professional ustalar jamoasi! Sochimni bo'yatish bo'yicha juda ko'p joyga borganman, lekin faqat shu yerda kutgan natijamni oldim."
    },
    {
      name: "Nigora Alieva",
      role: "Mijoz",
      text: "Kosmetologiya xizmatlari juda ma'qul keldi. Yuz terim sezilarli darajada yaxshilandi. Tavsiya qilaman!"
    }
  ];

  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-gold uppercase tracking-[4px] text-sm mb-6">Mijozlarimiz fikri</h2>
            <h3 className="text-4xl md:text-5xl text-white font-light leading-tight">
              Mijozlarimizning <span className="italic">mamnuniyati</span> - bizning yutug'imiz
            </h3>
          </div>
          <div className="flex gap-4">
            {/* Nav buttons could go here */}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-10 bg-white/5 border border-white/5 relative">
              <span className="text-6xl text-brand-gold/20 absolute top-4 right-8 font-serif">"</span>
              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h5 className="text-white font-semibold">{review.name}</h5>
                  <p className="text-brand-gold text-xs uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
