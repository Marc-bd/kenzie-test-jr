# Calculadora de Antecipação de Transação.

Com esta calculadora você poderá calcular quanto receberá caso queira antecipar o seu recebimento.

Você deverá preencher o formulário com os seguintes dados:

1. Valor da venda(Antecipação) -> Numero inteiro positivo de 1000 até 100000000
2. Quantidade de Parcelas -> Numero inteiro positivo de 1 até 12.
3. Taxa de MDR (Merchant Discount Rate) - Numero inteiro positivo

Após preencher os dados, basta clicar no botão enviar para receber a resposta com os valores calculados.

## GUIA DE INSTALAÇÃO

Para Iniciar o calculadora basta dar o comando abaixo:

### `yarn start`

Este aplicativo iniciára no seu browser com o endereço: [http://localhost:3000]
Caso o aplicativo não abra automaticamente, você poderá abrir no seu browser no link acima.

O aplicativo possui `versão mobile`, `tablet` e `desktop`.

Em cada alteração no código, a página será automaticamente recarregada com as mudanças.

Você poderá acessar os erros pelo console, caso queira, utilizando console.log onde quiser dentro do código.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## TECNOLOGIAS UTILIZADAS

- React
- React Hook Form
- Yup
- Axios
- Redux
- Redux Thunk
- StyledComponents

## PORQUÊ FOI UTILIZADO REDUX E REDUX THUNK NESTA SIMPLES APLICAÇÃO

O aplicativo inicialmente seria desenvolvido utilizando `props` e `useState` para guardar a resposta da API e passar para o usuário, porém o código não ficaria limpo podendo gerar certa confusão, além disso, a resposta da API não traz os valores em forma de moeda corrente, o que aumentaria ainda mais o código para resposta final ao usuário.

Assim, por uma questão de organização e limpeza de código, foi utilizado o Redux Thunk para formatar os dados recebidos da API e o Redux para guardar os dados formatados e postarior exibição ao usuário
