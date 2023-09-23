import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const MobileHeader = () => {
  const [mainHeader, setMainHeader] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [multiMenu, setMultiMenu] = useState(false);

  const { t, lang } = useTranslation('common');

  const router = useRouter();

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
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </a>
        <nav className={`mean-nav mobile-header ${mainHeader ? 'block' : ''}`}>
          <ul
            onClick={(e) => {
              setMainHeader(!mainHeader);
              e.preventDefault();
            }}
          >
            <li>
              <Link href='/'>{t('products')}</Link>
            </li>
            <li>
              <Link href='/about'>{t('about')}</Link>
            </li>
            <li>
              <Link href='/contact'>{t('contact')}</Link>
            </li>
            <li>
              <Link
                href={router.asPath}
                scroll={false}
                locale={lang === 'ru' ? 'uz' : 'ru'}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    color: '#fff',
                    margin: '0',
                    cursor: 'pointer',
                    padding: '10px 5%',
                    fontSize: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.5)'
                  }}
                >
                  <Image
                    src={`/img/icon/${lang === 'ru' ? 'uzbek' : 'russian'}.png`}
                    width={20}
                    height={20}
                  />
                  {lang === 'ru' ? 'UZ' : 'RU'}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileHeader;
