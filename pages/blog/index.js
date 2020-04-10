import Head from 'next/head'
import Link from 'next/link'

import Nav from '../../components/Nav'
import Wrapper from '../../components/Wrapper'

export default () => (
  <Wrapper title="Nikolas Huebecker | Blog">
    <Nav />
    <div className="pt-6">
      <h1 className="text-3xl text-center">Blog</h1>
      <p className="mt-4"><strong>Welcome to my blog!</strong> This is my place for uploading random thoughts and reflections to the Internet! You can read more about it in <Link href="/blog/0"><a>#0</a></Link></p>
      <h2 className="text-lg mt-4 font-black">The Capitan's Log</h2>
      <div class="pt-4 pl-8">
        <div>
          <Link href="/0"><a><strong>#0</strong> Let there be Light!</a></Link>
          <ul className="flex align-center list-none text-sm -my-2">
            <li className="mx-1 spaced">Nikolas Huebecker</li>
            <li className="mx-1 spaced">09.04.20</li>
            <li className="mx-1 spaced">The Captain's Log</li>
          </ul>
        </div>
        <div className="pt-4">
          <Link href="/0"><a><strong>#0</strong> Let there be Light!</a></Link>
          <ul className="flex align-center list-none text-sm -my-2">
            <li className="mx-1 spaced">Nikolas Huebecker</li>
            <li className="mx-1 spaced">09.04.20</li>
            <li className="mx-1 spaced">The Captain's Log</li>
          </ul>
        </div>
      </div>
    </div>
  </Wrapper>
)