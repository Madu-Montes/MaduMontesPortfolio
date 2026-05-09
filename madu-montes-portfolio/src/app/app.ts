import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { About } from "./components/about/about";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar,
    Home,
    Skills,
    About,
    Projects,
    Contact,
    Footer, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('madu-montes-portfolio');
}
