import Slider from 'react-slick';
const RelatedProduct = ({ children }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className='product-area pb-100'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='area-title text-center mb-25'>
              <h2>Oʻxshash mahsulotlar</h2>
          
            </div>
          </div>
        </div>

        <div className='product-slider-2 owl-carousel'>
          <Slider {...settings}>{children}</Slider>
        </div>
        <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  gap: '24px',
                  color: '#E95F5D',
                }}
              >
                <i className='fas fa-arrow-left' />
                <i className='fas fa-arrow-right' />
              </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
