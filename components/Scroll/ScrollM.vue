<template>
    <section class="hidden-md-and-up hidden-xs-only">
        <div class="scroll-position">
            <div class="scroll-frame">
                <div class="show-page">
                    <hr class="hr-scroll">
                    <div id="text-sm">01</div>
                </div>
                <div>
                    <div id="dot-01-sm" style="background-color: #ff5251;" @click="goHeader()" class="dot-scroll" />
                    <div id="dot-02-sm" @click="goContent()" class="dot-scroll" />
                    <div id="dot-03-sm" @click="goContent2()" class="dot-scroll" />
                    <div id="dot-04-sm" @click="goFooter()" class="dot-scroll" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import $ from "jquery";

export default {
    mounted() {
        // var defualtScroll = 0
        var $w = $(window).scroll( function(event) {
            var headerFrame = $('#header-frame-sm').offset().top
            var contentFrame = $('#content-frame-sm').offset().top
            var contentFrame2 = $('#content2-frame-sm').offset().top
            var footerFrame = $('#footer-frame-sm').offset().top

            if($w.scrollTop() >= (footerFrame - 100)) {
                $("#text-sm").text(() => {
                    return "04";
                });

                $('#dot-01-sm').css({"background-color": "#ffffff"});
                $('#dot-02-sm').css({"background-color": "#ffffff"});
                $('#dot-03-sm').css({"background-color": "#ffffff"});
                $('#dot-04-sm').css({"background-color": "#ff5251"});
            }
            else if($w.scrollTop() >= (contentFrame2 - 101) && $w.scrollTop() < footerFrame) {
                $("#text-sm").text(() => {
                    return "03";
                });

                $('#dot-01-sm').css({"background-color": "#ffffff"});
                $('#dot-02-sm').css({"background-color": "#ffffff"});
                $('#dot-03-sm').css({"background-color": "#ff5251"});
                $('#dot-04-sm').css({"background-color": "#ffffff"});
            }
            else if($w.scrollTop() >= contentFrame && $w.scrollTop() < contentFrame2){
                $("#text-sm").text(() => {
                    return "02";
                });

                $('#dot-01-sm').css({"background-color": "#ffffff"});
                $('#dot-02-sm').css({"background-color": "#ff5251"});
                $('#dot-03-sm').css({"background-color": "#ffffff"});
                $('#dot-04-sm').css({"background-color": "#ffffff"});
            }
            else {
                $("#text-sm").text(() => {
                    return "01";
                });

                $('#dot-01-sm').css({"background-color": "#ff5251"});
                $('#dot-02-sm').css({"background-color": "#ffffff"});
                $('#dot-03-sm').css({"background-color": "#ffffff"});
                $('#dot-04-sm').css({"background-color": "#ffffff"});
            }
        });
    },
    methods: {
        goHeader() {
            $('html, body').animate({
                scrollTop: $("#header-frame-sm").offset().top
            }, 500);
        },
        goContent() {
            $('html, body').animate({
                scrollTop: $("#content-frame-sm").offset().top
            }, 500);
        },
        goContent2() {
            $('html, body').animate({
                scrollTop: $("#content2-frame-sm").offset().top - 100
            }, 500);
        },
        goFooter() {
            $('html, body').animate({
                scrollTop: $("#footer-frame-sm").offset().top - 50
            }, 500);
        }
    }
}
</script>

<style scoped>

.scroll-position {
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100vh;
    right: 3rem;
    bottom: 1rem;
    z-index: 2;
}

.scroll-frame{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20rem;
    width: 0.2rem;
}

.show-page {
    color: #ff5251;
    display: flex;
    justify-content: space-between;
    transform: rotate(90deg);
    align-items: center;
    width: 5rem;
    font-size: 2rem;
}

.hr-scroll {
    background-color:#ff5251 ;
    border: 1px solid #ff5251;
    width: 2rem;
}

.dot-scroll {
    width: 0.7rem;
    height: 0.7rem;
    background-color: #ffffff;
    border-radius: 1rem;
    margin-bottom: 2rem;
    cursor: pointer;
}

</style>