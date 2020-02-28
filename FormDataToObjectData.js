const FormDataToObjectData = function(){
    let $$ = this;
    this.set = function(str, option){
        let formdata = str.split("&");
        for(var x=0;x<formdata.length;x++){
            let key = formdata[x].split("=")[0];
            let data = formdata[x].split("=")[1];
            this[key] = data;
        }
        return (option == "raw") ? this.data() : this;
    },
    this.data = function(){
        let r = {};
        for(var x=0;x<Object.keys($$).length;x++){
            let key = Object.keys($$)[x];
            if(typeof $$[key] != 'function'){
                r[key] = $$[key];                    
            }
        }
        return r;
    }
}
