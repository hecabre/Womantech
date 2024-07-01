import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export function ProfilePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { profile } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await profile(id);
        console.log(res);
      } catch (e) {
        console.error("Algo salió mal aca", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  return <div>ProfilePage</div>;
}
