import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Laboratorio 11</title>
        <meta name="description" content="Lee las últimas novedades, artículos y consejos en el blog de Laboratorio 11." />
        <meta property="og:title" content="Blog | Laboratorio 11" />
        <meta property="og:description" content="Lee las últimas novedades, artículos y consejos en el blog de Laboratorio 11." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://misitio.com/blog" />
        <meta property="og:image" content="https://misitio.com/public/globe.svg" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-indigo-50">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Blog de Laboratorio 11</h1>
        <p className="text-lg text-gray-700">Próximamente artículos y novedades.</p>
      </main>
    </>
  );
}