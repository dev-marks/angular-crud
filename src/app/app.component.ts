/*tslint:disable*/
import {Component} from '@angular/core';
import {ServicoService} from './servico.service';
import {Servico} from './servico.model';

@Component({
    selector: 'ac-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    servicos: Servico[]
    servico: Servico = new Servico()

    constructor(private servicoService: ServicoService) {
        this.servicoService.getServicos()
            // .do(dados => console.log(dados))
            .subscribe(servicos => this.servicos = servicos)
    }

    postServico() {
        /*let servico = {
            descricao: "Salvando2",
            nome: "Angular",
            preco: "3",
        }*/

        this.servicoService.postServico(this.servico)
            .subscribe(dados => console.log(dados));
    }

    deleteServico(id: string){
        this.servicoService.deleteServico(id)
            .subscribe();
    }
}
