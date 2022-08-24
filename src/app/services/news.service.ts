import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getTopHeadlines(){
   return this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc880610075349b99a307587c2b5176a')
  }
}
