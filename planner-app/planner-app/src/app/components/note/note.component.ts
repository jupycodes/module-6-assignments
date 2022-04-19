import {Component, Input, OnInit} from '@angular/core';
import {Inote} from '../../interfaces/inote';
import {NotesService} from '../../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() note!: Inote;
  isShown = false;
  constructor(private noteService: NotesService) {
  }
  toggleContent(){
    this.isShown = !this.isShown;
  }

  deleteNote(noteId){
    this.noteService.deleteNote(noteId).subscribe(() => {
      console.log("note deleted");
    });
  }

  ngOnInit() {}

}
