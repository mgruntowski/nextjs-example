/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import { useEffect, useState } from "react"
import Image from 'next/image'

export default function ApiRequest(props) {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     axios.get('/api/ufs').then(res => {
    //         setData(res.data)
    //     })
    // }, [setData])

    return (<>
        <Image src="/img/scooby.jpg" alt="scooby-doo" width="429" height="644"/>
        <img src="/img/scooby.jpg" alt="scooby-doo" width="429" height="644"/>
        {props.data.map((d, index) =>
            <a href={`/api-request/${d._id}`} target="_blank" rel="noreferrer" key={index}>
                <p>{JSON.stringify(d)}</p>
            </a>    
        )}
    </>)
}

export async function getStaticProps(ctx) {
    const props = {}

    const res = await fetch('https://nextjs-example-mgruntowski.vercel.app/api/ufs')
    props.data = await res.json()

    return {
        props: props
    }
}