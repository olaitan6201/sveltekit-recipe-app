<script>
import Footer from "../components/Footer.svelte";
import Nav from "../components/Nav.svelte";

</script>

<main>
    <Nav />
    
    <slot></slot>

    <Footer />
</main>