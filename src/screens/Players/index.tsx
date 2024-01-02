import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';

type RouteParams = {
    group: string
}

export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState([]);


    const route = useRoute();
    const { group } = route.params as RouteParams;

    return(
        <Container>
            <Header showBackButton/>

            <Highlight
                title={group}
                subtitle='adicione a galera e separe os times'
            />
            <Form>
                <Input
                    placeholder='Nome do participante'
                    autoCorrect={false}
                />
                <ButtonIcon 
                    icon='add'
                />
            </Form>
            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }: any) => (
                        <Filter
                            title={item}
                            isActive= {item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }: any) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => {}}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty
                      message="não há participantes nesse time"
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && {flex: 1}
                ]}
            />

            <Button
                title='Remover turma'
                type='SECONDARY'
            />
        </Container>
    );
}