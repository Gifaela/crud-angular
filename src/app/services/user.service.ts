import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "https://sheet.best/api/sheets/40377dfe-b7c5-4ab5-99b1-b9d1cb5ef59c"; // giulia
  // apiUrl = 'https://sheet.best/api/sheets/8e50c966-bae6-4f58-b00a-40b47b1faa5c' // suely
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  // C.R.U.D  CREATE, READ, UPDATE, DELETE

  // Retorna a lista de usuários READ 
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Lista usuário uníco 
  getUser(id: string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }

  //Salva usuário no banco CREATE
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  // Edita usuário UPDATE
  putUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  // Excluir o usuário do banco DELETE
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

}