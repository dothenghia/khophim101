import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/Layout";

// This gets called on every request
export async function getServerSideProps(context) {
    // Get slug in path url
    const { slug } = context.query

    // Fetch data from external API
    const res = await fetch(`https://ophim1.com/phim/${slug}`)
    const data = await res.json()

    // Pass data to the page via props
    return { 
        props: { 
            data
        }
    }
}


const Movie = ({ data }) => {
    return (
        <Layout>
            <Head>
                <title>{data['movie']['name']} - khophim.net</title>
            </Head>

            {/* ================================================== */}

            <div>
                <h1 className="text-xl text-red-600 font-bold">
                    {data['movie']['name']}
                    <span> ({data['movie']['origin_name']})</span>
                </h1>
                
                <h3>{data['movie']['episode_current']}</h3>
                <h1>Diễn viên</h1>
                <ul>
                    {
                        data['movie']['actor'].map((actor, index) => {
                            return (<li key={index}>{actor}</li>)
                        })
                    }
                </ul>

                <Link href='/' className="text-xl text-blue-500 font-bold">Back to home</Link>
            </div>

        </Layout>
    );
};

export default Movie;
