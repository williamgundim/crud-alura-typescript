import { View } from './View'
import { Negociacao } from '../models/Negociacao'

export class NegociacoesView extends View <Array<Negociacao>> {

    template(aLista:Array<Negociacao>):string {

            return `

            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
            
                <tbody>
                    ${aLista.map(item =>{
                    
                        let data = item.data.getDate() + '/' + (item.data.getMonth()+1) + '/' + item.data.getFullYear()

                        return `

                            <tr>
                                <td>${data}</td>
                                <td>${item.quantidade}</td>
                                <td>${item.valor}</td>
                                <td>${item.volume}</td>
                            </tr>

                        `

                    } ).join('') }
                </tbody>
            
                <tfoot>
                </tfoot>
            </table>
            `
        }


    }