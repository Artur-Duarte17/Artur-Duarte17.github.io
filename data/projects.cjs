module.exports = [
  {
    id: "fotuni",
    name: "Fotuni",
    category: "Pesquisa",
    tech: ["Python", "Streamlit", "InsightFace / ArcFace", "ResNet50"],
    summary: "Busca de fotografias por pessoa e semelhança visual.",
    problem:
      "Encontrar fotografias relevantes em um álbum sem depender apenas de uma revisão manual de todos os arquivos.",
    contribution:
      "Código individual da aplicação e da pesquisa em recuperação de imagens. O repositório reúne interface, indexação, ranking e testes.",
    decision:
      "O processamento e os índices ficam no computador. A aplicação oferece busca facial e visual; o código de ranking separa as regras de busca dos adaptadores de modelos e armazenamento.",
    limit:
      "A pontuação representa semelhança, não certeza de identidade. A fusão facial + global é experimental. Uma demonstração pública deve usar imagens autorizadas, sem fotografias de crianças.",
    repo: "Projeto_de_Pesquisa",
    kind: "Pesquisa individual",
  },
  {
    id: "caderneta",
    name: "Caderneta",
    category: "Web",
    tech: ["Flutter Web", "Dart", "REST", "Scrum"],
    summary: "Interface para gestão de vendas a prazo, clientes e pagamentos.",
    problem:
      "Organizar o acompanhamento de vendas a prazo e pagamentos, com acessos diferentes para operação e consulta pelo cliente.",
    contribution:
      "Frontend e gestão do projeto com Scrum. O backend faz parte do trabalho em equipe e não é apresentado como autoria minha.",
    decision:
      "Interface integrada à API, com sessão, navegação por perfil e estados de carregamento e erro. O frontend atual está escrito em Flutter Web.",
    limit:
      "O sistema completo depende do backend e do banco de dados. A ilustração conceitual representa a ideia da interface; não é uma captura do produto.",
    repo: "Caderneta",
    kind: "Projeto em equipe",
  },
  {
    id: "academico",
    name: "Sistema Acadêmico Distribuído",
    category: "Backend",
    tech: ["Java", "Spring Boot", "gRPC", "RabbitMQ", "Eureka", "Docker"],
    summary: "Microsserviços para matrículas, vagas e eventos acadêmicos.",
    problem:
      "Coordenar operações de matrícula entre serviços independentes, com comunicação síncrona e eventos assíncronos.",
    contribution:
      "Atuação compartilhada nas frentes de RPC, Eureka, Aluno e Matrícula. O sistema foi desenvolvido em equipe.",
    decision:
      "gRPC no fluxo de reserva de vagas, Feign em consultas e RabbitMQ para eventos. O serviço de matrícula tenta compensar a reserva se a gravação local falhar.",
    limit:
      "Projeto acadêmico. A publicação de eventos é best-effort e não deve ser descrita como entrega garantida. Os vários repositórios de serviços compõem um único projeto.",
    repo: "sd_academico_docs",
    kind: "Projeto em equipe",
  },
  {
    id: "movel",
    name: "MovelControl",
    category: "Backend",
    tech: ["Java", "Spring Boot", "JPA", "REST"],
    summary: "API de gestão para marcenaria, com pedidos e orçamentos.",
    problem:
      "Representar os processos de uma marcenaria por meio de uma API com entidades e regras de negócio.",
    contribution:
      "Contribuições nos módulos de Pedido e Orçamento. O repositório registra outros colaboradores responsáveis por outras partes do sistema.",
    decision:
      "Separação em controller, service, repository e DTO. O código de Pedido relaciona o pedido a um orçamento e constrói respostas com links HATEOAS.",
    limit:
      "O projeto tem escopo acadêmico. A presença de testes no repositório não equivale a validação de produção; os testes da API não foram executados na preparação deste portfólio.",
    repo: "MovelControl",
    kind: "Projeto em equipe",
  },
  {
    id: "vizinhos",
    name: "Entre Vizinhos",
    category: "Mobile",
    tech: ["Kotlin", "Android", "Firebase"],
    summary: "Marketplace local para conectar compradores e vendedores.",
    problem:
      "Centralizar ofertas de produtos e serviços locais que ficam dispersas em grupos de mensagens.",
    contribution:
      "Planejamento, requisitos e camada de dados/autenticação, conforme os registros profissionais fornecidos.",
    decision:
      "Aplicativo Android com autenticação Firebase e dados no Firestore. O repositório descreve feed, categorias e gerenciamento de anúncios.",
    limit:
      "Há funcionalidades e validações pendentes registradas no README. É apresentado como projeto em desenvolvimento.",
    repo: "Entre_Vizinhos",
    kind: "Projeto acadêmico em equipe",
  },
  {
    id: "macauba",
    name: "Sementes de macaúba",
    category: "Pesquisa",
    tech: ["Python", "PyTorch", "YOLO", "Machine learning"],
    summary: "Estimativa de risco de contaminação posterior em sementes.",
    problem:
      "Investigar associações entre imagens iniciais, metadados experimentais e contaminação observada posteriormente.",
    contribution:
      "Pesquisa aplicada com pipeline de preparação, classificação, avaliação e triagem.",
    decision:
      "Comparação de modelos e cenários usando imagens, recortes e metadados. O enquadramento do problema distingue predição de risco de observação direta de infecção.",
    limit:
      "Não é uma IA que detecta infecção visível nas imagens iniciais. Resultados e limites precisam acompanhar qualquer conclusão científica.",
    repo: "classificacao-sementes-macauba",
    kind: "Pesquisa aplicada",
  },
  {
    id: "credito",
    name: "Credit Default Prediction",
    category: "Pesquisa",
    tech: ["R", "Machine learning", "Validação cruzada"],
    summary: "Pipeline de comparação de modelos para risco de inadimplência.",
    problem:
      "Comparar modelos de classificação com atenção à sensibilidade, especificidade e seleção de limiar.",
    contribution: "Projeto individual de aprendizado de máquina tabular em R.",
    decision:
      "O protocolo documentado separa exploração e confirmação. O teste final fica reservado para avaliação; balanceamento e calibração são realizados no treinamento.",
    limit:
      "Experimento com uma base de dados, sem alegação de uso em concessão real de crédito. Métricas dependem do cenário de avaliação.",
    repo: "credit-default-prediction-r",
    kind: "Projeto individual",
  },
  {
    id: "drug",
    name: "Drug Consumption Project",
    category: "Pesquisa",
    tech: ["R", "caret", "Classificação"],
    summary: "Experimentos de classificação e comparação com um artigo.",
    problem:
      "Reproduzir e investigar resultados de classificação binária em uma base de consumo de drogas.",
    contribution:
      "Projeto individual em R com organização da pipeline, experimentos e avaliação.",
    decision:
      "Scripts separados para pré-processamento, balanceamento, métricas, treino e geração de tabelas e gráficos.",
    limit:
      "Projeto de pesquisa e aprendizado. Os resultados não representam diagnóstico individual nem uma aplicação clínica.",
    repo: "drug_consumption_project",
    kind: "Projeto individual",
  },
  {
    id: "web",
    name: "Portfólio pessoal",
    category: "Web",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    summary: "Site estático com apresentação profissional e catálogo de projetos.",
    problem:
      "Apresentar experiência, pesquisa e projetos em um único endereço, permitindo explorar tecnologias e participação individual.",
    contribution:
      "Organização da apresentação profissional e dos projetos, com contexto, decisões e limites de cada trabalho.",
    decision:
      "Conteúdo estático com detalhes nativos, busca no navegador e animações como melhoria progressiva. Publicação preparada para GitHub Pages.",
    limit:
      "As ilustrações são conceituais. O site apresenta os projetos; as aplicações completas e suas dependências ficam nos respectivos repositórios.",
    repo: "Artur-Duarte17.github.io",
    kind: "Portfólio profissional",
  },
  {
    id: "quarkus",
    name: "Mensagens com Quarkus",
    category: "Backend",
    tech: ["Java", "Quarkus", "HTTP"],
    summary: "API simples para estudar comunicação request/reply.",
    problem:
      "Relacionar comunicação HTTP com passagem de mensagens entre processos.",
    contribution:
      "Atividade acadêmica de implementação de uma API de mensagens.",
    decision:
      "Endpoints para criar, consultar e remover mensagens, com armazenamento em memória.",
    limit:
      "Exercício sem banco de dados ou autenticação, com foco no mecanismo de comunicação.",
    repo: "http-quarkus-mensagens",
    kind: "Atividade acadêmica",
  },
  {
    id: "relogio",
    name: "Relógio mundial TCP / UDP",
    category: "Fundamentos",
    tech: ["Java", "Sockets", "Concorrência"],
    summary:
      "Três versões para comparar comunicação e atendimento concorrente.",
    problem:
      "Consultar horários de diferentes fusos por comunicação cliente-servidor.",
    contribution:
      "Atividade acadêmica com versões UDP, TCP sequencial e TCP com múltiplas threads.",
    decision:
      "Comparação prática de DatagramSocket, conexão TCP e concorrência no atendimento.",
    limit:
      "Exercício de redes e sistemas distribuídos, com execução local documentada.",
    repo: "Sistema-Distribuido-de-Relogio-Mundial-TCP-UDP-",
    kind: "Atividade acadêmica",
  },
  {
    id: "flutter",
    name: "Calculadora em Flutter",
    category: "Mobile",
    tech: ["Flutter", "Dart"],
    summary: "Exercício de interface e lógica de uma calculadora.",
    problem: "Praticar composição de interface e tratamento de operações.",
    contribution: "Exercício de aprendizagem em Flutter.",
    decision:
      "Interface e lógica de interação reunidas em uma aplicação pequena.",
    limit:
      "O README ainda é o padrão do projeto. É um trabalho complementar, apresentado como exercício.",
    repo: "calculadora_em_flutter",
    kind: "Exercício",
  },
  {
    id: "android",
    name: "Exercícios Android",
    category: "Mobile",
    tech: ["Kotlin", "Android"],
    summary: "Atividades de programação para dispositivos móveis.",
    problem:
      "Praticar os fundamentos de desenvolvimento de aplicações Android.",
    contribution:
      "Atividades acadêmicas registradas nos repositórios ProvaPDM_ADM e Estadoscombandeira.",
    decision:
      "Projetos pequenos voltados ao aprendizado e à avaliação da disciplina.",
    limit:
      "A documentação disponível é breve. Não são apresentados como produtos completos.",
    repo: "ProvaPDM_ADM",
    kind: "Atividades acadêmicas",
  },
  {
    id: "bootstrap",
    name: "Estudos de Bootstrap",
    category: "Fundamentos",
    tech: ["HTML", "Bootstrap"],
    summary: "Experimentos com grids, containers e breakpoints.",
    problem: "Entender a organização de layouts responsivos.",
    contribution: "Exercícios de fundamentos do frontend.",
    decision:
      "Páginas pequenas para explorar o sistema de grid e os pontos de quebra.",
    limit: "Repositório de estudo com documentação limitada.",
    repo: "Curso-Bootstrap",
    kind: "Exercícios",
  },
  {
    id: "pubsub",
    name: "Publish / Subscribe",
    category: "Fundamentos",
    tech: ["Sistemas distribuídos"],
    summary: "Atividade complementar sobre publicação e assinatura.",
    problem:
      "Explorar o padrão de comunicação entre publicadores e assinantes.",
    contribution: "Atividade de estudo registrada no GitHub.",
    decision:
      "O repositório é mantido como referência de aprendizagem. O Sistema Acadêmico é o caso mais desenvolvido de mensageria neste portfólio.",
    limit:
      "A documentação não detalha o funcionamento. O cartão aponta para o código sem atribuir resultados não verificados.",
    repo: "PublishSubscirbe",
    kind: "Atividade acadêmica",
  },
];
