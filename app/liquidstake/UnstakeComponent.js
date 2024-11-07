// app/liquidstake/UnstakeComponent.js
'use client';

import { useState } from 'react';

export default function UnstakeComponent() {
  const [amount, setAmount] = useState('');
  const [selectedChain, setSelectedChain] = useState('Mumbai Testnet');

  const handleMaxClick = () => {
    setAmount('0.0'); // Example max amount, replace with actual logic if needed
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md space-y-6 w-full max-w-lg">
      <div className="flex justify-between">
        <div className="text-gray-600">
          <p>Available balance</p>
          <p className="text-xl font-bold">0 BTC</p>
        </div>
        <div className="text-gray-600">
          <p>Staked Amount</p>
          <p className="text-xl font-bold">0 stBTC</p>
        </div>
      </div>

      <div>
        <label className="block text-gray-600 font-medium">Select Chain</label>
        <input
          type="text"
          placeholder="Mumbai Testnet"
          value={selectedChain}
          onChange={(e) => setSelectedChain(e.target.value)}
          className="mt-1 w-full p-4 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:border-purple-600"
        />
      </div>

      <div className="relative">
        <label className="block text-gray-600 font-medium">Amount</label>
        <div className="flex">
          <input
            type="number"
            placeholder="0.0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-l-md text-gray-800 placeholder-gray-400 focus:border-purple-600"
          />
          <button
            onClick={handleMaxClick}
            className="px-4 bg-purple-100 text-purple-600 font-semibold rounded-r-md border border-gray-300 hover:bg-purple-200"
          >
            Max
          </button>
        </div>
      </div>

      <button className="w-full py-3 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700">
        UNSTAKE NOW
      </button>

      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <p>You will receive</p>
          <p>0.0 BTC</p>
        </div>
        <div className="flex justify-between text-gray-600">
          <p>Exchange rate</p>
          <p>1 BTC = 1 stBTC</p>
        </div>
      </div>
    </div>
  );
}
