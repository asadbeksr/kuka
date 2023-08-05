import Link from 'next/link';
const DasktopHeader = ({ whiteMenu }) => {
  return (
    <div className={`main-menu text-center ${whiteMenu ? 'menu-white' : ''}`}>
      <nav id='mobile-menu'>
        <ul>
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
  );
};

export default DasktopHeader;
