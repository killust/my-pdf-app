'use client';

import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pdfs, setPdfs] = useState<any[]>([]); // Dummy data for PDFs
  const [workspaces, setWorkspaces] = useState<any[]>([]); // Dummy data for Workspaces
  const [userRole, setUserRole] = useState('user'); // Default user role

  // Dummy Data
  useEffect(() => {
    // Dummy data for PDFs and Workspaces
    setPdfs([
      { id: 1, name: 'Document 1.pdf', size: '200MB', favorite: false },
      { id: 2, name: 'Research Paper.pdf', size: '350MB', favorite: true },
      { id: 3, name: 'Textbook.pdf', size: '500MB', favorite: false },
    ]);
    setWorkspaces([
      { id: 1, name: 'Workspace 1', description: 'Math Research' },
      { id: 2, name: 'Workspace 2', description: 'Physics Notes' },
    ]);
  }, []);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Dummy search logic
  };

  const handleRenamePdf = (pdfId: number, newName: string) => {
    console.log(`Renaming PDF ${pdfId} to ${newName}`);
  };

  const handleDeletePdf = (pdfId: number) => {
    console.log(`Deleting PDF ${pdfId}`);
  };

  const handleFavoritePdf = (pdfId: number) => {
    console.log(`Favoriting PDF ${pdfId}`);
  };

  const handleUploadPdf = (file: File) => {
    console.log('Uploading PDF:', file);
  };

  const handleAskQuestion = (query: string) => {
    console.log('Asking question:', query);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6">
        {/* Dashboard Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black">User Dashboard</h1>
          <div className="space-x-6">
        {/*    <Link to="/profile" className="text-blue-600 hover:text-blue-800">Profile</Link>
            <Link to="/settings" className="text-blue-600 hover:text-blue-800">Settings</Link> */}
          </div>
        </header>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg"
            placeholder="Search PDFs or Workspaces..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
          />
        </div>

        {/* PDF Management Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-6">My PDFs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pdfs.map((pdf) => (
              <div key={pdf.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-black">{pdf.name}</h3>
                <p className="text-sm text-gray-600">{pdf.size}</p>
                <div className="space-x-4 mt-4">
                  <button
                    onClick={() => handleRenamePdf(pdf.id, 'New Name')}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Rename
                  </button>
                  <button
                    onClick={() => handleDeletePdf(pdf.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleFavoritePdf(pdf.id)}
                    className={`text-${pdf.favorite ? 'yellow' : 'gray'}-600 hover:text-yellow-800`}
                  >
                    {pdf.favorite ? 'Unfavorite' : 'Favorite'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PDF Upload Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-6">Upload PDFs</h2>
          <input
            type="file"
            className="border border-gray-300 p-4 rounded-lg"
            accept=".pdf"
            onChange={(e) => e.target.files && handleUploadPdf(e.target.files[0])}
          />
        </section>

        {/* Workspaces Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-6">Workspaces</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workspaces.map((workspace) => (
              <div key={workspace.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-black">{workspace.name}</h3>
                <p className="text-sm text-gray-600">{workspace.description}</p>
                <button
                  onClick={() => console.log(`Navigating to ${workspace.name}`)}
                  className="text-blue-600 hover:text-blue-800 mt-4"
                >
                  Go to Workspace
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ChatGPT Question Submission */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-6">Ask a Question</h2>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg"
            placeholder="Ask a question about your PDFs..."
            onKeyPress={(e) => e.key === 'Enter' && handleAskQuestion(e.currentTarget.value)}
          />
        </section>

        {/* Admin Interface - Conditional Rendering */}
        {userRole === 'admin' && (
          <section className="bg-white p-6 rounded-lg shadow-md mt-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Admin Dashboard</h2>
            <div className="space-y-4">
              <button className="text-blue-600 hover:text-blue-800">Manage Users</button>
              <button className="text-green-600 hover:text-green-800">View Activity Logs</button>
              <button className="text-purple-600 hover:text-purple-800">View Analytics</button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
