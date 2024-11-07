// app/dashboard/page.js
export default function DashboardPage() {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold text-purple-400">Dashboard</h2>
          <div className="w-12 h-12 bg-purple-200 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/48"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        </div>
  
        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold text-purple-600">Escrow</h3>
            <p className="mt-2 text-3xl font-bold text-gray-500">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold text-purple-600">Lend / Borrow</h3>
            <p className="mt-2 text-3xl font-bold text-gray-500">0 / 0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold text-red-500">SOS Alert</h3>
            <p className="mt-2 text-3xl font-bold text-red-500">Active</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold text-purple-600">Total Balance</h3>
            <p className="mt-2 text-3xl font-bold text-gray-500">0.0000 ETH</p>
          </div>
        </div>
  
        {/* Escrow Agreements Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">Escrow Agreements</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-purple-200">
                <th className="py-2 text-gray-600 font-medium">#</th>
                <th className="py-2 text-gray-600 font-medium">Title</th>
                <th className="py-2 text-gray-600 font-medium">Client</th>
                <th className="py-2 text-gray-600 font-medium">Freelancer</th>
                <th className="py-2 text-gray-600 font-medium">Amount</th>
                <th className="py-2 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr className="border-b border-purple-200">
                <td className="py-2 text-gray-600">1</td>
                <td className="py-2 text-gray-600">Sample Agreement</td>
                <td className="py-2 text-gray-600">Client Name</td>
                <td className="py-2 text-gray-600">Freelancer Name</td>
                <td className="py-2 text-gray-600">0.5 ETH</td>
                <td className="py-2 text-gray-600">Pending</td>
              </tr>
              {/* Additional rows can go here */}
            </tbody>
          </table>
        </div>
  
        {/* Bottom Row with Market Info and Converter */}
        <div className="grid grid-cols-2 gap-6">
          {/* Market Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-purple-600">Market Info</h3>
            <p className="mt-4 text-gray-600">Market data and charts can go here.</p>
          </div>
  
          {/* Crypto to Currency Converter */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-purple-600">Crypto to Currency Converter</h3>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-gray-600 font-medium">Amount</label>
                <input
                  type="number"
                  placeholder="1"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Cryptocurrency</label>
                <select className="mt-1 w-full p-3 border border-gray-300 rounded-md text-gray-800">
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>USDT</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700"
              >
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  