import { useRouter } from "next/router";
import useSWR from "swr";
function Result() {
  const router = useRouter();
  const { session_id } = router.query;
  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout_session/${session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );

  if (error) return <div>failed to load</div>;

  return (
    <div className='page-container'>
      <h1>Checkout Payment Result</h1>
      {/* <h2>Status: {data?.payment_intent?.status ?? "loading..."}</h2> */}
      <h3>CheckoutSession response:</h3>
      <pre>{data ? JSON.stringify(data, null, 2) : "loading..."} </pre>
    </div>
  );
  // return <div>{session_id}</div>;
}

export default Result;
