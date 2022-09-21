import Head from 'next/head';
import Layout from "../../components/layout";
import whichPerson from "../../components/gown";

import { getids, getData } from '../../lib/data';

export async function getStaticPaths () {
    const paths = getids();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps ( { params } ) {
    const itemData = await getData(false, params.id);
    return {
        props: {
            itemData
        }
    };
}

export default function children ( { itemData } ) {
    return (
    <Layout>
        <whichPerson info={itemData} />
    </Layout>
    )
}