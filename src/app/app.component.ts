import { Component, ViewChild,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  vowels = [
    {letter:'a',count:0},
    {letter:'e',count:0},
    {letter:'i',count:0},
    {letter:'o',count:0},
    {letter:'u',count:0}
  ]

  @ViewChild('heading',{static:true}) heading:any;
  @ViewChild('heading2',{static:true}) heading2:any;
  @ViewChild('heading3',{static:true}) heading3:any;
  ngOnInit(): void {
    this.heading.nativeElement.innerHTML = '<h1> Analyze Vowels</h1>';
    this.heading2.nativeElement.innerHTML = '<h2> Results</h2>';
    this.heading3.nativeElement.innerHTML = '<h3> Vowels</h3>';
    //console.log(this.heading.nativeElement);
    
  }

  analyzeWord(textInput : String){
    let acount = 0;
    let ecount = 0;
    let icount = 0;
    let ocount = 0;
    let ucount = 0;
    for(let letter of textInput){
      if(letter === 'a'){
        acount ++;
      }
      if(letter === 'e'){
        ecount ++;
      }
      if(letter === 'i'){
        icount ++;
      }
      if(letter === 'o'){
        ocount ++;
      }
      if(letter === 'u'){
        ucount ++;
      }
    }
    this.vowels=[
      {letter:'a',count:acount},
      {letter:'e',count:ecount},
      {letter:'i',count:icount},
      {letter:'o',count:ocount},
      {letter:'u',count:ucount},
    ];
  }
}
