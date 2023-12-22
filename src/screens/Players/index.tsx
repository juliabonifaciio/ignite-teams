import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';

import { Container, Form } from './styles';

export function Players() {
    return(
        <Container>
            <Header showBackButton/>

            <Highlight
                title='Nome da Turma'
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

            <Filter
                title='Time A'
            />
        </Container>
    );
}