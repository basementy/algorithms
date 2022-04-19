### Superfatorial

Esse é um projeto que implementa o cálculo de superfatorial utilizando dois métodos: convêncional (loops) e memoizado (utilizando cache).

### Implementação

Explicação individual da implementação de cada método.

#### **Convêncional**

Na implementação convêncional temos duas funções, _calculateFatorial_ para realizar o cálculo da função de fatorial de um número e _calculateSuperFatorial_ para calcular o superfatorial de um número.

**calculateFatorial(_fatorial: number_):** Utiliza de iterações em um loop sobre o número do fatorial escolhido para realizar o cálculo do resultado retornado.

**calculateSuperFatorial(_superFatorial: number_):** Utiliza de iterações em um loop sobre o número do superfatorial escolhido para também realizar o cálculo do resultado, porém, utiliza da função de fatorial como o cálculo interno de cada iteração.

#### **Dinâmica**

Na implementação dinâmica temos apenas uma função chamada _calculateSuperFatorialWithMemoization_ para calcular o superfatorial de um número utilizando cache e recursividade.

**calculateSuperFatorialWithMemoization()**: Essa função possui dentro de seu escopo a declaração de uma variável _cache_ que é um objeto que armazena os resultados de cada iteração, e o retorno de uma função que recebe como parâmetro o número do superfatorial a ser calculado e implementa uma função interna recursiva de cálculo de fatorial condicionando a execução dessa função com base na verificação se o valor do fatorial definido já está armazenado ou não dentro do cache.
Essa função recursiva é chamada dentro de uma iteração sobre o número do superfatorial escolhido, utilizando o resultado retornado da função como valor para o cálculo do superfatorial. Utilizando a validação de cache, a função recursiva só é chamada caso o valor não tenha sido registrado ainda, evitando calculos desnecessários.

### Usage

Para testar as implementações primeiro instale as depêndencias com:

```bash
nvm use # ou nvm install para configuração a versão do node
yarn # ou npm install caso não utilize yarn
```

E para rodar utilize o seguinte comando:

```bash
ts-node --transpile-only ./modules/superfatorial/index.ts

# output

--- Default implementation ---
Time: 0.1102ms
Result: 34560
Time complexity: O(N^2)

--- Memoized implementation ---
Time: 0.1160ms
Result: 34560
Time complexity: O(N)
```
