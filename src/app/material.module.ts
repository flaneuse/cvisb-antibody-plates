import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
  MatSliderModule
  // MatAutocompleteModule,
  // MatChipsModule, MatTabsModule, MatTableModule, MatSelectModule,
  // , MatIconModule, MatSortModule,
  // MatSnackBarModule, MatPaginatorModule, MatExpansionModule,
  // MatDatepickerModule, MatNativeDateModule, MatDividerModule,
  // MatCardModule, MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatSliderModule
      // MatAutocompleteModule, MatFormFieldModule, MatInputModule,
      // MatChipsModule, MatTabsModule, MatTableModule, MatSelectModule,
      // MatCheckboxModule, MatIconModule, MatSortModule,
      // MatSnackBarModule, MatPaginatorModule, MatExpansionModule,
      // MatDatepickerModule, MatNativeDateModule, MatDividerModule,
      // MatCardModule, MatTooltipModule
  ],
  exports: [
    MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatSliderModule
    // MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    // MatChipsModule, MatTabsModule, MatTableModule, MatSelectModule,
    // MatCheckboxModule, MatIconModule, MatSortModule,
    // MatSnackBarModule, MatPaginatorModule, MatExpansionModule,
    // MatDatepickerModule, MatNativeDateModule, MatDividerModule,
    // MatCardModule, MatTooltipModule
  ],
})
export class MaterialModule { }
