import Link from 'next/link'

export default () => (
  <div className="mt-12">
    <ul className="flex justify-center align-center">
      <li className="mx-1 list-none nav">
        <Link href="/">
            <a>home</a>
        </Link>
      </li>
      <li className="mx-1 list-none nav">
        <a href="https://github.com/nhuebecker">github</a>
      </li>
      <li className="mx-1 list-none nav">
        <a href="https://twitter.com/nhuebecker">twitter</a>
      </li>
      <li className="mx-1 list-none nav">
        <Link href="/blog">
          <a>blog</a>
        </Link>
      </li>
    </ul>
  </div>
)
