import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
import About_slogan_with_CTA from '../components/about_slogan_with_CTA';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
    <Header />



    <About_slogan_with_CTA />

    <section className="container mx-auto grid grid-cols-12 pt-10 px-8 md:pt-20 gap-4 md:gap-8 md:px-16">
        <div className="md:col-span-12 col-span-12">
          <h1 className="text-center text-2xl md:text-5xl">
          Experience the ultimate tutor
          </h1>
        </div>
    </section>
    

    {/* Main Content */}
    <main className="container mx-auto flex-grow px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Welcome to Textutor</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Informational Cards */}
        <div className="space-y-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">PDF Management</h3>
            <p className="text-gray-600">
              Organize, rename, delete, and favorite your PDFs for easy access.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Workspaces</h3>
            <p className="text-gray-600">
              Collaborate with peers, share documents, and manage projects seamlessly.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">AI-Powered Assistance</h3>
            <p className="text-gray-600">
              Use ChatGPT to ask questions about your uploaded PDFs and get quick answers.
            </p>
          </div>
        </div>

        {/* Right-Side Module Images Placeholder */}
        <div className="flex items-center justify-center">
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-xl">Module Images Here</p>
          </div>
        </div>
      </div>
    </main>





    
    <div className="container my-[2.9375rem] mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-black mb-6">What is Textutor.ai?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Textutor.ai is an innovative AI-powered platform designed to enhance educational content management and accessibility. This software enables students, educators, and researchers to upload PDF documents, organize them into workspaces, and engage with the content through natural language queries.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              By leveraging the ChatGPT API, Textutor.ai allows users to ask questions about their uploaded content and receive accurate, context-based answers. This streamlines the process of information retrieval, enhancing learning efficiency and improving productivity.
            </p>
            <p className="text-lg text-gray-700">
              The platform supports the extraction of reliable, peer-reviewed sources, making it a powerful tool for academic research and study. Textutor.ai simplifies the research process and promotes deeper engagement with educational materials.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/500" // Replace with an image related to Textutor
              alt="Textutor AI platform"
              className="w-full max-w-md rounded-lg shadow-lg"
              />
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-black mb-6">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-4">Improved Organization</h3>
              <p className="text-gray-700">
                Organize your study materials and documents into customizable workspaces for easy access and better management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-4">Quick Access to Information</h3>
              <p className="text-gray-700">
                Save time by quickly retrieving answers from large documents with the power of AI-driven natural language queries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-4">Peer-Reviewed Sources</h3>
              <p className="text-gray-700">
                Gain access to reliable, peer-reviewed academic sources to support your research and studies.
              </p>
            </div>
          </div>
        </section>

        {/* Objective Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-black mb-6">Our Objective</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The primary objective of Textutor.ai is to simplify the learning and research process. Our platform offers an intuitive, centralized location for managing educational materials. By allowing users to interact with content in a conversational manner, we aim to reduce the time and effort required to find answers within large documents, enhancing productivity, comprehension, and engagement.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-black mb-6">Get Started with Textutor.ai</h2>
          <p className="text-lg text-gray-700 mb-6">
            Experience the power of AI to enhance your educational journey. Upload your documents, create workspaces, and start asking questions to gain valuable insights.
          </p>
          <a
            href="/signup"
            className="inline-block bg-blue-600 text-white text-lg py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
            Sign Up Now
          </a>
        </section>
        </div>



    <Footer />
  </div>
  );
};

export default About;
