console.log('curso de javascript web moderno/Conceitos sobre Web:Introdução ;') //Segunda-feira,05/07/2021,22:00:00 h +|-
/*
  # Descreve em uma "Breve História" um pouco mais https://www.dialhost.com.br/blog/um-breve-historico-da-internet/;
    # A internet descreve como funcionar...
      # Topologias:
        # Estrela;
         # Anel;
      # Web (Teia)
        # Tipos de Provetores;
        # Transmission Control Protocol/Internet Protocolol:
           $ Orientado a Conexão e Confiável;
           $ Roteamento entre Redes;
        # TCP/IP:
           $ É divido por camadas:
             % 1ª Camada de Rede/Física;
             % 2ª Camada de Internet;
             % 3ª Camada de Transporte;
             % 4ª Camada de Aplicação;
          $ Camada de cima usa a Camada de baixo => de cima para baixo;
          $ camada de baixo usa a próxima camadas até chegar a ultima camada de cima;
          ø Explicando a Função de cada Camada:
            % 1ª Camada de Rede/Física:
               @  Ethernet ,Wi-fi...
               @ MAC address;
               @ Física[Hardware] e Enlace [Software];
            % 2ª Camada de Internet:
              @ IP-Internet Protocol;
              @ Conexão entre redes;
              @ Transferência de Pacotes;
            % 3ª Camada de Transporte:
              @ TCP[Confiável], UDP [Melhor esforço]...
              @ Comunicação Host à Host;
              @ Confiabilidade,integridade...
            % 4ª Camada de Aplicação:
              @ HTTP,FTP,SMTP...
              @ Comunicação Processo à Processo;
              @ Número da Porta;
        $ Anatomia do IPv4:
            % Classe: A:
               @ 192.168.100.230:
                 & 192 => redes;
                 & 168.100.230 => Host;
                 & 255.0.0.0 => Mascará de SubRede;
            % Classe: B:
               @ 192.168.100.230:
                 & 192.168 => Redes;
                 & 100.230 => Host;
                 & 255.255.0.0 => Mascará de SubRede;
             % Classe: C:
                @ 192.168.100.230:
                  & 192.168.100 => Rede;
                  & 230 Looks like you've followed a broken link or entered a URL that doesn't exist on this site.=> Host;
                  & 255.255.255.0 => Mascará de SubRede;
    # Conceito de Porta:
       @ Existem dois computadores 1 e 2,ambos na mesma Rede:
         % PC 01 :
           Ø IP:10.85.04;
            * Rodeando:
              ł Skype;
              ł Chrome; http://10.85.05:8080
              ł Apache;
              ł Dropbox;
         % PC 02:
           Ø IP:10.85.05;
              * Rodeando:
               ł Github Desk;
               ł Chrome;
               ł Node <= Chrome {'8080'porta}
               ł MySQL;
              ® Além do IP,Tem que saber qual é o processo{Que mapeado pela Porta}
               */   
