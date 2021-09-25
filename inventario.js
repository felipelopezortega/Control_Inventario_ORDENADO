export default class Inventario{

    constructor() {
        this._inventario = new Array();
    }

    add(product){
        if(this.search(product._getCode()) == null && this._inventario.length < 20){
            this._inventario.push(product);
            this._order(this._inventario);            
        }
        else {
            return null;
        }
    }

    delete(code){
        let pos = this._searchPosition(code);
        if(pos > -1){
            for(let i = pos; i < this._inventario.length - 1; i++){
                this._inventario[i] = this._inventario[i + 1];
            }
            this._inventario.pop();
        }
        else{
            return null;
        }
    }

    search(code){
        for(let i = 0; i < this._inventario.length; i++){
            if(code == this._inventario[i]._getCode()){
                return this._inventario[i];
            }
        }
        return null; 
    }

    list(){
        return this._inventario;
    }

    invertList(){
        for(let i = 0, x = this._inventario.length - 1; i < this._inventario.length/2; i++, x--){
            let var1 = this._inventario[i];
            let var2 = this._inventario[x];

            this._inventario[i] = var2;
            this._inventario[x] = var1;
        }
        return this._inventario;
    }

    _searchPosition(code){
        if(this.search(code) != null){
            for(let i = 0; i <= this._inventario.length; i++){
                if(this._inventario[i]._getCode() == code){
                    return i;
                }
            }
        }
        return -1;
    }

    _order(items){
        let length = items.length;  
            for (let i = 0; i < length; i++) { 
                for (let j = 0; j < (length - i - 1); j++) { 
                        if(items[j]._getCode() > items[j+1]._getCode()) {
                                let tmp = items[j]; 
                                items[j] = items[j+1]; 
                                items[j+1] = tmp; 
                    }
                }        
            }
    }





}