import UserCard from '../../components/Usercards';
import Button from '../../components/Button';
import CardContainer from '../../components/CardContainer';
import Link from 'next/link';

const users = [
  {
    name: "Ana López",
    email: "ana.lopez@ejemplo.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Pedro Martínez",
    email: "pedro.martinez@ejemplo.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Luciana Aguilar",
    email: "luciana.aguilar@ejemplo.com",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Nestor Gómez",
    email: "nestor.gomez@ejemplo.com",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Rosa Fernández",
    email: "rosa.fernandez@ejemplo.com",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Pablo Torres",
    email: "pablo.torres@ejemplo.com",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-indigo-100 p-10 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-700 drop-shadow-lg">Equipo Destacado</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {users.map((user, idx) => (
          <CardContainer key={idx}>
            <UserCard {...user} />
            <div className="flex justify-center mt-4">
              <Link href={{
                pathname: '/contact',
                query: { user: user.name, email: user.email }
              }}>
                <Button>Contactar</Button>
              </Link>
            </div>
          </CardContainer>
        ))}
      </div>
    </main>
  );
}