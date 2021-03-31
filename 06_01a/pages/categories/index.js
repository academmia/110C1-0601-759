import { useRouter } from 'next/router';

import { getAllCategories } from '../../data'


// 1 refactor
function Category({ categories }) {

    const router = useRouter()

    return (
        <div className="container center">
           
           <div className="promo-box-s bg-light-grey">
                <div className="container">
                    <h1>Categories</h1>
                </div>
            </div>
            
            <div className="container row m-v-2">
                {

                    categories.map(data => {
                        return (

                            <div key={data.id} className="col-md-4">
                                <div className="hover-shadow">
                                    <section className="m-v-1">
                                        <div className="right">
                                            <a href="#" className="font-weight-400 dark">{data.name}</a>
                                            {/* 2 */}
                                            <button onClick={() => router.push(`/categories/edit/${data.id}`)} 
                                                className="d-inline m-h-1 outline-color-grey button-s">Edit</button>
                                        </div>
                                    </section>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}


export async function getStaticProps() {

    // let categories = [];

    // categories = await fetch('http://localhost:4000/categories')
    //   .then( resp => resp.json() )
    //   .then( data => categories = data)

    const categories = getAllCategories();

    return {
        props: {
            categories
        }
    }
}

export default Category;
