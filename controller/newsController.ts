import NewsService from '../service/newsService';
import * as HttpStatus from 'http-status';
import Helper from '../infra/helper';

class NewsController
{
    get(req, res) {
        NewsService.get()
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    getById(req, res) {
        const _id = req.params.id;

        NewsService.getById(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    create(req, res) {
        let vm = req.body;
        
        NewsService.create(vm)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, "Noticia Cadastra com Sucesso"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    update(req, res) {
        const _id = req.params.id;

        let vm = req.body;
        
        NewsService.update(_id, vm)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, `Noticia ${vm.title} Atualizada com Sucesso`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    delete(req, res) {
        const _id = req.params.id;

        NewsService.delete(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, `Noticia Deletada com Sucesso`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

}

export default new NewsController();