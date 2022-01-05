<template>
    <section id="header-frame-xs" class="hidden-sm-and-up header-frame">
        <div id="change-language-xs" class="change-language">
            {{this.$i18n.locale.toUpperCase()}} 
            <div class="arrow-down-frame">
                <div id="arrow-change-language-xs" class="arrow-down-language" />
                <div id="menu-language-xs" class="menu-language-before">
                    <div @click="changePath($i18n.locale === 'en' ? '/th' : '/')">
                        {{this.$i18n.locale === 'en' ? 'TH' : 'EN'}}
                    </div>
                </div>
            </div>
        </div>
        <div class="header-content-frame">
            <h1>{{$t('Name')}}</h1>
            <h1>{{$t('LastName')}}</h1>
            <h2>FRONTEND DEVELOPER</h2>
            <div class="icon-header-scroll">
                 <a aria-label="github" href="https://github.com/Saranyuuu" target="_blank" rel="noopener" class="icon-link">
                        <img src="/github-icon.png" alt="github-icon" class="icon-contact"/>
                    </a>
                    <a aria-label="email" href="mailto:saranyumax761@gmail.com" target="_blank" rel="noopener" class="icon-link">
                        <img src="/email-icon.png" alt="email-icon" class="icon-contact"/>
                    </a>
                    <a aria-label="phone" href="tel:+66984781350" target="_blank" rel="noopener" class="icon-link">
                        <img src="/phone-icon.png" alt="phone-icon" class="icon-contact"/>
                    </a>
            </div>
        </div>
        <div id="header-menu-xs" class="header-menu"> 
            <div @click="backHome()" style="cursor: pointer; font-size: 12px;"><b>{{$t('Name')}}</b> </div>
            <div class="icon-header-scroll">
                <a aria-label="github" href="https://github.com/Saranyuuu" target="_blank" rel="noopener" class="icon-link">
                    <img src="/github-icon.png" alt="github-icon" class="icon-contact"/>
                </a>
                <a aria-label="email" href="mailto:saranyumax761@gmail.com" target="_blank" rel="noopener" class="icon-link">
                    <img src="/email-icon.png" alt="email-icon" class="icon-contact"/>
                </a>
                <a aria-label="phone" href="tel:+66984781350" target="_blank" rel="noopener" class="icon-link">
                    <img src="/phone-icon.png" alt="phone-icon" class="icon-contact"/>
                </a>
                <div id="change-language-header-menu-xs" style="position: relative;" class="change-language-header">
                    {{this.$i18n.locale.toUpperCase()}} 
                    <div class="arrow-down-frame">
                        <div id="arrow-change-language-header-menu-xs" class="arrow-down-language" />
                        <div id="menu-language-header-menu-xs" class="menu-language-before">
                            <div @click="changePath($i18n.locale === 'en' ? '/th' : '/')">
                                {{this.$i18n.locale === 'en' ? 'TH' : 'EN'}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="learn-more-frame">
            <div class="learn-more-mouse-frame-xs">
                <img src="/hand.png" alt="hand" class="img-hand"/>
            </div>
            <div @click="goContent()" class="learn-more-button">
                {{$t('learnMore')}}
            </div>
        </div>
    </section>
</template>

<script>
import $ from "jquery";

export default {
    mounted() {

        $('#change-language-xs').click(function(){
            $('#arrow-change-language-xs').toggleClass('arrow-up-language');
            $('#menu-language-xs').toggleClass('menu-language')
        });

        $('#change-language-header-menu-xs').click(function(){
            $('#arrow-change-language-header-menu-xs').toggleClass('arrow-up-language');
            $('#menu-language-header-menu-xs').toggleClass('menu-language')
        })

        var $w = $(window).scroll( function(event) {
            var contentFrame = $("#content-mobile").offset().top
            var heightOfHeader = $('#header-menu-xs').height()

            if($w.scrollTop() > 100) {
                $('.learn-more-mouse-frame-xs').css({
                    'display': 'none'
                })
            }
            else {
                $('.learn-more-mouse-frame-xs').css({
                    'display': 'flex'
                })
            }

            if($w.scrollTop() <= (contentFrame - heightOfHeader)){
                $("#header-menu-xs")
                .css({
                    "display": "none"
                });
            }
            else {
                $("#header-menu-xs")
                .css({
                    "display": "flex"
                });
            }
        });
    },
    methods: {
        backHome() {
            $('html, body').animate({
                scrollTop: $("#header-frame-xs").offset().top
            }, 500);
        },
        goContent() {
            $('html, body').animate({
                scrollTop: $("#content-mobile").offset().top
            }, 500);
        },
        changePath(item) {
            this.$router.push(item)
        }
    }
}
</script>

<style scoped>

.change-language {
    position: absolute;
    top: 4%;
    right: 4%;
    color: #ffff;
    font-size: 13px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.5rem;
    width: 2rem;
    cursor: pointer;
}

.change-language-header {
    color: #ffff;
    font-size: 13px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.5rem;
    width: 2rem;
    cursor: pointer;
}

.arrow-down-frame {
    height: 100%;
    margin-left: 4px;
    display: flex;
    align-items: center;
}

.arrow-down-language {
    width: 4px;
    height: 4px;
    border-right: 0.5px solid rgba(255,255,255,1);
    border-bottom: 0.5px solid rgba(255,255,255,1);
    transform: rotate(45deg);
    transition: 0.3s;
}

.arrow-up-language {
    width: 4px;
    height: 4px;
    border-right: 0.5px solid rgba(255,255,255,1);
    border-bottom: 0.5px solid rgba(255,255,255,1);
    transform: rotate(-135deg);
    transition: 0.3s;
}

.menu-language-before {
    display: none;
}

.menu-language {
    position: absolute;
    display: block;
    top: 2rem;
    left: 0;
    opacity: 1;
    transition: 0.3s;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 9px;
}

.header-frame {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 2.5rem;
    background-color: #23253a;
    color: #ffffff;
}

.learn-more-frame {
    position: relative;
    display: flex;
    width: 85%;
    height: 10%;
    padding-top: 4rem;
}

.learn-more-button {
    color: rgba(255,255,255,1);
    border: 2px solid;
    font-size: 12px;
    letter-spacing: 2px;
    width: 45%;
    height: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 21%;
    font-weight: 700;
}
.learn-more-button:hover {
    color: #ffffff;
    background-color: #ff5251;
    transition: 0.3s;
    }
.learn-more-button:active {
    color: #ffffff;
    background-color: #ff5251;
    transition: 0.2s;
}

.learn-more-mouse-frame-xs {
    position: absolute;
    padding-top: 3rem;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 8%;
    animation: animate 1.5s infinite;
}

.img-hand {
    -webkit-filter: invert(100%);
    filter: invert(100%);
    transform: rotate(180deg);
    width: 2.5rem;
    height: 2.5rem;
    -o-object-fit: contain;
    object-fit: contain;
}

.header-menu {
    position: fixed;
    padding: 0rem 1rem;
    top: 0;
    display: none;
    height: 4rem;
    font-size: 1.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #23253a;
    color: #ffffff;
    border: #ffffff;
    z-index: 1;
}

.icon-header-scroll {
    height: 2rem;
    width: 46%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.icon-contact {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    margin-right: 8px;
}

.header-content-frame {
    width: 85%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
}

.header-content-frame h1 {
    font-size: 2rem;
    letter-spacing: 10px;
    line-height: 1.3em;
}

.header-content-frame h2 {
    margin: 7px 0px;
    font-size: 1rem;
    letter-spacing: 6px;
    color: #ff5251;
}

.icon-menu-header {
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

@keyframes animate {
    0% { top: 0rem; }
    /* 10% { top: 0.1rem; }
    20% { top: 0.2rem; }
    30% { top: 0.3rem; }
    40% { top: 0.4rem; } */
    50% { top: 2rem; }
    /* 60% { top: 0.4rem; }
    70% { top: 0.3rem; }
    80% { top: 0.2rem; }
    90% { top: 0.1rem; } */
    100% { top: 0rem; }
}

</style>