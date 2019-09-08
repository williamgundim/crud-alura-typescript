
//Deve retornar outra função
export function tempoExecucao() {

    return function(target: any, propertKey:string, descriptor: PropertyDescriptor){
        
        const metodo = descriptor.value;
        let tempo1:number;
        let tempo2:number;

        tempo1 = performance.now();      
        descriptor.value = function(...args:any[] ) {
            tempo2 = performance.now();    
            
            console.log('tempo de execucao: ' + (tempo2 - tempo1) ) 
            const retorno = metodo.apply(this, args);
            return retorno;
        
        }

        return descriptor;
    }

}