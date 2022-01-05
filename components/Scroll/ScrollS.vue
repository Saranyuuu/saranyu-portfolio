<template>
    <section class="hidden-sm-and-up">
        <div class="scroll-position">
            <div class="scroll-frame">
                <div class="show-page">
                    <hr class="hr-scroll">
                    <div id="text-xs">01</div>
                </div>
                <div>
                    <div id="dot-01-xs" style="background-color: #ff5251;" @click="goHeader()" class="dot-scroll" />
                    <div id="dot-02-xs" @click="goContent()" class="dot-scroll" />
                    <div id="dot-03-xs" @click="goContent2()" class="dot-scroll" />
                    <div id="dot-04-xs" @click="goFooter()" class="dot-scroll" />
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
            var headerFrame = $('#header-frame-xs').offset().top
            var contentFrame = $('#content-mobile').offset().top
            var contentFrame2 = $('#sub-content-mobile').offset().top
            var footerFrame = $('#footer-frame-xs').offset().top

            if($w.scrollTop() >= footerFrame) {
                $("#text-xs").text(() => {
                    return "04";
                });

                $('#dot-01-xs').css({"background-color": "#ffffff"});
                $('#dot-02-xs').css({"background-color": "#ffffff"});
                $('#dot-03-xs').css({"background-color": "#ffffff"});
                $('#dot-04-xs').css({"background-color": "#ff5251"});
            }
            else if($w.scrollTop() >= contentFrame2 && $w.scrollTop() < footerFrame) {
                $("#text-xs").text(() => {
                    return "03";
                });

                $('#dot-01-xs').css({"background-color": "#ffffff"});
                $('#dot-02-xs').css({"background-color": "#ffffff"});
                $('#dot-03-xs').css({"background-color": "#ff5251"});
                $('#dot-04-xs').css({"background-color": "#ffffff"});
            }
            else if($w.scrollTop() >= contentFrame && $w.scrollTop() < contentFrame2){
                $("#text-xs").text(() => {
                    return "02";
                });

                $('#dot-01-xs').css({"background-color": "#ffffff"});
                $('#dot-02-xs').css({"background-color": "#ff5251"});
                $('#dot-03-xs').css({"background-color": "#ffffff"});
                $('#dot-04-xs').css({"background-color": "#ffffff"});
            }
            else {
                $("#text-xs").text(() => {
                    return "01";
                });

                $('#dot-01-xs').css({"background-color": "#ff5251"});
                $('#dot-02-xs').css({"background-color": "#ffffff"});
                $('#dot-03-xs').css({"background-color": "#ffffff"});
                $('#dot-04-xs').css({"background-color": "#ffffff"});
            }
        });
    },
    methods: {
        goHeader() {
            $('html, body').animate({
                scrollTop: $("#header-frame-xs").offset().top
            }, 500);
        },
        goContent() {
            $('html, body').animate({
                scrollTop: $("#content-mobile").offset().top
            }, 500);
        },
        goContent2() {
            $('html, body').animate({
                scrollTop: $("#sub-content-mobile").offset().top
            }, 500);
        },
        goFooter() {
            $('html, body').animate({
                scrollTop: $("#footer-frame-xs").offset().top
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