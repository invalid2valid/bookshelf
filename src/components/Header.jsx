import { Link } from 'react-router-dom'

function Header({ totalBooks }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <div className="header__logo-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6C4 4.89543 4.89543 4 6 4H12V20H6C4.89543 20 4 19.1046 4 18V6Z"/>
                <path d="M12 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H12V4Z" opacity="0.6"/>
              </svg>
            </div>
            <span className="header__title">বুকশেলফ</span>
          </Link>
          <span className="header__count">{totalBooks}টি বই</span>
        </div>
      </div>
    </header>
  )
}

export default Header
