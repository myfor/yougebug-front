import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() resultCount = 0;
  title = '最新提问';
  searchValue = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const SEARCH_KEY = 's';
    this.route.paramMap.subscribe((map) => {
      if (map.has(SEARCH_KEY)) {
        this.title = '搜索结果';
        this.searchValue = map.get(SEARCH_KEY);
      }
    });
  }

  search(value: string) {
    if (!value.trim()) {
      return;
    }
    this.router.navigate(['/questions', { s: value }]);
  }
}
