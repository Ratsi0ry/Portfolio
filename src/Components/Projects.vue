<template>

    <section id="Projects">       
            <Carousel v-bind="carouselCfg">
                <Slide v-for="image in img" :key="image.id">
                    <img :src="image.url" alt="image" class="img">
                </Slide>

                 <!-- btn precedent/suivant  -->
                <template #addons>
                    <Navigation/>
                </template>
            </Carousel>
        </section>

</template>

<script setup>

    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide, Navigation, SLIDE_EFFECTS } from 'vue3-carousel'
    import 'iconify-icon'

    const img = [
        {id: 1, url: 'https://picsum.photos/id/10/800/600'},
        {id: 1, url: 'https://picsum.photos/id/20/800/600'},
        {id: 1, url: 'https://picsum.photos/id/30/800/600'},
        {id: 1, url: 'https://picsum.photos/id/40/800/600'},
        {id: 1, url: 'https://picsum.photos/id/50/800/600'}

    ]

     const carouselCfg = {
        height: 200,
        itemsToShow: 3.5,
        wrapAround: true,
     }

</script>

<style scoped>

    :root{
    --carousel-transition: 300ms;
    --carousel-opacity-inactive: 0.7;
    --carousel-opacity-active: 1;
    --carousel-capacity-opacity-near: 0.9;
    --carousel-background-color: #242424;
    }

    .carousel{
        --vc-nav-background: rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
    }

    .img{
        border-radius: 8px;
        width: 100%;
        height:100%;
        object-fit: cover;
    }

    .carousel-viewport{
        perspective: 2000px;
    }

    .carousel__track{
        transform-style: preserve-3d;
    }

    .carousel__slide--sliding{
        transition:
        opacity var(--carousel-transition),
        transform var(--carousel-transition);
    }

    .carousel.is-dragging .carousel__slide {
        transition:
        opacity var(--carousel-transition),
        transform var(--carousel-transition);
    }

    .carousel__slide{
        opacity: var(--carousel-opacity-inactive);
        transform: translateX(10ox) rotateY(-12deg) scale (0.9);
    }

    .carousel__slide--prev{
        opacity: var(--carousel-opacity-near);
        transform: rotateY('-10deg') scale(0.95);
    }

    .carousel__slide--active{
        opacity: var(--carousel-opacity-active);
        transform: rotateY(0) scale(1);
    }

    .carousel__slide--next{
        opacity: var(--carousel-opacity-near);
        transform: rotateY(10deg) scale(0.95);
    }

    .carousel__slide--next ~ .carousel__slide{
        opacity: var(--carousel-opacity-inactive);
        transform: translateY(-10px) rotate(12deg) scale(0.9);
    }

</style>