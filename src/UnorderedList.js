import { useEffect } from "react"



const UnorderedList  = (props) => {
    useEffect(()=>{
        return ()=>{
            let current = new Date()
            let now = current.getHours()+":"+current.getMinutes()+":"+current.getSeconds();
            let info = `UnorderedList is destroyed at ${now}`
            props.fn(info)
            console.log("Finish....Malmo");
        }
    })
    return <ul>
        {
            props.data.map((elm,i) => {
                return <li key={i}>{elm}</li>
            })
        }
    </ul>
}
export default UnorderedList 