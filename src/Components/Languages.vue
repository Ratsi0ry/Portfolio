<template>
    <section id="Languages">
        <h2>Langues</h2>
        
        <div class="languages-grid">
            <div class="skill2">         
                <div class="lang-header">
                    <span>Anglais</span>
                    <span>75%</span>
                </div>
                <div class="bar">
                    <div class="progress-bar2" style="width: 70%;"></div>
                </div>
            </div>

            <div class="skill2">         
                <div class="lang-header">
                    <span>Français</span>
                    <span>80%</span>
                </div>
                <div class="bar">
                    <div class="progress-bar2" style="width: 80%;"></div>
                </div>
            </div>

            <div class="skill2">         
                <div class="lang-header">
                    <span>Malagasy <span class="native">(Maternel)</span></span>
                    <span>85%</span>
                </div>
                <div class="bar">
                    <div class="progress-bar2" style="width: 85%;"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #Languages {
        width: 90%;
        max-width: 1200px;
        margin: 50px auto 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    h2 {
        color: var(--indigo-12);
        margin-bottom: 20px;
        font-size: 1.75rem;
    }

    .languages-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(250px, 1fr));
        gap: 20px;
    }

    .skill2 {
        background: var(--indigo-2);
        border: 1px solid var(--indigo-4);
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        gap: 12px;
        transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .skill2:hover {
        transform: translateY(-3px);
        border-color: var(--indigo-6);
    }

    .lang-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--indigo-12);
        font-weight: 600;
        font-size: 0.95rem;
    }

    .native {
        font-size: 0.8rem;
        color: var(--indigo-11);
        font-weight: normal;
    }

    .bar {
        width: 100%;
        height: 10px;
        background: var(--indigo-4);
        border-radius: 7px;
        overflow: hidden;
    }

    .progress-bar2 {
        height: 100%;
        background: var(--indigo-9);
        border-radius: 7px;
    }
</style>