// app/escrow/page.js
'use client';

import { useState } from 'react';
import MyAgreements from './MyAgreements';

export default function EscrowPage() {
  const [activeTab, setActiveTab] = useState('create');
  const [agreementTitle, setAgreementTitle] = useState('');
  const [destinationChain, setDestinationChain] = useState('');
  const [amount, setAmount] = useState('');
  const [serviceProvider, setServiceProvider] = useState('');
  const [arbitrator, setArbitrator] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const escrowData = {
      agreementTitle,
      destinationChain,
      amount,
      serviceProvider,
      arbitrator,
    };
    console.log('Escrow Data:', escrowData);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-purple-400">Escrow</h2>
        <div className="w-12 h-12 bg-purple-200 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/48"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex items-center space-x-8 border-b border-purple-300">
        <button
          onClick={() => setActiveTab('create')}
          className={`pb-2 font-medium text-lg ${
            activeTab === 'create' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-purple-600'
          }`}
        >
          Create Agreement
        </button>
        <button
          onClick={() => setActiveTab('myAgreements')}
          className={`pb-2 font-medium text-lg ${
            activeTab === 'myAgreements' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-purple-600'
          }`}
        >
          My Agreement
        </button>
      </div>

      {/* Conditional Content */}
      {activeTab === 'create' ? (
        <form onSubmit={handleSubmit} className="mt-8 bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-gray-700 font-medium text-lg">Agreement Title</label>
            <input
              type="text"
              placeholder="Agreement Title"
              value={agreementTitle}
              onChange={(e) => setAgreementTitle(e.target.value)}
              className="mt-1 w-full p-4 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium text-lg">Destination Chain</label>
              <input
                type="text"
                placeholder="Signet testnet"
                value={destinationChain}
                onChange={(e) => setDestinationChain(e.target.value)}
                className="mt-1 w-full p-4 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-lg">Amount</label>
              <input
                type="number"
                placeholder="0.1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 w-full p-4 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-lg">Service Provider</label>
            <input
              type="text"
              placeholder="Address of service Provider"
              value={serviceProvider}
              onChange={(e) => setServiceProvider(e.target.value)}
              className="mt-1 w-full p-4 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-lg">Arbitrator</label>
            <input
              type="text"
              placeholder="Address of Arbitrator"
              value={arbitrator}
              onChange={(e) => setArbitrator(e.target.value)}
              className="mt-1 w-full p-4 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400"
            />
          </div>

          <button type="submit" className="w-full py-4 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 text-lg">
            Create Escrow
          </button>
        </form>
      ) : (
        <MyAgreements />
      )}
    </div>
  );
}
