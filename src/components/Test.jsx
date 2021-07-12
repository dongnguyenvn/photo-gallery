import useData from "../hooks/useData.js"

const  Test = () => {
    const photos = useData('photo')    
    const abcs = useData('abc')  
    

    return (
        <div className="container">
            {photos.map(photo => (<p key={photo.id}>{photo.name}</p>))}
            {abcs.map(photo => (<p key={photo.id}>{photo.name}</p>))}
        </div>
    )
}

export default Test
