import { Component, OnInit } from '@angular/core';

export interface Candidate {
    id: number;
    name: string;
    partido: number;
    imageUrl: string;
}

@Component({
    selector: 'app-voting',
    templateUrl: './voting.component.html',
    styleUrls: ['./voting.component.scss']
})

export class VotingComponent implements OnInit {


    candidates: Candidate[] = [
        { id: 1, name: 'Joao Guilherme', partido: 23, imageUrl: 'assets/candidato-1.jpg' },
        { id: 2, name: 'Marisa Campos', partido: 47, imageUrl: 'assets/candidato-2.jpg' },
        { id: 3, name: 'Joaquim Moisés', partido: 14, imageUrl: 'assets/candidato-3.jpg' }
      ];
    
      selectedPartido: number | null = null;
      selectedCandidate: Candidate | null = null;

    constructor() { }
    
      onVote() {
        this.selectedCandidate = this.candidates.find(candidate => candidate.partido === this.selectedPartido) || null;
    
        if (this.selectedCandidate) {
          console.log(`You voted for: ${this.selectedCandidate.name}`);
        } else {
          console.log('Invalid partido number');
        }
      }

    ngOnInit(): void {
        // Initialization logic goes here
    }
}