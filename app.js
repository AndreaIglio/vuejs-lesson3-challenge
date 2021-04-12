const app = Vue.createApp({


    data(){
        return{
            output: '',
            confirmedOutput: '',
        }
    },
    methods: {
        showAlert(){
            alert('ciao');
        },
        showValue(){

            this.output = event.target.value;

        },
        showValueEnter(){
            this.confirmedOutput = this.output;
        }
    },


}).mount('#assignment');