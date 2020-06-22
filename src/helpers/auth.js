import { useSelector } from "react-redux";

export const useAuth = () => {
  const auth = useSelector(state => state.auth);

  const checkPermissions = permission => auth.permissions.includes(permission);

  return {
    ...auth,
    checkPermissions
  };
};