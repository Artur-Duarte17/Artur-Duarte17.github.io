# Projeto de Desenvolvimento Web - IF Goiano  

Este repositório contém os arquivos do projeto final da **primeira parte da disciplina de Desenvolvimento Web I**, do IF Goiano. O projeto inclui seis páginas web, desenvolvidas com **HTML**, **CSS** e **JavaScript**, demonstrando habilidades em design, interatividade e programação.

---

## 🎯 **Objetivo do Projeto**  
Desenvolver um conjunto de páginas funcionais e interativas, explorando os conceitos aprendidos na disciplina, com foco em:  
- Estruturação HTML semântica.  
- Estilização com CSS e design responsivo.  
- Interatividade e manipulação do DOM com JavaScript.

---

## 📁 **Estrutura do Projeto**  

### 1. **Página Pessoal**  
- **Arquivo**: `index.html`  
- **Descrição**:  
   Esta é a **página principal** do projeto, funcionando como um cartão de visita. Ela apresenta informações pessoais, habilidades e serviços oferecidos.  
- **Funcionalidades**:  
   - **Menu de navegação** com links para as páginas de **Portfólio**, **Eventos** e **Loja**.  
   - **Seção "Sobre Mim"** com informações detalhadas (formação, experiência e foto).  
   - **Botões Interativos**:  
      - "Saber Mais" redireciona para mais informações.  
      - Link para download do **currículo**.  
   - Links para redes sociais (**LinkedIn, GitHub e Instagram**).  
- **Recursos Utilizados**:  
   - HTML5 (estruturação).  
   - CSS3 (design e responsividade).  
   - JavaScript para o menu mobile e animações suaves.  

---

### 2. **Portfólio de Projetos**  
- **Arquivo**: `portifolio.html`  
- **Descrição**:  
   Uma página para **exibir projetos desenvolvidos**, com links diretos para visualizar e acessar o código-fonte no GitHub.  
- **Funcionalidades**:  
   - **Listagem de Projetos**: Cada projeto contém:  
      - Imagem de pré-visualização.  
      - Descrição curta do projeto.  
      - Botões: **"Ver Projeto"** (abre a página funcional) e **"Ver Código"** (abre o repositório no GitHub).  
   - **Animação Hover**: Destaque visual ao passar o mouse nos projetos.  
   - **Scroll Suave** para navegação entre seções.  
- **Projetos Listados**:  
   1. **Landing Page Loja**  
   2. **Sistema de Tarefas**  
   3. **Jogo da Memória**  
   4. **Calculadora**  
- **Recursos Utilizados**:  
   - HTML5 e CSS3 para estruturação e design.  
   - JavaScript para efeitos interativos (hover e scroll).  

---

### 3. **Página de Eventos**  
- **Arquivo**: `evento.html`  
- **Descrição**:  
   Página dedicada ao evento **Song Wave**, apresentando detalhes sobre festivais musicais ao redor do mundo.  
- **Funcionalidades**:  
   - **Contagem Regressiva Dinâmica** até a data do evento.  
   - **Galeria de Imagens** com efeitos de animação.  
   - **FAQ Interativo**: Clique para expandir e visualizar as perguntas e respostas.  
   - Seção de **Depoimentos** e **Sobre Nós**.  
   - Links para contato via **e-mail e WhatsApp**.  
- **Recursos Utilizados**:  
   - JavaScript: Contagem regressiva e FAQ interativo.  
   - CSS: Design moderno e responsivo com efeitos visuais.

---

### 4. **Loja Virtual - Pizzaria Soberba**  
- **Arquivo**: `loja.html`  
- **Descrição**:  
   Uma página para uma pizzaria fictícia, focada em reservas de mesas e exibição do cardápio.  
- **Funcionalidades**:  
   - **Sistema de Carrinho**:  
      - Adição de itens ao carrinho (com alerta).  
      - Visualização dos itens no carrinho.  
      - Opção para limpar o carrinho.  
   - **Seção de Produtos**: Lista de mesas disponíveis para reserva, com imagens, descrição e preços.  
   - **Cardápio** com descrição de pizzas gourmet.  
   - **Menu Mobile** interativo.  
- **Recursos Utilizados**:  
   - JavaScript: Sistema de carrinho e interatividade do menu.  
   - CSS: Efeitos de entrada e hover, responsividade.  

---

### 5. **Calculadora**  
- **Arquivo**: `Calculadora.html`  
- **Descrição**:  
   Uma **calculadora funcional** com suporte a teclado, manipulação de parênteses e uma lógica de cálculo segura.  
- **Funcionalidades**:  
   - **Entrada de Valores**: Clique nos botões ou use o teclado.  
   - **Suporte a Operadores**: Soma, subtração, multiplicação, divisão e parênteses.  
   - **Avaliação Segura**: Utilização de `safeEval` para evitar o uso do `eval`.  
- **Recursos Utilizados**:  
   - JavaScript: Lógica de cálculo e manipulação de eventos de teclado.  
   - CSS: Design moderno com botões interativos.

---

### 6. **Jogo da Memória**  
- **Arquivo**: `Jogo_memoria.html`  
- **Descrição**:  
   Um jogo interativo onde o usuário deve encontrar pares de cartas iguais.  
- **Funcionalidades**:  
   - **Cartas Interativas**: Clique para virar e encontrar os pares.  
   - **Animação de Vitória**: Mensagem de parabéns ao completar o jogo.  
   - **Reinício Automático**: O jogo reinicia ao vencer.  
- **Recursos Utilizados**:  
   - JavaScript: Lógica do jogo (embaralhamento, verificação e reinício).  
   - CSS: Estilização com efeitos visuais.

---

## 🚀 **Tecnologias Utilizadas**  
- **HTML5**: Estruturação das páginas.  
- **CSS3**: Estilização com design responsivo, efeitos e animações.  
- **JavaScript**: Funcionalidades interativas e manipulação do DOM.  

---

## 🛠️ **Como Executar o Projeto**

### Passo 1: Clone o Repositório
Abra o terminal e execute:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### Passo 2: Instale as Dependências
```bash
npm install
```

### Passo 3: Execute os Testes
```bash
npm test
```
