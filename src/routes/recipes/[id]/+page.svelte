<script lang="ts">
import { onMount } from "svelte";


    /** @type {import('./$types').PageData} */
    export let data;
    
    let { recipe } = data.props;

    // console.log(recipe);

    onMount(()=> {
        if(recipe.instructions) document.querySelector('#recipeInfo').innerHTML = recipe.instructions;
    })
    
</script>
<main>
    <h1>{recipe.title}</h1>

    <img src={recipe.image} alt={recipe.title}>

    <div>
        <h2>Ingredients</h2>
        <ul>
            {#each recipe.extendedIngredients as ingredient}
                <li>{ingredient.name}</li>
            {/each}
        </ul>
        
        <h2>Cuisines</h2>
        <ul>
            {#each recipe.cuisines as cusine}
                <li>{cusine}</li>
            {/each}
        </ul>

        <h2>Diets</h2>
        <ul>
            {#each recipe.diets as diet}
                <li>{diet}</li>
            {/each}
        </ul>

        {#if recipe.instructions}
        <h2>Instructions</h2>
        <div id="recipeInfo"></div>
        {/if}
    </div>
</main>