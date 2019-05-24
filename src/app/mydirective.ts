import {Directive , ElementRef , HostListener , SimpleChanges,  Input ,OnInit} from "@angular/core"

@Directive({
    selector:'[enlarge]'
})
export class EnlargeDirective implements OnInit{

    ngOnInit(){
        console.log("enlarger value received" , this.enlarge);
    }

@Input() enlarge    
constructor(private element : ElementRef){

    console.log("enlarge value received in constructor" , this.enlarge);
    this.element.nativeElement.style.color="yellow"
}

ngOnChanges(changes){
    console.log("ngon changes called " , changes)
}

componentDidMount(){
    console.log("value recieved in enlarge is" ,this.enlarge);
}

@HostListener('mouseover') onmouseover(){
    console.log("mouse is moved to this element" ,this.element.nativeElement)
}
}