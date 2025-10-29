import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports : [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  name : string = "FEDLearning";
  topic : string = "data binding";
  // pic : string = "https://i.imgur.com/OB0y6MR.jpg";
  random : string = "";
  onSave(){
    console.log("Data Saved Successfully..");
    console.log("Data Saved Successfully..");
    alert("Data Saved Successfully..");
    console.log("Data Saved Successfully..");
    console.log("Data Saved Successfully..");
     console.log("Testing conflicts..");
  }
  onChange(){
    console.log("Data Saved Successfully..");
    console.log("Data Saved Successfully..");
    console.log("Country has Changed..");
    console.log("Data Saved Successfully..");
    console.log("Data Saved Successfully..");
    alert("Testing conflicts....");
  }
}

