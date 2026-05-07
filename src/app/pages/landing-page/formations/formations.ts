import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './formations.html',
  styleUrls: ['./formations.scss']
})

export class Formations {
  formations = [
     {
      image: 'assets/images/IGM.png',
      type:'University',
      diploma:'Master Degree (Software and Data Engineering)',
      school: 'Université Gustave Eiffel - Institut Gaspard Monge',
      location:'Champs Sur Marne - France',
      date: 'September 2018 - November 2025',
      description: ['Conception, développement et mise en production d\'un service centralisant un traitement précédemment dupliqué dans une trentaine de services, permettant de réduire la duplication de code et les risques d\'incohérences des données.',
                    'Participation à la mise en place de tests automatisés et à la revue de code via pull requests, améliorant la qualité et la maintenabilité du service.']
    },
     {
      image: 'assets/images/PV.png',
      school: 'Paul Valery Perparatory Classes PCSI',
      location:'Paris - France',
      date:'September 2017 - July 2018',
      description: ['Conception, développement et mise en production d\'un service centralisant un traitement précédemment dupliqué dans une trentaine de services, permettant de réduire la duplication de code et les risques d\'incohérences des données.',
                    'Participation à la mise en place de tests automatisés et à la revue de code via pull requests, améliorant la qualité et la maintenabilité du service.']
    },
     {
      image: 'assets/images/GF.png',
      type:'High school',
      diploma:'A level (Science)',
      school: 'Gabriel Fauré High School',
      location:'Paris - France',
      date: 'September 2015 - July 2017',
      description: ['Conception, développement et mise en production d\'un service centralisant un traitement précédemment dupliqué dans une trentaine de services, permettant de réduire la duplication de code et les risques d\'incohérences des données.',
                    'Participation à la mise en place de tests automatisés et à la revue de code via pull requests, améliorant la qualité et la maintenabilité du service.']
    },
  ];
}
