import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private matDialog:MatDialog
  ){}

  openDialog() {
    const dialogRef = this.matDialog.open(RegisterDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector:'register-dialog',
  templateUrl:'./register-dialog.html'
})
export class RegisterDialog{} 