import React from 'react';

import './global.css'

/**
 * - Um componente no React é uma função JS que retorna html, podendo ter funcionalidade de JS, CSS também
 * (Componentes começam sempre com letra maiúscula)
 * - JSX (JavaScript XML) é quando o HTML está integrado dentro do JavaScript
 * - Live Reload = sempre altera automaticamente suas mudanças
 * - Propriedades são informações passadas de componentes filhos para componentes pais
 * - Estados são informações que vão ser mantidas pelos componentes
 * - A imutabilidade do React faz com que tenhamos que sobrepor o valor da variável e não podemos mudar
 * de forma direta
 * - Sempre que formos usar uma propriedade JS em HTML usamos das chaves {}
 */

 // Não precisa colocar o index pois ele procura automaticamente
 import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;
