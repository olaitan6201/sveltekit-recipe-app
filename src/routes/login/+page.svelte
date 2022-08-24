<script lang="ts">
    /** @type {import('./$types').PageData} */
    // export let body:any;
    export let errors:any = null;
    
</script>

<main>
    <title>Login</title>
    <div class="flex justify-center">
        <!-- <form class="p-4 mt-20 rounded-lg border m-auto" on:submit|preventDefault={handleSubmit}> -->
        <form class="p-4 mt-20 rounded-lg border m-auto" method="POST">
            <h1 class="text-center text-xl">Login</h1>
            <div class="my-5 w-full">
                <label for="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    class="p-2 rounded w-full border text-sm"
                    placeholder="Email Address"
                    name="email"
                >
                <small class="text-red-800">{errors?.email || ''}</small>
            </div>
            <div class="my-5 w-full">
                <label for="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    class="p-2 rounded w-full border text-sm"
                    placeholder="Password"
                    name="password"
                >
                <small class="text-red-800">{errors?.password || ''}</small>
            </div>
            <div class="my-5 w-full">
                <button type="submit" class="p-2 w-full bg-purple-700 text-white hover:bg-purple-900 rounded">
                    Submit
                </button>
            </div>
        </form>
    </div>
</main>