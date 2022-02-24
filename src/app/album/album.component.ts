import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  album: any; // = (data as any).default;
  routeSub: any;
  albumSub: any;
  constructor(
    private route: ActivatedRoute,
    private dataService: MusicDataService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.albumSub = this.dataService
        .getAlbumById(params.id)
        .subscribe((data) => {
          this.album = data;
        });
    });
  }
  addToFavourites(trackId) {
    let result = this.dataService.addToFavourites(trackId);
    if (result) {
      this.snackbar.open('Adding to Favourites...', 'Done', { duration: 1500 });
      //console.log(trackId);
    }
  }
}
