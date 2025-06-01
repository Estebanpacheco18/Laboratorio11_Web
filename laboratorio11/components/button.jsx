import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Button({ children, ...props }) {
  return (
    <button
      className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-purple-600 hover:to-indigo-500 transition-all duration-200"
      {...props}
    >
      {children}
      <ArrowRightIcon className="w-5 h-5" />
    </button>
  );
}