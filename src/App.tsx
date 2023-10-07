import { useEffect, useState } from "react";
import { Layout } from "./components/layout/Layout.tsx";
import PropagateLoader from "react-spinners/PacmanLoader";
import "./App.scss";

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <PropagateLoader color="#5865f2" loading={loading} />
          {/* <img src="../CVA_2.png" alt="" /> */}
          {/* <h3>CVA</h3> */}
        </div>
      ) : (
        <Layout />
      )}
    </>
  );
};
