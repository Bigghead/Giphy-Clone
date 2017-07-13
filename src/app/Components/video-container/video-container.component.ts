import { Observable } from 'rxjs/Rx';
import { DataService } from './../../Services/data.service';
import { Component, OnInit } from '@angular/core';
import { Keys } from '../../../../Keys.js';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {

  constructor(private dataService: DataService, 
              private sanitizer : DomSanitizer) { }

  trending;
  url;

  ngOnInit() {
    this.dataService.getTrending()
                    .subscribe( res => {
                      this.trending = res.data.slice(0, 10);
                      this.url = res.data[0].embed_url
                      console.log(this.trending);
                    })

  }


  playGif(newUrl: string){

    this.url = newUrl
  }

}
