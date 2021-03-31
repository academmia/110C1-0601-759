function LatestProducts({ products }) {

    return (
        <div className="container center">
            <h2> Latest products </h2>
            <div className="center m-v-2">
                {
                    (products || []).map(data => {
                        return (
                            <p key={data.id}> <code> <em>ID: {data.id}</em>:  {data.reference} </code></p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {

    // console.log(context.req, context.res, context.connection);

    let products = [];

    const res = await fetch('http://localhost:4000/products?_limit=5')
    products = await res.json()

    return {
        props: {
            products
        }
    }
}

//  putem folosi sintaxa pentru functie expresie
//  export const getServerSideProps = async () => { ... } 

export default LatestProducts;
