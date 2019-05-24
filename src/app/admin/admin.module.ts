import {NgModule} from "@angular/core"
import {Route ,  RouterModule} from "@angular/router"
import {AdminComponent} from "./admin.component"


const adminRoutes : Route[] =[
{path:'',component:AdminComponent}
]


@NgModule({
    declarations:[AdminComponent],
    imports:[RouterModule.forChild(adminRoutes)],
    providers:[]
})
export class AdminModule{

}