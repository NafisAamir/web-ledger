import { useEffect, useState } from "react";
import axios from "axios"
const Home = () => {
    const API_KEY="e58d0103435b4a8c9b5aa35ff83c731b"
    const [dataarr, setdataarr] = useState([])
    const [query, setquery] = useState("")
    const fetchdata = async() => {
        const resp = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`);
        const recipeData = resp.data.recipes;
        // const data=recipeData.json();
        console.log(recipeData);
        setdataarr(recipeData);
    } 
    useEffect(()=>{
            fetchdata();
    },[])

return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="text" placeholder="Enter Recipe" name="query" />

            <button onClick={(e) => { setquery({ [e.target.name]: [e.target.value] }) }}>Search</button>
        </div>
    </div>
)
}
export { Home }