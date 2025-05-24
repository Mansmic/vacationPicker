export default {
    methods: {
        getImgUrl(img) {
            console.log("image URL creator aangeroepen met mixin");
            return new URL('../assets/countries/' + img, import.meta.url).href
        }
    },
    created() {
        console.log('component created() called in mixin getImgUrl')
    }
}