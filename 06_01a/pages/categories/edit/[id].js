import { useRouter } from 'next/router';
import { useState } from 'react';
import { getCategoryById } from '../../../data';

export default function CategoryEdit(props) {

    const router = useRouter();
    const [category, setCategory] = useState(props.category);

    const save = async ev => {
        console.log('Saving category...', category.name);
        
        const resp = await fetch(`/api/categories/${category.id}`, {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json();
        
        console.log('Saved...', data);


        router.push(`/categories`);
    }

    return (
        <div className="container center">
            <div className="promo-box-s bg-light-grey">
                <div className="container">
                    <h1>Edit category (id: { category.id }) </h1>
                </div>
            </div>

            <div className="container-half-fluid row m-t-6">
                <div className="form-group col-12">
                    <label htmlFor="name">Category name:</label>
                    <input value={category.name} onChange={(ev) => setCategory(current => ({ ...current, name: ev.target.value }))}
                        type="text" className="form-control" id="name" name="name" />
                    <button onClick={save}
                        type="submit" className="btn btn-primary button">Save</button>
                </div>
            </div>
        </div>

    )

}

export async function getServerSideProps(context) {

    // console.log(context.req, context.res, context.connection);
    console.log(context.params);

    let category = getCategoryById(context.params.id);

    return {
        props: {
            category
        }
    }
}
