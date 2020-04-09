import Head from 'next/head'

export default () => (
  <div className="container">
    <Head>
      <title>Nikolas Huebecker | Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="w-screen font-mono text-md">
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="text-center transition duration-500 transform hover:scale-150">
          <h1 className="text-6xl">🚧 <span className="font-bold">WIP</span> 🚧</h1>
        </div>
      </div>
    </main>
  </div>
)