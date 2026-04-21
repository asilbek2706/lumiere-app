import '../styles/Navbar.css';
import '../styles/variables.css';

const Navbar = () => {
  return (
    <div className="flex navigation">
      {/* Navigation Logo */}
      <div className="nav-logo">
        <a href="/" className="nav-logo-link">
          Lumiere
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="nav-items flex gap-6 text-white">
        <li className="nav-item">
          <a href="/" className="nav-links">
            Bosh sahifa
          </a>
        </li>
        <li className="nav-item">
          <a href="/services" className="nav-links">
            Xizmatlar
          </a>
        </li>
        <li className="nav-item">
          <a href="/experts" className="nav-links">
            Ustalar
          </a>
        </li>
        <li className="nav-item">
          <a href="/gallery" className="nav-links">
            Galereya
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-links">
            Bog'lanish
          </a>
        </li>
      </ul>

      {/* button */}
      <a href="/contact" className="nav-links">
        <button className="button" type="button">
          Yozilish
        </button>
      </a>
    </div>
  );
};

export default Navbar;
