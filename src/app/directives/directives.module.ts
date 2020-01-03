import { toggleDirective } from './toggle.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        toggleDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        toggleDirective
    ]
})
export class directivesModule {}