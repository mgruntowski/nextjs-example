/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function ApiRequest(props) {
    return (<>
        <Image src="/img/scooby.jpg" alt="scooby" width="512" height="768"/>
        <img src="/img/scooby.jpg" alt="scooby" width="512" height="768"/>
        {props.data.map((d, index) =>
            <a key={index} href={`/api-request/${d._id}`} target='_blank' rel="noreferrer">
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
        props: { ...props }
    }
}