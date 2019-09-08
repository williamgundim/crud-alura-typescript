import {Negociacao,NegociacaoAPI} from '../models/index'

export class NegociacaoService{

    getAPI(): Promise<Negociacao[]> {

        return fetch('http://localhost:8080/dados')
            .then(result => result.json())
            .then((data: NegociacaoAPI[]) => 
                data
                    .map(item => new Negociacao( item.vezes, new Date(),  item.montante))
            )

}