// app/components/Layout.js
'use client';

import { useState } from 'react';
import EscrowPage from '../escrow/page';

export default function Layout({ children }) {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex min-h-screen bg-purple-50">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Trustified Finance</h1>
        <nav className="space-y-4">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg w-full text-left"
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentPage('escrow')}
            className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg w-full text-left"
          >
            Escrow
          </button>
          <button className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg w-full text-left">
            Lend / Borrow
          </button>
          <button className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg w-full text-left">
            Transfer
          </button>
          <button className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg w-full text-left">
            On / Off Ramp
          </button>
          <button className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg w-full text-left">
            Liquid Stake
          </button>
          <button className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg w-full text-left">
            SOS Alert
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {currentPage === 'home' ? (
          <div>
            <h2 className="text-4xl font-bold text-purple-400">Dashboard</h2>
            <p className="mt-4 text-gray-700 text-lg">
              Welcome to Trustified Finance! Select a page from the sidebar to get started.
            </p>
          </div>
        ) : (
          <EscrowPage />
        )}
      </main>
    </div>
  );
}
