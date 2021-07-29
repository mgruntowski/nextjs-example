export default function ApiRequest(props) {
    return (<>
        {/* <p>{JSON.stringify(props.data)}</p>     */}
    </>)
}

/*export async function getStaticPaths() {
    const res = await fetch('https://nextjs-example-mgruntowski.vercel.app/api/ufs')
    const resData = await res.json()

    const paths = resData?.map(data => ({
        params: { ufId: data._id }
    }))

    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://nextjs-example-mgruntowski.vercel.app/api/ufs/${params.ufId}`)
    const resData = await res.json()

    return {
        props: {
            data: resData
        }
    }
}*/