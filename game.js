// ═══════════════════════════════════════════════════════════
// CASO 1 — PortoGroup S.A.
// Alimentos & Bebidas · LatAm
// Números diseñados para práctica (distintos a DigitalCo)
// ═══════════════════════════════════════════════════════════
const CASES = [
{
  id:0,
  icon:'🥤', color:'#00D4C8', color2:'#4CC9F0',
  name:'Empresa 1',
  sector:'Alimentos & Bebidas', sectorDetail:'Consumo masivo · LatAm',
  tagline:'Grupo alimentario líder en LatAm con 3 marcas icónicas. ¿Crea valor operativo para sus accionistas? Hacé el análisis completo de principio a fin.',
  stats:[{val:'$16,000M',lbl:'Revenue'},{val:'10.5%',lbl:'Margen NOPAT'},{val:'12%',lbl:'WACC'}],

  // ── Estado de Resultados ────────────────────────────────
  revenue:16000, cogs:10400,
  grossProfit:5600, grossMargin:35.0,
  sga:2400, da:800,
  ebit:2400, ebitMargin:15.0,
  tax:30,
  nopat:1680, nopatMargin:10.5,

  // ── Balance Operativo ────────────────────────────────────
  ar:1600,          // Cuentas por Cobrar (AO corriente)
  inventory:1280,   // Inventario         (AO corriente)
  totalAO:2880,     // Total Activos Operativos corrientes

  ap:1710,          // Cuentas por Pagar  (PO corriente)
  accrued:570,      // Devengados / Otros PO
  totalPO:2280,     // Total Pasivos Operativos corrientes

  // ── Capital Invertido ────────────────────────────────────
  nof:600,          // NOF = totalAO − totalPO
  afn:6400,         // Activo Fijo Neto (PP&E neto)
  ain:1000,         // Activo Intangible Neto
  ci:8000,          // CI = NOF + AFN + AIN
  prevCI:7000,      // CI año anterior
  invNeta:1000,     // ΔCI = CI − prevCI

  // ── Retorno ─────────────────────────────────────────────
  rotacion:2.0,     // Revenue / CI
  roic:21.0,        // NOPAT / CI × 100
  wacc:12,
  spread:9.0,       // ROIC − WACC
  eva:720,          // Spread × CI / 100

  // ── Ciclo de Conversión de Caja ─────────────────────────
  dso:36.5,         // AR × 365 / Revenue
  dio:44.9,         // Inv × 365 / COGS
  dpo:60.0,         // AP × 365 / COGS
  ccc:21.4,         // DSO + DIO − DPO

  // ── Flujo de Fondos ──────────────────────────────────────
  ffl:680,          // NOPAT − ΔCI

  // ── Estructura Financiera ────────────────────────────────
  actFin:800,       // Activos financieros (Caja + Inversiones)
  deudaFin:2400,    // Deuda financiera total
  shares:100,       // Acciones en circulación

  verdict:'creadora'
},
// ═══════════════════════════════════════════════════════════
// CASO 2 — NortelFab S.A.
// Manufactura Industrial · Argentina
// Números diseñados para clasificación de cuentas + análisis
// ═══════════════════════════════════════════════════════════
{
  id:1,
  icon:'🏭', color:'#F59E0B', color2:'#F97316',
  name:'Empresa 2',
  sector:'Manufactura Industrial', sectorDetail:'Bienes de capital · Argentina',
  tagline:'Fabricante industrial con estructura de capital compleja. Clasificá sus cuentas, separá lo operativo de lo financiero, y determiná si crea valor económico.',
  stats:[{val:'$24,000M',lbl:'Revenue'},{val:'12.0%',lbl:'Margen NOPAT'},{val:'10%',lbl:'WACC'}],

  // ── Estado de Resultados ────────────────────────────────
  revenue:24000, cogs:15600,
  grossProfit:8400, grossMargin:35.0,
  nomina:2400,      // Gastos de nómina (separado en P&L)
  otrosSga:800,     // Otros gastos operativos
  sga:3200,         // Total SG&A = nomina + otrosSga
  da:1200,
  ebit:4000, ebitMargin:16.7,
  tax:28,
  nopat:2880, nopatMargin:12.0,

  // ── Balance Operativo ────────────────────────────────────
  ar:3000,           // Cuentas por Cobrar (AO corriente)
  inventory:2500,    // Inventario         (AO corriente)
  anticipo:500,      // Anticipo a proveedores (AO corriente)
  totalAO:6000,

  ap:3000,           // Cuentas por Pagar  (PO corriente)
  nominaPagar:800,   // Nómina a pagar     (PO corriente)
  ingDif:1000,       // Ingresos diferidos (PO corriente)
  totalPO:4800,

  // ── Activos de LP ────────────────────────────────────────
  ppeBruto:18000, ppeAcumDep:6000, afn:12000,
  ainBruto:3500,  ainAcumAmort:700, ain:2800,

  // ── Activos / Pasivos Financieros ────────────────────────
  caja:2000, invFinLP:800, actFin:2800,
  deudaCP:500, deudaLP:2000, lease:1000, deudaFin:3500,

  // ── Capital Invertido ────────────────────────────────────
  nof:1200,
  ci:16000, prevCI:14500, invNeta:1500,

  // ── Retorno ─────────────────────────────────────────────
  rotacion:1.5,
  roic:18.0,
  wacc:10,
  spread:8.0,
  eva:1280,

  // ── Ciclo de Conversión de Caja ─────────────────────────
  dso:45.6, dio:58.5, dpo:70.2, ccc:33.9,

  // ── Flujo de Fondos ──────────────────────────────────────
  ffl:1380,

  shares:80,
  verdict:'creadora',
  classifyItems:[
    {id:'cash',     label:'Caja y equivalentes',        val:'$2,000M',  correct:'AF', tricky:true,
     tip:'El exceso de caja no surge del ciclo operativo: es un activo financiero, no operativo.'},
    {id:'ar',       label:'Cuentas por Cobrar (CxC)',   val:'$3,000M',  correct:'AO', tricky:false, tip:''},
    {id:'inv',      label:'Inventario',                 val:'$2,500M',  correct:'AO', tricky:false, tip:''},
    {id:'anticipo', label:'Anticipo a proveedores',     val:'$500M',    correct:'AO', tricky:true,
     tip:'Es parte del ciclo operativo: pagás antes para asegurarte materiales — activo operativo.'},
    {id:'ppe',      label:'PP&E neto (Activo Fijo)',    val:'$12,000M', correct:'AO', tricky:false, tip:''},
    {id:'ain',      label:'Intangibles netos',          val:'$2,800M',  correct:'AO', tricky:false, tip:''},
    {id:'invfinlp', label:'Inversiones financieras LP', val:'$800M',    correct:'AF', tricky:true,
     tip:'No genera resultado operativo. Es una inversión de excedentes — activo financiero.'},
    {id:'ap',       label:'Cuentas por Pagar (CxP)',   val:'$3,000M',  correct:'PO', tricky:false, tip:''},
    {id:'nompaG',   label:'Nómina a pagar',             val:'$800M',    correct:'PO', tricky:true,
     tip:'Salarios devengados pero no pagados → obligación del ciclo operativo → pasivo operativo.'},
    {id:'ingdif',   label:'Ingresos diferidos',         val:'$1,000M',  correct:'PO', tricky:true,
     tip:'Obligación de entregar productos/servicios futuros. Surge del negocio → pasivo operativo.'},
    {id:'deudacp',  label:'Deuda bancaria corto plazo', val:'$500M',    correct:'PF', tricky:false, tip:''},
    {id:'deudalp',  label:'Deuda bancaria largo plazo', val:'$2,000M',  correct:'PF', tricky:false, tip:''},
    {id:'lease',    label:'Lease financiero (IFRS 16)', val:'$1,000M',  correct:'PF', tricky:true,
     tip:'Bajo IFRS 16, los arrendamientos se capitalizan como deuda financiera — pasivo financiero.'}
  ],

  // Paso 2: clasificar cuentas operativas como NOF / AFN / AIN (componentes del CI)
  classifyNofItems:[
    {id:'ar_ci',       label:'Cuentas por Cobrar (CxC)',  val:'$3,000M',  correct:'NOF', tricky:false, tip:''},
    {id:'inv_ci',      label:'Inventario',                val:'$2,500M',  correct:'NOF', tricky:false, tip:''},
    {id:'anticipo_ci', label:'Anticipo a proveedores',    val:'$500M',    correct:'NOF', tricky:true,
     tip:'AO corriente → entra en el bloque NOF. Como reduce el efectivo disponible antes de recibir los materiales, es capital de trabajo operativo.'},
    {id:'ap_ci',       label:'Cuentas por Pagar (CxP)',   val:'$3,000M',  correct:'NOF', tricky:false, tip:''},
    {id:'nompa_ci',    label:'Nómina a pagar',            val:'$800M',    correct:'NOF', tricky:true,
     tip:'PO corriente → reduce el NOF que debemos fondear. Es financiamiento "gratuito" de los empleados.'},
    {id:'ingdif_ci',   label:'Ingresos diferidos',        val:'$1,000M',  correct:'NOF', tricky:true,
     tip:'PO corriente → reduce el capital operativo que la empresa debe financiar. Va al NOF.'},
    {id:'ppe_ci',      label:'PP&E neto (Activo Fijo)',   val:'$12,000M', correct:'AFN', tricky:false, tip:''},
    {id:'ain_ci',      label:'Intangibles netos',         val:'$2,800M',  correct:'AIN', tricky:false, tip:''}
  ]
},
// ═══════════════════════════════════════════════════════════
// CASO 3 — Costco Wholesale FY2024
// Real Capital IQ data · Análisis integrador completo
// ¿Cuánto invirtió? → ¿En qué? → ¿Resultado? → ¿Rentabilidad? → ¿Flujo?
// ═══════════════════════════════════════════════════════════
{
  id:2,
  icon:'🛒', color:'#E63946', color2:'#FF6B6B',
  name:'Costco',
  sector:'Retail de Membresías', sectorDetail:'FY2024 · Datos reales Capital IQ',
  tagline:'El retailer más eficiente del mundo con margen neto de 2.75%. ¿Cómo genera un ROIC del 25%? Clasificá sus cuentas, calculá el Capital Invertido y descubrí la paradoja de Costco.',
  stats:[{val:'$254,453M',lbl:'Revenue'},{val:'2.75%',lbl:'Margen NOPAT'},{val:'9%',lbl:'WACC'}],

  // ── Estado de Resultados FY2024 ──────────────────────────
  revenue:254453, cogs:222358,
  grossProfit:32095, grossMargin:12.6,
  sga:22810,         // D&A está embebido en COGS + SGA
  ebit:9285, ebitMargin:3.6,
  da:2431,           // D&A proporcionado por separado (para EBITDA)
  ebitda:11716, ebitdaMargin:4.6,
  tax:24.5,
  nopat:7010, nopatMargin:2.75,
  netIncome:7367,    // Resultado neto (para ROE)

  // ── Balance Operativo ────────────────────────────────────
  ar:2721,           // Cuentas por Cobrar (AO corriente)
  inventory:18647,   // Inventario          (AO corriente)
  totalAO:21368,

  ap:19421,          // Cuentas por Pagar    (PO corriente)
  accrued:7229,      // Gastos devengados    (PO corriente)
  membershipFees:2501, // Cuotas diferidas   (PO corriente) ← clave pedagógica
  totalPO:29151,

  // ── Capital Invertido ────────────────────────────────────
  nof:-7783,         // NOF = totalAO − totalPO (¡NEGATIVO! ventaja competitiva)
  ppeBruto:51000, ppeAcumDep:17918, afn:33082,
  ain:865,           // Goodwill e intangibles netos
  otrosNeto:1836,    // Otros activos operativos netos
  ci:28000,
  prevCI:26000,      // CI año anterior (FY2023)
  invNeta:2000,      // ΔCI = CI − prevCI

  // ── Retorno ─────────────────────────────────────────────
  rotacion:9.09,     // Revenue / CI = 254,453 / 28,000
  roa:12.6,          // EBIT / Total Assets = 9,285 / 73,473
  roe:31.2,          // Net Income / PN = 7,367 / 23,622
  roic:25.0,         // NOPAT / CI = Margen × Rotación = 2.75% × 9.09x
  wacc:9,
  spread:16.0,
  eva:4480,

  // ── Ciclo de Conversión de Caja ─────────────────────────
  dso:3.9,           // 2721×365/254453  ← casi cero (pago en caja/tarjeta)
  dio:30.6,          // 18647×365/222358
  dpo:31.9,          // 19421×365/222358
  ccc:2.6,           // DSO + DIO − DPO  ← levemente positivo, pero NOF negativo!

  // ── Flujo de Fondos ──────────────────────────────────────
  ffl:5010,          // NOPAT − ΔCI = 7010 − 2000

  // ── Balance Adicional ────────────────────────────────────
  caja:9906, stInv:1488, actFin:11394,
  deudaLP:5783, cpDebt:1081, deudaFin:6864,
  totalAssets:73473, pn:23622,

  verdict:'creadora',
  classifyItems:[
    {id:'cash',    label:'Caja y equivalentes',             val:'$9,906M',  correct:'AF', tricky:true,
     tip:'Caja excedente: no surge del ciclo operativo. Es el "colchón" financiero de Costco para expansión.'},
    {id:'ar',      label:'Cuentas por Cobrar (CxC)',        val:'$2,721M',  correct:'AO', tricky:false, tip:''},
    {id:'inv',     label:'Inventario (mercadería)',         val:'$18,647M', correct:'AO', tricky:false, tip:''},
    {id:'ppe',     label:'PP&E neto (tiendas + depósitos)', val:'$33,082M', correct:'AO', tricky:false, tip:''},
    {id:'goodwill',label:'Goodwill e intangibles netos',   val:'$865M',    correct:'AO', tricky:true,
     tip:'El goodwill surge de adquisiciones operativas → activo intangible operativo (AIN).'},
    {id:'stinv',   label:'Inversiones financieras CP',     val:'$1,488M',  correct:'AF', tricky:false, tip:''},
    {id:'ap',      label:'Cuentas por Pagar (CxP)',        val:'$19,421M', correct:'PO', tricky:false, tip:''},
    {id:'accrued', label:'Gastos devengados (accrued)',    val:'$7,229M',  correct:'PO', tricky:false, tip:''},
    {id:'member',  label:'Cuotas de membresía diferidas',  val:'$2,501M',  correct:'PO', tricky:true,
     tip:'Ingresos cobrados por adelantado → obligación de dar acceso al club → pasivo operativo. Esta cuenta es la clave del modelo de negocio.'},
    {id:'ltdebt',  label:'Deuda financiera LP',            val:'$5,783M',  correct:'PF', tricky:false, tip:''}
  ]
},
// ═══════════════════════════════════════════════════════════
// CASO 4 — LatiCommerce S.A.
// E-Commerce · Latinoamérica
// Inspirado en Mercado Libre / Nubank · Ciclo de caja negativo
// Números pedagógicos: NOF negativo, expansión agresiva, FFL bajo
// ═══════════════════════════════════════════════════════════
{
  id:3,
  icon:'📦', color:'#10B981', color2:'#34D399',
  name:'LatiCommerce',
  sector:'E-Commerce & Fintech', sectorDetail:'Marketplace + pagos · LatAm',
  tagline:'El marketplace líder de LatAm con brazo fintech integrado. Con márgenes ajustados y NOF negativo, ¿logra crear valor económico? Hacé el análisis completo.',
  stats:[{val:'$8,400M',lbl:'Revenue'},{val:'9.5%',lbl:'Margen NOPAT'},{val:'14%',lbl:'WACC'}],

  // ── Estado de Resultados ────────────────────────────────
  revenue:8400, cogs:5040,
  grossProfit:3360, grossMargin:40.0,
  sga:1680, da:420,
  ebit:1260, ebitMargin:15.0,
  tax:25,
  nopat:945, nopatMargin:11.25,   // 1260 × 0.75

  // ── Balance Operativo ────────────────────────────────────
  ar:350,           // CxC muy bajos (pago en plataforma, casi inmediato)
  inventory:0,      // Marketplace puro: sin inventario propio
  totalAO:350,

  ap:1400,          // Proveedores (vendedores del marketplace) pagan tarde
  accrued:490,      // Devoluciones diferidas + cuotas fintech pendientes
  totalPO:1890,     // PO >> AO → NOF negativo

  // ── Capital Invertido ────────────────────────────────────
  nof:-1540,        // NOF = 350 − 1890 (modelo: proveedores financian todo)
  afn:2800,         // Data centers + logística propia
  ain:1400,         // Plataforma tecnológica + marca
  ci:2660,          // CI = NOF + AFN + AIN = -1540 + 2800 + 1400
  prevCI:2200,      // CI año anterior
  invNeta:460,      // ΔCI = 2660 − 2200

  // ── Retorno ─────────────────────────────────────────────
  rotacion:3.16,    // Revenue / CI = 8400 / 2660
  roic:35.5,        // NOPAT / CI × 100 = 945 / 2660 = 35.5%
  wacc:14,
  spread:21.5,      // ROIC − WACC
  eva:572,          // Spread × CI / 100 = 21.5 × 2660 / 100

  // ── Ciclo de Conversión de Caja ─────────────────────────
  dso:15.2,         // 350 × 365 / 8400 (cobro rápido: tarjeta/wallet)
  dio:0.0,          // Sin inventario propio
  dpo:101.4,        // 1400 × 365 / 5040 (paga tarde a vendedores)
  ccc:-86.2,        // DSO + DIO − DPO = 15.2 + 0 − 101.4

  // ── Flujo de Fondos ──────────────────────────────────────
  ffl:485,          // NOPAT − ΔCI = 945 − 460

  // ── Estructura Financiera ────────────────────────────────
  actFin:1200,
  deudaFin:2800,
  shares:120,

  verdict:'creadora'
},
// ═══════════════════════════════════════════════════════════
// CASO 5 — PharmaCore S.A.
// Farmacéutica · Alto margen, capex intensivo
// Inspirado en Merck / Novo Nordisk · Impacto de adquisiciones en ROIC
// Números pedagógicos: spread positivo pero EVA comprimido por CI alto
// ═══════════════════════════════════════════════════════════
{
  id:4,
  icon:'💊', color:'#8B5CF6', color2:'#A78BFA',
  name:'PharmaCore',
  sector:'Farmacéutica', sectorDetail:'Innovación terapéutica · Global',
  tagline:'Laboratorio con pipeline de oncología y diabetes. Alta rentabilidad de margen, pero ¿el capital invertido en I+D y patentes destruye o crea valor? Analizá el ROIC vs WACC.',
  stats:[{val:'$12,000M',lbl:'Revenue'},{val:'22.5%',lbl:'Margen NOPAT'},{val:'9%',lbl:'WACC'}],

  // ── Estado de Resultados ────────────────────────────────
  // GP: 8400/12000=70% · SGA inclye I+D · EBIT: 3000/12000=25% · NOPAT=3000×0.75=2250
  revenue:12000, cogs:3600,
  grossProfit:8400, grossMargin:70.0,
  sga:4560, da:840,
  ebit:3000, ebitMargin:25.0,
  tax:25,
  nopat:2250, nopatMargin:18.75,

  // ── Balance Operativo ────────────────────────────────────
  ar:1800,          // CxC (hospitales y distribuidores pagan a 55 días)
  inventory:1200,   // Stock de materia prima + producto terminado
  totalAO:3000,

  ap:1500,          // CxP (pago a proveedores a 45 días)
  accrued:700,      // Pasivos devengados (royalties, sueldos I+D)
  totalPO:2200,

  // ── Capital Invertido ────────────────────────────────────
  nof:800,          // NOF = 3000 − 2200
  afn:9000,         // Plantas de manufactura + equipos de alta precisión
  ain:6200,         // Patentes + goodwill de adquisiciones previas
  ci:16000,         // CI = 800 + 9000 + 6200
  prevCI:14500,     // CI año anterior (adquisición reciente → CI sube fuerte)
  invNeta:1500,     // ΔCI = 16000 − 14500

  // ── Retorno ─────────────────────────────────────────────
  rotacion:0.75,    // Revenue / CI = 12000 / 16000
  roic:14.1,        // NOPAT / CI × 100 = 2250 / 16000 = 14.06 ≈ 14.1%
  wacc:9,
  spread:5.1,       // ROIC − WACC
  eva:816,          // 5.1% × 16000 / 100

  // ── Ciclo de Conversión de Caja ─────────────────────────
  dso:54.8,         // 1800 × 365 / 12000
  dio:121.7,        // 1200 × 365 / 3600
  dpo:136.4,        // 1500 × 365 / 3600 (pago lento a proveedores)
  ccc:40.1,         // DSO + DIO − DPO = 54.8 + 121.7 − 136.4

  // ── Flujo de Fondos ──────────────────────────────────────
  ffl:750,          // NOPAT − ΔCI = 2250 − 1500

  // ── Estructura Financiera ────────────────────────────────
  actFin:2000,
  deudaFin:5500,
  shares:200,

  verdict:'creadora'
}
];

