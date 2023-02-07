import { Container, Content, Icon } from "./styles";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Hightlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}