import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Inote} from '../interfaces/inote';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient: HttpClient) { }
  getNotes() {
    return this.httpClient.get<Inote[]>('http://localhost:3000/notes');
  }
  createNote(formData: any) {
    return this.httpClient.post('http://localhost:3000/notes', formData);
  }
  deleteNote(noteId) {
    return this.httpClient.delete(`http://localhost:3000/notes/${noteId}`);
  }
}
