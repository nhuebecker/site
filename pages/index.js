import Head from "next/head";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";

export default () => (
  <Wrapper title="Nikolas Huebecker | Blog">
    <Nav />
    <div className="pt-8">
      <p className="mb-4">
        <strong>Nikolas Huebecker</strong> is working on{" "}
        <a href="/shh">
          <span className="">[REDACTED]</span>
        </a>
        , building a s<span className="redacted">***** ** ****</span> to help
        both individuals and organizations{" "}
        <span className="redacted">***** *****</span>r.
      </p>
      <p className="my-4">
        For the past 4 years, Nikolas has worked with{" "}
        <a href="https://codeday.org">SRND</a> the non-profit behind{" "}
        <a href="https://codeday.org">CodeDay</a>, a worldwide event where
        programmers, artists, musicians and everyone else can get together and
        build apps & games for 24 hours
      </p>
      <p className="my-4">
        In middle school he helped start{" "}
        <a href="https://www.producthunt.com/posts/ease-2">EaseSMS</a>, a SMS
        based hybrid assistant. During his freshman year, he joined{" "}
        <a href="https://web.archive.org/web/20180821062406/https://stersvoice.com/#WhatWeDo">
          TeenMade (Later StersVoice)
        </a>
        , a Gen Z focused Digital Agency, as the COO.
      </p>
      <p className="my-4">
        Post-StersVoice, he interned at{" "}
        <a href="https://shrug.vc">Shrug Capital</a> where he helped a number of
        startups, like <a href="https://panda.af">Panda</a> shape their Gen Z
        focused products.
      </p>
    </div>
    <div className="mt-8 mb-12 text-center">
      <ul className="flex justify-center align-center">
        <li className="mx-1 list-none nav">
          <a href="mailto:x@nikolas.xyz">x@nikolas.xyz</a>
        </li>
        <li className="mx-1 list-none nav">
          <a href="sms:6784916062">678.491.6062</a>
        </li>
      </ul>
    </div>
  </Wrapper>
);
