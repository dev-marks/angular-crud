/*tslint:disable*/
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ServicoService {
  url = 'http://localhost:8081/api/servicos';

  constructor(private http: HttpClient) { }

    getServicos() {
        return this.http.get(this.url);
    }

    postServico(): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };

        const body = '{"servico":{"descricao":"Teste Angular","nome":"Angular","preco":"11"}}';

        return this.http.post<any>(this.url, body, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteServico(id?: string): Observable<{}> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            }),
            httpParams: new HttpParams()
                .append("idservico", "7")
        };

        return this.http.delete(this.url, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }



    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return new ErrorObservable(
            'Something bad happened; please try again later.');
    };

}
