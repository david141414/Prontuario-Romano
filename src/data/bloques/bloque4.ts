import { Paragrafo } from '../prontuarioTypes';

export const BLOQUE_4_PARAGRAFOS: Paragrafo[] = [
  {
    id: 124,
    title: 'Acción',
    latinTitle: 'Actio',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 135,
    summary: 'El medio procesal a través del cual el ciudadano reclama en juicio lo que le es debido. En Roma no existe un derecho subjetivo previo sin acción procesal que lo tutele.',
    content: [
      'Medio por el cual un ciudadano (§ 60) reclama en juicio ante los tribunales aquello a lo que cree tener derecho, superando la autotutela privada violenta.',
      'Celso (§ 34) formuló su definición inmortal: «Nihil aliud est actio quam ius quod sibi debeatur, iudicio persequendi» (D. 44,7,51: la acción no es sino el derecho a perseguir en juicio lo que se le debe a uno). En el sistema del ordo iudiciorum privatorum (§ 145), el Derecho romano es predominantemente un sistema de acciones concretas tipificadas en el edicto del pretor (§ 16, § 74).'
    ],
    crossReferences: [13, 16, 34, 60, 61, 74, 75, 128, 134, 140, 141, 143, 144, 145, 148],
    latinCitations: [
      'Nihil aliud est actio quam ius quod sibi debeatur, iudicio persequendi (Celso, D. 44,7,51)'
    ],
    keyFigures: ['Celso', 'Álvaro d\'Ors']
  },
  {
    id: 125,
    title: 'Acción civil y acción pretoria',
    latinTitle: 'Actiones civiles et honorariae',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 136,
    summary: 'Bipartición fundamental: acciones nacidas del ius civile y acciones creadas por el pretor (in factum, ficticias, útiles y con transposición de personas).',
    content: [
      'En el procedimiento formulario (§ 144), las acciones civiles son las que protegen derechos preexistentes amparados por el ius civile (§ 27) y no estaban sometidas a plazo extintivo (perpetuas).',
      'Las acciones pretorias u honorarias (§ 30) son creadas por el magistrado (§ 74) en su edicto (§ 16) para tutelar situaciones nuevas no contempladas por el derecho civil. Clases: 1. Actiones in factum (fundadas en un hecho concreto no tipificado); 2. Actiones ficticiae (el pretor ordena al juez fingir que se cumple un requisito civil, como la actio Publiciana § 170); 3. Actiones utiles (aplicación extensiva por analogía); 4. Acciones con transposición de personas (la condemnatio recae sobre un sujeto distinto del señalado en la intentio, base de las acciones adyecticias § 147).'
    ],
    crossReferences: [16, 23, 27, 30, 74, 124, 126, 137, 138, 140, 144, 147, 170],
    latinCitations: [
      'Actiones, quas in usu veteres habuerunt, legis actiones appellabantur (Gai. 4,11)'
    ],
    keyFigures: ['Pretor', 'Gayo']
  },
  {
    id: 126,
    title: 'Acción de buena fe y acción de derecho estricto',
    latinTitle: 'Actiones bonae fidei et stricti iuris',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 138,
    summary: 'Acciones donde el juez valora según la equidad negocial (ex fide bona) frente a aquellas donde debe atenerse rígidamente a los términos de la fórmula.',
    content: [
      'En las acciones de derecho estricto (stricti iuris, como las nacidas de la stipulatio § 197 o de la condictio § 187), el juez (§ 141) debe atenerse mecánicamente a lo pactado sin valorar circunstancias externas salvo que se haya insertado expresamente una exceptio doli (§ 137).',
      'En las acciones de buena fe (iudicia bonae fidei, propias de contratos consensuales como la compraventa § 186 o arrendamiento § 183), la fórmula incluye la cláusula «ex fide bona», autorizando al juez a ponderar la equidad, compensar deudas recíprocas, tomar en cuenta el dolo o la intimidación y modular con flexibilidad la indemnización debida.'
    ],
    crossReferences: [20, 29, 133, 137, 138, 141, 144, 148, 183, 186, 187, 188, 197],
    latinCitations: [
      'In emptis enim venditis potius id, quod actum, quam id, quod dictum sit (D. 18,1,6,1)'
    ],
    keyFigures: ['Pomponio', 'Cicerón']
  },
  {
    id: 127,
    title: 'Acción penal y acción reipersecutoria',
    latinTitle: 'Actiones poenales et reipersecutoriae',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 139,
    summary: 'Acción nacida de delito privado orientada a imponer una sanción pecuniaria punitiva (pena) frente a la destinada a recuperar la cosa o su valor económico.',
    content: [
      'La acción penal procede de la comisión de un delito privado (§ 193; hurto § 205, lesiones § 207, daño § 192). Su condena implica un recargo punitivo pecuniario (duplo, triple, cuádruplo del perjuicio) y presenta rasgos especiales: es acumulable a la acción reipersecutoria, intransmisible pasivamente a los herederos del ofensor (§ 99) y sujeta a entrega noxal si el delito fue cometido por un hijo o esclavo (§ 92, § 108).',
      'La acción reipersecutoria persigue únicamente la reintegración de la res o el resarcimiento patrimonial estricto (como la acción reivindicatoria § 152 o la actio commodati § 184).'
    ],
    crossReferences: [92, 99, 108, 124, 128, 145, 148, 152, 169, 184, 192, 193, 205, 207],
    latinCitations: [
      'Nec manifesti furti poena per legem XII Tabularum dupli inrogatur (Gai. 3,190)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 128,
    title: 'Acción personal y acción real',
    latinTitle: 'Actio in personam et actio in rem',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 139,
    summary: 'La suprema división procesal: la acción personal reclama una obligación a un deudor determinado; la acción real afirma un derecho absoluto sobre una cosa (erga omnes).',
    content: [
      'Summa divisio de las acciones. Gayo la formula con absoluta nitidez: «In personam actio est, qua agimus, quotiens cum aliquo, qui nobis vel ex contractu vel ex delicto obligatus est, intendimus dare facere praestare oportere» (Gai. 4,2: la acción es personal cuando litigamos contra alguien que está obligado con nosotros por un contrato o delito).',
      'La acción real (actio in rem o vindicatio) se dirige directamente contra una cosa física (§ 154) y se puede ejercitar contra cualquiera que perturbe o retenga indebidamente el derecho real (§ 162), como la propiedad (§ 169) o el usufructo (§ 177).'
    ],
    crossReferences: [23, 124, 125, 134, 138, 152, 154, 162, 169, 171, 177, 180, 214],
    latinCitations: [
      'In personam actio est, qua agimus cum eo, qui nobis ex contractu vel ex delicto obligatus est (Gai. 4,2)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 129,
    title: 'Acción popular',
    latinTitle: 'Actio popularis',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 140,
    summary: 'Acción procesal pretoria que cualquier ciudadano de la comunidad (quivis ex populo) está legitimado para interponer en defensa del interés colectivo.',
    content: [
      'Acción pretoriana (§ 125) que no se restringe a un particular lesionado directamente, sino que se ofrece públicamente a cualquier miembro de la civitas (§ 60) para salvaguardar intereses comunitarios.',
      'Ejemplos célebres: tutela de la integridad de los edictos del pretor (actio de albo corrupto § 16), respeto a los enterramientos (actio de sepulchro violato), prevención de riesgos urbanos (actio de positis vel suspensis, por cosas colgadas peligrosamente) o por líquidos arrojados a la calle (actio de effusis vel deiectis). La condena pecuniaria se pagaba al ciudadano demandante.'
    ],
    crossReferences: [16, 60, 74, 122, 125, 127, 134, 147],
    latinCitations: [
      'Sed si ex eadem causa saepius agatur, quum idem factum sit, exceptio rei iudicatae opponitur (D. 47,23,3 pr.)'
    ],
    keyFigures: ['Ulpiano', 'Pretor']
  },
  {
    id: 130,
    title: 'Actos más de imperio que de jurisdicción',
    latinTitle: 'Magis imperii quam iurisdictionis',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 141,
    summary: 'Medidas extraordinarias adoptadas por el pretor en virtud de su imperium para tutelar situaciones urgentes: interdictos, estipulaciones pretorias, embargos y restituciones in integrum.',
    content: [
      'Serie de recursos expeditivos a disposición del pretor (§ 74) fundados directamente en su imperium (§ 71) más que en su iurisdictio ordinaria, para prevenir conflictos, evitar perjuicios irreparables o restaurar situaciones de justicia material evidente.',
      'Cuatro expedientes fundamentales: 1. Interdicta (§ 166: órdenes sumarias de prohibir, restituir o exhibir); 2. Stipulationes praetoriae (cauciones obligatorias impuestas a una parte § 197); 3. Missiones in possessionem (autorizaciones para embargar bienes o patrimonios ajenos § 148); 4. Restitutio in integrum (resolución por la que el pretor declara nulo un acto válidamente celebrado en el ius civile anulando sus efectos lesivos por dolo, violencia, ausencia o minoría de edad § 88).'
    ],
    crossReferences: [16, 27, 71, 72, 74, 80, 88, 124, 125, 137, 141, 147, 148, 166, 169, 177, 197],
    latinCitations: [
      'Ea, quae magis imperii sunt, quam iurisdictionis, magistratus municipalis facere non potest (D. 50,26,1 pr.)'
    ],
    keyFigures: ['Paulo', 'Pretor']
  },
  {
    id: 131,
    title: 'Advocatus',
    latinTitle: 'Advocatus / Patronus',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 144,
    summary: 'Orador y perito forense que acompaña, aconseja y defiende a las partes en la fase judicial del proceso civil (apud iudicem) o penal.',
    content: [
      'En puridad, el abogado en Roma era un orador elocuente que acompañaba a los litigantes en la fase apud iudicem ante el juez (§ 141) para convencerle con alegatos orales y presentación de pruebas (§ 146). Se distinguía del jurisconsulto (§ 33), quien se dedicaba a dictaminar científicamente la solución en derecho.',
      'En la República su actividad era un officium desinteresado y gratuito, prohibiendo la Lex Cincia (204 a.C.) el cobro de honorarios. En el Principado se autorizó la retribución con límites máximos procesales.'
    ],
    crossReferences: [33, 64, 74, 141, 145, 146, 148, 149],
    latinCitations: [
      'Postulare autem est desiderium suum, vel amici sui in iure apud eum, qui iurisdictioni praeest, exponere (D. 3,1,1,2)'
    ],
    keyFigures: ['Cicerón', 'Ulpiano']
  },
  {
    id: 132,
    title: 'Apelación',
    latinTitle: 'Appellatio',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 144,
    summary: 'Recurso impugnatorio para elevar una sentencia judicial considerada injusta ante un magistrado o juez de superior jerarquía en la cognitio extra ordinem.',
    content: [
      'Sometimiento de una sentencia judicial (§ 148) válida ante un tribunal jerárquicamente superior para revocarla o enmendarla.',
      'En el ordo iudiciorum privatorum (§ 145) la sentencia del juez privado no era apelable por carecer de estructura jerárquica. La apelación nació y se consolidó plenamente en la cognitio extra ordinem (§ 145) del Principado (§ 75), elevándose las apelaciones desde los gobernadores hasta el prefecto del pretorio y en última instancia ante el emperador (princeps).'
    ],
    crossReferences: [75, 141, 142, 144, 145, 146, 148],
    latinCitations: [
      'Appellandi usus quam sit frequens, quamque necessarius, nemo est qui nesciat (D. 49,1,1)'
    ],
    keyFigures: ['Ulpiano', 'Emperador']
  },
  {
    id: 133,
    title: 'Arbitraje',
    latinTitle: 'Arbitrium / Compromissum',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 146,
    summary: 'Resolución privada y convencional de controversias patrimoniales encomendada voluntariamente a un tercero (árbitro) al margen del cauce judicial ordinario.',
    content: [
      'Mecanismo de resolución extrajudicial de conflictos por el que las partes acuerdan mediante compromiso (compromissum) someter su controversia a la decisión vinculante de un árbitro privado imparcial.',
      'El árbitro asumía el encargo mediante el pacto de receptum arbitrii, ejecutable coactivamente por el pretor (§ 74) con multas si se negaba a resolver. Para garantizar el cumplimiento del laudo arbitral, las partes solían cruzarse estipulaciones penales de dinero (§ 197, § 198).'
    ],
    crossReferences: [21, 74, 126, 138, 140, 144, 145, 148, 197, 198],
    latinCitations: [
      'Compromissum ad similitudinem iudiciorum redigitur, et ad finiendas lites pertinet (D. 4,8,1)'
    ],
    keyFigures: ['Paulo']
  },
  {
    id: 134,
    title: 'Capacidad y legitimación procesal',
    latinTitle: 'Legitimatio ad causam',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 147,
    summary: 'Aptitud general para comparecer en juicio (capacidad procesal) e idoneidad jurídica concreta de actor y demandado en una relación litigiosa (legitimación).',
    content: [
      'Cualidades subjetivas exigidas en el litigio: la capacidad procesal es la aptitud general para estar válidamente en juicio (reservada a ciudadanos sui iuris § 83 con capacidad de obrar § 82, asistidos por tutores o curadores si son incapaces § 122).',
      'La legitimación procesal (legitimatio ad causam) es la vinculación directa de un sujeto con el litigio concreto: activa (para interponer la demanda, atribuida al titular del crédito o derecho real vulnerado) y pasiva (recae en el obligado o en el perturbador de la posesión § 165).'
    ],
    crossReferences: [60, 69, 74, 82, 83, 86, 88, 92, 93, 108, 110, 122, 124, 127, 128, 129, 135, 144, 145, 165],
    latinCitations: [
      'Item civitas Romana peregrino fingitur, si eo nomine agat aut cum eo agatur (Gai. 4,37)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 135,
    title: 'Citación',
    latinTitle: 'In ius vocatio / Litis denuntiatio',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 148,
    summary: 'Llamamiento formal del demandante al demandado para comparecer ante el magistrado en la fase in iure. Evolución desde la intimación privada al libelo oficial.',
    content: [
      'Primer acto formal que convoca al demandado ante el magistrado (§ 140) para iniciar el juicio.',
      'En las acciones de la ley (§ 143) y el procedimiento formulario (§ 144) era un acto privado directo realizado por el demandante (in ius vocatio: «Si in ius vocat, ito», XII Tablas § 37), asegurada por promesas de comparecencia (vadimonium § 197). En la cognitio extra ordinem (§ 145) se convirtió en acto oficial mediante la litis denuntiatio y culminó en la época justinianea con el libellus conventionis.'
    ],
    crossReferences: [21, 37, 74, 126, 134, 136, 139, 140, 143, 144, 145, 197],
    latinCitations: [
      'Si in ius vocat, ito. Ni it, antestamino: igitur em capito (Tab. I, 1)'
    ],
    keyFigures: ['Pretor', 'Justiniano']
  },
  {
    id: 136,
    title: 'Confesión y desistimiento',
    latinTitle: 'Confessio in iure',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 150,
    summary: 'Allanamiento y reconocimiento del demandado ante el magistrado en la fase in iure, que pone fin inmediato al litigio equiparándose a una sentencia firme.',
    content: [
      'Acto por el cual el demandado reconoce ante el pretor (§ 74) en la fase in iure la veracidad y justicia de la pretensión del actor.',
      'Efectos inmediatos: el proceso concluye sin necesidad de nombrar juez ni dictar sentencia (§ 148), equiparándose la confesión a una condena formal irrevocable: «Confessus pro iudicato est, qui quodammodo sua sententia damnatur» (D. 42,2,1: el que confiesa se tiene por juzgado, pues se condena en cierto modo a sí mismo), abriendo paso a la acción ejecutiva (§ 149).'
    ],
    crossReferences: [74, 138, 140, 141, 142, 144, 145, 148, 149, 161, 187, 190, 197],
    latinCitations: [
      'Confessus pro iudicato est, qui quodammodo sua sententia damnatur (D. 42,2,1)'
    ],
    keyFigures: ['Paulo', 'Pretor']
  },
  {
    id: 137,
    title: 'Exceptio',
    latinTitle: 'Exceptio',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 151,
    summary: 'Cláusula redactada en la fórmula procesal a instancia del demandado que neutraliza o paraliza la acción del actor, alegando un hecho extintivo o impeditivo.',
    content: [
      'Medio primordial de defensa técnica del demandado (§ 134) en el procedimiento formulario (§ 144). Sin negar formalmente la pretensión civil del actor, introduce una circunstancia fáctica o de equidad que la destruye.',
      'Gayo (§ 23) describe su origen pretorio para corregir la estricta rigidez civil. Clasificación: 1. Perentorias o perpetuas (destruyen la acción para siempre, como la exceptio doli § 196, exceptio metus § 206, exceptio pacti de non petendo o exceptio rei iudicatae § 148); 2. Dilatorias o temporales (posponen la acción en el tiempo, como el pacto de no reclamar durante un año).'
    ],
    crossReferences: [16, 20, 23, 27, 30, 74, 124, 126, 130, 134, 138, 141, 144, 146, 148, 196, 206, 221],
    latinCitations: [
      'Comparatae sunt autem exceptiones defendendorum eorum gratia, cum quibus agitur (Gai. 4,116)'
    ],
    keyFigures: ['Gayo', 'Papiniano']
  },
  {
    id: 138,
    title: 'Fórmula',
    latinTitle: 'Formula',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 153,
    summary: 'Documento procesal escrito breve y técnico redactado por el pretor y las partes en la fase in iure que fija los términos del litigio y da instrucciones al juez.',
    content: [
      'Escrito técnico emanado del pretor (§ 74) que condensa el objeto del litigio fijado en la litis contestatio (§ 142) y confiere al juez privado (§ 141) la orden imperativa de condenar o absolver (iussum iudicandi).',
      'Partes ordinarias: 1. Nombramiento de juez («Titius iudex esto»); 2. Demonstratio (causa o hecho de la reclamación); 3. Intentio (pretensión jurídica del actor); 4. Condemnatio (facultad judicial de condenar a una suma pecuniaria o absolver); 5. Adiudicatio (en juicios divisorios de herencia o copropiedad § 153). Partes extraordinarias: Exceptio (§ 137) y Praescriptio.'
    ],
    crossReferences: [16, 23, 74, 126, 137, 141, 142, 144, 147, 148, 153, 162],
    latinCitations: [
      'Intentio est ea pars formulae, qua actor desiderium suum concludit (Gai. 4,41)',
      'Condemnatio est ea pars formulae, qua iudici condemnandi absolvendive potestas permittitur (Gai. 4,43)'
    ],
    keyFigures: ['Gayo', 'Pretor']
  },
  {
    id: 139,
    title: 'Indefensio',
    latinTitle: 'Indefensio',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 154,
    summary: 'Conducta pasiva o rebelde del demandado en la fase in iure que se niega a colaborar en la fijación de la fórmula o a prestar cauciones procesales.',
    content: [
      'Situación producida cuando el demandado comparece ante el pretor pero se niega a defenderse, a contestar la demanda o a prestar las cauciones legalmente exigidas (§ 135).',
      'Dado que el proceso formulario requería la colaboración bilateral de ambas partes para trabar la litis contestatio (§ 142), el pretor reprimía la indefensio con medidas enérgicas directas: en acciones reales concedía al actor la posesión de la cosa litigiosa (§ 165); en acciones personales decretaba el embargo universal de los bienes del demandado (missio in possessionem § 130) y su posterior subasta en venta forzosa (bonorum venditio § 149).'
    ],
    crossReferences: [15, 74, 130, 135, 141, 142, 145, 147, 148, 149, 165],
    latinCitations: [
      'Invitus nemo rem cogitur defendere (Ulpiano, D. 50,17,156)'
    ],
    keyFigures: ['Ulpiano', 'Pretor']
  },
  {
    id: 140,
    title: 'Iurisdictio',
    latinTitle: 'Iurisdictio',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 156,
    summary: 'Potestad pública soberana emanada del imperium atribuida a los magistrados (pretores) para encauzar y dirigir el proceso civil (do, dico, addico).',
    content: [
      'Atributo de soberanía pública derivado del imperium (§ 71) conferido a los magistrados jurisdiccionales (pretores § 74, ediles § 68, procónsules § 76) para tutelar los litigios privados.',
      'Se resume en los famosos tres verbos solemnes (tria verba solemnia): Do (dare actionem, conceder acción o juez), Dico (ius dicere, declarar el derecho aplicable en el edicto § 16) y Addico (addicere, atribuir la propiedad o posesión al demandante o dar eficacia a la confesión § 136, § 161).'
    ],
    crossReferences: [16, 61, 63, 68, 71, 74, 75, 76, 93, 124, 136, 138, 141, 144, 145, 146, 148, 161],
    latinCitations: [
      'Contrarii horum vocantur dies nefasti, per quos dies nefas fari praetorem "do", "dico", "addico" (Varrón, De lingua latina 6,30)'
    ],
    keyFigures: ['Varrón', 'Pretor']
  },
  {
    id: 141,
    title: 'Juez',
    latinTitle: 'Iudex privatus',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 157,
    summary: 'Ciudadano particular elegido por acuerdo de las partes de la lista oficial (album iudicum) para valorar las pruebas y dictar sentencia en la fase apud iudicem.',
    content: [
      'En el ordo iudiciorum privatorum (§ 145), el juez no era un funcionario burocrático del Estado, sino un ciudadano particular respetable (iudex privatus § 60) designado por convenio de los litigantes y refrendado por el pretor.',
      'Su encargo (officium iudicis) consistía en examinar las alegaciones y pruebas de los abogados (§ 131, § 146) en la fase apud iudicem y dictar sentencia imparcial ajustada a la fórmula (§ 138). Si incurría en prevaricación o negligencia manifiesta, cometía el delito cuasidelictual de iudex qui litem suam fecit (hacer suyo el litigio § 127, § 193).'
    ],
    crossReferences: [60, 72, 74, 75, 127, 131, 132, 134, 138, 140, 142, 144, 145, 146, 148, 193],
    latinCitations: [
      'Qui autem non habet excusationem, etiam invitus iudicare cogitur (D. 50,13,2)'
    ],
    keyFigures: ['Ulpiano', 'Iudex privatus']
  },
  {
    id: 142,
    title: 'Litis contestatio',
    latinTitle: 'Litis contestatio',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 159,
    summary: 'Punto neurálgico del proceso formulario: acuerdo solemne que clausura la fase in iure ante el pretor, fijando definitivamente el litigio con efecto novatorio y consuntivo.',
    content: [
      'Trámite procesal decisivo que sella el final de la fase in iure ante el magistrado (§ 140) y abre la fase apud iudicem ante el juez (§ 141). Las partes aceptan los términos exactos de la fórmula redactada (§ 138).',
      'Tres efectos capitales: 1. Efecto fijatorio (la cuestión litigiosa queda fijada de forma inmutable: res in iudicium deducta); 2. Efecto extintivo o consuntivo (la acción originaria se consume irrevocablemente: «non bis in idem», no pudiendo ejercitarse de nuevo contra el demandado § 124); 3. Efecto novatorio (la primitiva obligación entre acreedor y deudor se transforma en el deber procesal de cumplir la sentencia judicial condicente § 148).'
    ],
    crossReferences: [74, 99, 115, 124, 134, 138, 139, 141, 143, 144, 145, 148],
    latinCitations: [
      'Res in iudicium deducta (Gai. 3,180)',
      'Ante litem contestatam dare debitorem oportere, post litem contestatam condemnari oportere (Gai. 3,180)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 143,
    title: 'Procedimiento de las acciones de la ley',
    latinTitle: 'Legis actiones',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 160,
    summary: 'El más antiguo sistema procesal romano (siglos V a II a.C.): oral, formalista y rígido, estructurado en cinco esquemas procedimentales rituarios.',
    content: [
      'Sistema de enjuiciamiento de la época arcaica (§ 19) recogido en las XII Tablas (§ 37), reservado privativamente a los ciudadanos romanos (§ 60). Se distinguía por un rígido ritualismo verbal donde el menor error formal provocaba la pérdida automática del pleito.',
      'Cinco modos de litigar: tres declarativas (legis actio sacramento —in rem e in personam con apuesta sacramental pecuniaria—, legis actio per iudicis arbitrive postulationem para divisiones de cosas comunes § 153 y créditos de estipulación, y legis actio per condictionem para sumas ciertas de dinero § 187) y dos ejecutivas (legis actio per manus iniectionem sobre la persona del deudor insolvente § 149 y per pignoris capionem).'
    ],
    crossReferences: [19, 23, 27, 37, 60, 69, 124, 125, 134, 135, 140, 141, 142, 144, 145, 148, 149, 153, 187, 197],
    latinCitations: [
      'Actiones, quas in usu veteres habuerunt, legis actiones appellabantur (Gai. 4,11)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 144,
    title: 'Procedimiento formulario',
    latinTitle: 'Agere per formulas',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 162,
    summary: 'Procedimiento civil paradigmático de la época clásica (c. 130 a.C. - 230 d.C.), caracterizado por la fórmula escrita y la bipartición procesal (in iure y apud iudicem).',
    content: [
      'Sistema procesal característico de la época clásica (§ 20) que sustituyó a las rígidas acciones de la ley (§ 143), introducido por la Lex Aebutia (c. 130 a.C.) y generalizado por las Leges Iuliae iudiciorum privatorum de Augusto (17 a.C.).',
      'Dos fases estructurales: 1. Fase in iure ante el pretor (§ 74), donde se encauza la controversia, se conceden excepciones y se redacta la fórmula escrita tipificada en el edicto (§ 16, § 138), sellándose en la litis contestatio (§ 142); 2. Fase apud iudicem ante el juez privado (§ 141), donde se practican las pruebas (§ 146), informan los abogados (§ 131) y se dicta sentencia pecuniaria inapelable (§ 148).'
    ],
    crossReferences: [16, 20, 23, 30, 33, 74, 124, 125, 126, 131, 137, 138, 140, 141, 142, 143, 145, 146, 147, 148, 149],
    keyFigures: ['Augusto', 'Pretor', 'Gayo']
  },
  {
    id: 145,
    title: 'Proceso civil',
    latinTitle: 'Ordo iudiciorum privatorum et cognitio extra ordinem',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 163,
    summary: 'Evolución histórica de la tutela jurisdiccional civil: ordo iudiciorum privatorum (acciones de ley y formulario) frente a la cognitio extra ordinem burocrática.',
    content: [
      'Conjunto de actos ordenados dirigidos a resolver litigios entre particulares mediante la aplicación de la tutela jurisdiccional del Estado (§ 140).',
      'Dos grandes modelos históricos: 1. El ordo iudiciorum privatorum (que engloba las legis actiones § 143 y el procedimiento formulario § 144): proceso bifásico con protagonismo del juez particular independiente (§ 141) y sentencia puramente pecuniaria; 2. La cognitio extra ordinem nacida en el Principado (§ 75) y dominante en el Dominado (§ 67): proceso unifásico tramitado íntegramente ante funcionarios públicos delegados del emperador, con condena in natura, costas procesales y recurso de apelación jerárquica (§ 132).'
    ],
    crossReferences: [20, 21, 64, 67, 75, 76, 124, 131, 132, 135, 138, 140, 141, 142, 143, 144, 146, 148],
    keyFigures: ['Augusto', 'Diocleciano']
  },
  {
    id: 146,
    title: 'Prueba',
    latinTitle: 'Probatio / Onus probandi',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 166,
    summary: 'Actividad destinada a convencer al juzgador de la certeza de los hechos alegados. Regla clásica: la carga de la prueba incumbe al que afirma, no al que niega.',
    content: [
      'Actividad probatoria ante el juez (§ 141) para acreditar los hechos constitutivos de la demanda o los impeditivos de la excepción (§ 137).',
      'Principio clásico vertebral: «Ei incumbit probatio qui dicit, non qui negat» (D. 22,3,2: la prueba incumbe a quien afirma, no al que niega). Medios de prueba: en época clásica prevaleció la prueba testifical (testes) valorada bajo libre convicción; en época postclásica y justinianea se impuso la prueba documental (instrumenta públicos) bajo el sistema de prueba tasada legal.'
    ],
    crossReferences: [105, 131, 137, 138, 141, 144, 145, 148],
    latinCitations: [
      'Ei incumbit probatio qui dicit, non qui negat (Paulo, D. 22,3,2)',
      'Actori incumbit probatio (D. 22,3,21)'
    ],
    keyFigures: ['Paulo', 'Marcelo']
  },
  {
    id: 147,
    title: 'Representación procesal',
    latinTitle: 'Cognitor et procurator',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 167,
    summary: 'Intervención de un tercero que actúa en juicio en nombre del actor o demandado (agere nomine alieno): cognitor solemne y procurator.',
    content: [
      'Facultad de actuar en nombre ajeno (agere nomine alieno) en el proceso civil formulado (§ 144). Se materializaba mediante la técnica de la transposición de personas en la fórmula (§ 138).',
      'Dos figuras: 1. Cognitor: representante nombrado formal y solemnemente con palabras sacramentales en presencia del adversario ante el pretor; consumía la acción del representado de forma directa; 2. Procurator: representante voluntario sin nombramiento solemne que debía prestar fianza de que su representado ratificaría lo actuado (cautio de rato § 130) si actuaba por el actor, o cautio iudicatum solvi si actuaba por el demandado.'
    ],
    crossReferences: [23, 74, 80, 92, 103, 122, 125, 130, 134, 138, 139, 142, 144, 148, 204, 208],
    latinCitations: [
      'Cognitor certis verbis in litem coram adversario substituitur (Gai. 4,83)'
    ],
    keyFigures: ['Gayo', 'Pretor']
  },
  {
    id: 148,
    title: 'Sentencia',
    latinTitle: 'Sententia',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 169,
    summary: 'Decisión formal emitida por el juez privado que pone término al litigio. En el procedimiento clásico es siempre pecuniaria y genera la res iudicata.',
    content: [
      'Dictamen resolutivo emitido por el juez (§ 141) que dirime la cuestión litigiosa sometida a su conocimiento con arreglo a los términos del iussum iudicandi fijados en la fórmula (§ 138).',
      'En el procedimiento formulario (§ 144) la condena debía ser siempre pecuniaria (omnis condemnatio pecuniaria est), tasada en una cantidad determinada de dinero, mitigada en las acciones reales mediante la cláusula arbitraria (§ 136). Produce efecto de cosa juzgada (res iudicata), haciendo oponible la exceptio rei iudicatae (§ 137) ante cualquier nuevo intento de replantear el mismo litigio.'
    ],
    crossReferences: [74, 126, 132, 136, 137, 138, 141, 142, 144, 145, 146, 149],
    latinCitations: [
      'Omnis condemnatio pecuniaria esse debet (Gai. 4,48)',
      'Res iudicata pro veritate accipitur (Ulpiano, D. 50,17,207)'
    ],
    keyFigures: ['Ulpiano', 'Paulo', 'Gayo']
  },
  {
    id: 149,
    title: 'Sentencia (ejecución)',
    latinTitle: 'Executio sententiae',
    bloqueId: 4,
    bloqueTitle: 'Derecho Procesal Civil',
    page: 170,
    summary: 'Mecanismos coactivos para forzar el cumplimiento de la condena: actio iudicati, embargo de bienes y ejecución patrimonial (bonorum venditio o distractio).',
    content: [
      'Vía procesal coactiva para hacer cumplir la condena dictada (§ 148) cuando el vencido no la abona voluntariamente en el plazo legal de treinta días. El acreedor ejercita la actio iudicati, que condena al doble si el deudor se resiste infundadamente (litis crescencia).',
      'Evolución: de la prisión física y sumisión personal arcaica (manus iniectio § 143) a la ejecución universal sobre el patrimonio creada por el pretor: bonorum venditio (§ 130; subasta global en favor de un bonorum emptor § 125, con tacha de infamia), dulcificada por la cessio bonorum voluntaria de Augusto y la distractio bonorum en venta de bienes singulares para personas de rango senatorial o incapaces (§ 82).'
    ],
    crossReferences: [21, 23, 30, 82, 99, 117, 125, 130, 134, 143, 144, 148, 155],
    latinCitations: [
      'Adversus infitiantes ex quibusdam causis dupli actio constituitur, velut si iudicati... (Gai. 4,171)'
    ],
    keyFigures: ['Augusto', 'Gayo']
  }
];
