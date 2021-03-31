import { useEffect, useState } from "react";
import Link from 'next/link'

import useSWR from 'swr'
import Product from "./[id]";

function PromoProducts(props) {

    const [products, setProducts] = useState(props.products);   //~ init cu datele pre-fetched
    // 1
    // const [loading, setLoading] = useState(false);   //2 ~ comentat

    // 2 - primul parametrul este si cheie - daca are date pentru acea cheie refoloseste datele fara sa faca noi request-uri
    // foloseste API-ul lui fetch, daca utilizam alta librarie facem un wrapper (fetcher) si il dam ca al doilea parametru
    // useSWR('http://...', fetcher); 
    // Ex Axios: const fetcher = url => axios.get(url).then(res => res.data)

    const { data, error } = useSWR(`http://localhost:4000/products?_limit=8`);  //~ simulam ca au aparut alte produse intre timp

    useEffect( () => {
        if ( data ) setProducts(data)
    }, [data]);


    if (error) return <code>ERROR LOADING DATA!</code>

    // nu vrem sa retunram LOADING inainte sa avem props.products, pentru ca vrem sa se randeze static cu datele din getStaticProps()
    
    //3 INFO
    // daca punem || nu ne serveste versiunea pre-fetched la build time
    // if (!data || !products) return <code>LOADING...</code>

    // daca punem && nu mai apare LOADING pentru ca nu se randeaza pana ce nu se exeuta getStaticProps()
    // if (!data && !products) return <code>LOADING...</code>
    // 3 INFO END


    // 1.
    // useEffect( async () => {   //2 ~ comentat
    //     setLoading(true);
      
    //     try {
    //         const resp = await fetch('http://localhost:4000/products?_limit=5')
    //         let data = await resp.json();
    //         setProducts(data);
    //         setLoading(false);
    //     } catch(err) {
    //         console.log('Error getting promo products!', err);
    //         setLoading(false);
    //     }

    // }, [] );

    // 1
    // if (loading) {              //2 ~ comentat
    //     return <code> LOADING... </code>
    // }
    
    // 1
    // if (products.length === 0) {            //2 ~ comentat
    //     return <div className="container center m-v-3">
    //         <code> NO PROMO PRODUCTS! COME BACK TOMMOROW! </code>
    //     </div> 
    // }



    return (
        <>
            <div className="promo-box-s bg-light-grey">
                <div className="container">
                <Link href="/" className="d-inline-block m-l-3">
                    <a className="d-inline-block m-l-3"> Home </a>
                </Link>
                    <h1>Promo</h1>
                </div>
            </div>
            <div className="container row m-v-2">

            {
                // 1c replace fake array with API data
                products.map( item => (
                <div key={item.id} className="col-md-4">
                    <div className="hover-shadow">

                        <section className="m-v-1">
                            <div className="center">
                                <a href="#" className="font-weight-400 dark">{ item.reference }</a>
                                <p className="h5 bold p0 m0 black m-v-05">{ item.price }</p>
                                <button className="d-inline m-h-1 outline-color-grey">
                                    add to cart
                                </button>
                            </div>
                        </section>
                    </div>
                </div>))
            }

            </div>
        </>
    )
}

export async function getStaticProps() {
    console.log('Get static props...');
    const res = await fetch(`http://localhost:4000/products?_limit=5`)
    let products = await res.json()
    
    // vom utiliza informatia ca sa gasim usor in Page Source
    let product = {
        id: Date.now(),
        reference: Date.now(),
        price: 999
    }
    
    // putem cauta product sa vedem daca a fost pre-rendered
    // va disparea la prima revalidare, cand se va stoca noua versiune actualizata (cu 7 produse)
    products = [ ...products, product ];
    
  

    // Pass post data to the page via props
    return { 
        props: { products },

    }
}

export default PromoProducts;

