import { useRouter } from "next/router";

export default function Order() {
  const router = useRouter();
  const {
    query: { name },
  } = router;
	// const name = router.query;
  return <div>About us: {name}</div>
}