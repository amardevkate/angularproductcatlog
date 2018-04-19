import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convertByteTo"
})


export class convertByteToPipe implements PipeTransform {
  transform(value:any): any {
    return "data: image / jpeg; base64," + value;
  }
}
