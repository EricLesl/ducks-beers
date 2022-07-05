import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IBill } from 'src/app/interfaces/ibill';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  amount: number = 0;
  serialNums: string = "";
  description: string = "";

  @Input() showProps: any;
  constructor(private firestore: AngularFirestore, public authService: AuthService) { }

  ngOnInit(): void {
  }

  goBack() {
    this.showProps.showExpenses = false;
    this.showProps.showMainMenu = true;
  }

  submit() {
    if (this.description == null || this.description == "") {
      alert("You need to enter a description of what you bought.");
      return;
    }
    if (this.serialNums == "") {
      alert("Enter the serial numbers of the bills you used to make this purchase, separated by commas.");
      return;
    }
    if (this.amount < 1) {
      alert("Invalid amount entered. Enter how much money you spent!");
      return;
    }

    let serialArr = this.serialNums.split(",");

    serialArr.forEach(serial => {
      if (serial != "") {
        let bill = {
          userid: this.
        } as IBill;
        this.firestore.collection('cards').doc(card.cardid).update(card).then(d => {
          alert("Beer has been chalked!");
          this.goBack();
        })
      }
    });
  }
}
