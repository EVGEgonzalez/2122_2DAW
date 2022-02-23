import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppGlobalRippleOptions implements MostrarCuadernoService {
  /** Whether ripples should be disabled globally. */
  disabled: boolean = false;
}

export class MostrarCuadernoService {

  constructor() { }
}
