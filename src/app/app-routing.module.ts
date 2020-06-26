import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "posts", component: PostsComponent },
  { path: "error", component: ErrorComponent },
  { path: "**", redirectTo: "/error" }
];

export const RoutingComponents = [
  LoginComponent,
  HomeComponent,
  PostsComponent,
  ErrorComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
