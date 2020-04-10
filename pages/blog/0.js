import Head from 'next/head'
import Link from 'next/link'

import Nav from '../../components/Nav'
import Wrapper from '../../components/Wrapper'

export default () => (
  <Wrapper title="Let there be Light! | Nikolas Huebecker">
    <Nav />
    <div className="py-6">
      <h1 className="text-3xl text-center"><strong>#0</strong> Let there be Light!</h1>
      <ul className="flex justify-center align-center list-none text-sm font-light">
        <li className="mx-1 spaced">Nikolas Huebecker</li>
        <li className="mx-1 spaced">09.04.20</li>
        <li className="mx-1 spaced">The Captain's Log</li>
      </ul>
      <p className="mt-4">Hello World! This is my first of whatever this is. I decided to finally do the thing I have dreaded doing for the past 2 years, and just start putting content out onto the internet! This "Blog" will become a collection of all the the weird and wacky things inside my head!</p>
      <p className="mt-4">It will be seperated into a few sections:</p>
      <ol className="pl-12 list-decimal">
        <li>The Captain's Log</li>
        <li>The Notebook</li>
      </ol>
      <p className="mt-4"><strong>The Captain's Log</strong> is a collection of numericaly ordered peices, this is technically #0! I plan to post at least once every week or so (maybe more) about life updates and things I have been up to!</p>
      <p className="mt-4"><strong>The Notebook</strong> is all of my crazy idea's and random thoughts! If you every need a spark of <span className="line-through">insanity</span> creativity this might be a good place to look!</p>
    </div>
  </Wrapper>
)