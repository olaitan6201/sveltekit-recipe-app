<script lang="ts">
    // import { onMount } from "svelte";


    /** @type {import('./$types').PageData} */
    export let data;
    
    let { recipe } = data.props;

    // console.log(recipe);
    // onMount(()=> {
    //     if(recipe?.instructions) document.querySelector('#recipeInfo').innerHTML = recipe?.instructions;
    // })
    
</script>
<main>
    {#if recipe}
    <h1 class="text-2xl text-center mb-10">{recipe?.title}</h1>
 
    <div class="flex justify-between">
        <img src={recipe?.image} alt={recipe?.title} width="200" height="200" class="rounded-lg shadow-md">
    </div>
    <div class="grid grid-cols-3 grid-flow-row gap-4">
        <div>
            <h2 class="text-xl font-bold">Ingredients</h2>
            <ul>
                {#each recipe?.extendedIngredients as ingredient}
                    <li class="text-gray-600 text-sm">{ingredient.name}</li>
                {/each}
            </ul>
        </div>
    
        <div>
            <h2>Cuisines</h2>
            <ul>
                {#each recipe?.cuisines as cusine}
                    <li>{cusine}</li>
                {/each}
            </ul>
        </div>

        <div>
            <h2>Diets</h2>
            <ul>
                {#each recipe?.diets as diet}
                    <li>{diet}</li>
                {/each}
            </ul>
        </div>

        <!-- <div>
            {#if recipe?.instructions}
            <h2>Instructions</h2>
            <div id="recipeInfo"></div>
            {/if}
        </div> -->
    </div>
    {:else}
    <div class="text-2xl text-center mb-10">
        <span class="font-bold text-red-800">Nothing found!</span>
    </div>
    {/if}
</main>