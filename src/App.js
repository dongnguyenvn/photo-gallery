import './App.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import UploadForm from './components/uploadForm/UploadForm';
import ImageGrid from './components/ImageGrid/ImageGrid.jsx';
import Modal from './components/Modal/Modal.jsx';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <Header/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
}

export default App;
