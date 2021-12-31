import Layout from "../../components/Layout";
import {useRouter} from "next/router";

const ResourceDetail = ({resource}) => {
    const router = useRouter()
    //if fallback:true
    // if(router.isFallback){
    //     return <div>Loading data!</div>
    // }
    return (
        <Layout>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">

                                        <section className="section">
                                            <div className="columns">
                                                <div className="column is-8 is-offset-2">
                                                    <div className="content is-medium">
                                                        <h2 className="subtitle is-4">{resource.createAt}</h2>
                                                        <h1 className="title">{resource.title}</h1>
                                                        <p>{resource.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ResourceDetail
// export async function getServerSideProps({params}){
//     const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`)
//     const data = await dataRes.json()
//     return {
//         props:{
//             resource:data
//         }
//     }
// }
//Lower version then 9.3. Higher we use getServerSideProps to replace getInitialProps
// ResourceDetail.getInitialProps = async ({query}) => {
//     const dataRes = await fetch(`http://localhost:3001/api/resources/${query.id}`)
//     const data = await dataRes.json()
//     return {
//             resource:data
//     }
// }
// export default ResourceDetail

export async function getStaticPaths() {
    const resData = await fetch("http://localhost:3001/api/resources/")
    const data = await  resData.json()
    const paths = data.map(item =>{
        return {
            params: {id: item.id}
        }
    })
    return {
        paths,
        //means that other routes should resolve into 404_page
        fallback:false
    }

    // return {
    //     paths,
    //     //means that other routes should resolve into 404_page
    //     fallback:true
    // }
}
export async function getStaticProps({params}){
    const resData = await fetch(`http://localhost:3001/api/resources/${params.id}`)
    const data = await  resData.json()
    return {
            props:{
                resource:data
            },
            //Revalidate:1 sẻ cho phép ta load lại dữ liệu từ api đỗ vào bên trong bất kể đó đang là trang tĩnh.
            revalidate:1
    }
}