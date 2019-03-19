import { Injectable } from '@angular/core';

declare let altertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }


  comfirm(message: string, okCallback: () => any) {
    altertify.confrim(message, function(e) {
      if(e){
        okCallback();
      }
      else {

      }
    });
  }

  success(message: string){
    altertify.success(message);
  }

  error(message: string){
    altertify.error(message);
  }

  warning(message: string){
    altertify.warning(message);
  }

  message(message: string){
    altertify.message(message);
  }
}
