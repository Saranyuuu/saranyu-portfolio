<template>
    <section>
        <Content2L/>
        <Content2M/>
        <Content2S/>
    </section>
</template>

<script>
import Content2L from '~/components/Content2/Content2L.vue';
import Content2M from '~/components/Content2/Content2M.vue';
import Content2S from '~/components/Content2/Content2S.vue';

export default {
    components: {
        Content2L,
        Content2M,
        Content2S
    }
}
</script>