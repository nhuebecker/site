import Head from 'next/head'

export default () => (
  <div className="container">
    <Head>
      <title>Nikolas Huebecker</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="w-screen font-mono text-md">
      <div className="h-6 max-w-xl px-3 mx-auto">
        <div className="mt-12">
          <ul className="flex justify-center align-center">
            <li className="mx-1 list-none nav"><a href="/shh"><span className="redacted">MidJourney</span></a></li>
            <li className="mx-1 list-none nav"><a href="https://github.com/nhuebecker">github</a></li>
            <li className="mx-1 list-none nav"><a href="https://twitter.com/nhuebecker">twitter</a></li>
            <li className="mx-1 list-none nav"><a href="/blog">blog</a></li>
          </ul>
        </div>
        <div className="pt-8 leading-9">
          <p><strong>Nikolas Huebecker</strong> is a Knowledge Sorcerer at <a href="/shh"><span className="redacted">*********</span></a>, a "Stealth Startup" building a s<span className="redacted">***** ** ****</span> to help both individuals and organizations <span className="redacted">***** *****</span>r.</p>
          <p className="my-5">In middle school he helped start <a href="https://www.producthunt.com/posts/ease-2">EaseSMS</a>, a SMS based hybrid assistant. During his freshman year, he joined <a href="https://web.archive.org/web/20180821062406/https://stersvoice.com/#WhatWeDo">TeenMade (Later StersVoice)</a>, a Gen Z focused Digital Agency, as the COO.</p>
          <p className="my-5">Post-StersVoice, he interned at <a href="https://shrug.vc">Shrug Capital</a> where he helped a number of startups, like <a href="https://panda.af">Panda</a> shape their Gen Z focused products.</p>
        </div>
        <div className="mt-8 mb-12 text-center">
          <a href="mailto:x@nikolas.xyz">x@nikolas.xyz</a>
        </div>
      </div>
    </main>
  </div>
)
