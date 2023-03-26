import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <Layout>
       <Navbar />
      <section className="py-8">
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-8">
            We were founded in 2017 with the mission of providing high-quality data analytics services to businesses of all sizes. Our team of experts has a deep understanding of the latest data analysis techniques, tools, and technologies, and we work closely with our clients to help them make data-driven decisions that drive business growth.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our People</h2>
          <p>Our team consists of highly skilled professionals in various roles:</p>

          <div class="grid-container">
            <div>
              <h3 class="headline headline-text">Data-Driven Pragmatism</h3>
              <p class="headline  headline-text">We apply data-driven approaches to solve complex business and technology problems. We leverage our expertise in data analysis and visualization to identify pragmatic solutions that make the most sense for our clients.</p>
            </div>
                
            <div>
                      <h3 class="headline headline-text">Financially Sustainable</h3>
                      <p class="headline  headline-text">We prioritize financial sustainability by leveraging our data management expertise. We focus on optimizing customer acquisition, carefully managing costs, and minimizing high-risk capital investments.</p>
                    </div>
            <div>
              <h3 class="headline  headline-text">Customer Data Success</h3>
              <p class="headline   headline-text">We value the productivity and success of our customers by leveraging the power of customer data. We respect and embrace diverse perspectives, keeping a positive intent, and always acknowledging and celebrating our customers' achievements.</p>                      
              </div>
              <div>
                <h3 class="headline  headline-text">Business Neutrality</h3>
                <p class="headline  headline-text">We operate in sectors with conflicting relationships, so we prioritize data neutrality. Our data-driven approach and lack of technical and business relationships allow us to function as a trusted intermediary for our clients, helping to navigate these challenging situations.</p>
                      </div>
                    </div>
                  
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside mb-8">
            <li>We are committed to providing the highest quality data analytics services to our clients.</li>
            <li>We value transparency, honesty, and integrity in all of our interactions with clients, partners, and team members.</li>
            <li>We are passionate about using data to drive business growth and innovation.</li>
            <li>We believe in fostering a culture of continuous learning and growth, both for ourselves and our clients.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Our Partners &amp; Technologies</h2>
          <p className="mb-8">
            We partner with some of the world's leading technology companies to deliver cutting-edge data analytics solutions to our clients. Our team has expertise in a wide range of data analysis tools and technologies, including Python, R, SQL, Tableau, and more.
          </p>
        </div>
      </section>
    </Layout>
      );
}
