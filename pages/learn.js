import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function Learn() {
  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Why Spectrum Efficiency is Good for Your Data Project
        </h1>
        <p className="mb-4">
          At Spectrum Efficiency, we're committed to helping you optimize your
          data project for success. Our expert team specializes in delivering
          top-quality solutions for a wide range of industries, from healthcare
          to finance and beyond. By partnering with us, you'll gain access to
          cutting-edge technology, personalized support, and a wealth of
          industry knowledge.
        </p>
        <p className="mb-4">
          You can find us on GitHub, Twitter, and LinkedIn. Connect with us today
          to learn how we can help take your data project to the next level.
        </p>
        <div className="flex justify-center">
          <a
            href="https://github.com/SpectrumEfficiency"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <div className="bg-gray-200 hover:bg-gray-300 rounded-lg py-4 px-6 text-2xl font-bold">
              GitHub
            </div>
          </a>
          <a
            href="https://twitter.com/RadioSpectrumEf"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <div className="bg-blue-400 hover:bg-blue-500 rounded-lg py-4 px-6 text-2xl font-bold text-white">
              Twitter
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/spectrum-efficiency/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-blue-600 hover:bg-blue-700 rounded-lg py-4 px-6 text-2xl font-bold text-white">
              LinkedIn
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
}
