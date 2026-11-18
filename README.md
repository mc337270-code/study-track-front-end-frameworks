# 📚 StudyTrack

Trabalho Final — Front-end Frameworks (ADS) · React.js + TypeScript

**Grupo:** Maria Letícia da Silva Xavier · Maria Heloisa · Maria Clara

## Descrição
Aplicação para organizar tarefas de estudo por matéria, com estatísticas de progresso. Os dados são salvos no `localStorage` e é possível importar tarefas de uma API REST real (JSONPlaceholder) pelo botão "Importar tarefas da API" no Dashboard (`fetch` + `async/await`, com estados de loading e erro).

## Instalação e uso
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção
```
Na tela de **Login**, digite qualquer nome para entrar no Dashboard.

## Páginas (5)
Home · Sobre · Login · Dashboard (rota protegida) · Contato

## Hooks utilizados (6)
`useState` · `useEffect` · `useContext` (AuthContext) · `useRef` (TaskForm) · `useMemo` (Dashboard) · custom hook `useLocalStorage`

## Componentes funcionais (11) e responsáveis
| Integrante | Componentes | Outras partes |
|---|---|---|
| Maria Letícia | Header, Footer, Button, ProtectedRoute | `App.tsx` (rotas), `AuthContext` (useContext), página Login |
| Maria Heloisa | TaskForm, TaskItem, TaskList, FilterBar | Dashboard (useState, useRef, useMemo) |
| Maria Clara | FeatureCard, StatsPanel, ContactForm | `useLocalStorage` (custom hook + useEffect), integração com API |

## Prints das telas
Adicionar aqui prints de Home, Login, Dashboard e Contato (pasta `/prints`).

## Tecnologias
React 18, TypeScript, React Router 6, Vite.
