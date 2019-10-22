<template>
    <div>
        
        <ul>
            
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        this.$http.get("https://www.easy-mock.com/mock/5daef170374f867d204a19fc/classfity/fen").then(
            res=>{
                console.log(res)
            }
        )
    },
}
</script>
<style lang="scss">

    
</style>