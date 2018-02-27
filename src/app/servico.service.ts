/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {Servico} from './servico.model';

@Injectable()
export class ServicoService {
    url = 'http://localhost:8081/api/servicos';

    constructor(private http: HttpClient) {
    }

    getServicos(): Observable<Servico[]> {
        return this.http.get<Servico[]>(this.url);
    }

    postServico(servico?: Servico): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        const jsonServico = JSON.stringify(servico)
        const body = `{"servico":${jsonServico}}`;

        return this.http.post<Servico>(this.url, body, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteServico(id?: string): Observable<{}> {
        let httpOptions = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            body: new HttpParams().set('idservico', id)
        };

        return this.http.delete(this.url, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('Ocorreu um erro:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return new ErrorObservable(
            'Something bad happened; please try again later.');
    };

}
