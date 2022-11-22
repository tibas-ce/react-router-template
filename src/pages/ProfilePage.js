import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProfilePage() {
  const { id } = useParams();

  return (
    <main>
      <Header />
      <h1>Página acerca do usuário {id}</h1>
    </main>
  );
}

export default ProfilePage;
