import Head from 'next/head'
import Link from 'next/link'

export default ({title, children}) => (
  <div>
    <Head>
      <title>{ title }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="font-mono text-md">
      <div className="max-w-xl px-3 mx-auto">
        {children}
      </div>
    </main>
  </div>
)