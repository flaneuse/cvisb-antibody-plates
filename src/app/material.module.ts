import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MatButtonModule
  // MatAutocompleteModule, MatFormFieldModule, MatInputModule,
  // MatChipsModule, MatTabsModule, MatTableModule, MatSelectModule,
  // MatCheckboxModule, MatIconModule, MatSortModule,
  // MatSnackBarModule, MatPaginatorModule, MatExpansionModule,
  // MatDatepickerModule, MatNativeDateModule, MatDividerModule,
  // MatCardModule, MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule
      // MatAutocompleteModule, MatFormFieldModule, MatInputModule,
      // MatChipsModule, MatTabsModule, MatTableModule, MatSelectModule,
      // MatCheckboxModule, MatIconModule, MatSortModule,
      // MatSnackBarModule, MatPaginatorModule, MatExpansionModule,
      // MatDatepickerModule, MatNativeDateModule, MatDividerModule,
      // MatCardModule, MatTooltipModule
  ],
  exports: [
    MatButtonModule
    // MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    // MatChipsModule, MatTabsModule, MatTableModule, MatSelectModule,
    // MatCheckboxModule, MatIconModule, MatSortModule,
    // MatSnackBarModule, MatPaginatorModule, MatExpansionModule,
    // MatDatepickerModule, MatNativeDateModule, MatDividerModule,
    // MatCardModule, MatTooltipModule
  ],
})
export class MaterialModule { }
