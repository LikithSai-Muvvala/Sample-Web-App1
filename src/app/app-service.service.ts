import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AppService {
  serverUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<object[]>(this.serverUrl + "posts");
  }

  // areNestedKeysExist(obj: object, keys: string[]): boolean {
  //   if (!obj || !keys) {
  //     return false;
  //   }
  // console.log(".............................")
  //   let newObj = obj;
  //   // console.log(newObj)
  //   for (let key of keys) {
  //     console.log(key)
  //     // console.log(newObj)
  //     if (!newObj.hasOwnProperty(key)) {
  //       console.log(newObj)
  //       return false;
  //     }
  //     newObj = newObj[key];
  //     // console.log(key, newObj);
  //   }
  //   return true;
  // }
}
