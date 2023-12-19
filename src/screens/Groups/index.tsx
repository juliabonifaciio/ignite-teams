import { useState } from 'react';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';

export function Groups() {
  /* 
  useState 
    - Define o valor inicial do estado;
  
      Exemplo  
      const [nome, nome_da_função]
  */
  const [groups, setGroups] = useState('Ignite Teams'); 

  return (
    <Container>
      <Header/>
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma!"
      />
      <GroupCard 
        title="Nome da turma"/>
    </Container>
  );
}