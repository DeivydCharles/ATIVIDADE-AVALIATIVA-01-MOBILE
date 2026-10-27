# 🧮 Calculadora — React Native com Expo

Aplicativo de calculadora simples, desenvolvido como exercício da disciplina de **Soluções Mobile**. Realiza as quatro operações básicas (soma, subtração, multiplicação e divisão) e funciona em Android, iOS e web a partir de um único código.

## ✨ Funcionalidades

- Operações de soma (`+`), subtração (`-`), multiplicação (`*`) e divisão (`/`)
- Botão `C` para limpar o display e reiniciar o cálculo
- Tratamento de divisão por zero: o display mostra `Erro`
- Interface em modo retrato, com tema claro e componentes do React Native Paper

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
| --- | --- | --- |
| [Expo](https://expo.dev/) | ~58.0.19 | Toolchain e execução do app |
| [React Native](https://reactnative.dev/) | 0.88.0 | Base do app mobile |
| [React](https://react.dev/) | 19.3.0 | Componentes e hooks |
| [React Native Paper](https://callstack.github.io/react-native-paper/) | ^5.15.3 | Componentes de interface (`Button`, `Card`, `Text`) |
| react-native-safe-area-context | ^5.10.1 | Suporte às áreas seguras da tela |

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) e npm instalados
- App **Expo Go** no celular (Android ou iOS) **ou** um emulador/simulador configurado

## 🚀 Como rodar

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd calculadora_react
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npx expo start
   ```

4. Abra o app:
   - **No celular:** leia o QR Code com o Expo Go (celular e computador na mesma rede)
   - **No emulador:** pressione `a` (Android) ou `i` (iOS) no terminal
   - **No navegador:** pressione `w`

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento do Expo |
| `npm run android` | Inicia e abre no Android |
| `npm run ios` | Inicia e abre no iOS |
| `npm run web` | Inicia e abre no navegador |

## 📖 Como usar

1. Digite o primeiro número
2. Escolha a operação (`+`, `-`, `*` ou `/`)
3. Digite o segundo número
4. Pressione `=` para ver o resultado
5. Use `C` para limpar tudo e começar de novo

## 🧠 Como funciona

Todo o código da calculadora está em [`App.js`](./App.js). O estado é controlado com o hook `useState`:

| Estado | Função |
| --- | --- |
| `display` | Texto exibido na tela da calculadora |
| `primeiroNumero` | Primeiro operando, guardado ao escolher a operação |
| `operacao` | Operação escolhida (`+`, `-`, `*` ou `/`) |
| `novoNumero` | Indica se o próximo dígito deve substituir o conteúdo do display |

As principais funções são:

- `apertarBotao(valor)` — recebe qualquer botão pressionado e decide o que fazer
- `apertarNumero(numero)` — acrescenta o dígito ao display (ou substitui, se for um novo número)
- `apertarOperacao(op)` — guarda o valor atual e a operação escolhida
- `calcular()` — executa a operação e mostra o resultado; exibe `Erro` em divisões por zero
- `limpar()` — restaura o estado inicial

Os botões são gerados a partir de uma matriz (`linhas`), percorrida com `map`, o que evita repetir código para cada tecla.

## 📁 Estrutura do projeto

```
calculadora_react/
├── assets/          
├── App.js           
├── index.js         
├── app.json         
├── package.json     
├── AGENTS.md        
├── LICENSE          
└── README.md        
```

## ⚠️ Limitações conhecidas

Por ser um exercício simples, a calculadora ainda não possui:

- Botão de ponto decimal (números decimais só aparecem como resultado de divisões)
- Operações encadeadas (por exemplo, `2 + 3 + 4`): ao escolher uma nova operação, o cálculo anterior não é resolvido antes
- Botão para apagar o último dígito

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.