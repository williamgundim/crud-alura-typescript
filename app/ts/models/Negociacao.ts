export class Negociacao{
   
    constructor(readonly quantidade:number, readonly data:Date, readonly valor:number){

    }

    get volume(){
        return this.quantidade * this.valor;        
    }
} 