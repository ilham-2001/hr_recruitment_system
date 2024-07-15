import Navigation from '../../components/Navigation';

const Home = () => {

  return (
    <div>
      <Navigation />
      <main>
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Simplify Your Recruitment Process</h1>
            <p className="text-gray-600 mt-4">Our HR recruiter system helps you find the best talent effortlessly.</p>
            <a href="#contact" className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Get Started</a>
          </div>
        </section>
        <section id="features" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Features</h2>
            <div className="flex flex-wrap mt-8">
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-2xl font-semibold text-gray-700">Automated Resume Screening</h3>
                  <p className="text-gray-600 mt-4">Quickly identify the best candidates with our automated screening tool.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-2xl font-semibold text-gray-700">Interview Scheduling</h3>
                  <p className="text-gray-600 mt-4">Easily schedule interviews with candidates using our integrated calendar.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-2xl font-semibold text-gray-700">Analytics & Reporting</h3>
                  <p className="text-gray-600 mt-4">Gain insights into your recruitment process with our powerful analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <p className="text-gray-600 mt-4">We are dedicated to helping companies streamline their recruitment process and find the best talent.</p>
          </div>
        </section>
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mt-4">Reach out to us for any queries or support.</p>
            <form className="mt-8">
              <div className="flex flex-wrap -mx-4 mb-4">
                <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white rounded-lg shadow p-4 border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white rounded-lg shadow p-4 border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full bg-white rounded-lg shadow p-4 border border-gray-300 focus:outline-none focus:border-blue-500"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-white py-6">
        <div className="container mx-auto px-6 text-center text-gray-600">
          &copy; 2024 HR Recruiter System. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Home;