// ═══════════════════════════════════════════════════════════
// DIFICULTAD
// ═══════════════════════════════════════════════════════════
const DIFF_KEYS = ['facil','intermedio','avanzado'];
const DIFFICULTY = {
  facil:      {label:'📗 Fácil',      maxAttempts:5, formulaOpen:true,  hideFormula:false, hints:true,  multiplier:1.0, showSolution:true},
  intermedio: {label:'📙 Intermedio', maxAttempts:3, formulaOpen:false, hideFormula:false, hints:true,  multiplier:1.5, showSolution:true},
  avanzado:   {label:'📕 Avanzado',   maxAttempts:2, formulaOpen:false, hideFormula:true,  hints:false, multiplier:2.0, showSolution:false}
};
const cardDifficulty = [1, 1, 1, 1, 1]; // default: intermedio

function getDiffDesc(idx, caseId) {
  if (caseId === 4) return [
    '17 pasos · PharmaCore · Alto margen + CI intensivo · Fórmulas visibles · 5 intentos',
    '17 pasos · PharmaCore · Análisis completo · Fórmulas al clic · 3 intentos',
    '17 pasos · Sin fórmulas ni pistas · 2 intentos · ×2 puntos'
  ][idx] || '';
  if (caseId === 3) return [
    '13 pasos · LatiCommerce · NOF y CCC negativos · Fórmulas visibles · 5 intentos',
    '15 pasos · LatiCommerce · E-commerce + fintech · Fórmulas al clic · 3 intentos',
    '16 pasos · Sin fórmulas ni pistas · 2 intentos · ×2 puntos'
  ][idx] || '';
  if (caseId === 2) return [
    '21 pasos · Costco real · Clasificación + análisis integrador · Fórmulas visibles · 5 intentos',
    '21 pasos · Costco real · Análisis integrador · Fórmulas al clic · 3 intentos',
    '21 pasos · Sin fórmulas ni pistas · 2 intentos · ×2 puntos'
  ][idx] || '';
  if (caseId === 1) return [
    '18 pasos · Clasificación de cuentas + análisis · Fórmulas visibles · 5 intentos',
    '18 pasos · Clasificación de cuentas + análisis · Fórmulas al clic · 3 intentos',
    '18 pasos · Sin fórmulas ni pistas · 2 intentos · ×2 puntos'
  ][idx] || '';
  return [
    '14 pasos · Fórmulas visibles · Pistas disponibles · 5 intentos',
    '16 pasos · Fórmulas al hacer clic · Pistas · 3 intentos',
    '17 pasos · Sin fórmulas ni pistas · 2 intentos · ×2 puntos'
  ][idx] || '';
}

// ═══════════════════════════════════════════════════════════
// SECUENCIA DE PASOS POR DIFICULTAD
// fácil      (14): sin EBIT independiente, sin Spread
// intermedio (16): + EBIT + Spread
// avanzado   (17): + EBIT + Margen EBIT + Spread
// ═══════════════════════════════════════════════════════════
function getStepSequence(diffKey, caseId) {
  // Caso 5 — PharmaCore: 17 pasos (alto margen, bajo ROIC por CI intensivo)
  if (caseId === 4) return [
    'grossProfit', 'margenBruto', 'ebit',
    'nopat', 'margenNopat',
    'nof', 'ci', 'mc_pharma_ci_alto',
    'rotacion', 'roic', 'spread', 'eva',
    'mc_pharma_adquisicion',
    'dso', 'dio', 'dpo', 'ccc',
    'ffl', 'mc_pharma_ffl'
  ];
  // Caso 4 — LatiCommerce: NOF negativo, CCC negativo, DIO=0, sin inventario
  if (caseId === 3) return [
    'grossProfit', 'margenBruto', 'ebit',
    'nopat', 'margenNopat',
    'nof', 'mc_lati_nof_sign',
    'ci', 'rotacion', 'roic', 'spread', 'eva',
    'dso', 'dpo', 'ccc', 'mc_lati_ccc_sign',
    'ffl', 'mc_lati_decision'
  ];
  // Caso 3 — Costco: 21 pasos, estructura temática (¿cuánto? ¿en qué? ¿resultado? ¿rentabilidad? ¿flujo?)
  if (caseId === 2) return [
    'classifyAccounts',
    'nof','ci','deltaAN',
    'grossProfit','margenBruto',
    'ebit','ebitda','nopat','margenNopat',
    'rotacion','roa','roe','roic','spread','eva',
    'dso','dio','dpo','ccc',
    'ffl',
    'mc_costco_paradoja','mc_costco_nof','mc_costco_modelo'
  ];
  // Caso 2 — NortelFab: siempre 18 pasos (la dificultad afecta intentos/fórmulas, no la secuencia)
  if (caseId === 1) return [
    'classifyAccounts', 'classifyNofAfnAin',
    'grossProfit','margenBruto',
    'ebit','margenEbit',
    'nopat','margenNopat',
    'nof','ci','rotacion','roic','spread','eva',
    'dso','dio','dpo','ccc','ffl',
    'mc_nortel_dpo','mc_nortel_eva'
  ];
  // Caso 1 — PortoGroup (fácil=14, intermedio=16, avanzado=17)
  const base = [
    'grossProfit', 'margenBruto',
    'nopat', 'margenNopat',
    'nof', 'ci', 'rotacion', 'roic', 'eva',
    'dso', 'dio', 'dpo', 'ccc', 'ffl'
  ];
  if (diffKey === 'intermedio') {
    const s = [...base];
    s.splice(2, 0, 'ebit');
    s.splice(10, 0, 'spread');
    return s;
  }
  if (diffKey === 'avanzado') {
    const s = [...base];
    s.splice(2, 0, 'ebit');
    s.splice(3, 0, 'margenEbit');
    s.splice(11, 0, 'spread');
    return s;
  }
  return base;
}

function getClassBadge(stepId) {
  const map = {
    grossProfit:'📚 Clase 3 · EEFF',  margenBruto:'📚 Clase 3 · EEFF',
    ebit:'📚 Clase 3 · EEFF',         margenEbit:'📚 Clase 3 · EEFF',
    nopat:'📚 Clase 4 · NOPAT',       margenNopat:'📚 Clase 4 · NOPAT',
    nof:'📚 Clase 4 · Capital',        ci:'📚 Clase 4 · Capital',
    rotacion:'📚 Clase 4 · ROIC',     roic:'📚 Clase 4 · ROIC',
    spread:'📚 Clase 4 · EVA',        eva:'📚 Clase 4 · EVA',
    dso:'📚 Clase 4 · CCC',           dio:'📚 Clase 4 · CCC',
    dpo:'📚 Clase 4 · CCC',           ccc:'📚 Clase 4 · CCC',
    ffl:'📚 Clase 4 · Flujo de Fondos',
    classifyAccounts:'📚 Clase 4 · Clasificación',
    classifyNofAfnAin:'📚 Clase 4 · Capital Invertido'
  };
  // Caso 3 — Costco: badges temáticos
  if (state.currentCase && state.currentCase.id === 2) {
    const t3 = {
      classifyAccounts: '🏗️ Estructura del negocio',
      nof: '🧩 Bloque 1 · ¿En qué invirtió?',   ci: '🧩 Bloque 1 · ¿Cuánto invirtió?',
      deltaAN: '🧩 Bloque 1 · Inversión del período',
      grossProfit: '📊 Bloque 2 · ¿Cuál es el resultado?', margenBruto: '📊 Bloque 2 · ¿Cuál es el resultado?',
      ebit: '📊 Bloque 2 · ¿Cuál es el resultado?',       ebitda: '📊 Bloque 2 · ¿Cuál es el resultado?',
      nopat: '📊 Bloque 2 · ¿Cuál es el resultado?',      margenNopat: '📊 Bloque 2 · ¿Cuál es el resultado?',
      rotacion: '💰 Bloque 3 · ¿Cuál es la rentabilidad?', roa: '💰 Bloque 3 · ¿Cuál es la rentabilidad?',
      roe: '💰 Bloque 3 · ¿Cuál es la rentabilidad?',     roic: '💰 Bloque 3 · ¿Cuál es la rentabilidad?',
      spread: '💰 Bloque 3 · ¿Cuál es la rentabilidad?',  eva: '💰 Bloque 3 · ¿Cuál es la rentabilidad?',
      dso: '⏱️ Bloque 4 · Eficiencia del capital',        dio: '⏱️ Bloque 4 · Eficiencia del capital',
      dpo: '⏱️ Bloque 4 · Eficiencia del capital',        ccc: '⏱️ Bloque 4 · Eficiencia del capital',
      ffl: '💸 Bloque 5 · ¿Cuánto flujo generó?'
    };
    return t3[stepId] || '📚 Análisis Integrador · Costco FY2024';
  }
  return map[stepId] || '📚 Finanzas Corporativas';
}

// ═══════════════════════════════════════════════════════════
// ESTADO
// ═══════════════════════════════════════════════════════════
let state = {
  currentCase:null, currentStep:0, score:0,
  difficulty:DIFFICULTY.intermedio, diffKey:'intermedio',
  steps:[], stepAttempts:[], stepScores:[], notebook:{}
};

// ═══════════════════════════════════════════════════════════
// NAVEGACIÓN
// ═══════════════════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active'); s.style.display='none';
  });
  const el = document.getElementById(id);
  el.style.display = 'flex';
  requestAnimationFrame(() => el.classList.add('active'));
}
function showHome() { renderHome(); showScreen('homeScreen'); }
function confirmBack() {
  if (state.currentStep > 0) {
    if (!confirm('¿Salir? Perderás el progreso actual.')) return;
  }
  showHome();
}

// ═══════════════════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════════════════
function selectDiff(caseId, diffIdx) {
  cardDifficulty[caseId] = diffIdx;
  document.getElementById(`diffSel${caseId}`).querySelectorAll('.diff-pill')
    .forEach((b,i) => b.classList.toggle('active', i===diffIdx));
  document.getElementById(`diffDesc${caseId}`).textContent = getDiffDesc(diffIdx, caseId);
}

