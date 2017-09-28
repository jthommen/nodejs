// Angular module imports 
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

// Rxjs import to handle async events in the browser
import 'rxjs/add/operator/toPromise';

// Todo model import
import { Todo } from './todo';

@Injectable()
export class TodoService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private todosApiUrl = '/api/todos/test';

    constructor(private http: Http) {}

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.todosApiUrl)
            .toPromise()
            .then(response => response.json() as Todo[])
    }
}