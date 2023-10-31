import { ajax } from "rxjs/ajax";

const data$ = ajax.getJSON(
  "https://api.github.com/search/repositories?q=react"
);

const dataGitLab$ = ajax.getJSON(
  "https://gitlab.com/api/v4/projects?search=react"
);

dataGitLab$.subscribe(console.log);
data$.subscribe(console.log);
