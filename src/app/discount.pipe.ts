import {Pipe , PipeTransform} from "@angular/core"

@Pipe({
    name:'discount'
})
export class DiscountPipe implements PipeTransform{
transform(value){

    
    return value - value*0.1
}
}