import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FileService {

    saveFile(files: Array<File>, name: string, url:string) {

        return new Promise(function (resolve, reject) {
          let formData: FormData = new FormData();
          var xhr = new XMLHttpRequest();
          console.log("FILE::FileService=>",url);
          for (var i = 0; i < files.length; i++) {
            formData.append(name, files[i],files[i].name);
          }
          
          xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                resolve(JSON.parse(xhr.response));
              } else {
                reject(xhr.response);
              }
            }
          };
    
          xhr.open('POST', url, true);
          xhr.send(formData);
        });
      }

}