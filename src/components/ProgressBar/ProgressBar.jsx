import {useEffect} from 'react'
import useStorage from '../../hooks/useStorage.js'
import './ProgressBar.scss'
import { motion } from 'framer-motion';

function ProgressBar({file,setFile}) {
    const {progress, url } = useStorage(file)

    useEffect(() => {
        if (url) {
          setFile(null);
        }
      }, [url, setFile]);

    return (
        <div className="container">
            <motion.div className="progress-bar" initial={{ width: 0 }}
      animate={{ width: progress + '%' }}></motion.div>
        </div>

    )
}

export default ProgressBar
