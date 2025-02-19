import React from 'react';
import {
  ScreenContainer,
  Typography,
  Button,
  Box,
  TextField,
  Card,
  Switch,
} from '../components';
import {StatusBar} from 'react-native';
import {ChevronRight, Link} from 'lucide-react-native';

export const Home: React.FC = () => {
  return (
    <ScreenContainer scrollable>
      <StatusBar />

      <Typography variant="title" marginBottom={16}>
        Design system
      </Typography>

      <Card marginBottom={16} padding={16} gap={16}>
        <Typography variant="title">Título do card</Typography>

        <Typography variant="body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores
          repellendus sequi, enim veniam quo, nisi ut quos quisquam sunt
          doloribus modi inventore quia. Rerum ipsa neque ex dolores eos.
        </Typography>

        <Box flexDirection="row" alignItems="flex-start" gap={16}>
          <Switch value={true} />
          <Switch value={false} />
          <Switch value={true} disabled />
          <Switch value={false} disabled />
        </Box>

        <Button title="Default" />
      </Card>

      <Card marginBottom={16} padding={16} gap={16}>
        <Typography variant="title">Título do card</Typography>

        <Typography variant="body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores
          repellendus sequi, enim veniam quo, nisi ut quos quisquam sunt
          doloribus modi inventore quia. Rerum ipsa neque ex dolores eos.
        </Typography>

        <Box flexDirection="row" width="100%" gap={8}>
          <TextField variant="normal" placeholder="Digite seu nome" />
          <Button title="Default" flex={1} />
        </Box>
      </Card>

      <Card gap={16} padding={16} marginBottom={32}>
        <Typography variant="title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Typography variant="label">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          non suscipit nisi? Nisi numquam esse hic ipsam aut, exercitationem,
          alias mollitia, qui asperiores molestiae laudantium sapiente assumenda
          debitis nesciunt obcaecati.
        </Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dignissimos nam velit, asperiores rerum molestiae quia doloremque
          corrupti voluptas soluta sit optio animi architecto. Ullam quasi
          possimus pariatur doloribus dignissimos!
        </Typography>
      </Card>

      <Card gap={16} padding={16} marginBottom={16}>
        <Typography variant="title">Estado normal</Typography>
        <Button title="Default" variant="default" />
        <Button title="Destructive" variant="destructive" />
        <Button title="Outline" variant="outline" />
        <Button title="Secondary" variant="secondary" />
        <Button title="Ghost" variant="ghost" />
        <Button title="Link" variant="link" />
      </Card>

      <Card gap={16} padding={16} marginBottom={16}>
        <Typography variant="title">Estado de loading</Typography>
        <Button title="Default" variant="default" loading />
        <Button title="Destructive" variant="destructive" loading />
        <Button title="Outline" variant="outline" loading />
        <Button title="Secondary" variant="secondary" loading />
        <Button title="Ghost" variant="ghost" loading />
        <Button title="Link" variant="link" loading />
      </Card>

      <Card gap={16} padding={16} marginBottom={16}>
        <Typography variant="title">Icon</Typography>
        <Box
          flexDirection="row"
          flexWrap="wrap"
          alignItems="flex-start"
          justifyContent="space-between"
          gap={8}>
          <Button variant="default" icon={ChevronRight} />
          <Button variant="destructive" icon={ChevronRight} />
          <Button variant="outline" icon={ChevronRight} />
          <Button variant="secondary" icon={ChevronRight} />
          <Button variant="ghost" icon={ChevronRight} />
          <Button variant="link" title="Acesse o link" icon={Link} />
        </Box>
      </Card>

      <Card gap={16} padding={16}>
        <Box gap={8}>
          <Typography variant="label">Email:</Typography>
          <TextField
            placeholder="Digite seu email"
            errorMessage="O email deve ser válido"
          />
        </Box>

        <Box gap={8}>
          <Typography variant="label">Nome:</Typography>
          <TextField variant="normal" placeholder="Digite seu nome" />
        </Box>

        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Button variant="link" title="Já possui conta?" />
          <Button variant="link" title="Esqueci a senha" />
        </Box>
        <Button variant="default" title="Fazer login" />
      </Card>
    </ScreenContainer>
  );
};
