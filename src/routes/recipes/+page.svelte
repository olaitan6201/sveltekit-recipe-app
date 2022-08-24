<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    
    let { recipes } = data.props;
</script>

<main>
    <title>Recipes</title>
    <h1 class="text-2xl text-center mb-10">Food Recipes</h1>

    <div class="grid grid-cols-3 grid-flow-row gap-4">
        {#each recipes as item}
            <a sveltekit:prefetch href={`/recipes/${item.id}`} class="relative">
                <p class="text-sm absolute top-0 text-center mt-20 inset-x-0 text-white">{item.title}</p>
                <img class="rounded-lg shadow-md" src={item.image} alt={item.title} />
            </a>
        {/each}
    </div>
</main>