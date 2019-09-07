
//Deve retornar outra função
export function tempoExecucao() {

    return function(target: any, propertKey:string, descriptor: PropertyDescriptor){
        
        const metodo = descriptor.value;

        descriptor.value = function(...args:any[] ) {

            const retorno = metodo.apply(this, args);
            return retorno;
        }

        return descriptor;
    }

}