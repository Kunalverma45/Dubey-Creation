import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-heading">
        Click the burger menu to see the magic.
      </h1>

      <input type="checkbox" id="burger-toggle" />
      <label htmlFor="burger-toggle" className="burger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>

      <div className="menu">
        <div className="menu-inner">
          <ul className="menu-nav">
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="#home">
                <span>Home</span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="#about">
                <span>About</span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="#service">
                <span>Service</span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="#team">
                <span>Team</span>
              </a>
            </li>
          </ul>

          <div className="gallery">
            <div className="title">
              <p>Sora Gallery</p>
            </div>
            <div className="images">
              <a className="image-link" href="#star">
                <div className="image" data-label="Star">
                  <img
                    src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg"
                    alt="Star"
                  />
                </div>
              </a>
              <a className="image-link" href="#sun">
                <div className="image" data-label="Sun">
                  <img
                    src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg"
                    alt="Sun"
                  />
                </div>
              </a>
              <a className="image-link" href="#tree">
                <div className="image" data-label="Tree">
                  <img
                    src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"
                    alt="Tree"
                  />
                </div>
              </a>
              <a className="image-link" href="#sky">
                <div className="image" data-label="Sky">
                  <img
                    src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg"
                    alt="Sky"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
