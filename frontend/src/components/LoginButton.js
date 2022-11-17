import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { LoginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button
        className="btn-blue me-2 px-3 py-1"
        onClick={() => LoginWithRedirect()}
      >
        Sign In
      </button>
    )
  );
};

export default LoginButton;
