import { Component } from '@angular/core';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;
  faBootstrap = faBootstrap;
  faAngular = faAngular;
  faDatabase = faDatabase;
  faGithub = faGithub;
  faTerminal = faTerminal;
  faUniversalAccess = faUniversalAccess;
  faLightbulb = faLightbulb;

}
