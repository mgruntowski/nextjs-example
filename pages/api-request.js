export default function ApiRequest(props) {
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
        props: { ...props }
    }
}