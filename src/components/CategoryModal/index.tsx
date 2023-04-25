import React from "react";
import { FlatList } from "react-native";
import { categories } from "@utils/categories";
import { Button } from "@components/Button";

import {
  Category,
  Container,
  Footer,
  Header,
  Icon,
  Name,
  Separator,
  Title,
} from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeModal: () => void;
}

export function CategoryModal({ category, setCategory, closeModal }: Props) {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        style={{ flex: 1, width: "100%" }}
        renderItem={({ item }) => (
          <Category
            onPress={() => setCategory(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeModal} />
      </Footer>
    </Container>
  );
}
