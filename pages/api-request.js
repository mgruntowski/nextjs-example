import axios from "axios"
import { useEffect, useState } from "react"

export default function ApiRequest(props) {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     axios.get('/api/ufs').then(res => {
    //         setData(res.data)
    //     })
    // }, [setData])

    return (<>
        {props.data.map((d, index) =>
            <p key={index}>{JSON.stringify(d)}</p>    
        )}
    </>)
}

export async function getServerSideProps(ctx) {
    const props = {}

    await axios.get('http://localhost:3000/api/ufs').then(res => {
        props.data = res.data
    })

    return {
        props: props
    }
}