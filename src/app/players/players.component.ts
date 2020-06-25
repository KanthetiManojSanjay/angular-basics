import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:any;
  message:string="Players Table";
  searchName:string="";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://demo4690221.mockable.io/getPlayersHistory").subscribe( data => this.players=data);
  }

}
