// 1. CREATE REACT APP
//  npx create-react-app projetoName --template typescript
// 2. cd ./projetoName
// 3. Se quiser usar o .editorconfig - baixar plugin
//  npm install editorconfig
// root = true

// [*]
// indent_style = space
// indent_size = 2
// end_of_line = lf
// charset = utf-8
// trim_trailing_whitespace = true
// insert_final_newline = true

// 4. Instalar Versões Específicas das Dependências:
//  npm install @typescript-eslint/eslint-plugin@^5.50.0 @typescript-eslint/parser@^5.50.0 eslint@^8.33.0 eslint-config-prettier@^8.6.0 eslint-plugin-prettier@^4.2.1 eslint-plugin-react@^7.32.2 eslint-plugin-react-hooks@^4.6.0 prettier@2.8.3

// 5. configurar eslint:
// "plugins": ["@typescript-eslint", "react", "react-hooks"],
// 	"rules": {
// 		"react-hooks/rules-of-hooks": "error",
// 		"react-hooks/exhaustive-deps": "warn",
// 		"react/prop-types": "off",
// 		"react/react-in-jsx-scope": "off",
// 		"@typescript-eslint/explicit-module-boundary-types": "off"
// 	},
// 	"settings": {
// 		"version": "detect"
// 	}

// 6. Criar Arquivo de Configuração do ESLint:
//  npm init @eslint/config@0.4.6 - lembrar de estar na pasta do projeto
// 7. pra testar: npx eslint .

// 8. configurar prettier:
//  fazer um arquivo settings.json e colocar na pasta .vscode (o format on save tem que ta habilidado nas settins) - baixar plugin
// {
// "editor.formatOnSave": false,
// "editor.codeActionsOnSave": {
//   "source.fixAll.eslint": true
// }
// }
// automatizar e fazer todos os arquivos rodar o prettier:
// npm prettier --write .\src\
// se o prettier der erro, rodar npx eslint --fix src

// 9. TERMINAR CONFIGURACAO DO REACT APP:
// rodar npm start - vai abrir a tela do vizualizador da pag react
// baixar a extencao de react do chrome e usar componentes

// 10. instalar styled components:
// npm i --save styled-components. - lembrar de estar na pasta do projeto
// o VScode nao sabe oq e esse formato, e pra usar temos que baixar o eslint@typescript-eslint/no-unused-vars
// da pra fazer pelo quick fix mesmo que ele vai sugerir
// npm i --save-dev @types/styled-components

import About from './containers/About';
import Projects from './containers/Projects';
import Sidebar from './containers/Sidebar';
import EstiloGlobal, { Container } from './styles';

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  );
}

export default App;
