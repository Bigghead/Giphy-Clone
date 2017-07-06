import {Component, Pipe} from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'secureUrl'})
export class SecureUrl {

  constructor(private sanitizer:DomSanitizer){
    this.sanitizer = sanitizer;
  }

  transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);            
  }
}