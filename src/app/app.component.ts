import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(){
    this.audio = new Audio("../assets/je.mp3");
    this.audio.load();
    this.audio.volume = 0.4;
  }
  private audio;
  private started:boolean = false;
  startTimer(): void {
    if (this.started) return;
    this.started = true;
    this._setNext();
  }

  private _setNext() {
    this.audio.play();
    this._setClock();
    setTimeout(() => {
      this.index += 1;
      if (this.index > this.exercises.length - 1) {
        this.index = 0;
        this.current += 1;
        if (this.current > this.times) return;
      }
      this._setNext();
    }, this.exercises[this.index].time * 1000);
  }

  private _setClock() {
    if (this.inter)
      clearInterval(this.inter);

    this.timer = this.exercises[this.index]?.time;
    this.inter = setInterval(() => {
      this.timer -= 1;
    }, 1000);
  }

  title = 'thiner';

  public index = 0;
  public timer: number = 0;
  private inter: any = null;

  private times = 4;
  public current = 1;

  public exercises = [{
    "name": "Prepare",
    "time": 10
  }, {
    "name": "Skaters  1/8", //1
    "time": 20
  }, {
    "name": "Rest",
    "time": 10
  }, {
    "name": "Sentadillas  2/8", //2
    "time": 20
  }, {
    "name": "Rest",
    "time": 10
  }, {
    "name": "Salto, burpee codos  3/8", //3
    "time": 20
  }, {
    "name": "Rest",
    "time": 10
  }, {
    "name": "Mano al cielo, codo al suelo  4/8", //4
    "time": 20
  }, {
    "name": "Rest",
    "time": 10
  }, {
    "name": "Jumping jacks  5/8", //5
    "time": 20
  }, {
    "name": "Rest",
    "time": 10
  }, {
    "name": "Plancha  6/8", //6
    "time": 20
  }, {
    "name": "Rest",
    "time": 10
  }, {
    "name": "Sentadillas con salto 7/8", //7
    "time": 20
  }, {
    "name": "Rest",
    "time": 10
  }, {
    "name": "8 flexiones  8/8", //8
    "time": 20
  }, {
    "name": "Descansa mucho", //8
    "time": 50
  },
  ]
}
