import { Paragrafo } from '../prontuarioTypes';

export const BLOQUE_3_PARAGRAFOS: Paragrafo[] = [
  {
    id: 79,
    title: 'Adopción',
    latinTitle: 'Adoptio et adrogatio',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 79,
    summary: 'Negocio solemne que introduce a una persona extraña en la familia bajo la patria potestad del pater familias: adoptio (alieni iuris) y adrogatio (sui iuris).',
    content: [
      'Negocio jurídico que introduce a un individuo en una familia (§ 94) sometiéndolo a la patria potestad (§ 108) del pater familias. Se divide en dos especies:',
      '1. Adrogatio: absorción de un ciudadano sui iuris (§ 83) (cabeza de su propia familia), negocio solemne ante los comicios curiados (§ 57) presididos por el pontifex maximus para evitar la extinción de una gens (§ 96). El adrogado sufre una capitis deminutio minima (§ 84) y su patrimonio pasa en bloque al adoptante.',
      '2. Adoptio estricta: incorporación de un alieni iuris, requiriendo extinguir la patria potestas previa mediante tres ventas sucesivas por mancipatio (§ 163, § 91) según la regla decenviral de las XII Tablas (§ 37), seguida de una in iure cessio (§ 161) ante el pretor.'
    ],
    crossReferences: [37, 57, 83, 84, 91, 94, 96, 108, 161, 163],
    latinCitations: ['Adoptio naturam imitatur (IJ. 1,11,4)'],
    keyFigures: ['Pontifex maximus', 'Gayo']
  },
  {
    id: 80,
    title: 'Ausencia',
    latinTitle: 'Absentia',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 80,
    summary: 'Situación de incertidumbre sobre el paradero o vida de una persona que exige medidas protectoras de su patrimonio y relaciones familiares.',
    content: [
      'Incertidumbre prolongada sobre la supervivencia de un ciudadano que exige medidas cautelares para gestionar su patrimonio (§ 154) y proteger a acreedores y familiares.',
      'Si el ausente cayó prisionero del enemigo, se aplicaban el postliminium (§ 112) y la fictio legis Corneliae (§ 105). El pretor (§ 74) nombraba un curator bonorum (§ 88) para conservar los bienes frente a embargos y autorizaba el divorcio o segundas nupcias si transcurrían plazos prolongados sin noticias.'
    ],
    crossReferences: [74, 88, 104, 105, 112, 130, 154],
    latinCitations: ['Si ita pater absit, ut ignoretur ubi sit (D. 23,2,10)'],
    keyFigures: ['Paulo', 'Ulpiano']
  },
  {
    id: 81,
    title: 'Bonorum possessio',
    latinTitle: 'Bonorum possessio',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 82,
    summary: 'Régimen sucesorio de origen pretorio que atribuía la posesión de los bienes hereditarios para corregir, suplir o mitigar la rigidez del ius civile.',
    content: [
      'Institución creada por el pretor (§ 74) que concede a un interesado la posesión interdictal de los bienes de una herencia (§ 97), confiriéndole la tutela del interdicto quorum bonorum (§ 166) y la protección mediante ficciones procesales (actio ficticia § 125).',
      'Clases: secundum tabulas (conforme al testamento pretorio sellado por siete testigos), contra tabulas (para proteger a hijos preteridos formalmente § 114) y sine tabulis (sucesión intestada pretoria estructurada en cuatro llamamientos sucesivos: unde liberi, unde legitimi, unde cognati, unde vir et uxor § 116).'
    ],
    crossReferences: [20, 30, 74, 97, 99, 114, 116, 120, 125, 166],
    latinCitations: [
      'Praetor heredes facere non potest, sed bonorum possessores facit (Gai. 3,32)'
    ],
    keyFigures: ['Gayo', 'Ulpiano']
  },
  {
    id: 82,
    title: 'Capacidad de obrar',
    latinTitle: 'Capacitas agendi',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 84,
    summary: 'Aptitud de la persona para realizar válida y eficazmente actos y negocios jurídicos dotados de trascendencia patrimonial o procesal.',
    content: [
      'Idoneidad reconocida por el ordenamiento para emitir declaraciones de voluntad vinculantes y concluir negocios jurídicos. Se fundamenta en la madurez intelectiva y volitiva.',
      'Causas de incapacidad o limitación en Roma: edad (los impúberes menores de catorce años sujetos a tutela § 122; la lex Laetoria protegió a los menores de 25 años § 88), sexo (las mujeres sometidas a la tutela mulierum § 123), enfermedad mental (los dementes o furiosi sujetos a curatela § 88) y prodigalidad declarada.'
    ],
    crossReferences: [83, 88, 108, 122, 123],
    latinCitations: ['Furiosus nullum negotium contrahere potest (D. 50,17,5)'],
    keyFigures: ['Paulo']
  },
  {
    id: 83,
    title: 'Capacidad jurídica',
    latinTitle: 'Capacitas iuridica / Caput',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 85,
    summary: 'Aptitud para ser titular de derechos y obligaciones patrimoniales. En Roma requería ostentar la plenitud de los tres status: libertad, ciudadanía y familia.',
    content: [
      'Aptitud legal para ser sujeto de derechos y deberes. En Derecho romano no pertenecía a todos los seres humanos: requería la concurrencia de tres status: status libertatis (ser libre y no esclavo § 92), status civitatis (ser ciudadano y no extranjero § 60) y status familiae (ser sui iuris, no estar bajo la patria potestad ajena § 108).',
      'El pater familias libre y ciudadano era el único titular pleno de capacidad jurídica patrimonial en el ius civile. Los alieni iuris (hijos y esclavos) tenían capacidad de obrar (§ 82) instrumental para adquirir en beneficio del pater o amo, sin obligarle en principio salvo por las acciones adyecticias (§ 125).'
    ],
    crossReferences: [60, 82, 84, 92, 93, 108, 110, 125],
    latinCitations: [
      'Qui in potestate alterius est nihil suum habere potest (Gai. 2,86)'
    ],
    keyFigures: ['Gayo', 'Paulo']
  },
  {
    id: 84,
    title: 'Capitis deminutio',
    latinTitle: 'Capitis deminutio',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 86,
    summary: 'Cambio o degradación en los tres estados de la personalidad (libertad, ciudadanía, familia). Tres grados: máxima, media y mínima.',
    content: [
      'Tecnicismo acuñado por la jurisprudencia para describir la alteración del estado jurídico (status) que experimenta una persona física libre.',
      'Gayo (§ 23) sistematiza tres clases (Gai. 1,159-163): 1. Capitis deminutio maxima: pérdida de la libertad y consecuentemente de la ciudadanía y derechos patrimoniales (caída en esclavitud § 92); 2. Capitis deminutio media: pérdida de la ciudadanía conservando la libertad (destierro, interdictio aquae et ignis § 64); 3. Capitis deminutio minima: cambio de posición en la familia (§ 94), pasando de sui iuris a alieni iuris (adrogatio § 79, conventio in manum § 104) o emancipación (§ 91).'
    ],
    crossReferences: [23, 60, 64, 79, 83, 91, 92, 94, 104],
    latinCitations: [
      'Capitis deminutio est prioris status permutatio (Gai. 1,159)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 85,
    title: 'Codicilo',
    latinTitle: 'Codicillus',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 87,
    summary: 'Documento mortis causa de forma libre complementario al testamento, eficaz para ordenar legados, fideicomisos y manumisiones, pero no herederos.',
    content: [
      'Disposición de última voluntad de forma más libre que el testamento (§ 120), originada en época de Augusto para dar validez jurídica a cartas e instrucciones mortis causa.',
      'Puede ser codicilo confirmado en el testamento o no confirmado. En ellos es válido ordenar fideicomisos (§ 95), legados (§ 102) y manumisiones (§ 103), pero jamás la institución directa de heredero (§ 100) ni desheredaciones (§ 114).'
    ],
    crossReferences: [95, 100, 102, 103, 114, 118, 120],
    keyFigures: ['Augusto', 'Léntulo']
  },
  {
    id: 86,
    title: 'Collegium',
    latinTitle: 'Collegium / Universitas personarum',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 87,
    summary: 'Agrupación o asociación de personas reconocida por el ordenamiento con patrimonio propio e independiente (universitas personarum).',
    content: [
      'Asociación corporativa organizada con estatuto interno (lex collegii) y finalidad lícita común: gremios de oficios, corporaciones mercantiles de navieros y panaderos, sociedades religiosas o cofradías funerarias (collegia funeraticia).',
      'La lex Iulia de collegiis de Augusto prohibió las asociaciones no autorizadas por el Senado (§ 78) para frenar conspiraciones políticas. La jurisprudencia fijó la regla: «Tres faciunt collegium» (se necesitan al menos tres miembros para fundar una asociación; Neracio Prisco, D. 50,16,85).'
    ],
    crossReferences: [78, 110],
    latinCitations: [
      'Neratius Priscus tres personas formare existimat collegium (D. 50,16,85)',
      'Si quid universitati debetur, singulis non debetur (D. 3,4,7,1)'
    ],
    keyFigures: ['Neracio Prisco', 'Augusto']
  },
  {
    id: 87,
    title: 'Concubinato',
    latinTitle: 'Concubinatus',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 88,
    summary: 'Unión marital estable entre hombre y mujer libre que no constituye iustum matrimonium por falta de afecto marital o prohibiciones legales de conubium.',
    content: [
      'Convivencia duradera y monogámica entre personas de distinto sexo que no alcanza la dignidad de matrimonio legítimo (§ 104) por falta de conubium o intención marital formal.',
      'Se extendió con las leyes matrimoniales de Augusto que vedaban las nupcias entre senadores y libertas o entre soldados y mujeres provinciales (§ 76). Los hijos nacidos en concubinato (liberi naturales) seguían la condición de la madre y carecían de derecho automático a la herencia del padre (§ 97) hasta las reformas justinianeas de legitimación.'
    ],
    crossReferences: [76, 89, 97, 104, 108, 155],
    latinCitations: ['Concubinam ex ea provincia in qua quis officium administrat habere potest (D. 25,7,5)'],
    keyFigures: ['Augusto', 'Justiniano']
  },
  {
    id: 88,
    title: 'Curatela',
    latinTitle: 'Cura / Curatela',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 89,
    summary: 'Institución de guarda para la administración y protección de patrimonios de personas sui iuris con capacidad menguada: furiosi, pródigos y menores de 25 años.',
    content: [
      'Institución originaria de las XII Tablas (§ 37) destinada a salvaguardar los intereses económicos de sujetos sui iuris incapaces de gestionar por sí mismos sus bienes (§ 82).',
      'Tres grandes figuras clásicas: 1. Cura furiosi: para la administración del patrimonio del enajenado mental; 2. Cura prodigi: para el pródigo que dilapida los bienes familiares; 3. Cura minorum XXV annorum: nacida tras la lex Laetoria (c. 200 a.C.) para asistir a los varones jóvenes ya púberes pero inexpertos frente al riesgo de engaño contractual (§ 137, § 130).'
    ],
    crossReferences: [37, 74, 82, 94, 96, 99, 120, 122, 130, 137, 204],
    latinCitations: [
      'Si furiosus escit, adgnatum gentiliumque in eo pecuniaque eius potestas esto (Tab. V, 7)'
    ],
    keyFigures: ['Pretor']
  },
  {
    id: 89,
    title: 'Divorcio',
    latinTitle: 'Divortium / Repudium',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 90,
    summary: 'Cese del vínculo matrimonial por pérdida o manifestación de cese de la affectio maritalis en uno (repudio) o ambos cónyuges.',
    content: [
      'Extinción del matrimonio (§ 104) basada en la desaparición del consentimiento continuado de los cónyuges (affectio maritalis). En época clásica (§ 20) no requería intervención judicial ni causa justificada: bastaba la voluntad manifestada directamente o mediante libelo de repudio (libellus repudii).',
      'Si el matrimonio era cum manu, requería un acto formal extintivo simétrico (diffarreatio o remancipatio § 163). En época imperial la disolución injustificada acarreaba sanciones patrimoniales sobre la restitución de la dote (§ 90).'
    ],
    crossReferences: [20, 90, 104, 163],
    latinCitations: [
      'Nuptias non concubitus, sed consensus facit (D. 50,17,30)'
    ],
    keyFigures: ['Augusto', 'Justiniano']
  },
  {
    id: 90,
    title: 'Dote',
    latinTitle: 'Dos',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 91,
    summary: 'Aportación patrimonial realizada por la mujer, su pater o un tercero a favor del marido para subvenir las cargas económicas del matrimonio.',
    content: [
      'Conjunto de bienes o derechos entregados al marido por causa de matrimonio (§ 104) (ad sustinenda onera matrimonii). Clases: dos profecticia (constituida por el paterfamilias § 108), dos adventicia (constituida por la mujer u otra persona) y dos recepticia (con pacto expreso de devolución).',
      'Formas de constitución: datio dotis (transmisión real inmediata § 175), dictio dotis o promissio dotis (promesa formal obligacional § 197). En caso de divorcio (§ 89) o muerte, la mujer o sus herederos exigían su reintegro mediante la actio rei uxoriae (§ 126), sujeta a retenciones legales (propter liberos, mores, impensas).'
    ],
    crossReferences: [89, 104, 108, 126, 175, 197, 220],
    keyFigures: ['Ulpiano', 'Paulo']
  },
  {
    id: 91,
    title: 'Emancipación',
    latinTitle: 'Emancipatio',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 93,
    summary: 'Acto jurídico solemne voluntario mediante el cual el pater familias libera a su hijo de la patria potestad convirtiéndolo en persona sui iuris.',
    content: [
      'Negocio por el que el paterfamilias renuncia voluntariamente a la patria potestad (§ 108) que ostenta sobre un hijo, transformándolo en sujeto sui iuris (§ 83).',
      'Mecanismo clásico: aplicando ingeniosamente el precepto de las XII Tablas (§ 37) («si el padre vende al hijo tres veces, sea el hijo libre de la potestad paterna»), el padre vendía fiduciariamente al hijo tres veces sucesivas por mancipatio (§ 163) a un tercero, quien tras manumitirlo extinguía definitivamente el vínculo agnaticio (§ 94).'
    ],
    crossReferences: [37, 81, 83, 94, 103, 108, 163],
    latinCitations: [
      'Si pater filium ter venum duit, filius a patre liber esto (Tab. IV, 2)'
    ],
    keyFigures: ['Pontífices']
  },
  {
    id: 92,
    title: 'Esclavo',
    latinTitle: 'Servus',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 94,
    summary: 'Persona privada de libertad jurídica por cautiverio bélico o nacimiento de madre esclava; cosa en derecho patrimonial pero ser humano en derecho natural.',
    content: [
      'Sujeto privado de status libertatis por razones jurídicas: prisionero de guerra, condena penal o nacimiento de madre esclava (partus sequitur ventrem).',
      'Presenta una doble dimensión: es jurídicamente una cosa (res mancipi § 154) objeto de dominio (§ 169), pero simultáneamente es un ser humano dotado de intelecto. Podía gestionar un peculio (§ 109) y realizar negocios cuyos efectos adquisitivos revertían directamente al amo (§ 83, § 165), respondiendo el dominus de sus deudas a través de las acciones adyecticias (§ 125) o por entrega en noxa en caso de delito (§ 127, § 193).'
    ],
    crossReferences: [83, 103, 109, 110, 125, 127, 154, 165, 169, 193],
    latinCitations: [
      'Servitus est constitutio iuris gentium, qua quis dominio alieno contra naturam subicitur (IJ. 1,3,2)',
      'Quod attinet ad ius civile, servi pro nullis habentur: non tamen et iure naturali (D. 50,17,32)'
    ],
    keyFigures: ['Ulpiano', 'Gayo']
  },
  {
    id: 93,
    title: 'Extranjero',
    latinTitle: 'Peregrinus',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 95,
    summary: 'Persona libre que vive en el orbe romano pero carece de la ciudadanía romana; amparada por el ius gentium y la jurisdicción del pretor peregrino.',
    content: [
      'Hombre libre que reside en el ámbito romano pero carece de la ciudadanía (§ 60). Excluido en principio del ius civile (§ 27).',
      'Sus relaciones mercantiles y patrimoniales se desarrollaron con gran flexibilidad gracias al pretor peregrino (§ 74) y al ius gentium (§ 29). Tras la concesión universal de la ciudadanía por la Constitutio Antoniniana de 212 d.C. por Caracalla, la distinción entre cives y peregrini quedó prácticamente reducida a una reminiscencia histórica.'
    ],
    crossReferences: [27, 29, 60, 74, 101, 140],
    keyFigures: ['Pretor peregrino', 'Caracalla']
  },
  {
    id: 94,
    title: 'Familia',
    latinTitle: 'Familia agnatitia et cognatitia',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 96,
    summary: 'Grupo de personas libres sometidas a la patria potestad del mismo pater familias (parentesco agnaticio), evolucionando hacia el vínculo biológico (cognación).',
    content: [
      'En sentido estricto (familia proprio iure), conjunto de personas sometidas a la patria potestad (§ 108) o a la manus (§ 104) de un único pater familias vivo (hijos consanguíneos, adoptados § 79 y la uxor in manu).',
      'El parentesco primitivo romano es la agnación: vínculo civil exclusivamente por vía masculina que prescinde de la sangre. Con el tiempo, el pretor en la bonorum possessio (§ 81) y Justiniano en las Novelas (§ 41) impusieron la primacía de la cognación o parentesco natural de sangre.'
    ],
    crossReferences: [41, 79, 81, 104, 108, 116],
    latinCitations: [
      'Familiae appellatio qualiter accipiatur, videamus (D. 50,16,195,1)'
    ],
    keyFigures: ['Ulpiano']
  },
  {
    id: 95,
    title: 'Fideicomiso',
    latinTitle: 'Fideicommissum',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 97,
    summary: 'Ruego o encargo informal fundado en la fides encomendado por el causante a su heredero o legatario en beneficio de un tercero, protegido por cognitio extra ordinem.',
    content: [
      'Disposición mortis causa no sujeta a las rígidas solemnidades del testamento civil (§ 120), consistente en un encargo informal basado en la lealtad y buena fe (fidei committere) que el disponente dirige a su heredero (§ 99) o legatario (§ 102) a favor de un fideicomisario.',
      'Augusto dotó al fideicomiso de exigibilidad jurídica nombrando un praetor fideicommissarius y cauce por la cognitio extra ordinem (§ 145). Los senadoconsultos Trebeliano (56 d.C.) y Pegasiano (73 d.C.) equipararon sustancialmente los fideicomisos a los legados civiles, asegurando para el heredero la cuarta parte del caudal (cuarta pegasiana).'
    ],
    crossReferences: [23, 49, 99, 100, 102, 119, 120, 145],
    latinCitations: [
      'Verba autem utilia fideicommissorum haec maxime in usu esse videntur: peto, rogo, volo, fidei committo (Gai. 2,249)'
    ],
    keyFigures: ['Augusto', 'Gayo']
  },
  {
    id: 96,
    title: 'Gens',
    latinTitle: 'Gens / Gentiles',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 98,
    summary: 'Agrupación suprafamiliar de linajes de la Roma arcaica unidos por el mismo nomen gentilicium, con cultos compartidos y vocación sucesoria intestada subsidiaria.',
    content: [
      'Comunidad gentilicia originaria de familias patricias (§ 94) que compartían un antepasado común ilustre, manifestado en el nomen gentilicium (por ejemplo, los Cornelios, Julios o Fabios).',
      'En la monarquía y República temprana poseían culto propio (sacra gentilitia), enterramientos colectivos y un derecho hereditario y de curatela subsidiario previsto en las XII Tablas (§ 37) a falta de parientes agnados (§ 88, § 116).'
    ],
    crossReferences: [37, 61, 88, 94, 116],
    latinCitations: [
      'Si adgnatus nec escit, gentiles familiam habento (Tab. V, 5)'
    ],
    keyFigures: ['Patricios']
  },
  {
    id: 97,
    title: 'Herencia',
    latinTitle: 'Hereditas',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 99,
    summary: 'Universalidad jurídica compuesta por el conjunto patrimonial transmisible (activo y pasivo) del causante, protegida por la hereditatis petitio.',
    content: [
      'Conjunto de bienes, derechos reales (§ 162), créditos y obligaciones (§ 214) transmisibles de una persona que fallece, considerado una universalidad jurídica (universitas iuris) que se transfiere en un solo acto al heredero (§ 99).',
      'Las relaciones estrictamente personalísimas (patria potestad § 108, manus, cargos públicos, usufructo § 177, sociedad § 223, mandato § 208) se extinguen con la muerte (§ 105). El heredero civil cuenta para su defensa procesal con la hereditatis petitio (§ 124, § 152).'
    ],
    crossReferences: [98, 99, 105, 108, 113, 116, 117, 124, 142, 152, 162, 177, 208, 214, 223],
    latinCitations: [
      'Hereditas nihil aliud est, quam successio in universum ius quod defunctus habuit (D. 50,17,62)'
    ],
    keyFigures: ['Juliano', 'Gayo']
  },
  {
    id: 98,
    title: 'Herencia yacente',
    latinTitle: 'Hereditas iacens',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 100,
    summary: 'Patrimonio relicto en el intervalo de tiempo entre la muerte del causante y la aceptación efectiva por parte del heredero voluntario.',
    content: [
      'Situación en que se encuentra la herencia (§ 97) deferida pero no adquirida todavía, cuando el llamado es un heredero voluntario (§ 99) que debe manifestar su aceptación (cretio o pro herede gestio).',
      'Durante ese intervalo no es res nullius (§ 164), sino un patrimonio transitoriamente desprovisto de titular vivo. Los juristas personificaron esta masa patrimonial afirmando que «hereditas personae defuncti vicem sustinet» (la herencia asume las veces de la persona del difunto), antecedente crucial de la persona jurídica moderna (§ 110).'
    ],
    crossReferences: [33, 97, 99, 105, 110, 164, 176],
    latinCitations: [
      'Hereditas personae defuncti vicem sustinet (D. 46,1,22)'
    ],
    keyFigures: ['Ulpiano', 'Florentino']
  },
  {
    id: 99,
    title: 'Heres (Heredero)',
    latinTitle: 'Heres',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 101,
    summary: 'Sucesor a título universal del causante que asume su personalidad jurídica civil en todos sus derechos, bienes y deudas hereditarias.',
    content: [
      'Sucesor universal que asume la titularidad de las relaciones activas y pasivas del causante (§ 97, § 117).',
      'Tipos de herederos: 1. Heredes sui et necessarii (hijos sometidos a la patria potestad del difunto § 108 que se vuelven sui iuris al fallecer éste; adquieren automáticamente de pleno derecho ipso iure sin necesidad de aceptación); 2. Heredes necessarii (esclavos manumitidos e instituidos en el testamento § 92); 3. Heredes extranei o voluntarii (los demás llamados que adquieren por acto voluntario de adición o aceptación).'
    ],
    crossReferences: [35, 92, 97, 98, 105, 108, 113, 114, 115, 117, 120],
    latinCitations: [
      'Semel heres, semper heres (D. 28,5,89)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 100,
    title: 'Institución de heredero',
    latinTitle: 'Heredis institutio',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 102,
    summary: 'Disposición solemne e indispensable que constituye la cabeza y fundamento de todo testamento romano («caput et fundamentum testamenti»).',
    content: [
      'Designación de sucesor universal que el testador debía efectuar obligatoriamente al comienzo del testamento (§ 120). Gayo la califica de caput et fundamentum totius testamenti: si la institución de heredero resultaba nula, caían todos los demás legados, manumisiones y disposiciones del testamento.',
      'Exigía palabras imperativas y solemnes en latín («Titius heres meus esto», sea Ticio mi heredero; Gai. 2,117). En época postclásica y justinianea se suprimió la rigidez sacramental.'
    ],
    crossReferences: [20, 94, 99, 102, 114, 115, 120],
    latinCitations: [
      'Solemnis autem institutio haec est: Titius heres esto (Gai. 2,117)'
    ],
    keyFigures: ['Gayo', 'Justiniano']
  },
  {
    id: 101,
    title: 'Latino',
    latinTitle: 'Latinus',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 103,
    summary: 'Estatuto intermedio entre el ciudadano y el extranjero. Categorías: latini prisci o veteres, latini coloniarii y latini iuniani (manumitidos sin forma solemne).',
    content: [
      'Condición jurídica privilegiada frente a los peregrinos ordinarios (§ 93). Gozaban de ius commercii (capacidad de contratar con romanos) y algunos de ius conubii (§ 104) y testamentifactio (§ 119).',
      'Tres grupos históricos: Latini prisci (antiguos habitantes del Lacio vinculados por el foedus Cassianum § 70); Latini coloniarii (habitantes de las colonias latinas § 62); y Latini Iuniani (esclavos liberados por formas no solemnes creados por la lex Iunia Norbana de 19 d.C. § 103: «vivían como libres pero morían como esclavos», pasando sus bienes al patrono).'
    ],
    crossReferences: [60, 62, 70, 93, 103, 104, 109, 119],
    latinCitations: ['Vivunt quasi ingenui, moriuntur ut servi (Salv. Adv. Avar. 3,7)'],
    keyFigures: ['Lex Iunia Norbana']
  },
  {
    id: 102,
    title: 'Legado',
    latinTitle: 'Legatum',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 104,
    summary: 'Disposición testamentaria a título particular impuesta al heredero como una carga que atribuye un bien, derecho real o crédito concreto a favor del legatario.',
    content: [
      'Liberalidad mortis causa contenida en testamento (§ 120) o codicilo confirmado (§ 85) que beneficia a un tercero particular (legatario) gravando la herencia del heredero (§ 99).',
      'Cuatro géneros clásicos según Gayo (Gai. 2,192): 1. Per vindicationem (atribuye directamente la propiedad civil § 169 de una cosa o derecho real con acción reivindicatoria § 152); 2. Per damnationem (crea un crédito obligacional § 214 a favor del legatario); 3. Sinendi modo (obliga al heredero a tolerar); 4. Per praeceptionem. La Lex Falcidia (40 a.C.) aseguró obligatoriamente al heredero al menos la cuarta parte neta del haber hereditario (quarta Falcidia).'
    ],
    crossReferences: [85, 99, 117, 120, 152, 154, 162, 169, 186, 214],
    latinCitations: [
      'Legatorum genera sunt quattuor: aut enim per vindicationem legamus aut per damnationem aut sinendi modo aut per praeceptionem (Gai. 2,192)'
    ],
    keyFigures: ['Gayo', 'Falcidio']
  },
  {
    id: 103,
    title: 'Manumisión',
    latinTitle: 'Manumissio',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 106,
    summary: 'Acto de liberación jurídica del esclavo por voluntad del dominus. Formas solemnes civiles (vindicta, censu, testamento) y formas pretorias no solemnes.',
    content: [
      'Negocio jurídico por el cual el dueño (dominus) otorga la libertad al esclavo (§ 92), convirtiéndolo en liberto vinculado a su antiguo amo (ahora patrono) por los deberes de patronato (obsequium y operae).',
      'Formas solemnes del ius civile (§ 27) que conferían libertad y ciudadanía (§ 60): Manumissio vindicta (juicio ficticio de libertad ante el pretor), manumissio censu (inscripción en el censo quinquenal § 59) y manumissio testamento (§ 120). Formas no solemnes pretorias: inter amicos, per epistulam o per mensam, que hacían al liberto latino juniano (§ 101).'
    ],
    crossReferences: [27, 30, 59, 60, 74, 92, 99, 101, 102, 120],
    latinCitations: [
      'Manumissio est datio libertatis; nam quamdiu quis in servitute est, manui et potestati suppositus est (IJ. 1,5 pr.)'
    ],
    keyFigures: ['Ulpiano']
  },
  {
    id: 104,
    title: 'Matrimonio',
    latinTitle: 'Iustae nuptiae / Matrimonium',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 107,
    summary: 'Unión de varón y mujer ciudadana basada en la affectio maritalis continuada, con dos regímenes patrimoniales: cum manu y sine manu.',
    content: [
      'Relación de hecho con profundas consecuencias jurídicas fundada en la voluntad de unión marital digna entre dos personas púberes dotadas de ius conubii (affectio maritalis).',
      'Dos formas históricas: 1. Matrimonio cum manu: la mujer salía de su familia originaria (§ 94) y pasaba a estar bajo la manus del marido o de su suegro (loco filiae), absorbiendo el marido su patrimonio; se adquiría por confarreatio, coemptio (§ 163) o usus continuado de un año (evitable por el trinoctium); 2. Matrimonio sine manu: la mujer conserva su estatus patrimonial independiente (separación de bienes).'
    ],
    crossReferences: [60, 81, 84, 89, 90, 94, 108, 163],
    latinCitations: [
      'Nuptiae sunt coniunctio maris et feminae et consortium omnis vitae, divini et humani iuris communicatio (Modestino, D. 23,2,1)'
    ],
    keyFigures: ['Modestino', 'Ulpiano']
  },
  {
    id: 105,
    title: 'Muerte',
    latinTitle: 'Mors',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 110,
    summary: 'Hecho biológico que extingue la personalidad jurídica y abre la sucesión mortis causa del difunto (apertura de la herencia). Presunción de conmoriencia.',
    content: [
      'Hecho natural que determina el fin de la persona física (§ 110) y produce la apertura y delación de su herencia (§ 97, § 117).',
      'Extingue las relaciones personalísimas: la patria potestad (§ 108), el matrimonio (§ 104), el usufructo (§ 177), la sociedad (§ 223) y el mandato (§ 208). Si varias personas llamadas a sucederse fallecen conjuntamente en un mismo siniestro sin prueba del orden temporal, el derecho clásico presumió la muerte simultánea, mientras que Justiniano introdujo presunciones de supervivencia según la fortaleza física (púberes e impúberes).'
    ],
    crossReferences: [84, 97, 104, 108, 110, 117, 122, 177, 208, 223],
    keyFigures: ['Ulpiano', 'Justiniano']
  },
  {
    id: 106,
    title: 'Nacimiento',
    latinTitle: 'Nativitas / Nasciturus',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 111,
    summary: 'Comienzo de la personalidad física humana. Protección anticipada del concebido pero no nacido (nasciturus) en sus derechos hereditarios y patrimoniales.',
    content: [
      'Hecho natural que inicia la personalidad jurídica (§ 110). Requisitos en Roma: total desprendimiento del claustro materno, nacimiento con vida (clamor o respiración) y figura humana.',
      'Al concebido pero aún no nacido (nasciturus) se le reservaron sus futuros derechos sucesorios nombrando a favor de la madre un curator ventris (§ 88) y otorgándole la missio in possessionem ventris nomine (§ 130). De ahí la célebre regla de Paulo: «Nasciturus pro iam nato habetur, quotiens de eius commodis agitur» (D. 1,5,7).'
    ],
    crossReferences: [88, 110, 114, 116, 130],
    latinCitations: [
      'Qui in utero est, perinde ac si in rebus humanis esset custoditur, quotiens de commodis ipsius partus quaeritur (D. 1,5,7)'
    ],
    keyFigures: ['Paulo', 'Juliano']
  },
  {
    id: 107,
    title: 'Patología del testamento',
    latinTitle: 'Vitia testamenti',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 112,
    summary: 'Supuestos de ineficacia o invalidez del testamento: testamentum iniustum, ruptum, irritum, destitutum o inofficiosum.',
    content: [
      'Clasificación jurisprudencial de los vicios y causas de ineficacia del testamento (§ 120):',
      '1. Testamentum iniustum o nullum (falto de solemnidades legales de forma o sin testamentifactio § 119); 2. Testamentum ruptum (revocado por un testamento posterior válido o por sobrevenir un heredero póstumo preterido § 99); 3. Testamentum irritum (por capitis deminutio sobrevenida del testador § 84); 4. Testamentum destitutum o desertum (ningún heredero acepta la herencia); 5. Testamentum inofficiosum (impugnado por lesionar la legítima de parientes cercanos § 115).'
    ],
    crossReferences: [84, 99, 114, 115, 119, 120],
    latinCitations: [
      'Posteriore quoque testamento, quod iure factum est, superius rumpitur (Gai. 2,144)'
    ],
    keyFigures: ['Gayo', 'Ulpiano']
  },
  {
    id: 108,
    title: 'Patria potestad',
    latinTitle: 'Patria potestas',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 113,
    summary: 'Poder jurídico originario, vitalicio y exclusivo que ejerce el pater familias sobre sus descendientes legítimos y personas incorporadas a la familia.',
    content: [
      'Poder personal y patrimonial absoluto que ejerce el pater familias sobre sus hijos legítimos nacidos en matrimonio (§ 104) y adoptados (§ 79). Institución privativa y distintiva de los cives romani.',
      'Comprendía arcaicamente el ius vitae necisque (derecho de vida y muerte), el ius vendendi (vender al hijo en esclavitud § 92) y el ius noxae dandi (entregar al hijo causante de un delito privado § 193). En lo patrimonial, todo lo adquirido por los filiifamilias pasaba automáticamente al pater, modulándose mediante los peculios (§ 109).'
    ],
    crossReferences: [79, 83, 91, 92, 94, 104, 109, 125, 193],
    latinCitations: [
      'Ius potestatis, quod in liberos habemus, proprium est civium Romanorum (Gai. 1,55)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 109,
    title: 'Peculio',
    latinTitle: 'Peculium',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 114,
    summary: 'Masa patrimonial separada concedida por el pater o dominus al hijo o esclavo para su libre administración, embrión de la autonomía negocial.',
    content: [
      'Conjunto de bienes o dinero asignado por el pater familias (§ 108) a su hijo o esclavo (§ 92) para su administración autónoma.',
      'Modalidades: 1. Peculium profecticium (concedido revocablemente de los bienes del padre, fundamentando la actio de peculio § 125); 2. Peculium castrense (creado por Augusto para el botín y bienes obtenidos por el hijo en el ejército militar, sobre el cual tiene plena disposición inter vivos y mortis causa por testamento § 120); 3. Peculium quasi castrense (bienes obtenidos como funcionario imperial o clérigo); 4. Bona materna o adventicia (bienes heredados de la madre o parientes maternos).'
    ],
    crossReferences: [83, 92, 108, 120, 125, 155, 168],
    keyFigures: ['Augusto', 'Constantino']
  },
  {
    id: 110,
    title: 'Persona',
    latinTitle: 'Persona / Persona ficta',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 116,
    summary: 'Sujeto de derecho. El término abarca en Roma a todo ser humano (libres y esclavos), distinguiéndose entre persona física y los entes con capacidad corporativa.',
    content: [
      'En el lenguaje de los juristas clásicos (§ 20), persona alude a todo ser humano («omnes homines aut liberi sunt aut servi», Gai. 1,9), aunque sólo los libres sui iuris con ciudadanía (§ 60, § 83) disfrutaban de capacidad jurídica plena.',
      'En relación con entes supraindividuales, Roma conoció corporaciones de base personal (el populus Romanus, los municipios § 73, los collegia § 86) y masas patrimoniales de base fundacional (la hereditas iacens § 98 y las piae causae § 111), a las que se reconoció capacidad procesal y testamentaria progresiva.'
    ],
    crossReferences: [20, 60, 73, 83, 86, 92, 98, 111],
    latinCitations: [
      'De iure personarum: summa divisio de iure personarum haec est, quod omnes homines aut liberi sunt aut servi (Gai. 1,9)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 111,
    title: 'Piae causae',
    latinTitle: 'Piae causae',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 116,
    summary: 'Patrimonios afectos de forma permanente a fines piadosos, religiosos o de caridad (hospitales, orfanatos, asilos), antecedentes de la fundación moderna.',
    content: [
      'Entidades benéficas nacidas en el periodo postclásico y justinianeo (§ 21) bajo influjo cristiano: hospicios de pobres, hospitales de enfermos, asilos de huérfanos y ancianos.',
      'El fundador asignaba bienes por donación (§ 155) o testamento (§ 120) administrados por autoridades eclesiásticas, gozando de capacidad para heredar y accionar judicialmente, antecedente directo de las fundaciones.'
    ],
    crossReferences: [21, 95, 97, 102, 110, 120, 155],
    keyFigures: ['Justiniano']
  },
  {
    id: 112,
    title: 'Postliminium',
    latinTitle: 'Ius postliminii',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 117,
    summary: 'Derecho por el cual el ciudadano hecho prisionero por el enemigo, si regresa a Roma con ánimo de permanecer, recobra de inmediato todos sus antiguos derechos civiles.',
    content: [
      'Institución del ius civile que amparaba al ciudadano (§ 60) que caía en poder del enemigo (cautivitas) y perdía su libertad (§ 92). Si lograba escapar y retornar a las fronteras romanas (post limen), recuperaba retroactivamente todos sus derechos civiles previos.',
      'Excepciones de hecho: el matrimonio (§ 104) y la posesión (§ 165), relaciones fácticas que no revivían por ministerio de la ley, requiriendo reanudación efectiva. Para el caso de que muriera en cautiverio, la Lex Cornelia (81 a.C.) introdujo la ficción de que había muerto en el momento previo de la captura como hombre libre para salvar la validez de su testamento (§ 120).'
    ],
    crossReferences: [60, 80, 92, 104, 105, 120, 165],
    latinCitations: [
      'Postliminium est ius amissae rei recipiendae ab extraneo (D. 49,15,19 pr.)'
    ],
    keyFigures: ['Paulo', 'Sila']
  },
  {
    id: 113,
    title: 'Responsabilidad ultra vires hereditatis',
    latinTitle: 'Responsabilitas ultra vires',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 118,
    summary: 'Principio por el cual el heredero responde ilimitadamente de las deudas del causante con su propio patrimonio, corregido por el beneficio de inventario.',
    content: [
      'Consecuencia originaria de la sucesión universal civil (§ 97): la confusión del patrimonio del difunto con el del heredero (§ 99), obligando a éste a abonar todas las deudas hereditarias incluso con sus bienes personales si el caudal relicto resultase insolvente (hereditas damnosa).',
      'Remedios correctores: el pretor (§ 74) concedió al heredero suus el beneficium abstinendi y la separatio bonorum para los acreedores de la herencia; finalmente Justiniano (§ 21) creó el beneficium inventarii (año 531 d.C.), permitiendo al heredero limitar su responsabilidad al valor de los bienes inventariados formalmente ante notario.'
    ],
    crossReferences: [20, 21, 74, 97, 99, 102, 197, 208],
    latinCitations: [
      'Nemo plus commodi heredi suo relinquit, quam ipse habuit (D. 50,17,120)'
    ],
    keyFigures: ['Justiniano']
  },
  {
    id: 114,
    title: 'Sucesión forzosa formal',
    latinTitle: 'Exheredatio et praeteritio',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 120,
    summary: 'Obligación del testador de instituir o desheredar expresamente a sus herederos forzosos (sui heredes): la preterición acarreaba la nulidad del testamento.',
    content: [
      'Régimen que limita la libertad formal del testador (§ 120) respecto a los herederos de su propia potestad (sui heredes § 99). Regla civil: «Sui heredes aut instituendi sunt aut exheredandi» (a los herederos forzosos o se les instituye herederos o se les deshereda expresamente).',
      'Si el testador olvida a un hijo varón (praeteritio), el testamento es nulo de raíz ab initio y se abre la sucesión legítima intestada (§ 116). Si pretería a hijas o nietos, el testamento subsistía pero los preteridos concurrían con los instituidos para reclamar su parte viril.'
    ],
    crossReferences: [79, 94, 99, 104, 107, 108, 115, 116, 120],
    latinCitations: [
      'Sui heredes aut instituendi sunt aut exheredandi (Gai. 2,123)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 115,
    title: 'Sucesión forzosa material',
    latinTitle: 'Querella inofficiosi testamenti / Pars legitima',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 121,
    summary: 'Derecho de ciertos parientes íntimos a percibir una porción efectiva del patrimonio del causante (legítima), tutelado por la querella inofficiosi testamenti.',
    content: [
      'Evolución del derecho sucesorio que reconoce a los hijos, padres y hermanos el derecho sustancial a recibir una cuota mínima real de los bienes del de cuius (pars legitima o porción legítima).',
      'Si el testador desheredaba sin causa justificada o dejaba menos de la cuota mínima (fijada por el tribunal de los centunviros § 141 en una cuarta parte de lo que correspondería ab intestato), los legitimados podían interponer la querella inofficiosi testamenti aduciendo que el causante testó bajo una enajenación moral (color insaniae).'
    ],
    crossReferences: [20, 21, 94, 99, 102, 107, 108, 114, 120, 141, 155],
    latinCitations: [
      'Inofficiosum testamentum dicere hoc est, allegare quare exheredari vel praeteriri non debuerit (D. 5,2,3)'
    ],
    keyFigures: ['Marcelo', 'Centunviros']
  },
  {
    id: 116,
    title: 'Sucesión legítima',
    latinTitle: 'Successio ab intestato',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 122,
    summary: 'Sucesión que opera por disposición de la ley a falta de testamento válido. Tres etapas históricas: XII Tablas, bonorum possessio pretoria y Novelas de Justiniano.',
    content: [
      'Sucesión intestada que se abre cuando el causante muere sin testamento, o el otorgado deviene nulo o ningún heredero instituido llega a adquirir (§ 107).',
      'Evolución en tres regímenes sucesorios: 1. Ley de las XII Tablas (§ 37): llama primero a los sui heredes (§ 99), en su defecto al adgnatus proximus y en último término a los gentiles (§ 96); 2. Bonorum possessio pretoria sine tabulis (§ 81): introduce a los hijos emancipados y a la viuda (unde liberi, unde legitimi, unde cognati, unde vir et uxor); 3. Novelas 118 y 127 de Justiniano (§ 41): funda el orden exclusivamente en el parentesco cognaticio de sangre (descendientes, ascendientes y colaterales).'
    ],
    crossReferences: [37, 41, 79, 81, 94, 96, 99, 104, 107, 108, 117, 120],
    latinCitations: [
      'Si intestato moritur, cui suus heres non escit, adgnatus proximus familiam habeto (Tab. V, 4)'
    ],
    keyFigures: ['Justiniano']
  },
  {
    id: 117,
    title: 'Sucesión mortis causa',
    latinTitle: 'Successio mortis causa',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 124,
    summary: 'Fenómeno por el cual el heredero subentra en la posición jurídica global del difunto. Incompatibilidad clásica entre sucesión testada e intestada.',
    content: [
      'Subrogación del sucesor en el conjunto de relaciones jurídicas transmisibles de una persona fallecida (§ 105) (successio in locum et in ius).',
      'Principio clásico vertebral: «Nemo pro parte testatus, pro parte intestatus decedere potest» (nadie puede morir en parte testado y en parte intestado; IJ. 2,14,5), garantizando la integridad unitaria del título hereditario universal (§ 97).'
    ],
    crossReferences: [20, 79, 94, 97, 99, 104, 105, 107, 114, 116, 120, 149],
    latinCitations: [
      'Una eademque persona non potest mori partim testata et partim intestata (IJ. 2,14,5)'
    ],
    keyFigures: ['Gayo', 'Justiniano']
  },
  {
    id: 118,
    title: 'Sustitución hereditaria',
    latinTitle: 'Substitutio hereditaria',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 125,
    summary: 'Nombramiento de un heredero subsidiario o condicional para el supuesto de que el primer instituido no llegue a serlo (vulgar) o muera impúber (pupilar).',
    content: [
      'Institución subordinada prevista por el testador en su testamento (§ 120) para prevenir la vacancia de la institución y evitar la apertura de la sucesión intestada.',
      'Dos figuras capitales: 1. Sustitución vulgar: llamamiento de un sustituto en segundo grado por si el instituido no quiere o no puede heredar («Titius heres esto: si Titius heres non erit, Maevius heres esto»); 2. Sustitución pupilar: el pater familias instituye un heredero para su hijo impúber sometido a patria potestad (§ 108), por si éste fallece antes de alcanzar la pubertad (§ 122).'
    ],
    crossReferences: [23, 99, 100, 108, 116, 119, 120, 122],
    latinCitations: [
      'Primo itaque gradu scriptus heres hereditatem cernendo fit heres, et substitutus excluditur (Gai. 2,176)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 119,
    title: 'Testamentifactio',
    latinTitle: 'Testamentifactio activa et passiva',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 125,
    summary: 'Aptitud jurídica para otorgar testamento (activa) o para ser instituido heredero, legatario o tutor testamentario (pasiva).',
    content: [
      'Aptitud legal exigida en el ámbito testamentario (§ 120). Requiere capacidad jurídica (§ 83) y de obrar (§ 82).',
      'Testamentifactio activa: poder otorgar testamento válido. Exigía ser ciudadano libre y paterfamilias sui iuris al otorgar el acto y al fallecer. Testamentifactio pasiva: capacidad para recibir bienes por testamento como heredero (§ 99) o legatario (§ 102).'
    ],
    crossReferences: [20, 21, 60, 82, 83, 92, 93, 99, 100, 102, 105, 108, 109, 110, 111, 120, 122, 123],
    latinCitations: [
      'Si quaeramus, an valeat testamentum... inprimis advertere debemus an is qui id fecerit habuerit testamenti factionem (Gai. 2,114)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 120,
    title: 'Testamento',
    latinTitle: 'Testamentum',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 127,
    summary: 'Negocio jurídico unilateral, personalísimo, solemne y esencialmente revocable mediante el cual una persona dispone de su patrimonio para después de su muerte.',
    content: [
      'El acto más importante del Derecho civil romano: declaración de voluntad solemne por la cual un ciudadano instituye heredero (§ 100) y regula el destino de sus bienes mortis causa (§ 117). Es personalísimo, unilateral y libremente revocable hasta el último instante de vida.',
      'Formas históricas: en época arcaica el testamentum calatis comitiis (§ 57) y el testamentum in procinctu (ante las tropas en pie de guerra); en época clásica el testamentum per aes et libram (§ 163) (mancipatorio); en época pretoria el testamento sellado por siete testigos que otorgaba la bonorum possessio secundum tabulas (§ 81); y en época justinianea el testamento tripartito.'
    ],
    crossReferences: [57, 81, 95, 99, 100, 102, 103, 107, 114, 115, 117, 119, 121, 163],
    latinCitations: [
      'Testamentum est voluntatis nostrae iusta sententia de eo, quod quis post mortem suam fieri velit (Modestino, D. 28,1,1)'
    ],
    keyFigures: ['Modestino', 'Ulpiano']
  },
  {
    id: 121,
    title: 'Testamento militar',
    latinTitle: 'Testamentum militis',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 129,
    summary: 'Régimen testamentario privilegiado y extraordinario concedido a los soldados en campaña, exento de las formalidades solemnes del ius civile.',
    content: [
      'Privilegio otorgado por Julio César, Augusto y emperadores sucesivos a los soldados en activo para facilitar el otorgamiento de su última voluntad libres de toda solemnidad rígida.',
      'Ulpiano (§ 15) recoge la máxima imperial: «Faciant igitur testamenta quo modo volent, faciant quo modo poterint sufficiatque ad bonorum suorum divisionem faciendam nuda voluntas testatoris» (hagan pues los testamentos como quieran y como puedan, y baste la simple voluntad desnuda del testador para dividir sus bienes; D. 29,1,1 pr.). Podía contener institución a término o bajo condición resolutoria.'
    ],
    crossReferences: [10, 15, 21, 99, 102, 107, 109, 115, 116, 120],
    latinCitations: [
      'Sufficiatque ad bonorum suorum divisionem faciendam nuda voluntas testatoris (D. 29,1,1 pr.)'
    ],
    keyFigures: ['Julio César', 'Ulpiano']
  },
  {
    id: 122,
    title: 'Tutela',
    latinTitle: 'Tutela impuberum',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 130,
    summary: 'Institución civil de protección de los impúberes sui iuris para completar su capacidad de obrar mediante la interpositio auctoritatis o negotiorum gestio.',
    content: [
      'Institución civil creada para proteger a las personas sui iuris (§ 83) que carecen de capacidad de obrar (§ 82) por no haber alcanzado la pubertad (14 años para varones y 12 para mujeres).',
      'Clases: testamentaria (nombrado por el pater en testamento § 120), legítima (a favor de los agnados más próximos § 94 según las XII Tablas § 37) o dativa (nombrado por el pretor por la lex Atilia § 74). El tutor actuaba mediante negotiorum gestio (si el pupilo era infante menor de siete años) o prestando su auctoritas interpositio (§ 2) en los negocios del pupilo mayor.'
    ],
    crossReferences: [2, 37, 74, 82, 83, 88, 94, 99, 108, 120, 123, 124, 126, 127, 129, 148],
    latinCitations: [
      'Tutela est vis ac potestas in capite libero ad tuendum eum... data ac permissa (Servio, D. 26,1,1 pr.)'
    ],
    keyFigures: ['Servio Sulpicio Rufo', 'Gayo']
  },
  {
    id: 123,
    title: 'Tutela de las mujeres',
    latinTitle: 'Tutela mulierum',
    bloqueId: 3,
    bloqueTitle: 'Derecho de Personas, Familia y Sucesiones',
    page: 132,
    summary: 'Tutela perpetua a la que estaban sometidas las mujeres sui iuris púberes en el Derecho clásico, cuyo tutor prestaba auctoritas para enajenaciones solemnes.',
    content: [
      'Institución del ius civile que sometía a las mujeres adultas sui iuris a la asistencia perpetua de un tutor (§ 122).',
      'A diferencia de la tutela de impúberes, la mujer conservaba la posesión y administración de su patrimonio, requiriendo la auctoritas tutoris (§ 2) únicamente para actos de extraordinaria gravedad: enajenación de res mancipi (§ 154, § 163), manumisiones (§ 103), testamentos (§ 120) o asunción de deudas por estipulación (§ 197). Cayó en decadencia progresiva hasta desaparecer en época postclásica y justinianea.'
    ],
    crossReferences: [2, 20, 21, 23, 82, 84, 103, 104, 120, 122, 154, 163, 197],
    latinCitations: [
      'Feminas vero perfectae aetatis in tutela esse fera nulla pretiosa ratio suasisse videtur (Gai. 1,190)'
    ],
    keyFigures: ['Gayo', 'Augusto']
  }
];
