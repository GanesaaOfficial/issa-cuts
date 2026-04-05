import { Scissors } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 border border-gold/20 rounded-full" />
          <div className="absolute inset-0 border border-transparent border-t-gold rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Scissors size={22} className="text-gold" />
          </div>
        </div>
        <p className="text-sm font-medium text-white tracking-widest uppercase">Loading</p>
        <p className="text-xs text-gray-600 mt-1 tracking-wider">Issa Cuts</p>
      </div>
    </div>
  );
}
