import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import ResourceHighlight from "components/ResourceHighlight";
import ResourceList from "components/ResourceList";
import Newsletter from "components/Newsletter";
import Layout from "../components/Layout";
import {useEffect} from "react";

export default function Home({resources}) {
    useEffect(()=>{
        fetch("http://localhost:3000/api/resources")
    },[])
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
export async function getServerSideProps() {
    const resData = await fetch("http://localhost:3001/api/resources");
    const data = await resData.json();
    console.log(data);
    return {
        props: {
            resources: data
        }
    }
}