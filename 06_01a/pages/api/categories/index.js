import { getAllCategories } from '../../../data'

export default (req, res) => {
    
    const categories = getAllCategories(); 

    res.status(200).json({ data: categories })
}

