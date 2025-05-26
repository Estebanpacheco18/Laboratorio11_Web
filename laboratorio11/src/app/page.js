import UserCard from '../../components/Usercards';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <UserCard
        name="Ana López"
        email="ana.lopez@ejemplo.com"
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </main>
  );
}