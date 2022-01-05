<template>
    <section>
        <ContentL/>
        <ContentM/>
        <ContentS/>
    </section>
</template>

<script>
import ContentL from '~/components/Content/ContentL.vue';
import ContentM from '~/components/Content/ContentM.vue';
import ContentS from '~/components/Content/ContentS.vue';

export default {
    components: {
        ContentL,
        ContentM,
        ContentS
    }
}
</script>