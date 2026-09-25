import { Paragrafo } from '../prontuarioTypes';

export const BLOQUE_5_PARAGRAFOS: Paragrafo[] = [
  {
    id: 150,
    title: 'Accesión',
    latinTitle: 'Accessio',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 173,
    summary: 'Modo originario de adquirir el dominio por la unión natural o artificial inseparable de dos cosas (una principal y otra accesoria). Principio: accessorium sequitur principale.',
    content: [
      'Modo de adquisición de la propiedad (§ 169) fundamentado en la unión inseparable y permanente de dos cosas pertenecientes a distintos dueños (§ 154), convirtiéndose el propietario de la cosa principal en dueño del todo resultante.',
      'Principio rector: accessorium sequitur principale (lo accesorio sigue la suerte de lo principal). Especies: 1. De mueble a mueble (ferruminatio, tinctura, scriptura, textura, pictura —donde Paulo y Justiniano atribuyeron la propiedad al pintor sobre la tabla—); 2. De mueble a inmueble regido por el principio «superficies solo cedit» (§ 174; siembra, plantación y edificación); 3. De inmueble a inmueble por fenómenos fluviales (alluvio, avulsio, alveus derelictus).'
    ],
    crossReferences: [20, 21, 22, 124, 137, 148, 152, 154, 169, 174],
    latinCitations: [
      'De haber gemas en los vasos de oro o plata, ceden aquéllas al oro o la plata (Ulpiano, D. 34,2,19,20)',
      'Superficies solo cedit (Gai. 2,73)'
    ],
    keyFigures: ['Ulpiano', 'Paulo', 'Gayo']
  },
  {
    id: 151,
    title: 'Acción negatoria',
    latinTitle: 'Actio negatoria',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 174,
    summary: 'Acción real que asiste al propietario civil para defender la libertad de su fundo frente a quien pretende tener un derecho real de servidumbre o usufructo.',
    content: [
      'Acción real (§ 128) que corresponde ejercitar al propietario civil (§ 169) de una cosa contra cualquiera que se arrogue indebidamente un derecho de servidumbre (§ 171) o de usufructo (§ 177) sobre la misma.',
      'Su finalidad es obtener la declaración judicial de que el fundo está libre de tales cargas, la cesación inmediata de las perturbaciones, la indemnización de daños y una fianza estipulatoria de no volver a perturbar en el futuro (cautio de non amplius turbando § 130).'
    ],
    crossReferences: [61, 88, 128, 130, 136, 138, 146, 148, 152, 154, 162, 169, 171, 177],
    latinCitations: [
      'Si habere se neget... actio negatoria competit (Paulo, D. 8,5,2)'
    ],
    keyFigures: ['Paulo', 'Pretor']
  },
  {
    id: 152,
    title: 'Acción reivindicatoria',
    latinTitle: 'Rei vindicatio',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 175,
    summary: 'La acción real por excelencia que asiste al propietario civil no poseedor contra el poseedor no propietario para obtener la restitución de la cosa con sus frutos.',
    content: [
      'La actio in rem (§ 124, § 128) fundamental para la tutela de la propiedad civil (§ 169). La ejercita el propietario quiritario que ha perdido la posesión de la res (§ 165) contra el poseedor ilegítimo para que éste sea condenado a reintegrarle la cosa con sus frutos (§ 162) o pagar su valor.',
      'En el procedimiento formulario (§ 144) incluía la cláusula arbitraria (§ 136): el juez conminaba al demandado a restituir in natura; si se negaba, el actor fijaba bajo juramento estimatorio (iusiurandum in litem) el valor económico de la cosa que el demandado debía pagar en dinero (§ 148).'
    ],
    crossReferences: [20, 124, 128, 134, 136, 138, 143, 144, 148, 154, 162, 165, 169, 170, 175],
    latinCitations: [
      'Ubi rem meam invenio, ibi vindico (principio jurisprudencial)',
      'Si paret rem qua de agitur ex iure Quiritium Auli Agerii esse... (Fórmula de la reivindicatoria)'
    ],
    keyFigures: ['Gayo', 'Pretor']
  },
  {
    id: 153,
    title: 'Copropiedad',
    latinTitle: 'Condominium',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 177,
    summary: 'Concurrencia de varios propietarios sobre una misma cosa indivisa por cuotas ideales (pars pro indiviso). Derecho de veto (ius prohibendi) y división.',
    content: [
      'Situación en que dos o más personas son titulares conjuntamente del derecho de propiedad (§ 169) sobre una misma cosa corpórea (§ 154). Evolucionó desde el consorcio arcaico entre hermanos (consortium ercto non cito § 94) hacia la comunidad por cuotas ideales abstractas de la época clásica.',
      'Cada copropietario puede disponer libremente de su cuota ideal (venderla, hipotecarla § 160). Para actos materiales sobre la cosa común rige el ius prohibendi (derecho de veto). La comunidad es esencialmente divisible: cualquiera puede poner fin a la indivisión solicitando judicialmente la actio communi dividundo o actio familiae erciscundae (§ 138, § 143).'
    ],
    crossReferences: [94, 103, 138, 141, 143, 152, 154, 160, 162, 164, 168, 169, 171, 177, 214],
    latinCitations: [
      'Nemo invitus compellitur in communione detineri (C.J. 3,37,5)'
    ],
    keyFigures: ['Ulpiano', 'Celso']
  },
  {
    id: 154,
    title: 'Cosas',
    latinTitle: 'Res',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 179,
    summary: 'Todo objeto del mundo exterior susceptible de utilidad y valoración económica. Clasificación: in commercio / extra commercium, mancipi / nec mancipi, muebles / inmuebles.',
    content: [
      'Objeto patrimonial sobre el que recaen los derechos reales (§ 162). Gayo divide las cosas en corporales (quae tangi possunt: un esclavo, un fundo, oro) e incorporales (quae in iure consistunt: una herencia, un usufructo, las obligaciones § 214).',
      'Distinciones capitales: 1. Res intra commercium y extra commercium (res divini iuris —sacrae, sanctae, religiosae— y res publicae); 2. Res mancipi (los bienes de mayor valor agrario: fundos itálicos, esclavos, animales de tiro y servidumbres rústicas § 171, que exigían mancipatio § 163 o in iure cessio § 161) y Res nec mancipi (transmisibles por simple entrega o traditio § 175); 3. Cosas consumibles y no consumibles; 4. Fungibles y no fungibles.'
    ],
    crossReferences: [20, 23, 76, 83, 92, 94, 97, 99, 110, 161, 162, 163, 169, 171, 175, 214],
    latinCitations: [
      'Corporales hae sunt quae tangi possunt... incorporales sunt quae tangi non possunt, qualia sunt ea quae in iure consistunt (Gai. 2,13-14)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 155,
    title: 'Donación',
    latinTitle: 'Donatio',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 181,
    summary: 'Acto de liberalidad por el cual una persona empobrece voluntariamente su patrimonio para enriquecer a otra sin contraprestación. Lex Cincia de 204 a.C.',
    content: [
      'Causa negocial general en virtud de la cual un donante realiza un acto lucrativo definitivo a favor del donatario movido por animus donandi.',
      'La Lex Cincia de donis et muneribus (204 a.C. § 43) limitó las donaciones a extraños por encima de cierta cuantía para proteger el patrimonio familiar. Se prohibieron absolutamente las donaciones entre cónyuges durante el matrimonio (§ 104) para evitar presiones morales. Especial trascendencia tuvo la donatio mortis causa supeditada a la premoriencia del donante frente al donatario.'
    ],
    crossReferences: [20, 21, 43, 67, 89, 90, 94, 97, 99, 102, 104, 125, 130, 163, 169, 170, 175, 176, 181, 190, 197, 216],
    latinCitations: [
      'Donari videtur, quod nullo iure cogente conceditur (Papiniano, D. 39,5,29)'
    ],
    keyFigures: ['Papiniano', 'Constantino']
  },
  {
    id: 156,
    title: 'Enfiteusis',
    latinTitle: 'Emphyteusis',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 183,
    summary: 'Derecho real sobre cosa ajena que otorga el pleno disfrute de un fundo rústico a perpetuidad o largo plazo a cambio del pago de un canon periódico (vectigal).',
    content: [
      'Derecho real sobre fundo ajeno (§ 162) nacido en el Bajo Imperio (§ 21) a partir del arrendamiento público de tierras provinciales y municipales (ager vectigalis § 76, § 130).',
      'El enfiteuta ostenta un disfrute casi idéntico al del propietario: puede modificar los cultivos, gravar el fundo y transmitirlo a terceros o por herencia mortis causa (§ 117), a cambio de cultivar diligentemente la finca y pagar un canon anual (canon o pensio). Si no abonaba el canon durante tres años consecutivos, se producía el comiso y la pérdida del derecho.'
    ],
    crossReferences: [20, 21, 76, 117, 128, 130, 154, 155, 162, 165, 169],
    keyFigures: ['Zenón', 'Justiniano']
  },
  {
    id: 157,
    title: 'Especificación',
    latinTitle: 'Specificatio',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 184,
    summary: 'Modo de adquirir la propiedad mediante la transformación de una materia ajena en una nueva especie orgánica (nova species): uvas en vino, aceitunas en aceite.',
    content: [
      'Modo originario de adquisición de la propiedad (§ 169) consistente en elaborar un objeto nuevo y distinto (nova species) a partir de una materia prima ajena sin acuerdo con su dueño (hacer vino con uvas ajenas o una estatua con bronce ajeno).',
      'Célebre polémica doctrinal entre sabinianos y proculeyanos (§ 18): los sabinianos atribuían la propiedad al dueño de la materia; los proculeyanos al artífice que le dio la nueva forma. Justiniano (§ 21) adoptó la media sententia: si la cosa puede volver a su estado primitivo (la estatua fundirse en bronce), es del dueño de la materia; si no puede reducirse (el vino o el aceite), pertenece al especificador de buena fe con indemnización recíproca (§ 152).'
    ],
    crossReferences: [18, 20, 21, 33, 137, 152, 154, 169],
    latinCitations: [
      'Et post multas Sabinianorum et Proculianorum ambiguitates... media sententia placuit (IJ. 2,1,25)'
    ],
    keyFigures: ['Sabino', 'Próculo', 'Justiniano']
  },
  {
    id: 158,
    title: 'Fiducia',
    latinTitle: 'Fiducia cum creditore / cum amico',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 185,
    summary: 'Negocio solemne por el que el fiduciante transmite la propiedad civil de una res por mancipatio con el pacto fiduciario de restituirla al cumplirse el fin acordado.',
    content: [
      'Negocio arcaico y formal por el que una persona (fiduciante) transmite la propiedad civil de una cosa por mancipatio (§ 163) o in iure cessio (§ 161) al fiduciario, quien asume el pactum fiduciae de devolverla tras verificarse un determinado propósito.',
      'Dos clases: 1. Fiducia cum creditore contracta: garantía de una deuda (§ 214); 2. Fiducia cum amico: para custodia o depósito. Si el fiduciario no devolvía la cosa, el fiduciante contaba con la actio fiduciae (§ 125, § 126), acción de buena fe infamante (§ 148).'
    ],
    crossReferences: [20, 21, 30, 33, 60, 125, 126, 148, 154, 160, 161, 163, 168, 169, 176, 208, 214],
    latinCitations: [
      'Item debitor rem, quam fiduciae causa creditori mancipaverit... usucapere potest (Gai. 3,201)'
    ],
    keyFigures: ['Gayo', 'Pretor']
  },
  {
    id: 159,
    title: 'Habitación',
    latinTitle: 'Habitatio',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 187,
    summary: 'Derecho real sobre cosa ajena que confiere a su titular la facultad de morar gratuitamente en una vivienda o aposento ajeno durante toda su vida.',
    content: [
      'Derecho real personalísimo (§ 162) originado frecuentemente en legados testamentarios (§ 102) que atribuye a una persona la facultad vitalicia de habitar en una casa ajena para satisfacer sus necesidades de morada.',
      'Justiniano (§ 21) la configuró definitivamente como un ius in re aliena autónomo, distinguiéndolo del uso (§ 180) y del usufructo (§ 177) y facultando expresamente al habitator a arrendar la vivienda a terceros (§ 183).'
    ],
    crossReferences: [20, 21, 25, 102, 162, 177, 180, 183],
    latinCitations: [
      'Sed si cui habitatio legata sive aliquo modo constituta sit (IJ. 2,5,5)'
    ],
    keyFigures: ['Marcelo', 'Justiniano']
  },
  {
    id: 160,
    title: 'Hipoteca',
    latinTitle: 'Hypotheca / Pignus conventum',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 187,
    summary: 'Garantía real sin desplazamiento posesorio de la cosa gravada, otorgando al acreedor el derecho a tomar la posesión y vender la res si la obligación se incumple.',
    content: [
      'Forma moderna de garantía real sobre bienes muebles o inmuebles (§ 154, § 162) donde la posesión de la res gravada no pasa al acreedor al constituirse el negocio, sino que permanece en manos del deudor hipotecario.',
      'Surgió en los arrendamientos de fincas rústicas (§ 183) respecto a los aperos y ganado (invecta et illata). Tutelada por el interdictum Salvianum y la actio Serviana o cuasi Serviana (§ 128) frente a terceros. Rige el principio de rango temporal: «Prior tempore, potior iure» (el primero en el tiempo es el mejor en el derecho).'
    ],
    crossReferences: [13, 20, 21, 33, 64, 69, 88, 90, 122, 128, 148, 154, 162, 165, 168, 174, 177, 183, 186, 201, 214],
    latinCitations: [
      'Inter pignus autem et hypothecam tantum nominis sonus differt (D. 20,1,5,1)',
      'Prior tempore, potior iure (adagio procesal)'
    ],
    keyFigures: ['Marciano', 'Pretor']
  },
  {
    id: 161,
    title: 'In iure cessio',
    latinTitle: 'In iure cessio',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 189,
    summary: 'Modo solemne y formal de transmitir la propiedad o constituir derechos reales mediante un proceso fingido de reivindicación ante el pretor en la fase in iure.',
    content: [
      'Negocio jurídico formal y abstracto del ius civile que se celebra ante el magistrado con imperium (pretor § 74 o gobernador § 76) mediante un allanamiento procesal fingido.',
      'El adquirente simula reclamar la cosa mediante una actio reivindicatoria afirmando ser dueño (§ 152); el transmitente calla o se allana (confessio in iure § 136), y el magistrado pronuncia la addictio (§ 140) adjudicando solemnemente la propiedad (§ 169) o el derecho de servidumbre (§ 172) o tutela (§ 122).'
    ],
    crossReferences: [23, 33, 74, 76, 97, 122, 136, 140, 143, 152, 153, 154, 162, 163, 169, 172, 178, 186],
    latinCitations: [
      'In iure cessio quoque communis forma est etiam mancipi rebus (Gai. 2,22)'
    ],
    keyFigures: ['Gayo', 'Pretor']
  },
  {
    id: 162,
    title: 'Iura in re',
    latinTitle: 'Iura in re / Iura in re aliena',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 190,
    summary: 'Derechos reales: relaciones jurídicas directas e inmediatas sobre una cosa corpórea tuteladas erga omnes por acciones reales, distinguiéndose de los derechos de crédito.',
    content: [
      'Poderes jurídicos que recaen directamente sobre una cosa corporal (§ 154) y se hacen valer frente a toda la sociedad (eficacia erga omnes). El derecho real paradigmático y pleno es la propiedad (§ 169).',
      'Sobre la base del derecho de propiedad se configuran los derechos reales sobre cosa ajena (iura in re aliena), divididos en derechos de disfrute (servidumbres prediales § 171, usufructo § 177, uso § 180, habitación § 159, superficie § 174, enfiteusis § 156) y derechos de garantía patrimonial (prenda § 168 e hipoteca § 160).'
    ],
    crossReferences: [20, 21, 26, 128, 154, 156, 158, 159, 160, 168, 169, 171, 174, 177, 180, 201, 214],
    latinCitations: [
      'Actionum genera duo sunt: in rem, quae dicitur vindicatio, et in personam, quae condictio appellatur (IJ. 4,6,1)'
    ],
    keyFigures: ['Gayo', 'Ulpiano']
  },
  {
    id: 163,
    title: 'Mancipatio',
    latinTitle: 'Mancipatio',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 192,
    summary: 'Negocio solemne y formal per aes et libram del ius civile ante cinco testigos y un pesador (libripens) para transmitir la propiedad civil de las res mancipi.',
    content: [
      'El negocio arcaico más trascendental del ius civile (§ 27) para la transmisión solemne del dominium ex iure Quiritium (§ 169) sobre las res mancipi (§ 154; esclavos, animales de tiro y carga, fundos itálicos y servidumbres rústicas).',
      'Ceremonial rituario: requiere la presencia de al menos cinco testigos varones púberes ciudadanos romanos (§ 60) y de un libripens que sostiene una balanza de bronce. El adquirente (mancipio accipiens) sujeta la cosa y pronuncia la fórmula solemne: «Hunc ego hominem ex iure Quiritium meum esse aio...», golpeando la balanza con una pieza de cobre (aes rude) que entrega como precio simbólico.'
    ],
    crossReferences: [20, 21, 23, 27, 37, 79, 91, 104, 120, 154, 158, 169, 170, 171, 172, 175, 176, 186],
    latinCitations: [
      'Mancipatio dicitur, quia manu res capitur (Gai. 1,121)',
      'Cum nexum faciet mancipiumque, uti lingua nuncupassit, ita ius esto (Tab. VI, 1)'
    ],
    keyFigures: ['Gayo', 'Libripens']
  },
  {
    id: 164,
    title: 'Ocupación',
    latinTitle: 'Occupatio',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 194,
    summary: 'Modo originario de adquirir la propiedad por la aprehensión material efectiva de una cosa que no tiene dueño (res nullius) con intención de hacerla propia.',
    content: [
      'Modo natural y originario de adquisición de la propiedad (§ 169) consistente en la toma de posesión (§ 165) material de una cosa sin dueño (res nullius) con ánimo de quedársela para sí (animus occupandi).',
      'Supuestos principales: 1. Caza de animales salvajes (ferae bestiae) y pesca; 2. Cosas capturadas legítimamente al enemigo de guerra (occupatio bellica); 3. Isla nacida en el mar (insula in mari nata); 4. Cosas abandonadas conscientemente por su anterior dueño (res derelictae).'
    ],
    crossReferences: [18, 27, 93, 110, 165, 169, 176],
    latinCitations: [
      'Insula, quae in mare nascitur, quod raro accidit, occupantis fit, nullius enim esse creditur (D. 41,1,7,3)'
    ],
    keyFigures: ['Gayo']
  },
  {
    id: 165,
    title: 'Posesión',
    latinTitle: 'Possessio',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 195,
    summary: 'Señorío o tenencia material de hecho sobre una cosa corpórea protegida por el pretor mediante interdictos. Concurrencia de corpus y animus possidendi.',
    content: [
      'Situación de hecho consistente en el poder físico efectivo sobre una cosa corporal (§ 154) amparada jurídicamente por la tutela interdictal del pretor (§ 74, § 166).',
      'La jurisprudencia clásica (§ 33) distingue dos elementos copulativos esenciales: 1. El corpus (tenencia y control material fáctico); 2. El animus possidendi (intención de tener la cosa para sí con exclusión de terceros). Se distingue con nitidez de la simple detentación natural (posesión natural del arrendatario o comodatario § 183, § 184) y de la propiedad jurídica civil (§ 169).'
    ],
    crossReferences: [20, 21, 33, 61, 74, 92, 108, 122, 124, 130, 152, 154, 164, 166, 169, 170, 176, 183, 184, 195, 208],
    latinCitations: [
      'Nihil commune habet proprietas cum possessione (Ulpiano, D. 41,2,12,1)',
      'Possidemus corpore et animo (Paulo, D. 41,2,3,1)'
    ],
    keyFigures: ['Paulo', 'Ulpiano']
  },
  {
    id: 166,
    title: 'Posesión (Interdictos)',
    latinTitle: 'Interdicta possessoria',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 197,
    summary: 'Órdenes pretoria sumarias que tutelan la paz posesoria: interdictos para retener la posesión (uti possidetis, utrubi) y para recuperarla (unde vi, unde vi armata).',
    content: [
      'Remedios procesales de urgencia emanados del pretor (§ 74) para proteger la posesión de hecho (§ 165) frente a turbaciones ilícitas o despojos violentos, sin entrar a juzgar sobre la titularidad del derecho de propiedad (§ 169).',
      'Clasificación clásica: 1. Interdicta retinendae possessionis (para retener la posesión): interdicto uti possidetis para inmuebles y utrubi para bienes muebles (favorecía a quien poseyó más tiempo sin violencia en el último año); 2. Interdicta recuperandae possessionis (para recuperar la posesión arrebatada): interdicto unde vi (despojo violento en el plazo de un año) y unde vi armata (despojo mediante banda armada, perpetuo y sin excepción de posesión viciosa).'
    ],
    crossReferences: [74, 124, 130, 145, 152, 165, 169, 171, 177, 214],
    latinCitations: [
      'Uti nunc possidetis... vim fieri veto (Fórmula del interdicto uti possidetis)',
      'Unde in hoc anno tu illum vi deiecisti... restituas (Fórmula del interdicto unde vi)'
    ],
    keyFigures: ['Pretor', 'Gayo']
  },
  {
    id: 167,
    title: 'Praescriptio longi temporis',
    latinTitle: 'Praescriptio longi temporis',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 199,
    summary: 'Defensa procesal nacida en provincias para amparar a poseedores de fundos provinciales (no usucapibles), fijada en 10 años entre presentes y 20 entre ausentes.',
    content: [
      'Institución procesal surgida a fines del siglo II d.C. por rescriptos de Septimio Severo y Caracalla (§ 10) para proteger la posesión continuada e ininterrumpida de los fundos situados en las provincias (§ 76), excluidos de la usucapión civil (§ 176).',
      'Plazos legales: diez años si el demandante y el poseedor residían en la misma provincia (inter praesentes) y veinte años si residían en provincias distintas (inter absentes). Justiniano (§ 21) fusionó la usucapión y la prescripción de largo tiempo en un sistema unitario.'
    ],
    crossReferences: [10, 21, 24, 76, 154, 165, 169, 176],
    latinCitations: [
      'Longae possessionis praescriptionem tam in praediis quam in mancipiis locum habere manifestum est (D. 44,3,3)'
    ],
    keyFigures: ['Septimio Severo', 'Justiniano']
  },
  {
    id: 168,
    title: 'Prenda',
    latinTitle: 'Pignus datum',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 199,
    summary: 'Derecho real de garantía sobre cosa mueble o inmueble entregada en posesión al acreedor para asegurar el cumplimiento de una obligación.',
    content: [
      'Garantía real (§ 162) donde el deudor pignorante entrega la posesión material de una cosa (§ 165) al acreedor pignoraticio para responder del cumplimiento de una obligación principal (§ 214).',
      'El acreedor adquiere la posesión interdictal (§ 166) pero no puede usar de la res bajo pena de cometer delito de hurto de uso (furtum usus § 205). Si la deuda se abona, el pignorante ejercita la actio pigneraticia directa para recobrar la cosa; si se incumple, el acreedor puede venderla (ius distrahendi) para cobrarse el crédito reteniendo el sobrante (superfluum).'
    ],
    crossReferences: [20, 21, 30, 33, 74, 125, 128, 148, 154, 158, 160, 162, 165, 166, 170, 200, 204, 205, 214, 220],
    latinCitations: [
      'Proprie pignus dicimus, quod ad creditorem transit (D. 50,16,238,2)'
    ],
    keyFigures: ['Gayo', 'Pretor']
  },
  {
    id: 169,
    title: 'Propiedad',
    latinTitle: 'Dominium ex iure Quiritium',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 201,
    summary: 'El señorío jurídico más pleno y absoluto sobre una cosa corpórea (plena in re potestas), protegido por la acción reivindicatoria.',
    content: [
      'El derecho real por excelencia (§ 162): otorga al titular (dominus) el poder más amplio posible sobre una cosa corpórea (§ 154) (uti, frui, habere, possidere). Se caracteriza por su elasticidad, plenitud y carácter perpetuo.',
      'La propiedad civil romana (dominium ex iure Quiritium) estaba reservada a ciudadanos romanos (§ 60) sobre bienes muebles y fundos situados en suelo itálico. Sus límites son fijados legalmente por razones de vecindad o interés público, defendiéndose frente a cualquier perturbación mediante la acción reivindicatoria (§ 152) y la acción negatoria (§ 151).'
    ],
    crossReferences: [20, 26, 27, 34, 60, 97, 108, 125, 128, 134, 150, 151, 152, 154, 157, 160, 161, 162, 163, 164, 165, 170, 175, 176, 177, 210, 214],
    latinCitations: [
      'Dominium est ius utendi et abutendi re sua quatenus iuris ratio patitur (máxima dogmática)'
    ],
    keyFigures: ['Paulo', 'Celso']
  },
  {
    id: 170,
    title: 'Propiedad (Situaciones afines)',
    latinTitle: 'In bonis habere / Propiedad bonitaria',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 205,
    summary: 'Formas de dominio paralelas al dominium civil: la propiedad pretoria o bonitaria (in bonis habere) tutelada por la actio Publiciana, y la propiedad provincial.',
    content: [
      'Situaciones patrimoniales que otorgaban a su titular una protección idéntica a la del propietario civil (§ 169) amparadas por el pretor (§ 74) o por los gobernadores provinciales (§ 76).',
      'Propiedad bonitaria o pretoria (in bonis habere): surge cuando se entrega una res mancipi (§ 154) por simple traditio (§ 175) sin mancipatio (§ 163), o cuando se adquiere de buena fe de un no dueño. El pretor Quinto Publicio creó en el siglo I a.C. la actio Publiciana ficticia (§ 125), que fingía consumada la usucapión (§ 176) para triunfar frente a terceros poseedores.'
    ],
    crossReferences: [16, 21, 60, 69, 74, 76, 88, 90, 122, 125, 140, 152, 154, 163, 165, 169, 175, 176],
    latinCitations: [
      'Duplex erat dominium: nam vel in bonis aliquis habebat vel ex iure Quiritium dominus erat (Gai. 2,40)'
    ],
    keyFigures: ['Quinto Publicio', 'Gayo']
  },
  {
    id: 171,
    title: 'Servidumbres',
    latinTitle: 'Servitutes praediorum',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 206,
    summary: 'Gravamen real impuesto sobre un fundo (sirviente) en beneficio directo, permanente y objetivo de otro fundo perteneciente a distinto dueño (dominante).',
    content: [
      'Derechos reales sobre cosa ajena (§ 162) que vinculan objetivamente dos fincas vecinas pertenecientes a distintos propietarios (§ 169), reportando el fundo sirviente una utilidad económica duradera al fundo dominante.',
      'Principios clásicos: «Nemini res sua servit» (a nadie le sirve su propia cosa como servidumbre); «Servitus in faciendo consistere nequit» (la servidumbre no puede consistir en un hacer del sirviente, sino en tolerar o no hacer); e indivisibilidad. Clasificación: servidumbres rústicas (de paso: iter, actus, via; de aguas: aquaeductus) y urbanas (de luces y vistas: altius non tollendi; de desagüe: cloaca).'
    ],
    crossReferences: [20, 23, 27, 60, 154, 162, 169, 172, 173],
    latinCitations: [
      'Nulli res sua servit (D. 8,2,26)',
      'Servitus in faciendo consistere nequit (D. 8,1,15,1)'
    ],
    keyFigures: ['Pomponio', 'Paulo', 'Gayo']
  },
  {
    id: 172,
    title: 'Servidumbres (Constitución y extinción)',
    latinTitle: 'Constitutio et extinctio servitutis',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 208,
    summary: 'Modos de nacer: mancipatio, in iure cessio, legado vindicatorio, adiudicatio y deductio. Causas extintivas: confusión, renuncia, no uso (non usus) y destrucción.',
    content: [
      'Modos de constitución: para servidumbres rústicas antiguas (res mancipi § 154) la mancipatio (§ 163); para todas, la in iure cessio (§ 161) y el legado vindicatorio mortis causa (§ 102); en fundos provinciales (§ 76) mediante pactos y estipulaciones (pactiones et stipulationes).',
      'Causas de extinción: 1. Confusión (ambos fundos pasan al mismo propietario); 2. Renuncia formal del dueño dominante mediante in iure cessio ante una actio negatoria fingida (§ 151); 3. Destrucción o cambio sustancial del estado de los predios; 4. No uso (non usus) prolongado durante dos años en derecho clásico y diez o veinte años en derecho justinianeo.'
    ],
    crossReferences: [21, 27, 32, 76, 102, 136, 138, 151, 153, 154, 161, 163, 167, 171, 173, 176],
    latinCitations: [
      'Servitus per non usum amittitur (D. 8,6,7)'
    ],
    keyFigures: ['Paulo', 'Pretor']
  },
  {
    id: 173,
    title: 'Servidumbres (Tutela jurisdiccional)',
    latinTitle: 'Vindicatio servitutis / Actio confessoria',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 210,
    summary: 'Protección procesal del titular de la servidumbre mediante la vindicatio servitutis o actio confessoria, interdictos posesorios y la operis novi nuntiatio.',
    content: [
      'El titular del fundo dominante dispone de la vindicatio servitutis (denominada actio confessoria en época justinianea § 21), acción real que se dirige contra el propietario del fundo sirviente o contra cualquier tercero que impida el libre ejercicio de la servidumbre (§ 171).',
      'Mecanismos complementarios cautelares: la denuncia de obra nueva (operis novi nuntiatio) ante el pretor (§ 74) para ordenar la paralización de obras que menoscaben el derecho; el interdicto demolitorio para derribar lo ilícitamente construido; y los interdictos pretorios de agua y paso.'
    ],
    crossReferences: [16, 21, 74, 125, 130, 136, 139, 148, 152, 165, 171, 172],
    latinCitations: [
      'Hoc edicto promittitur, ut, sive iure sive iniuria opus fieret, per nuntiationem inhiberetur (Ulpiano, D. 39,1,1 pr.)'
    ],
    keyFigures: ['Ulpiano', 'Pretor']
  },
  {
    id: 174,
    title: 'Superficie',
    latinTitle: 'Superficies',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 211,
    summary: 'Derecho real que confiere el disfrute a perpetuidad o a largo plazo de un edificio levantado sobre suelo ajeno a cambio del pago de una pensión periódica (solárium).',
    content: [
      'Derecho real sobre cosa ajena (§ 162) que rompe de forma autónoma la rigidez del principio de accesión «superficies solo cedit» (§ 150). Permite a una persona construir y disfrutar plenamente de un edificio sobre suelo propiedad de otro a cambio del abono de un canon anual llamado solarium.',
      'El pretor concedió el interdictum de superficiebus y una actio in rem de superficie (§ 128) transferible inter vivos y mortis causa, asemejándola sustancialmente a la enfiteusis (§ 156).'
    ],
    crossReferences: [21, 23, 27, 30, 61, 73, 128, 130, 150, 156, 162, 183, 186],
    latinCitations: [
      'Superficies solo cedit (Gai. 2,73)'
    ],
    keyFigures: ['Gayo', 'Pretor']
  },
  {
    id: 175,
    title: 'Traditio',
    latinTitle: 'Traditio',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 212,
    summary: 'Modo derivativo no formal de transmitir la propiedad mediante la entrega material de la cosa fundada en una justa causa negocial (iusta causa traditionis).',
    content: [
      'Modo natural y derivativo de adquisición de la propiedad (§ 169) consistente en la puesta a disposición o entrega física de la posesión de una cosa del transmitente al adquirente.',
      'Requisitos imprescindibles para transmitir la propiedad civil: 1. Que la cosa sea res nec mancipi (§ 154; sobre res mancipi sólo transmitía la propiedad pretoria bonitaria § 170); 2. Que el transmitente sea dueño verdadero de la res; 3. Que exista una iusta causa traditionis (causa jurídica válida que justifique la transferencia: compraventa § 186, donación § 155, dote § 90, mutuo § 210, solutio § 191). Modalidades espiritualizadas: traditio longa manu, traditio brevi manu y constitutum possessorium.'
    ],
    crossReferences: [20, 21, 27, 29, 32, 90, 154, 155, 163, 165, 169, 170, 176, 183, 184, 186, 187, 191, 195, 210],
    latinCitations: [
      'Traditio nihil amplius transferre debet vel potest ad eum qui accipit, quam est apud eum qui tradit (D. 41,1,20 pr.)',
      'Numquam nuda traditio transfert dominium, sed ita, si venditio aut aliqua iusta causa praecesserit (Paulo, D. 41,1,31 pr.)'
    ],
    keyFigures: ['Paulo', 'Ulpiano']
  },
  {
    id: 176,
    title: 'Usucapión',
    latinTitle: 'Usucapio',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 214,
    summary: 'Adquisición de la propiedad civil por la posesión continuada en el tiempo con justa causa y buena fe: «possessio per temporis continuationem».',
    content: [
      'Modo de adquisición de la propiedad civil (§ 169) mediante la posesión (§ 165) continuada en el tiempo con los requisitos marcados por el ordenamiento.',
      'Regla dogmática condensada en el hexámetro medieval: «Res habilis, titulus, fides, possessio, tempus». En las XII Tablas (§ 37) y época clásica (§ 20), los plazos eran de un año para bienes muebles y dos años para bienes inmuebles itálicos. Exigía iusta causa usucapionis y buena fe subjetiva inicial (bona fides en el momento de tomar la posesión: «mala fides superveniens non nocet» § 146).'
    ],
    crossReferences: [20, 21, 27, 37, 74, 81, 93, 117, 130, 146, 149, 152, 154, 163, 165, 167, 169, 170, 175, 186, 187],
    latinCitations: [
      'Usucapio est adiectio dominii per continuationem possessionis temporis lege definiti (Modestino, D. 41,3,3)'
    ],
    keyFigures: ['Modestino', 'Cicerón']
  },
  {
    id: 177,
    title: 'Usufructo',
    latinTitle: 'Ususfructus',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 216,
    summary: 'Derecho real sobre cosa ajena de usar y percibir sus frutos salvando la sustancia de la cosa: «ius alienis rebus utendi fruendi salva rerum substantia».',
    content: [
      'El derecho real de disfrute sobre cosa ajena más eminente (§ 162). Paulo (§ 32) formuló su celebérrima definición: «Usus fructus est ius alienis rebus utendi fruendi salva rerum substantia» (D. 7,1,1: el usufructo es el derecho a usar y disfrutar de cosas ajenas salvando su sustancia).',
      'Nació en el siglo II a.C. con una finalidad alimentaria y familiar, para asegurar el sustento de la viuda casada sine manu (§ 104) sin despojar de la propiedad a los hijos herederos (§ 99), quienes retienen la nuda proprietas. Es un derecho estrictamente personalísimo que se extingue indefectiblemente con la muerte del usufructuario.'
    ],
    crossReferences: [20, 21, 32, 97, 99, 102, 104, 108, 110, 154, 155, 162, 165, 166, 169, 171, 178, 179, 180, 183, 186],
    latinCitations: [
      'Usus fructus est ius alienis rebus utendi fruendi salva rerum substantia (Paulo, D. 7,1,1)'
    ],
    keyFigures: ['Paulo', 'Celso']
  },
  {
    id: 178,
    title: 'Usufructo (Constitución y extinción)',
    latinTitle: 'Constitutio et extinctio ususfructus',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 217,
    summary: 'Modo típico de nacer: legado vindicatorio en testamento e in iure cessio. Modos de extinción: muerte, capitis deminutio, consolidación, renuncia y no uso.',
    content: [
      'Modos de constitución: el más frecuente en la práctica romana es el legado vindicatorio (§ 102) mortis causa otorgado por el pater en testamento (§ 120); inter vivos mediante in iure cessio (§ 161) o por deductio en una mancipatio. En provincias (§ 76) mediante pactos y estipulaciones.',
      'Causas de extinción: 1. Muerte o capitis deminutio (§ 84) del usufructuario; 2. Llegada del término acordado; 3. Consolidación (reunión en la misma persona de la condición de usufructuario y nudo propietario); 4. Renuncia formal; 5. Destrucción o mutación sustancial de la cosa (mutatio rei); 6. No uso (non usus) durante los plazos de la usucapión (§ 176).'
    ],
    crossReferences: [21, 23, 76, 84, 97, 99, 102, 104, 119, 120, 136, 141, 148, 151, 153, 154, 161, 162, 165, 166, 171, 176, 177, 179],
    latinCitations: [
      'Ususfructus dupliciter extinguitur, vel morte vel capitis deminutione (Gai. 2,33)'
    ],
    keyFigures: ['Gayo', 'Pretor']
  },
  {
    id: 179,
    title: 'Usufructo (Ejercicio y protección procesal. Cuasi usufructo)',
    latinTitle: 'Cautio usufructuaria / Quasi ususfructus',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 218,
    summary: 'Tutela mediante la vindicatio ususfructus. La cautio usufructuaria garantiza el cuidado diligente (boni viri arbitratu). Régimen del cuasi usufructo de dinero.',
    content: [
      'Para ejercer su derecho, el usufructuario (§ 177) debe prestar obligatoriamente la cautio usufructuaria (§ 130, § 197), promesa estipulatoria con fiadores exigida por el pretor por la que se compromete a usar de la cosa según el arbitrio de un hombre recto (boni viri arbitratu) y a restituirla al término del usufructo.',
      'Protección procesal: vindicatio ususfructus o actio confessoria (§ 128) contra el propietario o perturbador. A comienzos del Principado un senadoconsulto admitió el cuasi usufructo (quasi ususfructus) sobre cosas consumibles o dinero (§ 154), obligando al usufructuario a prestar caución de restituir otro tanto del mismo género y calidad (tantundem eiusdem generis et qualitatis).'
    ],
    crossReferences: [15, 23, 33, 49, 74, 75, 99, 125, 128, 130, 151, 154, 162, 166, 177, 178, 187, 197, 201, 210],
    latinCitations: [
      'Et usurum se boni viri arbitratu et, cum usus fructus ad eum pertinere desinet, restituturum quod inde exstabit (D. 7,9,1 pr.)'
    ],
    keyFigures: ['Ulpiano', 'Pretor']
  },
  {
    id: 180,
    title: 'Usus (Derecho de)',
    latinTitle: 'Usus sine fructu',
    bloqueId: 5,
    bloqueTitle: 'Derechos Reales',
    page: 219,
    summary: 'Derecho real sobre cosa ajena que confiere la facultad de servirse de ella (uti) sin percibir originariamente sus frutos, ampliado por la jurisprudencia para el consumo familiar.',
    content: [
      'Derecho real personalísimo (§ 162) consistente en la facultad de servirse directamente de una cosa ajena sin percibir originariamente sus frutos (usus sine fructu).',
      'La jurisprudencia (§ 33) atemperó su estricta rigidez permitiendo al usuario de un fundo recolectar hortalizas, leña o fruta en la medida estrictamente necesaria para el sustento diario de su persona y su familia. No se puede arrendar ni ceder a terceros.'
    ],
    crossReferences: [20, 21, 25, 33, 154, 159, 162, 177, 183],
    latinCitations: [
      'Cui usus legatus sit, is tantum uti potest, frui non potest (IJ. 2,5,1)'
    ],
    keyFigures: ['Ulpiano', 'Justiniano']
  }
];
