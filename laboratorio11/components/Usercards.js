import styles from './UserCard.module.css';
import { EnvelopeIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function UserCard({ name, email, image }) {
  return (
    <div className={`${styles.card} bg-white rounded-xl shadow-md p-4 flex flex-col items-center`}>
      <div className="relative">
        <img src={image} alt="Profile" className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-200 shadow-lg" />
        <UserCircleIcon className="w-8 h-8 text-indigo-400 absolute -bottom-2 -right-2 bg-white rounded-full shadow" />
      </div>
      <h2 className="text-xl font-semibold text-center mt-4 text-indigo-700">{name}</h2>
      <p className="text-gray-500 text-center flex items-center gap-2">
        <EnvelopeIcon className="w-5 h-5 text-indigo-400" />
        {email}
      </p>
    </div>
  );
}