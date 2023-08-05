import Link from 'next/link';
import { Fragment, useState } from 'react';

const MobileHeader = () => {
  const [mainHeader, setMainHeader] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [multiMenu, setMultiMenu] = useState(false);
  return (
    <div className='mobile-menu mean-container'>
      <div className='mean-bar'>
        <a
          href='#nav'
          className={`meanmenu-reveal ${
            mainHeader
              ? 'd-flex align-items-center justify-content-center fs-18'
              : ''
          }`}
          onClick={(e) => {
            setMainHeader(!mainHeader);
            e.preventDefault();
          }}
        >
          {mainHeader ? (
            'X'
          ) : (
            <Fragment>
              <span />
              <span />
              <span />
            </Fragment>
          )}
        </a>
        <nav className={`mean-nav mobile-header ${mainHeader ? 'block' : ''}`}>
          <ul    onClick={(e) => {
            setMainHeader(!mainHeader);
            e.preventDefault();
          }}>
            <li>
              <Link href='/'>mahsulotlar</Link>
            </li>
            <li>
              <Link href='/about'>Biz Haqimizda</Link>
            </li>
            <li>
              <Link href='/contact'>Aloqa</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileHeader;
