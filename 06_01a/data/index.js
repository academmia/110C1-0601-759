import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'mk.json');

export function getAllCategories() {
    const jsonDb = fs.readFileSync(dbPath);
    const db = JSON.parse(jsonDb)
    return db['categories']
}

export function getCategoryById(id) {
    const jsonDb = fs.readFileSync(dbPath);
    const db = JSON.parse(jsonDb);
    return db['categories'].filter( item => item.id == id )[0]
}

export function updateCategoryById(id, category) {
    console.log('updateCategoryById', id, category);

    const jsonDb = fs.readFileSync(dbPath);
    const db = JSON.parse(jsonDb)
    let categories = db['categories'];

    const index = categories.findIndex((category => category.id == id));
    Object.assign(categories[index], category);
    
    console.log('updateCategoryById', categories[index]);
    db.categories = categories;
    fs.writeFileSync(dbPath, JSON.stringify( db ) );
}

