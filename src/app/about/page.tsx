import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
    <Header />

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

    <Footer />
  </div>
  );
};

export default About;
