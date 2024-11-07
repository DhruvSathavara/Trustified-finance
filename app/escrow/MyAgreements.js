// MyAgreements.js
export default function MyAgreements() {
    return (
      <div className="mt-8 bg-purple-50 p-8 rounded-lg shadow-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-purple-300">
              <th className="py-2 text-gray-700 font-medium">Id</th>
              <th className="py-2 text-gray-700 font-medium">Title</th>
              <th className="py-2 text-gray-700 font-medium">Address</th>
              <th className="py-2 text-gray-700 font-medium">Amount</th>
              <th className="py-2 text-gray-700 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr className="border-b border-purple-300">
              <td className="py-2 text-gray-600">1</td>
              <td className="py-2 text-gray-600">Sample Agreement</td>
              <td className="py-2 text-gray-600">0x123...456</td>
              <td className="py-2 text-gray-600">0.1</td>
              <td className="py-2 text-gray-600">Pending</td>
            </tr>
            {/* More rows can be added here */}
          </tbody>
        </table>
      </div>
    );
  }
  