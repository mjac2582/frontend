import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent {
  title = 'demoExamen';
  articulos: any[] = [];
  
  constructor(private http: HttpClient) {

    const headers = new HttpHeaders({
           'Access-Control-Allow-Origin' : 'http://localhost:4200'
  
    });
    console.log('Spotify Service Listo');
    this.http.get('http://localhost:8080/autores/34/articulos/',{ headers }).subscribe((data:any ) => {
    console.log(data);
    this.articulos = data;
  
    });
  }

  getQuery( query: string ) {

    const url = '';

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDsnU8IhPdDKrUXuWq7FVMlrNmZrmMJiSyG6fRESINYgAJBBpnLiQ6GThLMuQsxqlLJVavErt4qQAgzvrA'
    });

    return this.http.get(url, { headers });

  }


}
