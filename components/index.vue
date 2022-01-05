<template>
    <section>
        <Scroll/>
        <Header/>
        <Content/>
        <Content2/>
        <Footer/>
    </section>
</template>

<script>
import Header from '~/components/Header/Header.vue';
import Scroll from '~/components/Scroll/Scroll.vue';
import Content from '~/components/Content/Content.vue';
import Content2 from '~/components/Content2/Content2.vue';
import Footer from '~/components/Footer/Footer.vue';

export default {
    components: {
        Header,
        Content,
        Content2,
        Scroll,
        Footer
    }
}
</script>