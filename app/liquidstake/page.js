// app/liquidstake/page.js
'use client';

import { useState } from 'react';
import StakeComponent from './StakeComponent';
import UnstakeComponent from './UnstakeComponent';

export default function LiquidStakePage() {
  const [activeTab, setActiveTab] = useState('stake');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-purple-400">Liquidstake</h2>
        <div className="w-12 h-12 bg-purple-200 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/48" // Fixed placeholder image
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-8 border-b border-purple-300">
        <button
          onClick={() => setActiveTab('stake')}
          className={`pb-2 font-medium text-lg ${
            activeTab === 'stake' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-purple-600'
          }`}
        >
          Stake
        </button>
        <button
          onClick={() => setActiveTab('unstake')}
          className={`pb-2 font-medium text-lg ${
            activeTab === 'unstake' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-purple-600'
          }`}
        >
          Unstake
        </button>
      </div>

      {/* Displaying the appropriate component based on activeTab */}
      {activeTab === 'stake' ? <StakeComponent /> : <UnstakeComponent />}
    </div>
  );
}
