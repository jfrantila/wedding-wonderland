<template>
    <div id="services" :class="[isOnHome ? null : 'mt-4', 'services-div']">
        <h2 class="heading">What I Offer</h2>
        <div class="cols">
            <div class="col">
                <div class="container">
                    <div class="front picture1">
                        <div class="inner">
                            <p>No limits wedding photography</p>
                            <span>Committed to Quality</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <p>I offer wedding photography services all across Finland. For customers outside Finland, feel
                                free to
                                ask for an offer! I am ready to travel worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="container">
                    <div class="front picture2">
                        <div class="inner">
                            <p>Full day wedding photography</p>
                            <span>Exceeding Expectations</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <p>I will capture your wedding day within the required duration - from a few hours to a whole
                                day. All tailored according to your wishes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="container">
                    <div class="front picture3">
                        <div class="inner">
                            <p>Wedding portraits</p>
                            <span>Personalized Approach</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <p>I am here to make your wedding day memorable, so you can look back after decades and
                                recapture the emotions and love from that special day. This includes wedding portraits and
                                photoshoots to your liking.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services',
    props: {
        isOnHome: Boolean
    }
}
</script>

<style>
.picture1 {
    background-image: url('../assets/5.jpg')
}

.picture2 {
    background-image: url('../assets/13.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.picture3 {
    background-image: url('../assets/11.jpg');
}

.services-div {
    width: 100vw;
    box-sizing: border-box;
    align-self: center;
    padding-top: 2rem;
}

.cols {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}

.col {
    width: calc(25% - 2rem);
    height: calc(25%);
    margin: 1rem;
}

.container {
    transform-style: preserve-3d;
    perspective: 1000px;
}

.front,
.back {
    background-size: cover;
    background-position: center;
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    backface-visibility: hidden;
    text-align: center;
    min-height: 280px;
    height: auto;
    border-radius: 10px;
    color: #fff;
}

.back {
    background: radial-gradient(#827267c7 0%, #3b3532ce);
}

.front:after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    opacity: .6;
    background-color: #000;
    backface-visibility: hidden;
    border-radius: 10px;
}

.container .front:hover,
.container .back:hover {
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.inner {
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
    outline: 1px solid transparent;
    perspective: inherit;
    z-index: 2;
}

.container .back {
    transform: rotateY(180deg);
    transform-style: preserve-3d;
}

.container .front {
    transform: rotateY(0deg);
    transform-style: preserve-3d;
}

.col:hover .back {
    transform: rotateY(0deg);
    transform-style: preserve-3d;
}

.col:hover .front {
    transform: rotateY(-180deg);
    transform-style: preserve-3d;
}

.front .inner p {
    margin-bottom: 2rem;
    position: relative;
}

.front .inner p:after {
    content: '';
    width: 4rem;
    height: 2px;
    position: absolute;
    background: #C6D4DF;
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -.75rem;
}

.front .inner span {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
}

.heading {
    padding-bottom: 0.5rem;
    padding-top: 1.5rem;
}

@media screen and (max-width: 57rem) {
    .cols {
        display: block;
    }

    .col {
        width: 100%;
        margin: 0 0 2rem 0;
    }
}

@media screen and (max-width: 48rem) {

    .cols {
        display: block;
    }

    .col {
        width: 100%;
        margin: 0 0 2rem 0;
    }
}

@media screen and (max-width: 32rem) {
    .cols {
        display: block;
    }

    .col {
        width: 100%;
        margin: 0 0 2rem 0;
    }
}
</style>
