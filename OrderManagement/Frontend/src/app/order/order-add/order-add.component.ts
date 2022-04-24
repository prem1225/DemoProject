import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  public hubConnection = signalR.HubConnection;
  public message: string = "";
  public baseUrl: string = "https://localhost:44337/";
  public options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  }
  constructor(public changeDetector: ChangeDetectorRef, public http: HttpClient) { }

  ngOnInit(): void {
    this.StartConnection();
  }

  StartConnection() {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(this.baseUrl + 'notification')
      .build();

    connection.start().then(function () {
      console.log('SignalR Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });

    connection.on("OrderStatus", (data) => {
      this.message = data;
      this.changeDetector.detectChanges();
    });

  }
  PlaceOrder() {
    this.http.post<any>(this.baseUrl + 'api/Order/PlaceOrder', null, this.options).subscribe(
      res => {

      },
      err => {

      }
    );
  }
}
