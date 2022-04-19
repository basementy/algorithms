### superfatorial

esse é um projeto que implementa o cálculo de superfatorial utilizando dois métodos: convêncional (loops) e memoizado (utilizando cache).

### usage

para testar as implementações primeiro instale as depêndencias com:

```bash
nvm use # ou nvm install para configuração a versão do node
yarn # ou npm install caso não utilize yarn
```

e para rodar utilize o seguinte comando:

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
