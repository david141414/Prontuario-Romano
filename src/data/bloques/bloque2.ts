import { Paragrafo } from '../prontuarioTypes';

export const BLOQUE_2_PARAGRAFOS: Paragrafo[] = [
  {
    id: 55,
    title: 'Asamblea de la plebe',
    latinTitle: 'Concilia plebis tributa',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 53,
    summary: 'Asamblea exclusiva de los plebeyos presidida por los tribunos de la plebe, donde se votaban los plebiscitos y se elegían ediles y tribunos.',
    content: [
      'La primera época de la República (§ 61) está marcada por la diferenciación social y jurídica entre patricios y plebeyos. Los plebeyos lograron estructurarse en una comunidad política autónoma con sus propios dioses, magistrados y su propia asamblea por tribus (concilia plebis tributa).',
      'La asamblea de la plebe elegía a sus propios magistrados, los tribunos de la plebe, quienes tenían la función de defender los intereses colectivos mediante el derecho de veto (intercessio) frente a las decisiones de cualquier magistrado republicano (§ 72), así como un poder sancionador (coercitio). Además, el tribuno tenía la facultad de convocar a la asamblea y proponer la aprobación de plebiscitos (§ 43), equivalentes a las leyes ordinarias (§ 35) desde el año 286 a.C. por la lex Hortensia.'
    ],
    crossReferences: [35, 43, 60, 61, 72, 75],
    keyFigures: ['Tribunos de la plebe']
  },
  {
    id: 56,
    title: 'Asamblea por centurias',
    latinTitle: 'Comitia centuriata',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 54,
    summary: 'La máxima asamblea del populus romanus estructurada militar y timocráticamente en 193 centurias según el censo y riqueza de los ciudadanos.',
    content: [
      'A la asamblea por curias (§ 57) se sobrepuso la asamblea centuriada (comitiatus maximus). Su fundación se sitúa en plena época monárquica atribuida a las reformas del rey Servio Tulio (§ 77).',
      'Las centurias eran unidades militares y de voto en las que los ciudadanos (§ 60) se ordenaban según su capacidad económica fijada en el censo del censor (§ 59). Se componía de 193 centurias donde las clases acaudaladas ostentaban la mayoría absoluta.',
      'Correspondía a esta asamblea la elección de los magistrados mayores con imperium: cónsules (§ 63), pretores (§ 74) y censores (§ 59), la aprobación de las leyes comiciales más trascendentes (§ 35), las declaraciones solemnes de guerra (leges de bello dicendo) y la resolución de la apelación ciudadana contra la pena de muerte (provocatio ad populum).'
    ],
    crossReferences: [35, 57, 59, 60, 63, 72, 74, 77],
    keyFigures: ['Servio Tulio']
  },
  {
    id: 57,
    title: 'Asamblea por curias',
    latinTitle: 'Comitia curiata',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 55,
    summary: 'La más antigua asamblea romana de la época monárquica basada en las 30 curias de las tres tribus originarias (Ramnes, Tities, Luceres).',
    content: [
      'Asamblea originaria del periodo monárquico (§ 77) fundada según la tradición por Rómulo. Basaba su estructura en 30 curias (diez por cada una de las tres tribus primitivas: Ramnes, Tities y Luceres).',
      'En la época republicana (§ 61) quedó relegada a funciones sacras y de derecho de familia presididas por el pontifex maximus: presenciar la adrogatio (§ 79) (adopción de un pater familias por otro), el testamentum calatis comitiis (§ 120), y la proclamación de la lex curiata de imperio para confirmar el mando de los magistrados electos.'
    ],
    crossReferences: [61, 77, 79, 120],
    keyFigures: ['Rómulo']
  },
  {
    id: 58,
    title: 'Asamblea por tribus',
    latinTitle: 'Comitia tributa',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 56,
    summary: 'Asamblea comicial organizada según la circunscripción territorial de residencia en 35 tribus (4 urbanas y 31 rústicas), de carácter más democrático.',
    content: [
      'Último órgano asambleario en abrirse paso en la constitución republicana (§ 61), hacia el siglo III a.C. Agrupaba a todo el populus (§ 60) distribuido territorialmente en 35 tribus: 4 urbanas (donde se concentraba la masa de artesanos y libertos) y 31 rústicas (donde votaban los propietarios agrícolas).',
      'Elegía a los magistrados menores sin imperium (ediles curules § 68 y cuestores § 65) y se convirtió en el órgano legislativo ordinario más ágil para la aprobación de las leyes públicas (§ 35).'
    ],
    crossReferences: [20, 35, 55, 56, 60, 61, 65, 68, 71],
    keyFigures: ['Populus Romanus']
  },
  {
    id: 59,
    title: 'Censor',
    latinTitle: 'Censor',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 57,
    summary: 'Magistrado mayor no permanente elegido cada cinco años para confeccionar el censo, velar por las costumbres (cura morum) y regular contratos públicos.',
    content: [
      'Magistrado (§ 72) ordinario y no permanente cuya función principal era la elaboración del censo ciudadano cada cinco años durante un mandato máximo de dieciocho meses.',
      'Gozaba de inmensa dignidad moral. Ejerció la censura de costumbres (cura morum), pudiendo imponer la temida nota censoria que degradaba al ciudadano en sus derechos políticos. Realizaba la selección de los miembros del Senado (lectio senatus § 78) y licitaba los grandes contratos públicos, concesiones de tierras fiscales y obras de infraestructura.'
    ],
    crossReferences: [56, 58, 60, 63, 71, 72, 78],
    keyFigures: ['Catón el Censor']
  },
  {
    id: 60,
    title: 'Ciudadano',
    latinTitle: 'Civis Romanus',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 57,
    summary: 'Sujeto dotado del pleno estatuto de derechos políticos y civiles (civitas), conferido con carácter general por Caracalla en el 212 d.C.',
    content: [
      'Persona física libre dotada de subjetividad plena en el ordenamiento de Roma. Los derechos del civis comprendían el ámbito político (ius honorum § 72, ius suffragii §§ 56, 58, provocatio ad populum) y el ámbito privado (ius conubii § 104 para contraer matrimonio legítimo, ius commercii para celebrar negocios solemnes, ius actionis § 145 para litigar y testamentifactio § 119).',
      'La condición de ciudadano se adquiría por nacimiento de padres unidos en iustum matrimonium (§ 106), por manumisión solemne (§ 103) o por concesión legal. En el año 212 d.C., el emperador Antonino Caracalla otorgó la ciudadanía romana a todos los habitantes libres del orbe romano (Constitutio Antoniniana).'
    ],
    crossReferences: [56, 58, 61, 72, 83, 84, 92, 93, 101, 103, 104, 106, 119, 145],
    keyFigures: ['Caracalla']
  },
  {
    id: 61,
    title: 'Civitas',
    latinTitle: 'Civitas',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 59,
    summary: 'Comunidad ciudadana soberana organizada jurídicamente sobre el equilibrio armónico entre magistraturas, senado y comicios populares.',
    content: [
      'La civitas es la comunidad ciudadana organizada políticamente sobre la base de un conjunto de normas jurídicas que vincula a ciudadanos (§ 60). Nació como una ciudad-estado integrada inicialmente por familias (§ 94) y gentes (§ 96).',
      'En la República (510-27 a.C.) alcanzó su equilibrio supremo mediante la combinación de elementos descrita por Polibio: el elemento monárquico encarnado en los cónsules (§ 63), el elemento aristocrático en el Senado (§ 78) y el democrático en las asambleas del pueblo (§§ 56, 58).'
    ],
    crossReferences: [55, 56, 57, 58, 60, 63, 72, 75, 77, 78, 94, 96],
    keyFigures: ['Polibio', 'Cicerón']
  },
  {
    id: 62,
    title: 'Colonia',
    latinTitle: 'Colonia civium Romanorum / Latina',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 60,
    summary: 'Asentamiento fundado por Roma con fines defensivos y agrícolas, organizado a imagen institucional de la Urbe con senado local y magistrados.',
    content: [
      'Entidad local creada por Roma en territorio conquistado habitada por ciudadanos (§ 60) o aliados latinos (§ 101). Respondía a necesidades estratégicas militares y al asentamiento de veteranos mediante el reparto de tierras públicas (ager publicus).',
      'Su organización reproducía la de Roma: contaban con un senado municipal (decuriones) y magistrados locales dobles (duunviros), rigiéndose por una ley fundacional (lex coloniae).'
    ],
    crossReferences: [60, 73, 76, 101],
    keyFigures: ['Veteranos del ejército']
  },
  {
    id: 63,
    title: 'Cónsul',
    latinTitle: 'Consul',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 61,
    summary: 'Magistratura suprema ordinaria de la República romana: colegiada, anual y dotada de imperium maius civil y militar.',
    content: [
      'Creada tras la expulsión de la monarquía en 509 a.C. para reemplazar la figura unitaria del rey (§ 77). La pareja consular compartía el imperium summum (§ 71) domi et militiae: mando de las legiones, dirección de la política exterior, convocatoria y presidencia del Senado (§ 78) y de las asambleas centuriadas (§ 56).',
      'Sus miembros eran epónimos (daban nombre oficial al año). Las Leges Liciniae Sextiae de 367 a.C. abrieron definitivamente el consulado a los ciudadanos plebeyos.'
    ],
    crossReferences: [56, 59, 71, 72, 74, 77, 78],
    keyFigures: ['Lucio Junio Bruto', 'Licinio', 'Sextio']
  },
  {
    id: 64,
    title: 'Crimen',
    latinTitle: 'Crimen publicum',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 62,
    summary: 'Infracción grave que atenta contra la comunidad política o la seguridad pública, castigada con pena corporal o pública tras proceso comicial o judicial.',
    content: [
      'En el ámbito del Derecho sancionador romano, los crimina se distinguen con nitidez de los delicta privados (§ 193). Los crímenes eran ofensas directas contra la civitas o la divinidad (perduellio o alta traición, parricidium o muerte de un pater familias, peculatus, ambitus o corrupción electoral).',
      'Eran perseguidos de oficio por magistrados o mediante acción popular por jurados permanentes (quaestiones perpetuae) presididos por pretores (§ 74), dando paso en el Principado a la represión por cognitio extra ordinem (§ 145).'
    ],
    crossReferences: [60, 72, 74, 75, 127, 143, 145, 193],
    keyFigures: ['Sila']
  },
  {
    id: 65,
    title: 'Cuestor',
    latinTitle: 'Quaestor',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 64,
    summary: 'Primer peldaño del cursus honorum republicano: magistrado ordinario anual encargado de la administración financiera y custodia del erario.',
    content: [
      'Magistrado republicano (§ 72) menor sin imperium (§ 71), elegido anualmente por la asamblea por tribus (§ 58).',
      'Su función primordial era la custodia y gestión del erario público (§ 69) en el templo de Saturno, la llevanza de los libros de contabilidad estatal y el cobro de impuestos, así como la asistencia financiera y logística a los cónsules (§ 63) y gobernadores provinciales (§ 76).'
    ],
    crossReferences: [58, 63, 69, 71, 72, 76],
    keyFigures: ['Quaestores aerarii']
  },
  {
    id: 66,
    title: 'Dictador',
    latinTitle: 'Dictator / Magister populi',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 65,
    summary: 'Magistratura extraordinaria unitaria suprema nombrada ante graves peligros bélicos o sediciones internas, por un plazo no superior a seis meses.',
    content: [
      'Magistrado extraordinario y no permanente (§ 72) previsto en la constitución republicana (§ 61) para afrontar situaciones de extrema emergencia bélica o grave conmoción interior.',
      'Era designado directamente por uno de los cónsules (§ 63) tras consulta al senado (§ 78). Concentraba en su persona todo el poder militar y civil supremo, suspendiendo durante su mandato el veto de los tribunos (intercessio) y la apelación popular. Su nombramiento no podía exceder jamás los seis meses.'
    ],
    crossReferences: [61, 63, 71, 72, 78],
    keyFigures: ['Cincinato', 'Sila', 'Julio César']
  },
  {
    id: 67,
    title: 'Dominus',
    latinTitle: 'Dominus et deus',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 65,
    summary: 'Título que asume el emperador absoluto a partir de Diocleciano (284 d.C.), transformando a los ciudadanos en súbditos bajo una monarquía teocrática.',
    content: [
      'Título con el que se identifica al emperador absoluto en la etapa del Dominado (284-565 d.C.) iniciada con las reformas de Diocleciano tras la crisis del siglo III.',
      'A diferencia del princeps (§ 75), que formalmente pretendía ser el primer ciudadano de la República, el dominus actúa como señor y dueño patrimonial del Imperio, concentrando de forma indiscutida todo el poder militar, administrativo y legislativo exclusivo.'
    ],
    crossReferences: [10, 21, 61, 75, 169],
    keyFigures: ['Diocleciano', 'Constantino']
  },
  {
    id: 68,
    title: 'Edil',
    latinTitle: 'Aedilis',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 67,
    summary: 'Magistrado ordinario anual encargado de la policía urbana (cura urbis), abastecimiento (cura annonae), juegos (cura ludorum) y jurisdicción en mercados.',
    content: [
      'Magistratura (§ 72) dividida en ediles plebeyos y ediles curules (estos últimos creados en 367 a.C.). Elegidos por los comicios por tribus (§ 58).',
      'Tenían a su cargo la policía de la ciudad, vigilancia de edificios y vías públicas, orden en el mercado y supervisión de precios. En virtud de su ius edicendi promulgaban su propio edicto (§ 16), en cuya sede crearon las emblemáticas acciones edilicias de la compraventa (§ 186): la actio redhibitoria y la actio quanti minoris para responder por vicios ocultos de esclavos y animales.'
    ],
    crossReferences: [16, 58, 71, 72, 186],
    keyFigures: ['Aediles curules']
  },
  {
    id: 69,
    title: 'Erario',
    latinTitle: 'Aerarium populi Romani',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 67,
    summary: 'Tesoro del pueblo romano custodiado en el templo de Saturno, administrado por el Senado a través de los cuestores durante la República.',
    content: [
      'El tesoro público tradicional de Roma administrado por el Senado (§ 78) y custodiado por los cuestores (§ 65). Se nutría de los tributos de los ciudadanos, botines de guerra y rentas de tierras públicas (ager vectigalis § 76).',
      'Durante el Principado convivió con el fisco imperial (fiscus Caesaris § 75), que administraba los caudales de las provincias imperiales y que terminó absorbiendo al erario senatorial.'
    ],
    crossReferences: [65, 75, 76, 78, 110],
    keyFigures: ['Quaestores aerarii']
  },
  {
    id: 70,
    title: 'Foedus',
    latinTitle: 'Foedus',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 68,
    summary: 'Tratado solemne de derecho internacional concertado entre Roma y un pueblo extranjero para establecer paz, alianza bélica o subordinación.',
    content: [
      'Acuerdo de carácter público con una entidad política extranjera destinado a fijar alianzas y definir relaciones con la civitas.',
      'Se distinguía entre foedus aequum (pacto en condiciones de igualdad formal, como el primitivo foedus Cassianum con la Liga Latina en 493 a.C.) y foedus iniquum (tratado asimétrico donde la comunidad extranjera quedaba obligada a acatar y respetar la majestad del pueblo romano: maiestatem populi Romani comiter conservanto).'
    ],
    crossReferences: [35, 56, 61, 71],
    keyFigures: ['Feciales', 'Espurio Casio']
  },
  {
    id: 71,
    title: 'Imperium',
    latinTitle: 'Imperium',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 68,
    summary: 'Poder supremo originario de mando civil y militar atribuido a los magistrados superiores: cónsules, pretores y dictador.',
    content: [
      'Atribución de soberanía y mando supremo que caracteriza a los magistrados mayores (§ 72) de la República: cónsul (§ 63), pretor (§ 74) y dictador (§ 66). Supera la mera potestas administrativa de los magistrados menores.',
      'Manifestaciones del imperium: mando supremo de los ejércitos (imperium militiae), facultad de convocar al pueblo y al Senado (ius agendi cum populo, ius agendi cum patribus), derecho a publicar edictos con fuerza obligatoria (ius edicendi § 16), facultad jurisdiccional civil y criminal (iurisdictio § 140) y poder coercitivo directo (coercitio).'
    ],
    crossReferences: [16, 59, 63, 65, 66, 68, 72, 74, 140],
    keyFigures: ['Magistrados con imperium']
  },
  {
    id: 72,
    title: 'Magistrado',
    latinTitle: 'Magistratus',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 69,
    summary: 'Titular de un cargo público del Estado republicano. Características: colegialidad con derecho de veto (intercessio), anualidad, gratuidad y electividad.',
    content: [
      'Los magistrados conforman la estructura política del poder ejecutivo de la civitas republicana (§ 61) junto al Senado (§ 78) y las asambleas populares (§§ 56, 58).',
      'Principios rectores republicanos: Colegialidad (cada colega ostenta idéntico poder y puede paralizar los actos del otro mediante la intercessio); Temporalidad (mandato de un año, salvo censores § 59 y dictador § 66); Gratuidad (honor sin retribución monetaria, de donde proviene cursus honorum); y Responsabilidad jurídica al expirar el cargo.'
    ],
    crossReferences: [56, 58, 59, 61, 63, 65, 66, 68, 71, 74, 78],
    keyFigures: ['Cursus honorum']
  },
  {
    id: 73,
    title: 'Municipio',
    latinTitle: 'Municipium',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 69,
    summary: 'Comunidad urbana de origen itálico o provincial incorporada a Roma, que mantiene sus instituciones locales y cuyos habitantes adquieren la ciudadanía.',
    content: [
      'Entidad local anterior a la conquista romana a la que se aplica un régimen jurídico normalizado resultante de una ley municipal (lex municipalis), dotándola de instituciones análogas a las de Roma.',
      'Sus ciudadanos gozaban de la ciudadanía romana (§ 60) (municipium civium Romanorum). En España destacan célebres leyes municipales flavias de fines del siglo I d.C. como la Lex Irnitana, la Lex Salpensana y la Lex Malacitana.'
    ],
    crossReferences: [60, 62, 76, 110],
    keyFigures: ['Lex Irnitana']
  },
  {
    id: 74,
    title: 'Pretor',
    latinTitle: 'Praetor',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 70,
    summary: 'Magistrado dotado de imperium encargado de la administración de justicia civil (iurisdictio). Creador del Edicto y del Ius Honorarium.',
    content: [
      'Magistrado mayor (§ 72) investido de imperium (§ 71) instituido por las Leges Liciniae Sextiae de 367 a.C. como colega menor de los cónsules (§ 63) para encargarse específicamente de la iurisdictio (§ 140) en los litigios entre ciudadanos (§ 60).',
      'En 242 a.C. se creó el pretor peregrino para resolver controversias entre extranjeros o entre ciudadanos y extranjeros (§ 93). A través de la publicación anual de su Edicto (§ 16), el pretor concedía acciones ficticias, excepciones e interdictos, modelando la rama más avanzada del ordenamiento: el ius honorarium (§ 30).'
    ],
    crossReferences: [16, 20, 29, 30, 33, 60, 63, 71, 72, 93, 140, 144],
    keyFigures: ['Praetor urbanus', 'Praetor peregrinus', 'Salvio Juliano']
  },
  {
    id: 75,
    title: 'Princeps',
    latinTitle: 'Princeps / Principatus',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 71,
    summary: 'Régimen unipersonal fundado por Augusto en el 27 a.C. que superpuso su poder personal (imperium proconsulare maius y tribunicia potestas) a las instituciones republicanas.',
    content: [
      'Término que define la posición de poder unipersonal de Octavio Augusto (27 a.C.) y sus sucesores hasta la muerte de Alejandro Severo en 235 d.C., inaugurando el régimen del Principado.',
      'Jurídicamente, Augusto acumuló dos poderes clave sin ostentar una monarquía abierta: el imperium proconsulare maius et infinitum (mando militar supremo sobre todas las legiones y provincias imperiales § 76) y la potestas tribunicia vitalicia (que le otorgaba inviolabilidad sacrosanta, derecho de veto y potestad de proponer leyes y plebiscitos § 43). Su voluntad originó las constituciones imperiales (§ 10).'
    ],
    crossReferences: [2, 10, 43, 61, 67, 71, 76, 78, 145],
    latinCitations: [
      'Post id tempus auctoritate omnibus praestiti, potestatis autem nihilo amplius habui (Res Gestae 34)'
    ],
    keyFigures: ['Augusto', 'Tiberio', 'Alejandro Severo']
  },
  {
    id: 76,
    title: 'Provincia',
    latinTitle: 'Provincia',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 73,
    summary: 'Unidad administrativa del territorio dominado por Roma fuera de Italia, clasificada en el Principado en provincias senatoriales e imperiales.',
    content: [
      'Circunscripción territorial fuera de la península Itálica sometida al dominio político de Roma. Las primeras nacieron con la incorporación de Sicilia, Córcega y Cerdeña en el siglo III a.C.',
      'En el Principado (§ 75) se dividieron en: Provincias senatoriales (pacificadas, bajo gobierno de procónsules o propretores designados por el Senado § 78, cuyos ingresos iban al erario § 69) y Provincias imperiales (fronterizas con tropas, administradas directamente por legados del emperador —legati Augusti pro praetore— y procuradores que tributaban al fisco).'
    ],
    crossReferences: [26, 62, 69, 72, 73, 75, 78, 140],
    keyFigures: ['Augusto', 'Proconsules']
  },
  {
    id: 77,
    title: 'Rex',
    latinTitle: 'Rex',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 75,
    summary: 'Soberano supremo vitalicio de Roma en el periodo monárquico (753-509 a.C.): sacerdote supremo, caudillo militar y juez inapelable.',
    content: [
      'Figura de gobierno supremo en la etapa monárquica que va desde la fundación de Roma (753 a.C.) hasta la expulsión de Tarquino el Soberbio en 509 a.C. La tradición recuerda a reyes latino-sabinos (Rómulo, Numa Pompilio, Tulo Hostilio, Anco Marcio) y etruscos (Tarquino Prisco, Servio Tulio, Tarquino el Soberbio).',
      'Ostentaba el imperium supremo: mando del ejército, representación religiosa ante los dioses y dictado de las leges regiae conservadas en el ius Papirianum. Gobernaba asistido por el Senado (§ 78) y los comicios por curias (§ 57).'
    ],
    crossReferences: [56, 57, 61, 63, 78],
    keyFigures: ['Rómulo', 'Numa Pompilio', 'Servio Tulio', 'Tarquino']
  },
  {
    id: 78,
    title: 'Senado',
    latinTitle: 'Senatus',
    bloqueId: 2,
    bloqueTitle: 'Derecho Público',
    page: 76,
    summary: 'La institución más prestigiosa y permanente de Roma: asamblea de ancianos patricios y exmagistrados que dirigía la política exterior, finanzas y religión.',
    content: [
      'Órgano originario de ancianos (senes) que según la leyenda fue creado por Rómulo con 100 patres familiares (§ 94), alcanzando luego 300 y en la República tardía 600 y 900 miembros.',
      'En la República (§ 61) constituyó el eje indiscutido del Estado romano. Dirigía las finanzas públicas, la administración del erario (§ 69), las relaciones diplomáticas y la dirección de la guerra. Ratificaba las decisiones comiciales mediante la auctoritas patrum (§ 2) y en situaciones de peligro emitía el senatusconsultum ultimum autorizando a los cónsules a adoptar medidas extraordinarias para salvar la República.'
    ],
    crossReferences: [2, 35, 49, 56, 59, 61, 63, 69, 71, 75, 77, 94, 96],
    keyFigures: ['Patres conscripti']
  }
];
