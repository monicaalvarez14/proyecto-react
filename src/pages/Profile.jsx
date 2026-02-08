import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email } = useContext(UserContext);

  return (
    <div className="container mt-4">
      <h2>Perfil</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;