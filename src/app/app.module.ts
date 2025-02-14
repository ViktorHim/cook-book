import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ContentWrapperComponent } from './core/components/content-wrapper/content-wrapper.component';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { UnitsPageComponent } from './pages/units-page/units-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RecipesModule } from './features/recipes/recipes.module';
import { UnitsModule } from './features/units/units.module';

import { enviroment } from 'src/enviroments/enviroment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ContentWrapperComponent,
    RecipesPageComponent,
    UnitsPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    RecipesModule,
    UnitsModule,

    MatGridListModule,
    MatButtonModule,
    MatCardModule,

    AngularFireModule.initializeApp(enviroment),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
