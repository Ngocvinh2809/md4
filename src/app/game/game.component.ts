import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  public isPlayingGame: boolean = false;
  public next: number = 1;
  public point: number = 0;
  public numbers: number[] = [];
  public timeleft: number = 0;
  public timeStart: any = false;
  public maxTime: number = 500;
  show: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.timeleft = this.maxTime;
    for (let i = 1; i <= 100; i++) {
      this.numbers.push(i);
      //xao tron mang
      this.numbers = this.shuffle(this.numbers);
    }
  }
  ngDoCheck(): void {
    if (this.isPlayingGame == true) {
      if (!this.timeStart) {
        this.timeStart = setInterval(() => {
          this.timeleft--;
        }, 1000);
      }
    }
    if (this.isPlayingGame == true) {
      if (this.timeleft <= 0) {
        this.resetGame();
      }
    }
  }
  public playGame() {
    this.isPlayingGame = true;
  }
  pauseGame() {
    this.show = false;
    setTimeout(() => {
      var result = alert('pauseGame');
      this.show = true;
    }, 100);
  }
  // public stopGame() {
  //   // this.timeStart = null;
  //   this.timeStart == false;
  //   if (this.isPlayingGame == true) {
  //     clearInterval(this.timeStart);
  //     this.isPlayingGame = false;

  //     if (this.timeStart == false) {
  //       this.timeStart = setInterval(() => {
  //         this.timeleft--;
  //       }, 1000);
  //     }
  //   }

  //   // this.resetGame();
  // }

  win(): void {
    alert('You win!');
    this.resetGame();
  }
  public resetGame() {
    let a = alert(`Game Over ${this.point}`);
    this.isPlayingGame = false;
    this.next = 1;
    this.point = 0;
    this.timeleft = this.maxTime;
    clearInterval(this.timeStart);
    this.timeStart = null;
  }
  play(number: number): void {
    if (number == this.next) {
      this.next++;
      this.point++;
      this.numbers = this.shuffle(this.numbers);
      if (this.point == 100) {
        this.win();
      }
    } else {
      this.resetGame();
    }
  }
  shuffle(array: any) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
