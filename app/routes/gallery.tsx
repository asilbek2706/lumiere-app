import type { Route } from './+types/gallery';
import { useState } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Galereya - Lumiere Beauty Salon' },
    { name: 'description', content: 'Lumiere go\'zallik saloni ishlaridan namunalar.' },
  ];
}

const galleryCategories = ["Hammasi", "Soch", "Makiyaj", "Tirnoq", "Interyer"];

const galleryImages = [
  { id: 1, category: "Soch", url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop", title: "Sariq soch bo'yash" },
  { id: 2, category: "Makiyaj", url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop", title: "Kelinlar makiyaji" },
  { id: 3, category: "Tirnoq", url: "https://images.unsplash.com/photo-1604654894610-df490998570d?q=80&w=600&auto=format&fit=crop", title: "Minimalistik dizayn" },
  { id: 4, category: "Interyer", url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop", title: "Bizning salon" },
  { id: 5, category: "Soch", url: "https://images.unsplash.com/photo-1595475243692-3b2d18942b3b?q=80&w=600&auto=format&fit=crop", title: "Kechki turmak" },
  { id: 6, category: "Makiyaj", url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop", title: "Fashion makiyaj" },
  { id: 7, category: "Tirnoq", url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop", title: "Gel-lak san'ati" },
  { id: 8, category: "Interyer", url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600&auto=format&fit=crop", title: "Kutish zali" },
  { id: 9, category: "Soch", url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop", title: "Tabiiy jilo" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Hammasi");

  const filteredImages = activeCategory === "Hammasi"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold uppercase tracking-[4px] text-sm mb-6">Galereya</h2>
          <h1 className="text-4xl md:text-6xl text-white font-light leading-tight mb-8">
            Bizning <span className="italic">ishlarimiz</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Lumiere ustalari tomonidan amalga oshirilgan eng so'nggi va eng sara ishlardan namunalar bilan tanishing.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-16">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] uppercase tracking-[3px] font-bold transition-all duration-300 pb-2 border-b-2 ${
                activeCategory === cat ? 'text-brand-gold border-brand-gold' : 'text-gray-500 border-transparent hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden aspect-square bg-brand-green/10 cursor-pointer">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
                <span className="text-brand-gold text-[10px] uppercase tracking-[4px] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.category}
                </span>
                <h3 className="text-white text-xl font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {image.title}
                </h3>
                <div className="mt-8 w-12 h-[1px] bg-brand-gold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-24 text-center">
          <p className="text-gray-400 mb-8 text-lg">Yanada ko'proq ishlarni ko'rishni xohlaysizmi?</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-[2px] text-xs hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Instagramda bizni kuzating
          </a>
        </div>
      </div>
    </main>
  );
}
