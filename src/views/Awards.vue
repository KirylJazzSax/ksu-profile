<template>
    <div class="awards-container">
        <img class="image-hidden" src="../assets/ksu-back.jpg" alt="">
        <ul class="list-group awards-list">
            <li class="list-group-item list-group-item-action award" :key="index" v-for="(award, index) in awards" >{{ award }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Awards",
        data() {
            return {
                imageLoading: true,
                awards: [
                    '2020 Silver Award at AES Virtual Vienna Recording Competition (Immersive Category)',
                    '2020 Gold Award at AES Virtual Vienna Recording Competition (Traditional Acoustic)',
                    '2019 John Bradley Prize „Excellence in music recording”',
                    '2018 Bronze Award at the „Europe\'s Second Student 3D Audio Production Competition in Ambisonics“',
                    '2018 Award of the Bruce Swedien Scholarship Fund „Music First!“ (AES)',
                    '2018 Bronze Award at Student Recording Competition (142th AES convention)',
                    '2018 CIRMMT Student Research Award',
                    '2017 Schulich Scholarship, McGill Student Excellence Award',
                    '2017 “Gaude Polonia” (Scholarship Program of the Polish Ministry of Culture)',
                    '2016 Gold award at Student Recording Competition (140th AES convention)',
                    '2006 The 3d place at the competition of piano duets “Debut”'      
                ]
            }
        },
        mounted() {
            const awardPickture = this.$el.querySelector('.image-hidden')
            awardPickture.onload = () => {
                awardPickture.parentNode.style.backgroundImage = `url('${awardPickture.src}')`
                this.imageLoading = false
            }
        }
    }
</script>

<style lang="scss">
    .awards-container {
        padding: 20px;
        background-size: cover;

        .image-hidden {
            display: none;
        }

        .awards-list {
            width: 70%;

            .list-group-item {
                background-color: rgba(255, 255, 255, 0.2);

                &:hover {
                    background-color: rgba(255, 255, 255, 0.5);
                    cursor: pointer;                
                }
            }
            .award {
                text-align: left;
            }
        }
    }
    
</style>
