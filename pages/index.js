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
                <div className="container">
                    <span><strong>Developed by:&nbsp;</strong></span>
                    <span>Shubham Tiwari</span>
                </div>
            </footer>
            <style jsx>{`
                footer .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                }

                @media screen and (min-width: 700px) {
                    footer .container {
                        flex-direction: row;
                    }
                }
            `
            }</style>
        </>
    );
};

export const getServerSideProps = async () => {
    const res = await axios(`https://api.spaceXdata.com/v3/launches?limit=100`);
    const data = await res.data;
    return { props: { data } }
};

export default Home;