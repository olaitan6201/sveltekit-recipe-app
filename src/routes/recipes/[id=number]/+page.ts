

/** @type {import('./$types').PageLoad} */
export async function load(page: any){
    let data:any = null;
    // console.log(page);
    
    let { fetch } = page;
    try {
        const id = page.params.id;
        const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
                
        let res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
        
        const resData = await res.json();
        data = resData
        
    } catch (error) {
        // console.error(error);
        data = null;
    }finally{
        data = null;
    }
    return {
        props: {
            recipe : data
        }
    }

}