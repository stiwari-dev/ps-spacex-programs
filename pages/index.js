import axios from 'axios';
import Head from 'next/head';
import Router from "next/router";
import { useEffect } from "react";

import LaunchPrograms from '../containers/LaunchPrograms';

const Home = ({ data }) => {
    useEffect(() => {
        Router.push('/');
    }, []);

    return (
        <>
            <Head>
                <title>SpaceX Launch Programs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LaunchPrograms programsData={data} />
            <footer>
                <div className="container text-center">
                    <span className="bold-text">Developed by: </span>
                    <span>Shubham Tiwari </span>
                </div>
            </footer>
        </>
    );
};

export const getServerSideProps = async () => {
    const res = await axios(`https://api.spaceXdata.com/v3/launches?limit=100`);
    const data = await res.data;
    return { props: { data } }
};

export default Home;