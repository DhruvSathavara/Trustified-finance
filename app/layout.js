

// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Trustified Finance',
  description: 'A finance application with escrow and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-purple-50">
          {/* Sidebar */}
          <aside className="w-64 bg-purple-900 text-white p-6">
            <h1 className="text-2xl font-bold mb-8">Trustified Finance</h1>
            <nav className="space-y-4">
              <Link href="/dashboard" className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg">
                Dashboard
              </Link>
              <Link href="/escrow" className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg">
                Escrow
              </Link>
              <Link href="/liquidstake" className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg">
                Liquid Stake
              </Link>
              {/* Other sidebar links */}
              <Link href="#" className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg">
                Lend / Borrow
              </Link>
              <Link href="#" className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg">
                Transfer
              </Link>
              <Link href="#" className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg">
                On / Off Ramp
              </Link>
              <Link href="#" className="flex items-center gap-4 p-2 hover:bg-purple-800 rounded text-lg">
                SOS Alert
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
