import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = [
    // FRONT-END
    {
      category: 'Frontend',
      name: 'HTML',
      level: 82,
    },
    {
      category: 'Frontend',
      name: 'CSS / SCSS',
      level: 76,
    },
    {
      category: 'Frontend',
      name: 'JavaScript',
      level: 72,
    },
    {
      category: 'Frontend',
      name: 'TypeScript',
      level: 70,
    },
    {
      category: 'Frontend',
      name: 'Angular',
      level: 74,
    },
    {
      category: 'Frontend',
      name: 'Bootstrap',
      level: 68,
    },
    {
      category: 'Frontend',
      name: 'Responsive Design',
      level: 73,
    },
    {
      category: 'Frontend',
      name: 'UI/UX',
      level: 66,
    },

    // SEGURANÇA
    {
      category: 'Security',
      name: 'ISO/IEC 27001',
      level: 78,
    },
    {
      category: 'Security',
      name: 'IAM',
      level: 62,
    },
    {
      category: 'Security',
      name: 'Auditoria Interna SI',
      level: 67,
    },
    {
      category: 'Security',
      name: 'Governança',
      level: 58,
    },
    {
      category: 'Security',
      name: 'Gestão de Mudanças',
      level: 52,
    },
    {
      category: 'Security',
      name: 'Segurança de Aplicações',
      level: 61,
    },
    {
      category: 'Security',
      name: 'LGPD',
      level: 50,
    },

    // IA & AUTOMAÇÃO
    {
      category: 'AI & Automation',
      name: 'AI Agents',
      level: 58,
    },
    {
      category: 'AI & Automation',
      name: 'Prompt Engineering',
      level: 72,
    },
    {
      category: 'AI & Automation',
      name: 'Vertex AI',
      level: 48,
    },
    {
      category: 'AI & Automation',
      name: 'Automação de Processos',
      level: 60,
    },

    // FERRAMENTAS
    {
      category: 'Tools',
      name: 'Git / GitHub',
      level: 74,
    },
    {
      category: 'Tools',
      name: 'Jira / Kanban',
      level: 79,
    },
    {
      category: 'Tools',
      name: 'Jenkins',
      level: 45,
    },
    {
      category: 'Tools',
      name: 'SonarQube',
      level: 46,
    },
    {
      category: 'Tools',
      name: 'Figma',
      level: 57,
    },

    // BACK-END & DADOS
    {
      category: 'Backend & Data',
      name: 'Java',
      level: 40,
    },
    {
      category: 'Backend & Data',
      name: 'Python',
      level: 52,
    },
    {
      category: 'Backend & Data',
      name: 'SQL',
      level: 64,
    },
    {
      category: 'Backend & Data',
      name: 'REST APIs',
      level: 65,
    },
  ];
}
