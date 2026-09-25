import { Paragrafo } from '../prontuarioTypes';

export const BLOQUE_6_PARAGRAFOS: Paragrafo[] = [
  {
    id: 181,
    title: 'Acceptilatio',
    latinTitle: 'Acceptilatio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 221,
    summary: 'Modo formal y solemne de extinción de las obligaciones nacidas de stipulatio mediante una pregunta y respuesta simétrica contraria: «Habesne acceptum? Habeo».',
    content: [
      'Negocio solemne del ius civile que extingue ipso iure las obligaciones nacidas verborum (§ 197). Consiste en un acto verbal simétrico e inverso a la estipulación: el deudor pregunta al acreedor: «Quod ego tibi promisi, habesne acceptum?» (¿tienes por recibido lo que te prometí?) y el acreedor responde: «Habeo» (lo tengo por recibido; Gai. 3,169).',
      'Mediante la stipulatio aquiliana de Aquilio Galo (§ 1), se refundían previamente todas las deudas de cualquier origen en una sola estipulación novatoria para cancelarlas de golpe mediante una única acceptilatio.'
    ],
    crossReferences: [1, 20, 21, 27, 32, 191, 197, 200, 211, 214],
    latinCitations: [
      'Acceptilatio est veluti imaginaria solutio (Gai. 3,169)',
      'Quod ego tibi promisi, habesne acceptum? Habeo (Gai. 3,169)'
    ],
    keyFigures: ['Aquilio Galo', 'Gayo']
  },
  {
    id: 182,
    title: 'Arras',
    latinTitle: 'Arrhae',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 222,
    summary: 'Señal o suma de dinero entregada al concluir un contrato. En época clásica sirve de prueba del acuerdo (confirmatorias); en época postclásica adquiere función penitencial.',
    content: [
      'Entrega de una cantidad de dinero u objeto valioso (como un anillo) al concluir un contrato de compraventa (§ 186) o arrendamiento (§ 183).',
      'Gayo (§ 23) recalca que en época clásica (§ 20) tienen función estrictamente probatoria o confirmatoria (arrha confirmatoria): acreditan que el consentimiento contractual se ha perfeccionado válidamente. Por influencia helenística en época postclásica y justinianea (§ 21) se introdujeron las arras penitenciales (arrha poenitentialis): si el comprador desiste, pierde las arras entregadas; si desiste el vendedor, debe restituirlas dobladas.'
    ],
    crossReferences: [20, 21, 23, 183, 186, 187, 201, 214],
    latinCitations: [
      'Quod saepe arrhae nomine pro emptione datur, non eo pertinet, quasi sine arra conventio nihil proficiat (Gai. 3,139)'
    ],
    keyFigures: ['Gayo', 'Justiniano']
  },
  {
    id: 183,
    title: 'Arrendamiento',
    latinTitle: 'Locatio conductio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 223,
    summary: 'Contrato consensual bilateral perfecto y de buena fe en que una parte cede el uso de una cosa, presta servicios o realiza una obra a cambio de una merced (merces).',
    content: [
      'Contrato consensual (§ 188) del ius gentium (§ 29) amparado por dos acciones de buena fe (§ 126): la actio locati (a favor del arrendador o locator) y la actio conducti (a favor del arrendatario o conductor).',
      'Tres modalidades clásicas: 1. Locatio conductio rei (arrendamiento de cosa: el locator cede el uso temporal de un inmueble o mueble no consumible § 154 por un precio periódico); 2. Locatio conductio operarum (arrendamiento de servicios: un hombre libre arrienda su propia actividad laboral remunerada); 3. Locatio conductio operis (arrendamiento de obra: el conductor se compromete a entregar un resultado material concluido con materiales del locator, respondiendo por custodia § 220).'
    ],
    crossReferences: [20, 29, 32, 93, 126, 154, 162, 165, 166, 184, 186, 188, 208, 218, 220],
    latinCitations: [
      'Locatio et conductio proxima est emptioni et venditioni (Gai. 3,142)'
    ],
    keyFigures: ['Paulo', 'Gayo']
  },
  {
    id: 184,
    title: 'Comodato',
    latinTitle: 'Commodatum',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 225,
    summary: 'Préstamo de uso gratuito de una cosa mueble o inmueble no consumible con la obligación de devolver la misma cosa en el plazo convenido.',
    content: [
      'Contrato real (§ 203) y esencialmente gratuito por el cual el comodante entrega a un comodatario la tenencia material (§ 165) de una cosa no consumible (§ 154) para que la use conforme a lo acordado o a su naturaleza económica y la devuelva.',
      'Si mediase remuneración económica, se convertiría de inmediato en arrendamiento (§ 183). Dado que el comodatario obtiene la exclusiva ventaja económica del negocio, responde por dolo, por culpa leve e incluso por custodia objetiva (§ 220; hurto de la cosa § 205). Tutelado por la actio commodati directa y contraria.'
    ],
    crossReferences: [99, 125, 126, 137, 141, 154, 162, 165, 183, 187, 192, 196, 204, 205, 210, 214, 220],
    latinCitations: [
      'Commodatum plerumque solam utilitatem continet eius cui commodatur (Gai. 3,206)'
    ],
    keyFigures: ['Ulpiano', 'Gayo']
  },
  {
    id: 185,
    title: 'Compensación',
    latinTitle: 'Compensatio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 226,
    summary: 'Modo de extinguir deudas hasta el límite de la concurrencia entre dos personas que son recíprocamente acreedoras y deudoras la una de la otra.',
    content: [
      'Modo de extinción de las obligaciones (§ 200) que opera cuando dos sujetos son titulares recíprocos de créditos y deudas exigibles.',
      'En época clásica (§ 20) operó primero de pleno derecho en los juicios de buena fe (iudicia bonae fidei § 126), así como en las demandas de los banqueros (argentarii) con dedutio previa; en las acciones de derecho estricto se canalizó a través de la exceptio doli (§ 137, § 196). Marco Aurelio y finalmente Justiniano (§ 21) la generalizaron como causa extintiva ope exceptionis para toda clase de deudas líquidas y vencidas.'
    ],
    crossReferences: [10, 20, 21, 24, 126, 137, 141, 149, 196, 200, 218],
    latinCitations: [
      'Compensatio est debiti et crediti inter se contributio (Modestino, D. 16,2,1)'
    ],
    keyFigures: ['Modestino', 'Marco Aurelio']
  },
  {
    id: 186,
    title: 'Compraventa',
    latinTitle: 'Emptio venditio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 227,
    summary: 'El contrato consensual por excelencia de buena fe: cambio de una cosa (merx) por una suma de dinero cierto (pretium). Garantía por evicción y vicios ocultos.',
    content: [
      'Contrato consensual (§ 188), bilateral perfecto y de buena fe (§ 126) por el que el vendedor (venditor) se obliga a entregar al comprador (emptor) la pacífica posesión de una cosa (habere licere § 165) y a asegurar su libre disfrute, a cambio de que el comprador se obligue a transmitirle la propiedad civil de una suma determinada de dinero (§ 169) (pretium).',
      'No tiene efectos reales inmediatos: la propiedad sólo se transmite cuando a la compraventa se añade la entrega efectiva de la res por mancipatio (§ 163) o traditio (§ 175). Obligaciones del vendedor: responder por evicción (§ 152) y sanear los vicios ocultos de la cosa vendida mediante las acciones edilicias (§ 68) de los ediles curules (actio redhibitoria y quanti minoris).'
    ],
    crossReferences: [20, 21, 32, 68, 93, 126, 152, 154, 163, 165, 169, 170, 175, 182, 188, 217, 220],
    latinCitations: [
      'Emptio et venditio contrahitur, simul atque de pretio convenerit (Gai. 3,139)',
      'Periculum est emptoris (D. 18,6,8 pr.)'
    ],
    keyFigures: ['Paulo', 'Gayo']
  },
  {
    id: 187,
    title: 'Condictio',
    latinTitle: 'Condictio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 230,
    summary: 'Acción civil abstracta de derecho estricto y fórmula sin demonstratio para reclamar la restitución de dinero cierto o de una cosa retenida sin causa.',
    content: [
      'Acción personal formulada (§ 124, § 128) nacida en la República para reclamar una deuda de dinero cierto (actio certae creditae pecuniae) o cosas determinadas (condictio certae rei).',
      'Se caracteriza por su abstracción técnica: en la fórmula no se hace constar la causa del negocio. En época clásica (§ 20) se consagró como el remedio general por excelencia contra el enriquecimiento injusto sin causa: condictio indebiti (para recuperar lo pagado por error), condictio ob causam datorum (cuando el fin previsto no se cumple) y condictio furtiva (contra el ladrón § 205).'
    ],
    crossReferences: [20, 104, 124, 126, 144, 145, 175, 184, 189, 190, 191, 197, 205, 210],
    latinCitations: [
      'Si quis indebitum ignorans solvit, per hanc actionem condicere potest (Ulpiano, D. 12,6,1,1)'
    ],
    keyFigures: ['Ulpiano', 'Pretor']
  },
  {
    id: 188,
    title: 'Contrato',
    latinTitle: 'Contractus',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 231,
    summary: 'Acuerdo de dos o más voluntades generador de obligaciones recíprocas (synallagma). Cuatro clases clásicas: reales, verbales, literales y consensuales.',
    content: [
      'Fuente primordial de las obligaciones (§ 203). Labeón (§ 39) concibió el contrato sobre la base de la reciprocidad o sinalagma de prestaciones (synallagma; D. 50,16,19). Sexto Pedio y Ulpiano (§ 15) subrayaron que no puede concebirse contrato alguno sin el consentimiento concordante de las partes (conventio).',
      'Gayo (§ 23) establece la célebre clasificación cuatripartita de los contratos (Gai. 3,89): 1. Reales (se perfeccionan con la entrega de la cosa: mutuo § 210, comodato § 184, depósito § 195, prenda § 168); 2. Verbales (por la solemnidad de las palabras: estipulación § 197); 3. Literales (por anotación escrita § 215); 4. Consensuales (por el mero consentimiento: compraventa § 186, arrendamiento § 183, sociedad § 223, mandato § 208).'
    ],
    crossReferences: [15, 20, 21, 23, 25, 29, 39, 126, 168, 183, 184, 186, 195, 197, 203, 208, 210, 215, 216, 218, 223],
    latinCitations: [
      'Contractus autem ultro citroque obligationem, quod Graeci synallagma vocant (Labeón, D. 50,16,19)',
      'Nullum esse contractum, nullam obligationem, quae non habeat in se conventionem (Pedio, D. 2,14,1,3)'
    ],
    keyFigures: ['Labeón', 'Gayo', 'Sexto Pedio']
  },
  {
    id: 189,
    title: 'Contrato estimatorio',
    latinTitle: 'Aestimatum / Datio in aestimatum',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 232,
    summary: 'Negocio mercantil donde una persona entrega mercancías a otra tasadas en un precio para que las venda, devolviendo el precio o las mercancías no vendidas.',
    content: [
      'Negocio mercantil por el cual una parte (mayorista) entrega mercancías a otra (minorista) con una estimación de su precio fijada de antemano, para que las venda en un plazo determinado.',
      'El comerciante minorista tiene la facultad alternativa de pagar la estimación económica pactada reteniendo para sí el sobreprecio obtenido, o bien restituir las mercancías que no haya conseguido enajenar. Tutelado por el pretor mediante una acción pretoriana in factum: la actio de aestimato (§ 125).'
    ],
    crossReferences: [20, 125, 183, 186, 187, 208],
    keyFigures: ['Pretor', 'Ulpiano']
  },
  {
    id: 190,
    title: 'Contratos innominados',
    latinTitle: 'Contractus innominati',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 233,
    summary: 'Convenciones bilaterales no encuadradas en los contratos típicos clásicos que adquieren exigibilidad cuando una parte ejecuta su prestación. Cuatro esquemas de Paulo.',
    content: [
      'Acuerdos sinalagmáticos con obligaciones recíprocas interdependientes que carecían de una denominación y acción típica en el catálogo cerrado del ius civile.',
      'Paulo (§ 32) formuló la sistemática clásica de sus cuatro fórmulas de cruce de prestaciones (D. 19,5,5 pr.): 1. Do ut des (doy para que des; ejemplo: la permuta § 217); 2. Do ut facias (doy para que hagas); 3. Facio ut des (hago para que des); 4. Facio ut facias (hago para que hagas). Quien cumplió primero disponía de la actio praescriptis verbis (§ 125, § 138) para exigir la contraprestación, o de la condictio (§ 187) para resolver y recuperar lo entregado.'
    ],
    crossReferences: [15, 20, 21, 32, 125, 136, 138, 153, 155, 166, 187, 189, 203, 217, 218],
    latinCitations: [
      'Aut enim do tibi ut des, aut do ut facias, aut facio ut des, aut facio ut facias (Paulo, D. 19,5,5 pr.)'
    ],
    keyFigures: ['Paulo', 'Ulpiano']
  },
  {
    id: 191,
    title: 'Cumplimiento',
    latinTitle: 'Solutio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 234,
    summary: 'La realización voluntaria y exacta de la prestación debida (solutio), modo natural y ordinario de extinción de la obligación.',
    content: [
      'Forma ordinaria de extinción de las obligaciones (§ 200, § 214) consistente en la ejecución voluntaria y exacta de la conducta comprometida (dare, facere o praestare § 218), liberando al deudor y colmando el interés del acreedor.',
      'Requisitos: identidad objetiva (el deudor no puede obligar al acreedor a recibir una cosa distinta, salvo dación en pago voluntaria o datio in solutum), integridad (no puede imponerse el pago parcial) y tempestividad (en el lugar y plazo fijados para no incurrir en mora § 209).'
    ],
    crossReferences: [15, 17, 18, 20, 21, 137, 148, 163, 168, 181, 187, 200, 209, 214, 218],
    latinCitations: [
      'Solvere dicimus eum, qui fecit quod facere promisit (Ulpiano, D. 50,16,176)'
    ],
    keyFigures: ['Ulpiano', 'Papiniano']
  },
  {
    id: 192,
    title: 'Daño (Damnum iniuria datum)',
    latinTitle: 'Damnum iniuria datum / Lex Aquilia',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 235,
    summary: 'Delito privado consistente en el menoscabo patrimonial culpable de una cosa ajena, tipificado por la célebre Lex Aquilia de damno de 286 a.C.',
    content: [
      'Delito privado (§ 193) fuente de obligaciones civiles sancionado por la Lex Aquilia de damno (plebiscito del año 286 a.C. § 43). Embrión de toda la responsabilidad extracivil o aquiliana moderna.',
      'Capítulos de la ley: Capítulo 1 (muerte injusta de un esclavo ajeno § 92 o animal cuadrúpedo de tiro, sancionada con el valor máximo que la víctima tuvo en el último año); Capítulo 3 (cualquier otro daño por quebrar, rasgar o destruir cosas inanimadas, penado con el valor máximo en los últimos treinta días). La jurisprudencia amplió su ámbito para exigir resarcimiento por dolo y por cualquier grado de culpa, incluso levísima (culpa aquiliana).'
    ],
    crossReferences: [20, 21, 32, 33, 37, 43, 64, 92, 124, 125, 127, 134, 143, 144, 165, 169, 177, 193, 205, 213, 214, 220],
    latinCitations: [
      'In lege Aquilia et levissima culpa venit (Ulpiano, D. 9,2,44 pr.)'
    ],
    keyFigures: ['Ulpiano', 'Paulo']
  },
  {
    id: 193,
    title: 'Delito',
    latinTitle: 'Delictum privatum',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 237,
    summary: 'Acto antijurídico y culpable lesivo de intereses privados tipificado por la ley civil o pretoria que engendra una obligación penal: hurto, rapiña, daño e injuria.',
    content: [
      'Ofensa ilícita contra la esfera jurídica privada de un particular que el ordenamiento sanciona con el nacimiento de una obligación penal pecuniaria (§ 214) exigible mediante acción civil o pretoria (§ 127, § 128). Se contrapone al crimen público (§ 64).',
      'Cuatro delitos privados clásicos de las fuentes romanas: 1. Hurto (furtum § 205); 2. Rapiña (rapina § 219); 3. Daño patrimonial culposo (damnum iniuria datum § 192); 4. Injuria o ultraje personal (iniuria § 207). Conllevaban una condena a favor del ofendido cifrada en un múltiplo del perjuicio y tacha de infamia (§ 148).'
    ],
    crossReferences: [20, 23, 26, 34, 37, 64, 127, 128, 143, 144, 148, 192, 203, 205, 207, 214, 219],
    latinCitations: [
      'Omnis enim obligatio vel ex contractu nascitur vel ex delicto (Gai. 3,88)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 194,
    title: 'Depositio pecuniae',
    latinTitle: 'Depositio pecuniae / Consignatio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 238,
    summary: 'Consignación pública formal del dinero debido ante la negativa injustificada del acreedor en mora a recibir el pago, liberando de intereses al deudor.',
    content: [
      'Depósito formal de la suma de dinero adeudada realizado en un lugar público, templo u oficina judicial cuando el acreedor incurre en mora creditoris injustificada al rechazar el ofrecimiento íntegro y tempestivo de pago (§ 209).',
      'Cesa de inmediato el devengo de intereses (usurae § 224), traslada el riesgo de pérdida fortuita al acreedor y en época justinianea (§ 21) extingue definitivamente la obligación.'
    ],
    crossReferences: [17, 21, 67, 134, 195, 200, 209, 218, 224],
    latinCitations: [
      'Debitor usurarius creditori pecuniam optulit et eam, cum accipere noluisset, obsignavit ac deposuit (Papiniano, D. 22,1,7)'
    ],
    keyFigures: ['Papiniano', 'Diocleciano']
  },
  {
    id: 195,
    title: 'Depósito',
    latinTitle: 'Depositum',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 239,
    summary: 'Contrato real y gratuito por el cual el depositante entrega una cosa mueble al depositario para que la guarde diligentemente y la devuelva cuando le sea requerida.',
    content: [
      'Contrato real (§ 203) y esencialmente gratuito por el cual una persona (depositante) entrega a otra (depositario) una cosa mueble específica (§ 154) para su guarda y custodia.',
      'El depositario adquiere la mera detentación natural (posesión natural sin interdictos § 165) y no puede utilizar la cosa bajo sanción de cometer furtum usus (§ 205). Dado que no percibe contraprestación, responde únicamente por dolo (dolus malus) y culpa grave (§ 220). Modalidades especiales: depósito necesario o miserable (en catástrofes), secuestro (cosa litigiosa) y depósito irregular de sumas de dinero.'
    ],
    crossReferences: [30, 37, 61, 125, 126, 127, 148, 154, 162, 165, 169, 183, 203, 205, 210, 220],
    latinCitations: [
      'Depositum est, quod custodiendum alicui datum est (Ulpiano, D. 16,3,1 pr.)'
    ],
    keyFigures: ['Ulpiano', 'Pretor']
  },
  {
    id: 196,
    title: 'Dolo (Delito pretorio)',
    latinTitle: 'Dolus malus / Actio de dolo',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 240,
    summary: 'Conducta maquinatoria, engañosa y maliciosa para defraudar o inducir a error negocial a otra persona. Creado por Aquilio Galo: actio doli y exceptio doli.',
    content: [
      'Labeón definió el dolo malo como «toda maquinación, engaño o falacia empleada para burlar, engañar o perjudicar a otro» (D. 4,3,1,2).',
      'El jurista republicano Aquilio Galo (§ 1) introdujo en el edicto pretorio (§ 16) sus dos protecciones procesales estelares: 1. Exceptio doli (§ 137), defensa con que el demandado neutraliza cualquier reclamación contraria a la equidad; 2. Actio de dolo (§ 124), acción penal subsidiaria, anual e infamante (§ 148) para obtener la indemnización del perjuicio patrimonial causado.'
    ],
    crossReferences: [1, 16, 20, 39, 124, 137, 141, 148],
    latinCitations: [
      'Dolus malus est omnis calliditas, fallacia, machinatio ad circumveniendum... alterum adhibita (Labeón, D. 4,3,1,2)'
    ],
    keyFigures: ['Aquilio Galo', 'Labeón']
  },
  {
    id: 197,
    title: 'Estipulación',
    latinTitle: 'Stipulatio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 241,
    summary: 'Contrato formal y verbal paradigmático del Derecho romano perfeccionado mediante una pregunta congruente del estipulante seguida de inmediata respuesta del promitente.',
    content: [
      'La reina de las obligaciones en el mundo clásico (§ 20): contrato formal verbal (verbis contrahitur § 203) mediante el cual quien se convertirá en acreedor formula una pregunta congruente oral («Centum dare spondes?») y el futuro deudor contesta de inmediato en unidad de acto con el mismo verbo: «Spondeo» (Gai. 3,92).',
      'Su virtud capital fue la extraordinaria versatilidad y abstracción negocial: sirvió para novar obligaciones previas (§ 211), afianzar deudas ajenas (§ 201), prometer pagos de intereses (§ 224), dotar (§ 90) o fijar penas convencionales (§ 198). En época tardía fue recogida usualmente en documentos escritos (cautio).'
    ],
    crossReferences: [20, 21, 23, 33, 60, 93, 126, 143, 145, 146, 181, 198, 199, 201, 203, 211, 214, 218, 224],
    latinCitations: [
      'Verbis obligatio contrahitur ex interrogatione et responsione, veluti: dari spondes? spondeo (Gai. 3,92)'
    ],
    keyFigures: ['Gayo', 'Paulo']
  },
  {
    id: 198,
    title: 'Estipulación penal',
    latinTitle: 'Stipulatio poenae',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 243,
    summary: 'Cláusula penal convenida por estipulación para fijar convencionalmente y de forma anticipada la indemnización por incumplimiento o retardo de la obligación principal.',
    content: [
      'Pacto formal por el que el deudor promete entregar al acreedor una cantidad determinada de dinero u otra prestación si no cumple puntualmente la obligación principal o incurre en retraso culposo (§ 209).',
      'Evita al acreedor la difícil tarea de acreditar ante el juez (§ 141) el montante exacto del daño económico sufrido, reforzando la vinculación jurídica y conminando psicológicamente al deudor a cumplir exactamente lo pactado.'
    ],
    crossReferences: [21, 23, 25, 137, 141, 188, 196, 197, 200, 201, 209, 214, 218],
    latinCitations: [
      'Stipulatio poenae compellit debitorem ad implendam obligationem (D. 44,7,44)'
    ],
    keyFigures: ['Gayo', 'Justiniano']
  },
  {
    id: 199,
    title: 'Exceptio non numeratae pecuniae',
    latinTitle: 'Exceptio non numeratae pecuniae',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 244,
    summary: 'Defensa procesal con inversión de la carga de la prueba concedida al deudor que prometió por estipulación devolver un préstamo dinerario que nunca llegó a recibir.',
    content: [
      'Excepción procesal (§ 137) creada para proteger al deudor que había firmado o prometido por estipulación (§ 197) la restitución de un préstamo (§ 210), cuando el prestamista nunca llegó a entregarle efectivamente el dinero acordado.',
      'Su efecto procesal más formidable fue la inversión de la carga de la prueba (inversio oneris probandi): correspondía al acreedor demandante probar de modo fehaciente que sí había entregado materialmente el dinero, decayendo su reclamación en caso contrario. El deudor disponía de un plazo de un año (ampliado a dos por Justiniano § 21) para invocarla.'
    ],
    crossReferences: [20, 21, 23, 33, 137, 145, 181, 196, 197, 210],
    latinCitations: [
      'Non numeratae pecuniae exceptio compellit petitorem docere pecuniam numeratam esse (C.J. 4,30,3)'
    ],
    keyFigures: ['Gayo', 'Justiniano']
  },
  {
    id: 200,
    title: 'Extinción de las obligaciones',
    latinTitle: 'Modi tollendae obligationis',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 246,
    summary: 'Hechos jurídicos que destruyen el vínculo obligatorio. Clasificación civil y pretoria: ipso iure (solutio, acceptilatio, novatio) y ope exceptionis (pacto, compensación).',
    content: [
      'Causas jurídicas que ponen fin al débito patrimonial del deudor (§ 214). A diferencia de los derechos reales que tienden a perpetuarse, la obligación nace con vocación congénita de extinguirse.',
      'Dos grandes grupos: 1. Modos que extinguen ipso iure (de pleno derecho según el ius civile § 27: el pago formal o solutio § 191, la acceptilatio § 181, la novación § 211, la pérdida fortuita de la cosa específica, la confusión o la litis contestatio en juicios legítimos § 142); 2. Modos que extinguen ope exceptionis (por vía de defensa procesal pretoria § 30: el pactum de non petendo § 216, la compensación judicial § 185 y la prescripción extintiva).'
    ],
    crossReferences: [27, 30, 52, 84, 105, 128, 136, 137, 142, 162, 181, 185, 187, 191, 211, 214, 216, 218],
    latinCitations: [
      'Tollitur autem omnis obligatio solutione eius quod debetur (Gai. 3,168)'
    ],
    keyFigures: ['Gayo', 'Pomponio']
  },
  {
    id: 201,
    title: 'Fianza',
    latinTitle: 'Adpromissio / Fideiussio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 247,
    summary: 'Garantía personal en virtud de la cual un tercero (fiador) se compromete accesoriamente al cumplimiento de la deuda ajena en caso de impago.',
    content: [
      'Negocio por el que un fiador garantiza personalmente con todo su patrimonio (§ 162) la obligación asumida por un deudor principal frente a su acreedor.',
      'Tres formas de evolución histórica: 1. Sponsio (del ius civile § 27 exclusiva para ciudadanos § 60); 2. Fidepromissio (accesible a extranjeros § 93 por ius gentium); 3. Fideiussio (forma clásica universal aplicable a toda clase de obligaciones civiles o naturales § 212 y transmisible pasivamente a los herederos del fiador § 99). Justiniano (§ 21) consagró definitivamente el beneficium excussionis (beneficio de excusión), obligando al acreedor a dirigirse primero contra el deudor antes de demandar al fiador.'
    ],
    crossReferences: [21, 27, 29, 43, 60, 93, 99, 137, 162, 182, 197, 198, 202, 208, 211, 212, 213, 214, 222],
    latinCitations: [
      'Fideiussor est qui alienam obligationem in se recipit (D. 46,1,1)'
    ],
    keyFigures: ['Gayo', 'Justiniano']
  },
  {
    id: 202,
    title: 'Fianza (Acción de regreso)',
    latinTitle: 'Beneficium cedendarum actionum / Regressus',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 250,
    summary: 'Vía jurídica que asiste al fiador que pagó la deuda ajena para resarcirse y exigir el reembolso económico al deudor principal.',
    content: [
      'Remedio para que el garante que pagó la obligación satisfaciendo al acreedor recupere la suma desembolsada dirigiéndose contra el deudor garantizado.',
      'En la arcaica sponsio la Lex Publilia concedió la manus iniectio ejecutiva (§ 143). En la fideiussio clásica (§ 201) el fiador dispone de la actio mandati contraria (§ 208) si afianzó por encargo expreso del deudor, o de la actio negotiorum gestorum (§ 204) si lo hizo espontáneamente, contando además con el beneficium cedendarum actionum para exigir que el acreedor le ceda todas sus acciones y garantías contra el deudor.'
    ],
    crossReferences: [20, 21, 23, 124, 143, 147, 201, 204, 208],
    keyFigures: ['Gayo', 'Justiniano']
  },
  {
    id: 203,
    title: 'Fuentes de las obligaciones (clasificaciones)',
    latinTitle: 'Divisiones obligationum',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 250,
    summary: 'Evolución de los esquemas sistemáticos generadores de obligaciones: bipartición de Gayo, tripartita de las Res Cottidianae y cuatripartita de Justiniano.',
    content: [
      'Evolución del pensamiento doctrinal romano sobre los hechos y actos jurídicos de los que nacen los vínculos obligatorios:',
      '1. Bipartición originaria de Gayo en sus Institutiones (Gai. 3,88): «Omnis enim obligatio vel ex contractu nascitur vel ex delicto» (toda obligación nace o de un contrato § 188 o de un delito § 193); 2. Tripartición en la obra postclásica atribuida a Gayo Res cottidianae: contratos, delitos y «ex variis causarum figuris» (diversas especies de causas); 3. Cuatripartición de Justiniano en sus Instituciones (§ 25): las obligaciones nacen de contrato, como de contrato (cuasicontrato: gestión de negocios § 204, pago de lo indebido § 187, tutela § 122), de delito, o como de delito (cuasidelito).'
    ],
    crossReferences: [20, 21, 23, 25, 27, 30, 33, 122, 125, 126, 128, 141, 145, 183, 184, 186, 187, 188, 192, 193, 195, 197, 204, 205, 208, 210, 214, 215, 223],
    latinCitations: [
      'Omnis enim obligatio vel ex contractu nascitur vel ex delicto (Gai. 3,88)',
      'Obligationes aut ex contractu nascuntur aut ex maleficio aut proprio quodam iure ex variis causarum figuris (D. 44,7,1 pr.)'
    ],
    keyFigures: ['Gayo', 'Justiniano']
  },
  {
    id: 204,
    title: 'Gestión de negocios',
    latinTitle: 'Negotiorum gestio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 252,
    summary: 'Administración voluntaria y espontánea de un asunto patrimonial ajeno sin mandato previo del titular. Obligación de indemnizar gastos útiles (actio contraria).',
    content: [
      'Cuasicontrato (§ 203) que tiene lugar cuando una persona (gestor) se hace cargo espontáneamente y sin encargo ni mandato (§ 208) de un negocio perteneciente a otra ausente o impedida (dominus negotii), movido por animus aliena negotia gerendi.',
      'El gestor está obligado a culminar diligentemente la gestión y rendir cuentas. Si la gestión fue iniciada de forma objetivamente útil (utiliter coeptum), el dominus negotii está obligado a reembolsarle los gastos necesarios y liberarle de las deudas contraídas mediante la actio negotiorum gestorum contraria de buena fe (§ 126).'
    ],
    crossReferences: [20, 32, 80, 99, 125, 126, 139, 147, 208, 220],
    latinCitations: [
      'Si quis negotia aliena gerens plus quam oportet impenderit... id solum repetet quod utiliter expensum est (D. 3,5,24)'
    ],
    keyFigures: ['Paulo', 'Pretor']
  },
  {
    id: 205,
    title: 'Hurto',
    latinTitle: 'Furtum',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 253,
    summary: 'Delito privado consistente en la sustracción material fraudulenta de una cosa mueble ajena para obtener un lucro (furtum rei, usus o possessionis). Actio furti.',
    content: [
      'Delito privado por excelencia (§ 193) sancionado desde las XII Tablas (§ 37). Paulo (§ 32) lo define: «Furtum est contrectatio rei fraudulosa lucri faciendi gratia vel ipsius rei vel etiam usus eius possessionisve» (D. 47,2,1,3: el hurto es la sustracción fraudulenta de una cosa para obtener un lucro, sea de la misma cosa, sea de su uso o de su posesión).',
      'Especies: 1. Furtum manifestum (ladrón sorprendido en flagrante delito, penado al cuádruplo del valor); 2. Furtum nec manifestum (no flagrante, penado al duplo mediante la actio furti § 127). La acción penal no se extingue por restituir la cosa, pudiendo acumularse a la acción reipersecutoria reivindicatoria (§ 152) o a la condictio furtiva (§ 187).'
    ],
    crossReferences: [20, 23, 30, 37, 74, 99, 125, 127, 134, 148, 152, 154, 165, 168, 169, 183, 184, 187, 192, 193, 195, 203],
    latinCitations: [
      'Furtum est contrectatio rei fraudulosa lucri faciendi gratia vel ipsius rei vel etiam usus eius possessionisve (Paulo, D. 47,2,1,3)'
    ],
    keyFigures: ['Paulo', 'Gayo']
  },
  {
    id: 206,
    title: 'Intimidación (Metus)',
    latinTitle: 'Metus / Actio quod metus causa',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 255,
    summary: 'Delito pretorio y vicio del consentimiento consistente en la amenaza ilícita de un mal grave e inminente capaz de amedrentar a un hombre sereno.',
    content: [
      'Violencia psíquica o coacción moral injusta de tal entidad que mueve a una persona a celebrar un negocio jurídico lesivo que de otro modo jamás habría otorgado.',
      'Ulpiano (§ 15) señala que la amenaza debe ser suficiente para impresionar a un varón templado y prudente (metus non vani hominis). El pretor Octavio introdujo hacia 80 a.C. la fórmula octaviana: 1. Actio quod metus causa (§ 125), que condena al cuádruplo del perjuicio; 2. Exceptio metus (§ 137); 3. Restitutio in integrum propter metum (§ 130) para rescindir íntegramente el negocio viciado.'
    ],
    crossReferences: [15, 16, 27, 30, 40, 74, 99, 125, 127, 130, 136, 137, 141, 148, 193],
    latinCitations: [
      'Metum accipiendum Labeo dicit non quemlibet timorem, sed maioris malitatis (Ulpiano, D. 4,2,5)'
    ],
    keyFigures: ['Labeón', 'Ulpiano', 'Pretor Octavio']
  },
  {
    id: 207,
    title: 'Lesiones (Iniuriae)',
    latinTitle: 'Iniuria / Actio iniuriarum',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 255,
    summary: 'Delito privado consistente en cualquier ofensa ilícita contra la integridad corporal o el honor y dignidad moral de una persona libre. Actio iniuriarum estimatoria.',
    content: [
      'Delito privado (§ 193) cometido contra una persona libre (§ 92) que lesiona injustamente su integridad física (golpes, fracturas) o su honor y dignidad moral (difamación, afrenta pública o ultraje al pudor).',
      'En las XII Tablas (§ 37) regia el talión para mutilaciones y penas pecuniarias fijas irrisorias para golpes leves. El pretor (§ 74) creó la actio iniuriarum aestimatoria (§ 125), acción penal anual e infamante (§ 148) intransmisible a los herederos (§ 99), donde el juez o los recuperatores (§ 141) gradúan equitativamente la condena según la gravedad objetiva del ultraje y la dignidad social del ofendido.'
    ],
    crossReferences: [20, 21, 27, 30, 33, 37, 64, 92, 99, 108, 125, 127, 134, 137, 141, 148, 193],
    latinCitations: [
      'Iniuria ex affectu facientis iudicatur (D. 47,10,3,1)'
    ],
    keyFigures: ['Ulpiano', 'Pretor']
  },
  {
    id: 208,
    title: 'Mandato',
    latinTitle: 'Mandatum',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 257,
    summary: 'Contrato consensual y esencialmente gratuito por el cual el mandatario se obliga a realizar un encargo lícito por cuenta e interés del mandante o de un tercero.',
    content: [
      'Contrato consensual (§ 188) del ius gentium (§ 29) fundado en el deber moral de amistad y lealtad (officium amicitiae). Es esencialmente gratuito: «Mandatum, nisi gratuitum sit, nullum est; nam originem ex officio atque amicitia trahit» (Paulo, D. 17,1,1,4: el mandato, si no es gratuito, es nulo, pues tiene su origen en el deber y la amistad; si mediase merced sería arrendamiento de servicios § 183).',
      'El mandatario responde por dolo y debe rendir cuentas transfiriendo al mandante todos los efectos de los negocios concertados; el mandante responde por los gastos necesarios causados mediante la actio mandati contraria de buena fe (§ 126). Modalidad especial: mandato de crédito (mandatum pecuniae credendae) con función de fianza (§ 201).'
    ],
    crossReferences: [20, 29, 32, 92, 93, 105, 108, 126, 141, 148, 183, 188, 201, 202, 204, 214, 220],
    latinCitations: [
      'Mandatum nisi gratuitum nullum est: nam originem ex officio atque amicitia trahit (Paulo, D. 17,1,1,4)'
    ],
    keyFigures: ['Paulo', 'Ulpiano']
  },
  {
    id: 209,
    title: 'Mora',
    latinTitle: 'Mora debitoris et creditoris',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 259,
    summary: 'Retraso culpable e injustificado en el cumplimiento de la obligación debida (mora solvendi) o rechazo injustificado de la prestación (mora accipiendi).',
    content: [
      'Retraso antijurídico en el cumplimiento de la prestación (§ 218). Requisitos de la mora debitoris: deuda cierta y exigible vencida, culpa o dolo en el retraso e intimación de pago (interpellatio) salvo en deudas a término o derivadas de delito.',
      'Efectos capitales: perpetuación de la obligación (perpetuatio obligationis: el deudor asume el riesgo de pérdida sobrevenida de la cosa incluso por caso fortuito o fuerza mayor § 220) y devengo obligatorio de intereses de demora (usurae § 224) y frutos (§ 162).'
    ],
    crossReferences: [10, 15, 137, 141, 154, 162, 191, 194, 214, 218, 220, 224],
    latinCitations: [
      'Mora est iniusta in solvendo vel in accipiendo mora (D. 22,1,32 pr.)',
      'Perpetuatur obligatio (máxima jurisprudencial)'
    ],
    keyFigures: ['Ulpiano', 'Papiniano']
  },
  {
    id: 210,
    title: 'Mutuo',
    latinTitle: 'Mutuum',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 260,
    summary: 'Préstamo de consumo de dinero o cosas fungibles donde el mutuario adquiere la propiedad, obligándose a restituir el tantundem eiusdem generis et qualitatis.',
    content: [
      'El contrato de crédito por excelencia del Derecho romano: contrato real (§ 203) y unilateral perfeccionado por la datio o entrega efectiva en propiedad (§ 169) de una suma de dinero o cosas fungibles (§ 154) del mutuante al mutuario.',
      'El mutuario asume la obligación estricta de devolver otro tanto del mismo género y calidad (tantundem eiusdem generis). Es naturalmente gratuito: no devenga intereses (usurae § 224) a menos que se hayan prometido expresamente mediante una estipulación de usuras independiente (stipulatio usurarum § 197). Protegido por la condictio (§ 187).'
    ],
    crossReferences: [20, 23, 61, 108, 154, 169, 183, 186, 187, 195, 197, 203, 221, 224],
    latinCitations: [
      'Mutui datio consistit in his rebus, quae pondere, numero, mensura consistunt (Gai. 3,90)'
    ],
    keyFigures: ['Gayo', 'Ulpiano']
  },
  {
    id: 211,
    title: 'Novación',
    latinTitle: 'Novatio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 262,
    summary: 'Sustitución y extinción de una obligación primitiva por el nacimiento de una obligación nueva que contiene un elemento nuevo («aliquid novi»).',
    content: [
      'Modo de extinción ipso iure (§ 200) que consiste en la refundición de una deuda preexistente en una nueva obligación que la reemplaza de raíz, extinguiendo sus intereses y garantías accesorias (§ 162, § 201).',
      'Ulpiano la definió como «la transfusión y traslación de una deuda anterior a otra obligación nueva» (D. 46,2,1 pr.). Exige dos requisitos copulativos: el animus novandi (intención declarada de extinguir la primera) y la introducción de un elemento innovador (aliquid novi: cambio de acreedor —delegatio—, de deudor —expromissio— o adición de término, condición o causa negocial).'
    ],
    crossReferences: [20, 21, 23, 52, 162, 197, 200, 201, 203, 212, 214, 215, 216],
    latinCitations: [
      'Novatio est prioris debiti in aliam obligationem vel civilem vel naturalem transfusio atque translatio (Ulpiano, D. 46,2,1 pr.)'
    ],
    keyFigures: ['Ulpiano', 'Pomponio']
  },
  {
    id: 212,
    title: 'Obligaciones naturales',
    latinTitle: 'Obligatio naturalis',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 263,
    summary: 'Relaciones obligatorias desprovistas de acción judicial para forzar su cumplimiento, pero que producen el efecto jurídico de retener lo pagado (soluti retentio).',
    content: [
      'Obligaciones que carecen de actio procesal (§ 128) para compeler judicialmente al deudor, pero que si son cumplidas voluntariamente facultan al acreedor a retener legítimamente lo percibido (soluti retentio), neutralizando cualquier intento de repetición mediante la condictio indebiti (§ 187).',
      'Ejemplos clásicos: deudas contraídas por esclavos (§ 92), por hijos de familia alieni iuris (§ 108), deudas de préstamos concluidos contra el Senadoconsulto Macedoniano (§ 221) o deudas extinguidas por la litis contestatio en el proceso civil (§ 142).'
    ],
    crossReferences: [15, 33, 84, 90, 92, 97, 99, 108, 109, 122, 128, 142, 162, 185, 187, 201, 211, 214, 216, 224],
    latinCitations: [
      'Servi ex contractibus quidem naturaliter obligantur, civiliter autem non obligantur (Ulpiano, D. 44,7,14)'
    ],
    keyFigures: ['Ulpiano']
  },
  {
    id: 213,
    title: 'Obligaciones parciarias y solidarias',
    latinTitle: 'Obligationes correales / Soliditas',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 264,
    summary: 'Concurrencia de pluralidad de acreedores o deudores. Parciarias: la deuda se divide en cuotas; Solidarias: cada acreedor puede exigir el total y cada deudor debe pagar el todo.',
    content: [
      'Régimen aplicable a obligaciones con múltiples sujetos (§ 214). Regla supletoria ordinaria: la obligación divisible (§ 218) es mancomunada o parciaria (cada acreedor sólo puede reclamar su cuota y cada deudor sólo debe su parte viril).',
      'En la solidaridad (in solidum), originada por pacto estipulatorio (§ 197), por testamento (§ 119) o por delito privado conjunto (§ 193), cualquier acreedor puede reclamar la totalidad de la deuda y el cumplimiento efectuado por un solo deudor extingue la obligación respecto a todos los demás codeudores, naciendo las acciones de regreso interno entre ellos.'
    ],
    crossReferences: [21, 25, 117, 119, 128, 188, 191, 197, 200, 214, 218],
    latinCitations: [
      'Ex his duobus reis promittendi unus solvit, omnes liberat (D. 45,2,2)'
    ],
    keyFigures: ['Justiniano', 'Papiniano']
  },
  {
    id: 214,
    title: 'Obligatio',
    latinTitle: 'Obligatio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 265,
    summary: 'Vínculo jurídico por el cual una persona (deudor) queda constreñida ante otra (acreedor) a realizar una determinada prestación patrimonial según el Derecho.',
    content: [
      'La magna definición acuñada en las Instituciones de Justiniano (§ 25): «Obligatio est iuris vinculum, quo necessitate adstringimur alicuius solvendae rei secundum nostrae civitatis iura» (IJ. 3,13 pr.: la obligación es un vínculo jurídico por el que quedamos constreñidos con la necesidad de pagar alguna cosa según las leyes de nuestra ciudad).',
      'Paulo (§ 32) complementó su perspectiva material señalando que la sustancia de las obligaciones no consiste en hacer nuestra una cosa o servidumbre, sino en constreñir a otro a darnos, hacernos o prestarnos algo (D. 44,7,3 pr.).'
    ],
    crossReferences: [13, 20, 23, 25, 32, 110, 125, 128, 162, 188, 193, 197, 200, 215, 218, 220],
    latinCitations: [
      'Obligatio est iuris vinculum, quo necessitate adstringimur alicuius solvendae rei secundum nostrae civitatis iura (IJ. 3,13 pr.)',
      'Obligationum substantia non in eo consistit, ut aliquod corpus nostrum faciat... sed ut alium nobis adstringat ad dandum aliquid vel faciendum vel praestandum (Paulo, D. 44,7,3 pr.)'
    ],
    keyFigures: ['Justiniano', 'Paulo', 'Gayo']
  },
  {
    id: 215,
    title: 'Obligatio litteris contracta',
    latinTitle: 'Litterarum obligatio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 266,
    summary: 'Contrato formal del ius civile que se perfecciona mediante la inscripción por escrito de créditos en el libro de caja familiar del pater (codex accepti et expensi).',
    content: [
      'Obligación formal nacida por anotación escrita (litteris § 203) en el libro contable de ingresos y gastos que llevaba el pater familias romano (codex accepti et expensi).',
      'Gayo (§ 23) describe la transcriptio nominum en dos vertientes: 1. A re in personam (para novar por escrito una deuda preexistente de compraventa o arrendamiento); 2. A persona in personam (para sustituir un deudor por otro nuevo). Desapareció en la época clásica tardía sustituida por documentos de quita y pago.'
    ],
    crossReferences: [20, 21, 23, 61, 187, 197, 203, 211, 214],
    latinCitations: [
      'Litteris obligatio fit veluti in nominibus transcripticiis (Gai. 3,128)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 216,
    title: 'Pactos',
    latinTitle: 'Pacta',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 267,
    summary: 'Acuerdo de voluntades que no reúne la tipicidad ni las formas del contrato civil. Máxima: «Nuda pactio obligationem non parit, sed parit exceptionem».',
    content: [
      'Convención o acuerdo informal que no encaja en ninguno de los contratos nominados del ius civile. Regla básica: «Nuda pactio obligationem non parit, sed parit exceptionem» (D. 2,14,7,4: el simple pacto desnudo no engendra acción obligacional, pero engendra excepción procesal ante el juez § 137).',
      'Especies de pactos dotados de acción (pacta vestita): pactos agregados a contratos de buena fe (pacta adiecta), pactos reconocidos por el pretor como el constitutum de deuda (§ 130) y pactos sancionados por constituciones imperiales (pacta legitima § 10).'
    ],
    crossReferences: [10, 15, 20, 21, 90, 99, 125, 126, 127, 128, 130, 133, 137, 155, 186, 187, 188, 197, 201],
    latinCitations: [
      'Nuda pactio obligationem non parit, sed parit exceptionem (Ulpiano, D. 2,14,7,4)'
    ],
    keyFigures: ['Ulpiano', 'Pretor']
  },
  {
    id: 217,
    title: 'Permuta',
    latinTitle: 'Permutatio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 268,
    summary: 'Negocio de intercambio de una cosa por otra (trueque), configurado doctrinalmente por los proculeyanos como contrato innominado (do ut des).',
    content: [
      'Negocio por el que dos personas se transfieren recíprocamente el dominio de dos cosas (§ 154, § 169). Controversia entre escuelas: los sabinianos (§ 18) sostenían que la permuta era la forma más antigua de compraventa (§ 186); los proculeyanos impusieron el criterio de que la compraventa exige precio pecuniario en dinero líquido.',
      'Quedó clasificada en el derecho postclásico (§ 21) como el paradigma de los contratos innominados do ut des (§ 190), adquiriendo fuerza obligatoria vinculante cuando una de las partes ejecutaba la entrega de la primera res.'
    ],
    crossReferences: [18, 21, 23, 125, 154, 169, 186, 187, 190, 191, 218, 220],
    latinCitations: [
      'Nostrum praeceptores existimant permutationem rerum emptionem et venditionem esse (Gai. 3,141)'
    ],
    keyFigures: ['Gayo', 'Sabino', 'Próculo']
  },
  {
    id: 218,
    title: 'Prestación',
    latinTitle: 'Praestatio',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 269,
    summary: 'El objeto del deber jurídico del deudor en la obligación. Contenido tripartito: dare (transmitir dominio), facere (conducta o servicio) o praestare (garantía o custodia).',
    content: [
      'Objeto de la relación obligatoria (§ 214) consistente en el comportamiento positivo o negativo que el acreedor tiene derecho a exigir coactivamente del deudor.',
      'Contenido clásico de la prestación: 1. Dare (transmitir la propiedad civil o constituir un derecho real § 162, § 169); 2. Facere o non facere (realizar una obra material, prestar un servicio o abstenerse de una conducta); 3. Praestare (asumir una garantía o responder por custodia § 220). Requisitos legales de validez: la prestación debe ser posible física y jurídicamente («Impossibilium nulla obligatio est», Celso § 34), lícita moralmente, determinada o determinable y susceptible de apreciación económica patrimonial.'
    ],
    crossReferences: [20, 34, 125, 140, 148, 162, 165, 169, 171, 177, 200, 209, 213, 214, 220],
    latinCitations: [
      'Impossibilium nulla obligatio est (Celso, D. 50,17,185)'
    ],
    keyFigures: ['Celso', 'Paulo']
  },
  {
    id: 219,
    title: 'Rapiña',
    latinTitle: 'Rapina / Actio vi bonorum raptorum',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 271,
    summary: 'Delito privado consistente en la sustracción violenta de una cosa mueble ajena cometida con armas o cuadrilla. Tipificado por el pretor Lúculo en 76 a.C.',
    content: [
      'Delito privado (§ 193) consistente en el hurto calificado por el empleo de fuerza, violencia física o intimidación cometida en cuadrilla de hombres armados.',
      'El pretor Marco Terencio Lúculo introdujo en el edicto (§ 16) del año 76 a.C. la actio vi bonorum raptorum (§ 125), acción penal e infamante (§ 148) que condenaba al cuádruplo del valor si se ejercitaba en el plazo de un año, y al valor simple después.'
    ],
    crossReferences: [16, 99, 125, 127, 148, 154, 169, 193, 205, 220],
    latinCitations: [
      'Transeamus nunc ad obligationes, quae ex delicto nascuntur... veluti si quis furtum fecerit, bona rapuerit (Gai. 3,182)'
    ],
    keyFigures: ['Pretor Lúculo', 'Gayo']
  },
  {
    id: 220,
    title: 'Responsabilidad contractual',
    latinTitle: 'Responsabilitas contractualis',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 271,
    summary: 'Régimen de imputación de las consecuencias del incumplimiento o cumplimiento inexacto de las obligaciones: dolo, culpa, custodia, caso fortuito y vis maior.',
    content: [
      'Sistema de criterios que determina si la imposibilidad de cumplir la prestación (§ 218) es atribuible al deudor generándole el deber de indemnizar daños y perjuicios (§ 148).',
      'Criterios de imputación subjetiva y objetiva: 1. Dolus (intención deliberada de quebrantar la prestación; el dolo nunca se puede eximir por pacto: pactum de dolo non praestando est nulo); 2. Culpa (negligencia, dividida en culpa lata —equiparada al dolo—, culpa levis in abstracto y culpa in concreto); 3. Custodia (responsabilidad objetiva agravada del comodatario § 184, sastre o mesonero); 4. Casus fortuitus y vis maior (fuerza irresistible imprevista que exonera de responsabilidad salvo pacto o mora § 209).'
    ],
    crossReferences: [15, 21, 23, 126, 128, 140, 141, 143, 148, 183, 184, 186, 188, 192, 195, 204, 209, 214, 218],
    latinCitations: [
      'Magna tamen neglegentia culpa est, et magna culpa dolus est (Paulo, D. 50,16,226)',
      'Animalium vero casus mortesque... nemo praestat (Ulpiano, D. 50,17,23)'
    ],
    keyFigures: ['Ulpiano', 'Paulo', 'Gayo']
  },
  {
    id: 221,
    title: 'Senadoconsulto Macedoniano',
    latinTitle: 'Senatusconsultum Macedonianum',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 273,
    summary: 'Disposición senatorial de época de Vespasiano que prohibió prestar dinero a los hijos de familia sometidos a patria potestad, denegando acción al prestamista.',
    content: [
      'Senadoconsulto promulgado bajo Vespasiano (§ 75) tras el célebre crimen del filiusfamilias Macedo, quien agobiado por usureros asesinó a su padre para heredarle y liquidar sus deudas.',
      'Prohibió taxativamente conceder préstamos de dinero (mutuo § 210) a hijos bajo patria potestad (§ 108). Si el prestamista demandaba tras morir el padre, el pretor (§ 74) le denegaba la acción o concedía al demandado la exceptio senatusconsulti Macedoniani (§ 137), transformando el crédito en una obligación natural (§ 212).'
    ],
    crossReferences: [27, 49, 74, 75, 82, 108, 137, 141, 187, 210, 212],
    latinCitations: [
      'Quod dicitur in eo, qui studiorum causa absens mutuum acceperat, cessare senatus consultum (Ulpiano, D. 14,6,7,13)'
    ],
    keyFigures: ['Vespasiano', 'Ulpiano']
  },
  {
    id: 222,
    title: 'Senadoconsulto Veleyano',
    latinTitle: 'Senatusconsultum Velleianum (46 d.C.)',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 274,
    summary: 'Norma senatorial que prohibió terminantemente a las mujeres obligarse o asumir garantías personales (fianza) o reales (hipoteca) en beneficio ajeno.',
    content: [
      'Senadoconsulto dictado en el año 46 d.C. bajo el emperador Claudio que vetó a todas las mujeres intervenir como garantes (intercedere pro aliis) afianzando deudas ajenas (§ 201), constituyendo prenda o hipoteca sobre sus propios bienes (§ 160) o asumiendo novaciones expromisorias (§ 211).',
      'Si la mujer era demandada por el acreedor, el pretor le otorgaba la exceptio senatusconsulti Velleiani (§ 137). Callístrato justificó la medida por considerar que los negocios financieros y de asunción de riesgo eran un officium virile reservado a los varones.'
    ],
    crossReferences: [21, 46, 49, 75, 123, 137, 160, 162, 201, 211],
    latinCitations: [
      'Feminae remotae videntur ab officio argentarii, cum ea opera virilis sit (Callístrato, D. 2,13,12)'
    ],
    keyFigures: ['Claudio', 'Callístrato']
  },
  {
    id: 223,
    title: 'Sociedad',
    latinTitle: 'Societas',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 275,
    summary: 'Contrato consensual plurilateral de buena fe por el que dos o más socios aportan bienes o trabajo para perseguir un fin lícito común repartiendo ganancias y pérdidas.',
    content: [
      'Contrato consensual (§ 188) del ius gentium (§ 29) por el cual dos o más personas (socii) se obligan a poner en común dinero, bienes o trabajo personal para obtener una ventaja económica compartida.',
      'Reglas fundamentales: rige la fraternidad interna (affectio societatis); son radicalmente nulos los pactos leoninos (societas leonina) donde un socio sufre las pérdidas sin participar de las ganancias. No crea una persona jurídica independiente (§ 110) frente a terceros, vinculando exclusivamente a los socios entre sí con la actio pro socio (§ 126), acción infamante (§ 148).'
    ],
    crossReferences: [23, 29, 97, 102, 105, 110, 126, 148, 149, 153, 155, 188],
    latinCitations: [
      'Societas coiri solet aut omnium bonorum aut unius alicuius negotii (Gai. 3,148)',
      'Aristo refert Cassium respondisse societatem talem coiri non posse, ut alter lucrum tantum faceret, alter damnum sentiret (D. 17,2,29,2)'
    ],
    keyFigures: ['Gayo', 'Casio']
  },
  {
    id: 224,
    title: 'Usurae',
    latinTitle: 'Usurae / Foenus',
    bloqueId: 6,
    bloqueTitle: 'Derecho de Obligaciones',
    page: 277,
    summary: 'Precio o compensación por el uso del capital ajeno prestado (intereses). Limitaciones históricas desde las XII Tablas: usura centesima y veto al anatocismo.',
    content: [
      'Frutos civiles del dinero debidos por el deudor en retribución del uso temporal de una suma pecuniaria prestada (§ 210) o por incurrir en mora culposa (§ 209).',
      'Límites legales históricos: la Ley de las XII Tablas (§ 37) fijó la usura máxima en la unciaria (un doceavo mensual); en el periodo clásico (§ 20) se fijó como techo la usura centesima (1% mensual o 12% anual); Justiniano (§ 21) redujo la tasa general al 6% anual. Se prohibió con rigor el anatocismo (anatocismus o cobro de intereses sobre intereses vencidos) y el cobro de intereses cuando excedían el capital principal (ultra alterum tantum).'
    ],
    crossReferences: [20, 21, 37, 137, 187, 197, 209, 210, 212],
    latinCitations: [
      'XII Tabulis sanctum ne quis unciario fenore amplius exerceret (Tácito, Ann. 6,16)'
    ],
    keyFigures: ['Tácito', 'Justiniano']
  }
];
