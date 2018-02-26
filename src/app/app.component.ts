/*tslint:disable*/
import {Component} from '@angular/core';
import {ServicoService} from './servico.service';

@Component({
    selector: 'ac-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ac';

    constructor(private servicoService: ServicoService) {
        this.servicoService.getServicos()
            .subscribe(dados => console.log(dados));
    }

    postServico() {
        this.servicoService.postServico()
            .subscribe(dados => console.log(dados));
    }

    deleteServico(id: string){
        this.servicoService.deleteServico(id).subscribe();
    }
}
