
import { Component } from '@angular/core';
import {Article} from './article'

@Component({
    selector : 'pm-articles',
    inputs: ['article'],
    templateUrl : './article.component.html'
})

export class ArticleComponent{
  public article: Article;

  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }

}

