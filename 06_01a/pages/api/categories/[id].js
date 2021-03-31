import { getCategoryById, updateCategoryById } from '../../../data'

export default function getCategory({ query: { id }, method, body }, res) {
 
    if (method === 'POST') {
        console.log('Body: ', body);
        // daca nu folosim return, se executa si codul de mai jos 
        // si se incearca un nou response

        if (body.id != undefined) updateCategoryById(body.id, body);

        return res.status(200).json( body )
    }

    const category = getCategoryById(id); 
    // Am gasit categoria
    if (category) {
        res.status(200).json( category )
    } else {
        res.status(404).json({ message: `Category ${id} not found` })
    }
}

 