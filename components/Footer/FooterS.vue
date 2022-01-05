<template>
    <section id="footer-frame-xs" class="hidden-sm-and-up footer-frame">
        <div class="footer-content-xs">
            <h1>{{$t('thankyou1')}}</h1>
            <h1>{{$t('thankyou2')}}</h1>
            <div class="footer-contact-frame">
                <div class="footer-contact">
                    <a aria-label="email" href="mailto:saranyumax761@gmail.com" target="_blank" rel="noopener" class="email-button">
                        {{$t('emailMe')}}
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
        var footerFrame = $('#footer-frame-xs').offset().top
        
        var $w = $(window).scroll( function(event) {
            if($w.scrollTop() >= (footerFrame - 200)){
                $('.footer-content-xs').addClass("add-animation-footer-xs");
                $('.footer-content-xs').css({
                    'display': 'flex'
                })
            }
        });
    }
}
</script>

<style scoped>

@keyframes fadeIn  {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.add-animation-footer-xs {
    animation: fadeIn 1s ease-out;
}


.footer-frame {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 2.5rem;
    background-color: #23253a;
    color: #ffffff;
}

.img-background-frame {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    z-index: 0;
}

.img-background { 
    object-fit: contain;
    height: 105%;
    transform: rotate(-20deg);
    filter: grayscale(100%);
    opacity: 0.1;
}

.footer-content-xs {
    display: none;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 12%;
    margin-bottom: 2rem;
    z-index: 1;
}

.footer-content h1 {
    font-size: 4.5rem;
    letter-spacing: 10px;
    line-height: 1.3em;
}

.footer-contact {
    margin-top: 3rem;
    width: 55%;
}

.email-button {
    text-decoration: none;
    font-size: 12px;
    color: #ff5251;
    width: 10rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    letter-spacing: 2px;
    cursor: pointer;
    border: 2px solid;
}

.text-button {
    font-size: 12px;
    color: rgba(255,255,255,1);
    width: 18rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    letter-spacing: 2px;
}


.email-button:hover {
    color: #ff5251;
    background-color: #ffffff;
    transition: 0.3s;
}

.email-button:active {
    color: #ff5251;
    background-color: #ffffff;
    transition: 0.3s;
}

</style>
