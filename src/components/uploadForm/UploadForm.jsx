import { useState, useEffect } from "react";
import "./UploadForm.scss";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleOnchageFile = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else if (!selected) {
      setFile(null);
      setError(null);
    } else {
      setFile(null);
      setError("file not suport");
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [error]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="file-upload">
          <input type="file" onChange={handleOnchageFile} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 11l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
        </div>
      </div>
      <div>
        {error && <p className="error">{error}</p>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </div>
  );
}

export default UploadForm;
