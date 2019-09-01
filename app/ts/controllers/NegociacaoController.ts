class NegociacaoController{

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes;
    private _view = new NegociacoesView("#negociacoesView");
    private _msgView = new MensagemView("#mensagemView");

    constructor(){

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor"); 
    }

    //Método Adiciona para criar os valores no model e na view.
    adiciona(event: Event){
        
        //não atualiza o form no submit.
        event.preventDefault();

        const negociacao = new Negociacao(
            parseInt(this._inputQuantidade.val()),
            new Date(this._inputData.val().replace(/-/g,',')),
            parseFloat(this._inputValor.val())
        );


        this._negociacoes.adiciona(negociacao);

        //Atualiza a view com o novo registro adicionado.
        this._view.update( this._negociacoes.forArray() );

        //
        this._msgView.update("Adicionado com sucesso!");

    }

}