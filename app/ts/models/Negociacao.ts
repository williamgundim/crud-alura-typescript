class Negociacao{
   
    constructor(private _quantidade:number, private _data:Date, private _valor:number){

    }

    get quantidade(){
        return this._quantidade;
    }

    get data() {
        return this._data;
    }

    get valor() {
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;        
    }
} 