import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const withAuthRedirect = (WrappedComponent, redirectTo = "/projects") => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("token");
      if (token) {
        router.push(redirectTo);
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthRedirect;
