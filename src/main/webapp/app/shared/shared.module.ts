import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MelitBurgerAdministrationSharedLibsModule,
  MelitBurgerAdministrationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [MelitBurgerAdministrationSharedLibsModule, MelitBurgerAdministrationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MelitBurgerAdministrationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MelitBurgerAdministrationSharedModule {
  static forRoot() {
    return {
      ngModule: MelitBurgerAdministrationSharedModule
    };
  }
}
