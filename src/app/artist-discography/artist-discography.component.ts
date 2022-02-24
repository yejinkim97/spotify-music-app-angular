import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';
@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css'],
})
export class ArtistDiscographyComponent implements OnInit {
  albums;//= albumData.albums.items;
  artist;// = (artistData as any).default;
  artistSub: any;
  routeSub: any;
  albumSub: any;
  constructor(
    private route: ActivatedRoute,
    private dataService: MusicDataService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.artistSub = this.dataService
        .getArtistById(params.id)
        .subscribe((data) => (this.artist = data));
      this.albumSub = this.dataService
        .getAlbumsByArtistId(params.id)
        .subscribe((data) => {
          const dup=new Set();
          let newItems = data.items;
          this.albums=newItems.filter(
           // (item, index) => newItems.indexOf(item) === index
           (album: { name: unknown }) => {
            const duplicate = dup.has(album.name);
            dup.add(album.name);
            return !duplicate;
          }
         
          );
          
        });
    });
  }
  ngOnDestroy(): void {
    this.artistSub.unsubscribe();
    this.albumSub.unsubscribe();
    this.routeSub.unsubscribe();
  }
}
