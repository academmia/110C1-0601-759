// use convention
// filter/10/products/name/category   
// /filter/10/products/dell/laptops =>  params: (4) ["10", "products", "dell", "laptops"]

// filter/5/categories/name 
// filter/5/categories/monitors => ["5", "categories", "monitors"]

// - first after filter is limit


import { useRouter } from 'next/router';

function EditByRole() {
    
    console.log('Filter products or categories');
    const router = useRouter();
    console.log(router);

    return (
        <h2>Filter Products or Categories</h2>
    )
}

export default EditByRole;

