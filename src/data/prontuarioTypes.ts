export interface Paragrafo {
  id: number;
  title: string;
  latinTitle?: string;
  bloqueId: number;
  bloqueTitle: string;
  page: number;
  summary: string;
  content: string[];
  crossReferences: number[];
  latinCitations?: string[];
  keyFigures?: string[];
}

export interface Bloque {
  id: number;
  romanNumeral: string;
  title: string;
  subtitle: string;
  range: [number, number];
  description: string;
  color: string;
}

export const BLOQUES: Bloque[] = [
  {
    id: 1,
    romanNumeral: 'I',
    title: 'Cuestiones Histórico-Jurídicas y de Fuentes',
    subtitle: 'Jurisprudencia, jurisprudentes, leyes, senadoconsultos y compilación',
    range: [1, 54],
    description: 'Abarca las fuentes de producción y conocimiento del Derecho romano, las etapas históricas (antigua, clásica, postclásica y justinianea), los grandes juristas (Gayo, Ulpiano, Papiniano, Paulo, Celso, Labeón, Sabino), el Edicto pretorio y la gran obra del Corpus Iuris Civilis (Digesto, Código, Instituciones, Novelas).',
    color: 'amber',
  },
  {
    id: 2,
    romanNumeral: 'II',
    title: 'Derecho Público',
    subtitle: 'Organización constitucional de la civitas, magistraturas y asambleas',
    range: [55, 78],
    description: 'Estructura política de Roma: Monarquía, República, Principado y Dominado. Magistraturas (Cónsul, Pretor, Censor, Edil, Cuestor), asambleas populares (curias, centurias, tribus, plebe), el Senado, el estatuto de ciudadano, el crimen público y la administración provincial.',
    color: 'red',
  },
  {
    id: 3,
    romanNumeral: 'III',
    title: 'Derecho de Personas, Familia y Sucesiones',
    subtitle: 'Sujetos de derecho, status, patria potestas, herencia y testamento',
    range: [79, 123],
    description: 'Estatuto de las personas (libre/esclavo, sui iuris/alieni iuris, ciudadano/latino/peregrino), matrimonio, dote, adopción, patria potestad y peculio. En derecho sucesorio: herencia testamentaria, sucesión intestada, bonorum possessio pretoria, legados, fideicomisos y sustituciones.',
    color: 'emerald',
  },
  {
    id: 4,
    romanNumeral: 'IV',
    title: 'Derecho Procesal Civil',
    subtitle: 'Acciones de la ley, procedimiento formulario y cognición extraordinaria',
    range: [124, 149],
    description: 'El cauce de realización del Derecho: la actio, el procedimiento formulario clásico (partes de la fórmula, litis contestatio, sentencia del iudex privatus), defensas procesales (exceptio), medios extraordinarios del pretor (interdictos, restitutio in integrum, embargos) y cognición oficial.',
    color: 'blue',
  },
  {
    id: 5,
    romanNumeral: 'V',
    title: 'Derechos Reales',
    subtitle: 'Posesión, propiedad civil y pretoria, y derechos sobre cosa ajena',
    range: [150, 180],
    description: 'Clasificación de las cosas, posesión e interdictos posesorios, propiedad (dominium ex iure Quiritium, in bonis habere), modos de adquisición (mancipatio, traditio, in iure cessio, usucapión, accesión, ocupación), servidumbres prediales, usufructo, enfiteusis y garantías reales (prenda e hipoteca).',
    color: 'indigo',
  },
  {
    id: 6,
    romanNumeral: 'VI',
    title: 'Derecho de Obligaciones',
    subtitle: 'Vínculo jurídico, contratos, delitos, garantías y extinción',
    range: [181, 224],
    description: 'Concepto de obligatio, fuentes de las obligaciones, cumplimiento e incumplimiento (dolo, culpa, custodia, mora), contratos consensuales (compraventa, arrendamiento, sociedad, mandato), contratos reales (mutuo, comodato, depósito), contratos formales (stipulatio), delitos privados (hurto, rapiña, iniuria, damnum) y fianza.',
    color: 'stone',
  },
];

export const ABREVIATURAS: { abbr: string; full: string; desc: string }[] = [
  { abbr: 'ad ed.', full: 'Comentarios al edicto pretorio', desc: 'Comentarios jurisprudenciales al edicto del pretor urbano y peregrino.' },
  { abbr: 'ad ed. aed.', full: 'Comentarios al edicto edilicio', desc: 'Comentarios al edicto de los ediles curules.' },
  { abbr: 'ad Sab.', full: 'Comentarios a Sabino', desc: 'Comentarios a la obra de ius civile de Masurio Sabino.' },
  { abbr: 'D.', full: 'Digesto de Justiniano', desc: 'Antología de fragmentos jurisprudenciales clásicos promulgada en 533 d.C.' },
  { abbr: 'C.J.', full: 'Código de Justiniano', desc: 'Colección de constituciones imperiales recopiladas por orden de Justiniano.' },
  { abbr: 'Gai.', full: 'Instituciones de Gayo', desc: 'Manual pedagógico del jurista clásico Gayo (aprox. 161 d.C.).' },
  { abbr: 'IJ.', full: 'Instituciones de Justiniano', desc: 'Manual institucional oficial de enseñanza promulgado en 533 d.C.' },
  { abbr: 'Nov.', full: 'Novelas de Justiniano', desc: 'Leyes promulgadas por Justiniano tras la segunda edición del Código.' },
  { abbr: 'C.Th.', full: 'Código Teodosiano', desc: 'Compilación oficial de constituciones imperiales promulgada en 438 d.C.' },
  { abbr: 'Paul.', full: 'Julio Paulo', desc: 'Jurista tardoclásico autor de un amplísimo repertorio doctrinal y procesal.' },
  { abbr: 'Ulp.', full: 'Domicio Ulpiano', desc: 'Gran jurista tardoclásico, redactor del grueso de los textos del Digesto.' },
  { abbr: 'Pap.', full: 'Emilio Papiniano', desc: 'Cúspide de la jurisprudencia romana, príncipe de los juristas en la Ley de Citas.' },
  { abbr: 'Mod.', full: 'Herennio Modestino', desc: 'Último de los cinco juristas autorizados por la Ley de Citas de 426 d.C.' },
  { abbr: 'XII Tab.', full: 'Ley de las XII Tablas', desc: 'Primer código escrito de Roma (aprox. 450 a.C.).' },
  { abbr: 'Cic.', full: 'Cicerón', desc: 'Orador y filósofo romano cuyas obras contienen valiosísima información procesal.' },
];
