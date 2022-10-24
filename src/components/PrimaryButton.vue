<template>
    <a class="flex justify-center hover:cursor-pointer" :href="visitUrl? visitUrl : ''" :target="visitUrl?'_blank':'_self'">
        <div class="border border-secondary pr-1 py-1">
            <div class="btn-custom font-bold text-white -ml-2 py-3 px-8 ">
                <slot />
            </div>
        </div>
    </a>
</template>
  
<script>
export default {
    name: "PrimaryButton",
    props: {
        visitUrl:false,
    }
}
</script>

<style>
    .btn-custom {
        background: linear-gradient(90.5deg, #FFAC3B 15.01%, #FB505E 97.83%);
    }
    .btn-custom:hover {
        background: linear-gradient(90.5deg, #fdb166 15.01%, #fa717d 97.83%);
    }
</style>