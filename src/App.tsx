import { useEffect, useState } from "react";
import { Layout } from "./components/layout/Layout.tsx";
import PropagateLoader from "react-spinners/PuffLoader";
import "./App.scss";

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2350);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <PropagateLoader color="black" loading={loading} size={160} />
          {/* <img src="../luckylogo.png" alt="" /> */}
          <h3>CVA</h3>
        </div>
      ) : (
        <Layout />
      )}
    </>
  );
};
