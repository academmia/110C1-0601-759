
import { useRouter } from 'next/router';

function Product({ product }) {

    // pentru a verifica obiectul router
    // const router = useRouter();
    // console.log(router);

    const { query: { id }, isFallback } = useRouter();

    if (isFallback) return (
        <code> LOADING... </code>
    )

    return (
        <>
            <div className="promo-box-s bg-light-grey">
                <div className="container">
                    <h1>Product { id }</h1>
                </div>
            </div>

            <div className="row container m-v-2 justify-content-center">

                    <div className="col-md-6" style={{minWidth: '4rem'}}>
                        
                        <p className="font-weight-400 left h4 m1"> {product.price}  </p>
                        <hr className="hr m-v-1" />
                        <p className="p-v-1 m1"> {product.description}  </p>
                        <p className="p-v-1 m1"> version: {product.version}  </p>
                        <hr className="hr m-v-1" />
                        <button className="m1">Add to Cart</button>
                           
                    </div>
            
            </div>
        </>
    )
}

// called at build time
export async function getStaticPaths() {
    console.log('getStaticPaths');

    const res = await fetch('http://localhost:4000/products?_limit=5')
    const products = await res.json()
  
    // Get the paths we want to pre-render based on products
    const paths = products.map( product => ({
      params: { id: product.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}
  
export async function getStaticProps({ params }) {
    console.log('getStaticProps', params);
    
    const res = await fetch(`http://localhost:4000/products/${params.id}`)
    let product = await res.json()

    // vom utiliza informatia sa observam revalidarea
    product.version = Date.now();

    // Pass post data to the page via props
    return { 
        props: { product },
        revalidate: 7
    }
}

export default Product;
