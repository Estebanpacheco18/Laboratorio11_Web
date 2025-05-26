import styles from './UserCard.module.css';

export default function UserCard({ name, email, image }) {
  return (
    <div className={`${styles.card} bg-white rounded-xl shadow-md p-4`}>
      <img src={image} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl font-semibold text-center mt-4">{name}</h2>
      <p className="text-gray-500 text-center">{email}</p>
    </div>
  );
}