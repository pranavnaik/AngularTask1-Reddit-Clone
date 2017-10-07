import { Component } from '@angular/core';
import { ArticleComponent} from './article/article.component';
import { Article } from './article/article';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})


export class AppComponent {
  
  articles: Article[];
 
  constructor() {
    this.articles = [
      new Article('TypeScript', 'http://typescriptlang.org', 10),
      new Article('Angular Homepage', 'http://angular.io', 6),
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),  
    ];
}
   addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    //  console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
}

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
}
}


