import { useSelector } from "react-redux";

export const useAuth = () => {
  const auth = useSelector(state => state.auth);

  const checkPermissions = permission => auth.permissions.includes(permission);

  const isAdmin  = auth.user && auth.user.role === "admin";

  return {
    ...auth,
    isAdmin,
    checkPermissions
  };
};