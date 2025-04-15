#!/bin/bash

# Caminho para o diretório do repositório
REPO_DIR="/c/Users/David Siqueira/Documents/David/VsCode/FundamentosProgramação"

# Navegar para o diretório do repositório
cd "$REPO_DIR"

# Loop infinito para monitorar alterações
while true; do
    # Monitorar alterações no diretório (arquivos ou subdiretórios)
    inotifywait -r -e modify,create,delete . 

    # Adicionar todos os arquivos modificados, criados ou deletados
    git add .

    # Comitar com uma mensagem automatizada
    git commit -m "	
FundamentosProgramacao JS"

    # Enviar para o repositório remoto
    git push origin main

    # Atrasar um pouco antes de verificar novamente
    sleep 2
done
