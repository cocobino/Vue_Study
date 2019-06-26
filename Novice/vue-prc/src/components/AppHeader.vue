<template>
    <header>
        <h1> Header </h1>
        <button v-on:click="sendEvent">send</button>
    </header>
</template>

<script>
export default {
    propsdata:{
        props:['propsdata'],
        methods:{
            sendEvent: function(){
                console.log("log")
                this.$emit('renew');
            }
        }
    }
}
</script>

<style>

</style>
