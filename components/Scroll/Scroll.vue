<template>
    <section>
        <ScrollL/>
        <ScrollM/>
        <ScrollS/>
    </section>
</template>

<script>
import ScrollL from '~/components/Scroll/ScrollL.vue';
import ScrollM from '~/components/Scroll/ScrollM.vue';
import ScrollS from '~/components/Scroll/ScrollS.vue';

export default {
    components: {
        ScrollL,
        ScrollM,
        ScrollS
    }
}
</script>