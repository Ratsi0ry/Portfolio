```vue
<template>
  <section id="home" class="hero">

    <div class="hero-content">

      <span class="hello">Bonjour, je suis</span>

      <h1>
        Tsiory<span class="dot">.</span>
      </h1>

      <h2>
        Je construis. Je casse. J'apprends.
        <span>Je recommence.</span>
      </h2>

      <p class="description">
        Étudiant en L2 a l'ENI, passionné par le développement, j’imagine. Je code. J’expérimente. Je progresse.
      </p>

      <div class="interests">
        <span>Développement</span>
        <span>Linux</span>
        <span>Technologie</span>
        <span>Curiosité</span>
      </div>

    </div>

    <div class="photo">
        <img src="" alt="photo">
    </div>

  </section>
</template>

<style scoped>

.hero {
  min-height: calc(100vh - 80px);
  width: 85%;
  max-width: 1300px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 700px;
  z-index: 2;

  animation: fadeUp 0.9s ease forwards;
}

.hello {
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  opacity: 0.6;
}

h1 {
  margin: 0;
  font-size: clamp(5rem, 10vw, 9rem);
  line-height: 0.9;
  font-weight: 800;
  letter-spacing: -0.07em;
}

.dot {
  color: #8b5cf6;
}

h2 {
  margin-top: 2rem;
  max-width: 650px;

  font-size: clamp(1.8rem, 3vw, 3rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

h2 span {
  opacity: 0.45;
}

.description {
  max-width: 570px;
  margin-top: 1.5rem;
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.65;
}

.interests {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;

  margin-top: 3rem;
}

.interests span {
  padding: 0.4rem 0.8rem;

  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 50px;

  font-size: 0.8rem;
  opacity: 0.55;

  transition: all 0.25s ease;
}

.interests span:hover {
  opacity: 1;
  transform: translateY(-2px);
}

img {
        width: 300px;
        margin: 50px auto 0;
    }

</style>
