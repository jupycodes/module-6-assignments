import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NavController, ToastController} from '@ionic/angular';
import {NotesService} from "../../services/notes.service";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  addNote: FormGroup = new FormGroup({
    noteName: new FormControl(''),
    noteHeader: new FormControl(''),
    noteDetails: new FormControl(''),
    noteImportance: new FormControl('', [Validators.required])
  });

  constructor(private toastCtrl: ToastController, private navCtrl: NavController, private noteService: NotesService) { }

  ngOnInit() {
  }
  async add_note() {
    this.noteService.createNote(this.addNote.value).subscribe(() => {
      this.addNote.reset();
    });
    const toast = await this.toastCtrl.create({
      message: 'New note added successfully',
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
    await this.navCtrl.navigateBack('/tabs/tab3');
  }

  return() {
    this.navCtrl.navigateBack('/tabs/tab3');
  }

}
