import { useSelector } from "react-redux";

function belongsTo (next, redirect, departments) {
  return () => {
    const user = useSelector(state => state.profile.user);
    const belongs = user.departments.some(x => departments.includes(x));

    if (belongs)
      return next();
    else {
      return redirect('/home');
    }
  }
}

export default belongsTo;