function renderHome() {
  document.getElementById('casesGrid').innerHTML = CASES.map(c => `
    <div class="case-card" style="--accent-color:${c.color};--accent-color2:${c.color2}">
      <span class="case-icon">${c.icon}</span>
      <div class="case-meta"><span class="case-name">${c.name}</span></div>
      <div class="case-sector">${c.sector} · <span style="opacity:.7">${c.sectorDetail}</span></div>
      <div class="case-tagline">${c.tagline}</div>
      <div class="case-stats">${c.stats.map(s=>`
        <div class="case-stat">
          <div class="val">${s.val}</div>
          <div class="lbl">${s.lbl}</div>
        </div>`).join('')}
      </div>
      <div style="font-size:.72rem;color:var(--muted);margin:14px 0 4px;font-weight:600;letter-spacing:.04em;text-transform:uppercase">Dificultad</div>
      <div class="diff-selector" id="diffSel${c.id}" onclick="event.stopPropagation()">
        <button class="diff-pill dp-f ${cardDifficulty[c.id]===0?'active':''}" onclick="selectDiff(${c.id},0)">📗 Fácil</button>
        <button class="diff-pill dp-a ${cardDifficulty[c.id]===1?'active':''}" onclick="selectDiff(${c.id},1)">📙 Intermedio</button>
        <button class="diff-pill dp-s ${cardDifficulty[c.id]===2?'active':''}" onclick="selectDiff(${c.id},2)">📕 Avanzado</button>
      </div>
      <div class="diff-desc" id="diffDesc${c.id}">${getDiffDesc(cardDifficulty[c.id], c.id)}</div>
      <button class="btn-start"
        style="background:linear-gradient(135deg,${c.color},${c.color2})"
        onclick="startCase(${c.id})">
        Iniciar análisis →
      </button>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════
// INICIAR CASO
// ═══════════════════════════════════════════════════════════
function startCase(id) {
  const diffKey = DIFF_KEYS[cardDifficulty[id]];
  state.difficulty = DIFFICULTY[diffKey];
  state.diffKey    = diffKey;
  state.steps      = getStepSequence(diffKey, id);
  state.currentCase= CASES[id];
  state.currentStep= 0;
  state.score      = 0;
  state.stepAttempts = state.steps.map(() => 0);
  state.stepScores   = state.steps.map(() => 0);
  state.notebook   = {};

  const c = state.currentCase;
  document.getElementById('hdrIcon').textContent = c.icon;
  document.getElementById('hdrName').textContent = c.name;
  document.getElementById('resIcon').textContent = c.icon;
  document.getElementById('resName').textContent = c.name;

  const hdrDiff = document.getElementById('hdrDiff');
  const D = state.difficulty;
  hdrDiff.textContent = D.label;
  hdrDiff.style.cssText = D === DIFFICULTY.facil
    ? 'background:rgba(34,197,94,.12);color:#22C55E;border:1px solid rgba(34,197,94,.3);padding:3px 10px;border-radius:20px;font-size:.68rem;font-weight:700'
    : D === DIFFICULTY.intermedio
    ? 'background:rgba(245,197,24,.12);color:#F5C518;border:1px solid rgba(245,197,24,.3);padding:3px 10px;border-radius:20px;font-size:.68rem;font-weight:700'
    : 'background:rgba(239,68,68,.12);color:#EF4444;border:1px solid rgba(239,68,68,.3);padding:3px 10px;border-radius:20px;font-size:.68rem;font-weight:700';

  document.getElementById('headerScore').textContent = '0';
  renderDataRoom();
  renderNotebook();
  renderProgressDots();
  renderStep();
  showScreen('gameScreen');
}

// ═══════════════════════════════════════════════════════════
// DATA ROOM — ilumina la sección relevante al paso actual
// ═══════════════════════════════════════════════════════════
function renderDataRoom() {
  const c   = state.currentCase;
  const sid = state.steps[state.currentStep] || '';

  if (c.id === 4) { renderDataRoomCase5(c, sid); return; }
  if (c.id === 3) { renderDataRoomCase4(c, sid); return; }
  if (c.id === 2) { renderDataRoomCase3(c, sid); return; }
  if (c.id === 1) { renderDataRoomCase2(c, sid); return; }

  const hlER  = ['grossProfit','margenBruto','ebit','margenEbit','nopat','margenNopat'].includes(sid);
  const hlWC  = ['nof','dso','dio','dpo','ccc'].includes(sid);
  const hlLP  = ['ci','rotacion','roic','spread','eva','ffl'].includes(sid);

  document.getElementById('dataRoom').innerHTML = `
    <div class="dr-title">📊 Data Room — ${c.name}</div>

    <div class="dr-section ${hlER ? 'highlight' : ''}">
      <div class="dr-section-title">📈 Estado de Resultados 2023</div>
      <div class="dr-row"><span class="dr-row-label">Revenue (Ventas)</span><span class="dr-row-val">$${fmt(c.revenue)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">COGS (Costo de Ventas)</span><span class="dr-row-val">$${fmt(c.cogs)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">SG&amp;A (Gastos Operativos)</span><span class="dr-row-val">$${fmt(c.sga)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">D&amp;A (Depreciación + Amort.)</span><span class="dr-row-val">$${fmt(c.da)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Tasa impositiva efectiva</span><span class="dr-row-val">${c.tax}%</span></div>
    </div>

    <div class="dr-section ${hlWC ? 'highlight' : ''}">
      <div class="dr-section-title">⚖️ Balance Operativo — Activos</div>
      <div class="dr-row"><span class="dr-row-label">Cuentas por Cobrar (CxC)</span><span class="dr-row-val">$${fmt(c.ar)}M ↑</span></div>
      <div class="dr-row"><span class="dr-row-label">Inventario</span><span class="dr-row-val">$${fmt(c.inventory)}M ↑</span></div>
      <div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px">
        <span class="dr-row-label" style="font-weight:700">Total AO corriente</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.totalAO)}M</span>
      </div>
    </div>

    <div class="dr-section ${hlWC ? 'highlight' : ''}">
      <div class="dr-section-title">⚖️ Balance Operativo — Pasivos</div>
      <div class="dr-row"><span class="dr-row-label">Cuentas por Pagar (CxP)</span><span class="dr-row-val">$${fmt(c.ap)}M ↓</span></div>
      <div class="dr-row"><span class="dr-row-label">Devengados / Otros PO</span><span class="dr-row-val">$${fmt(c.accrued)}M ↓</span></div>
      <div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px">
        <span class="dr-row-label" style="font-weight:700">Total PO corriente</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.totalPO)}M</span>
      </div>
    </div>

    <div class="dr-section ${hlLP ? 'highlight' : ''}">
      <div class="dr-section-title">🏭 Activos de Largo Plazo</div>
      <div class="dr-row"><span class="dr-row-label">PP&amp;E neto (AFN)</span><span class="dr-row-val">$${fmt(c.afn)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Intangibles netos (AIN)</span><span class="dr-row-val">$${fmt(c.ain)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Capital Invertido anterior</span><span class="dr-row-val dr-given">$${fmt(c.prevCI)}M</span></div>
    </div>

    <div class="dr-section">
      <div class="dr-section-title">💰 Costo de Capital</div>
      <div class="dr-row"><span class="dr-row-label">WACC</span><span class="dr-row-val dr-given">${c.wacc}%</span></div>
    </div>

    <div class="dr-section">
      <div class="dr-section-title">🏦 Estructura Financiera</div>
      <div class="dr-row"><span class="dr-row-label">Activos Financieros</span><span class="dr-row-val dr-given">$${fmt(c.actFin)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Deuda Financiera</span><span class="dr-row-val dr-given">$${fmt(c.deudaFin)}M</span></div>
    </div>
  `;
}

function renderDataRoomCase2(c, sid) {
  const hlER  = ['grossProfit','margenBruto','ebit','margenEbit','nopat','margenNopat'].includes(sid);
  const hlWC  = ['nof','dso','dio','dpo','ccc'].includes(sid);
  const hlLP  = ['ci','rotacion','roic','spread','eva','ffl'].includes(sid);
  const hlCls = ['classifyAccounts','classifyNofAfnAin'].includes(sid);

  document.getElementById('dataRoom').innerHTML = `
    <div class="dr-title">📊 Data Room — ${c.name}</div>

    <div class="dr-section ${hlER ? 'highlight' : ''}">
      <div class="dr-section-title">📈 Estado de Resultados 2023</div>
      <div class="dr-row"><span class="dr-row-label">Revenue (Ventas)</span><span class="dr-row-val">$${fmt(c.revenue)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">COGS</span><span class="dr-row-val">($${fmt(c.cogs)}M)</span></div>
      <div class="dr-row" style="padding-left:4px;border-left:2px solid var(--border)">
        <span class="dr-row-label" style="font-size:.7rem;color:var(--muted)">= Gross Profit</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.grossProfit)}M</span>
      </div>
      <div class="dr-row"><span class="dr-row-label">Nómina (personal)</span><span class="dr-row-val">($${fmt(c.nomina)}M)</span></div>
      <div class="dr-row"><span class="dr-row-label">Otros SG&amp;A</span><span class="dr-row-val">($${fmt(c.otrosSga)}M)</span></div>
      <div class="dr-row"><span class="dr-row-label">D&amp;A</span><span class="dr-row-val">($${fmt(c.da)}M)</span></div>
      <div class="dr-row"><span class="dr-row-label">Tasa impositiva</span><span class="dr-row-val">${c.tax}%</span></div>
    </div>

    <div class="dr-section ${(hlCls || hlWC) ? 'highlight' : ''}">
      <div class="dr-section-title">💰 Activos Corrientes</div>
      <div class="dr-row"><span class="dr-row-label">Caja y equivalentes</span><span class="dr-row-val">$${fmt(c.caja)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Cuentas por Cobrar</span><span class="dr-row-val">$${fmt(c.ar)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Inventario</span><span class="dr-row-val">$${fmt(c.inventory)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Anticipo a proveedores</span><span class="dr-row-val">$${fmt(c.anticipo)}M</span></div>
    </div>

    <div class="dr-section ${(hlCls || hlLP) ? 'highlight' : ''}">
      <div class="dr-section-title">🏭 Activos No Corrientes</div>
      <div class="dr-row"><span class="dr-row-label">PP&amp;E bruto</span><span class="dr-row-val">$${fmt(c.ppeBruto)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Dep. acumulada</span><span class="dr-row-val">($${fmt(c.ppeAcumDep)}M)</span></div>
      <div class="dr-row" style="padding-left:4px;border-left:2px solid var(--border)">
        <span class="dr-row-label" style="font-size:.7rem;font-weight:700">PP&amp;E neto</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.afn)}M</span>
      </div>
      <div class="dr-row" style="margin-top:4px"><span class="dr-row-label">Intangibles bruto</span><span class="dr-row-val">$${fmt(c.ainBruto)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Amort. acumulada</span><span class="dr-row-val">($${fmt(c.ainAcumAmort)}M)</span></div>
      <div class="dr-row" style="padding-left:4px;border-left:2px solid var(--border)">
        <span class="dr-row-label" style="font-size:.7rem;font-weight:700">Intangibles neto</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.ain)}M</span>
      </div>
      <div class="dr-row" style="margin-top:4px"><span class="dr-row-label">Inversiones fin. LP</span><span class="dr-row-val">$${fmt(c.invFinLP)}M</span></div>
    </div>

    <div class="dr-section ${(hlCls || hlWC) ? 'highlight' : ''}">
      <div class="dr-section-title">📋 Pasivos Corrientes</div>
      <div class="dr-row"><span class="dr-row-label">Cuentas por Pagar</span><span class="dr-row-val">$${fmt(c.ap)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Nómina a pagar</span><span class="dr-row-val">$${fmt(c.nominaPagar)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Ingresos diferidos</span><span class="dr-row-val">$${fmt(c.ingDif)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Deuda bancaria CP</span><span class="dr-row-val">$${fmt(c.deudaCP)}M</span></div>
    </div>

    <div class="dr-section ${hlCls ? 'highlight' : ''}">
      <div class="dr-section-title">🏦 Pasivos No Corrientes</div>
      <div class="dr-row"><span class="dr-row-label">Deuda bancaria LP</span><span class="dr-row-val">$${fmt(c.deudaLP)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Lease financiero (IFRS 16)</span><span class="dr-row-val">$${fmt(c.lease)}M</span></div>
    </div>

    <div class="dr-section ${hlLP ? 'highlight' : ''}">
      <div class="dr-section-title">📐 Datos adicionales</div>
      <div class="dr-row"><span class="dr-row-label">WACC</span><span class="dr-row-val dr-given">${c.wacc}%</span></div>
      <div class="dr-row"><span class="dr-row-label">CI año anterior</span><span class="dr-row-val dr-given">$${fmt(c.prevCI)}M</span></div>
    </div>
  `;
}

function renderDataRoomCase3(c, sid) {
  const hlER  = ['grossProfit','margenBruto','ebit','ebitda','nopat','margenNopat'].includes(sid);
  const hlWC  = ['nof','dso','dio','dpo','ccc'].includes(sid);
  const hlLP  = ['ci','deltaAN','rotacion','roic','spread','eva','ffl'].includes(sid);
  const hlRet = ['rotacion','roa','roe','roic','spread','eva'].includes(sid);
  const hlCls = sid === 'classifyAccounts';

  document.getElementById('dataRoom').innerHTML = `
    <div class="dr-title">📊 Data Room — ${c.name} FY2024</div>

    <div class="dr-section ${hlER ? 'highlight' : ''}">
      <div class="dr-section-title">📈 Estado de Resultados FY2024</div>
      <div class="dr-row"><span class="dr-row-label">Revenue (Ventas netas)</span><span class="dr-row-val">$${fmt(c.revenue)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">COGS</span><span class="dr-row-val">($${fmt(c.cogs)}M)</span></div>
      <div class="dr-row" style="padding-left:4px;border-left:2px solid var(--border)">
        <span class="dr-row-label" style="font-size:.7rem">= Gross Profit</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.grossProfit)}M</span>
      </div>
      <div class="dr-row"><span class="dr-row-label">SG&amp;A (incl. D&amp;A)</span><span class="dr-row-val">($${fmt(c.sga)}M)</span></div>
      <div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px">
        <span class="dr-row-label" style="font-size:.7rem;font-weight:700">= EBIT</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.ebit)}M</span>
      </div>
      <div class="dr-row"><span class="dr-row-label">D&amp;A (dato separado)</span><span class="dr-row-val dr-given">$${fmt(c.da)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Net Income (dato)</span><span class="dr-row-val dr-given">$${fmt(c.netIncome)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Tasa impositiva</span><span class="dr-row-val dr-given">${c.tax}%</span></div>
    </div>

    <div class="dr-section ${(hlCls || hlWC) ? 'highlight' : ''}">
      <div class="dr-section-title">🛒 Activos Operativos Corrientes</div>
      <div class="dr-row"><span class="dr-row-label">Cuentas por Cobrar (CxC)</span><span class="dr-row-val">$${fmt(c.ar)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Inventario</span><span class="dr-row-val">$${fmt(c.inventory)}M</span></div>
      <div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px">
        <span class="dr-row-label" style="font-weight:700">Total AO corriente</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.totalAO)}M</span>
      </div>
    </div>

    <div class="dr-section ${(hlCls || hlWC) ? 'highlight' : ''}">
      <div class="dr-section-title">📋 Pasivos Operativos Corrientes</div>
      <div class="dr-row"><span class="dr-row-label">Cuentas por Pagar (CxP)</span><span class="dr-row-val">$${fmt(c.ap)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Gastos devengados</span><span class="dr-row-val">$${fmt(c.accrued)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Cuotas membresía diferidas</span><span class="dr-row-val">$${fmt(c.membershipFees)}M</span></div>
      <div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px">
        <span class="dr-row-label" style="font-weight:700">Total PO corriente</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.totalPO)}M</span>
      </div>
    </div>

    <div class="dr-section ${(hlCls || hlLP) ? 'highlight' : ''}">
      <div class="dr-section-title">🏭 Activos No Corrientes</div>
      <div class="dr-row"><span class="dr-row-label">PP&amp;E bruto</span><span class="dr-row-val">$${fmt(c.ppeBruto)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Dep. acumulada</span><span class="dr-row-val">($${fmt(c.ppeAcumDep)}M)</span></div>
      <div class="dr-row" style="padding-left:4px;border-left:2px solid var(--border)">
        <span class="dr-row-label" style="font-size:.7rem;font-weight:700">PP&amp;E neto (AFN)</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.afn)}M</span>
      </div>
      <div class="dr-row" style="margin-top:4px"><span class="dr-row-label">Goodwill e intangibles (AIN)</span><span class="dr-row-val">$${fmt(c.ain)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Otros activos op. netos</span><span class="dr-row-val dr-given">$${fmt(c.otrosNeto)}M</span></div>
    </div>

    <div class="dr-section ${hlCls ? 'highlight' : ''}">
      <div class="dr-section-title">🏦 Estructura Financiera</div>
      <div class="dr-row"><span class="dr-row-label">Caja y equiv.</span><span class="dr-row-val">$${fmt(c.caja)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Inversiones fin. CP</span><span class="dr-row-val">$${fmt(c.stInv)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Deuda financiera LP</span><span class="dr-row-val">$${fmt(c.deudaLP)}M</span></div>
    </div>

    <div class="dr-section ${hlRet ? 'highlight' : ''}">
      <div class="dr-section-title">📐 Datos para rentabilidad</div>
      <div class="dr-row"><span class="dr-row-label">Total Assets</span><span class="dr-row-val dr-given">$${fmt(c.totalAssets)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Patrimonio Neto (PN)</span><span class="dr-row-val dr-given">$${fmt(c.pn)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">WACC</span><span class="dr-row-val dr-given">${c.wacc}%</span></div>
      <div class="dr-row"><span class="dr-row-label">CI año anterior (FY2023)</span><span class="dr-row-val dr-given">$${fmt(c.prevCI)}M</span></div>
    </div>
  `;
}


function renderDataRoomCase4(c, sid) {
  const hlER  = ['grossProfit','margenBruto','ebit','margenEbit','nopat','margenNopat'].includes(sid);
  const hlWC  = ['nof','dso','dpo','ccc'].includes(sid);
  const hlLP  = ['ci','rotacion','roic','spread','eva','ffl'].includes(sid);

  document.getElementById('dataRoom').innerHTML = `
    <div class="dr-title">📊 Data Room — ${c.name}</div>

    <div class="dr-section ${hlER ? 'highlight' : ''}">
      <div class="dr-section-title">📈 Estado de Resultados 2023</div>
      <div class="dr-row"><span class="dr-row-label">Revenue (Ventas netas)</span><span class="dr-row-val">$${fmt(c.revenue)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">COGS</span><span class="dr-row-val">($${fmt(c.cogs)}M)</span></div>
      <div class="dr-row" style="padding-left:4px;border-left:2px solid var(--border)">
        <span class="dr-row-label" style="font-size:.7rem">= Gross Profit</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.grossProfit)}M</span>
      </div>
      <div class="dr-row"><span class="dr-row-label">SG&A (operativos)</span><span class="dr-row-val">($${fmt(c.sga)}M)</span></div>
      <div class="dr-row"><span class="dr-row-label">D&A</span><span class="dr-row-val">($${fmt(c.da)}M)</span></div>
      <div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px">
        <span class="dr-row-label" style="font-size:.7rem;font-weight:700">= EBIT</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.ebit)}M</span>
      </div>
      <div class="dr-row"><span class="dr-row-label">Tasa impositiva</span><span class="dr-row-val dr-given">${c.tax}%</span></div>
    </div>

    <div class="dr-section ${hlWC ? 'highlight' : ''}">
      <div class="dr-section-title">📦 Activos Operativos Corrientes</div>
      <div class="dr-row"><span class="dr-row-label">Cuentas por Cobrar (CxC)</span><span class="dr-row-val">$${fmt(c.ar)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Inventario propio</span><span class="dr-row-val">$0M <span style="font-size:.65rem;color:var(--muted)">(marketplace puro)</span></span></div>
      <div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px">
        <span class="dr-row-label" style="font-weight:700">Total AO corriente</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.totalAO)}M</span>
      </div>
    </div>

    <div class="dr-section ${hlWC ? 'highlight' : ''}">
      <div class="dr-section-title">📋 Pasivos Operativos Corrientes</div>
      <div class="dr-row"><span class="dr-row-label">CxP (vendedores del marketplace)</span><span class="dr-row-val">$${fmt(c.ap)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Devoluciones + cuotas diferidas</span><span class="dr-row-val">$${fmt(c.accrued)}M</span></div>
      <div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px">
        <span class="dr-row-label" style="font-weight:700">Total PO corriente</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.totalPO)}M</span>
      </div>
    </div>

    <div class="dr-section ${hlLP ? 'highlight' : ''}">
      <div class="dr-section-title">🏭 Activos de Largo Plazo</div>
      <div class="dr-row"><span class="dr-row-label">PP&E neto — Data centers + logística</span><span class="dr-row-val">$${fmt(c.afn)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Intangibles netos — Plataforma + marca</span><span class="dr-row-val">$${fmt(c.ain)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">CI año anterior</span><span class="dr-row-val dr-given">$${fmt(c.prevCI)}M</span></div>
    </div>

    <div class="dr-section">
      <div class="dr-section-title">💰 Costo de Capital</div>
      <div class="dr-row"><span class="dr-row-label">WACC</span><span class="dr-row-val dr-given">${c.wacc}%</span></div>
    </div>
  `;
}

function renderDataRoomCase5(c, sid) {
  const hlER  = ['grossProfit','margenBruto','ebit','margenEbit','nopat','margenNopat'].includes(sid);
  const hlWC  = ['nof','dso','dio','dpo','ccc'].includes(sid);
  const hlLP  = ['ci','rotacion','roic','spread','eva','ffl'].includes(sid);

  document.getElementById('dataRoom').innerHTML = `
    <div class="dr-title">📊 Data Room — ${c.name}</div>

    <div class="dr-section ${hlER ? 'highlight' : ''}">
      <div class="dr-section-title">📈 Estado de Resultados 2023</div>
      <div class="dr-row"><span class="dr-row-label">Revenue</span><span class="dr-row-val">$${fmt(c.revenue)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">COGS (producción)</span><span class="dr-row-val">($${fmt(c.cogs)}M)</span></div>
      <div class="dr-row" style="padding-left:4px;border-left:2px solid var(--border)">
        <span class="dr-row-label" style="font-size:.7rem">= Gross Profit</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.grossProfit)}M</span>
      </div>
      <div class="dr-row"><span class="dr-row-label">SG&A (incl. I+D $1,800M)</span><span class="dr-row-val">($${fmt(c.sga)}M)</span></div>
      <div class="dr-row"><span class="dr-row-label">D&A</span><span class="dr-row-val">($${fmt(c.da)}M)</span></div>
      <div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px">
        <span class="dr-row-label" style="font-size:.7rem;font-weight:700">= EBIT</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.ebit)}M</span>
      </div>
      <div class="dr-row"><span class="dr-row-label">Tasa impositiva</span><span class="dr-row-val dr-given">${c.tax}%</span></div>
    </div>

    <div class="dr-section ${hlWC ? 'highlight' : ''}">
      <div class="dr-section-title">⚕️ Activos Operativos Corrientes</div>
      <div class="dr-row"><span class="dr-row-label">CxC (hospitales + distribuidores)</span><span class="dr-row-val">$${fmt(c.ar)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Inventario (MP + prod. terminado)</span><span class="dr-row-val">$${fmt(c.inventory)}M</span></div>
      <div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px">
        <span class="dr-row-label" style="font-weight:700">Total AO corriente</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.totalAO)}M</span>
      </div>
    </div>

    <div class="dr-section ${hlWC ? 'highlight' : ''}">
      <div class="dr-section-title">📋 Pasivos Operativos Corrientes</div>
      <div class="dr-row"><span class="dr-row-label">CxP (proveedores)</span><span class="dr-row-val">$${fmt(c.ap)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Devengados (royalties + I+D)</span><span class="dr-row-val">$${fmt(c.accrued)}M</span></div>
      <div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px">
        <span class="dr-row-label" style="font-weight:700">Total PO corriente</span>
        <span class="dr-row-val" style="color:var(--text)">$${fmt(c.totalPO)}M</span>
      </div>
    </div>

    <div class="dr-section ${hlLP ? 'highlight' : ''}">
      <div class="dr-section-title">🏭 Activos de Largo Plazo</div>
      <div class="dr-row"><span class="dr-row-label">PP&E neto (plantas + equipos)</span><span class="dr-row-val">$${fmt(c.afn)}M</span></div>
      <div class="dr-row"><span class="dr-row-label">Intangibles netos (patentes + goodwill)</span><span class="dr-row-val">$${fmt(c.ain)}M</span></div>
      <div class="dr-row" style="color:var(--blue);font-size:.72rem;padding:6px 0 2px">
        💡 El CI alto (patentes) comprime el ROIC vs el margen
      </div>
      <div class="dr-row"><span class="dr-row-label">CI año anterior</span><span class="dr-row-val dr-given">$${fmt(c.prevCI)}M</span></div>
    </div>

    <div class="dr-section">
      <div class="dr-section-title">💰 Costo de Capital</div>
      <div class="dr-row"><span class="dr-row-label">WACC</span><span class="dr-row-val dr-given">${c.wacc}%</span></div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// NOTEBOOK — panel derecho con el análisis acumulado
// ═══════════════════════════════════════════════════════════
function renderNotebook() {
  const c  = state.currentCase;
  const nb = state.notebook;
  const dk = state.diffKey;
  // Case 2 always shows ebit, margenEbit, spread
  const showSpread   = (c.id === 1 || c.id === 4) ? true : dk !== 'facil';
  const showEbit     = (c.id === 1 || c.id === 4) ? true : dk !== 'facil';
  const showMargenEB = (c.id === 1 || c.id === 4) ? true : dk === 'avanzado';

  const row = (label, val, given=false) => {
    const cls  = given ? 'given' : (val !== undefined && val !== null ? 'filled' : '');
    const disp = val !== undefined && val !== null ? val : '—';
    return `<div class="nb-row">
      <span class="nb-label">${label}</span>
      <span class="nb-val ${cls}" id="nb_${label.replace(/[^a-z0-9]/gi,'_')}">${disp}</span>
    </div>`;
  };

  let html = '<div class="nb-title">📋 Tu análisis</div>';

  // Case 3 — Costco: different notebook structure
  if (c.id === 2) {
    html += '<div class="nb-section">CLASIFICACIÓN</div>';
    if (nb.classification) {
      const items = c.classifyItems;
      html += row('AO', `${items.filter(i=>nb.classification[i.id]==='AO').length} ctas`, true);
      html += row('PO', `${items.filter(i=>nb.classification[i.id]==='PO').length} ctas`, true);
      html += row('AF', `${items.filter(i=>nb.classification[i.id]==='AF').length} ctas`, true);
      html += row('PF', `${items.filter(i=>nb.classification[i.id]==='PF').length} ctas`, true);
    } else { html += row('Estado', null); }

    html += '<div class="nb-section">¿EN QUÉ / CUÁNTO INVIRTIÓ?</div>';
    html += row('NOF',  nb.nof      !== undefined ? `$${nb.nof}M`       : null);
    html += row('CI',   nb.ci       !== undefined ? `$${nb.ci}M`        : null);
    html += row('ΔCI',  nb.deltaAN  !== undefined ? `$${nb.deltaAN}M`   : null);

    html += '<div class="nb-section">¿CUÁL ES EL RESULTADO?</div>';
    html += row('Gross Profit', nb.grossProfit !== undefined ? `$${nb.grossProfit}M` : null);
    html += row('Margen Bruto', nb.margenBruto !== undefined ? `${nb.margenBruto}%`  : null);
    html += row('EBIT',     nb.ebit     !== undefined ? `$${nb.ebit}M`      : null);
    html += row('EBITDA',   nb.ebitda   !== undefined ? `$${nb.ebitda}M`    : null);
    html += row('NOPAT',    nb.nopat    !== undefined ? `$${nb.nopat}M`     : null);
    html += row('Mg NOPAT', nb.margenNopat !== undefined ? `${nb.margenNopat}%` : null);

    html += '<div class="nb-section">¿CUÁL ES LA RENTABILIDAD?</div>';
    html += row('Rotación', nb.rotacion !== undefined ? `${nb.rotacion}x`  : null);
    html += row('ROA',      nb.roa      !== undefined ? `${nb.roa}%`       : null);
    html += row('ROE',      nb.roe      !== undefined ? `${nb.roe}%`       : null);
    html += row('ROIC',     nb.roic     !== undefined ? `${nb.roic}%`      : null);
    html += row('Spread',   nb.spread   !== undefined ? `${nb.spread}%`    : null);
    html += row('EVA',      nb.eva      !== undefined ? `$${nb.eva}M`      : null);

    html += '<div class="nb-section">EFICIENCIA / FLUJO</div>';
    html += row('DSO / DIO / DPO', (nb.dso&&nb.dio&&nb.dpo) ? `${nb.dso}d/${nb.dio}d/${nb.dpo}d` : null);
    html += row('CCC',  nb.ccc !== undefined ? `${nb.ccc} días` : null);
    html += row('FFL',  nb.ffl !== undefined ? `$${nb.ffl}M`    : null);

    html += `<div class="nb-row" style="margin-top:8px;border-top:1px solid var(--border);padding-top:8px">
      <span class="nb-label" style="font-size:.7rem;color:var(--yellow)">Puntaje</span>
      <span class="nb-val given" style="color:var(--yellow)">${state.score} pts</span></div>`;
    document.getElementById('notebook').innerHTML = html;
    return;
  }

  // Case 2: Classification section
  if (c.id === 1) {
    html += '<div class="nb-section">CLASIFICACIÓN DE CUENTAS</div>';
    if (nb.classification) {
      const items = c.classifyItems;
      const aoN = items.filter(i => nb.classification[i.id] === 'AO').length;
      const poN = items.filter(i => nb.classification[i.id] === 'PO').length;
      const afN = items.filter(i => nb.classification[i.id] === 'AF').length;
      const pfN = items.filter(i => nb.classification[i.id] === 'PF').length;
      html += row('AO (Activos Op.)',  `${aoN} ctas`, true);
      html += row('PO (Pasivos Op.)',  `${poN} ctas`, true);
      html += row('AF (Activos Fin.)', `${afN} ctas`, true);
      html += row('PF (Pasivos Fin.)', `${pfN} ctas`, true);
    } else {
      html += row('AO/PO/AF/PF', null);
    }
    if (nb.classificationNof) {
      const nofItems = c.classifyNofItems;
      const nofN = nofItems.filter(i => nb.classificationNof[i.id] === 'NOF').length;
      const afnN = nofItems.filter(i => nb.classificationNof[i.id] === 'AFN').length;
      const ainN = nofItems.filter(i => nb.classificationNof[i.id] === 'AIN').length;
      html += row('NOF (Ctes. Op.)',  `${nofN} ctas`, true);
      html += row('AFN (Activo Fijo)',`${afnN} ctas`, true);
      html += row('AIN (Intangibles)',`${ainN} ctas`, true);
    } else {
      html += row('NOF/AFN/AIN', null);
    }
  }

  html += '<div class="nb-section">EEFF</div>';
  html += row('Gross Profit',   nb.grossProfit   !== undefined ? `$${nb.grossProfit}M`   : null);
  html += row('Margen Bruto',   nb.margenBruto   !== undefined ? `${nb.margenBruto}%`    : null);
  if (showEbit) {
    html += row('EBIT',         nb.ebit          !== undefined ? `$${nb.ebit}M`          : null);
    if (showMargenEB)
      html += row('Margen EBIT',nb.margenEbit    !== undefined ? `${nb.margenEbit}%`     : null);
  } else {
    html += row('EBIT',         `$${c.ebit}M (dato)`, true);
  }
  html += row('NOPAT',          nb.nopat         !== undefined ? `$${nb.nopat}M`         : null);
  html += row('Margen NOPAT',   nb.margenNopat   !== undefined ? `${nb.margenNopat}%`    : null);

  html += '<div class="nb-section">CAPITAL INVERTIDO</div>';
  html += row('NOF',            nb.nof           !== undefined ? `$${nb.nof}M`           : null);
  html += row('CI',             nb.ci            !== undefined ? `$${nb.ci}M`            : null);

  html += '<div class="nb-section">ROIC &amp; VALOR</div>';
  html += row('Rotación AN',    nb.rotacion      !== undefined ? `${nb.rotacion}x`       : null);
  html += row('ROIC',           nb.roic          !== undefined ? `${nb.roic}%`           : null);
  if (showSpread)
    html += row('Spread',       nb.spread        !== undefined ? `${nb.spread}%`         : null);
  html += row('EVA',            nb.eva           !== undefined ? `$${nb.eva}M`           : null);

  html += '<div class="nb-section">EFICIENCIA OPERATIVA</div>';
  html += row('DSO',            nb.dso           !== undefined ? `${nb.dso} días`        : null);
  html += row('DIO',            nb.dio           !== undefined ? `${nb.dio} días`        : null);
  html += row('DPO',            nb.dpo           !== undefined ? `${nb.dpo} días`        : null);
  html += row('CCC',            nb.ccc           !== undefined ? `${nb.ccc} días`        : null);

  html += '<div class="nb-section">FLUJO DE FONDOS</div>';
  html += row('ΔCI (Inversión)', nb.ci !== undefined && nb.prevCI !== undefined
    ? `$${c.invNeta}M` : null);
  html += row('FFL',            nb.ffl           !== undefined ? `$${nb.ffl}M`           : null);

  html += `<div class="nb-row" style="margin-top:8px;border-top:1px solid var(--border);padding-top:8px">
    <span class="nb-label" style="font-size:.7rem;color:var(--yellow)">Puntaje</span>
    <span class="nb-val given" style="color:var(--yellow)">${state.score} pts</span>
  </div>`;

  document.getElementById('notebook').innerHTML = html;
}

function fillNotebook(key, val) {
  state.notebook[key] = val;
  renderNotebook();
  setTimeout(() => {
    document.querySelectorAll('.nb-val.filled').forEach(el => {
      el.classList.add('flash');
      setTimeout(() => el.classList.remove('flash'), 700);
    });
  }, 50);
}

// ═══════════════════════════════════════════════════════════
// PROGRESO
// ═══════════════════════════════════════════════════════════
function renderProgressDots() {
  const steps = state.steps;
  document.getElementById('progressDots').innerHTML = steps.map((sid,i) => {
    const cls = i < state.currentStep ? 'done' : (i === state.currentStep ? 'active' : '');
    return `<div class="step-dot ${cls}" title="${sid}"></div>`;
  }).join('');
  document.getElementById('stepLabel').textContent =
    `Paso ${state.currentStep+1}/${steps.length}`;
}

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════
function fmt(n) {
  return n !== undefined ? n.toLocaleString('es-AR') : '?';
}
function stepNum() {
  return `Paso ${state.currentStep+1} de ${state.steps.length}`;
}
function fmtToggle() {
  if (state.difficulty.hideFormula) return '';
  const open = state.difficulty.formulaOpen ? ' open' : '';
  return `<button class="formula-toggle${open}" id="formulaToggleBtn" onclick="toggleFormula()">
    <span class="ft-label">Ver fórmula</span> <span class="ft-arrow">›</span>
  </button>`;
}
function fmtHint(text) {
  if (!state.difficulty.hints) return '';
  return `<button class="btn-hint" onclick="toggleHint()">💡 Pista</button>`;
}
function fmtDots() {
  return `<span class="attempts-label">Intentos:</span>` +
    Array.from({length: state.difficulty.maxAttempts}, (_,i) =>
      `<div class="attempt-dot" id="dot${i}"></div>`
    ).join('');
}

function toggleFormula() {
  const fb  = document.getElementById('formulaBox');
  const btn = document.getElementById('formulaToggleBtn');
  if (!fb || !btn) return;
  fb.classList.toggle('open');
  btn.classList.toggle('open');
}
function toggleHint() {
  const h = document.getElementById('hintBox');
  if (h) h.classList.toggle('visible');
}

// ═══════════════════════════════════════════════════════════
// VERIFICACIÓN GENÉRICA
// ═══════════════════════════════════════════════════════════
function showFeedback(msg, type) {
  const fb = document.getElementById('feedbackBox');
  if (!fb) return;
  fb.textContent = msg;
  fb.className = 'feedback-box ' + type;
}
function showNextBtn() {
  const btn = document.getElementById('btnNext');
  if (btn) { btn.classList.add('visible'); btn.classList.add('pulse'); }
}
function markAttemptDot(idx) {
  const dot = document.getElementById('dot'+idx);
  if (!dot) return;
  dot.classList.add('used');
  if (idx === 0) dot.classList.add('first');
}
function awardPoints(stepIdx, attempts) {
  const mult = state.difficulty.multiplier;
  const pts  = attempts===1 ? Math.round(100*mult)
             : attempts===2 ? Math.round(60*mult)
             : attempts===3 ? Math.round(30*mult) : 0;
  state.stepScores[stepIdx] = pts;
  state.score += pts;
  document.getElementById('headerScore').textContent = state.score;
}

function genericVerify(opts) {
  const raw = document.getElementById('answerInput').value;
  const val = parseFloat(raw.replace(',', '.'));
  if (isNaN(val)) { showFeedback('Ingresá un número válido.','wrong'); return; }
  const si  = state.currentStep;
  const att = ++state.stepAttempts[si];
  markAttemptDot(att-1);

  if (Math.abs(val - opts.correct) <= opts.tolerance) {
    awardPoints(si, att);
    if (opts.nbKey !== undefined)
      fillNotebook(opts.nbKey, opts.nbVal !== undefined ? opts.nbVal : val);
    document.getElementById('answerInput').classList.add('correct');
    document.getElementById('answerInput').disabled = true;
    document.querySelector('.btn-verify').disabled  = true;
    showFeedback(opts.feedbackCorrect || `✅ ¡Correcto! Respuesta: ${opts.correct}`, 'correct');
    if (opts.onCorrect) opts.onCorrect();
    showNextBtn();
  } else {
    document.getElementById('answerInput').classList.add('wrong');
    setTimeout(() => document.getElementById('answerInput').classList.remove('wrong'), 500);
    const maxA = state.difficulty.maxAttempts;
    if (att >= maxA) {
      if (state.difficulty.showSolution) {
        showFeedback(opts.feedbackWrong || `Respuesta correcta: ${opts.correct}`, 'wrong');
        document.getElementById('answerInput').value = opts.correct;
      } else {
        showFeedback(`Límite de intentos alcanzado.`, 'wrong');
      }
      document.getElementById('answerInput').disabled = true;
      document.querySelector('.btn-verify').disabled  = true;
      awardPoints(si, att);
      if (opts.nbKey !== undefined)
        fillNotebook(opts.nbKey, opts.nbVal !== undefined ? opts.nbVal : opts.correct);
      if (opts.onCorrect) opts.onCorrect();
      showNextBtn();
    } else {
      showFeedback(`Incorrecto. ${opts.tryAgain||''} Intentos restantes: ${maxA-att}`, 'wrong');
    }
  }
}

// ═══════════════════════════════════════════════════════════
// RENDERIZADO DE PASOS
// ═══════════════════════════════════════════════════════════
function renderStep() {
  renderDataRoom();
  renderProgressDots();
  const sid = state.steps[state.currentStep];
  const c   = state.currentCase;
  const cc  = document.getElementById('centerContent');
  cc.innerHTML = '<div class="step-content">' + buildStep(sid, c) + '</div>';
  if (state.difficulty.formulaOpen) {
    const fb = document.getElementById('formulaBox');
    if (fb) fb.classList.add('open');
    const tb = document.getElementById('formulaToggleBtn');
    if (tb) tb.classList.add('open');
  }
  cc.scrollTop = 0;
}


// ═══════════════════════════════════════════════════════════
// ENGINE — MÚLTIPLE CHOICE
// ═══════════════════════════════════════════════════════════
/*
  mcStep(sn, badge, title, task, options, correctIdx, explanations, concept='')
  options:      ['A) ...', 'B) ...', 'C) ...', 'D) ...']
  correctIdx:   0-based index of correct answer
  explanations: array of strings, one per option (shown after attempt)
  concept:      optional box shown above options
*/
function mcStep(sn, badge, title, task, options, correctIdx, explanations, concept='') {
  const conceptHtml = concept ? `<div class="concept-box">${concept}</div>` : '';
  const optHtml = options.map((opt, i) =>
    `<button class="mc-option" id="mcopt${i}" onclick="selectMC(${i})">${opt}</button>`
  ).join('');
  return `
    <div class="step-header">
      <div class="step-number">${sn}</div>
      <div class="step-badge">${badge}</div>
      <div class="step-title">${title}</div>
      <div class="step-task">${task}</div>
    </div>
    ${conceptHtml}
    <div class="mc-options" id="mcOptions">${optHtml}</div>
    <div class="mc-explanations" id="mcExplanations" style="display:none">
      ${explanations.map((e,i) => `<div class="mc-exp" id="mcexp${i}">${e}</div>`).join('')}
    </div>
    <div class="attempts-row" id="attemptsRow">${fmtDots()}</div>
    <div class="feedback-box" id="feedbackBox"></div>
    <button class="btn-next" id="btnNext" onclick="nextStep()">Siguiente paso →</button>`;
}

function selectMC(chosenIdx) {
  // Don't allow re-selection if already locked
  if (document.getElementById('btnNext').classList.contains('visible')) return;

  const c   = state.currentCase;
  const si  = state.currentStep;
  const sid = state.steps[si];
  const def = getMCDef(sid, c);
  if (!def) return;

  const att = ++state.stepAttempts[si];
  markAttemptDot(att - 1);
  const maxA = state.difficulty.maxAttempts;

  const opts = document.querySelectorAll('.mc-option');
  opts.forEach(b => b.disabled = true);

  // Show explanations
  document.getElementById('mcExplanations').style.display = 'block';
  document.querySelectorAll('.mc-exp').forEach((el, i) => {
    el.style.display = (i === chosenIdx || i === def.correctIdx) ? 'block' : 'none';
  });

  if (chosenIdx === def.correctIdx) {
    opts[chosenIdx].classList.add('mc-correct');
    awardPoints(si, att);
    showFeedback(`✅ ¡Correcto! ${def.feedbackCorrect || ''}`, 'correct');
    showNextBtn();
  } else {
    opts[chosenIdx].classList.add('mc-wrong');
    opts[def.correctIdx].classList.add('mc-correct');
    if (att >= maxA) {
      awardPoints(si, maxA + 1); // 0 pts
      showFeedback(`Respuesta correcta: opción ${String.fromCharCode(65 + def.correctIdx)}. ${def.feedbackCorrect || ''}`, 'wrong');
      showNextBtn();
    } else {
      // Re-enable for retry (except wrong one)
      opts.forEach((b, i) => { if (i !== chosenIdx) b.disabled = false; });
      opts[chosenIdx].classList.add('mc-wrong-locked');
      document.getElementById('mcExplanations').style.display = 'none';
      showFeedback(`Incorrecto. Intentá de nuevo. Intentos restantes: ${maxA - att}.`, 'wrong');
    }
  }
}

// Returns the MC definition object for a given step id
function getMCDef(sid, c) {
  const all = getAllMCDefs(c);
  return all[sid] || null;
}

function getAllMCDefs(c) {
  const roic = c.roic, wacc = c.wacc, spread = c.spread, eva = c.eva;
  return {
    // ── NORTEL (id=1) ─────────────────────────────────
    mc_nortel_dpo: {
      title: '📐 Análisis de Dirección — DPO',
      task: `Si NortelFab lograra <strong>extender sus días de pago a proveedores (DPO) de 70 a 90 días</strong>, ¿qué pasaría con el ROIC?`,
      concept: `DPO actual = ${c.dpo} días · NOF = $${fmt(c.nof)}M · CI = $${fmt(c.ci)}M · ROIC = ${c.roic}%`,
      correctIdx: 1,
      feedbackCorrect: 'Subir el DPO reduce las salidas de caja → NOF baja → CI baja → ROIC sube.',
      options: [
        'A) El EBIT baja porque pagamos más intereses a proveedores',
        'B) El NOF disminuye, el CI baja y el ROIC sube',
        'C) El margen NOPAT mejora automáticamente',
        'D) No tiene impacto porque es una cuenta de pasivo'
      ],
      explanations: [
        '❌ El DPO no afecta el EBIT — los intereses son financieros, no operativos.',
        '✅ Exacto. Mayor DPO = más días sin pagar = menor NOF = menor CI = mayor ROIC.',
        '❌ El margen NOPAT depende del EBIT y la tasa, no del DPO.',
        '❌ El DPO afecta directamente el NOF y por ende el CI y el ROIC.'
      ]
    },
    mc_nortel_eva: {
      title: '🏆 Veredicto Final — ¿Crea o Destruye Valor?',
      task: `Con ROIC ${c.roic}% y WACC ${c.wacc}%, ¿qué podemos concluir sobre NortelFab?`,
      concept: `ROIC = ${c.roic}% · WACC = ${c.wacc}% · Spread = ${c.spread}% · CI = ${fmt(c.ci)}M`,
      correctIdx: 2,
      feedbackCorrect: `EVA = $${c.eva}M. ROIC (${roic}%) > WACC (${wacc}%) → crea valor. Spread positivo = cada peso invertido genera ${spread/100} pesos de valor extra.`,
      options: [
        'A) No crea valor porque el margen NOPAT no llega al 15%',
        'B) Destruye valor porque tiene mucha deuda financiera',
        `C) Crea valor: ROIC ${roic}% > WACC ${wacc}%, EVA = +$${c.eva}M`,
        'D) No se puede saber sin conocer el precio de la acción'
      ],
      explanations: [
        '❌ El margen NOPAT solo es parte de la ecuación. Lo que importa es ROIC vs WACC.',
        '❌ La deuda financiera no entra en el CI operativo ni en el ROIC.',
        `✅ Correcto. Spread = ${spread}% → EVA = ${spread}% × $${c.ci}M / 100 = $${eva}M positivo.`,
        '❌ El EVA se calcula con datos contables/operativos, no requiere precio de mercado.'
      ]
    },

    // ── COSTCO (id=2) ─────────────────────────────────
    mc_costco_paradoja: {
      title: '🔍 La Paradoja de Costco',
      task: `Costco tiene un margen NOPAT de solo ${c.nopatMargin}% — el más bajo de los tres casos — pero un ROIC del ${c.roic}%. ¿Cómo es posible?`,
      concept: `Margen NOPAT = ${c.nopatMargin}% · Rotación = ${c.rotacion}x · CI = $${fmt(c.ci)}M · NOF = $${fmt(c.nof)}M`,
      correctIdx: 2,
      feedbackCorrect: `La identidad DuPont: ROIC = ${c.nopatMargin}% × ${c.rotacion}x = ${roic}%. La rotación altísima compensa el margen mínimo.`,
      options: [
        'A) Porque tiene márgenes brutos altísimos que compensan',
        'B) Porque invierte poco en activos fijos (AFN bajo)',
        `C) Porque la rotación del capital (${c.rotacion}x) compensa el margen NOPAT de ${c.nopatMargin}%`,
        'D) Porque el WACC de Costco es más bajo que el de sus competidores'
      ],
      explanations: [
        `❌ El margen bruto de Costco es solo ${c.grossMargin}% — uno de los más bajos del retail.`,
        `❌ El AFN es $${c.afn}M — significativo. No es un negocio asset-light.`,
        `✅ Identidad DuPont: ${c.nopatMargin}% × ${c.rotacion}x = ${roic}%. El NOF negativo comprime el CI y dispara la rotación.`,
        '❌ El WACC es un costo de capital, no lo controla Costco directamente.'
      ]
    },
    mc_costco_nof: {
      title: '💡 ¿Por Qué el NOF es Negativo?',
      task: `Costco tiene NOF = $${fmt(c.nof)}M (negativo). ¿Qué significa esto para el negocio?`,
      concept: `Total AO = $${fmt(c.totalAO)}M (CxC + Inv) · Total PO = $${fmt(c.totalPO)}M (CxP + Devengados + Cuotas) · NOF = $${fmt(c.nof)}M`,
      correctIdx: 0,
      feedbackCorrect: 'Los proveedores y las cuotas de membresía pre-pagas financian el inventario. Costco recibe el dinero antes de pagar.',
      options: [
        'A) Los proveedores y miembros (cuotas diferidas) financian el inventario de Costco',
        'B) Costco tiene poco inventario porque es un negocio digital',
        'C) El NOF negativo significa que Costco tiene pérdidas operativas',
        'D) Es un error contable — el NOF siempre debe ser positivo'
      ],
      explanations: [
        `✅ Correcto. CxP ($${c.ap}M) + Cuotas diferidas ($${c.membershipFees}M) > AO ($${c.totalAO}M). Costco "toma prestado" de sus proveedores y miembros.`,
        `❌ Costco tiene $${c.inventory}M de inventario — enorme. Es un retailer físico.`,
        '❌ NOF negativo es una ventaja competitiva, no una pérdida. El resultado lo mide el NOPAT.',
        '❌ NOF negativo es perfectamente válido y muy deseable. Amazon, Mercado Libre y Zara también lo tienen.'
      ]
    },
    mc_costco_modelo: {
      title: '⚙️ Decisión Estratégica — El Modelo de Membresías',
      task: `Sos el CFO de Costco. Un consultor propone eliminar las cuotas de membresía para atraer más clientes. ¿Qué hacés?`,
      concept: `Cuotas diferidas (PO) = $${fmt(c.membershipFees)}M · NOF actual = $${fmt(c.nof)}M · ROIC = ${c.roic}% · EVA = +$${fmt(c.eva)}M`,
      correctIdx: 3,
      feedbackCorrect: 'Las cuotas de membresía son ingresos diferidos (PO) que reducen el NOF. Sin ellas, el NOF sería positivo y el ROIC caería significativamente.',
      options: [
        'A) Eliminaría las cuotas para atraer más clientes y aumentar el revenue',
        'B) Bajaría los precios para ganar market share y subir el margen',
        'C) Aumentaría el inventario para reducir el DIO',
        'D) Mantendría las cuotas: son la fuente del NOF negativo y el ROIC alto'
      ],
      explanations: [
        '❌ Las cuotas generan $2,501M de financiamiento gratuito. Eliminarlas hundiría el ROIC.',
        '❌ Bajar precios en un negocio de 2.75% de margen NOPAT sería suicida.',
        '❌ Más inventario → más AO → NOF menos negativo → CI más alto → ROIC menor.',
        '✅ Las cuotas son el corazón del modelo. Son un PO que financia el inventario. Sin ellas, el NOF sería +$6,282M y el ROIC caería drásticamente.'
      ]
    },

    // ── LATICOMMERCE (id=3) ───────────────────────────
    mc_lati_nof_sign: {
      title: '📦 ¿Qué Significa el NOF Negativo?',
      task: `LatiCommerce tiene NOF = $${fmt(c.nof)}M. ¿Qué implica este número para el modelo de negocio del marketplace?`,
      concept: `Total AO = $${fmt(c.totalAO)}M (CxC pago digital) · Total PO = $${fmt(c.totalPO)}M (CxP vendedores + cuotas) · NOF = $${fmt(c.nof)}M`,
      correctIdx: 1,
      feedbackCorrect: `NOF = $${c.nof}M. Los vendedores del marketplace financian el ciclo → LatiCommerce cobra antes de pagar → ventaja competitiva de capital de trabajo.`,
      options: [
        'A) Es un error: el NOF no puede ser negativo en un negocio rentable',
        `B) Ventaja competitiva: los vendedores (CxP $${c.ap}M) financian el ciclo operativo`,
        'C) Indica que la empresa tiene problemas de liquidez a corto plazo',
        'D) Es consecuencia del bajo inventario, sin impacto estratégico relevante'
      ],
      explanations: [
        '❌ NOF negativo es perfectamente válido. Amazon, Costco y Zara también lo tienen.',
        `✅ Los pasivos operativos ($${c.totalPO}M) superan los activos operativos ($${c.totalAO}M). Los vendedores pre-financian el marketplace.`,
        '❌ NOF negativo es lo contrario: la empresa tiene más financiamiento operativo del que necesita.',
        '❌ El bajo inventario contribuye, pero la clave son los $${c.ap}M de CxP con vendedores.'
      ]
    },
    mc_lati_ccc_sign: {
      title: '⏱️ ¿Qué Dice el CCC Negativo?',
      task: `El CCC de LatiCommerce es ${c.ccc} días. ¿Es una buena o mala señal para el negocio?`,
      concept: `DSO = ${c.dso} días · DIO = ${c.dio} días · DPO = ${c.dpo} días · CCC = ${c.ccc} días`,
      correctIdx: 2,
      feedbackCorrect: `CCC = ${c.ccc} días. LatiCommerce cobra en ${c.dso} días (digital) y paga en ${c.dpo} días. El ciclo "se financia solo" y sobra capital.`,
      options: [
        `A) Es preocupante: significa que LatiCommerce tarda ${Math.abs(c.ccc)} días en cobrar`,
        'B) Es neutro: indica que cobros y pagos están equilibrados',
        `C) Es una ventaja: cobra en ${c.dso} días y paga en ${c.dpo} días → el negocio se auto-financia`,
        'D) Indica que los proveedores tienen más poder de negociación que LatiCommerce'
      ],
      explanations: [
        `❌ CCC negativo significa exactamente lo contrario: cobra RÁPIDO (${c.dso}d) y paga LENTO (${c.dpo}d).`,
        '❌ No está equilibrado — está desequilibrado a favor de LatiCommerce.',
        `✅ CCC = DSO + DIO − DPO = ${c.dso} + 0 − ${c.dpo} = ${c.ccc} días. El marketplace recibe el dinero mucho antes de pagarlo.`,
        '❌ Es todo lo contrario: LatiCommerce tiene el poder. Los vendedores esperan para cobrar.'
      ]
    },
    mc_lati_decision: {
      title: '🚀 Decisión de Expansión',
      task: `LatiCommerce evalúa expandirse a 3 nuevos países en 2025. Con los datos del análisis, ¿cuál es tu recomendación?`,
      concept: `ROIC = ${c.roic}% · WACC = ${c.wacc}% · Spread = +${c.spread}% · EVA = +$${fmt(c.eva)}M · NOF = $${fmt(c.nof)}M (negativo → escala sin capital extra)`,
      correctIdx: 3,
      feedbackCorrect: `EVA = +$${eva}M. ROIC ${roic}% vs WACC ${wacc}%. Spread = +${spread}%. Cada peso invertido genera ${spread/100} pesos de valor. La expansión tiene sentido si mantiene el modelo.`,
      options: [
        'A) No expandirse: el margen NOPAT es bajo y el riesgo es alto',
        'B) Esperar a que el ROIC supere el 50% antes de expandir',
        'C) Expandirse solo si consiguen reducir el WACC',
        `D) Expandirse: ROIC ${roic}% >> WACC ${wacc}%, EVA positivo, el modelo de NOF negativo escala bien`
      ],
      explanations: [
        `❌ El margen NOPAT de ${c.nopatMargin}% parece bajo pero la rotación (${c.rotacion}x) lo compensa. ROIC = ${roic}%.`,
        '❌ No existe un benchmark mágico de 50%. Lo relevante es ROIC vs WACC.',
        `❌ El WACC ya está por debajo del ROIC. El spread es +${spread}%.`,
        `✅ Con ROIC ${roic}% > WACC ${wacc}% y EVA $${eva}M, cada nuevo mercado donde repliquen el modelo crea valor adicional. El NOF negativo escala sin necesidad de capital adicional.`
      ]
    },

    // ── PHARMACORE (id=4) ─────────────────────────────
    mc_pharma_ci_alto: {
      title: '🔬 ¿Por Qué el ROIC es Menor al Margen Sugerido?',
      task: `PharmaCore tiene un Margen NOPAT del ${c.nopatMargin}% pero un ROIC de solo ${c.roic}%. ¿Cuál es la explicación?`,
      concept: `Margen NOPAT = ${c.nopatMargin}% · CI = $${fmt(c.ci)}M (AFN $${fmt(c.afn)}M + AIN $${fmt(c.ain)}M + NOF $${fmt(c.nof)}M) · Rotación = ${c.rotacion}x`,
      correctIdx: 0,
      feedbackCorrect: `CI = $${c.ci}M principalmente por patentes ($${c.ain}M) y plantas ($${c.afn}M). Esto comprime la rotación a ${c.rotacion}x y limita el ROIC a ${c.roic}%.`,
      options: [
        `A) Las patentes ($${c.ain}M) y plantas ($${c.afn}M) inflan el CI → baja rotación → ROIC comprimido`,
        `B) El ROIC es bajo porque el margen NOPAT de ${c.nopatMargin}% no es suficiente`,
        'C) El CI alto es malo siempre — deberían reducir activos',
        'D) No hay relación entre el CI y el ROIC en empresas farmacéuticas'
      ],
      explanations: [
        `✅ Exacto. Rotación = Revenue/CI = ${c.revenue}/${c.ci} = ${c.rotacion}x (muy baja). Por eso ROIC = ${c.nopatMargin}% × ${c.rotacion}x = ${c.roic}%.`,
        `❌ ${c.nopatMargin}% de margen NOPAT es muy alto. El problema es la rotación baja por el CI grande.`,
        '❌ El CI alto es una consecuencia de invertir en patentes y plantas necesarias para operar. No es malo per se.',
        '❌ ROIC = Margen NOPAT × Rotación. La rotación = Revenue/CI. La relación es directa.'
      ]
    },
    mc_pharma_adquisicion: {
      title: '💊 Impacto de una Adquisición en el ROIC',
      task: `PharmaCore adquiere una biotech por $3,000M (todo contabilizado como AIN — patentes en desarrollo). ¿Qué pasa con el ROIC inmediatamente después?`,
      concept: `CI actual = $${fmt(c.ci)}M · NOPAT actual = $${fmt(c.nopat)}M · ROIC actual = ${c.roic}% · Nueva AIN a agregar = $3,000M`,
      correctIdx: 1,
      feedbackCorrect: `La adquisición sube el AIN (goodwill/patentes) → sube el CI → baja la rotación → baja el ROIC a corto plazo. El valor depende de si el pipeline genera NOPAT futuro.`,
      options: [
        'A) Sube el ROIC inmediatamente porque agrega pipeline de productos',
        'B) Baja el ROIC a corto plazo: +$3,000M en AIN sube el CI sin agregar NOPAT aún',
        'C) No afecta el ROIC porque las patentes son activos intangibles, no operativos',
        'D) El ROIC no cambia si se financia con deuda en lugar de caja'
      ],
      explanations: [
        '❌ El pipeline no genera ingresos hasta que los productos se aprueben y lancen. El NOPAT no sube de inmediato.',
        `✅ Correcto. CI nuevo = ${c.ci} + 3000 = $${c.ci+3000}M. ROIC nuevo ≈ ${c.nopat}/${c.ci+3000} = ${(c.nopat/(c.ci+3000)*100).toFixed(1)}% vs ${c.roic}% actual. Cae.`,
        '❌ Las patentes y el goodwill son activos intangibles OPERATIVOS (AIN). Forman parte del CI.',
        '❌ El CI incluye los activos operativos independientemente de cómo se financia la adquisición.'
      ]
    },
    mc_pharma_ffl: {
      title: '💸 ¿Por Qué el FFL es Menor al NOPAT?',
      task: `PharmaCore tiene NOPAT = $${fmt(c.nopat)}M pero FFL = $${fmt(c.ffl)}M. ¿Por qué la diferencia?`,
      concept: `NOPAT = $${fmt(c.nopat)}M · CI actual = $${fmt(c.ci)}M · CI anterior = $${fmt(c.prevCI)}M · ΔCI = $${fmt(c.invNeta)}M`,
      correctIdx: 2,
      feedbackCorrect: `FFL = $${c.ffl}M. El NOPAT es alto pero la inversión neta (ΔCI = $${c.invNeta}M) consume caja. La farmacéutica reinvierte fuerte para sostener su pipeline.`,
      options: [
        `A) FFL > NOPAT porque las amortizaciones de patentes liberan caja`,
        `B) FFL = NOPAT siempre en empresas sin inventario significativo`,
        `C) FFL < NOPAT porque ΔCI = $${c.invNeta}M (inversión neta en activos operativos)`,
        'D) El FFL no es relevante para evaluar una farmacéutica'
      ],
      explanations: [
        '❌ Las amortizaciones ya están descontadas en el EBIT. El FFL = NOPAT − ΔCI.',
        '❌ El FFL depende de la inversión neta en CI (ΔCI), no del inventario.',
        `✅ FFL = NOPAT − ΔCI = $${c.nopat}M − $${c.invNeta}M = $${c.ffl}M. La empresa invierte $${c.invNeta}M netos en nuevos activos (plantas, patentes).`,
        '❌ El FFL es la métrica clave: muestra cuánto efectivo queda después de reinvertir en el negocio.'
      ]
    }
  };
}

function buildStep(sid, c) {
  const badge = getClassBadge(sid);
  const sn    = stepNum();
  switch(sid) {
    case 'classifyAccounts':    return stepClassifyAccounts(c, sn, badge);
    case 'classifyNofAfnAin': return stepClassifyNofAfnAin(c, sn, badge);
    case 'deltaAN':      return stepDeltaAN(c, sn, badge);
    case 'ebitda':       return stepEbitda(c, sn, badge);
    case 'roa':          return stepRoa(c, sn, badge);
    case 'roe':          return stepRoe(c, sn, badge);
    case 'grossProfit':  return stepGrossProfit(c, sn, badge);
    case 'margenBruto':  return stepMargenBruto(c, sn, badge);
    case 'ebit':         return stepEbit(c, sn, badge);
    case 'margenEbit':   return stepMargenEbit(c, sn, badge);
    case 'nopat':        return stepNopat(c, sn, badge);
    case 'margenNopat':  return stepMargenNopat(c, sn, badge);
    case 'nof':          return stepNof(c, sn, badge);
    case 'ci':           return stepCi(c, sn, badge);
    case 'rotacion':     return stepRotacion(c, sn, badge);
    case 'roic':         return stepRoic(c, sn, badge);
    case 'spread':       return stepSpread(c, sn, badge);
    case 'eva':          return stepEva(c, sn, badge);
    case 'dso':          return stepDso(c, sn, badge);
    case 'dio':          return stepDio(c, sn, badge);
    case 'dpo':          return stepDpo(c, sn, badge);
    case 'ccc':          return stepCcc(c, sn, badge);
    case 'ffl':          return stepFfl(c, sn, badge);
    // MC steps — multiple choice
    default: {
      if (sid.startsWith('mc_')) {
        const def = getMCDef(sid, c);
        if (def) return mcStep(sn, getClassBadge(sid), def.title || '💡 Análisis', def.task || '', def.options, def.correctIdx, def.explanations, def.concept || '');
      }
      return '<p style="color:var(--muted)">Paso desconocido.</p>';
    }
  }
}

function nextStep() {
  state.currentStep++;
  if (state.currentStep >= state.steps.length) {
    showResults();
  } else {
    renderStep();
  }
}

// ═══════════════════════════════════════════════════════════
// CONSTRUCTOR BASE DE PASO
// ═══════════════════════════════════════════════════════════
function baseStep(sn, badge, title, task, formula, hint, inputLabel, unit, verifyFn, extra='', concept='') {
  const unitPre  = unit==='$' ? `<span class="input-unit">$</span>` : '';
  const unitPost = unit==='M'    ? `<span class="input-unit">M</span>`
                 : unit==='%'    ? `<span class="input-unit">%</span>`
                 : unit==='x'    ? `<span class="input-unit">x</span>`
                 : unit==='días' ? `<span class="input-unit">días</span>` : '';
  const conceptHtml = concept
    ? `<div class="concept-box">${concept}</div>` : '';
  return `
    <div class="step-header">
      <div class="step-number">${sn}</div>
      <div class="step-badge">${badge}</div>
      <div class="step-title">${title}</div>
      <div class="step-task">${task}</div>
    </div>
    ${conceptHtml}
    ${fmtToggle()}
    <div class="formula-box" id="formulaBox">
      <div class="formula-label">Fórmula</div>
      <div class="formula-code">${formula}</div>
    </div>
    ${extra}
    <div class="input-section">
      <div class="input-label">${inputLabel}</div>
      <div class="answer-row">
        ${unitPre}
        <input type="number" id="answerInput" class="answer-input" placeholder="tu respuesta…" step="0.1">
        ${unitPost}
        <button class="btn-verify" onclick="${verifyFn}()">Verificar →</button>
        ${fmtHint(hint)}
      </div>
      <div class="attempts-row" id="attemptsRow">${fmtDots()}</div>
    </div>
    <div class="hint-box" id="hintBox">${hint}</div>
    <div class="feedback-box" id="feedbackBox"></div>
    <button class="btn-next" id="btnNext" onclick="nextStep()">Siguiente paso →</button>`;
}

function infoBoxes(items) {
  return `<div class="info-boxes">${items.map(([l,v]) =>
    `<div class="info-box">
      <div class="info-box-label">${l}</div>
      <div class="info-box-val">${v}</div>
    </div>`).join('')}
  </div>`;
}

// ═══════════════════════════════════════════════════════════
// PASOS — ESTADO DE RESULTADOS
// ═══════════════════════════════════════════════════════════
function stepGrossProfit(c, sn, badge) {
  return baseStep(sn, badge,
    'Gross Profit — Primer Margen',
    `Calculá el Gross Profit de ${c.name}. Es lo que queda del revenue después de los costos directos de producción (COGS).`,
    `Gross Profit = Revenue − COGS\n= $${fmt(c.revenue)}M − $${fmt(c.cogs)}M = $${fmt(c.grossProfit)}M`,
    `Restá COGS del Revenue: ${fmt(c.revenue)} − ${fmt(c.cogs)}.`,
    'Gross Profit ($M)', '$M', 'verifyGrossProfit',
    infoBoxes([['Revenue', `$${fmt(c.revenue)}M`], ['COGS', `$${fmt(c.cogs)}M`]]),
    `<strong>Gross Profit</strong> mide la rentabilidad antes de los gastos operativos. Un margen alto indica que el negocio tiene ventaja competitiva en costos o poder de fijación de precios.`
  );
}
function verifyGrossProfit() {
  const c = state.currentCase;
  genericVerify({
    correct: c.grossProfit, tolerance: 5,
    nbKey: 'grossProfit', nbVal: c.grossProfit,
    feedbackCorrect: `✅ Gross Profit = $${fmt(c.grossProfit)}M. Margen Bruto = ${c.grossMargin}%. De cada $100 de ventas, $${c.grossMargin} quedan después de los costos directos.`,
    feedbackWrong:   `Respuesta: $${fmt(c.grossProfit)}M → Revenue − COGS = ${fmt(c.revenue)} − ${fmt(c.cogs)}.`,
    tryAgain: 'GP = Revenue − COGS.'
  });
}

function stepMargenBruto(c, sn, badge) {
  const gp = state.notebook.grossProfit !== undefined ? state.notebook.grossProfit : c.grossProfit;
  return baseStep(sn, badge,
    'Margen Bruto %',
    `¿Qué porcentaje del revenue es Gross Profit? Expresá en % con 1 decimal.`,
    `Margen Bruto = Gross Profit / Revenue × 100\n= ${fmt(gp)} / ${fmt(c.revenue)} × 100 = ${c.grossMargin}%`,
    `Dividí el Gross Profit entre Revenue y multiplicá por 100.`,
    'Margen Bruto (%)', '%', 'verifyMargenBruto',
    infoBoxes([['Gross Profit', `$${fmt(gp)}M`], ['Revenue', `$${fmt(c.revenue)}M`]])
  );
}
function verifyMargenBruto() {
  const c = state.currentCase;
  genericVerify({
    correct: c.grossMargin, tolerance: 0.5,
    nbKey: 'margenBruto', nbVal: c.grossMargin,
    feedbackCorrect: `✅ Margen Bruto = ${c.grossMargin}%. Por cada $100 de revenue, $${c.grossMargin} quedan tras los costos directos.`,
    feedbackWrong:   `Respuesta: ${c.grossMargin}% → ${c.grossProfit}/${c.revenue}×100.`,
    tryAgain: 'Dividí GP entre Revenue y multiplicá por 100.'
  });
}

function stepEbit(c, sn, badge) {
  const gp = state.notebook.grossProfit !== undefined ? state.notebook.grossProfit : c.grossProfit;
  let formula, hint, boxes;
  if (c.id === 2) {
    // Case 3 — Costco: D&A embebido en SGA, EBIT = GP - SGA (sin D&A aparte)
    formula = `EBIT = Gross Profit − SG&A\n= $${fmt(gp)}M − $${fmt(c.sga)}M = $${fmt(c.ebit)}M\n(D&A ya está embebido en SG&A y COGS)`;
    hint    = `GP − SGA = ${fmt(gp)} − ${fmt(c.sga)}.`;
    boxes   = infoBoxes([['Gross Profit',`$${fmt(gp)}M`],['SG&A (con D&A)',`$${fmt(c.sga)}M`]]);
  } else if (c.nomina !== undefined) {
    // Case 2: Nómina separada
    formula = `EBIT = Gross Profit − Nómina − Otros SG&A − D&A\n= ${fmt(gp)} − ${fmt(c.nomina)} − ${fmt(c.otrosSga)} − ${fmt(c.da)} = $${fmt(c.ebit)}M`;
    hint    = `GP − Nómina − Otros SGA − D&A = ${fmt(gp)} − ${fmt(c.nomina)} − ${fmt(c.otrosSga)} − ${fmt(c.da)}.`;
    boxes   = infoBoxes([['Gross Profit',`$${fmt(gp)}M`],['Nómina',`$${fmt(c.nomina)}M`],['Otros SG&A',`$${fmt(c.otrosSga)}M`],['D&A',`$${fmt(c.da)}M`]]);
  } else {
    formula = `EBIT = Gross Profit − SG&A − D&A\n= ${fmt(gp)} − ${fmt(c.sga)} − ${fmt(c.da)} = $${fmt(c.ebit)}M`;
    hint    = `GP − SG&A − D&A = ${fmt(gp)} − ${fmt(c.sga)} − ${fmt(c.da)}.`;
    boxes   = infoBoxes([['Gross Profit',`$${fmt(gp)}M`],['SG&A',`$${fmt(c.sga)}M`],['D&A',`$${fmt(c.da)}M`]]);
  }
  return baseStep(sn, badge,
    'EBIT — Resultado Operativo',
    `El EBIT es el resultado operativo puro (antes de intereses e impuestos). Restá todos los gastos operativos del Gross Profit.`,
    formula, hint, 'EBIT ($M)', '$M', 'verifyEbit', boxes,
    `<strong>EBIT</strong> excluye el efecto de la estructura financiera (intereses) y los impuestos. Permite comparar empresas con distintas deudas o regímenes fiscales.`
  );
}
function verifyEbit() {
  const c = state.currentCase;
  genericVerify({
    correct: c.ebit, tolerance: 5,
    nbKey: 'ebit', nbVal: c.ebit,
    feedbackCorrect: `✅ EBIT = $${fmt(c.ebit)}M. Margen EBIT = ${c.ebitMargin}%.`,
    feedbackWrong:   `Respuesta: $${fmt(c.ebit)}M → GP − SG&A − D&A = ${c.grossProfit} − ${c.sga} − ${c.da}.`,
    tryAgain: 'EBIT = Gross Profit − SG&A − D&A.'
  });
}

function stepMargenEbit(c, sn, badge) {
  const ebit = state.notebook.ebit !== undefined ? state.notebook.ebit : c.ebit;
  return baseStep(sn, badge,
    'Margen EBIT %',
    `¿Qué % del revenue es EBIT? Expresá en % con 1 decimal.`,
    `Margen EBIT = EBIT / Revenue × 100\n= ${fmt(ebit)} / ${fmt(c.revenue)} × 100 = ${c.ebitMargin}%`,
    `Dividí EBIT entre Revenue y multiplicá por 100.`,
    'Margen EBIT (%)', '%', 'verifyMargenEbit',
    infoBoxes([['EBIT', `$${fmt(ebit)}M`], ['Revenue', `$${fmt(c.revenue)}M`]])
  );
}
function verifyMargenEbit() {
  const c = state.currentCase;
  genericVerify({
    correct: c.ebitMargin, tolerance: 0.5,
    nbKey: 'margenEbit', nbVal: c.ebitMargin,
    feedbackCorrect: `✅ Margen EBIT = ${c.ebitMargin}%.`,
    feedbackWrong:   `Respuesta: ${c.ebitMargin}% → ${c.ebit}/${c.revenue}×100.`,
    tryAgain: 'EBIT / Revenue × 100.'
  });
}

function stepNopat(c, sn, badge) {
  const ebit = state.notebook.ebit !== undefined ? state.notebook.ebit : c.ebit;
  return baseStep(sn, badge,
    'NOPAT — Resultado Operativo Neto de Impuestos',
    `El NOPAT elimina el efecto de la estructura financiera. Es la utilidad que generaría la empresa si operara sin deuda. EBIT = $${fmt(ebit)}M, tasa = ${c.tax}%.`,
    `NOPAT = EBIT × (1 − t)\n= $${fmt(ebit)}M × (1 − ${c.tax}%) = $${fmt(c.nopat)}M`,
    `Multiplicá el EBIT por (1 − ${c.tax}%): ${fmt(ebit)} × (1 − ${c.tax}/100).`,
    'NOPAT ($M)', '$M', 'verifyNopat',
    infoBoxes([['EBIT', `$${fmt(ebit)}M`], ['Tasa impositiva', `${c.tax}%`]]),
    `<strong>NOPAT</strong> (Net Operating Profit After Tax) es la base de todos los indicadores de valor: ROIC, EVA y FFL. Elimina la distorsión financiera del EBIT.`
  );
}
function verifyNopat() {
  const c = state.currentCase;
  genericVerify({
    correct: c.nopat, tolerance: 5,
    nbKey: 'nopat', nbVal: c.nopat,
    feedbackCorrect: `✅ NOPAT = $${fmt(c.nopat)}M. Margen NOPAT = ${c.nopatMargin}%. Base del análisis de valor.`,
    feedbackWrong:   `Respuesta: $${fmt(c.nopat)}M → EBIT × (1−t) = ${c.ebit} × (1 − ${c.tax}/100).`,
    tryAgain: 'NOPAT = EBIT × (1 − t).'
  });
}

function stepMargenNopat(c, sn, badge) {
  const nopat = state.notebook.nopat !== undefined ? state.notebook.nopat : c.nopat;
  return baseStep(sn, badge,
    'Margen NOPAT %',
    `¿Qué % del revenue es NOPAT? Expresá en % con 1 decimal.`,
    `Margen NOPAT = NOPAT / Revenue × 100\n= ${fmt(nopat)} / ${fmt(c.revenue)} × 100 = ${c.nopatMargin}%`,
    `Dividí NOPAT entre Revenue y multiplicá por 100.`,
    'Margen NOPAT (%)', '%', 'verifyMargenNopat',
    infoBoxes([['NOPAT', `$${fmt(nopat)}M`], ['Revenue', `$${fmt(c.revenue)}M`]]),
    `<strong>Identidad DuPont:</strong> ROIC = Margen NOPAT × Rotación del Activo Neto. Vas a usar este margen en el próximo bloque.`
  );
}
function verifyMargenNopat() {
  const c = state.currentCase;
  genericVerify({
    correct: c.nopatMargin, tolerance: 0.3,
    nbKey: 'margenNopat', nbVal: c.nopatMargin,
    feedbackCorrect: `✅ Margen NOPAT = ${c.nopatMargin}%. Por cada $100 de ventas, $${c.nopatMargin} son NOPAT. Con la Rotación van a componer el ROIC.`,
    feedbackWrong:   `Respuesta: ${c.nopatMargin}% → ${c.nopat}/${c.revenue}×100.`,
    tryAgain: 'Dividí NOPAT entre Revenue y multiplicá por 100.'
  });
}

// ═══════════════════════════════════════════════════════════
// PASOS — CAPITAL INVERTIDO
// ═══════════════════════════════════════════════════════════
function stepNof(c, sn, badge) {
  const taskExtra = c.id === 2
    ? ` AO = CxC ($${fmt(c.ar)}M) + Inv ($${fmt(c.inventory)}M) = $${fmt(c.totalAO)}M. PO = CxP ($${fmt(c.ap)}M) + Gastos devengados ($${fmt(c.accrued)}M) + Cuotas membresía ($${fmt(c.membershipFees)}M) = $${fmt(c.totalPO)}M. ¡Las cuotas de membresía son la clave!`
    : c.id === 1
    ? ` Los AO corrientes son CxC + Inv + Anticipo = $${fmt(c.totalAO)}M. Los PO son CxP + Nómina a pagar + Ing. diferidos = $${fmt(c.totalPO)}M.`
    : '';
  const conceptNOF = c.id === 2
    ? `<strong>NOF negativo</strong> en Costco: los proveedores ($${fmt(c.ap)}M) y miembros (cuotas diferidas $${fmt(c.membershipFees)}M) financian el inventario ($${fmt(c.inventory)}M). Este "subsidio" libera capital enorme y explica por qué Costco tiene ROIC tan alto con márgenes tan bajos.`
    : `<strong>NOF positivo</strong> → la empresa financia su ciclo con capital propio/deuda. <strong>NOF negativo</strong> → los proveedores financian el negocio (ventaja competitiva de capital de trabajo).`;
  return baseStep(sn, badge,
    'NOF — Necesidades Operativas de Fondos',
    `Las NOF son el capital "atrapado" en el ciclo operativo.${taskExtra} Total AO corriente = $${fmt(c.totalAO)}M · Total PO corriente = $${fmt(c.totalPO)}M. Puede ser negativo.`,
    `NOF = Total AO corriente − Total PO corriente\n= ${fmt(c.totalAO)} − ${fmt(c.totalPO)} = $${fmt(c.nof)}M`,
    `Restá el total de pasivos operativos del total de activos operativos: ${fmt(c.totalAO)} − ${fmt(c.totalPO)}.`,
    'NOF ($M, puede ser negativo)', '$M', 'verifyNof',
    infoBoxes([['Total AO', `$${fmt(c.totalAO)}M`], ['Total PO', `$${fmt(c.totalPO)}M`]]),
    conceptNOF
  );
}
function verifyNof() {
  const c = state.currentCase;
  const msg = c.nof < 0
    ? `✅ NOF = $${fmt(c.nof)}M. NOF negativo: los proveedores y miembros financian el ciclo → ventaja competitiva de capital de trabajo.`
    : `✅ NOF = $${fmt(c.nof)}M. NOF positivo: la empresa necesita $${fmt(c.nof)}M para financiar su ciclo operativo.`;
  genericVerify({
    correct: c.nof, tolerance: c.id === 2 ? 50 : 5,
    nbKey: 'nof', nbVal: c.nof,
    feedbackCorrect: msg,
    feedbackWrong:   `Respuesta: $${fmt(c.nof)}M → AO − PO = ${c.totalAO} − ${c.totalPO}.`,
    tryAgain: 'NOF = Activos Operativos corrientes − Pasivos Operativos corrientes.'
  });
}

function stepCi(c, sn, badge) {
  const nof = state.notebook.nof !== undefined ? state.notebook.nof : c.nof;
  let task, formula, hint, boxes, concept;
  if (c.otrosNeto !== undefined) {
    task    = `CI = NOF + AFN (PP&E neto) + AIN (intangibles) + Otros activos op. netos. NOF = $${fmt(nof)}M · AFN = $${fmt(c.afn)}M · AIN = $${fmt(c.ain)}M · Otros = $${fmt(c.otrosNeto)}M.`;
    formula = `CI = NOF + AFN + AIN + Otros\n= (${fmt(nof)}) + ${fmt(c.afn)} + ${fmt(c.ain)} + ${fmt(c.otrosNeto)} = $${fmt(c.ci)}M`;
    hint    = `NOF + AFN + AIN + Otros: ${fmt(nof)} + ${fmt(c.afn)} + ${fmt(c.ain)} + ${fmt(c.otrosNeto)}.`;
    boxes   = infoBoxes([['NOF',`$${fmt(nof)}M`],['AFN',`$${fmt(c.afn)}M`],['AIN',`$${fmt(c.ain)}M`],['Otros',`$${fmt(c.otrosNeto)}M`]]);
    concept = `Costco tiene CI = $${fmt(c.ci)}M pero Total Assets = $${fmt(c.totalAssets)}M. La diferencia es enorme: Caja+Inversiones ($${fmt(c.actFin)}M) se excluyen porque son activos financieros, y el <strong>NOF negativo</strong> reduce el CI. Esto amplifica el ROIC vs ROA.`;
  } else {
    task    = `El CI suma todo el capital que la empresa necesita para operar. NOF = $${fmt(nof)}M · AFN = $${fmt(c.afn)}M · AIN = $${fmt(c.ain)}M.`;
    formula = `CI = NOF + AFN + AIN\n= ${fmt(nof)} + ${fmt(c.afn)} + ${fmt(c.ain)} = $${fmt(c.ci)}M`;
    hint    = `Sumar NOF + AFN + AIN: ${fmt(nof)} + ${fmt(c.afn)} + ${fmt(c.ain)}.`;
    boxes   = infoBoxes([['NOF',`$${fmt(nof)}M`],['AFN',`$${fmt(c.afn)}M`],['AIN',`$${fmt(c.ain)}M`]]);
    concept = c.id === 1
      ? `El <strong>Capital Invertido</strong> excluye activos/pasivos financieros. Por eso Caja ($${fmt(c.caja)}M) e Inversiones Fin. ($${fmt(c.invFinLP)}M) no entran.`
      : `El <strong>Capital Invertido</strong> es el denominador del ROIC y la base del EVA. Solo incluye lo que genera resultado operativo.`;
  }
  return baseStep(sn, badge, 'Capital Invertido — Total de Recursos Comprometidos',
    task, formula, hint, 'Capital Invertido ($M)', '$M', 'verifyCi', boxes, concept);
}
function verifyCi() {
  const c = state.currentCase;
  const wrongMsg = c.otrosNeto !== undefined
    ? `Respuesta: $${fmt(c.ci)}M → NOF + AFN + AIN + Otros = (${c.nof}) + ${c.afn} + ${c.ain} + ${c.otrosNeto}.`
    : `Respuesta: $${fmt(c.ci)}M → NOF + AFN + AIN = ${c.nof} + ${c.afn} + ${c.ain}.`;
  genericVerify({
    correct: c.ci, tolerance: c.id === 2 ? 200 : 5,
    nbKey: 'ci', nbVal: c.ci,
    feedbackCorrect: `✅ CI = $${fmt(c.ci)}M. El Capital Invertido es la base del ROIC y del EVA.`,
    feedbackWrong:   wrongMsg,
    tryAgain: c.otrosNeto !== undefined ? 'CI = NOF + AFN + AIN + Otros.' : 'CI = NOF + AFN + AIN.',
    onCorrect: () => {
      state.notebook.prevCI = c.prevCI;
    }
  });
}

// ═══════════════════════════════════════════════════════════
// PASOS — ROIC & EVA
// ═══════════════════════════════════════════════════════════
function stepRotacion(c, sn, badge) {
  const ci = state.notebook.ci !== undefined ? state.notebook.ci : c.ci;
  return baseStep(sn, badge,
    'Rotación del Activo Neto',
    `¿Cuántos pesos de revenue genera cada peso de Capital Invertido? Es la "velocidad" del negocio. Expresá como múltiplo con 1 decimal.`,
    `Rotación = Revenue / Capital Invertido\n= ${fmt(c.revenue)} / ${fmt(ci)} = ${c.rotacion}x`,
    `Dividí Revenue entre CI: ${fmt(c.revenue)} / ${fmt(ci)}.`,
    'Rotación (múltiplo)', 'x', 'verifyRotacion',
    infoBoxes([['Revenue', `$${fmt(c.revenue)}M`], ['CI', `$${fmt(ci)}M`]]),
    `Negocios de <strong>bajo margen + alta rotación</strong> (ej: retail masivo) pueden tener el mismo ROIC que negocios de <strong>alto margen + baja rotación</strong> (ej: farmacéuticas). Esto es la identidad DuPont.`
  );
}
function verifyRotacion() {
  const c = state.currentCase;
  genericVerify({
    correct: c.rotacion, tolerance: 0.05,
    nbKey: 'rotacion', nbVal: c.rotacion,
    feedbackCorrect: `✅ Rotación = ${c.rotacion}x. Por cada $1 de CI, ${c.name} genera $${c.rotacion} de revenue.`,
    feedbackWrong:   `Respuesta: ${c.rotacion}x → Revenue/CI = ${c.revenue}/${c.ci}.`,
    tryAgain: 'Rotación = Revenue / CI.'
  });
}

function stepRoic(c, sn, badge) {
  const margen = state.notebook.margenNopat !== undefined ? state.notebook.margenNopat : c.nopatMargin;
  const rot    = state.notebook.rotacion    !== undefined ? state.notebook.rotacion    : c.rotacion;
  const conceptRoic = c.id === 2
    ? `<strong>La paradoja de Costco resuelta:</strong> Margen NOPAT ${margen}% × Rotación ${rot}x = ${c.roic}% ROIC. El margen más bajo de los 3 casos genera el ROIC más alto. ¿Por qué? Porque el NOF negativo (−$${fmt(Math.abs(c.nof))}M) comprime el CI a $${fmt(c.ci)}M, amplificando la rotación. Esto es el poder del modelo de membresías de Costco. ROIC (${c.roic}%) vs ROA (${c.roa}%) — el ROIC es más alto porque el CI operativo excluye la caja y el NOF negativo reduce aún más el denominador.`
    : `El <strong>ROIC</strong> compara el retorno sobre el capital invertido vs. el costo de ese capital (WACC). Si ROIC > WACC → la empresa crea valor. Si ROIC < WACC → destruye valor.`;
  return baseStep(sn, badge,
    'ROIC — La Identidad DuPont',
    c.id === 2
      ? `Con un margen NOPAT de solo ${margen}%, ¿cómo puede Costco tener un ROIC del ${c.roic}%? La respuesta está en la Rotación. Calculá el ROIC via DuPont. Expresá en % con 1 decimal.`
      : `El ROIC mide la rentabilidad real del negocio. Calculalo usando la identidad DuPont: Margen NOPAT × Rotación. Expresá en % con 1 decimal.`,
    `ROIC = Margen NOPAT × Rotación AN\n= ${margen}% × ${rot}x = ${c.roic}%`,
    `Multiplicá el Margen NOPAT (${margen}%) por la Rotación (${rot}x).`,
    'ROIC (%)', '%', 'verifyRoic',
    infoBoxes([['Margen NOPAT', `${margen}%`], ['Rotación', `${rot}x`], ['WACC', `${c.wacc}%`]]),
    conceptRoic
  );
}
function verifyRoic() {
  const c = state.currentCase;
  genericVerify({
    correct: c.roic, tolerance: 0.6,
    nbKey: 'roic', nbVal: c.roic,
    feedbackCorrect: `✅ ROIC = ${c.roic}% vs WACC = ${c.wacc}%. ${c.roic > c.wacc ? '🟢 ROIC > WACC → la empresa CREA valor económico.' : '🔴 ROIC < WACC → destruye valor.'}`,
    feedbackWrong:   `Respuesta: ${c.roic}% → Margen × Rotación = ${c.nopatMargin}% × ${c.rotacion}.`,
    tryAgain: 'ROIC = Margen NOPAT (%) × Rotación (x).'
  });
}

function stepSpread(c, sn, badge) {
  const roic = state.notebook.roic !== undefined ? state.notebook.roic : c.roic;
  return baseStep(sn, badge,
    'Spread — ¿Cuánto supera el ROIC al costo de capital?',
    `El spread mide el exceso de rentabilidad por encima del costo de capital (WACC). Es la "tasa de creación de valor" por cada peso invertido. WACC = ${c.wacc}%. Expresá en % con 1 decimal.`,
    `Spread = ROIC − WACC\n= ${roic}% − ${c.wacc}% = ${c.spread}%`,
    `Restá el WACC del ROIC: ${roic} − ${c.wacc}.`,
    'Spread (%)', '%', 'verifySpread',
    infoBoxes([['ROIC', `${roic}%`], ['WACC', `${c.wacc}%`]])
  );
}
function verifySpread() {
  const c = state.currentCase;
  genericVerify({
    correct: c.spread, tolerance: 0.5,
    nbKey: 'spread', nbVal: c.spread,
    feedbackCorrect: `✅ Spread = ${c.spread}%. Cada peso de CI genera ${c.spread/100} pesos de valor por encima del costo de capital.`,
    feedbackWrong:   `Respuesta: ${c.spread}% → ROIC − WACC = ${c.roic} − ${c.wacc}.`,
    tryAgain: 'Spread = ROIC − WACC.'
  });
}

function stepEva(c, sn, badge) {
  const spread = state.notebook.spread   !== undefined ? state.notebook.spread   : c.spread;
  const ci     = state.notebook.ci       !== undefined ? state.notebook.ci       : c.ci;
  const formulaText = state.diffKey === 'facil'
    ? `EVA = (ROIC − WACC) × CI\n= (${c.roic}% − ${c.wacc}%) × $${fmt(ci)}M\n= ${c.spread}% × ${fmt(ci)} = $${fmt(c.eva)}M`
    : `EVA = Spread × CI\n= ${spread}% × $${fmt(ci)}M = $${fmt(c.eva)}M`;
  return baseStep(sn, badge,
    'EVA — Economic Value Added',
    `El EVA es el veredicto final de creación de valor: ¿${c.name} generó riqueza para sus accionistas este año? CI = $${fmt(ci)}M. Expresá en $M.`,
    formulaText,
    `EVA = (ROIC − WACC) × CI / 100 = (${c.roic} − ${c.wacc}) × ${fmt(ci)} / 100.`,
    'EVA ($M)', '$M', 'verifyEva',
    infoBoxes([['Spread', `${c.spread}%`], ['CI', `$${fmt(ci)}M`]]),
    `<strong>EVA positivo</strong> → la empresa crea riqueza para sus accionistas (retorna más de lo que le cuesta el capital). <strong>EVA negativo</strong> → destruye valor aunque tenga ganancias contables.`
  );
}
function verifyEva() {
  const c = state.currentCase;
  genericVerify({
    correct: c.eva, tolerance: 15,
    nbKey: 'eva', nbVal: c.eva,
    feedbackCorrect: `✅ EVA = $${fmt(c.eva)}M. ${c.eva > 0 ? '🟢 EVA positivo: cada año, '+c.name+' CREA $'+fmt(c.eva)+'M de riqueza para sus accionistas.' : '🔴 EVA negativo: destruye valor.'}`,
    feedbackWrong:   `Respuesta: $${fmt(c.eva)}M → Spread × CI / 100 = ${c.spread}% × ${c.ci} / 100.`,
    tryAgain: 'EVA = (ROIC − WACC) × CI / 100. Atención: el spread está en %, dividí por 100.'
  });
}

// ═══════════════════════════════════════════════════════════
// PASOS — CICLO DE CONVERSIÓN DE CAJA
// ═══════════════════════════════════════════════════════════
function stepDso(c, sn, badge) {
  return baseStep(sn, badge,
    'DSO — Days Sales Outstanding',
    `¿Cuántos días tarda ${c.name} en cobrar a sus clientes? Cuanto menor, mejor: el efectivo entra antes. CxC = $${fmt(c.ar)}M. Expresá en días con 1 decimal.`,
    `DSO = (CxC × 365) / Revenue\n= (${fmt(c.ar)} × 365) / ${fmt(c.revenue)} = ${c.dso} días`,
    `Multiplicá CxC por 365 y dividí por Revenue: ${c.ar} × 365 / ${c.revenue}.`,
    'DSO (días)', 'días', 'verifyDso',
    infoBoxes([['CxC (AR)', `$${fmt(c.ar)}M`], ['Revenue', `$${fmt(c.revenue)}M`]])
  );
}
function verifyDso() {
  const c = state.currentCase;
  genericVerify({
    correct: c.dso, tolerance: 0.5,
    nbKey: 'dso', nbVal: c.dso,
    feedbackCorrect: `✅ DSO = ${c.dso} días. ${c.name} tarda ${c.dso} días en cobrar. Cada día de reducción libera $${Math.round(c.revenue/365)}M de caja.`,
    feedbackWrong:   `Respuesta: ${c.dso} días → CxC × 365 / Revenue = ${c.ar} × 365 / ${c.revenue}.`,
    tryAgain: 'DSO = CxC × 365 / Revenue.'
  });
}

function stepDio(c, sn, badge) {
  return baseStep(sn, badge,
    'DIO — Days Inventory Outstanding',
    `¿Cuántos días tarda ${c.name} en rotar su inventario? Cuanto menor, menos capital inmovilizado. Inventario = $${fmt(c.inventory)}M. Expresá en días con 1 decimal.`,
    `DIO = (Inventario × 365) / COGS\n= (${fmt(c.inventory)} × 365) / ${fmt(c.cogs)} = ${c.dio} días`,
    `Multiplicá Inventario por 365 y dividí por COGS: ${c.inventory} × 365 / ${c.cogs}.`,
    'DIO (días)', 'días', 'verifyDio',
    infoBoxes([['Inventario', `$${fmt(c.inventory)}M`], ['COGS', `$${fmt(c.cogs)}M`]])
  );
}
function verifyDio() {
  const c = state.currentCase;
  genericVerify({
    correct: c.dio, tolerance: 0.5,
    nbKey: 'dio', nbVal: c.dio,
    feedbackCorrect: `✅ DIO = ${c.dio} días. El inventario rota cada ${c.dio} días. Cada día de reducción libera $${Math.round(c.cogs/365)}M de caja.`,
    feedbackWrong:   `Respuesta: ${c.dio} días → Inventario × 365 / COGS = ${c.inventory} × 365 / ${c.cogs}.`,
    tryAgain: 'DIO = Inventario × 365 / COGS.'
  });
}

function stepDpo(c, sn, badge) {
  return baseStep(sn, badge,
    'DPO — Days Payable Outstanding',
    `¿Cuántos días tarda ${c.name} en pagar a sus proveedores? Cuanto mayor, más tiempo retiene el efectivo. CxP = $${fmt(c.ap)}M. Expresá en días con 1 decimal.`,
    `DPO = (CxP × 365) / COGS\n= (${fmt(c.ap)} × 365) / ${fmt(c.cogs)} = ${c.dpo} días`,
    `Multiplicá CxP por 365 y dividí por COGS: ${c.ap} × 365 / ${c.cogs}.`,
    'DPO (días)', 'días', 'verifyDpo',
    infoBoxes([['CxP (AP)', `$${fmt(c.ap)}M`], ['COGS', `$${fmt(c.cogs)}M`]])
  );
}
function verifyDpo() {
  const c = state.currentCase;
  genericVerify({
    correct: c.dpo, tolerance: 0.5,
    nbKey: 'dpo', nbVal: c.dpo,
    feedbackCorrect: `✅ DPO = ${c.dpo} días. Cuanto mayor el DPO, más tiempo retiene el efectivo antes de pagar a proveedores.`,
    feedbackWrong:   `Respuesta: ${c.dpo} días → CxP × 365 / COGS = ${c.ap} × 365 / ${c.cogs}.`,
    tryAgain: 'DPO = CxP × 365 / COGS.'
  });
}

function stepCcc(c, sn, badge) {
  const dso = state.notebook.dso !== undefined ? state.notebook.dso : c.dso;
  const dio = state.notebook.dio !== undefined ? state.notebook.dio : c.dio;
  const dpo = state.notebook.dpo !== undefined ? state.notebook.dpo : c.dpo;
  return baseStep(sn, badge,
    'CCC — Ciclo de Conversión de Caja',
    `El CCC mide cuántos días la empresa necesita financiar su operación. CCC negativo es una ventaja competitiva: los proveedores financian el negocio. Puede ser negativo.`,
    `CCC = DSO + DIO − DPO\n= ${dso} + ${dio} − ${dpo} = ${c.ccc} días`,
    `Sumá DSO y DIO, luego restá DPO: ${dso} + ${dio} − ${dpo}.`,
    'CCC (días, puede ser negativo)', 'días', 'verifyCcc',
    infoBoxes([['DSO', `${dso} días`], ['DIO', `${dio} días`], ['DPO', `${dpo} días`]]),
    `<strong>CCC positivo</strong>: la empresa financia su ciclo con capital propio/deuda (necesidad de caja). <strong>CCC negativo</strong>: proveedores y clientes financian el negocio (Amazon, Mercado Libre, Costco). Refleja poder de negociación.`
  );
}
function verifyCcc() {
  const c = state.currentCase;
  const msg = c.ccc < 0
    ? `✅ CCC = ${c.ccc} días. CCC negativo: ${c.name} opera con financiamiento de sus proveedores y clientes.`
    : `✅ CCC = ${c.ccc} días. La empresa necesita ${c.ccc} días de financiamiento para su ciclo operativo.`;
  genericVerify({
    correct: c.ccc, tolerance: 1.0,
    nbKey: 'ccc', nbVal: c.ccc,
    feedbackCorrect: msg,
    feedbackWrong:   `Respuesta: ${c.ccc} días → DSO + DIO − DPO = ${c.dso} + ${c.dio} − ${c.dpo}.`,
    tryAgain: 'CCC = DSO + DIO − DPO.'
  });
}

// ═══════════════════════════════════════════════════════════
// PASO — FLUJO DE FONDOS LIBRE
// ═══════════════════════════════════════════════════════════
function stepFfl(c, sn, badge) {
  const nopat = state.notebook.nopat !== undefined ? state.notebook.nopat : c.nopat;
  return baseStep(sn, badge,
    'FFL — Flujo de Fondos Libre',
    `El FFL (Free Cash Flow operativo) es el efectivo real que genera la empresa después de reinvertir en su crecimiento. ΔCI = CI − CI anterior = $${fmt(c.ci)}M − $${fmt(c.prevCI)}M = $${fmt(c.invNeta)}M.`,
    `FFL = NOPAT − ΔCI\n= $${fmt(nopat)}M − $${fmt(c.invNeta)}M = $${fmt(c.ffl)}M`,
    `Restá la inversión neta (ΔCI) del NOPAT: ${fmt(nopat)} − ${fmt(c.invNeta)}.`,
    'FFL ($M)', '$M', 'verifyFfl',
    infoBoxes([['NOPAT', `$${fmt(nopat)}M`], ['ΔCI', `$${fmt(c.invNeta)}M`], ['CI ant.', `$${fmt(c.prevCI)}M`]]),
    `<strong>FFL = NOPAT − Inversión Neta.</strong> Si FFL > 0: genera más de lo que invierte → puede pagar deuda o distribuir dividendos. Si FFL < 0: invierte más de lo que gana → necesita financiamiento externo (etapa de crecimiento).`
  );
}
function verifyFfl() {
  const c = state.currentCase;
  const sign = c.ffl >= 0 ? '🟢' : '🟡';
  const msg  = c.ffl >= 0
    ? `${sign} FFL positivo: ${c.name} generó $${fmt(c.ffl)}M de caja libre después de reinvertir en el negocio.`
    : `${sign} FFL negativo: ${c.name} invirtió $${fmt(Math.abs(c.ffl))}M más de lo que generó — etapa de crecimiento, necesita financiamiento.`;
  genericVerify({
    correct: c.ffl, tolerance: 10,
    nbKey: 'ffl', nbVal: c.ffl,
    feedbackCorrect: `✅ FFL = $${fmt(c.ffl)}M. ${msg}`,
    feedbackWrong:   `Respuesta: $${fmt(c.ffl)}M → NOPAT − ΔCI = ${c.nopat} − ${c.invNeta}.`,
    tryAgain: 'FFL = NOPAT − ΔCI (inversión neta en Capital Invertido).',
    onCorrect: () => {
      setTimeout(() => {
        const fb = document.getElementById('feedbackBox');
        if (fb) {
          const cls = c.ffl >= 0 ? 'positive' : 'negative';
          const ico = c.ffl >= 0 ? '📈' : '📉';
          fb.insertAdjacentHTML('afterend',
            `<div class="verdict-inline ${cls}">${ico} Análisis completo finalizado. Pasá a los resultados →</div>`);
        }
        const btn = document.getElementById('btnNext');
        if (btn) btn.textContent = 'Ver resultados →';
      }, 200);
    }
  });
}

// ═══════════════════════════════════════════════════════════
// PASOS EXCLUSIVOS CASO 3 — COSTCO
// ═══════════════════════════════════════════════════════════
function stepDeltaAN(c, sn, badge) {
  const ci = state.notebook.ci !== undefined ? state.notebook.ci : c.ci;
  return baseStep(sn, badge,
    'ΔCI — Inversión Neta del Período',
    `El ΔCI representa cuánto creció el Capital Invertido este año: la inversión neta en activos operativos. CI actual = $${fmt(ci)}M · CI año anterior (FY2023) = $${fmt(c.prevCI)}M.`,
    `ΔCI = CI actual − CI anterior\n= $${fmt(ci)}M − $${fmt(c.prevCI)}M = $${fmt(c.invNeta)}M`,
    `Restá el CI del año anterior al CI actual: ${fmt(ci)} − ${fmt(c.prevCI)}.`,
    'ΔCI / Inversión Neta ($M)', '$M', 'verifyDeltaAN',
    infoBoxes([['CI actual', `$${fmt(ci)}M`], ['CI FY2023', `$${fmt(c.prevCI)}M`]]),
    `El <strong>ΔCI</strong> es la respuesta a "¿cuánto invirtió la empresa?". Si es positivo, la empresa creció sus activos operativos. Costco invirtió $${fmt(c.invNeta)}M netos este año (apertura de nuevos clubes). En el FFL, este monto se resta al NOPAT.`
  );
}
function verifyDeltaAN() {
  const c = state.currentCase;
  genericVerify({
    correct: c.invNeta, tolerance: 200,
    nbKey: 'deltaAN', nbVal: c.invNeta,
    feedbackCorrect: `✅ ΔCI = $${fmt(c.invNeta)}M. Costco reinvirtió $${fmt(c.invNeta)}M en activos operativos netos (expansión de nuevos clubes, logística).`,
    feedbackWrong:   `Respuesta: $${fmt(c.invNeta)}M → CI actual − CI anterior = ${fmt(c.ci)} − ${fmt(c.prevCI)}.`,
    tryAgain: 'ΔCI = CI actual − CI año anterior.'
  });
}

function stepEbitda(c, sn, badge) {
  const ebit = state.notebook.ebit !== undefined ? state.notebook.ebit : c.ebit;
  return baseStep(sn, badge,
    'EBITDA — Capacidad de Generación de Fondos Operativos',
    `El EBITDA añade la depreciación y amortización de vuelta al EBIT. Representa el flujo operativo bruto antes de decisiones de inversión. D&A = $${fmt(c.da)}M (dato de notas de Capital IQ).`,
    `EBITDA = EBIT + D&A\n= $${fmt(ebit)}M + $${fmt(c.da)}M = $${fmt(c.ebitda)}M`,
    `Sumá D&A al EBIT: ${fmt(ebit)} + ${fmt(c.da)}.`,
    'EBITDA ($M)', '$M', 'verifyEbitda',
    infoBoxes([['EBIT', `$${fmt(ebit)}M`], ['D&A', `$${fmt(c.da)}M`]]),
    `<strong>EBITDA</strong> elimina el efecto de las decisiones contables de depreciación. Es el múltiplo más usado en valuación (EV/EBITDA). Para Costco: Margen EBITDA = ${c.ebitdaMargin}% — más del doble del margen NOPAT. Nota: no es lo mismo que FFL — EBITDA no descuenta las inversiones de capital.`
  );
}
function verifyEbitda() {
  const c = state.currentCase;
  genericVerify({
    correct: c.ebitda, tolerance: 50,
    nbKey: 'ebitda', nbVal: c.ebitda,
    feedbackCorrect: `✅ EBITDA = $${fmt(c.ebitda)}M. Margen EBITDA = ${c.ebitdaMargin}%. Refleja la capacidad operativa bruta antes de capex e impuestos.`,
    feedbackWrong:   `Respuesta: $${fmt(c.ebitda)}M → EBIT + D&A = ${c.ebit} + ${c.da}.`,
    tryAgain: 'EBITDA = EBIT + D&A.'
  });
}

function stepRoa(c, sn, badge) {
  const ebit = state.notebook.ebit !== undefined ? state.notebook.ebit : c.ebit;
  return baseStep(sn, badge,
    'ROA — Retorno sobre Activos Totales',
    `El ROA mide qué porcentaje del EBIT representa sobre los activos totales. Total Assets = $${fmt(c.totalAssets)}M (dato). Expresá en % con 1 decimal.`,
    `ROA = EBIT / Total Assets × 100\n= $${fmt(ebit)}M / $${fmt(c.totalAssets)}M × 100 = ${c.roa}%`,
    `Dividí EBIT entre Total Assets y multiplicá por 100: ${fmt(ebit)} / ${fmt(c.totalAssets)} × 100.`,
    'ROA (%)', '%', 'verifyRoa',
    infoBoxes([['EBIT', `$${fmt(ebit)}M`], ['Total Assets', `$${fmt(c.totalAssets)}M`]]),
    `El <strong>ROA</strong> incluye activos financieros (caja, inversiones) que no generan resultado operativo. Por eso ROA < ROIC. Costco: ROA = ${c.roa}% vs ROIC = ${c.roic}% — el Capital Invertido ($${fmt(c.ci)}M) es solo el ${Math.round(c.ci/c.totalAssets*100)}% de los activos totales ($${fmt(c.totalAssets)}M).`
  );
}
function verifyRoa() {
  const c = state.currentCase;
  genericVerify({
    correct: c.roa, tolerance: 0.3,
    nbKey: 'roa', nbVal: c.roa,
    feedbackCorrect: `✅ ROA = ${c.roa}%. Compare con ROIC = ${c.roic}%: la diferencia se explica por la caja ($${fmt(c.caja)}M) y el NOF negativo que reduce el CI pero no los activos totales.`,
    feedbackWrong:   `Respuesta: ${c.roa}% → EBIT / Total Assets × 100 = ${c.ebit} / ${c.totalAssets} × 100.`,
    tryAgain: 'ROA = EBIT / Total Assets × 100.'
  });
}

function stepRoe(c, sn, badge) {
  return baseStep(sn, badge,
    'ROE — Retorno sobre el Patrimonio Neto',
    `El ROE mide el retorno que obtuvieron los accionistas. Usa el Net Income (no NOPAT). Patrimonio Neto (PN) = $${fmt(c.pn)}M. Expresá en % con 1 decimal.`,
    `ROE = Net Income / Patrimonio Neto × 100\n= $${fmt(c.netIncome)}M / $${fmt(c.pn)}M × 100 = ${c.roe}%`,
    `Dividí el Net Income entre el PN: ${fmt(c.netIncome)} / ${fmt(c.pn)} × 100.`,
    'ROE (%)', '%', 'verifyRoe',
    infoBoxes([['Net Income', `$${fmt(c.netIncome)}M`], ['PN', `$${fmt(c.pn)}M`]]),
    `<strong>ROE</strong> mezcla resultado operativo + efecto del apalancamiento. Puede ser alto por rentabilidad real (como Costco) O por mucha deuda. La identidad DuPont expande: ROE = Margen Neto × Rotación × Apalancamiento. Por eso ROIC (puramente operativo) es más limpio que ROE.`
  );
}
function verifyRoe() {
  const c = state.currentCase;
  genericVerify({
    correct: c.roe, tolerance: 0.5,
    nbKey: 'roe', nbVal: c.roe,
    feedbackCorrect: `✅ ROE = ${c.roe}%. Comparación: ROA = ${c.roa}% · ROE = ${c.roe}% · ROIC = ${c.roic}%. ROIC es el más alto porque CI (activos operativos netos) es mucho menor que Total Assets o PN-relacionados.`,
    feedbackWrong:   `Respuesta: ${c.roe}% → Net Income / PN × 100 = ${c.netIncome} / ${c.pn} × 100.`,
    tryAgain: 'ROE = Net Income / Patrimonio Neto × 100.'
  });
}

// ═══════════════════════════════════════════════════════════
// PASO — CLASIFICACIÓN DE CUENTAS (Caso 2)
// ═══════════════════════════════════════════════════════════
function stepClassifyAccounts(c, sn, badge) {
  state.clsChoices = {};
  state.clsLocked  = {};

  const rows = c.classifyItems.map(it => `
    <div class="classify-row" id="cls_${it.id}">
      <div class="cls-info">
        <span class="cls-label">${it.label}</span>
        <span class="cls-amount">${it.val}</span>
      </div>
      <div class="cls-btns">
        <button class="cls-cat-btn sel-AO" data-cat="AO" onclick="selectCls('${it.id}','AO')">AO</button>
        <button class="cls-cat-btn sel-PO" data-cat="PO" onclick="selectCls('${it.id}','PO')">PO</button>
        <button class="cls-cat-btn sel-AF" data-cat="AF" onclick="selectCls('${it.id}','AF')">AF</button>
        <button class="cls-cat-btn sel-PF" data-cat="PF" onclick="selectCls('${it.id}','PF')">PF</button>
      </div>
      <div class="cls-tip" id="clstip_${it.id}"></div>
    </div>`).join('');

  return `
    <div class="step-header">
      <div class="step-number">${sn}</div>
      <div class="step-badge">${badge}</div>
      <div class="step-title">Clasificación de Cuentas del Balance</div>
      <div class="step-task">Clasificá cada cuenta en su categoría: <strong>AO</strong> (Activo Operativo), <strong>PO</strong> (Pasivo Operativo), <strong>AF</strong> (Activo Financiero) o <strong>PF</strong> (Pasivo Financiero). Atención: algunas cuentas son tramposas.</div>
    </div>
    <div class="concept-box">
      <strong>Regla de oro:</strong> Una cuenta es <strong>operativa</strong> si surge directamente del ciclo de negocio (cobrar, producir, pagar a proveedores, devengar salarios). Es <strong>financiera</strong> si surge de decisiones de estructura de capital: deuda bancaria, caja excedente, inversiones de portafolio, leases capitalizados (IFRS 16). Esta distinción define qué entra en el Capital Invertido.
    </div>
    <div class="cls-legend">
      <span class="cls-leg-item sel-AO">AO = Activo Operativo</span>
      <span class="cls-leg-item sel-PO">PO = Pasivo Operativo</span>
      <span class="cls-leg-item sel-AF">AF = Activo Financiero</span>
      <span class="cls-leg-item sel-PF">PF = Pasivo Financiero</span>
    </div>
    <div class="classify-container">${rows}</div>
    <div class="cls-progress" id="clsProgress">0 / ${c.classifyItems.length} clasificadas</div>
    <div class="answer-row" style="margin-top:4px">
      <button class="btn-verify" onclick="verifyClassify()">Verificar clasificación →</button>
      ${state.difficulty.hints ? `<button class="btn-hint" onclick="toggleHint()">💡 Pista</button>` : ''}
    </div>
    <div class="attempts-row" id="attemptsRow">${fmtDots()}</div>
    <div class="hint-box" id="hintBox">Las cuentas más tramposas: <strong>Caja excedente</strong> (¿te quedó del negocio o es excedente financiero?), <strong>Anticipo a proveedores</strong> (ciclo operativo → AO), <strong>Ingresos diferidos</strong> (obligación operativa → PO), <strong>Lease IFRS 16</strong> (es deuda → PF).</div>
    <div class="feedback-box" id="feedbackBox"></div>
    <button class="btn-next" id="btnNext" onclick="nextStep()">Siguiente paso →</button>`;
}

function selectCls(id, cat) {
  if (state.clsLocked && state.clsLocked[id]) return;
  if (!state.clsChoices) state.clsChoices = {};
  state.clsChoices[id] = cat;
  const row = document.getElementById('cls_' + id);
  if (!row) return;
  row.querySelectorAll('.cls-cat-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.cat === cat));
  const c = state.currentCase;
  const total = c.classifyItems.filter(it =>
    (state.clsChoices[it.id] || (state.clsLocked && state.clsLocked[it.id]))).length;
  const prog = document.getElementById('clsProgress');
  if (prog) prog.textContent = `${total} / ${c.classifyItems.length} clasificadas`;
}

function verifyClassify() {
  const c     = state.currentCase;
  const si    = state.currentStep;
  const items = c.classifyItems;
  const choices = state.clsChoices || {};
  if (!state.clsLocked) state.clsLocked = {};

  // Pre-check: all non-locked items must have a choice
  const pending = items.filter(it => !state.clsLocked[it.id] && !choices[it.id]);
  if (pending.length > 0) {
    showFeedback(`Clasificá todas las cuentas primero (${pending.length} pendientes).`, 'wrong');
    return;
  }

  const att = ++state.stepAttempts[si];
  markAttemptDot(att - 1);

  let correctTotal = Object.keys(state.clsLocked).length;
  const newWrong = [];

  items.forEach(it => {
    if (state.clsLocked[it.id]) return; // already confirmed correct
    const row   = document.getElementById('cls_' + it.id);
    const tipEl = document.getElementById('clstip_' + it.id);
    if (choices[it.id] === it.correct) {
      correctTotal++;
      state.clsLocked[it.id] = true;
      if (row) { row.classList.remove('cls-wrong'); row.classList.add('cls-correct'); }
      row && row.querySelectorAll('.cls-cat-btn').forEach(b => b.disabled = true);
    } else {
      newWrong.push(it);
      if (row) { row.classList.remove('cls-correct'); row.classList.add('cls-wrong'); }
      if (tipEl) {
        const msg = it.tip || `La clasificación correcta es ${it.correct}.`;
        tipEl.textContent = '💡 ' + msg;
        tipEl.style.display = 'block';
      }
    }
  });

  const allCorrect = correctTotal === items.length;
  const maxA = state.difficulty.maxAttempts;

  if (allCorrect) {
    awardPoints(si, att);
    state.notebook.classification = {...choices};
    document.querySelector('.btn-verify').disabled = true;
    showFeedback(`✅ ¡Perfecto! ${items.length}/${items.length} cuentas correctamente clasificadas. Ya podés construir el Capital Invertido operativo.`, 'correct');
    showNextBtn();
  } else if (att >= maxA) {
    // Reveal remaining wrong items
    items.forEach(it => {
      if (state.clsLocked[it.id]) return;
      const row   = document.getElementById('cls_' + it.id);
      const tipEl = document.getElementById('clstip_' + it.id);
      if (row) { row.classList.remove('cls-wrong'); row.classList.add('cls-revealed'); }
      row && row.querySelectorAll('.cls-cat-btn').forEach(b => b.disabled = true);
      if (tipEl) {
        tipEl.textContent = `✓ Correcta: ${it.correct}. ${it.tip || ''}`;
        tipEl.style.display = 'block';
      }
    });
    state.notebook.classification = {...choices, ...(Object.fromEntries(
      items.filter(it => !choices[it.id]).map(it => [it.id, it.correct])))};
    awardPoints(si, maxA + 1); // 0 pts
    document.querySelector('.btn-verify').disabled = true;
    showFeedback(`${correctTotal}/${items.length} correctas. Revisá las cuentas reveladas en amarillo — son los conceptos clave para el parcial.`, 'wrong');
    showNextBtn();
  } else {
    showFeedback(`${correctTotal}/${items.length} correctas. ${newWrong.length} marcadas en rojo. Corregílas y volvé a verificar. Intentos restantes: ${maxA - att}.`, 'wrong');
  }
}

// ═══════════════════════════════════════════════════════════
// PASO — CLASIFICACIÓN NOF / AFN / AIN (Caso 2)
// ═══════════════════════════════════════════════════════════
function stepClassifyNofAfnAin(c, sn, badge) {
  state.clsNofChoices = {};
  state.clsNofLocked  = {};

  const rows = c.classifyNofItems.map(it => `
    <div class="classify-row" id="clsnof_${it.id}">
      <div class="cls-info">
        <span class="cls-label">${it.label}</span>
        <span class="cls-amount">${it.val}</span>
      </div>
      <div class="cls-btns">
        <button class="cls-cat-btn sel-AO" data-cat="NOF" onclick="selectClsNof('${it.id}','NOF')">NOF</button>
        <button class="cls-cat-btn sel-AF" data-cat="AFN" onclick="selectClsNof('${it.id}','AFN')">AFN</button>
        <button class="cls-cat-btn sel-PF" data-cat="AIN" onclick="selectClsNof('${it.id}','AIN')">AIN</button>
      </div>
      <div class="cls-tip" id="clsnoftip_${it.id}"></div>
    </div>`).join('');

  return `
    <div class="step-header">
      <div class="step-number">${sn}</div>
      <div class="step-badge">${badge}</div>
      <div class="step-title">¿NOF, AFN o AIN?</div>
      <div class="step-task">Ahora que clasificaste las cuentas como AO/PO/AF/PF, agrupá cada cuenta operativa en el bloque del Capital Invertido al que pertenece: <strong>NOF</strong> (capital de trabajo operativo neto), <strong>AFN</strong> (activos fijos netos) o <strong>AIN</strong> (activos intangibles netos).</div>
    </div>
    <div class="concept-box">
      <strong>CI = NOF + AFN + AIN.</strong> El <strong>NOF</strong> = AO corrientes − PO corrientes: el capital atrapado en el ciclo de cobro y pago. El <strong>AFN</strong> es el PP&amp;E neto: las máquinas, plantas y equipos. El <strong>AIN</strong> son los intangibles: patentes, marcas, software activado.
    </div>
    <div class="cls-legend">
      <span class="cls-leg-item sel-AO">NOF = Capital de trabajo operativo</span>
      <span class="cls-leg-item sel-AF">AFN = Activo Fijo Neto</span>
      <span class="cls-leg-item sel-PF">AIN = Activo Intangible Neto</span>
    </div>
    <div class="classify-container">${rows}</div>
    <div class="cls-progress" id="clsNofProgress">0 / ${c.classifyNofItems.length} clasificadas</div>
    <div class="answer-row" style="margin-top:4px">
      <button class="btn-verify" onclick="verifyClassifyNofAfnAin()">Verificar clasificación →</button>
      ${state.difficulty.hints ? `<button class="btn-hint" onclick="toggleHint()">💡 Pista</button>` : ''}
    </div>
    <div class="attempts-row" id="attemptsRow">${fmtDots()}</div>
    <div class="hint-box" id="hintBox">Los AO y PO corrientes (CxC, Inventario, Anticipo, CxP, Nómina a pagar, Ingresos diferidos) van al <strong>NOF</strong>. Las máquinas y planta van al <strong>AFN</strong>. Las patentes e intangibles van al <strong>AIN</strong>.</div>
    <div class="feedback-box" id="feedbackBox"></div>
    <button class="btn-next" id="btnNext" onclick="nextStep()">Siguiente paso →</button>`;
}

function selectClsNof(id, cat) {
  if (state.clsNofLocked && state.clsNofLocked[id]) return;
  if (!state.clsNofChoices) state.clsNofChoices = {};
  state.clsNofChoices[id] = cat;
  const row = document.getElementById('clsnof_' + id);
  if (!row) return;
  row.querySelectorAll('.cls-cat-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.cat === cat));
  const c = state.currentCase;
  const total = c.classifyNofItems.filter(it =>
    (state.clsNofChoices[it.id] || (state.clsNofLocked && state.clsNofLocked[it.id]))).length;
  const prog = document.getElementById('clsNofProgress');
  if (prog) prog.textContent = `${total} / ${c.classifyNofItems.length} clasificadas`;
}

function verifyClassifyNofAfnAin() {
  const c     = state.currentCase;
  const si    = state.currentStep;
  const items = c.classifyNofItems;
  const choices = state.clsNofChoices || {};
  if (!state.clsNofLocked) state.clsNofLocked = {};

  const pending = items.filter(it => !state.clsNofLocked[it.id] && !choices[it.id]);
  if (pending.length > 0) {
    showFeedback(`Clasificá todas las cuentas primero (${pending.length} pendientes).`, 'wrong');
    return;
  }

  const att = ++state.stepAttempts[si];
  markAttemptDot(att - 1);

  let correctTotal = Object.keys(state.clsNofLocked).length;
  const newWrong = [];

  items.forEach(it => {
    if (state.clsNofLocked[it.id]) return;
    const row   = document.getElementById('clsnof_' + it.id);
    const tipEl = document.getElementById('clsnoftip_' + it.id);
    if (choices[it.id] === it.correct) {
      correctTotal++;
      state.clsNofLocked[it.id] = true;
      if (row) { row.classList.remove('cls-wrong'); row.classList.add('cls-correct'); }
      row && row.querySelectorAll('.cls-cat-btn').forEach(b => b.disabled = true);
    } else {
      newWrong.push(it);
      if (row) { row.classList.remove('cls-correct'); row.classList.add('cls-wrong'); }
      if (tipEl) {
        const msg = it.tip || `La clasificación correcta es ${it.correct}.`;
        tipEl.textContent = '💡 ' + msg;
        tipEl.style.display = 'block';
      }
    }
  });

  const allCorrect = correctTotal === items.length;
  const maxA = state.difficulty.maxAttempts;

  if (allCorrect) {
    awardPoints(si, att);
    state.notebook.classificationNof = {...choices};
    document.querySelector('.btn-verify').disabled = true;
    showFeedback(`✅ ¡Perfecto! ${items.length}/${items.length} cuentas bien clasificadas. Ahora podés calcular NOF, AFN y AIN con fundamento.`, 'correct');
    showNextBtn();
  } else if (att >= maxA) {
    items.forEach(it => {
      if (state.clsNofLocked[it.id]) return;
      const row   = document.getElementById('clsnof_' + it.id);
      const tipEl = document.getElementById('clsnoftip_' + it.id);
      if (row) { row.classList.remove('cls-wrong'); row.classList.add('cls-revealed'); }
      row && row.querySelectorAll('.cls-cat-btn').forEach(b => b.disabled = true);
      if (tipEl) {
        tipEl.textContent = `✓ Respuesta: ${it.correct}. ${it.tip || ''}`;
        tipEl.style.display = 'block';
      }
    });
    state.notebook.classificationNof = {...choices};
    document.querySelector('.btn-verify').disabled = true;
    showFeedback(`Sin puntos. Respuestas reveladas. Revisá los conceptos antes de continuar.`, 'wrong');
    showNextBtn();
  } else {
    const remaining = items.length - correctTotal;
    showFeedback(`${correctTotal}/${items.length} correctas. ${newWrong.length} ${newWrong.length===1?'cuenta':'cuentas'} incorrecta${newWrong.length===1?'':'s'} — revisá los tips y volvé a intentar. Intentos restantes: ${maxA - att}.`, 'wrong');
  }
}

// ═══════════════════════════════════════════════════════════
// PANTALLA DE RESULTADOS
// ═══════════════════════════════════════════════════════════
function showResults() {
  const c  = state.currentCase;
  const nb = state.notebook;
  const isCreadora = c.eva > 0; // EVA > 0 → crea valor

  // Verdict card
  const vc = document.getElementById('resVerdictCard');
  vc.className = 'verdict-card ' + (isCreadora ? 'positive' : 'negative');
  document.getElementById('resVerdictIcon').textContent = isCreadora ? '🏆' : '⚠️';
  const vt = document.getElementById('resVerdictTitle');
  vt.className = 'verdict-title ' + (isCreadora ? 'green' : 'red');
  vt.textContent = isCreadora ? 'CREADORA DE VALOR' : 'DESTRUCTORA DE VALOR';
  document.getElementById('resVerdictSub').textContent =
    isCreadora
      ? `EVA = +$${fmt(c.eva)}M · ROIC ${c.roic}% > WACC ${c.wacc}% · Spread = +${c.spread}%`
      : `EVA = $${fmt(c.eva)}M · ROIC ${c.roic}% < WACC ${c.wacc}% · Spread = ${c.spread}%`;

  // Tabla de resultados
  const baseRows = [
    ['Gross Profit',    `$${fmt(c.grossProfit)}M`,  `Margen Bruto = ${c.grossMargin}%`],
    ['EBIT',            `$${fmt(c.ebit)}M`,          `Margen EBIT = ${c.ebitMargin}%`],
    c.ebitda ? ['EBITDA', `$${fmt(c.ebitda)}M`, `Margen EBITDA = ${c.ebitdaMargin}% · EBIT + D&A`] : null,
    ['NOPAT',           `$${fmt(c.nopat)}M`,         `Margen NOPAT = ${c.nopatMargin}%`],
    ['NOF',             `$${fmt(c.nof)}M`,           `Activos Op. Ctes. − Pasivos Op. Ctes.`],
    ['Capital Invertido', `$${fmt(c.ci)}M`,          c.otrosNeto ? `NOF + AFN + AIN + Otros` : `NOF + AFN + AIN`],
    ['Rotación AN',     `${c.rotacion}x`,            `Revenue / CI`],
    c.roa ? ['ROA',  `${c.roa}%`,  `EBIT / Total Assets (${fmt(c.totalAssets)}M)`] : null,
    c.roe ? ['ROE',  `${c.roe}%`,  `Net Income / PN (${fmt(c.pn)}M)`]              : null,
    ['ROIC',            `${c.roic}%`,                `ROIC = Margen NOPAT × Rotación`],
    ['WACC',            `${c.wacc}%`,                `Costo de capital`],
    ['Spread',          `${c.spread > 0 ? '+' : ''}${c.spread}%`, `ROIC − WACC`],
    ['EVA',             `$${c.eva > 0 ? '+' : ''}${fmt(c.eva)}M`, `Spread × CI / 100`],
    ['DSO / DIO / DPO', `${c.dso}d / ${c.dio}d / ${c.dpo}d`, `Ciclo de cobro, stock y pago`],
    ['CCC',             `${c.ccc} días`,              `DSO + DIO − DPO`],
    ['ΔCI (Inversión)', `$${fmt(c.invNeta)}M`,       `CI ${c.ci} − CI ant. ${c.prevCI}`],
    ['FFL',             `$${fmt(c.ffl)}M`,           `NOPAT − ΔCI`],
  ];
  const rows = baseRows.filter(Boolean);
  document.getElementById('resultsBody').innerHTML = rows.map(([n,v,d]) =>
    `<tr>
      <td class="metric-name">${n}</td>
      <td class="metric-val">${v}</td>
      <td class="metric-clase">${d}</td>
    </tr>`
  ).join('');

  // Score y rank
  const maxScore = state.steps.length * 100 * state.difficulty.multiplier;
  const pct      = state.score / maxScore;
  const ranks    = [
    [0.0, '📊 Analista Jr.'],
    [0.4, '📈 Analista Senior'],
    [0.6, '💼 Gerente de Finanzas'],
    [0.75,'🏆 Director Financiero'],
    [0.9, '🎯 CFO']
  ];
  let rank = ranks[0][1];
  for (const [t,r] of ranks) { if (pct >= t) rank = r; }

  document.getElementById('resScoreHdr').textContent = state.score;
  const fs  = document.getElementById('finalScore');
  fs.textContent = '0';
  let cur   = 0;
  const target = state.score;
  const step   = Math.max(1, Math.ceil(target/60));
  const timer  = setInterval(() => {
    cur = Math.min(cur + step, target);
    fs.textContent = cur;
    if (cur >= target) clearInterval(timer);
  }, 30);

  document.getElementById('finalRank').textContent  = rank;
  document.getElementById('scoreMax').textContent   =
    `${state.score} de ${Math.round(maxScore)} pts posibles (${Math.round(pct*100)}%)`;

  showScreen('resultsScreen');
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
renderHome();
