import { useState } from 'react';
import { useRouter } from 'next/router';

function ProductsSearch() {
    
    const [prodname, setProdname] = useState('Dell') 
    const [category, setCategory] = useState('Laptops') 
    
    const router = useRouter()

    const searchProductsHandler = (ev) => {
        // vrem sa navigam catre ruta: 
        // /filter/10/products/dell/laptops =>  params: (4) ["10", "products", "dell", "laptops"]

        // daca nu vrem sa poata da back, folosim `replace()`
        // router.replace(`/filter/10/products/${prodname}/${category}`)
        
        // ramane in history
        router.push(`/filter/10/products/${prodname}/${category}`)
    }

    return (
        <div className="row container m-v-2">
            <div className="col-md-6 services-ul">
                <div className="fancy-title title-fancy-right top-margin">
                    <h3>Search</h3>
                </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor=" exampleInputSubject1">Name</label>
                            <input type="text" className="form-control" id="exampleInputSubject1" aria-describedby="emailHelp" />
                        </div>

                        <div className="col-md-6 m-top">
                            <div className="form-group">
                                <label htmlFor="exampleselectServices1">Category</label>
                                <select id="exampleselectServices1" className="form-control">
                                    <option disabled="">--Select One--</option>
                                    <option>PC</option>
                                    <option>Monitors</option>
                                    <option>Laptops</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button onClick={ searchProductsHandler } className="btn btn-primary m-l-1">Search</button>
                </div>
        </div>
        
    )
}

export default ProductsSearch;