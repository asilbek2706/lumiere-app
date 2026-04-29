import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-gold/10 pt-20 pb-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Info */}
        <div className="space-y-6 text-center md:text-left">
          <Link
            to="/"
            className="text-3xl font-bold tracking-[0.2em] text-white hover:text-brand-gold transition-colors uppercase"
          >
            Lumiere
          </Link>
          <p className="text-white/60 leading-relaxed max-w-xs mx-auto md:mx-0">
            Sizning go'zalligingiz - bizning ustuvor vazifamiz. 10 yildan ortiq
            tajribaga ega professional jamoamiz bilan xizmatingizdamiz.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            {['Instagram', 'Telegram', 'Facebook'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-current" /> {/* Icon Placeholder */}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-brand-gold uppercase tracking-widest font-semibold mb-8">
            Tezkor havolalar
          </h3>
          <ul className="space-y-4">
            {[
              { name: 'Bosh sahifa', path: '/' },
              { name: 'Xizmatlar', path: '/services' },
              { name: 'Ustalar', path: '/experts' },
              { name: 'Galereya', path: '/gallery' },
              { name: 'Bog\'lanish', path: '/contact' },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-white/60 hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="text-center md:text-left">
          <h3 className="text-brand-gold uppercase tracking-widest font-semibold mb-8">
            Xizmatlarimiz
          </h3>
          <ul className="space-y-4">
            {[
              'Soch turmaklari',
              'Makiyaj va pardoz',
              'Manikyur va Pedikyur',
              'Kosmetologiya',
              'Kelinlar uchun maxsus',
            ].map((service) => (
              <li key={service} className="text-white/60">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-brand-gold uppercase tracking-widest font-semibold mb-8">
            Bog'lanish
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start justify-center md:justify-start gap-3">
              <span className="text-brand-gold">Manzil:</span>
              <span className="text-white/60">
                Toshkent sh., Navoiy ko'chasi, 24-uy
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-brand-gold">Tel:</span>
              <a
                href="tel:+998901234567"
                className="text-white/60 hover:text-brand-gold transition-colors"
              >
                +998 (90) 123-45-67
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-brand-gold">Ish vaqti:</span>
              <span className="text-white/60">Har kuni 09:00 - 20:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="container pt-10 border-t border-brand-gold/5 text-center">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Lumiere Beauty Salon. Barcha huquqlar
          himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
