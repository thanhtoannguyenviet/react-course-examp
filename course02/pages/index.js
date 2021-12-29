import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import ResourceHighlight from "components/ResourceHighlight";
import ResourceList from "components/ResourceList";
import Newsletter from "components/Newsletter";
import Layout from "../components/Layout";

export default function Home({resources}) {
  return (
      <Layout>
        <ResourceHighlight
            resources={resources}
        />
        <Newsletter/>
        <ResourceList
            resources={resources}
        />
        <Footer/>
      </Layout>
  )
}

//is called at the build time, and it's called only once
// export async function getStaticProps(){
//     const resData = await fetch("http://localhost:3000/api/resources")
//     const data =await  resData.json();
//     console.log(data)
//     return {
//         props: {
//             resources:data
//         }
//     }
// }

//is called every time you will visit the page
//function is excuted on the server
//data are always fresh
export async function getServerSideProps(){
    const resData = await fetch("http://localhost:3001/api/resources")
    const data =await  resData.json();
    console.log(data)
    return {
        props: {
            resources:data
        }
    }
}