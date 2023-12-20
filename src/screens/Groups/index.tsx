import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';

export function Groups() {
  /* 
  useState 
    - Define o valor inicial do estado;
  
      Exemplo  
      const [nome, nome_da_função]
  */
  const [groups, setGroups] = useState<string[]>(['Nome da turma', 'Nome da turma']); 

  return (
    <Container>
      <Header/>
      
      <Highlight
        title="Turmas"
        subtitle="jogue com a sua turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }: any) => (
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="que tal cadastrar a primeira turma?"
          />
        )}
      />
    </Container>
  );
}