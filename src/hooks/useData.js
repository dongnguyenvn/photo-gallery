import {firestore} from '../firebase.js'
import {useState,useEffect} from 'react'


const useData = (collection) => {
    const [datas,setDatas] = useState([])
   
    useEffect(() => {
        firestore.collection(collection).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                setDatas(arr => [...arr ,data]);
            });
        });
    },[collection])

    return datas
}

export default useData