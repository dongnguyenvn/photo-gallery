import useFireStore from "../../hooks/useFireStore.js";
import "./ImageGrid.scss";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
  const data = useFireStore("images");
  if (data === null) {
    return (
      <div className="container">
        <div className="loader-wrap">
          <i className="loader"></i>
        </div>
      </div>
    );
  } else if (data.length === 0) {
    return (
      <div className="container">
        <div className="loader-wrap">
          <p>No data</p>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="img-grid">
        {data?.map((data) => (
          <motion.div
            layout
            key={data.id}
            className="img-wrap"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setSelectedImg(data.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={data.url}
              alt={data?.name}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
