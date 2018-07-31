import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatStepperModule
} from '@angular/material';

import { SignUpComponent } from './home/sign-up/sign-up.component';
import { RegisterComponent } from './home/register/register.component';
import { ServiceService } from './services/service.service';
import { HttpModule } from '@angular/http';


import { MenuComponent } from './Administrator/menu/menu.component';
import { ViewresultComponent } from './Administrator/viewresult/viewresult.component';
import { ViewstudentComponent } from './Administrator/viewstudent/viewstudent.component';
import { CreateUserComponent } from './Administrator/create-user/create-user.component';
import { AnnonceComponent } from './Administrator/annonce/annonce.component';
import { ManageUserComponent } from './Administrator/manage-user/manage-user.component';
import { MenuStudentComponent } from './Student/menu-student/menu-student.component';
import { ActivateComponent } from './Student/activate/activate.component';
import { PersonalInfoComponent } from './Student/personal-info/personal-info.component';
import { ChangenumberComponent } from './Student/changenumber/changenumber.component';
import { LoaderComponent } from './loader/loader/loader.component';
import { EditComponent } from './Administrator/edit/edit.component';




const route: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SignUpComponent },
  {
    path: 'menu', component: MenuComponent, children: [
      { path: 'view_student', component: ViewstudentComponent },
      { path: 'view_result', component: ViewresultComponent },
      { path: 'create_user', component: CreateUserComponent },
      { path: 'annonce', component: AnnonceComponent },
      { path: 'manage_user', component: ManageUserComponent },
      { path: 'edit', component: EditComponent }
    ]
  },
  {
    path: 'menuStudent', component: MenuStudentComponent, children: [
      { path: 'activate', component: ActivateComponent },
      { path: 'personal', component: PersonalInfoComponent },
      { path: 'change', component: ChangenumberComponent },
     
    ]
  },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignUpComponent,
    RegisterComponent,
    ViewresultComponent,
    ViewstudentComponent,
    CreateUserComponent,
    AnnonceComponent,
    ActivateComponent,
    PersonalInfoComponent,
    ChangenumberComponent,
    ManageUserComponent,
    MenuStudentComponent,
    LoaderComponent,
    EditComponent,

  ],
  imports: [
    HttpModule,
    FormsModule,
    RouterModule.forRoot(route),
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatStepperModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
