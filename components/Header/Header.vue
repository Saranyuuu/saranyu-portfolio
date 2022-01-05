<template>
    <section>
        <HeaderL/>
        <HeaderM/>
        <HeaderS/>
    </section>
</template>

<script>
import HeaderL from '~/components/Header/HeaderL.vue';
import HeaderM from '~/components/Header/HeaderM.vue';
import HeaderS from '~/components/Header/HeaderS.vue';

export default {
    components: {
        HeaderL,
        HeaderM,
        HeaderS
    }
}
</script>