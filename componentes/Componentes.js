import React from 'react';
import { Text, View } from 'react-native';

export const Titulo = ({ texto }) => (
    <View>
        <Text style = {{fontSize: 24, fontWeight: 'bold'}}>{texto}</Text>
    </View>
);

export const Mensagem = ({ conteudo }) => {
    <View>
        <Text style = {{fontSize: 18}}>{conteudo}</Text>
    </View>
};

// uma função utilitatia para calcular algo, por exemplo a soma
export const somar = (x, y) => x + y;