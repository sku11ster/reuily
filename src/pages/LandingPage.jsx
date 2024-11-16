import { useState } from 'react';
import {RotatingText,Navbar,SignupModal, PricingSection, Footer} from '../components';
import { integration, realtime, review, star } from '../assets';

const LandingPage = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const features = [
    { title: "Smart Review Collection", description: "Effortlessly gather and manage reviews from your customers.",icon:review },
    { title: "Improve 5-Star Ratings", description: "Elevate your ratings on Google Maps and attract more customers.",icon:star },    
    { title: "Real-Time Analytics", description: "Gain insights on customer feedback instantly.",icon:realtime },
    { title: "Effortless Integrations", description: "Easily collect feedback through social posts, your website, reception banners, QR codes, and more to streamline customer engagement.",icon:integration }  ];

  const faqs = [
    { question: "What is Reuily?", answer: "Reuily is a smart SaaS platform for managing and boosting customer reviews." },
    { question: "When will Reuily be available?", answer: "We are launching soon! Sign up for Early Access to be the first to know." },
    { question: "How does Reuily help my business?", answer: "Reuily streamlines feedback collection with smart review forms that gather customer input and automatically direct positive ratings to platforms like Google and Yelp, helping you enhance your online presence effortlessly." }
  ];

  return (
    <>


      <div className="bg-gradient-to-b from-slate-100 to-gray-50 min-h-screen ">
        {/* bg-gradient */}
        {/* <div className='z-[0] right-0 top-0 bg-lime-300 p-24 h-[18rem] w-full blur-[24rem] absolute'></div> */}
        {/* Navbar */}
        <div className='absolute w-full flex flex-row items-center justify-center mt-2'>
          <Navbar onOpenModal={openModal} />
        </div>
        {/* Hero Section */}
        <section className="min-h-screen text-center py-20 px-4 text-white pt-[8rem] flex flex-col items-center">
          <RotatingText/>
          <div className='flex flex-row gap-4 mt-4'>
            <button onClick={openModal} className="bg-lime-400 font-semibold py-2 px-6 rounded-full hover:bg-lime-500 transition mt-2">
              Join Waitlist
            </button>
            <a href="#features" className="border-2 border-gray-950 text-gray-950 font-semibold py-2 px-6 rounded-full hover:border-lime-400 hover:text-lime-400 transition mt-2">
              Learn More
            </a>
          </div>
          {/* Explainer Video */}
          <div className="flex justify-center mt-8 w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hAP2QF--2Dg?autoplay=1&controls=0&loop=1&playlist=hAP2QF--2Dg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>



        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <h2 className="text-6xl max-lg:text-4xl font-bold text-center mb-8 text-lime-800">Features</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" bg-lime-800 rounded-3xl shadow-lg p-6 w-80 hover:shadow-xl transition"
              >
                <img className='m-2' src={feature.icon} alt="" width={48} />
                <h3 className="text-2xl font-bold text-lime-400 mb-2">{feature.title}</h3>
                <p className="text-lime-500 mb-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>



        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4 bg-gray-50">
          <h2 className="text-6xl max-lg:text-4xl font-bold text-center mb-8 text-lime-800">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-lime-900 mb-2">{faq.question}</h3>
                <p className="text-lime-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <PricingSection/>

        {/* Footer */}
        <Footer/>






      </div>


      {/* Render Modal */}
      {isModalOpen && <SignupModal onClose={closeModal} />}
    </>
  );
};

export default LandingPage;

