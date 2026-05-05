# Portfolio Rafael Cirne

Um portfólio profissional moderno desenvolvido em **Angular** com estética inspirada em interfaces sistêmicas futuristas.

## 🎯 Características

- **Design Moderno**: Tema escuro com acentos em vermelho (#E50914)
- **Componentes Standalone**: Arquitetura modular com Angular components
- **CSS Puro**: Sem frameworks CSS, apenas CSS vanilla customizado
- **Responsivo**: Mobile-first, otimizado para todos os dispositivos
- **Animações Sutis**: Transições suaves e efeitos de parallax
- **Performance**: Sem bibliotecas desnecessárias, foco em performance

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── navbar.component
│   │   ├── sidebar.component
│   │   ├── hero.component
│   │   └── footer.component
│   ├── pages/               # Páginas da aplicação
│   │   ├── home.component
│   │   ├── sobre.component
│   │   ├── projetos.component
│   │   ├── skills.component
│   │   ├── experiencia.component
│   │   ├── contato.component
│   │   └── not-found.component
│   ├── styles/              # Estilos globais
│   │   ├── variables.css
│   │   ├── animations.css
│   │   └── globals.css
│   ├── app.routes.ts        # Configuração de rotas
│   ├── app.ts               # Componente raiz
│   └── app.css              # Estilos do app
├── index.html               # HTML principal
└── styles.css              # Estilos globais (entrada)
```

## 🎨 Identidade Visual

### Cores Primárias
- **Background Principal**: `#0B0B0B`
- **Superfícies**: `#121212` / `#1A1A1A`
- **Texto Principal**: `#F1F1F1`
- **Texto Secundário**: `#A0A0A0`
- **Accent (Vermelho)**: `#E50914`
- **Hover (Vermelho Escuro)**: `#6E0F12`

### Tipografia
- **Font**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Responsiva**: Adaptada para todos os tamanhos de tela

## 📄 Páginas

### 1. **Home** (`/`)
- Hero section com apresentação
- Grid de features (Engenharia, Automação, SaaS)
- Animações de entrada
- CTA buttons

### 2. **Sobre** (`/sobre`)
- Informações pessoais
- Missão e foco
- Cards com estatísticas
- Lista de competências principais

### 3. **Projetos** (`/projetos`)
- Grid responsivo de projects
- Cards com descrição e tecnologias
- Hover effects com animações
- Links para detalhes

### 4. **Skills** (`/skills`)
- Categorias de competências
- Barras de progresso animadas
- Percentuais de proficiência
- Visual minimalista

### 5. **Experiência** (`/experiencia`)
- Timeline vertical
- Cards alternados com informações
- Destaques de cada posição
- Visual profissional

### 6. **Contato** (`/contato`)
- Formulário de contato funcional
- Informações de contato
- Links para redes sociais
- Validação de formulário

### 7. **404** (`/*`)
- Página para rotas não encontradas
- Design atraente
- Link para voltar ao início

## 🚀 Como Usar

### Instalação

```bash
# Navegar para o diretório do projeto
cd front

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
ng serve

# Ou com o comando alternativo
npm start

# Acesse http://localhost:4200
```

### Build para Produção

```bash
# Compilar para produção
ng build --configuration production

# Os arquivos estão em dist/
```

## 🎨 Componentes Principais

### Navbar
- Fixa no topo
- Links de navegação
- Menu responsivo para mobile
- Blur effect background

### Sidebar
- Fixa à esquerda
- Logo personalizado (triângulo)
- Ícones de navegação
- Links para redes sociais
- Reduzida em mobile

### Hero
- Animação parallax do grid
- Lines de scan animadas
- CTA buttons com glow
- Responsive para mobile

### Footer
- Links rápidos
- Redes sociais
- Informações de contato
- Divisor estilizado

## ✨ Animações

- **Fade In**: Entrada suave de elementos
- **Slide In**: Deslizamento lateral
- **Scale**: Efeitos de zoom
- **Glow**: Brilho em elementos interativos
- **Parallax**: Movimento com o mouse
- **Pulse**: Efeito pulsante

## 📱 Responsividade

- **Desktop**: Experiência completa com todos os efeitos
- **Tablet**: Layout otimizado, efeitos reduzidos
- **Mobile**: Interface simplificada, sem efeitos pesados

### Breakpoints
- `768px`: Tablet
- `480px`: Mobile pequeno

## 🔧 Tecnologias

- **Angular 18+** (latest stable)
- **TypeScript**
- **CSS Puro** (sem SCSS/Less)
- **HTML5 Semântico**
- **JavaScript ES6+**

## 📋 Checklist de Funcionalidades

- ✅ Estrutura modular com componentes standalone
- ✅ Roteamento completo com Angular Router
- ✅ Design responsivo mobile-first
- ✅ Animações suaves (<300ms)
- ✅ Tema escuro profissional
- ✅ Formulário de contato funcional
- ✅ Sidebar e Navbar fixas
- ✅ Timeline experiência
- ✅ Barras de skills animadas
- ✅ Grid de projetos
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🎯 Performance

- Sem bibliotecas desnecessárias
- CSS otimizado
- Animações hardware-accelerated
- Lazy loading pronto para implementação
- Otimizado para Web Core Vitals

## 📞 Contato

Para mais informações ou sugestões, entre em contato através dos links no portfólio.

---

**Desenvolvido com ❤️ usando Angular**
