<script>
    import Footer from "../components/Footer.svelte";
    import Nav from "../components/Nav.svelte";
    import "../app.css";
</script>

<main>
    <Nav />
    
    <div class="flex h-96">
        <div class="m-auto">
            <slot></slot>
        </div>
    </div>

    <Footer />
</main>