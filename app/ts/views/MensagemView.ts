class MensagemView extends View <string>{

    template(msg:string):string{

        return `<p class= "alert alert-info"> ${msg} </p>`;

    } 


}