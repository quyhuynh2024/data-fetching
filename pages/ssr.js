import { MY_API_URL } from "../lib/api";

// server side rendering
export default function ServerSideRendered({ data }) {
  return (
    <>
      {data.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

// getServerSideProps is similar to getStaticProps, but the difference is that getServerSideProps is run on every request instead of on build time.
export async function getServerSideProps() {
  const res = await fetch(MY_API_URL);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}
