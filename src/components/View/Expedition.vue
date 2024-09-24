<template>
    <div 
        class="expedition-detail-wrapper flex flex-column w-full h-full gap-lg"
        :class="this.class"
    >
        <div>
            <h1 class="font-md">{{ data?.name }}</h1>
            <p class="font-xsm o-half w-half">{{ data?.description }}</p>
        </div>
        <span></span>
        <div>
            <div class="flex gap-md">
                <h1 class="font-xsm">Expedition</h1>
                <p class="styled-frame-status color-brand-one rounded-sm p-sm font-xsm ">Local</p>
            </div>
        </div>

        <span></span>
        <div class="flex flex-column gap-sm">
            <h1 class="font-xsm">Faction</h1>
            <div class="flex gap-md">
                <h1 class="font-xsm">Name</h1>
                <p class="font-xsm o-half">{{ data?.faction?.name }}</p>
            </div>
            <div class="flex gap-md">
                <h1 class="font-xsm">Description</h1>
                <p class="font-xsm o-half">{{ data?.faction?.description }}</p>
            </div>
        </div>

        <span></span>
        <div class="flex flex-column gap-sm">
            <h1 class="font-xsm">Reports</h1>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{

        }
    },
    props: {
        class: {
            type: String,
            default: ""
        },
        data: {
            type: Array,
            default: () => {}
        }
    }
}

</script>

<style lang="scss" scoped>

.expedition-detail-wrapper{
    padding: 25px;

    span{
        width: 100%;
        border-bottom: 1px solid var(--color-brand-five);
    }

    .styled-frame-status{
        width: 100px;
        text-align: center;
        background: var(--color-brand-three);
    }

}

</style>