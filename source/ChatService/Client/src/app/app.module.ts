import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppLayoutComponent } from "./layout/layout.component";
import { AppLayoutModule } from "./layout/layout.module";

const ROUTES: Routes = [
    {
        path: "",
        component: AppLayoutComponent,
        children: [
            { path: "", loadChildren: () => import("./chat/chat.module").then((module) => module.AppChatModule) }
        ]
    },
    { path: "**", redirectTo: "" }
];

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        AppLayoutModule
    ]
})
export class AppModule { }
