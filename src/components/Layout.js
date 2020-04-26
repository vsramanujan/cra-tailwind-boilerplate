import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {

  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header />
      <main className="flex-grow bg-gray-100 flex">
        {children}
      </main>
      <Footer />
    </div>);
}
