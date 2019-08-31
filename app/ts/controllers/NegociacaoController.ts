class NegociacaoController{

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes;

    constructor(){

        this._inputData = <HTMLInputElement>document.querySelector("#data");
        this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this._inputValor = <HTMLInputElement>document.querySelector("#valor"); 
    }

    //Método Adiciona para criar os valores no model e na view.
    adiciona(event: Event){
        
        //não atualiza o form no submit.
        event.preventDefault();

        const negociacao = new Negociacao(
            parseInt(this._inputQuantidade.value),
            new Date(this._inputData.value.replace(/-/g,',')),
            parseFloat(this._inputValor.value)
        );


        this._negociacoes.adiciona(negociacao);

        this._negociacoes.forArray().forEach(x => { 
            console.log(x.quantidade) 
        });

    }

}