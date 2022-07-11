import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public method() {}

  public url = "http://localhost:8080";

  requestDetails(Body: JSON): Observable<any> {
    return this.http.post<any>(`${this.url}/register`, Body);
  }

  getAllDevelopers(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/getList");
  }
}
