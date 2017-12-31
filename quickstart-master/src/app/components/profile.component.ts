import { GithubService } from './../services/github.service';
import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent  { 
  repos: any;
  user: any;
  username: string;

  constructor(private githubService: GithubService) {
   this.user = false;
  }

  searchUser(){
    this.githubService.updateUser(this.username);

    this.githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
    });

    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

 }
