import { Negociacao,Negociacoes,NegociacaoAPI } from '../models/index'
import { MensagemView,NegociacoesView } from '../views/index'
import {tempoExecucao, domInject} from '../helpers/index'
import {NegociacaoService} from '../services/index'

export class NegociacaoController{

    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade') 
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes;
    private _view = new NegociacoesView("#negociacoesView");
    private _msgView = new MensagemView("#mensagemView");
    private _serviceAPI = new NegociacaoService(); 

    constructor(){
    }

    @tempoExecucao()
    //Método Adiciona para criar os valores no model e na view.
    adiciona(event: Event){
        
        //não atualiza o form no submit.
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ',' ));
        
        if (data.getDay() != DiadaSemana.Sabado && data.getDay() != DiadaSemana.Domingo) {
        
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
        else
        {
            this._msgView.update("Negociacoes apenas de segunda a sexta.")
        }

    }

    //Método para importar dados da API.
    importData(){

       this._serviceAPI
        .getAPI()
        .then( negociacoes => {
                
                negociacoes.forEach(negociacao => 
                    this._negociacoes.adiciona(negociacao))
            } );

            this._view.update(this._negociacoes.forArray());
            this._msgView.update("Importado com sucesso!")

    }

}

//Enum utilizado para numerar e facilitar a identificação dos numeros.
enum DiadaSemana{

    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}