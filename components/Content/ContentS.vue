<template>
    <section id="content-mobile" class="hidden-sm-and-up information-frame-xs">
        <div class="content01-frame-xs">
            <div class="content-left">
                
    
                <div class="text-section">
                    02
                    
                </div>
            </div>
            <div class="content-right">
                <div class="content-sec01">
                    <h1 id="text-h1-xs">{{$t('welcome')}} !</h1>
                    <h2 id="text-h2-xs">{{$t('introduce')}}, Frontend Developer</h2>
                    <h2>{{$t('address')}}</h2>
                    <h3 style="margin-top: 2rem;">{{$t('contentParagraph1')}}</h3>
                    <h3 style="margin-bottom: 2rem;">{{$t('contentParagraph2')}}</h3>
                    <a aria-label="linkedIn" href="https://drive.google.com/file/d/1iymiXs127iuH6aml3uaoeVSWlMjj0tLX/view?usp=sharing" target="_blank" rel="noopener" class="contact-button">
                        {{$t('letConnect')}}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import $ from 'jquery';

export default {
    mounted() {
        var contentFrame = $('#content-mobile').offset().top
        var contentFrame2 = $('#sub-content-mobile').offset().top
        
        var $w = $(window).scroll( function(event) {
            if($w.scrollTop() >= (contentFrame - 200) && $w.scrollTop() < (contentFrame2 + 200)){
                $('.content01-frame-xs').addClass("add-animation-content01-xs");
                $('.content01-frame-xs').css({
                    'display': 'flex'
                })

                var getHeightOfHeader = $('#header-menu-xs').height()
                var getHeightOfContentFrame = $('.information-frame-xs').height()
                $('.information-frame-xs').css({
                    'padding-top': getHeightOfHeader + 'px'
                });

                var getHeightOfH1 = $('#text-h1-xs').height()
                var getHeightOfH2 = $('#text-h2-xs').height()

                $('.hr-h1-xs').css('height', getHeightOfH1 + 'px');
                $('.hr-h2-xs').css('height', getHeightOfH2 + 'px');
            }
        });
    }
}
</script>

<style scoped>

.add-animation-content01-xs {
    animation: fadeIn 1s ease-out;
}

.information-frame-xs {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    background-color: #1f2235;
}

.content01-frame-xs {
    height: 100%;
    width: 100%;
    display: none;
    align-items: center;
}

.content-left {
    color: #ffffff;
    position: relative;
    padding-top: 1rem;
    height: 100%;
    width: 15%;
    padding-right: 2rem;
}

.content-right {
    padding-top: 1rem;
    height: 100%;
    width: 85%;
}

.content-sec01 h1 {
    color: #ffffff;
    letter-spacing: 3px;
    font-size: 1.6rem;
    margin-bottom: 10px;
}

.content-sec01 h2 {
    color: #ff5251;
    letter-spacing: 2px;
    font-size: 1.3rem;
    /* line-height: 1.1em; */
}

.content-sec01 h3 {
    color: #ffffff;
    /* text-align: justify; */
    width: 73%;
    font-size: 12px;
    line-height: 1.5em;
}

.contact-button {
    text-decoration: none;
    background-color: #ff5251;
    color: rgba(255,255,255,1);
    width: 14rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    letter-spacing: 2px;
    margin-top: 1rem;
    cursor: pointer;
}

.contact-button:hover {
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
}

.contact-button:active {
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
}

.hr-h1-xs {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
}

.hr-h2-xs {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.text-section {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    bottom: 5rem;
    height: 30%;
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
}

.text-section hr {
    transform: rotate(90deg); 
    width: 4rem;
    border: 2px solid #a9946e;
}

.content-sec02 {
    margin-top: 5rem;
    margin-left: 9rem;
}

.content-sec02 h1 {
    display: flex;
    align-items: center;
    color: #be4d08;
    letter-spacing: 3px;
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.hr-content-sec02 {
    width: 9rem;
    margin-left: 2rem;
}

.content-sec02 h2 {
    color: #cb8812;
    letter-spacing: 2px;
    font-size: 1.8rem;
    line-height: 1.1em;
}

.content-sec02 h3 {
    color: #0c1351;
    text-align: justify;
    width: 59%;
    font-size: 1.2rem;
}

.content-sec02 ul {
    margin-left: 5rem;
    color: #cb8812;
    font-size: 12px;
    line-height: 1.1em;
    font-weight: 700;
    width: 59%;
}

.content-sec02 li {
    margin-top: 2rem;
}

@keyframes fadeIn  {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

</style>
