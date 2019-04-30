import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PilotAttrs, Pilot } from './pilot';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClient) { }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<PilotAttrs[]>('https://my-json-server.typicode.com/rafal-k4/FakeApi/pilots').pipe(
      map((data) => data.map((pilotAttrs) => new Pilot(pilotAttrs)))
    );
  }

  getPilot(id: number) {
    return this.http.get<PilotAttrs>(`https://my-json-server.typicode.com/rafal-k4/FakeApi/pilots/${id}`).pipe(
       map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  savePilot(pilotAttrs: PilotAttrs): Observable<Pilot> {
    if (pilotAttrs.id) {
      return this.updatePilot(pilotAttrs);
    } else {
      return this.createPilot(pilotAttrs);
    }
  }

  private createPilot(data: PilotAttrs): Observable<Pilot> {
    return this.http.post<PilotAttrs>('https://my-json-server.typicode.com/rafal-k4/FakeApi/pilots', data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  private updatePilot(data: PilotAttrs): Observable<Pilot>{
    return this.http.put<PilotAttrs>('https://my-json-server.typicode.com/rafal-k4/FakeApi/pilots/${data.id}', data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }
}
