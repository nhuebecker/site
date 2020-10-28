import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import post from "../../sanity/schemas/post";
import client from "../../utils/client";

const BlogIndex = ({ logs, notes, reviews }) => {
  return (
    <Wrapper title="Nikolas Huebecker | Blog">
      <Nav />
      <div className="pt-6 text-lg">
        <h1 className="text-3xl text-center">Blog</h1>
        <p className="mt-4">
          <strong>Welcome to my blog!</strong> This is my place for uploading
          random thoughts and reflections to the Internet! You can read more
          about it in{" "}
          <Link href="/blog/log-0/">
            <a>Issue #0</a>
          </Link>
        </p>
        <h2 className="mt-4 font-black">The Capitan's Log</h2>
        <div class="mt-4 pl-8 space-y-8">
          {logs.length > 0 ? (
            logs.map(({ title, name, date, slug, ...post }) => {
              date = new Date(date);
              return (
                <div>
                  <Link href={"/blog/" + slug.current}>
                    <a>
                      {post.categories[0] == "The Capitan's Log" && (
                        <strong>#{slug.current.split("-")[1]}</strong>
                      )}{" "}
                      {title}
                    </a>
                  </Link>
                  <ul className="flex -mx-1 text-sm list-none align-center">
                    <li className="mx-1 spaced">{name}</li>
                    <li className="mx-1 spaced">
                      {date.getUTCFullYear()}.{date.getMonth()}.{date.getDay()}
                    </li>
                  </ul>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
        <h2 className="mt-4 font-black">The Notebook</h2>
        <div class="mt-4 pl-8 space-y-8">
          {notes.length > 0 ? (
            notes.map(({ title, name, date, slug, ...post }) => {
              date = new Date(date);

              return (
                <div>
                  <Link href={"/blog/" + slug.current}>
                    <a>{title}</a>
                  </Link>
                  <ul className="flex -mx-1 text-sm list-none align-center">
                    <li className="mx-1 spaced">{name}</li>
                    <li className="mx-1 spaced">
                      {date.getUTCFullYear()}.{date.getMonth()}.{date.getDay()}
                    </li>
                  </ul>
                </div>
              );
            })
          ) : (
            <div>Coming soon!</div>
          )}
        </div>
        <h2 className="mt-4 font-black">The Audit</h2>
        <div class="mt-4 pl-8 space-y-8">
          {reviews.length > 0 ? (
            reviews.map(({ title, name, date, slug, ...post }) => {
              date = new Date(date);

              return (
                <div>
                  <Link href={"/blog/" + slug.current}>
                    <a>{title}</a>
                  </Link>
                  <ul className="flex -mx-1 text-sm list-none align-center">
                    <li className="mx-1 spaced">{name}</li>
                    <li className="mx-1 spaced">
                      {date.getUTCFullYear()}.{date.getMonth()}.{date.getDay()}
                    </li>
                  </ul>
                </div>
              );
            })
          ) : (
            <div>Coming soon!</div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

BlogIndex.getInitialProps = async () => {
  const logs = await client.fetch(
    `*[_type == "post" && publishedAt < now() && categories[]->title[0] == "The Capitan's Log"]|order(publishedAt desc){
        title,
        "date": publishedAt,
        "name": author->name,
        "categories": categories[]->title,
        slug,
        body
    }`
  );

  const notes = await client.fetch(
    `*[_type == "post" && publishedAt < now() && categories[]->title[0] == "The Notebook"]|order(publishedAt desc){
        title,
        "date": publishedAt,
        "name": author->name,
        "categories": categories[]->title,
        slug,
        body
    }`
  );

  const reviews = await client.fetch(
    `*[_type == "post" && publishedAt < now() && categories[]->title[0] == "The Audit"]|order(publishedAt desc){
        title,
        "date": publishedAt,
        "name": author->name,
        "categories": categories[]->title,
        slug,
        body
    }`
  );

  return {
    logs,
    notes,
    reviews,
  };
};

export default BlogIndex;
