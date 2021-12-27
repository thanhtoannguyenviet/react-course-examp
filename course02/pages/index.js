import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import ResourceHighlight from "components/ResourceHighlight";
import ResourceList from "components/ResourceList";
import Newsletter from "components/Newsletter";
import Layout from "../components/Layout";
import {resources} from "./api/data";

export default function Home() {
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
