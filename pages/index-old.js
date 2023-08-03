import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import Blogs from "../src/components/blog/Blogs";
import Newsletter from "../src/components/Newsletter";
import HomePageProducts from "../src/components/product/HomePageProducts";
import HomePageSingleProduct from "../src/components/product/HomePageSingleProduct";
import UpcomingProduct from "../src/components/product/UpcomingProduct";
import HomeSlider from "../src/components/slider/HomeSlider";
import Layout from "../src/layouts/Layout";
import { getBlog } from "../src/redux/action/blog";
import { getHome1 } from "../src/redux/action/home";
import { getProducts } from "../src/redux/action/product";
import { getTopSeller } from "../src/redux/action/seller";
import { getUpcomingProduct } from "../src/redux/action/upcomingProduct";
import { filterBlog } from "../src/utils/filterBlog";
import { getDiscount } from "../src/utils/utils";

const Index = ({
  getHome1,
  home1,
  upcomingProduct,
  getBlog,
  blogs,
  getTopSeller,
  topSeller,
  getUpcomingProduct,
  getProducts,
  products,
}) => {
  useEffect(() => {
    getHome1();
    getBlog();
    getTopSeller();
    getUpcomingProduct();
    getProducts();
  }, []);
  return (
    <Layout sticky={true}>
      <main>
        {/* <section className="slider-area pos-relative">
          <div className="slider-active">
            <HomeSlider sliders={home1 && home1.sliders}>
              {home1 &&
                home1.sliders.map((slide, i) => (
                  <div
                    key={i}
                    className=" single-slider slide-1-style slider-1-1 slide-height d-flex align-items-center"
                    data-background={slide.bgImage}
                  >
                    <div
                      className="shape-title wow bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2>{slide.title}</h2>
                    </div>

                    <div className="shape-icon bounce-animate">
                      <img src={slide.shapIcon} alt="" />
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content">
                            <span className="wow fadeInRight" data-delay=".2s">
                              {slide.name}
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".5s">
                              {slide.heading}
                            </h1>
                            <div className="slide-btn">
                              {slide.shopLink && (
                                <Link href="/shop">
                                  <a
                                    className="btn theme-btn wow fadeInLeft"
                                    data-delay=".7s"
                                  >
                                    shop now
                                  </a>
                                </Link>
                              )}
                              {slide.categoryLink && (
                                <Link href="/shop">
                                  <a
                                    className="btn white-btn wow fadeInLeft"
                                    data-delay=".7s"
                                  >
                                    category
                                  </a>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5">
                          {slide.images &&
                            slide.images.map((img, j) => (
                              <div
                                className={`slide-shape${
                                  j + 1
                                } wow bounceInRight`}
                                data-delay={j === 0 ? ".9s" : "1.2s"}
                                key={j}
                              >
                                <img src={img.src} alt="" />
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </HomeSlider>
          </div>
        </section>
        <section className="banner-area pt-30 pl-15 pr-15">
          <div className="container-fluid">
            <div className="row">
              {home1 &&
                home1.announcement.map((announcement, i) => (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <div className="banner mb-30">
                      <Link href="/shop">
                        <a>
                          <img src={announcement} alt="announcement" />
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section> */}
        <HomePageProducts products={products} />
  

        {/* <HomePageSingleProduct products={products} /> */}
        {/* <UpcomingProduct upcomingProduct={upcomingProduct} /> */}
        {/* {blogs && <Blogs blogs={blogs} />} */}
        {/* <Newsletter /> */}
      </main>
    </Layout>
  );
};

const mapSateToProps = (state) => ({
  home1: state.home.home1,
  // announcement: state.home.home1.announcement,
  upcomingProduct: state.upcomingProduct.home1,
  blogs: filterBlog("lifestyle", state.blog.blogs),
  topSeller: state.seller.topSeller,
  products: state.product.products,
});

export default connect(mapSateToProps, {
  getHome1,
  getBlog,
  getTopSeller,
  getUpcomingProduct,
  getProducts,
})(Index);
