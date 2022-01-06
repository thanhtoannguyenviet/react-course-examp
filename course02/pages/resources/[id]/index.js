import Layout from "../../../components/Layout";
import {useRouter} from "next/router";
import Link from "next/link";

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
                                                        <Link href={`/resources/${resource.id}/edit`}>
                                                            <a className="button is-warning">Update</a>
                                                        </Link>
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
export async function getServerSideProps({params}){
    const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`)
    const data = await dataRes.json()
    return {
        props:{
            resource:data
        }
    }
}