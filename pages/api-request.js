export default function ApiRequest(props) {
    return (<>
        {props.data.map((d, index) =>
            <p key={index}>{JSON.stringify(d)}</p>    
        )}
    </>)
}

export async function getServerSideProps(ctx) {
    const props = {}

    const res = await fetch('http://localhost:3000/api/ufs')
    props.data = await res.json()

    return {
        props: { ...props }
    }
}