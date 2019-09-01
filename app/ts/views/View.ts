abstract class View <T> {

    //protected - apenas a classe e os seus filhos podem acessar.
    protected _element:JQuery;

    constructor(selector:string){

        this._element = $(selector);

    }

    update(model:T):void{

        this._element.html(this.template(model));

    }

    abstract template(msg:T):string;

}