import Link from "next/link";
import { useRouter } from "next/router";

function Post({ id }) {
  const router = useRouter();
  return (
    <>
      <h1>Welcome to post {id}</h1>
      <ul>
        <li>
          <Link href="/posts/1">
            <a>Post 1</a>
          </Link>
          <li>
            <Link href="/posts/2">
              <a>Post 2</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/3">
              <a>Post 3</a>
            </Link>
          </li>
        </li>
      </ul>
      <div>
        <h3
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push(`/posts/${id}`, `/posts/${id}`, { locale: "fr" });
          }}
        >
          Check out French
        </h3>
        <h3
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push(`/posts/${id}`, `/posts/${id}`, { locale: "en-US" });
          }}
        >
          Check out English
        </h3>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  return { props: { id: params.id } };
}

export default Post;
