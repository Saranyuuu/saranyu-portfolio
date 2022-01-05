<template>
    <section>
        <FooterL/>
        <FooterM/>
        <FooterS/>
    </section>
</template>

<script>
import FooterL from '~/components/Footer/FooterL.vue';
import FooterM from '~/components/Footer/FooterM.vue';
import FooterS from '~/components/Footer/FooterS.vue';

export default {
    components: {
        FooterL,
        FooterM,
        FooterS
    }
}
</script>