'use client';

import Header from './components/header'
import Footer from './components/footer'
import Slogan_with_CTA from './components/slogan_with_CTA';
import Text_with_image from './components/text_with_image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
        {/* Header Section */}
        <Header />

        <Slogan_with_CTA />
        
        <h1 className="my-[2.9375rem] text-center text-5xl">
          Empowering Your Research Journey with AI
        </h1>
        <Text_with_image 
            icon = {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            }
            src = "/video.mp4"
            title = "AI-Powered Assistance"
            description = "Turn your PDFs into insights! Let our AI answer your questions instantly, making research and learning a breeze. Simply upload your PDFs, ask your questions, and receive detailed, accurate responses. Whether you're tackling complex concepts or need quick clarifications, our AI-powered assistance is designed to make your study and research more efficient."
        />
        <Text_with_image 
            icon = {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
            }
            src = "/video.mp4"
            title = "Workspaces"
            description = "Team up and thrive! Our workspace feature allows you to collaborate effortlessly with peers. Share documents, manage projects, and work together in a unified environment designed to streamline your workflow. Whether you're brainstorming ideas or coordinating tasks, our workspaces provide the perfect foundation for efficient teamwork and project management."
        />
        <Text_with_image 
            icon = {
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg> 
            }
            src = "/video.mp4"
            title = "PDF Management"
            description = "Team up and thrive! Our workspace feature allows you to collaborate effortlessly with peers. Share documents, manage projects, and work together in a unified environment designed to streamline your workflow. Whether you're brainstorming ideas or coordinating tasks, our workspaces provide the perfect foundation for efficient teamwork and project management."
        />
        <Text_with_image 
            icon = {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
            
            }
            src = "/video.mp4"
            title = "Peer-Reviewed Insights"
            description = "Get reliable answers backed by trusted sources! Access peer-reviewed articles, studies, and research materials instantly, with citations and links provided for each source. Elevate your research and learning by relying on the credibility of academic and scientific literature. Our platform helps you find the most relevant and trustworthy content to support your projects."
        />
































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
}
