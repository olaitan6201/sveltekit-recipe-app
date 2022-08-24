<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    
    let { recipes } = data.props;
</script>

<main>
    <title>Recipes</title>
    <h1>Food Recipes</h1>

    {#each recipes as item}
        <a href={`/recipes/${item.id}`}>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} />
        </a>
    {/each}
</main>