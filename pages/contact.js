import Layout from '../src/layouts/Layout';
import PageTitle from '../src/layouts/PageTitle';
const Contact = () => {
  return (
    <Layout sticky container footerBg textCenter>
      <main>
        <PageTitle active='contact' pageHeading='Aloqa' />
        <section
          className='pt-120 pb-90'
          data-background='/assets/img/bg/bg-map.png'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-xl-4 col-lg-4 col-md-4'>
                <div
                  className='contact text-center mb-30 pointer'
                  onClick={() => {
                    window.open('mailto:info@the-kuka.uz', '_blank');
                  }}
                >
                  <i className='fas fa-envelope' />
                  <h3>Email</h3>
                  <p>info@the-kuka.uz</p>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4'>
                <div
                  className='contact text-center mb-30 pointer'
                  onClick={() => {
                    window.open('https://t.me/uzkuka', '_blank');
                  }}
                >
                  <i className='fab fa-telegram'></i>
                  <h3>Telegram</h3>
                  <p>@uzkuka</p>
                </div>
              </div>
              <div className='col-xl-4  col-lg-4 col-md-4 '>
                <div
                  className='contact text-center mb-30 pointer'
                  onClick={() => {
                    window.open('tel:+998971589333', '_blank');
                  }}
                >
                  <i className='fas fa-phone' />
                  <h3>Uyali aloqa</h3>
                  <p>+998 97 158 93 33</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className='contact-form-area grey-bg pt-100 pb-100'>
          <div className='container'>
            <div className='form-wrapper'>
              <div className='row align-items-center'>
                <div className='col-xl-8 col-lg-8'>
                  <div className='section-title mb-55'>
                    <p>
                      <span /> Anything On your Mind
                    </p>
                    <h1>Estimate Your Idea</h1>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-3 d-none d-xl-block '>
                  <div className='section-link mb-80 text-right'>
                    <a
                      className='btn theme-btn'
                      href='#'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fas fa-phone' /> make call
                    </a>
                  </div>
                </div>
              </div>
              <div className='contact-form'>
                <form
                  id='contact-form'
                  action='#'
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='form-box user-icon mb-30'>
                        <input
                          type='text'
                          name='name'
                          placeholder='Your Name'
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='form-box email-icon mb-30'>
                        <input
                          type='text'
                          name='email'
                          placeholder='Your Email'
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='form-box phone-icon mb-30'>
                        <input
                          type='text'
                          name='phone'
                          placeholder='Your Phone'
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='form-box subject-icon mb-30'>
                        <input
                          type='text'
                          name='subject'
                          placeholder='Your Subject'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-box message-icon mb-30'>
                        <textarea
                          name='message'
                          id='message'
                          cols={30}
                          rows={10}
                          placeholder='Your Message'
                          defaultValue={''}
                        />
                      </div>
                      <div className='contact-btn text-center'>
                        <button className='btn theme-btn' type='submit'>
                          get action
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <p className='ajax-response text-center' />
              </div>
            </div>
          </div>
        </section> */}
        {/* contact-form-area end */}
        <section className='map-area'>
          <div id='contact-map' className='contact-map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5996.381815982151!2d69.1873345935791!3d41.28294940000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6f221d2b4d%3A0x60d8e6f546dc1aba!2z0J3QvtGB0LrQuCDQsiDQotCw0YjQutC10L3RgtC1IC0gVGhlIEt1a2E!5e0!3m2!1sen!2s!4v1691239544592!5m2!1sen!2s'
              width='100%'
              height='100%'
              style={{ border: '0' }}
              loading='lazy'
            ></iframe>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
