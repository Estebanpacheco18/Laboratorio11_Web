'use client';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';

export default function Contact() {
  const params = useSearchParams();
  const user = params.get('user');
  const email = params.get('email');

  return (
    <>
      <Head>
        <title>Contacto | Laboratorio 11</title>
        <meta name="description" content="Ponte en contacto con nuestro equipo de Laboratorio 11. Completa el formulario y te responderemos pronto." />
        <meta property="og:title" content="Contacto | Laboratorio 11" />
        <meta property="og:description" content="Ponte en contacto con nuestro equipo de Laboratorio 11. Completa el formulario y te responderemos pronto." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://misitio.com/contact" />
        <meta property="og:image" content="https://misitio.com/public/globe.svg" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Página de Contacto</h1>
        {user && email ? (
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-lg text-gray-700 mb-2">Contacto para: <span className="font-semibold">{user}</span></p>
            <p className="text-gray-500">{email}</p>
          </div>
        ) : (
          <p className="text-lg text-gray-700">Información de contacto.</p>
        )}
      </main>
    </>
  );
}