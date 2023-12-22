import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';

import { Container } from "./styles";

export function Players() {
    return(
        <Container>
            <Header showBackButton/>

            <Highlight
                title="Nome da Turma"
                subtitle="adicione a galera e separe os times"
            />

            <ButtonIcon/>
        </Container>
    );
}