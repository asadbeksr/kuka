import { useEffect, useState } from 'react';
import { Nav, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { connect } from 'react-redux';
import Paggination from '../src/components/Paggination';
import Product from '../src/components/product/Product';
import ProductListView from '../src/components/product/ProductListView';
import Layout from '../src/layouts/Layout';
import { getProducts } from '../src/redux/action/product';
import { activeData, dblock } from '../src/utils/utils';
import { fatchData } from "../src/utils/fatchData";


const Products = ({ getProducts, products }) => {
  const [active, setActive] = useState(0);

  const [data, setData] = useState([]);
  let sort = 12;

  useEffect(() => {
    getProducts();
  }, []);

  const getProductsNew = async () => {
    const producstLocal = await fatchData("/static/products.json");
    setData(producstLocal);

    // fetch(
    //   'https://api-seller.uzum.uz/api/seller/shop/6903/product/getProducts?searchQuery=&filter=active&sortBy=id&order=descending&size=99&page=0',
    //   {
    //     method: 'GET',
    //     headers: {
    //       Authorization: 'Bearer 9Phekg43pDVHXIGId1t3cwxJvRA',
    //     },
    //   }
    // ).then((res) => {
    //   res.json().then((result) => {
    
        
    //     if(result.productList.length > 0){
    //       console.log(result);
    //       setData(result);
    //     }
        

    //   }).catch((err) => {
    //     console.log(err);
    //   });
    // });
  };

  useEffect(() => {
    getProductsNew();
  }, []);

  

  return (
    <Layout sticky container footerBg textCenter>
      <main>
        <section className='shop-area pt-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                {/* tab filter */}
                <TabContainer defaultActiveKey='grid'>
                  <div className='row'>
                    <div className='col-xl-5 col-lg-5 col-md-6'>
                      <div className='product-showing mb-40'>
                        {/* Active sort product */}
                        {/* <p>{activeData(active, sort, products)}</p> */}
                      </div>
                    </div>
                    <div className='col-xl-7 col-lg-7 col-md-6 mb-4'>
                      <div className='shop-tab f-right'>
                        <Nav
                          as='ul'
                          className='nav text-center'
                          id='myTab'
                          role='tablist'
                        >
                          <Nav.Item as='li'>
                            <Nav.Link
                              as='a'
                              href='#'
                              onClick={(e) => e.preventDefault()}
                              eventKey='list'
                            >
                              <i className='fas fa-list-ul' />{' '}
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item as='li'>
                            <Nav.Link
                              as='a'
                              href='#'
                              onClick={(e) => e.preventDefault()}
                              eventKey='grid'
                            >
                              <i className='fas fa-th-large' />
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <div className='pro-filter-btn mb-40 f-right'>
                        {/* <button id="filter-btn">Filter +</button> */}
                      </div>
                    </div>
                  </div>
                  {/* tab content */}
                  <TabContent>
                    <TabPane eventKey='grid'>
                      <div className='row'>
                        {data &&
                          data?.productList?.map((product, i) => (
                            <div
                              className={`col-lg-3 col-md-5 col-sm-4 ${dblock(
                                active,
                                i,
                                sort
                              )}`}
                              key={product.productId}
                            >
                              <Product product={product} />
                            </div>
                          ))}
                      </div>
                    </TabPane>
                    <TabPane eventKey='list'>
                      {products &&
                        products.map((product, i) => (
                          <div key={i} className={`${dblock(active, i, sort)}`}>
                            <ProductListView product={product} />
                          </div>
                        ))}
                    </TabPane>
                  </TabContent>
                </TabContainer>

                <Paggination
                  active={active}
                  setActive={setActive}
                  sort={sort}
                  length={data && data.totalProductsAmount}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(Products);
