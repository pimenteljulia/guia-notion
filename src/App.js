import React, { useState } from 'react';

// Componente principal do aplicativo
const App = () => {
  // Estado para gerenciar a seção ativa do guia
  const [activeSection, setActiveSection] = useState('welcome');
  // Estado para gerenciar a visibilidade das perguntas do FAQ (lista suspensa)
  const [openFAQ, setOpenFAQ] = useState(null);

  // Paleta de cores mais suave (tons de verde e off-white)
  const colors = {
    primary: '#4A6B6A', // Verde Azulado Suave - para o cabeçalho e botões de navegação ativos
    secondary: '#E0EDE0', // Verde Sálvia Muito Claro - para os fundos das seções de conteúdo
    background: '#F8FBF8', // Verde Acinzentado Muito Claro - para o fundo principal da página e botões do FAQ
    text: '#3A4E4D', // Verde Azulado Escuro - para o texto geral
    highlight: '#87BBA2', // Verde-Azulado Suave - para o texto de comandos e títulos destacados
    accent: '#D3E7D3', // Verde Sálvia Ainda Mais Claro - para as bordas das caixas de destaque
    lightText: '#FFFFFF', // Branco - para o texto em fundos primários escuros
  };

  // Estilos comuns para as seções do conteúdo
  const sectionStyle = 'p-6 rounded-lg shadow-lg mb-8 mx-auto';
  const headingStyle = 'text-3xl font-bold mb-4 text-center';
  const subHeadingStyle = 'text-2xl font-semibold mb-3';
  const textStyle = 'text-lg leading-relaxed mb-4';
  // Estilo para as caixas de destaque ("Como isso ajuda no trabalho acadêmico")
  const highlightBoxStyle = 'border-l-4 pl-4 py-2 my-4 bg-secondary/30 rounded-md';
  // Estilo para os comandos de clique
  const commandStyle = 'font-mono bg-gray-200 text-highlight px-2 py-1 rounded-md text-base';
  // Estilo para os links
  const linkStyle = 'text-blue-600 hover:underline';

  // Componente de botão de navegação
  const NavButton = ({ sectionId, label }) => (
    <button
      onClick={() => setActiveSection(sectionId)}
      // Margem horizontal e vertical para espaçamento maior entre os botões
      className={`px-4 py-2 mx-3 my-1 rounded-md transition-all duration-300 ease-in-out
        ${activeSection === sectionId
          ? `bg-primary text-lightText shadow-md`
          : `bg-secondary text-text hover:bg-highlight hover:text-lightText`
        }
      `}
      style={{ boxShadow: activeSection === sectionId ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none' }}
    >
      {label}
    </button>
  );

  // Função para alternar a visibilidade das perguntas do FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* Cabeçalho do aplicativo */}
      <header className="py-6 shadow-md" style={{ backgroundColor: colors.primary }}>
        <h1 className="text-4xl font-extrabold text-center" style={{ color: colors.lightText }}>
          Guia do Notion: Sua Jornada Acadêmica Simplificada
        </h1>
      </header>

      {/* Barra de navegação com botões para cada seção */}
      <nav className="py-6 shadow-md flex flex-wrap justify-center" style={{ backgroundColor: colors.secondary }}>
        <NavButton sectionId="welcome" label="Bem-vindo" />
        <NavButton sectionId="firstSteps" label="Primeiros Passos" />
        <NavButton sectionId="addingBlocks" label="Adicionando Blocos" />
        <NavButton sectionId="organizingBlocks" label="Organizando Blocos" />
        <NavButton sectionId="navigation" label="Navegação" />
        <NavButton sectionId="templates" label="Modelos" />
        <NavButton sectionId="notionAI" label="IA do Notion" />
        <NavButton sectionId="notionCalendar" label="Notion Calendar" />
        <NavButton sectionId="notionMail" label="Notion Mail" />
        <NavButton sectionId="collaboration" label="Colaboração" />
        <NavButton sectionId="faq" label="FAQ" />
      </nav>

      {/* Área principal de conteúdo */}
      <main className="container mx-auto p-8 max-w-4xl">

        {/* Seção de Boas-vindas */}
        {activeSection === 'welcome' && (
          <section className={sectionStyle} style={{ backgroundColor: colors.secondary }}>
            <h2 className={headingStyle} style={{ color: colors.primary }}>Inicie sua jornada no Notion</h2>
            <p className={textStyle}>
              Bem-vindo ao Notion! Essa plataforma versátil é um espaço de trabalho tudo-em-um onde você pode escrever,
              planear, organizar e colaborar. Se você nunca usou o Notion antes, esse aplicativo é para você.
            </p>
          </section>
        )}

        {/* Seção 1: Primeiros passos */}
        {activeSection === 'firstSteps' && (
          <section className={sectionStyle} style={{ backgroundColor: colors.secondary }}>
            <h2 className={headingStyle} style={{ color: colors.primary }}>1. Primeiros passos</h2>
            <p className={textStyle}>
              O Notion funciona com <span className="font-semibold">páginas</span> e <span className="font-semibold">blocos</span>.
              Pense em uma página como um documento ou um quadro, e blocos como os elementos dentro dela
              (texto, imagens, listas, tabelas, etc.).
            </p>
            <h3 className={subHeadingStyle} style={{ color: colors.highlight }}>Criando sua primeira página:</h3>
            <p className={textStyle}>
              Ao abrir o Notion, você verá uma barra lateral à esquerda. Clique em <span className={commandStyle}>+ Nova página</span>
              (ou em <span className={commandStyle}>Adicionar uma página</span> na barra lateral).
            </p>
            <div className="flex justify-center my-4">
              {/* Imagem: Nova página no Notion */}
              <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6JQdtevqi0Xc2AupdtZtsa%2F360496561e298b13aa47d6a13db9e44e%2FGroup_12.png&w=1920&q=75" alt="[Image of Nova página no Notion]" className="max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            <p className={textStyle}>
              Dê um título à sua página. Digite-o na linha superior.
            </p>
            <div className="flex justify-center my-4">
              {/* Vídeo: Criação de página no Notion */}
              <video controls src="https://videos.ctfassets.net/spoqsaf9291f/8OWBURBJcbGefqCwFRnda/f3cc98db66b50601f4736e9c875bc2d7/new_createyourfirstpage2.mp4" className="max-w-full h-auto rounded-lg shadow-md">
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            {/* Título "Saiba mais" destacado */}
            <p className="font-extrabold text-xl mt-6 mb-2" style={{ color: colors.highlight }}>Saiba mais: </p>
            <p className={textStyle}>
              Para uma introdução visual: <a href="https://www.youtube.com/watch?v=sK33q9a-iK4" target="_blank" rel="noopener noreferrer" className={linkStyle}>Como criar um site no Notion | É muito fácil!</a> (Esse vídeo, embora sobre sites, mostra a criação de páginas e o layout básico).
            </p>
            {/* Caixa de destaque "Como isso ajuda no trabalho acadêmico" */}
            <div className={highlightBoxStyle} style={{ borderColor: colors.accent }}>
              <p className="font-extrabold text-xl" style={{ color: colors.highlight }}>Como isso ajuda no trabalho acadêmico:</p>
              <p className={textStyle}>
                Crie uma página principal para seu artigo ou dissertação. Dentro dela, você pode ter subpáginas para cada capítulo,
                seção, ou até mesmo para a revisão bibliográfica, metodologia e conclusões. Isso cria uma estrutura clara e fácil de navegar.
              </p>
            </div>
          </section>
        )}

        {/* Seção: Adicionando blocos (o que você pode colocar em uma página) */}
        {activeSection === 'addingBlocks' && (
          <section className={sectionStyle} style={{ backgroundColor: colors.secondary }}>
            <h2 className={headingStyle} style={{ color: colors.primary }}>Adicionando blocos (o que você pode colocar em uma página)</h2>
            <p className={textStyle}>
              Clique em qualquer lugar da página vazia. Você verá um <span className="font-semibold">+</span> (sinal de mais) ou a opção <span className="font-semibold">Digite '/' para comandos</span>.
            </p>
            <p className={textStyle}>
              <span className="font-bold" style={{ color: colors.highlight }}>Comando Básico:</span> Digite <span className={commandStyle}>/</span> (barra) e uma lista de opções de blocos aparecerá.
            </p>
            <div className="flex justify-center my-4">
              {/* Vídeo: Comando de barra no Notion */}
              <video controls src="https://videos.ctfassets.net/spoqsaf9291f/3HVip8XgcEoqQcYZrraMRN/82b86f85e85e0196be660f116ec1fe82/slash_command.mp4" className="max-w-full h-auto rounded-lg shadow-md">
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <p className={textStyle}>Experimente:</p>
            <ul className="list-disc pl-8 mb-4">
              <li className={textStyle}>Digite <span className={commandStyle}>/texto</span> e pressione Enter para adicionar um bloco de texto.</li>
              <li className={textStyle}>Digite <span className={commandStyle}>/cabeçalho 1</span> para um título grande.</li>
              <li className={textStyle}>Digite <span className={commandStyle}>/lista de verificação</span> para uma lista de tarefas.</li>
              <li className={textStyle}>Digite <span className={commandStyle}>/tabela</span> para criar uma tabela simples.</li>
              <li className={textStyle}>Digite <span className={commandStyle}>/imagem</span> para incorporar uma imagem (você pode arrastar e soltar ou fazer upload).</li>
            </ul>
            <p className={textStyle}>
              <span className="font-bold" style={{ color: colors.highlight }}>Dica:</span> Você também pode simplesmente começar a digitar para adicionar texto,
              e o Notion automaticamente o formatará como um bloco de texto.
            </p>
            <div className="flex justify-center my-4">
              {/* Imagem: Adicionando blocos no Notion */}
              <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FLF7MIVlU6X3mkKHAWqTyG%2Ff31ce54cfbd2a7fe677193e876b5a25b%2Fcreateyourfirstpage3.png&w=1920&q=75" alt="[Image of Adicionando blocos no Notion]" className="max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            {/* Título "Saiba mais" destacado */}
            <p className="font-extrabold text-xl mt-6 mb-2" style={{ color: colors.highlight }}>Saiba mais: </p>
            <p className={textStyle}>
              Mais detalhes sobre mídias e blocos: <a href="https://www.notion.so/help/images-files-media" target="_blank" rel="noopener noreferrer" className={linkStyle}>Imagens, arquivos e mídias – Centro de ajuda do Notion</a>
            </p>
            {/* Caixa de destaque "Como isso ajuda no trabalho acadêmico" */}
            <div className={highlightBoxStyle} style={{ borderColor: colors.accent }}>
              <p className="font-extrabold text-xl" style={{ color: colors.highlight }}>Como isso ajuda no trabalho acadêmico:</p>
              <p className={textStyle}>
                Use blocos de texto para rascunhar seus parágrafos, cabeçalhos para estruturar seções,
                listas de verificação para acompanhar tarefas (ex: "revisar introdução", "encontrar 3 artigos sobre X").
                Tabelas podem ser usadas para organizar dados de pesquisa ou comparar teorias.
                Imagens e arquivos podem ser figuras do seu trabalho ou PDFs de artigos que você está lendo.
              </p>
            </div>
          </section>
        )}

        {/* Seção: Organizando blocos */}
        {activeSection === 'organizingBlocks' && (
          <section className={sectionStyle} style={{ backgroundColor: colors.secondary }}>
            <h2 className={headingStyle} style={{ color: colors.primary }}>Organizando blocos</h2>
            <p className={textStyle}>
              Passe o mouse sobre um bloco. Você verá um ícone de seis pontos à esquerda <span className="font-semibold">⋮⋮</span>.
            </p>
            <p className={textStyle}>
              <span className="font-bold" style={{ color: colors.highlight }}>Comando Básico:</span> Clique e arraste o ícone de seis pontos para mover o bloco para outro local na página.
            </p>
            <p className={textStyle}>
              <span className="font-bold" style={{ color: colors.highlight }}>Comando Básico:</span> Clique no ícone de seis pontos para ver opções como <span className={commandStyle}>Excluir</span>,
              <span className={commandStyle}>Duplicar</span>, <span className={commandStyle}>Transformar em</span> (para mudar o tipo de bloco), etc.
            </p>
            {/* Caixa de destaque "Como isso ajuda no trabalho acadêmico" */}
            <div className={highlightBoxStyle} style={{ borderColor: colors.accent }}>
              <p className="font-extrabold text-xl" style={{ color: colors.highlight }}>Como isso ajuda no trabalho acadêmico:</p>
              <p className={textStyle}>
                Facilita a reestruturação de ideias. Se você decidir que uma seção faz mais sentido em outro capítulo,
                é só arrastar e soltar. Duplicar blocos é útil para testar diferentes formulações de frases sem perder o original.
              </p>
            </div>
          </section>
        )}

        {/* Seção 2: Navegando e organizando */}
        {activeSection === 'navigation' && (
          <section className={sectionStyle} style={{ backgroundColor: colors.secondary }}>
            <h2 className={headingStyle} style={{ color: colors.primary }}>2. Navegando e organizando</h2>
            <h3 className={subHeadingStyle} style={{ color: colors.highlight }}>Barra Lateral (Espaço de Trabalho):</h3>
            <p className={textStyle}>
              À esquerda, a barra lateral mostra todas as suas páginas. Você pode arrastá-las para dentro de outras páginas para criar subpáginas e organizar sua estrutura.
            </p>
            <div className="flex justify-center my-4">
              {/* Imagem: Barra lateral do Notion */}
              <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2tpJheiXLOwBH9ZdZGnQt3%2F514bd06e33972f166580fa5c50bcdbdf%2FGroup_61.png&w=3840&q=75" alt="[Image of Barra lateral do Notion]" className="max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            <p className={textStyle}>
              <span className="font-bold" style={{ color: colors.highlight }}>Comando Básico:</span> Arraste uma página sobre outra para transformá-la em uma subpágina.
            </p>
            <p className={textStyle}>
              Você pode ter vários "espaços de trabalho" na barra lateral se estiver em uma equipe ou tiver diferentes áreas da sua vida para organizar.
            </p>
            <div className="flex justify-center my-4">
              {/* Imagem: Múltiplos espaços de trabalho no Notion */}
              <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F7uyAupp0Q6w9tivfcSme0y%2Ffdac27a956edbd1fd5ff22049eff0450%2FGroup_62__1_.png&w=3840&q=75" alt="[Image of Múltiplos espaços de trabalho no Notion]" className="max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            {/* Título "Saiba mais" destacado */}
            <p className="font-extrabold text-xl mt-6 mb-2" style={{ color: colors.highlight }}>Saiba mais: </p>
            <p className={textStyle}>
              Guia completo sobre a barra lateral: <a href="https://www.notion.so/help/navigate-with-the-sidebar" target="_blank" rel="noopener noreferrer" className={linkStyle}>Navegar com a barra lateral – Centro de ajuda do Notion</a>
            </p>
            {/* Caixa de destaque "Como isso ajuda no trabalho acadêmico" */}
            <div className={highlightBoxStyle} style={{ borderColor: colors.accent }}>
              <p className="font-extrabold text-xl" style={{ color: colors.highlight }}>Como isso ajuda no trabalho acadêmico:</p>
              <p className={textStyle}>
                Sua barra lateral se torna seu "sumário" dinâmico. Você pode ter uma seção para sua dissertação,
                outra para artigos que está lendo, e uma terceira para cursos. Dentro da sua dissertação,
                cada capítulo pode ser uma subpágina, facilitando a navegação entre as partes do seu trabalho.
              </p>
            </div>
          </section>
        )}

        {/* Seção: Modelos (Templates) */}
        {activeSection === 'templates' && (
          <section className={sectionStyle} style={{ backgroundColor: colors.secondary }}>
            <h2 className={headingStyle} style={{ color: colors.primary }}>Modelos (Templates)</h2>
            <p className={textStyle}>
              O Notion oferece uma vasta biblioteca de modelos pré-construídos para diversas finalidades
              (planejamento de projetos, notas de reunião, rastreadores de hábitos, etc.).
            </p>
            <div className="flex justify-center my-4">
              {/* Imagem: Modelos do Notion */}
              <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2Fd52d36f6-4e73-4be1-9548-06df5c74b01c%2Fdesktop.png&w=1920&q=75" alt="[Image of Modelos do Notion]" className="max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            <p className={textStyle}>
              <span className="font-bold" style={{ color: colors.highlight }}>Comando Básico:</span> Ao criar uma nova página, você verá a opção <span className={commandStyle}>Modelos</span> ou
              <span className={commandStyle}>Escolher um modelo</span>. Explore-os para ter ideias e agilizar seu trabalho.
            </p>
            {/* Título "Saiba mais" destacado */}
            <p className="font-extrabold text-xl mt-6 mb-2" style={{ color: colors.highlight }}>Saiba mais: </p>
            <p className={textStyle}>
              Tutorial sobre como usar templates: <a href="https://www.youtube.com/watch?v=vV_C4r2Rz6g" target="_blank" rel="noopener noreferrer" className={linkStyle}>Como usar template no Notion | É mais simples do que você imagina!</a> (vídeo oficial)
            </p>
            {/* Caixa de destaque "Como isso ajuda no trabalho acadêmico" */}
            <div className={highlightBoxStyle} style={{ borderColor: colors.accent }}>
              <p className="font-extrabold text-xl" style={{ color: colors.highlight }}>Como isso ajuda no trabalho acadêmico:</p>
              <p className={textStyle}>
                Busque modelos de "Gerenciamento de Projetos", "Notas de Pesquisa", "Revisão Bibliográfica" ou
                "Planejamento de Tese/Dissertação". Você pode adaptá-los para criar um sistema de rastreamento de artigos lidos,
                um cronograma de escrita, ou um modelo para anotações de entrevistas.
              </p>
            </div>
          </section>
        )}

        {/* Seção 3: Poder da IA do Notion */}
        {activeSection === 'notionAI' && (
          <section className={sectionStyle} style={{ backgroundColor: colors.secondary }}>
            <h2 className={headingStyle} style={{ color: colors.primary }}>3. Poder da IA do Notion</h2>
            <p className={textStyle}>
              A IA do Notion está integrada diretamente nas suas páginas para ajudar a acelerar a escrita,
              resumir informações e gerar ideias.
            </p>
            <h3 className={subHeadingStyle} style={{ color: colors.highlight }}>Como usar a IA do Notion:</h3>
            <p className={textStyle}>
              <span className="font-bold" style={{ color: colors.highlight }}>Comando Básico (Nova solicitação de IA):</span> Em qualquer página, digite <span className={commandStyle}>Espaço</span>
              (a barra de espaço) ou <span className={commandStyle}>/ia</span> (barra e "ia"). Um menu da IA aparecerá.
            </p>
            <div className="flex justify-center my-4">
              {/* Vídeo: Nova solicitação de IA */}
              <video controls src="https://videos.ctfassets.net/spoqsaf9291f/Bt29zEuqDgWlTuvGnW2J1/c1b84034c755bdb50e178d9588ef22ef/blog_post_2.mp4" className="max-w-full h-auto rounded-lg shadow-md">
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <p className={textStyle}>
              <span className="font-bold" style={{ color: colors.highlight }}>Comando Básico (Expandir/Resumir/Traduzir texto existente):</span> Selecione um bloco de texto existente.
              Você verá uma opção <span className={commandStyle}>Perguntar à IA</span> que aparece acima ou ao lado do texto selecionado. Clique nela para ver as ações da IA.
            </p>
            <h3 className={subHeadingStyle} style={{ color: colors.highlight }}>Exemplos de Comandos para a IA:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li className={textStyle}>
                <span className="font-bold">Gerar ideias:</span> Digite <span className={commandStyle}>/ia</span> e escolha <span className={commandStyle}>Brainstorm de ideias para...</span>. Digite seu tópico.
              </li>
              <li className={textStyle}>
                <span className={commandStyle}>Resumir:</span> Selecione um parágrafo longo e escolha <span className={commandStyle}>Resumir</span>.
              </li>
              <li className={textStyle}>
                <span className={commandStyle}>Melhorar a escrita:</span> Selecione uma frase e escolha <span className={commandStyle}>Melhorar escrita</span>.
              </li>
              <li className={textStyle}>
                <span className={commandStyle}>Traduzir:</span> Selecione um texto e escolha <span className={commandStyle}>Traduzir para [idioma]</span>.
              </li>
            </ul>
            <div className="flex justify-center my-4">
              {/* Vídeo: Traduzir com IA */}
              <video controls src="https://videos.ctfassets.net/spoqsaf9291f/5uRTFSiDsnUBOqr10oQFTp/06a428eac4abdb2e0b7566022ed91c40/AI_translate.mp4" className="max-w-full h-auto rounded-lg shadow-md">
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <p className={textStyle}>
              <span className="font-bold">Rascunho:</span> Digite <span className={commandStyle}>/ia</span> e comece a digitar uma solicitação,
              como "Escreva um e-mail para meu gerente sobre...".
            </p>
            {/* Título "Saiba mais" destacado */}
            <p className="font-extrabold text-xl mt-6 mb-2" style={{ color: colors.highlight }}>Saiba mais: </p>
            <p className={textStyle}>
              Entenda o poder da IA do Notion: <a href="https://www.youtube.com/watch?v=y3yK_7n58oY" target="_blank" rel="noopener noreferrer" className={linkStyle}>Understand the power of Notion AI (for real)</a>
            </p>
            <p className={textStyle}>
              Guia sobre a IA do Notion: <a href="https://www.notion.so/help/notion-ai" target="_blank" rel="noopener noreferrer" className={linkStyle}>Notion AI – Centro de ajuda do Notion</a>
            </p>
            {/* Caixa de destaque "Como isso ajuda no trabalho acadêmico" */}
            <div className={highlightBoxStyle} style={{ borderColor: colors.accent }}>
              <p className="font-extrabold text-xl" style={{ color: colors.highlight }}>Como isso ajuda no trabalho acadêmico:</p>
              <ul className="list-disc pl-8 mb-4">
                <li className={textStyle}>
                  <span className="font-bold">Resumir artigos:</span> Copie e cole seções de artigos e peça para a IA resumir os pontos principais,
                  economizando tempo na revisão bibliográfica.
                </li>
                <li className={textStyle}>
                  <span className="font-bold">Brainstorming:</span> Use a IA para gerar ideias para tópicos de pesquisa, títulos de artigos
                  ou argumentos para sua dissertação.
                </li>
              </ul>
              <div className="flex justify-center my-4">
                {/* Vídeo: Função de chat */}
                <video controls src="https://videos.ctfassets.net/spoqsaf9291f/2HVUziQka7Dc6mDjmmDf4C/ef55c7e94813f65d12672f66e17d9494/chat_function.mp4" className="max-w-full h-auto rounded-lg shadow-md">
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
              <ul className="list-disc pl-8 mb-4">
                <li className={textStyle}>
                  <span className="font-bold">Melhorar a escrita:</span> Refine a clareza e a concisão de suas frases acadêmicas.
                  A IA pode ajudar a evitar clichês ou a reformular sentenças complexas.
                </li>
              </ul>
              <div className="flex justify-center my-4">
                {/* Vídeo: Melhorar a escrita com IA */}
                <video controls src="https://videos.ctfassets.net/spoqsaf9291f/1wEaooaRZsCkRzb4ES1zIj/2cb4c8aba21a2fb769626d338c085e51/improve_writing.mp4" className="max-w-full h-auto rounded-lg shadow-md">
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
              <ul className="list-disc pl-8 mb-4">
                <li className={textStyle}>
                  <span className="font-bold">Rascunhos iniciais:</span> Comece a escrever seções do seu trabalho com a ajuda da IA,
                  por exemplo, "Escreva uma introdução para um artigo sobre [seu tema]". Lembre-se sempre de revisar e adaptar
                  o conteúdo gerado pela IA para garantir originalidade e precisão.
                </li>
              </ul>
            </div>
          </section>
        )}

        {/* Seção 4: Notion Calendar (Calendário do Notion) */}
        {activeSection === 'notionCalendar' && (
          <section className={sectionStyle} style={{ backgroundColor: colors.secondary }}>
            <h2 className={headingStyle} style={{ color: colors.primary }}>4. Notion Calendar (Calendário do Notion)</h2>
            <p className={textStyle}>
              O Notion Calendar é um aplicativo de calendário separado que sincroniza com suas bases de dados do Notion
              e outros calendários (Google Calendar, etc.). Ele permite que você visualize suas tarefas e eventos do Notion
              em um formato de calendário.
            </p>
            <h3 className={subHeadingStyle} style={{ color: colors.highlight }}>Como usar o Notion Calendar:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li className={textStyle}>
                <span className="font-bold">Download:</span> O Notion Calendar é um aplicativo separado que você precisa
                baixar e instalar em seu dispositivo (disponível para desktop e dispositivos móveis).
              </li>
              <li className={textStyle}>
                <span className="font-bold">Conectando com o Notion:</span> Após o download, você será solicitado a conectar sua conta do Notion.
              </li>
              <li className={textStyle}>
                <span className="font-bold">Conectando Bases de Dados:</span> No Notion Calendar, você pode adicionar bases de dados do Notion
                que contêm datas (por exemplo, uma base de dados de projetos com datas de entrega). Os itens com datas aparecerão
                automaticamente no seu calendário.
              </li>
            </ul>
            <div className="flex justify-center my-4">
              {/* Imagem: Barra de menu do Notion Calendar */}
              <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F7t9TzEqVMWWGDDV16opOa5%2F61eb8f1d0acfc631ef1fbe55b363c026%2Fmenu-bar.png&w=3840&q=75" alt="[Image of Barra de menu do Notion Calendar]" className="max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            <ul className="list-disc pl-8 mb-4">
              <li className={textStyle}>
                <span className="font-bold">Visualização:</span> Você pode ver seus eventos do Google Calendar junto com os itens do Notion em uma única visualização.
              </li>
              <li className={textStyle}>
                <span className="font-bold">Arrastar e Soltar:</span> Altere as datas dos itens do Notion arrastando-os e soltando-os no calendário.
              </li>
            </ul>
            <div className="flex justify-center my-4">
              {/* Imagem: Arrastar e soltar no Notion Calendar */}
              <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3gsh1imLdjdG5xSZ3Tuq7L%2Fc74e3b3cb334171f0b2e296a44850a67%2Ftime-drag.png&w=2048&q=75" alt="[Image of Arrastar e soltar no Notion Calendar]" className="max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            {/* Título "Saiba mais" destacado */}
            <p className="font-extrabold text-xl mt-6 mb-2" style={{ color: colors.highlight }}>Saiba mais: </p>
            <p className={textStyle}>
              Tutorial completo: <a href="https://www.youtube.com/watch?v=Ff6dIu-oX_s" target="_blank" rel="noopener noreferrer" className={linkStyle}>Como instalar e usar o Notion Calendar?</a>
            </p>
            {/* Caixa de destaque "Como isso ajuda no trabalho acadêmico" */}
            <div className={highlightBoxStyle} style={{ borderColor: colors.accent }}>
              <p className="font-extrabold text-xl" style={{ color: colors.highlight }}>Como isso ajuda no trabalho acadêmico:</p>
              <p className={textStyle}>
                Planeje seus prazos! Crie uma base de dados de "Tarefas da Dissertação" com colunas para data de entrega,
                status e prioridade. Conecte essa base de dados ao Notion Calendar para ter uma visão clara de quando
                você precisa terminar a revisão de literatura, a coleta de dados, a escrita de cada capítulo e a revisão final.
                Gerenciar seu tempo se torna muito mais visual.
              </p>
            </div>
          </section>
        )}

        {/* Seção 5: Notion Mail (E-mail no Notion) */}
        {activeSection === 'notionMail' && (
          <section className={sectionStyle} style={{ backgroundColor: colors.secondary }}>
            <h2 className={headingStyle} style={{ color: colors.primary }}>5. Notion Mail (E-mail no Notion)</h2>
            <p className={textStyle}>
              O Notion Mail é uma funcionalidade que permite capturar e organizar e-mails diretamente no Notion,
              transformando-os em itens acionáveis dentro de suas bases de dados. É importante notar que o Notion Mail
              não é um cliente de e-mail completo como o Gmail ou Outlook, mas sim uma ferramenta para integrar e-mails
              no seu fluxo de trabalho do Notion.
            </p>
            <h3 className={subHeadingStyle} style={{ color: colors.highlight }}>Como usar o Notion Mail:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li className={textStyle}>
                <span className="font-bold">Ativação:</span> O Notion Mail geralmente é ativado por meio de integrações ou extensões,
                permitindo que você encaminhe e-mails para um endereço específico do Notion ou use uma extensão do navegador para "salvar" e-mails.
                Verifique as configurações de "Conectar aplicativos" ou "Compartilhar" dentro de uma base de dados específica para opções de e-mail.
              </li>
            </ul>
            <div className="flex justify-center my-4">
              {/* GIF: Visualizações personalizadas do Notion Mail */}
              <img src="https://images.ctfassets.net/spoqsaf9291f/6taJIVY0e2uRLgdLvUORxU/c8b4554349500bbb97bc4b6ef8b0caea/Mail_CustomViews_Professionals_v001.gif" alt="[Image of Visualizações personalizadas do Notion Mail]" className="max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            <h3 className={subHeadingStyle} style={{ color: colors.highlight }}>Capturando E-mails:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li className={textStyle}>
                <span className="font-bold">Encaminhar para uma base de dados:</span> Você pode configurar um endereço de e-mail exclusivo para uma base de dados do Notion.
                Ao encaminhar um e-mail para esse endereço, ele será adicionado como um novo item na base de dados.
              </li>
            </ul>
            <div className="flex justify-center my-4">
              {/* GIF: Rótulo automático do Notion Mail */}
              <img src="https://images.ctfassets.net/spoqsaf9291f/rNfBAnircxv1AAeweB1md/f8d3e639f2003d61c93711beed0f6534/Notion_Mail_Auto_Label.gif" alt="[Image of Rótulo automático do Notion Mail]" className="max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            <ul className="list-disc pl-8 mb-4">
              <li className={textStyle}>
                <span className="font-bold">Extensão do navegador:</span> Algumas extensões de navegador permitem que você salve e-mails diretamente de sua caixa de entrada para o Notion.
              </li>
              <li className={textStyle}>
                <span className="font-bold">Transformando E-mails em Ações:</span> Uma vez que o e-mail está no Notion, você pode adicionar propriedades
                (data de vencimento, prioridade, pessoa responsável), relacioná-lo a outros projetos e transformá-lo em uma tarefa.
              </li>
            </ul>
            <div className="flex justify-center my-4">
              {/* GIF: Agendamento de e-mails no Notion Mail */}
              <img src="https://images.ctfassets.net/spoqsaf9291f/17yoi5FAPehEAUrlszfTIV/41a010a3546c692f714cb205c567b52c/Notion_Mail_Scheduling.gif" alt="[Image of Agendamento de e-mails no Notion Mail]" className="max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            {/* Título "Saiba mais" destacado */}
            <p className="font-extrabold text-xl mt-6 mb-2" style={{ color: colors.highlight }}>Saiba mais: </p>
            <p className={textStyle}>
              Guia de configuração e uso do Notion Mail: <a href="https://www.youtube.com/watch?v=2nQ-g_rLw5Q" target="_blank" rel="noopener noreferrer" className={linkStyle}>Notion Mail Setup & Ultimate Guide (2025)</a>
            </p>
            {/* Caixa de destaque "Como isso ajuda no trabalho acadêmico" */}
            <div className={highlightBoxStyle} style={{ borderColor: colors.accent }}>
              <p className="font-extrabold text-xl" style={{ color: colors.highlight }}>Como isso ajuda no trabalho acadêmico:</p>
              <p className={textStyle}>
                Mantenha um registro de comunicações importantes. Encaminhe e-mails do seu orientador, de editores de periódicos
                ou de colegas de pesquisa para uma base de dados no Notion. Isso permite que você rastreie conversas,
                adicione datas de acompanhamento e vincule e-mails a tarefas ou projetos específicos dentro do seu trabalho acadêmico.
              </p>
            </div>
          </section>
        )}

        {/* Seção 6: Compartilhamento e colaboração */}
        {activeSection === 'collaboration' && (
          <section className={sectionStyle} style={{ backgroundColor: colors.secondary }}>
            <h2 className={headingStyle} style={{ color: colors.primary }}>6. Compartilhamento e colaboração</h2>
            <p className={textStyle}>
              A colaboração pode ajudar na produção de trabalhos acadêmicos em conjunto. Saiba como usar essa funcionalidade!
            </p>
            <h3 className={subHeadingStyle} style={{ color: colors.highlight }}>Compartilhar uma página:</h3>
            <p className={textStyle}>
              No canto superior direito de qualquer página, clique em <span className={commandStyle}>Compartilhar</span>.
            </p>
            <p className={textStyle}>
              Você pode convidar pessoas por e-mail ou gerar um link público para a página.
            </p>
            <div className="flex justify-center my-4">
              {/* Imagem: Opção de compartilhar página no Notion */}
              <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6xAq9ETarG7humz2xNj0ve%2F0150b5f92e5ea1527ca90fe77dcb2558%2Fshareyourwork1__1_.png&w=1920&q=75" alt="[Image of Opção de compartilhar página no Notion]" className="max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            <p className={textStyle}>Defina as permissões (visualizar, comentar, editar).</p>
            <h3 className={subHeadingStyle} style={{ color: colors.highlight }}>Comentar:</h3>
            <p className={textStyle}>
              Passe o mouse sobre qualquer bloco. Você verá um <span className="font-semibold">+</span> (sinal de mais) e um balão de fala.
            </p>
            <p className={textStyle}>
              <span className="font-bold" style={{ color: colors.highlight }}>Comando Básico:</span> Clique no ícone <span className={commandStyle}>⋮⋮</span> que aparece à esquerda de qualquer bloco de conteúdo
              quando você passa o cursor sobre ele e selecione <span className={commandStyle}>Comentar</span> no menu exibido.
            </p>
            <div className="flex justify-center my-4">
              {/* Vídeo: Colaborar com pessoas */}
              <video controls src="https://videos.ctfassets.net/spoqsaf9291f/56eQgv5hzINGKYcQcVcQGu/d939f050786902cbb824ed6ad8c0c13a/collaboratewithpeople4.mp4" className="max-w-full h-auto rounded-lg shadow-md">
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <p className={textStyle}>
              <span className="font-bold" style={{ color: colors.highlight }}>Comando Básico:</span> Para mencionar alguém em um comentário (e enviar uma notificação),
              digite <span className={commandStyle}>@</span> seguido do nome da pessoa.
            </p>
            {/* Título "Saiba mais" destacado */}
            <p className="font-extrabold text-xl mt-6 mb-2" style={{ color: colors.highlight }}>Saiba mais: </p>
            <p className={textStyle}>
              Guia para configurações de compartilhamento: <a href="https://www.notion.so/help/guides/share-settings" target="_blank" rel="noopener noreferrer" className={linkStyle}>Guia para usar as configurações de compartilhamento e autorização do Notion</a>
            </p>
            {/* Caixa de destaque "Como isso ajuda no trabalho acadêmico" */}
            <div className={highlightBoxStyle} style={{ borderColor: colors.accent }}>
              <p className="font-extrabold text-xl" style={{ color: colors.highlight }}>Como isso ajuda no trabalho acadêmico:</p>
              <p className={textStyle}>
                Compartilhe rascunhos de capítulos com seu orientador ou colegas para feedback. Eles podem comentar
                diretamente nos parágrafos, facilitando a revisão. Se você estiver escrevendo um artigo em coautoria,
                todos podem trabalhar na mesma página simultaneamente, vendo as edições uns dos outros em tempo real.
              </p>
            </div>
          </section>
        )}

        {/* Seção FAQ (Perguntas Frequentes) */}
        {activeSection === 'faq' && (
          <section className={sectionStyle} style={{ backgroundColor: colors.secondary }}>
            <h2 className={headingStyle} style={{ color: colors.primary }}>FAQ</h2>
            <p className={textStyle}>Tire suas dúvidas sobre a plataforma!</p>

            {/* Item FAQ 1 */}
            <div className="border border-gray-300 rounded-md mb-2">
              <button
                className="w-full text-left p-4 flex justify-between items-center font-semibold"
                onClick={() => toggleFAQ(1)}
                style={{ backgroundColor: colors.background }}
              >
                P1: O Notion é gratuito?
                <span className="text-xl">{openFAQ === 1 ? '−' : '+'}</span>
              </button>
              {openFAQ === 1 && (
                <div className="p-4" style={{ backgroundColor: colors.background }}>
                  <p className={textStyle}>
                    R1: Sim, o Notion oferece um plano gratuito robusto, suficiente para a maioria dos usuários individuais.
                    Planos pagos com mais funcionalidades estão disponíveis para equipes e uso avançado. Para mais informações
                    sobre planos, visite a página oficial: <a href="https://www.notion.so/pricing" target="_blank" rel="noopener noreferrer" className={linkStyle}>Seu espaço de trabalho conectado para wikis, documentos e projetos - Notion</a>
                  </p>
                </div>
              )}
            </div>

            {/* Item FAQ 2 */}
            <div className="border border-gray-300 rounded-md mb-2">
              <button
                className="w-full text-left p-4 flex justify-between items-center font-semibold"
                onClick={() => toggleFAQ(2)}
                style={{ backgroundColor: colors.background }}
              >
                P2: Onde meus dados são armazenados no Notion?
                <span className="text-xl">{openFAQ === 2 ? '−' : '+'}</span>
              </button>
              {openFAQ === 2 && (
                <div className="p-4" style={{ backgroundColor: colors.background }}>
                  <p className={textStyle}>
                    R2: Os dados do Notion são armazenados na nuvem. Você pode acessá-los de qualquer dispositivo com conexão à internet,
                    seja pelo aplicativo de desktop, aplicativo móvel ou navegador web.
                  </p>
                </div>
              )}
            </div>

            {/* Item FAQ 3 */}
            <div className="border border-gray-300 rounded-md mb-2">
              <button
                className="w-full text-left p-4 flex justify-between items-center font-semibold"
                onClick={() => toggleFAQ(3)}
                style={{ backgroundColor: colors.background }}
              >
                P3: Posso usar o Notion offline?
                <span className="text-xl">{openFAQ === 3 ? '−' : '+'}</span>
              </button>
              {openFAQ === 3 && (
                <div className="p-4" style={{ backgroundColor: colors.background }}>
                  <p className={textStyle}>
                    R3: O Notion requer uma conexão com a internet para sincronizar e acessar a maioria dos seus dados. No entanto,
                    ele possui um cache offline que permite visualizar e editar algumas páginas recentes, e as alterações são
                    sincronizadas assim que você fica online novamente.
                  </p>
                </div>
              )}
            </div>

            {/* Item FAQ 4 */}
            <div className="border border-gray-300 rounded-md mb-2">
              <button
                className="w-full text-left p-4 flex justify-between items-center font-semibold"
                onClick={() => toggleFAQ(4)}
                style={{ backgroundColor: colors.background }}
              >
                P4: O que são "bases de dados" no Notion?
                <span className="text-xl">{openFAQ === 4 ? '−' : '+'}</span>
              </button>
              {openFAQ === 4 && (
                <div className="p-4" style={{ backgroundColor: colors.background }}>
                  <p className={textStyle}>
                    R4: Bases de dados são coleções poderosas de páginas no Notion que podem ser visualizadas de várias formas
                    (tabelas, quadros Kanban, calendários, galerias, etc.). Elas são a espinha dorsal para organizar informações
                    complexas, como projetos, tarefas e referências.
                  </p>
                  {/* Caixa de destaque "Como isso ajuda no trabalho acadêmico" */}
                  <div className={highlightBoxStyle} style={{ borderColor: colors.accent }}>
                    <p className="font-extrabold text-xl" style={{ color: colors.highlight }}>Como isso ajuda no trabalho acadêmico:</p>
                    <p className={textStyle}>
                      Bases de dados são <span className="font-semibold">fundamentais</span> para organizar sua pesquisa.
                      Você pode criar uma base de dados de "Revisão Bibliográfica" com colunas para: Título do artigo,
                      Autor, Ano, Resumo, Palavras-chave, Status de Leitura (Lido, Para ler, Anotado), Link para o PDF
                      e até uma coluna para "Principais Insights". Outra base de dados pode ser para "Dados da Pesquisa"
                      com colunas para participantes, datas de coleta, variáveis, etc. Isso transforma pilhas de artigos
                      ou anotações em um sistema pesquisável e filtrável. Para aprender mais sobre bases de dados, assista:
                      <a href="https://www.youtube.com/watch?v=F07N0M7Yw0A" target="_blank" rel="noopener noreferrer" className={linkStyle}> NOTION: Como usar a base de dados</a>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Item FAQ 5 */}
            <div className="border border-gray-300 rounded-md mb-2">
              <button
                className="w-full text-left p-4 flex justify-between items-center font-semibold"
                onClick={() => toggleFAQ(5)}
                style={{ backgroundColor: colors.background }}
              >
                P5: Como faço backup dos meus dados do Notion?
                <span className="text-xl">{openFAQ === 5 ? '−' : '+'}</span>
              </button>
              {openFAQ === 5 && (
                <div className="p-4" style={{ backgroundColor: colors.background }}>
                  <p className={textStyle}>
                    R5: O Notion faz backups automáticos dos seus dados. Além disso, você pode exportar suas páginas como
                    arquivos HTML, Markdown ou PDF para ter uma cópia local. Para isso, vá em
                    <span className={commandStyle}>Configurações e membros</span> &gt; <span className={commandStyle}>Configurações</span> &gt; <span className={commandStyle}>Exportar todo o conteúdo do espaço de trabalho</span>.
                    Para ver como exportar seu conteúdo, assista: <a href="https://www.youtube.com/watch?v=3R4B9jY-g0A" target="_blank" rel="noopener noreferrer" className={linkStyle}>Exportando o Seu Conteúdo no #Notion</a>
                  </p>
                </div>
              )}
            </div>

            {/* Item FAQ 6 */}
            <div className="border border-gray-300 rounded-md mb-2">
              <button
                className="w-full text-left p-4 flex justify-between items-center font-semibold"
                onClick={() => toggleFAQ(6)}
                style={{ backgroundColor: colors.background }}
              >
                P6: Posso migrar dados de outras ferramentas para o Notion?
                <span className="text-xl">{openFAQ === 6 ? '−' : '+'}</span>
              </button>
              {openFAQ === 6 && (
                <div className="p-4" style={{ backgroundColor: colors.background }}>
                  <p className={textStyle}>
                    R6: Sim! O Notion facilita a importação de dados de diversas ferramentas, como Evernote, Trello,
                    Asana, Google Docs, e arquivos Markdown/CSV. Na barra lateral, clique em <span className={commandStyle}>Importar</span> para ver as opções.
                  </p>
                  {/* Caixa de destaque "Como isso ajuda no trabalho acadêmico" */}
                  <div className={highlightBoxStyle} style={{ borderColor: colors.accent }}>
                    <p className="font-extrabold text-xl" style={{ color: colors.highlight }}>Como isso ajuda no trabalho acadêmico:</p>
                    <p className={textStyle}>
                      Se você já tem anotações em outras plataformas ou planilhas de dados, pode importá-las diretamente
                      para o Notion, consolidando tudo em um só lugar. Isso é ótimo para organizar anotações de aula,
                      reuniões de pesquisa ou dados preliminares. Para mais informações sobre importação de dados:
                      <a href="https://www.notion.so/help/import-data-into-notion" target="_blank" rel="noopener noreferrer" className={linkStyle}> Importar dados para o Notion – Centro de ajuda do Notion</a>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Item FAQ 7 */}
            <div className="border border-gray-300 rounded-md mb-2">
              <button
                className="w-full text-left p-4 flex justify-between items-center font-semibold"
                onClick={() => toggleFAQ(7)}
                style={{ backgroundColor: colors.background }}
              >
                P7: Qual a diferença entre um "espaço de trabalho" e uma "página"?
                <span className="text-xl">{openFAQ === 7 ? '−' : '+'}</span>
              </button>
              {openFAQ === 7 && (
                <div className="p-4" style={{ backgroundColor: colors.background }}>
                  <p className={textStyle}>
                    R7: Um <span className="font-semibold">espaço de trabalho</span> é o seu ambiente geral no Notion, onde todas as suas páginas
                    e bases de dados estão contidas. Você pode ter um espaço de trabalho pessoal e, se estiver em uma equipe,
                    um espaço de trabalho da equipe. Uma <span className="font-semibold">página</span> é um documento individual dentro do seu espaço de trabalho.
                  </p>
                </div>
              )}
            </div>

            {/* Item FAQ 8 */}
            <div className="border border-gray-300 rounded-md mb-2">
              <button
                className="w-full text-left p-4 flex justify-between items-center font-semibold"
                onClick={() => toggleFAQ(8)}
                style={{ backgroundColor: colors.background }}
              >
                P8: Como posso aprender mais sobre recursos avançados do Notion?
                <span className="text-xl">{openFAQ === 8 ? '−' : '+'}</span>
              </button>
              {openFAQ === 8 && (
                <div className="p-4" style={{ backgroundColor: colors.background }}>
                  <p className={textStyle}>
                    R8: O próprio site do Notion possui uma seção de <a href="https://www.notion.so/guides-and-tutorials" target="_blank" rel="noopener noreferrer" className={linkStyle}>Guias e tutoriais</a>
                    e uma vasta <a href="https://www.notion.so/help" target="_blank" rel="noopener noreferrer" className={linkStyle}>Base de conhecimento</a>.
                    Há também muitos vídeos no YouTube e comunidades online dedicadas ao Notion. Para um tour geral pela plataforma, assista:
                    <a href="https://www.youtube.com/watch?v=R_G79aE-N3U" target="_blank" rel="noopener noreferrer" className={linkStyle}> NOTION TOUR - Como ORGANIZO minha VIDA e meu Conteúdo</a>
                  </p>
                  <p className={textStyle}>
                    O site do Notion também disponibiliza atalhos do teclado para facilitar o seu dia a dia. Conheça todos eles:
                    <a href="https://www.notion.so/help/keyboard-shortcuts" target="_blank" rel="noopener noreferrer" className={linkStyle}> Atalhos do teclado</a>
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      {/* Script do Tailwind CSS (CDN) */}
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
};

export default App;
