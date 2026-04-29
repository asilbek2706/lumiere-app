import type { Route } from './+types/gallery';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Galereya - Lumiere Beauty Salon' },
    {
      name: 'description',
      content:
        'Lumiere Beauty Salon ishlaridan namunalar. Bizning natijalarimiz bilan tanishing.',
    },
  ];
}

const galleryItems = [
  { id: 1, category: 'Soch', title: 'Airtouch Coloring', icon: '💇‍♀️' },
  { id: 2, category: 'Makiyaj', title: 'Bridal Makeup', icon: '💄' },
  { id: 3, category: 'Tirnoq', title: 'Luxury Manicure', icon: '💅' },
  { id: 4, category: 'Soch', title: 'Evening Hairstyle', icon: '👱‍♀️' },
  { id: 5, category: 'Kosmetologiya', title: 'Facial Care', icon: '✨' },
  { id: 6, category: 'Soch', title: 'Modern Cut', icon: '✂️' },
  { id: 7, category: 'Makiyaj', title: 'Evening Glow', icon: '🌟' },
  { id: 8, category: 'Tirnoq', title: 'Art Design', icon: '🎨' },
];

export default function Gallery() {
  return (
    <main className="pt-32 pb-24">
      <div className="container">
        <header className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold">
            Bizning ishlarimiz
          </h1>
          <h2 className="text-5xl md:text-6xl font-medium">
            Go'zallik <span className="italic gold-gradient-text">galereyasi</span>
          </h2>
          <p className="text-white/60 text-lg">
            Bizning ustalarimiz tomonidan yaratilgan go'zallik namunalaridan
            bahramand bo'ling. Har bir ishga qalbimizni beramiz.
          </p>
        </header>

        {/* Filter Placeholders */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Barchasi', 'Soch', 'Makiyaj', 'Tirnoq', 'Kosmetologiya'].map(
            (filter, i) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full border text-sm uppercase tracking-widest transition-all duration-300 ${
                  i === 0
                    ? 'bg-brand-gold text-brand-dark border-brand-gold font-bold'
                    : 'border-brand-gold/20 text-white/60 hover:border-brand-gold hover:text-brand-gold'
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl bg-brand-green/5 border border-brand-gold/10 aspect-[4/5] ${
                index % 3 === 0 ? 'lg:row-span-2 lg:aspect-auto' : ''
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-7xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
                {item.icon}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h3 className="text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
                <div className="w-10 h-[1px] bg-brand-gold mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150" />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-24 text-center space-y-8">
          <p className="text-white/60 text-lg">
            Yana ko'proq ishlarni ko'rishni istaysizmi?
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-3"
          >
            Instagramda kuzatib boring
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
