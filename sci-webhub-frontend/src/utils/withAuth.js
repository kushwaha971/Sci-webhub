import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const token = Cookies.get("token");

    useEffect(() => {
      if (!token) {
        router.replace("/login");
      }
    }, [token]);

    if (!token) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
