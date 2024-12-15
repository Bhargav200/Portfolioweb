import React from 'react';
import { Server } from 'lucide-react';
import { TechLogo } from './TechLogo';

const backendTechnologies = [
  {
    name: 'Node.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    color: '#68A063'
  },
  {
    name: 'Python',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    color: '#3776AB'
  },
  {
    name: 'MongoDB',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    color: '#47A248'
  },
  {
    name: 'PostgreSQL',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    color: '#336791'
  },
  {
    name: 'Docker',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    color: '#2496ED'
  },
  {
    name: 'AWS',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg',
    color: '#FF9900'
  },
  {
    name: 'GraphQL',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg',
    color: '#E535AB'
  },
  {
    name: 'Redis',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg',
    color: '#DC382D'
  }
];

export function BackendSkills() {
  return (
    <div className="bg-dark-lighter p-8 rounded-xl border border-primary/20 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center mb-8">
        <Server className="w-8 h-8 text-primary mr-4" />
        <h3 className="text-2xl font-bold text-white font-mono">Backend</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {backendTechnologies.map((tech) => (
          <TechLogo
            key={tech.name}
            name={tech.name}
            logo={tech.logo}
            color={tech.color}
          />
        ))}
      </div>
    </div>
  );
}