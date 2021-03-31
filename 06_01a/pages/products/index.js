
function Products() {

    return (
        <>
            <div className="promo-box-s bg-light-grey">
                <div className="container">
                    <h1>Products</h1>
                </div>
            </div>
            <div className="container row m-v-2">

            {
                Array(6).fill(10).map( (item, idx) => (
                <div key={idx}  className="col-md-4">
                    <div className="hover-shadow">

                        <section className="m-v-1">
                            <div className="center">
                                <a href="#" className="font-weight-400 dark">Product</a>
                                <p className="h5 bold p0 m0 black m-v-05">$189</p>
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

export default Products;

