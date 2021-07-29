export default function ApiRequest(props) {
    return (<>
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