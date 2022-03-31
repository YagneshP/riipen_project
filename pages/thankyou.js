import { useRouter } from "next/router";
import Thankyou from "../components/Thankyou";

const Layout = () => {
  const router = useRouter();
  const {order } = router.query;
  return (
    <div className="content">
      <Thankyou order={order} />
    </div>
  );
};

export default Layout;
