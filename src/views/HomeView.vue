<script setup>
    import Competences from '@/components/Competences.vue';
    import Projets from '@/components/Projets.vue'
    Competences
</script>

<template>
    <h1 class="text-center text-5xl mt-5">Bienvenue sur le portfolio de Enzo RALUY--MARLIN</h1>

    <div class="flex flex-col items-center gap-4 mt-8">
        <div class="avatar">
            <div class="w-35 rounded-xl center">
                <img src="/public/PFPMsQuest.png"/>
            </div>
        </div>
    </div>

    <p class="text-lg mt-8 text-center">
        Je suis en BTS SIO (SLAM) passionné par la création de sites web innovants et de contenu liée au jeux vidéo. Sur ce portfolio, vous découvrirez mes projets, mes compétences et mon parcours professionnel. N'hésitez pas à me contacter pour toute collaboration ou opportunité.
    </p>

    <h1 class="text-center text-4xl mt-5">Mes Projets</h1>

    <div class="flex flex-col items-center gap-4 justify-center @media (min-width: 768px) { flex-direction: row; justify-content: center; items-center } mt-8 pb-10">
        <Projets />
    </div>

    <h1 class="text-center text-4xl mt-5">Mes Compétences</h1>
    <div class="flex flex-col items-center gap-4 justify-center @media (min-width: 768px) { flex-direction: row; justify-content: center; items-center } mt-8 pb-10">
        <Competences/>
    </div>
    
</template>