import { NegociacaoController } from './controllers/NegociacaoController' 

const controller = new NegociacaoController();

$(".form").submit(controller.adiciona.bind(controller));

$("#importar").click(controller.importData.bind(controller));

//document
//    .querySelector(".form")
//    .addEventListener('submit', controller.adiciona.bind(controller)); 