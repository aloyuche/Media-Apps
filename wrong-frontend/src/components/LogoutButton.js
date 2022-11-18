import { useAuth0 } from "@auth0/auth0-react";

const logoutButton = () => {
  const { Logout, isAuthenticated } = useAuth0;
  return (
    isAuthenticated && (
      <button className="btn-blue me-2 px-3 py-1 " onClick={() => Logout()}>
        Sign Out
      </button>
    )
  );
};

export default logoutButton;
