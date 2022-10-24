import { useSelector } from "react-redux";

function isAdmin (next, redirect) {
  return () => {
    const user = useSelector(state => state.profile.user);

    if (user.isAdmin)
      return next();
    else {
      return redirect('/home');
    }
  }
}

export default isAdmin;
