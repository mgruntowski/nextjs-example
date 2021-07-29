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

    const res = await fetch('https://nextjs-example-mgruntowski.vercel.app/api/ufs')
    props.data = await res.json()

    return {
        props: props
    }
}