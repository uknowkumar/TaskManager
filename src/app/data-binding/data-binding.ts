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
     name1 : string = "FEDLearning";
    topic1 : string = "data binding";
    console.log("Data Save");
    alert("Data Saved Successfully..");
    console.log("Data Save");
  }

  onChange(){
    name2 : string = "FEDLearning";
    topic2 : string = "data binding";console.log("Country has Changed..");
    alert("Country has Changed..");
    console.log("Country has Changed..");
  }
}
