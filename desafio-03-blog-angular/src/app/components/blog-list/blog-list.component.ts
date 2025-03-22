import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.models';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts: Post[] = [
    {
      title: "O Batman como uma marca",
      description: "Entenda como o personagem se tornou um dos símbolos mais famosos no mundo dos herois",
      image: "assets/card-image-1.jpg"
    },
    {
      title: "Vilões",
      description: "Conheça os principais vilões do Morcego! Desde o Coringa e a Arlequina, até o Pinguim e o Charada",
      image: "assets/card-image-2.jpg"
    },
    {
      title: "O Homem-Morcego nos quadrinhos",
      description: "Confira as melhores histórias e as melhores HQs do universo do Batman",
      image: "assets/card-image-3.jpg"
    },
    {
      title: "Batman nos videogames",
      description: "Conheça a trilogia Batman Arkham, uma das melhores sagas de jogos de todos os tempos",
      image: "assets/card-image-4.jpg"
    },
    {
      title: "O Cavaleiro das Trevas",
      description: "Em diferentes gerações, o Batman sempre se fez presente nos cinemas, arrastando milhões de pessoas (e reais)",
      image: "assets/card-image-5.jpg"
    },
    {
      title: "Gotham City",
      description: "Violência, corrupção, escuridão... A místida da cidade mais célebre dos quadrinhos",
      image: "assets/card-image-6.jpg"
    }
  ]
  
  ngOnInit(): void {
      
  }
}
