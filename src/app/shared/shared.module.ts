import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [PageLoaderComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [PageLoaderComponent],
})
export class SharedModule {}
