#!/bin/bash

# Navegar para o diretório do repositório
cd /c/Users/David Siqueira/Documents/David/VsCode/FundamentosProgramação

# Verificar se há alterações no repositório
if git diff-index --quiet HEAD --; then
  echo "Nenhuma alteração para adicionar."
else
  # Adicionar todos os arquivos modificados
  git add .

  # Comitar com uma mensagem automatizada
  git commit -m "FundamentosProgramacao JS"

  # Enviar para o repositório remoto
  git push origin main
fi
