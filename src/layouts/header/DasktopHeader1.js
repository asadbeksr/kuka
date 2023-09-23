import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const DasktopHeader = ({ whiteMenu }) => {
  const { t, lang } = useTranslation('common');

  const router = useRouter();

  return (
    <div className={`main-menu text-center ${whiteMenu ? 'menu-white' : ''}`}>
      <nav id='mobile-menu'>
        <ul>
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
              <a
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  // cursor: 'pointer',
                  // color: '#10111e',
                  // fontSize: '14px',
                  // lineHeight: '1',
                  // fontWeight: '500',
                  margin: '0 18px'
                  
    //               color: #10111e;
    // font-size: 14px;
    // line-height: 1;
    // font-weight: 500;
    // padding: 60px 0;
    // display: inline-block;
    // text-transform: uppercase;
                }}
              >
                <Image
                  src={`/img/icon/${lang === 'ru' ? 'uzbek' : 'russian'}.png`}
                  width={12}
                  height={12}
                />

                {lang === 'ru' ? 'UZ' : 'RU'}
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DasktopHeader;
