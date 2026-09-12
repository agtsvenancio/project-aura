export type Specialty = {
  slug: string; title: string; heading: string; description: string; lead: string; summary: string;
  articles: Array<{ id: string; title: string; text: string }>; notice: string | null;
  previous: { slug: string; title: string } | null; next: { slug: string; title: string } | null;
};

export const specialties: Specialty[] = [
  {
    "slug": "cuidados-com-estomias",
    "title": "Cuidados com Estomias",
    "heading": "Profissionais de Cuidados com Estomias",
    "description": "Conheça profissionais que atuam com cuidados com estomias. Veja formação, modalidades de atendimento e informações para escolher com segurança.",
    "lead": "Cuidados com estomias envolvem orientação, acompanhamento e suporte às pessoas que vivem com estomias intestinais ou urinárias. Nesta área, você pode encontrar profissionais com experiência no cuidado da pele ao redor do estoma, adaptação de equipamentos coletores, educação para o autocuidado e acompanhamento das necessidades da rotina.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "O atendimento relacionado às estomias busca apoiar a pessoa na adaptação ao uso de dispositivos, na proteção da pele periestomal e na identificação de situações que merecem avaliação profissional. Também pode incluir educação de familiares e cuidadores, orientações sobre rotina e conforto, além de encaminhamento para outros serviços quando necessário."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A busca pode fazer sentido após a confecção de uma estomia, diante de dificuldades de adaptação, vazamentos frequentes, desconforto, alterações na pele ao redor do estoma ou quando houver necessidade de revisar a rotina de cuidados."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Observe formação, experiência com estomias, registro profissional quando aplicável, modalidade de atendimento e descrição clara da atuação. O perfil deve informar limites do serviço e evitar promessas de resultado."
      }
    ],
    "notice": "Dor intensa, sangramento persistente ou piora súbita exigem avaliação em um serviço de saúde.",
    "previous": null,
    "next": {
      "slug": "cuidados-paliativos",
      "title": "Cuidados Paliativos"
    },
    "summary": "Conheça profissionais que atuam com cuidados com estomias. Veja formação, modalidades de atendimento e informações para escolher com segurança."
  },
  {
    "slug": "cuidados-paliativos",
    "title": "Cuidados Paliativos",
    "heading": "Profissionais de Cuidados Paliativos",
    "description": "Conheça profissionais que atuam com cuidados paliativos, suas formações, modalidades de atendimento e escopos de cuidado.",
    "lead": "Cuidados paliativos são voltados à qualidade de vida de pessoas que convivem com doenças graves, progressivas ou ameaçadoras da vida, considerando também as necessidades de familiares e cuidadores. A abordagem pode envolver controle de sintomas, comunicação, apoio emocional, planejamento de cuidados e integração entre diferentes profissionais.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "O cuidado paliativo não se limita aos momentos finais de vida. Ele pode ser associado ao tratamento de uma doença desde fases precoces, conforme a necessidade do paciente. O objetivo é reduzir sofrimento evitável e organizar decisões de cuidado de forma proporcional, individualizada e respeitosa."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "Pode ser indicado quando há sintomas difíceis de controlar, impacto importante da doença na rotina, necessidade de organizar cuidados em casa, dúvidas sobre objetivos de tratamento ou sobrecarga de familiares e cuidadores."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Considere formação, experiência em cuidados paliativos, capacidade de atuação multiprofissional, modalidade de atendimento e transparência sobre o escopo do serviço. Em atendimentos clínicos, confirme os registros profissionais pertinentes."
      }
    ],
    "notice": "Situações de urgência devem ser direcionadas imediatamente aos serviços de emergência.",
    "previous": {
      "slug": "cuidados-com-estomias",
      "title": "Cuidados com Estomias"
    },
    "next": {
      "slug": "emergencias-e-cuidados-intensivos",
      "title": "Emergências e Cuidados Intensivos"
    },
    "summary": "Conheça profissionais que atuam com cuidados paliativos, suas formações, modalidades de atendimento e escopos de cuidado."
  },
  {
    "slug": "emergencias-e-cuidados-intensivos",
    "title": "Emergências e Cuidados Intensivos",
    "heading": "Profissionais de Emergências e Cuidados Intensivos",
    "description": "Encontre profissionais de emergências e cuidados intensivos e consulte formação, experiência e tipo de atuação.",
    "lead": "Emergências e cuidados intensivos reúnem profissionais com experiência em cenários que exigem avaliação rápida, monitorização contínua, protocolos assistenciais e tomada de decisão em ambientes de alta complexidade, como pronto atendimento, emergência hospitalar e unidades de terapia intensiva.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "A atuação está ligada à assistência de pacientes com condições agudas ou potencialmente instáveis, à segurança dos processos e ao trabalho integrado entre diferentes profissionais. Nesta plataforma, a categoria funciona como uma área de atuação e não como substituta de um serviço de urgência."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "Esta página é indicada para localizar profissionais, consultores, docentes ou prestadores que atuem na área."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Avalie formação, experiência prática, certificações relevantes, registro profissional e descrição objetiva do serviço. O perfil precisa esclarecer se a atuação é em assistência, treinamento, consultoria, gestão ou educação."
      }
    ],
    "notice": "Em uma emergência real — falta de ar intensa, dor torácica, perda de consciência, sinais de AVC ou risco imediato à vida — procure um serviço de urgência ou acione o SAMU pelo 192.",
    "previous": {
      "slug": "cuidados-paliativos",
      "title": "Cuidados Paliativos"
    },
    "next": {
      "slug": "saude-coletiva",
      "title": "Saúde Coletiva"
    },
    "summary": "Encontre profissionais de emergências e cuidados intensivos e consulte formação, experiência e tipo de atuação."
  },
  {
    "slug": "saude-coletiva",
    "title": "Saúde Coletiva",
    "heading": "Profissionais de Saúde Coletiva",
    "description": "Conheça profissionais de saúde coletiva para projetos, prevenção, educação, pesquisa, planejamento e gestão em saúde.",
    "lead": "Saúde coletiva reúne ações voltadas à promoção da saúde, prevenção de agravos, planejamento, vigilância, educação em saúde e organização de serviços para grupos, comunidades e populações. É uma área ampla, com participação de profissionais de diferentes formações.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "O trabalho pode envolver análise de indicadores, desenvolvimento de programas, vigilância epidemiológica, planejamento de políticas e serviços, educação em saúde, pesquisa e gestão de projetos. O foco costuma estar na organização de respostas coletivas às necessidades de saúde."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A busca pode ser útil para instituições, empresas, organizações sociais, municípios, projetos de pesquisa e iniciativas comunitárias que precisam de experiência em planejamento, programas de saúde, prevenção e gestão de ações coletivas."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Observe formação, trajetória, experiência com o tipo de projeto, conhecimento de políticas públicas e capacidade de trabalhar com dados, equipes e comunidades. Defina se a demanda é assistencial, educacional, estratégica, regulatória ou de pesquisa."
      }
    ],
    "notice": null,
    "previous": {
      "slug": "emergencias-e-cuidados-intensivos",
      "title": "Emergências e Cuidados Intensivos"
    },
    "next": {
      "slug": "terapias-comportamentais",
      "title": "Terapias Comportamentais"
    },
    "summary": "Conheça profissionais de saúde coletiva para projetos, prevenção, educação, pesquisa, planejamento e gestão em saúde."
  },
  {
    "slug": "terapias-comportamentais",
    "title": "Terapias Comportamentais",
    "heading": "Profissionais de Terapias Comportamentais",
    "description": "Encontre profissionais de terapias comportamentais e consulte formação, abordagem e modalidades de atendimento.",
    "lead": "Terapias comportamentais reúnem abordagens que observam a relação entre comportamento, contexto, aprendizagem e consequências. Dependendo da formação do profissional, podem ser utilizadas em acompanhamento psicológico, educação, desenvolvimento de habilidades e outras intervenções baseadas em comportamento.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "A categoria pode abranger diferentes linhas e técnicas. Por isso, o perfil de cada profissional deve deixar clara sua formação, abordagem e escopo de atendimento. Em psicologia, é especialmente importante informar o registro profissional e evitar generalizações sobre resultados."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A busca pode ocorrer diante de dificuldades emocionais ou comportamentais, necessidade de desenvolver habilidades, mudanças de rotina, acompanhamento psicológico ou orientação especializada. A escolha da abordagem deve considerar a demanda individual."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Verifique graduação, especializações, registro no conselho quando aplicável, abordagem utilizada, público atendido e modalidade de atendimento. Prefira perfis que expliquem como trabalham sem prometer cura ou resultado garantido."
      }
    ],
    "notice": null,
    "previous": {
      "slug": "saude-coletiva",
      "title": "Saúde Coletiva"
    },
    "next": {
      "slug": "obstetricia-e-neonatologia",
      "title": "Obstetrícia e Neonatologia"
    },
    "summary": "Encontre profissionais de terapias comportamentais e consulte formação, abordagem e modalidades de atendimento."
  },
  {
    "slug": "obstetricia-e-neonatologia",
    "title": "Obstetrícia e Neonatologia",
    "heading": "Profissionais de Obstetrícia e Neonatologia",
    "description": "Encontre profissionais de obstetrícia e neonatologia e consulte formação, experiência e modalidades de atendimento.",
    "lead": "Obstetrícia e neonatologia abrangem o cuidado relacionado à gestação, parto, pós-parto e período neonatal. A atuação pode envolver assistência, educação, acompanhamento, consultoria, gestão e suporte a gestantes, puérperas, recém-nascidos e famílias, conforme a habilitação de cada profissional.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "A obstetrícia acompanha diferentes etapas da gestação e do parto, enquanto a neonatologia se concentra na atenção ao recém-nascido, especialmente nos primeiros dias e semanas de vida. Por envolver situações clínicas sensíveis, perfis precisam apresentar credenciais com clareza."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A plataforma pode ser usada para localizar profissionais para acompanhamento, orientação, educação perinatal, consultoria ou suporte especializado."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Confirme formação, especializações, registro profissional, experiência, público atendido, local de atuação e limites do serviço. Para atendimentos clínicos, privilegie perfis com informações verificáveis e descrição precisa da habilitação."
      }
    ],
    "notice": "Intercorrências na gestação, parto, puerpério ou no recém-nascido devem ser avaliadas por um serviço de saúde apropriado e, quando urgentes, sem atraso.",
    "previous": {
      "slug": "terapias-comportamentais",
      "title": "Terapias Comportamentais"
    },
    "next": {
      "slug": "saude-mental",
      "title": "Saúde Mental"
    },
    "summary": "Encontre profissionais de obstetrícia e neonatologia e consulte formação, experiência e modalidades de atendimento."
  },
  {
    "slug": "saude-mental",
    "title": "Saúde Mental",
    "heading": "Profissionais de Saúde Mental",
    "description": "Conheça profissionais que atuam com saúde mental e compare formação, abordagem e modalidades de atendimento.",
    "lead": "Saúde mental envolve prevenção, avaliação, cuidado e acompanhamento de questões emocionais, psicológicas, comportamentais e psiquiátricas. A categoria pode reunir diferentes profissões e abordagens, desde que a formação, o registro profissional e o tipo de atendimento sejam apresentados com transparência.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "O cuidado pode incluir psicoterapia, avaliação, acompanhamento médico, ações de promoção de saúde, educação, orientação e trabalho multiprofissional. Cada profissão possui atribuições próprias, e as diferentes práticas não devem ser apresentadas como equivalentes."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "Pode ser útil procurar ajuda diante de sofrimento emocional persistente, mudanças importantes de humor ou comportamento, dificuldades que afetam a rotina ou quando houver recomendação de outro profissional."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Considere a necessidade apresentada, a formação, o registro quando aplicável, a abordagem, a experiência com o tema e a modalidade de atendimento. Perfis devem ser claros sobre o que oferecem e não prometer resultados garantidos."
      }
    ],
    "notice": "Em risco imediato de autoagressão, suicídio, violência ou crise grave, busque atendimento de urgência. O CVV atende gratuitamente pelo 188.",
    "previous": {
      "slug": "obstetricia-e-neonatologia",
      "title": "Obstetrícia e Neonatologia"
    },
    "next": {
      "slug": "gestao-de-qualidade-e-seguranca-do-paciente",
      "title": "Gestão de Qualidade e Segurança do Paciente"
    },
    "summary": "Conheça profissionais que atuam com saúde mental e compare formação, abordagem e modalidades de atendimento."
  },
  {
    "slug": "gestao-de-qualidade-e-seguranca-do-paciente",
    "title": "Gestão de Qualidade e Segurança do Paciente",
    "heading": "Profissionais de Gestão de Qualidade e Segurança do Paciente",
    "description": "Encontre profissionais de gestão de qualidade e segurança do paciente para consultoria, educação e melhoria de processos.",
    "lead": "Gestão de qualidade e segurança do paciente reúne profissionais que atuam na melhoria de processos assistenciais, gestão de riscos, indicadores, protocolos, auditorias, educação permanente e implantação de práticas voltadas à segurança em serviços de saúde.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "A área pode apoiar hospitais, clínicas, serviços de diagnóstico, instituições de longa permanência e equipes assistenciais na construção de processos mais seguros. O trabalho pode incluir análise de eventos, desenho de fluxos, monitoramento de indicadores e preparação para acreditação."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A contratação pode ser pertinente quando uma instituição precisa estruturar protocolos, revisar processos, melhorar indicadores, capacitar equipes, organizar núcleos de segurança do paciente ou preparar-se para auditorias e certificações."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Avalie experiência em serviços semelhantes, formação, certificações, domínio de normas aplicáveis e capacidade de transformar diagnóstico em plano de ação. O perfil deve indicar se a atuação é consultiva, assistencial, educacional ou de gestão."
      }
    ],
    "notice": null,
    "previous": {
      "slug": "saude-mental",
      "title": "Saúde Mental"
    },
    "next": {
      "slug": "nutriterapia",
      "title": "Nutriterapia"
    },
    "summary": "Encontre profissionais de gestão de qualidade e segurança do paciente para consultoria, educação e melhoria de processos."
  },
  {
    "slug": "nutriterapia",
    "title": "Nutriterapia",
    "heading": "Profissionais de Nutriterapia",
    "description": "Conheça profissionais que atuam com nutriterapia, terapia nutricional e acompanhamento nutricional especializado.",
    "lead": "Nutriterapia, ou terapia nutricional, está relacionada à avaliação e ao suporte nutricional de pessoas que necessitam de estratégias específicas de alimentação ou terapia nutricional, conforme sua condição clínica e a atuação de profissionais habilitados.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "Dependendo do contexto, a terapia nutricional pode envolver alimentação oral adaptada, suplementação e suporte enteral ou parenteral, sempre dentro das competências profissionais e indicações clínicas pertinentes. Em ambiente hospitalar, costuma envolver trabalho multiprofissional."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A busca pode ocorrer quando há necessidade de acompanhamento nutricional especializado, risco nutricional, dificuldade de alimentação, recuperação de doença ou cirurgia, ou indicação de terapia nutricional."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Verifique formação, especialização, registro profissional, experiência com o perfil do paciente e modalidade de atendimento. Em casos complexos, prefira profissionais que trabalhem de forma integrada com a equipe assistencial."
      }
    ],
    "notice": "Mudanças em dieta, suplementos ou vias de alimentação devem ser conduzidas por profissionais habilitados.",
    "previous": {
      "slug": "gestao-de-qualidade-e-seguranca-do-paciente",
      "title": "Gestão de Qualidade e Segurança do Paciente"
    },
    "next": {
      "slug": "nutricao-clinica-funcional",
      "title": "Nutrição Clínica Funcional"
    },
    "summary": "Conheça profissionais que atuam com nutriterapia, terapia nutricional e acompanhamento nutricional especializado."
  },
  {
    "slug": "nutricao-clinica-funcional",
    "title": "Nutrição Clínica Funcional",
    "heading": "Nutrição Clínica Funcional",
    "description": "Encontre profissionais de nutrição clínica funcional e conheça formação, método e modalidades de acompanhamento.",
    "lead": "Nutrição clínica funcional é uma abordagem de atendimento nutricional que considera história clínica, hábitos alimentares, rotina e contexto individual para construir estratégias de alimentação dentro das atribuições do nutricionista. A categoria prioriza profissionais habilitados e informações baseadas em avaliação individual.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "O atendimento costuma envolver anamnese alimentar, avaliação de hábitos, definição de objetivos e planejamento nutricional. A forma de trabalho varia entre profissionais, e a abordagem não deve ser associada a promessas de cura ou alegações não comprovadas."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "Pode ser procurada por pessoas que desejam acompanhamento nutricional individualizado, organização da alimentação, suporte em condições clínicas acompanhadas por equipe de saúde ou mudança de hábitos."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Confirme registro profissional, formação complementar, experiência, método de acompanhamento e clareza sobre condutas. Desconfie de promessas de resultados rápidos, diagnósticos sem avaliação ou substituição de tratamento médico."
      }
    ],
    "notice": "Diagnósticos, sintomas persistentes e tratamentos em curso devem ser considerados em conjunto com os profissionais responsáveis.",
    "previous": {
      "slug": "nutriterapia",
      "title": "Nutriterapia"
    },
    "next": {
      "slug": "reiki",
      "title": "Reiki"
    },
    "summary": "Encontre profissionais de nutrição clínica funcional e conheça formação, método e modalidades de acompanhamento."
  },
  {
    "slug": "reiki",
    "title": "Reiki",
    "heading": "Reiki",
    "description": "Conheça profissionais que oferecem Reiki, sua formação complementar, modalidade de atendimento e limites da prática.",
    "lead": "Reiki é uma prática integrativa utilizada por algumas pessoas com objetivos de relaxamento e bem-estar. Nesta área, os profissionais devem apresentar formação complementar, modalidade de atendimento e uma descrição clara do serviço, sem atribuir à prática efeitos terapêuticos que não estejam bem estabelecidos por evidências científicas.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "As sessões geralmente envolvem uma prática de imposição ou aproximação das mãos, com foco em relaxamento e experiência subjetiva de bem-estar."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A pessoa pode buscar a prática como atividade complementar de bem-estar. Sintomas físicos ou emocionais persistentes, piora do estado de saúde ou situações de urgência devem ser avaliados por profissionais e serviços adequados."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Observe formação declarada, experiência, ambiente de atendimento, transparência sobre limites da prática e ausência de promessas de cura. O perfil deve evitar linguagem que incentive abandono de tratamentos convencionais."
      }
    ],
    "notice": "Reiki é uma prática complementar e não substitui diagnóstico, tratamento médico, psicoterapia ou qualquer cuidado de saúde necessário.",
    "previous": {
      "slug": "nutricao-clinica-funcional",
      "title": "Nutrição Clínica Funcional"
    },
    "next": {
      "slug": "enfermagem-integrativa",
      "title": "Enfermagem Integrativa"
    },
    "summary": "Conheça profissionais que oferecem Reiki, sua formação complementar, modalidade de atendimento e limites da prática."
  },
  {
    "slug": "enfermagem-integrativa",
    "title": "Enfermagem Integrativa",
    "heading": "Profissionais de Enfermagem Integrativa",
    "description": "Encontre profissionais de enfermagem integrativa e conheça formação, práticas oferecidas e limites de atuação.",
    "lead": "Enfermagem integrativa reúne práticas e abordagens complementares incorporadas ao cuidado de enfermagem por profissionais habilitados, respeitando competências profissionais, protocolos, regulamentações e a integração com outros cuidados de saúde.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "A atuação pode combinar cuidados convencionais de enfermagem com práticas integrativas reconhecidas ou utilizadas no contexto de bem-estar, conforme a capacitação do profissional. O serviço deve separar claramente o cuidado de enfermagem da prática complementar."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "Pode ser procurada por pessoas que desejam acompanhamento de enfermagem com abordagem ampliada ou por instituições interessadas em projetos de práticas integrativas."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Confirme registro de enfermagem, formação nas práticas oferecidas, experiência e escopo do atendimento. Perfis devem informar limites, contraindicações quando pertinentes e relação da prática com o cuidado convencional."
      }
    ],
    "notice": "Questões clínicas devem permanecer sob avaliação apropriada e não devem ser tratadas exclusivamente por práticas complementares.",
    "previous": {
      "slug": "reiki",
      "title": "Reiki"
    },
    "next": {
      "slug": "biomagnetismo-medicinal",
      "title": "Biomagnetismo Medicinal"
    },
    "summary": "Encontre profissionais de enfermagem integrativa e conheça formação, práticas oferecidas e limites de atuação."
  },
  {
    "slug": "biomagnetismo-medicinal",
    "title": "Biomagnetismo Medicinal",
    "heading": "Biomagnetismo Medicinal",
    "description": "Conheça profissionais de biomagnetismo e consulte informações claras sobre a prática complementar e seus limites.",
    "lead": "Biomagnetismo é apresentado por seus praticantes como uma prática complementar que utiliza ímãs em pontos do corpo. Como as alegações clínicas associadas à técnica não possuem comprovação robusta para diagnosticar ou tratar doenças, esta página adota linguagem estritamente descritiva.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "O conteúdo explica o que cada profissional oferece sem afirmar que o biomagnetismo trata infecções, corrige doenças ou substitui acompanhamento clínico. O serviço pode ser apresentado como prática complementar de bem-estar, quando isso corresponder à atuação real."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A prática pode ser procurada por interesse em abordagens complementares. Qualquer sintoma, diagnóstico ou condição de saúde deve continuar sendo avaliado por profissionais habilitados."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Priorize perfis transparentes sobre formação, método, limites e ausência de garantias terapêuticas. Não considere alegações de cura, diagnóstico por magnetismo ou substituição de tratamentos baseados em evidências."
      }
    ],
    "notice": "O biomagnetismo não substitui acompanhamento clínico. Nenhum tratamento prescrito deve ser interrompido com base em orientação não médica.",
    "previous": {
      "slug": "enfermagem-integrativa",
      "title": "Enfermagem Integrativa"
    },
    "next": {
      "slug": "constelacao-sistemica-familiar",
      "title": "Constelação Sistêmica Familiar"
    },
    "summary": "Conheça profissionais de biomagnetismo e consulte informações claras sobre a prática complementar e seus limites."
  },
  {
    "slug": "constelacao-sistemica-familiar",
    "title": "Constelação Sistêmica Familiar",
    "heading": "Constelação Sistêmica Familiar",
    "description": "Conheça facilitadores de constelação sistêmica familiar, sua formação, método e limites dessa prática complementar.",
    "lead": "Constelação sistêmica familiar é uma prática utilizada em alguns contextos de desenvolvimento pessoal e reflexão sobre relações familiares. Não deve ser apresentada como psicoterapia, diagnóstico ou tratamento de transtornos mentais quando conduzida fora das profissões habilitadas.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "A prática costuma utilizar representações simbólicas de relações e dinâmicas familiares. As interpretações produzidas durante uma sessão são subjetivas e não devem ser tratadas como fatos, diagnósticos ou prova de acontecimentos."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A pessoa pode procurar a atividade como experiência de reflexão pessoal, desde que compreenda seu caráter complementar."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Observe formação declarada, postura ética, clareza sobre limites e ausência de afirmações absolutas. Perfis não devem sugerir que a prática substitui psicoterapia, psiquiatria, aconselhamento jurídico ou tratamento de saúde."
      }
    ],
    "notice": "Questões de saúde mental, violência, trauma, crise ou sofrimento intenso devem ser encaminhadas a profissionais habilitados e serviços apropriados.",
    "previous": {
      "slug": "biomagnetismo-medicinal",
      "title": "Biomagnetismo Medicinal"
    },
    "next": {
      "slug": "neurociencias-aplicadas-a-psicologia",
      "title": "Neurociências Aplicadas à Psicologia"
    },
    "summary": "Conheça facilitadores de constelação sistêmica familiar, sua formação, método e limites dessa prática complementar."
  },
  {
    "slug": "neurociencias-aplicadas-a-psicologia",
    "title": "Neurociências Aplicadas à Psicologia",
    "heading": "Neurociências Aplicadas à Psicologia",
    "description": "Encontre profissionais que trabalham com neurociências aplicadas à psicologia em pesquisa, educação e atendimento.",
    "lead": "Neurociências aplicadas à psicologia é uma área de interface entre conhecimentos sobre cérebro, comportamento, cognição e processos psicológicos. O uso desses conhecimentos deve estar vinculado à formação e às atribuições de cada profissional, evitando simplificações ou promessas baseadas apenas em linguagem neurocientífica.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "A área pode aparecer em pesquisa, educação, avaliação, psicologia clínica, neuropsicologia e desenvolvimento humano. Nem todo profissional que utiliza conceitos de neurociência possui habilitação para avaliação neuropsicológica ou diagnóstico."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A busca pode ser útil para acompanhamento psicológico, formação, pesquisa, palestras, consultoria ou projetos que envolvam comportamento e cognição. Em avaliação clínica, diagnóstico ou tratamento, verifique a habilitação específica."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Considere formação acadêmica, registro profissional quando aplicável, área real de atuação e evidências que sustentem os métodos. Evite perfis que usem termos como “neuro” apenas para dar aparência científica a promessas genéricas."
      }
    ],
    "notice": null,
    "previous": {
      "slug": "constelacao-sistemica-familiar",
      "title": "Constelação Sistêmica Familiar"
    },
    "next": {
      "slug": "coaching-comportamental",
      "title": "Coaching Comportamental"
    },
    "summary": "Encontre profissionais que trabalham com neurociências aplicadas à psicologia em pesquisa, educação e atendimento."
  },
  {
    "slug": "coaching-comportamental",
    "title": "Coaching Comportamental",
    "heading": "Coaching Comportamental",
    "description": "Encontre profissionais de coaching comportamental para objetivos, carreira, hábitos e desenvolvimento de competências.",
    "lead": "Coaching comportamental é uma atividade voltada a objetivos, planejamento, desenvolvimento de habilidades e acompanhamento de mudanças de comportamento em contextos pessoais ou profissionais. A categoria é apresentada como desenvolvimento, não como substituta de psicoterapia, tratamento médico ou diagnóstico de saúde mental.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "Um processo pode utilizar metas, planos de ação, acompanhamento de progresso e reflexão sobre hábitos. O escopo deve ser definido com clareza desde o início, especialmente quando a demanda envolve sofrimento emocional."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "Pode ser buscado para organização de metas, desempenho, carreira, liderança, hábitos ou desenvolvimento de competências."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Analise formação, experiência prática, metodologia, referências profissionais e clareza contratual. Prefira quem delimita o escopo do coaching e não faz promessas clínicas ou garantias de transformação."
      }
    ],
    "notice": "Depressão, ansiedade intensa, trauma, crise ou outros quadros de saúde devem ser acompanhados por profissionais habilitados.",
    "previous": {
      "slug": "neurociencias-aplicadas-a-psicologia",
      "title": "Neurociências Aplicadas à Psicologia"
    },
    "next": {
      "slug": "psicodrama",
      "title": "Psicodrama"
    },
    "summary": "Encontre profissionais de coaching comportamental para objetivos, carreira, hábitos e desenvolvimento de competências."
  },
  {
    "slug": "psicodrama",
    "title": "Psicodrama",
    "heading": "Profissionais de Psicodrama",
    "description": "Encontre profissionais com formação em psicodrama para contextos clínicos, grupais, educacionais ou organizacionais.",
    "lead": "Psicodrama é uma abordagem que utiliza recursos de ação, dramatização, papéis e interação para explorar experiências, relações e situações. Pode estar presente em contextos clínicos, grupais, educacionais e organizacionais, conforme a formação e a habilitação profissional.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "Em psicoterapia, o psicodrama deve ser conduzido por profissional habilitado dentro de suas atribuições. Aplicações não clínicas, como desenvolvimento de grupos e educação, precisam ser descritas de forma distinta."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A busca pode ocorrer por interesse em psicoterapia, trabalho em grupo, desenvolvimento pessoal, formação ou intervenção organizacional. A adequação depende da demanda, do contexto e da qualificação de quem conduz o processo."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Verifique profissão de origem, registro quando aplicável, formação em psicodrama, experiência e tipo de atendimento. O perfil deve informar se a atuação é clínica, educacional, organizacional ou outra."
      }
    ],
    "notice": null,
    "previous": {
      "slug": "coaching-comportamental",
      "title": "Coaching Comportamental"
    },
    "next": {
      "slug": "terapias-integrativas",
      "title": "Terapias Integrativas"
    },
    "summary": "Encontre profissionais com formação em psicodrama para contextos clínicos, grupais, educacionais ou organizacionais."
  },
  {
    "slug": "terapias-integrativas",
    "title": "Terapias Integrativas",
    "heading": "Terapias Integrativas",
    "description": "Explore profissionais e práticas integrativas, com informações sobre formação, métodos e limites de atuação.",
    "lead": "Terapias integrativas reúnem diferentes práticas complementares voltadas a bem-estar e cuidado ampliado. Como o termo engloba métodos distintos, esta área ajuda você a identificar qual prática cada profissional oferece, sua formação e os limites da atuação.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "Algumas práticas integrativas são utilizadas em serviços de saúde ou em contextos de bem-estar, mas o nível de evidência, as indicações e a regulamentação variam bastante. As práticas não devem ser tratadas como equivalentes nem receber benefícios clínicos sem respaldo adequado."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A busca pode ocorrer como complemento a cuidados já realizados ou por interesse em práticas de bem-estar. Sintomas, diagnósticos e tratamentos devem continuar sendo acompanhados por profissionais habilitados."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Leia o perfil, identifique a prática específica, formação, experiência e limites informados. Prefira profissionais que trabalham de forma responsável, sem promessas de cura e sem orientar abandono de tratamentos convencionais."
      }
    ],
    "notice": "Práticas integrativas são complementares e não substituem diagnóstico, tratamento ou cuidados de saúde necessários.",
    "previous": {
      "slug": "psicodrama",
      "title": "Psicodrama"
    },
    "next": {
      "slug": "psicanalise-clinica",
      "title": "Psicanálise Clínica"
    },
    "summary": "Explore profissionais e práticas integrativas, com informações sobre formação, métodos e limites de atuação."
  },
  {
    "slug": "psicanalise-clinica",
    "title": "Psicanálise Clínica",
    "heading": "Psicanálise Clínica",
    "description": "Encontre psicanalistas e conheça formação, trajetória, abordagem e modalidades de atendimento.",
    "lead": "Psicanálise é uma abordagem de escuta e investigação de experiências subjetivas, relações, conflitos e padrões que se repetem ao longo da vida. Os perfis devem apresentar formação, trajetória, modalidade de atendimento e, quando houver profissão regulamentada, o respectivo registro.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "O trabalho psicanalítico costuma acontecer por meio da fala e da escuta em encontros regulares. Existem diferentes escolas e formações, por isso é importante que cada profissional descreva sua trajetória e não utilize títulos ou credenciais que possam induzir a erro."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "Pessoas podem buscar psicanálise quando desejam compreender melhor questões emocionais, relacionais ou padrões de comportamento, ou quando procuram um espaço continuado de escuta."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Considere formação, supervisão, experiência, clareza ética, modalidade de atendimento e compatibilidade com a demanda. Se o perfil mencionar psicologia, medicina ou outra profissão regulamentada, o registro correspondente deve ser verificável."
      }
    ],
    "notice": "Em crises agudas, risco de autoagressão ou sintomas que exijam avaliação médica, busque suporte de saúde apropriado.",
    "previous": {
      "slug": "terapias-integrativas",
      "title": "Terapias Integrativas"
    },
    "next": {
      "slug": "estomaterapia",
      "title": "Estomaterapia"
    },
    "summary": "Encontre psicanalistas e conheça formação, trajetória, abordagem e modalidades de atendimento."
  },
  {
    "slug": "estomaterapia",
    "title": "Estomaterapia",
    "heading": "Profissionais de Estomaterapia",
    "description": "Encontre estomaterapeutas para cuidados relacionados a estomias, feridas, incontinências e educação para o autocuidado.",
    "lead": "Estomaterapia é uma área especializada da enfermagem relacionada ao cuidado de pessoas com estomias, feridas, incontinências e outras necessidades específicas, conforme formação e habilitação profissional. O perfil do estomaterapeuta deve destacar qualificação, registro e escopo real de atuação.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "O trabalho pode envolver prevenção e cuidado de lesões de pele, acompanhamento de estomias, orientação sobre dispositivos, avaliação de feridas, educação para o autocuidado e suporte a pacientes e familiares. A conduta depende da avaliação profissional e do contexto clínico."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "Pode ser indicado buscar um estomaterapeuta diante de necessidades relacionadas a estomias, feridas de difícil cicatrização, prevenção de lesões, incontinências ou orientação especializada."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Verifique graduação em enfermagem, registro profissional, formação em estomaterapia, experiência e tipo de atendimento. O perfil deve informar se realiza atendimento domiciliar, ambulatorial, hospitalar, consultoria ou educação."
      }
    ],
    "notice": "Sinais de infecção, piora rápida, dor intensa ou outras situações agudas exigem avaliação médica ou serviço de saúde.",
    "previous": {
      "slug": "psicanalise-clinica",
      "title": "Psicanálise Clínica"
    },
    "next": {
      "slug": "enfermagem-dermatologica",
      "title": "Enfermagem Dermatológica"
    },
    "summary": "Encontre estomaterapeutas para cuidados relacionados a estomias, feridas, incontinências e educação para o autocuidado."
  },
  {
    "slug": "enfermagem-dermatologica",
    "title": "Enfermagem Dermatológica",
    "heading": "Profissionais de Enfermagem Dermatológica",
    "description": "Encontre profissionais de enfermagem dermatológica para cuidados de pele, prevenção, feridas e educação em saúde.",
    "lead": "Enfermagem dermatológica reúne conhecimentos e cuidados de enfermagem relacionados à pele, prevenção de lesões, acompanhamento de feridas, educação em saúde e outros procedimentos compatíveis com a formação e habilitação do enfermeiro.",
    "articles": [
      {
        "id": "o-que-e",
        "title": "O que é",
        "text": "A atuação pode ocorrer em clínicas, hospitais, atendimento domiciliar, consultoria, educação e programas de prevenção. Os procedimentos variam conforme capacitação e normas profissionais, por isso o perfil deve detalhar com precisão o que é realizado."
      },
      {
        "id": "quando-buscar",
        "title": "Quando buscar",
        "text": "A busca pode ser útil para cuidados de pele e feridas dentro do escopo de enfermagem, orientação preventiva, acompanhamento de lesões ou suporte em rotinas de cuidado."
      },
      {
        "id": "como-escolher",
        "title": "Como escolher um profissional",
        "text": "Confirme registro de enfermagem, formação complementar, experiência, ambiente de atendimento e protocolos utilizados. Informações sobre procedimentos devem ser objetivas e compatíveis com as atribuições profissionais."
      }
    ],
    "notice": "Alterações suspeitas na pele, infecções, lesões graves ou sintomas sistêmicos precisam de avaliação médica apropriada.",
    "previous": {
      "slug": "estomaterapia",
      "title": "Estomaterapia"
    },
    "next": null,
    "summary": "Encontre profissionais de enfermagem dermatológica para cuidados de pele, prevenção, feridas e educação em saúde."
  }
];
