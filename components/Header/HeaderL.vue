<template>
    <section id="header-frame-md" class="hidden-sm-and-down header-frame">
        <div id="change-language-md" class="change-language">
            {{this.$i18n.locale.toUpperCase()}} 
            <div class="arrow-down-frame">
                <div id="arrow-change-language-md" class="arrow-down-language" />
                <div id="menu-language-md" class="menu-language-before">
                    <div @click="changePath($i18n.locale === 'en' ? '/th' : '/')">
                        {{this.$i18n.locale === 'en' ? 'TH' : 'EN'}}
                    </div>
                </div>
            </div>
        </div>
        <div class="learn-more-mouse-frame">
            <div class="learn-more-mouse">
                <img src="/mouse.png" alt="mouse" class="img-mouse">
                <div class="full-arrow">
                    <div class="line-arrow"/>
                    <div class="arrow-down"/>
                </div>
                <div class="text-scroll">
                    SCROLL
                </div>
            </div>
        </div>
        <div class="header-content-frame">
            <div class="header-content">
                <h1>{{$t('Name')}}</h1> 
                <h1>{{$t('LastName')}}</h1>
                <h2>FRONTEND DEVELOPER</h2>
                <div class="icon-contact-frame">
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
                <div class="learn-more">
                    <div class="learn-more-button" @click="goContent()">{{$t('learnMore')}}</div>
                </div>
            </div>
            
        </div>
        <div id="header-menu-md" class="header-menu"> 
            <div @click="backHome()" style="cursor: pointer;"><b>{{$t('Name')}}</b> </div>
            <div class="icon-menu-header">
                <a aria-label="github" href="https://github.com/Saranyuuu" target="_blank" rel="noopener" class="icon-link">
                    <img src="/github-icon.png" alt="github-icon" class="icon-contact"/>
                </a>
                <a aria-label="email" href="mailto:saranyumax761@gmail.com" target="_blank" rel="noopener" class="icon-link">
                    <img src="/email-icon.png" alt="email-icon" class="icon-contact"/>
                </a>
                <a aria-label="phone" href="tel:+66984781350" target="_blank" rel="noopener" class="icon-link">
                    <img src="/phone-icon.png" alt="phone-icon" class="icon-contact"/>
                </a>
                <div id="change-language-header-menu-md" style="position: relative;" class="change-language-header">
                    {{this.$i18n.locale.toUpperCase()}} 
                    <div class="arrow-down-frame">
                        <div id="arrow-change-language-header-menu-md" class="arrow-down-language" />
                        <div id="menu-language-header-menu-md" class="menu-language-before">
                            <div @click="changePath($i18n.locale === 'en' ? '/th' : '/')">
                                {{this.$i18n.locale === 'en' ? 'TH' : 'EN'}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import $ from "jquery";

export default {
    data() {
        return {
            items: [
                { chooseLang: 'EN' },
                { chooseLang: 'TH' }
            ],
            language: 'EN'
        }
    },
    mounted() {

        $('#change-language-md').click(function(){
            $('#arrow-change-language-md').toggleClass('arrow-up-language');
            $('#menu-language-md').toggleClass('menu-language')
        });

        $('#change-language-header-menu-md').click(function(){
            $('#arrow-change-language-header-menu-md').toggleClass('arrow-up-language');
            $('#menu-language-header-menu-md').toggleClass('menu-language')
        })

        var $w = $(window).scroll( function(event) {
            var contentFrame = $("#content-frame-md").offset().top
            var heightOfHeader = $('#header-menu-md').height()

            if($w.scrollTop() > 100) {
                $('.learn-more-mouse').css({
                    'display': 'none'
                })
            }
            else {
                $('.learn-more-mouse').css({
                    'display': 'flex'
                })
            }

            if($w.scrollTop() <= (contentFrame - heightOfHeader)){
                $(".header-menu")
                .css({
                    "display": "none"
                });
            }
            else {
                $(".header-menu")
                .css({
                    "display": "flex"
                });
            }
        });
    },
    methods: {
        backHome() {
            $('html, body').animate({
                scrollTop: $("#header-frame-md").offset().top
            }, 500);
        },
        goContent() {
            $('html, body').animate({
                scrollTop: $("#content-frame-md").offset().top
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
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    background-color: #23253a;
    color: #ffffff;
}

.header-content-frame {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-content-frame {
    display: flex;
    justify-content: flex-start;
    width: 70%;
}

.header-content h1 {
    letter-spacing: 15px;
    font-size: 4rem;
    line-height: 1em;
}

.header-content h2 {
    margin-top: 11px;
    color: #ff5251;
    letter-spacing: 5px;
    font-size: 2rem;
}

.icon-contact-frame {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 32%;
}

.icon-contact {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    margin-right: 4px;
}

.learn-more {
    width: 100%;
    display: flex;
    margin-top: 2rem;
}

.learn-more-mouse-frame {
    position: absolute;
    top: 0rem;
    left: 5rem;
    width: 3rem;
    height: 100%;
    display: flex;
    align-items: center;
    animation: animate 1.5s infinite;
}

.learn-more-mouse {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 15rem;
}

.img-mouse {
    filter: invert(100%);
    object-fit: contain;
    width: 3rem;
    height: 3rem;
}

.line-arrow {
    transform: rotate(90deg);
    width: 6rem;
    border-top: 1px solid rgba(255,255,255,1);
}

.full-arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 2rem;
    height: 2.929rem;
    justify-content: space-between;
}

.arrow-down {
    border-right: 1px solid rgba(255,255,255,1);
    border-bottom: 1px solid rgba(255,255,255,1);
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}

.text-scroll {
    color: rgba(255,255,255,1);
    transform: rotate(90deg);
    opacity: 0.2;
    font-size: 1rem;
    letter-spacing: 5px;
}

.learn-more-button {
    /* margin-left: 3rem; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13rem;
    height: 2.5rem;
    color: rgba(255,255,255,1);
    font-weight: 700;
    font-size: 12px;
    border: 2px solid;
    letter-spacing: 3px;
    cursor: pointer;
}

.learn-more-button:hover {
    color: #ffffff;
    background-color: #ff5251;
    transition: 0.3s;
}

.header-menu {
    position: fixed;
    padding: 0rem 4rem;
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