import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-green-950 text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8 bg-black/30 rounded-xl border border-green-500/20">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-400">
          Page Not Found
        </h1>
        <p className="text-gray-300 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-green-500 text-black rounded-md inline-flex items-center gap-2 hover:bg-green-400 transition-colors font-medium"
        >
          Return Home <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  );
} 