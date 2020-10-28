import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";

import client from "../../utils/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";

const Post = (props) => {
  const router = useRouter();
  const {
    title = "Missing title",
    name = "Missing name",
    date,
    categories = [],
    body = [],
    slug = "",
  } = props;

  const postDate = new Date(date);

  useEffect(() => {
    if (!props.title) {
      router.push("/blog");
    }
  }, []);

  return (
    <Wrapper title="Let there be Light! | Nikolas Huebecker">
      <Nav />
      <article className="py-6">
        <h1 className="text-3xl text-center">
          {categories[0] == "The Capitan's Log" && (
            <strong>#{slug.current.split("-")[1]} </strong>
          )}
          {title}
        </h1>
        <ul className="flex justify-center text-sm font-light list-none align-center">
          {name && <li className="mx-1 spaced">{name}</li>}
          {date && (
            <li className="mx-1 spaced">
              {postDate.getUTCFullYear()}.{postDate.getMonth()}.
              {postDate.getDay()}
            </li>
          )}
          {categories[0] && <li className="mx-1 spaced">{categories[0]}</li>}
        </ul>
        <BlockContent
          className="mt-8 prose lg:prose-xl"
          blocks={body}
          {...client.config()}
        />
      </article>
    </Wrapper>
  );
};

const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "date": publishedAt,
    "name": author->name,
    "categories": categories[]->title,
    slug,
    body
}`;

Post.getInitialProps = async ({ query: { slug = "" } }) => {
  return await client.fetch(query, { slug });
};

export default Post;
