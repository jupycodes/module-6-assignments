import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {NotesService} from '../services/notes.service';
import {Inote} from '../interfaces/inote';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  notes;
  constructor(private navCtrl: NavController, private noteService: NotesService) {
    noteService.getNotes().subscribe((results: Inote[]) => {
      this.notes = results;
    }, (err) => {
      console.log(err);
    });
  }

  addNote(){
    this.navCtrl.navigateForward('add-note');
  }

  ngOnInit(): void {
  }

}
