import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Example Page</h1>
        <p className="text-white/60 mb-8">This page is under construction.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl px-6 py-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
