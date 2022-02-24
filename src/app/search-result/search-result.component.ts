import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  results: any;
  searchQuery: any;
  routeSub: any;
  constructor(
    private route: ActivatedRoute,
    private dataService: MusicDataService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'];
    });
    this.dataService.searchArtists(this.searchQuery).subscribe((data) => {
      this.results = data.artists.items.filter(
        (item:any) => item.images.length > 0
      );
    });
  }
}
