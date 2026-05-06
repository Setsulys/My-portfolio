import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.scss']
})

export class Experiences {
  experiences = [
    {
      image: 'assets/images/SG.png',
      technologies:['Kotlin', 'Angular', 'RabbitMq', 'Springboot', 'PostgreSql', 'Jira', 'Github', 'Liquibase', 'Scrum', 'Sonar', 'Rest API'],
      title: 'Société Générale',
      date:'April 2025 - September 2025',
      status:'Développeur Fullstack',
      description: `Conception, développement et mise en production d'un service centralisant un traitement
                    précédemment dupliqué dans une trentaine de services, permettant de réduire la duplication
                    de code et les risques d'incohérences des données.

                    Participation à la mise en place de tests automatisés et à la revue de code via pull requests,
                    améliorant la qualité et la maintenabilité du service.`
    },
    {
      image: 'assets/images/NI.png',
      title: 'Amoa point 12/ Net Inspiration',
      technologies:['Wordpress', 'Css', 'Php'],
      date:'May 2023 - August 2023',
      status:'Développeur Front',
      description: `Conception, développement et mise en production d'un service centralisant un traitement
          précédemment dupliqué dans une trentaine de services, permettant de réduire la duplication
          de code et les risques d'incohérences des données.

          Participation à la mise en place de tests automatisés et à la revue de code via pull requests,
          améliorant la qualité et la maintenabilité du service.`
    },
    {
      image: 'assets/images/Euphor.png',
      title: 'NRJBI/Euphor',
      technologies:['Wordpress'],
      date:'June 2022 - August 2022',
      status:'Développeur Front',
      description: `Conception, développement et mise en production d'un service centralisant un traitement
                précédemment dupliqué dans une trentaine de services, permettant de réduire la duplication
                de code et les risques d'incohérences des données.

                Participation à la mise en place de tests automatisés et à la revue de code via pull requests,
                améliorant la qualité et la maintenabilité du service.`
    },
    {
      image: 'assets/images/Higashidate.png',
      title: 'Higashidate Hotel',
      technologies:[],
      date:'June 2019 - September 2019',
      status:'Employé Polyvalent en établissement hotelier',
      description: `Préparer les tables et servir les plats dans le restaurant de l'hôtel
                    Entretenir les locaux et les chambres`
      }
  ];
}
