import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Nav, Tab, TabContainer } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { connect } from 'react-redux';
import Layout from '../../layouts/Layout';
import PageTitle from '../../layouts/PageTitle';
import { getProducts, getSingleProduct } from '../../redux/action/product';
import {
  addToCart,
  addWishlist,
  decreaseCart,
  getCarts,
  getWishlist,
} from '../../redux/action/utilis';
import { simpleProductFilter } from '../../utils/filterProduct';
import RelatedProduct from '../slider/RelatedProduct';
import Product from './Product';

const Details = ({
  addToCart,
  decreaseCart,
  getSingleProduct,
  getCarts,
  addWishlist,
  getWishlist,
  product,
  products,
  carts,
  wishlists,
  getProducts,
  upcoming,
  upthumb,
}) => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getSingleProduct(id);
    getCarts();
    getWishlist();
    getProducts();
  }, [id]);
  const cart = product && carts && carts.find((cart) => cart.id === product.id);
  const wishlist =
    product &&
    wishlists &&
    wishlists.find((wishlist) => wishlist.id === product.id);
  const size = ['L', 'M', 'X', 'XL', 'XXL'];

  // const [addCart, setaddCart] = useState(false);
  // const [addWishlist_, setAddWishlist_] = useState(false);

  // const onClickCart = (e) => {
  //   e.preventDefault();
  //   addToCart(product);
  //   setaddCart(true);
  //   toast.success('Add item in Cart.');
  // };
  // const onClickRemoveCart = (e) => {
  //   e.preventDefault();
  //   decreaseCart(cart);
  //   setaddCart(true);
  //   toast.error('Remove item from Cart.');
  // };
  // const onClickWishlist = (e) => {
  //   e.preventDefault();
  //   addWishlist(product);
  //   setAddWishlist_(true);
  //   if (wishlist) {
  //     toast.error('Remove item in wishlist.');
  //   } else {
  //     toast.success('Add item in wishlist.');
  //   }
  // };

  const onRedirect = () => (window.location.href = product.link);

  return (
    <>
      <Head>
        <title>{product && product.nameRu}</title>
        <meta name='description' content={product && product.description} />
        <meta name='keywords' content={product && product.nameRu} />

        <meta property='og:title' content={product && product.nameRu} />
        <meta
          property='og:description'
          content={product && product.description}
        />
        <meta property='og:image' content={product && product.images[0].src} />
        <meta
          property='og:url'
          content={`https://www.the-kuka.uz/shop/${product && product.id}`}
        />
        <meta property='og:type' content='product' />
        <meta property='og:site_name' content='THE KUKA' />
        <meta property='og:locale' content='ru_RU' />
        <meta property='og:locale:alternate' content='uz_UZ' />

        <meta
          property='product:price:amount'
          content={product && product.price}
        />
        <meta property='product:price:currency' content='UZS' />
        <meta
          property='product:availability'
          content={product && product.stock ? 'in stock' : 'out of stock'}
        />
        <meta property='product:condition' content='new' />
        <meta
          property='product:retailer_item_id'
          content={product && product.id}
        />
        <meta property='product:brand' content='THE KUKA' />
        <meta
          property='product:category'
          content={product && product.category.nameRu}
        />

        <meta property='twitter:title' content={product && product.nameRu} />

        <meta
          property='twitter:description'
          content={product && product.description}
        />
        <meta
          property='twitter:image'
          content={product && product.images[0].src}
        />
        <meta
          property='twitter:url'
          content={`https://www.the-kuka.uz/shop/${product && product.id}`}
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:site' content='@the_kuka' />
        <meta property='twitter:creator' content='@the_kuka' />

        <meta property='twitter:data1' content={product && product.price} />
        <meta property='twitter:label1' content='Price' />
        <meta
          property='twitter:data2'
          content={product && product.category.nameRu}
        />
        <meta property='twitter:label2' content='Category' />

        <meta property='twitter:domain' content='the-kuka.uz' />
        <meta property='twitter:app:name:iphone' content='THE KUKA' />
        <meta property='twitter:app:name:ipad' content='THE KUKA' />
        <meta property='twitter:app:name:googleplay' content='THE KUKA' />
        <meta
          property='twitter:app:url:iphone'
          content='https://www.the-kuka.uz'
        />
      </Head>
      <Layout sticky container footerBg textCenter>
        <main>
          {/* <PageTitle active="SHOP DETAILS" pageHeading="Our Shop" /> */}
          <section className='shop-details-area pt-50 pb-100'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-6 col-lg-4'>
                  <Tab.Container defaultActiveKey='tum-0'>
                    <div className='product-container'>
                      {upthumb && (
                        <div className='shop-thumb-tab'>
                          <Nav as='ul'>
                            {product &&
                              product.images.map((img, i) => (
                                <Nav.Item as='li' key={i}>
                                  <Nav.Link
                                    as='a'
                                    href='#'
                                    onClick={(e) => e.preventDefault()}
                                    eventKey={`tum-${i}`}
                                  >
                                    <img src={img.src} alt='Tum' />
                                  </Nav.Link>
                                </Nav.Item>
                              ))}
                          </Nav>
                        </div>
                      )}

                      <div className='img-wrapper'>
                        <Tab.Content id='myTabContentpro'>
                          {product &&
                            product.images.map((img, i) => (
                              <Tab.Pane key={i} eventKey={`tum-${i}`}>
                                <div className='product-large-img'>
                                  <img src={img.src} alt='tum' />
                                </div>
                              </Tab.Pane>
                            ))}
                        </Tab.Content>

                        {!upthumb && (
                          <Nav as='ul' className='gallery-wrapper'>
                            {product &&
                              product.images.map((img, i) => (
                                <Nav.Item as='li' key={i} className='small-img'>
                                  <Nav.Link
                                    as='a'
                                    href='#'
                                    onClick={(e) => e.preventDefault()}
                                    eventKey={`tum-${i}`}
                                  >
                                    <img src={img.src} alt='Tum' />
                                  </Nav.Link>
                                </Nav.Item>
                              ))}
                          </Nav>
                        )}
                      </div>
                    </div>
                  </Tab.Container>
                </div>
                <div className='col-xl-6 col-lg-8'>
                  <div className='product-details mb-30 pl-30'>
                    {/* <div className="details-cat mb-20">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      decor,
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {product && product.brand}
                    </a>
                  </div> */}
                    <h2 className='pro-details-title mb-15 mt-4'>
                      {product && product.name}
                    </h2>
                    <div className='details-price mb-20'>
                      <span>
                        {Number(product && product.mainPrice).toLocaleString()}
                        so&apos;m
                      </span>
                      {product && product.price && (
                        <span className='old-price'>
                          {Number(product.price).toLocaleString()}so&apos;m
                        </span>
                      )}
                    
                    </div>
                   
                    <div className='product-variant'>
                      {product &&
                        product.colors &&
                        product.colors.length > 0 && (
                          <div className='product-color variant-item'>
                            <div className='variant-name'>
                              <span>Ranglar</span>
                            </div>
                            <ul className='shop-link shop-color'>
                              {product.colors.map((color) => (
                                <li key={color}>
                                  <a href='#' onClick={onRedirect}>
                                    <span className={color} />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      {upcoming && (
                        <div className='product-coming variant-item'>
                          <div className='variant-name'>
                            <span>time left</span>
                          </div>
                          <div className='event-timer details-timer'>
                            <div data-countdown='2019/04/01'>
                              <span className='cdown days'>
                                <span className='time-count'>0</span>{' '}
                                <p>Days</p>
                              </span>{' '}
                              <span className='cdown hour'>
                                <span className='time-count'>0</span>{' '}
                                <p>Hour</p>
                              </span>{' '}
                              <span className='cdown minutes'>
                                <span className='time-count'>00</span>{' '}
                                <p>Min</p>
                              </span>{' '}
                              <span className='cdown second'>
                                {' '}
                                <span>
                                  <span className='time-count'>00</span>{' '}
                                  <p>Sec</p>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {product && product.size && (
                        <div className='product-size variant-item'>
                          <div className='variant-name'>
                            <span>size</span>
                          </div>
                          <ul className='shop-link shop-size'>
                            {size &&
                              size.map((size) => (
                                <li
                                  key={size}
                                  className={
                                    size.toLowerCase() ===
                                    product.size.toLowerCase()
                                      ? 'active'
                                      : ''
                                  }
                                >
                                  <a href='#' onClick={onRedirect}>
                                    {size}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}
                      {/* <div className='product-desc variant-item'>
                        <p>{product && product.description}</p>
                      </div> */}
                  
                      <div className='product-info-list variant-item'>
                        <ul>
                          <li className='text-capitalize'>
                            <span>Brend:</span> {product && product.brand}
                          </li>
                          {/* <li>
                            <span>Product Code:</span>{' '}
                            {product &&
                              product.category[0].split('')[0] + product.id}
                          </li>
                          <li>
                            <span>Reward Points:</span> 100
                          </li> */}
                          <li>
                            <span>Stock:</span>{' '}
                            <span className='in-stock'>
                              {product && product.stock
                                ? 'Mavjud'
                                : 'Mavjud emas'}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className='product-action-details variant-item'>
                        <div className='product-details-action d-flex'>
                          <div className='product-quantity '>
                            <div className='cart-plus-minus'>
                              <p>{cart ? cart.qty : 1}</p>
                              <button
                                className='dec qtybutton'
                                onClick={onRedirect}
                              >
                                -
                              </button>
                              <button
                                className='inc qtybutton'
                                onClick={onRedirect}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            className={`${
                              wishlist ? 'active' : ''
                            } details-action-icon`}
                            type='submit'
                            onClick={onRedirect}
                          >
                            <i className='fas fa-heart' />
                          </button>
                          <button className='details-action-icon' type='submit'>
                            <i className='fas fa-hourglass' />
                          </button>
                        </div>
                        <div
                          className='details-cart mt-40'
                          onClick={onRedirect}
                        >
                          <button className='btn theme-btn'>
                            Xarid qilish
                          </button>
                        </div>
                      </div>

                    
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-50'>
                <div className='col-xl-8 col-lg-8'>
                  <div className='product-review'>
                    <TabContainer defaultActiveKey='dec'>
                      <Nav as='ul' className='review-tab'>
                        <Nav.Item as='li'>
                          <Nav.Link
                            as='a'
                            href='#'
                            onClick={onRedirect}
                            eventKey='dec'
                          >
                            Mahsulot tavsifi
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as='li'>
                          <Nav.Link onClick={onRedirect}>
                            Sharhlar (185)
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id='myTabContent2'>
                        <Tab.Pane eventKey='dec'>
                          <div className='desc-text'>
                            <p>
                              Kalta paypoqlar (pyatki) tovonida silikon bilan
                              qoplangan ayollar va erkaklar uchun.
                            </p>
                            <p>Yoz va fitnes uchun ideal.</p>
                            Tarkibida paxta, poliamid va spandeks qo&lsquo;shilgan.
                          </div>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey='review'>
                          <div className='desc-text review-text'>
                            <div className='product-commnets'>
                              <div className='product-commnets-list mb-25 pb-15'>
                                <div className='pro-comments-img'>
                                  <img
                                    src='/img/product/comments/01.png'
                                    alt='img'
                                  />
                                </div>
                                <div className='pro-commnets-text'>
                                  <h4>
                                    Roger West -<span>June 5, 2018</span>
                                  </h4>
                                  <div className='pro-rating'>
                                    <i className='far fa-star' />
                                    <i className='far fa-star' />
                                    <i className='far fa-star' />
                                    <i className='far fa-star' />
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation.
                                  </p>
                                </div>
                              </div>
                              <div className='product-commnets-list mb-25 pb-15'>
                                <div className='pro-comments-img'>
                                  <img
                                    src='/img/product/comments/02.png'
                                    alt='img'
                                  />
                                </div>
                                <div className='pro-commnets-text'>
                                  <h4>
                                    Roger West -<span>June 5, 2018</span>
                                  </h4>
                                  <div className='pro-rating'>
                                    <i className='far fa-star' />
                                    <i className='far fa-star' />
                                    <i className='far fa-star' />
                                    <i className='far fa-star' />
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className='review-box mt-50'>
                              <h4>Add a Review</h4>
                              <div className='your-rating mb-40'>
                                <span>Your Rating:</span>
                                <div className='rating-list'>
                                  <a
                                    href='#'
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <i className='far fa-star' />
                                  </a>
                                  <a
                                    href='#'
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <i className='far fa-star' />
                                  </a>
                                  <a
                                    href='#'
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <i className='far fa-star' />
                                  </a>
                                  <a
                                    href='#'
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <i className='far fa-star' />
                                  </a>
                                  <a
                                    href='#'
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <i className='far fa-star' />
                                  </a>
                                </div>
                              </div>
                              <form
                                className='review-form'
                                onSubmit={(e) => e.preventDefault()}
                              >
                                <div className='row'>
                                  <div className='col-xl-12'>
                                    <label htmlFor='message'>YOUR REVIEW</label>
                                    <textarea
                                      name='message'
                                      id='message'
                                      cols={30}
                                      rows={10}
                                      defaultValue={''}
                                    />
                                  </div>
                                  <div className='col-xl-6'>
                                    <label htmlFor='r-name'>Name</label>
                                    <input type='text' id='r-name' />
                                  </div>
                                  <div className='col-xl-6'>
                                    <label htmlFor='r-email'>Email</label>
                                    <input type='email' id='r-email' />
                                  </div>
                                  <div className='col-xl-12'>
                                    <button className='btn theme-btn'>
                                      Add your Review
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </Tab.Pane> */}
                      </Tab.Content>
                    </TabContainer>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-4'>
                  <div className='pro-details-banner'>
                    <img
                      src='https://images.uzum.uz/cj5cj4rltlh4bk4p2c4g/original.jpg'
                      alt='img'
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <RelatedProduct>
            {products &&
              simpleProductFilter(product && product.category[0], products).map(
                (product) => <Product key={product.id} product={product} />
              )}
          </RelatedProduct>
        </main>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  product: state.product.singleProduct,
  carts: state.utilis.carts,
  wishlists: state.utilis.wishlist,
});

export default connect(mapStateToProps, {
  addToCart,
  decreaseCart,
  getCarts,
  getSingleProduct,
  addWishlist,
  getWishlist,
  getProducts,
})(Details);
