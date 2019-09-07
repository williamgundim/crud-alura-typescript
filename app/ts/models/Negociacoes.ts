import { Negociacao } from './Negociacao'

export class Negociacoes{

    //informa que o array irá possuir informações do 
    //tipo Negociacao, que é uma classe com data, valor, quantidade.
    //A vantagem de criar dessa forma é que qualquer outro tipo de informação, o typescript não vai deixar. 
   private _negociacoes: Array<Negociacao> = [];

   //void - informa que o método não retornará nada. 
   adiciona(negociacao: Negociacao): void{

        this._negociacoes.push(negociacao);
    }

    //Retorno do método é um array da classe Negociacao.
    forArray(): Negociacao[] {

        //protege o array para criar uma nova referencia.
        return [].concat(this._negociacoes);

    }
}