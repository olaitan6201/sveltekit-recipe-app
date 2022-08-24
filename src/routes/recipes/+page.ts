/** @type {import('./$types').PageLoad} */
export async function load(page: any){
    let data:any[] = [];
    let { fetch } = page;
    try {
        const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
        let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`);
        
        const { results } = await res.json();
        data = results;
    } catch (error) {
        // console.error(error);
        data = []
    }finally{
        data = []
    }
    return {
        props: {
            recipes : data,
        }
    }

}