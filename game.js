const CASES = [

// ═══════════════════════════════════════════════════════════
// CASO 1 — PortoGroup S.A.
// Alimentos & Bebidas · Consumo masivo · LatAm
// Caso introductorio: ciclo operativo positivo, ROIC > WACC
// ═══════════════════════════════════════════════════════════
{
  id:0,
  icon:'🏢', color:'#00D4C8', color2:'#4CC9F0',
  name:'PortoGroup',
  sector:'Alimentos & Bebidas', sectorDetail:'Consumo masivo · LatAm',
  tagline:'El grupo alimenticio líder de LatAm. Con márgenes sólidos y capital de trabajo positivo, ¿logra crear valor para sus accionistas? Calculá su ROIC y EVA.',
  stats:[{val:'$16,000M',lbl:'Revenue'},{val:'21%',lbl:'ROIC'},{val:'12%',lbl:'WACC'}],

  // ── Estado de Resultados ────────────────────────────────
  revenue:16000, cogs:10400,
  grossProfit:5600, grossMargin:35.0,
  sga:2400, da:800,
  ebit:2400, ebitMargin:15.0,
  tax:30,
  nopat:1680, nopatMargin:10.5,

  // ── Balance Operativo ────────────────────────────────────
  ar:1600, inventory:1280,
  totalAO:2880,
  ap:1710, accrued:570,
  totalPO:2280,

  // ── Capital Invertido ────────────────────────────────────
  nof:600,
  afn:6400, ain:1000,
  ci:8000, prevCI:7000, invNeta:1000,

  // ── Retorno ─────────────────────────────────────────────
  rotacion:2.0,
  roic:21.0, wacc:12, spread:9.0, eva:720,

  // ── Ciclo de Conversión de Caja ─────────────────────────
  dso:36.5, dio:44.9, dpo:60.0, ccc:21.4,
  ffl:680,

  // ── Estructura Financiera ────────────────────────────────
  actFin:800, deudaFin:2400,
  shares:100,

  verdict:'creadora'
},

// ═══════════════════════════════════════════════════════════
// CASO 2 — NortelFab S.A.
// Manufactura Industrial · Bienes de capital · Argentina
// Alta intensidad de capital: clasificar cuentas + calcular EVA
// ═══════════════════════════════════════════════════════════
{
  id:1,
  icon:'🏭', color:'#F59E0B', color2:'#F97316',
  name:'NortelFab',
  sector:'Manufactura Industrial', sectorDetail:'Bienes de capital · Argentina',
  tagline:'La fabricante de bienes de capital más grande de Argentina. Con alta intensidad de capital, ¿el ROIC justifica la inversión? Clasificá sus cuentas y calculá el EVA.',
  stats:[{val:'$24,000M',lbl:'Revenue'},{val:'18%',lbl:'ROIC'},{val:'10%',lbl:'WACC'}],

  // ── Estado de Resultados ────────────────────────────────
  revenue:24000, cogs:15600,
  grossProfit:8400, grossMargin:35.0,
  sga:3200, da:1200,
  ebit:4000, ebitMargin:16.7,
  tax:28,
  nopat:2880, nopatMargin:12.0,

  // ── Balance Operativo ────────────────────────────────────
  ar:3000, inventory:2500, anticipo:500,
  totalAO:6000,
  ap:3000, nominaPagar:800, ingDif:1000,
  totalPO:4800,

  // ── Capital Invertido ────────────────────────────────────
  nof:1200,
  ppeBruto:18000, ppeAcumDep:6000, afn:12000,
  ainBruto:3500, ainAcumAmort:700, ain:2800,
  ci:16000, prevCI:14500, invNeta:1500,

  // ── Retorno ─────────────────────────────────────────────
  rotacion:1.5,
  roic:18.0, wacc:10, spread:8.0, eva:1280,

  // ── Ciclo de Conversión de Caja ─────────────────────────
  dso:45.6, dio:58.5, dpo:70.2, ccc:33.9,
  ffl:1380,

  // ── Estructura Financiera ────────────────────────────────
  caja:2000, invFinLP:800, actFin:2800,
  deudaCP:500, deudaLP:2000, lease:1000, deudaFin:3500,
  shares:80,

  verdict:'creadora',

  // ── Clasificación de cuentas (classifyAccounts step) ────
  classifyItems:[
    {id:'cxc',    label:'Cuentas por Cobrar',                    val:'$3,000M',  correct:'AO', tip:'Ingreso pendiente de cobro del ciclo operativo → AO.'},
    {id:'inv',    label:'Inventarios (mat. prima + producto)',    val:'$2,500M',  correct:'AO', tip:'Existencias del ciclo productivo → AO.'},
    {id:'ant',    label:'Anticipos a proveedores',               val:'$500M',    correct:'AO', tip:'Pago adelantado por insumos → ciclo operativo → AO.'},
    {id:'cxp',    label:'Cuentas por Pagar (proveedores)',        val:'$3,000M',  correct:'PO', tip:'Deuda con proveedores del ciclo operativo → PO.'},
    {id:'nom',    label:'Remuneraciones a pagar',                val:'$800M',    correct:'PO', tip:'Sueldos devengados no pagados → ciclo operativo → PO.'},
    {id:'ingdif', label:'Ingresos diferidos (adelantos clientes)',val:'$1,000M',  correct:'PO', tip:'Obligación operativa de entregar bienes → PO.'},
    {id:'ppe',    label:'PP&E neto (planta y equipo)',            val:'$12,000M', correct:'AF', tip:'Activos fijos productivos → AF (Activo Fijo Neto).'},
    {id:'intang', label:'Intangibles netos (patentes)',           val:'$2,800M',  correct:'AF', tip:'Activos intangibles → AF (Activo Intangible Neto).'},
    {id:'caja',   label:'Caja y equivalentes',                   val:'$2,000M',  correct:'AF', tip:'Caja excedente no operativa → Activo Financiero (AF). No es del ciclo operativo ni deuda.'},
    {id:'invfin', label:'Inversiones financieras LP',            val:'$800M',    correct:'AF', tip:'Inversión de portafolio → Activo Financiero (AF). No genera valor operativo.'},
    {id:'dcp',    label:'Deuda bancaria corto plazo',            val:'$500M',    correct:'PF', tip:'Deuda con bancos → Pasivo Financiero.'},
    {id:'dlp',    label:'Deuda bancaria largo plazo',            val:'$2,000M',  correct:'PF', tip:'Bono / préstamo LP → Pasivo Financiero.'},
    {id:'lease',  label:'Pasivo por arrendamiento (IFRS 16)',    val:'$1,000M',  correct:'PF', tip:'Lease capitalizado → estructura de capital → Pasivo Financiero.'}
  ],

  // ── Clasificación NOF / AFN / AIN (classifyNofAfnAin step)
  classifyNofItems:[
    {id:'cxc',    label:'Cuentas por Cobrar',       val:'$3,000M',  correct:'NOF', tip:'AO corriente → entra en el cálculo del NOF.'},
    {id:'inv',    label:'Inventarios',              val:'$2,500M',  correct:'NOF', tip:'AO corriente → entra en el cálculo del NOF.'},
    {id:'ant',    label:'Anticipos a proveedores',  val:'$500M',    correct:'NOF', tip:'AO corriente → entra en el cálculo del NOF.'},
    {id:'cxp',    label:'Cuentas por Pagar',        val:'$3,000M',  correct:'NOF', tip:'PO corriente → se resta en el NOF.'},
    {id:'nom',    label:'Remuneraciones a pagar',   val:'$800M',    correct:'NOF', tip:'PO corriente → se resta en el NOF.'},
    {id:'ingdif', label:'Ingresos diferidos',       val:'$1,000M',  correct:'NOF', tip:'PO corriente → se resta en el NOF.'},
    {id:'ppe',    label:'PP&E neto',                val:'$12,000M', correct:'AFN', tip:'Activo fijo tangible → AFN.'},
    {id:'intang', label:'Intangibles netos',        val:'$2,800M',  correct:'AIN', tip:'Activo intangible → AIN.'}
  ]
},

// ═══════════════════════════════════════════════════════════
// CASO 4 — LatiCommerce S.A.
// E-Commerce · Latinoamérica
// Inspirado en modelo marketplace + fintech · Ciclo de caja negativo
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
},
// ═══════════════════════════════════════════════════════════
// CASO 6 — Banco Digital LatAm
// Fintech / Banco Digital · Brasil + LatAm
// Datos FY2024 estilizados para práctica pedagógica
// Concepto clave: ¿cómo crea valor un banco SIN activos fijos?
// ═══════════════════════════════════════════════════════════
{
  id:5,
  icon:'🏦', color:'#8B5CF6', color2:'#7C3AED',
  name:'Banco Digital LatAm',
  sector:'Fintech · Banco Digital', sectorDetail:'Datos estilizados · LatAm',
  tagline:'Banco digital líder en LatAm. Sin sucursales, sin activos fijos, con millones de usuarios. ¿Cómo genera un ROIC del 28% casi sin Capital Invertido físico?',
  stats:[{val:'$11,500M',lbl:'Revenue'},{val:'16.5%',lbl:'Margen NOPAT'},{val:'15%',lbl:'WACC'}],

  // ── Estado de Resultados ──────────────────────────
  // Revenue = intereses + comisiones + otros ingresos financieros
  // COGS = costo de fondeo (intereses pagados a depositantes) + pérdidas por crédito
  revenue:11500, cogs:6260,
  grossProfit:5240, grossMargin:45.6,
  sga:3280,       // Gastos operativos: tech, personal, marketing
  da:160,         // D&A mínima (banco digital, casi sin activos físicos)
  ebit:1800, ebitMargin:15.7,
  tax:33,         // Tasa efectiva Brasil ~33%
  nopat:1206, nopatMargin:10.5,

  // ── Balance Operativo ────────────────────────────────────
  // AO corriente: créditos otorgados a clientes (tarjetas + préstamos)
  ar:17600,       // Créditos a clientes (CxC financiero) — AO principal
  inventory:0,    // Sin inventario físico
  totalAO:17600,

  // PO corriente: depósitos de clientes (¡el gran pasivo operativo!)
  ap:28300,       // Depósitos de clientes → financian el negocio GRATIS
  accrued:1200,   // Otros pasivos operativos
  totalPO:29500,

  // ── Capital Invertido ────────────────────────────────────
  nof:-11900,     // NOF = 17600 − 29500 → MUY negativo (depósitos > créditos corrientes)
  afn:30,         // PP&E neto ínfimo: oficinas mínimas, sin sucursales
  ain:800,        // Intangibles: plataforma tech + goodwill adquisiciones
  ci:4300,        // CI = NOF(−11900) + AFN(30) + AIN(800) + Exceso capital(15370)
  // Nota: En banca, el "capital regulatorio" también integra el CI
  // CI ajustado = Equity regulatorio mínimo ≈ $4,300M para operar
  prevCI:3800,    // CI año anterior
  invNeta:500,    // ΔCI = 4300 − 3800

  // ── Retorno ─────────────────────────────────────────────
  rotacion:2.67,  // Revenue / CI = 11500 / 4300
  roic:28.1,      // NOPAT / CI × 100 = 1206 / 4300 = 28.1%
  wacc:15,
  spread:13.1,    // ROIC − WACC
  eva:563,        // 13.1% × 4300 / 100

  // ── Ciclo de Conversión de Caja ─────────────────────────
  // En banca el CCC se interpreta diferente — pero lo calculamos igual
  dso:558.8,      // Créditos × 365 / Revenue (días de recupero de créditos)
  dio:0.0,        // Sin inventario
  dpo:1651.5,     // Depósitos × 365 / COGS (días que "financian" con depósitos)
  ccc:-1092.7,    // DSO + DIO − DPO → enormemente negativo

  // ── Flujo de Fondos ──────────────────────────────────────
  ffl:706,        // NOPAT − ΔCI = 1206 − 500

  // ── Estructura Financiera ────────────────────────────────
  actFin:9200,    // Caja + inversiones financieras del holding
  deudaFin:800,   // Deuda financiera (mínima)
  totalAssets:68000,
  pn:7000,        // Patrimonio neto (holding)
  netIncome:1900, // Resultado neto FY2024
  roa:2.6,        // EBIT / Total Assets = 1800 / 68000
  roe:27.1,       // Net Income / PN = 1900 / 7000

  verdict:'creadora'
},

// ═══════════════════════════════════════════════════════════
// CASO 3 — Costco Integrador
// VBM · Análisis Completo · FY2022–FY2024 · Datos reales Capital IQ
// CASO INTEGRADOR: EEFF + CI + ROIC multi-período + EVA + Valuación
// ═══════════════════════════════════════════════════════════
{
  id:2,
  icon:'🛒', color:'#E63946', color2:'#FF6B6B',
  name:'Costco Integrador',
  sector:'VBM · Análisis Completo', sectorDetail:'FY2022–FY2024 · Datos reales Capital IQ',
  tagline:'⭐ CASO INTEGRADOR — El análisis más completo del curso. Costco Wholesale con datos reales: 28 pasos que cubren EEFF, Capital Invertido, ROIC multi-período, EVA acumulado y valuación por perpetuidad. El caso definitivo de Finanzas Corporativas.',
  stats:[{val:'$12,157M',lbl:'EVA acum. 3 años'},{val:'25%',lbl:'ROIC FY2024'},{val:'9%',lbl:'WACC'}],

  // ── Estado de Resultados FY2024 ─────────────────────────
  revenue:254453, cogs:222358,
  grossProfit:32095, grossMargin:12.6,
  sga:22810, da:2431,
  ebit:9285, ebitMargin:3.6,
  tax:24.4,
  nopat:7010, nopatMargin:2.75,
  netIncome:7367,

  // ── Balance Operativo FY2024 ─────────────────────────────
  ar:2721, inventory:18647,
  totalAO:21368,
  ap:19421, accrued:7229, membershipFees:2501,
  totalPO:29151,

  // ── Capital Invertido FY2024 ─────────────────────────────
  nof:-7783,
  ppeBruto:51000, ppeAcumDep:17918, afn:33082,
  ain:865, otrosNeto:1836,
  ci:28000, prevCI:26000, invNeta:2000,

  // ── Retorno FY2024 ───────────────────────────────────────
  rotacion:9.09,
  roa:12.6, roe:31.2,
  roic:25.0, wacc:9, spread:16.0, eva:4480,

  // ── Ciclo de Conversión de Caja ──────────────────────────
  dso:3.9, dio:30.6, dpo:31.9, ccc:2.6,
  ffl:5010,

  // ── Estructura Financiera ─────────────────────────────────
  caja:9906, stInv:1488, actFin:11394,
  deudaLP:5783, cpDebt:1081, deudaFin:6864,
  totalAssets:73473, pn:23622,

  // ── Histórico FY2022 ─────────────────────────────────────
  revenue22:226954, ebit22:7911, tax22:24.6, da22:1900,
  ar22:2241, inventory22:17907, ap22:17848, accrued22:6292,
  membershipFees22:2174, afn22:29040, ain22:993,
  nopat22:5964, nof22:-6166, ci22:25000, roic22:23.9, eva22:3725,

  // ── Histórico FY2023 ─────────────────────────────────────
  revenue23:242290, ebit23:8505, tax23:25.9, da23:2077,
  ar23:2285, inventory23:16651, ap23:17483, accrued23:6428,
  membershipFees23:2337, afn23:30722, ain23:994,
  nopat23:6300, nof23:-7312, ci23:26000, roic23:24.2, eva23:3952,

  // ── VBM KPIs ─────────────────────────────────────────────
  memNopat:1890, memNopotPct:27.0, deltaNopat:710,
  roicMarginal:35.5, evaMarginal:530, evaAcum:12157,
  valuation0:77778, valuationG:102667, marketTEV:412000, impliedG:7.8,
  specialDivTotal:6655, shares:444, specialDivPS:15.0,

  verdict:'creadora',

  // ── Clasificación de cuentas (classifyAccounts step) ────
  classifyItems:[
    {id:'cxc',    label:'Cuentas por Cobrar',                      val:'$2,721M',  correct:'AO', tip:'Cobros pendientes del ciclo de ventas → AO.'},
    {id:'inv',    label:'Inventarios (mercadería en almacenes)',    val:'$18,647M', correct:'AO', tip:'Stock operativo → AO. Costco mantiene ~30 días de inventario.'},
    {id:'otros',  label:'Otros activos operativos netos',          val:'$1,836M',  correct:'AO', tip:'Activos del ciclo operativo distintos a CxC e inventario → AO.'},
    {id:'cxp',    label:'Cuentas por Pagar (proveedores)',          val:'$19,421M', correct:'PO', tip:'Deuda comercial con proveedores → PO. El motor del NOF negativo.'},
    {id:'memfee', label:'Cuotas de membresía diferidas',           val:'$2,501M',  correct:'PO', tip:'Membresías cobradas pero aún no devengadas → obligación operativa → PO.'},
    {id:'accrued',label:'Otros pasivos operativos accrued',        val:'$7,229M',  correct:'PO', tip:'Sueldos, impuestos y otros devengados → ciclo operativo → PO.'},
    {id:'ppe',    label:'PP&E neto (almacenes + infraestructura)',  val:'$33,082M', correct:'AF', tip:'Activos fijos operativos → AF (Activo Fijo Neto).'},
    {id:'intang', label:'Intangibles y otros activos LP netos',    val:'$865M',    correct:'AF', tip:'Activos intangibles operativos → AF (Activo Intangible Neto).'},
    {id:'caja',   label:'Caja + inversiones de corto plazo',       val:'$11,394M', correct:'AF', tip:'Caja excedente y equivalentes → Activo Financiero (AF). No es deuda, es un activo.'},
    {id:'deuda',  label:'Deuda financiera total (LP + CP)',         val:'$6,864M',  correct:'PF', tip:'Deuda bancaria y bonos → Pasivo Financiero.'}
  ]
}

];

// ═══════════════════════════════════════════════════════════
// DIFICULTAD
// ═══════════════════════════════════════════════════════════
const DIFF_KEYS = ['facil','intermedio','avanzado'];
const DIFFICULTY = {
  facil:      {label:'📗 Fácil',      maxAttempts:5, formulaOpen:true,  hideFormula:false, hints:true,  multiplier:1.0, showSolution:true,  examMode:false},
  intermedio: {label:'📙 Intermedio', maxAttempts:3, formulaOpen:false, hideFormula:false, hints:true,  multiplier:1.5, showSolution:true,  examMode:false},
  avanzado:   {label:'📕 Avanzado',   maxAttempts:2, formulaOpen:false, hideFormula:true,  hints:false, multiplier:2.0, showSolution:false, examMode:false},
  examen:     {label:'📝 Examen',     maxAttempts:1, formulaOpen:false, hideFormula:true,  hints:false, multiplier:3.0, showSolution:false, examMode:true,  stepSeconds:180}
};
const DIFF_KEYS_PLAY = ['facil','intermedio','avanzado'];
const cardDifficulty = [1, 1, 1, 1, 1, 1]; // default: intermedio

function getDiffDesc(idx, caseId) {
  // Caso 6 — Banco Digital LatAm: 16 pasos
  // Identidad: banco digital sin activos físicos → NOF negativo extremo → ROIC alto
  // Arranca con clasificación bancaria → gross profit alto → NOF extremo como sorpresa
  if (caseId === 5) return [
    'nu_classify',            // Clasificar cuentas de un banco digital
    'grossProfit',            // Margen bruto 45%: spread de tasas
    'mc_nu_spread',           // ¿Qué determina el Gross Profit de un banco?
    'ebit', 'nopat',
    'nof',                    // NOF −$11,900M
    'mc_nu_depositos',        // Decisión: ¿subir la tasa de depósitos?
    'ci', 'rotacion',
    'roic', 'roa', 'roe',
    'mc_nu_roa_vs_roic',      // ¿Por qué ROA 2.6% pero ROIC 28%?
    'spread', 'eva',
    'mc_nu_expansion',        // ¿Expandirse a Argentina con inflación alta?
    'ffl'
  ];
  if (caseId === 4) return [
    '18 pasos · PharmaCore · Márgenes + CI en patentes + adquisición · Fórmulas visibles · 5 intentos',
    '18 pasos · PharmaCore · Fórmulas al clic · 3 intentos',
    '18 pasos · Sin fórmulas ni pistas · 2 intentos · ×2 puntos'
  ][idx] || '';
  if (caseId === 3) return [
    '17 pasos · LatiCommerce · Clasificación + NOF negativo + CCC · Fórmulas visibles · 5 intentos',
    '17 pasos · LatiCommerce · Fórmulas al clic · 3 intentos',
    '17 pasos · Sin fórmulas ni pistas · 2 intentos · ×2 puntos'
  ][idx] || '';
  if (caseId === 2) return [
    '28 pasos · Costco Integrador · Clasificación + ROIC 3 años + EVA + Valuación · Fórmulas visibles · 5 intentos',
    '28 pasos · Costco Integrador · Análisis completo · Fórmulas al clic · 3 intentos',
    '28 pasos · Sin fórmulas ni pistas · 2 intentos · ×2 puntos'
  ][idx] || '';
  if (caseId === 1) return [
    '18 pasos · Clasificación de cuentas + análisis · Fórmulas visibles · 5 intentos',
    '18 pasos · Clasificación de cuentas + análisis · Fórmulas al clic · 3 intentos',
    '18 pasos · Sin fórmulas ni pistas · 2 intentos · ×2 puntos'
  ][idx] || '';
  if (caseId === 5) return [
    '18 pasos · Banco Digital · Spread bancario + decisiones · Fórmulas visibles · 5 intentos',
    '18 pasos · Banco Digital · Análisis completo · Fórmulas al clic · 3 intentos',
    '18 pasos · Sin fórmulas ni pistas · 2 intentos · ×2 puntos'
  ][idx] || '';
  if (idx === 3) return '⏱️ Sin fórmulas · Sin pistas · 1 intento · Cronómetro · ×3 puntos';
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
  // Caso 5 — PharmaCore: 18 pasos
  // Identidad: margen altísimo pero ROIC comprimido por CI en patentes
  // Arranca con estructura de resultados completa → CI pesado → tensión margen/ROIC → adquisición
  // Caso 6 — Banco Digital LatAm: 16 pasos
  // Identidad: banco digital sin activos físicos → NOF negativo extremo → ROIC alto
  // Arranca con clasificación bancaria → gross profit alto → NOF extremo como sorpresa
  if (caseId === 5) return [
    'nu_classify',            // Clasificar cuentas de un banco digital
    'grossProfit',            // Margen bruto 45%: spread de tasas
    'mc_nu_spread',           // ¿Qué determina el Gross Profit de un banco?
    'ebit', 'nopat',
    'nof',                    // NOF −$11,900M
    'mc_nu_depositos',        // Decisión: ¿subir la tasa de depósitos?
    'ci', 'rotacion',
    'roic', 'roa', 'roe',
    'mc_nu_roa_vs_roic',      // ¿Por qué ROA 2.6% pero ROIC 28%?
    'spread', 'eva',
    'mc_nu_expansion',        // ¿Expandirse a Argentina con inflación alta?
    'ffl'
  ];
  if (caseId === 4) return [
    'grossProfit', 'margenBruto',  // margen bruto 70%: primer WOW
    'ebit', 'margenEbit',          // estructura de costos con I+D
    'nopat',                       // NOPAT limpio
    'mc_pharma_ci_alto',           // MC antes del CI: "¿por qué el ROIC va a ser bajo?"
    'nof', 'ci',                   // CI enorme por patentes
    'rotacion',                    // rotación bajísima → la explicación del ROIC
    'roic', 'spread', 'eva',       // revelación: ROIC < margen
    'mc_pharma_adquisicion',       // decisión: ¿comprar biotech?
    'dso', 'dio', 'dpo', 'ccc',    // CCC positivo: distinto a LatiCommerce
    'ffl', 'mc_pharma_ffl'         // FFL comprimido por ΔCI
  ];
  // Caso 4 — LatiCommerce: 17 pasos
  // Identidad: marketplace con NOF negativo y CCC negativo
  // Arranca con clasificación propia → NOF como gran revelación → CCC → decisión
  if (caseId === 3) return [
    'lati_classify',         // Clasificar 5 cuentas típicas del marketplace
    'nof',                   // Gran revelación: NOF negativo
    'mc_lati_nof_sign',      // ¿Qué significa?
    'dso', 'dpo', 'ccc',     // CCC antes que ROIC → el ciclo es el corazón
    'mc_lati_ccc_sign',      // ¿Es bueno el CCC negativo?
    'grossProfit', 'nopat', 'margenNopat',
    'ci', 'rotacion',
    'roic', 'spread', 'eva',
    'ffl',
    'mc_lati_decision'       // ¿Expandirse?
  ];
  // Caso 3 — Costco Integrador: 28 pasos, análisis completo FY2022–FY2024
  if (caseId === 2) return [
    'classifyAccounts',          // Clasificar cuentas
    'grossProfit', 'margenBruto',// Estado de resultados
    'ebit', 'ebitda', 'nopat',   // Resultados completos
    'nof', 'ci', 'deltaAN',      // Capital Invertido
    'dso', 'dio', 'dpo', 'ccc',  // Ciclo de caja
    'rotacion',                  // DuPont: base del ROIC
    'vbm_roic22', 'vbm_roic23',  // ROIC histórico FY2022/2023
    'roic', 'roa', 'roe',        // Rentabilidad FY2024
    'spread', 'eva',             // Spread + EVA FY2024
    'vbm_evaAcum',               // EVA acumulado 3 años
    'vbm_roicMarginal',          // ROIC marginal
    'vbm_evaMarginal',           // EVA marginal
    'ffl',                       // FFL = NOPAT − ΔCI
    'vbm_val0', 'vbm_valG',      // Valuación perpetuidad
    'vbm_impliedG',              // g implícita del mercado
    'vbm_specialDiv',            // Dividendo especial
    'mc_vbm_decision',           // ¿Vale la pena pagar?
    'mc_costco_paradoja',        // La paradoja de Costco
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
  // Caso 3 — Costco Integrador: badges temáticos
  if (state.currentCase && state.currentCase.id === 2) {
    const t3 = {
      classifyAccounts:    '🏗️ Bloque 0 · Estructura del negocio',
      grossProfit:         '📊 Bloque 1 · Estado de Resultados',
      margenBruto:         '📊 Bloque 1 · Estado de Resultados',
      ebit:                '📊 Bloque 1 · Estado de Resultados',
      ebitda:              '📊 Bloque 1 · Estado de Resultados',
      nopat:               '📊 Bloque 1 · Estado de Resultados',
      margenNopat:         '📊 Bloque 1 · Estado de Resultados',
      vbm_memNopat:        '🏷️ Bloque 2 · El motor de las membresías',
      mc_vbm_memModel:     '🏷️ Bloque 2 · El motor de las membresías',
      nof:                 '🧩 Bloque 3 · Capital Invertido',
      ci:                  '🧩 Bloque 3 · Capital Invertido',
      deltaAN:             '🧩 Bloque 3 · Capital Invertido',
      dso:                 '⏱️ Bloque 4 · Ciclo de Caja',
      dio:                 '⏱️ Bloque 4 · Ciclo de Caja',
      dpo:                 '⏱️ Bloque 4 · Ciclo de Caja',
      ccc:                 '⏱️ Bloque 4 · Ciclo de Caja',
      rotacion:            '📈 Bloque 5 · ROIC Multi-período',
      vbm_roic22:          '📈 Bloque 5 · ROIC Multi-período',
      vbm_roic23:          '📈 Bloque 5 · ROIC Multi-período',
      roic:                '📈 Bloque 5 · ROIC Multi-período',
      roa:                 '📈 Bloque 5 · ROIC Multi-período',
      roe:                 '📈 Bloque 5 · ROIC Multi-período',
      spread:              '⭐ Bloque 6 · Creación de Valor (EVA)',
      eva:                 '⭐ Bloque 6 · Creación de Valor (EVA)',
      vbm_evaAcum:         '⭐ Bloque 6 · Creación de Valor (EVA)',
      vbm_roicMarginal:    '⭐ Bloque 6 · Creación de Valor (EVA)',
      vbm_evaMarginal:     '⭐ Bloque 6 · Creación de Valor (EVA)',
      ffl:                 '💸 Bloque 7 · Flujo de Fondos',
      vbm_val0:            '🔭 Bloque 8 · Valuación por EVA',
      vbm_valG:            '🔭 Bloque 8 · Valuación por EVA',
      vbm_impliedG:        '🔭 Bloque 8 · Valuación por EVA',
      vbm_specialDiv:      '💰 Bloque 9 · Retorno al Accionista',
      mc_vbm_decision:     '🎯 Bloque 10 · Decisión Estratégica',
      mc_costco_paradoja:  '🎯 Bloque 10 · Decisión Estratégica',
    };
    return t3[stepId] || '📚 Análisis Integrador · Costco FY2022–FY2024';
  }
  // Caso 4 — LatiCommerce: badges por bloque temático
  if (state.currentCase && state.currentCase.id === 3) {
    const t4 = {
      lati_classify:  '🛒 Bloque 0 · ¿Quién financia a quién?',
      nof:            '🔑 Bloque 1 · El corazón del modelo',
      mc_lati_nof_sign:'🔑 Bloque 1 · El corazón del modelo',
      dso:            '⏱️ Bloque 2 · El ciclo de caja',
      dpo:            '⏱️ Bloque 2 · El ciclo de caja',
      ccc:            '⏱️ Bloque 2 · El ciclo de caja',
      mc_lati_ccc_sign:'⏱️ Bloque 2 · El ciclo de caja',
      grossProfit:    '📊 Bloque 3 · Resultados',
      nopat:          '📊 Bloque 3 · Resultados',
      margenNopat:    '📊 Bloque 3 · Resultados',
      ci:             '💼 Bloque 4 · Capital Invertido',
      rotacion:       '💼 Bloque 4 · Capital Invertido',
      roic:           '💰 Bloque 5 · Rentabilidad',
      spread:         '💰 Bloque 5 · Rentabilidad',
      eva:            '💰 Bloque 5 · Rentabilidad',
      ffl:            '💸 Bloque 6 · Flujo de Fondos',
      mc_lati_decision:'🚀 Bloque 7 · Decisión estratégica'
    };
    return t4[stepId] || '📦 LatiCommerce · E-Commerce & Fintech';
  }
  // Caso 5 — PharmaCore: badges por bloque temático
  if (state.currentCase && state.currentCase.id === 4) {
    const t5 = {
      grossProfit:       '💊 Bloque 1 · Estructura de márgenes',
      margenBruto:       '💊 Bloque 1 · Estructura de márgenes',
      ebit:              '💊 Bloque 1 · Estructura de márgenes',
      margenEbit:        '💊 Bloque 1 · Estructura de márgenes',
      nopat:             '💊 Bloque 1 · Estructura de márgenes',
      mc_pharma_ci_alto: '🔬 Bloque 2 · La trampa del CI',
      nof:               '🔬 Bloque 2 · La trampa del CI',
      ci:                '🔬 Bloque 2 · La trampa del CI',
      rotacion:          '🔬 Bloque 2 · La trampa del CI',
      roic:              '⚗️ Bloque 3 · La gran revelación',
      spread:            '⚗️ Bloque 3 · La gran revelación',
      eva:               '⚗️ Bloque 3 · La gran revelación',
      mc_pharma_adquisicion:'💰 Bloque 4 · Decisión de adquisición',
      dso:               '⏱️ Bloque 5 · Ciclo operativo',
      dio:               '⏱️ Bloque 5 · Ciclo operativo',
      dpo:               '⏱️ Bloque 5 · Ciclo operativo',
      ccc:               '⏱️ Bloque 5 · Ciclo operativo',
      ffl:               '💸 Bloque 6 · Flujo de Fondos',
      mc_pharma_ffl:     '💸 Bloque 6 · Flujo de Fondos'
    };
    return t5[stepId] || '💊 PharmaCore · Farmacéutica';
  }
  // Caso 6 — Banco Digital LatAm
  if (state.currentCase && state.currentCase.id === 5) {
    const t6 = {
      nu_classify:    '🏦 Bloque 0 · ¿Cómo funciona un banco digital?',
      grossProfit:    '📊 Bloque 1 · Estructura de ingresos',
      margenBruto:    '📊 Bloque 1 · Estructura de ingresos',
      ebit:           '📊 Bloque 1 · Estructura de ingresos',
      nopat:          '📊 Bloque 1 · Estructura de ingresos',
      margenNopat:    '📊 Bloque 1 · Estructura de ingresos',
      nof:            '🔑 Bloque 2 · El secreto de los depósitos',
      ci:             '💼 Bloque 3 · Capital Invertido sin activos físicos',
      rotacion:       '💼 Bloque 3 · Capital Invertido sin activos físicos',
      roic:           '⚗️ Bloque 4 · Rentabilidad',
      roa:            '⚗️ Bloque 4 · Rentabilidad',
      roe:            '⚗️ Bloque 4 · Rentabilidad',
      spread:         '⚗️ Bloque 4 · Rentabilidad',
      eva:            '⚗️ Bloque 4 · Rentabilidad',
      ffl:            '💸 Bloque 6 · Flujo de Fondos',
      mc_nu_spread:       '💰 Bloque 1 · ¿De dónde viene el margen?',
      mc_nu_depositos:    '📐 Bloque 2 · NOF y ROIC',
      mc_nu_roa_vs_roic:  '🔬 Bloque 4 · ROA vs. ROIC',
      mc_nu_expansion:    '🔄 Bloque 5 · Banco Digital vs. Costco',
    };
    return t6[stepId] || '🏦 Banco Digital LatAm · Fintech';
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
  // Show/hide exam timer bar
  const tw = document.getElementById('examTimerWrap');
  if (tw) tw.style.display = (id === 'gameScreen' && state.difficulty && state.difficulty.examMode) ? 'flex' : 'none';
}
function showHome() {
  renderHome();
  showScreen('homeScreen');
}
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


function renderProgressBadge(caseId) {
  const p = getCaseProgress(caseId);
  if (!p.attempts) return '';
  const badge = p.completed
    ? '<span style="background:rgba(34,197,94,.12);color:var(--green);border:1px solid rgba(34,197,94,.3);padding:3px 10px;border-radius:20px;font-size:.7rem;font-weight:700">✅ Completado</span>'
    : '<span style="background:rgba(245,197,24,.1);color:var(--yellow);border:1px solid rgba(245,197,24,.25);padding:3px 10px;border-radius:20px;font-size:.7rem;font-weight:700">🔄 En progreso</span>';
  const best = p.bestScore ? ' · Mejor: ' + p.bestScore + ' pts' : '';
  return '<div style="margin-bottom:10px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">' + badge + '<span style="font-size:.7rem;color:var(--muted)">' + best + '</span></div>';
}

function renderHome() {
  // Progress summary
  const ps = document.getElementById('progressSummary');
  if (ps) {
    const data = loadProgress();
    const completed = (data.cases||[]).filter(x=>x.completed).length;
    const total = CASES.length;
    if (completed > 0) {
      ps.innerHTML = `${completed}/${total} casos completados · <button onclick="clearProgress()" style="background:none;border:none;color:var(--muted);font-size:.72rem;cursor:pointer;text-decoration:underline;padding:0">Borrar progreso</button>`;
    } else {
      ps.innerHTML = '';
    }
  }
  document.getElementById('casesGrid').innerHTML = CASES.map(c => `
    <div class="case-card" style="--accent-color:${c.color};--accent-color2:${c.color2}">
      <span class="case-icon">${c.icon}</span>
      <div class="case-meta"><span class="case-name">${c.name}</span></div>
      <div class="case-sector">${c.sector} · <span style="opacity:.7">${c.sectorDetail}</span></div>
      <div class="case-tagline">${c.tagline}</div>
      ${renderProgressBadge(c.id)}
      <div class="case-stats">${c.stats.map(s=>`
        <div class="case-stat">
          <div class="val">${s.val}</div>
          <div class="lbl">${s.lbl}</div>
        </div>`).join('')}
      </div>
      ${renderProgressBadge(c.id)}
      <div style="font-size:.72rem;color:var(--muted);margin:14px 0 4px;font-weight:600;letter-spacing:.04em;text-transform:uppercase">Dificultad</div>
      <div class="diff-selector" id="diffSel${c.id}" onclick="event.stopPropagation()">
        <button class="diff-pill dp-f ${cardDifficulty[c.id]===0?'active':''}" onclick="selectDiff(${c.id},0)">📗 Fácil</button>
        <button class="diff-pill dp-a ${cardDifficulty[c.id]===1?'active':''}" onclick="selectDiff(${c.id},1)">📙 Intermedio</button>
        <button class="diff-pill dp-s ${cardDifficulty[c.id]===2?'active':''}" onclick="selectDiff(${c.id},2)">📕 Avanzado</button>
        <button class="diff-pill dp-e ${cardDifficulty[c.id]===3?'active':''}" onclick="selectDiff(${c.id},3)">📝 Examen</button>
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
  const diffIdx = cardDifficulty[id];
  const diffKey = diffIdx === 3 ? 'examen' : DIFF_KEYS_PLAY[diffIdx];
  state.difficulty = DIFFICULTY[diffKey];
  state.diffKey    = diffKey;
  state.steps      = getStepSequence(diffKey, id);
  state.currentCase= CASES.find(c => c.id === id);
  state.currentStep= 0;
  state.score      = 0;
  state.stepAttempts = state.steps.map(() => 0);
  state.stepScores   = state.steps.map(() => 0);
  state.notebook   = {};
  examStepTimes    = state.steps.map(() => 0);
  if (examTimer) { clearInterval(examTimer); examTimer = null; }

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
    : D === DIFFICULTY.examen
    ? 'background:rgba(139,92,246,.14);color:#A78BFA;border:1px solid rgba(139,92,246,.35);padding:3px 10px;border-radius:20px;font-size:.68rem;font-weight:700'
    : 'background:rgba(239,68,68,.12);color:#EF4444;border:1px solid rgba(239,68,68,.3);padding:3px 10px;border-radius:20px;font-size:.68rem;font-weight:700';

  document.getElementById('headerScore').textContent = '0';
  renderDataRoom();
  renderNotebook();
  renderProgressDots();
  renderStep();
  showScreen('gameScreen');
}



// ═══════════════════════════════════════════════════════════
// LATICOMMERCE — CLASIFICADOR PROPIO (5 cuentas clave)
// Foco: entender qué hace que el NOF sea negativo
// ═══════════════════════════════════════════════════════════
function stepLatiClassify(c, sn, badge) {
  state.latiClsChoices = {};
  state.latiClsLocked  = {};

  const items = [
    {id:'cxc',    label:'Cuentas por Cobrar (usuarios pagan con wallet)',  val:'$350M',   correct:'AO',
     tip:'Cobro digital casi inmediato → AO corriente. DSO muy bajo.'},
    {id:'cxp',    label:'CxP — Lo que le debe a los vendedores del marketplace', val:'$1,400M', correct:'PO',
     tip:'Los vendedores esperan 100+ días para cobrar → financia el negocio gratis → PO.'},
    {id:'dev',    label:'Devoluciones diferidas + cuotas fintech pendientes', val:'$490M',  correct:'PO',
     tip:'Obligación operativa de devolver o acreditar dinero → PO corriente.'},
    {id:'datactr',label:'Data centers y logística propia (PP&E neto)',      val:'$2,800M', correct:'AO',
     tip:'Activo fijo operativo → genera el resultado → AO no corriente → va al AFN.'},
    {id:'deuda',  label:'Deuda financiera (bonos emitidos)',                val:'$2,800M', correct:'PF',
     tip:'Decisión de financiamiento, no del ciclo operativo → PF.'}
  ];

  const rows = items.map(it => `
    <div class="classify-row" id="lticls_${it.id}">
      <div class="cls-info">
        <span class="cls-label">${it.label}</span>
        <span class="cls-amount">${it.val}</span>
      </div>
      <div class="cls-btns">
        <button class="cls-cat-btn sel-AO" data-cat="AO" onclick="selectLatiCls('${it.id}','AO')">AO</button>
        <button class="cls-cat-btn sel-PO" data-cat="PO" onclick="selectLatiCls('${it.id}','PO')">PO</button>
        <button class="cls-cat-btn sel-PF" data-cat="PF" onclick="selectLatiCls('${it.id}','PF')">PF</button>
      </div>
      <div class="cls-tip" id="lticlstip_${it.id}"></div>
    </div>`).join('');

  state._latiClsItems = items;

  return `
    <div class="step-header">
      <div class="step-number">${sn}</div>
      <div class="step-badge">${badge}</div>
      <div class="step-title">¿Qué financia a quién?</div>
      <div class="step-task">En un marketplace, la magia está en <strong>quién paga primero y quién cobra después</strong>. Clasificá estas 5 cuentas clave de LatiCommerce en AO (Activo Operativo), PO (Pasivo Operativo) o PF (Pasivo Financiero).</div>
    </div>
    <div class="concept-box">
      <strong>Clave del modelo marketplace:</strong> LatiCommerce cobra a los usuarios <em>antes</em> de pagarle a los vendedores. Eso crea pasivos operativos enormes → el NOF se vuelve negativo → los proveedores financian el negocio.
    </div>
    <div class="cls-legend">
      <span class="cls-leg-item sel-AO">AO = Activo Operativo</span>
      <span class="cls-leg-item sel-PO">PO = Pasivo Operativo</span>
      <span class="cls-leg-item sel-PF">PF = Pasivo Financiero</span>
    </div>
    <div class="classify-container">${rows}</div>
    <div class="cls-progress" id="ltiClsProgress">0 / ${items.length} clasificadas</div>
    <div class="answer-row" style="margin-top:4px">
      <button class="btn-verify" onclick="verifyLatiClassify()">Verificar →</button>
      ${state.difficulty.hints ? '<button class="btn-hint" onclick="toggleHint()">💡 Pista</button>' : ''}
    </div>
    <div class="attempts-row" id="attemptsRow">${fmtDots()}</div>
    <div class="hint-box" id="hintBox">Preguntate: ¿esta cuenta surge del ciclo cobrar-producir-pagar? → Operativa. ¿Es deuda bancaria o financiera? → PF. En el marketplace, la CxP con vendedores es enorme porque LatiCommerce los hace esperar.</div>
    <div class="feedback-box" id="feedbackBox"></div>
    <button class="btn-next" id="btnNext" onclick="nextStep()">Siguiente paso →</button>`;
}

function selectLatiCls(id, cat) {
  if (state.latiClsLocked && state.latiClsLocked[id]) return;
  state.latiClsChoices[id] = cat;
  const row = document.getElementById('lticls_' + id);
  if (!row) return;
  row.querySelectorAll('.cls-cat-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === cat));
  const total = state._latiClsItems.filter(it =>
    state.latiClsChoices[it.id] || (state.latiClsLocked && state.latiClsLocked[it.id])).length;
  const prog = document.getElementById('ltiClsProgress');
  if (prog) prog.textContent = `${total} / ${state._latiClsItems.length} clasificadas`;
}

function verifyLatiClassify() {
  const items   = state._latiClsItems;
  const choices = state.latiClsChoices || {};
  const si      = state.currentStep;
  if (!state.latiClsLocked) state.latiClsLocked = {};

  const pending = items.filter(it => !state.latiClsLocked[it.id] && !choices[it.id]);
  if (pending.length > 0) {
    showFeedback(`Clasificá todas las cuentas primero (${pending.length} pendientes).`, 'wrong');
    return;
  }

  const att = ++state.stepAttempts[si];
  markAttemptDot(att - 1);
  const maxA = state.difficulty.maxAttempts;
  let correctTotal = Object.keys(state.latiClsLocked).length;
  const newWrong = [];

  items.forEach(it => {
    if (state.latiClsLocked[it.id]) return;
    const row   = document.getElementById('lticls_' + it.id);
    const tipEl = document.getElementById('lticlstip_' + it.id);
    if (choices[it.id] === it.correct) {
      correctTotal++;
      state.latiClsLocked[it.id] = true;
      if (row) { row.classList.remove('cls-wrong'); row.classList.add('cls-correct'); }
      row && row.querySelectorAll('.cls-cat-btn').forEach(b => b.disabled = true);
    } else {
      newWrong.push(it);
      if (row) { row.classList.remove('cls-correct'); row.classList.add('cls-wrong'); }
      if (tipEl) { tipEl.textContent = '💡 ' + (it.tip || `Correcta: ${it.correct}.`); tipEl.style.display = 'block'; }
    }
  });

  if (correctTotal === items.length) {
    awardPoints(si, att);
    document.querySelector('.btn-verify').disabled = true;
    showFeedback(`✅ Perfecto. ${items.length}/${items.length} correctas. Ahora vas a ver cómo estas cuentas generan un NOF negativo.`, 'correct');
    showNextBtn();
  } else if (att >= maxA) {
    items.forEach(it => {
      if (state.latiClsLocked[it.id]) return;
      const row   = document.getElementById('lticls_' + it.id);
      const tipEl = document.getElementById('lticlstip_' + it.id);
      if (row) { row.classList.remove('cls-wrong'); row.classList.add('cls-revealed'); }
      row && row.querySelectorAll('.cls-cat-btn').forEach(b => b.disabled = true);
      if (tipEl) { tipEl.textContent = `✓ Respuesta: ${it.correct}. ${it.tip||''}`; tipEl.style.display = 'block'; }
    });
    awardPoints(si, maxA + 1);
    document.querySelector('.btn-verify').disabled = true;
    showFeedback(`Sin puntos. Respuestas reveladas.`, 'wrong');
    showNextBtn();
  } else {
    showFeedback(`${correctTotal}/${items.length} correctas. ${newWrong.length} incorrectas — revisá los tips. Intentos restantes: ${maxA - att}.`, 'wrong');
  }
}



// ═══════════════════════════════════════════════════════════
// PROGRESO GUARDADO — localStorage
// ═══════════════════════════════════════════════════════════

function saveProgress() {
  try {
    const data = {
      version: 2,
      cases: CASES.map(c => {
        const saved = loadProgress();
        const prev = saved.cases ? saved.cases.find(x => x.id === c.id) : null;
        return prev || { id: c.id, completed: false, bestScore: 0, bestDiff: null, attempts: 0 };
      })
    };
    // Update current case
    const ci = state.currentCase ? state.currentCase.id : null;
    if (ci !== null) {
      const entry = data.cases.find(x => x.id === ci);
      if (entry) {
        entry.attempts = (entry.attempts || 0) + 1;
        if (state.score > (entry.bestScore || 0)) {
          entry.bestScore = state.score;
          entry.bestDiff  = state.diffKey;
        }
        if (state.currentStep >= state.steps.length - 1) {
          entry.completed = true;
        }
      }
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch(e) {}
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { cases: [] };
  } catch(e) { return { cases: [] }; }
}

function getCaseProgress(caseId) {
  const data = loadProgress();
  return (data.cases || []).find(x => x.id === caseId) || { completed: false, bestScore: 0, bestDiff: null, attempts: 0 };
}

function clearProgress() {
  if (confirm('¿Borrar todo el progreso guardado?')) {
    localStorage.removeItem(STORAGE_KEY);
    renderHome();
  }
}

// ═══════════════════════════════════════════════════════════
// GLOSARIO INTEGRADO
// ═══════════════════════════════════════════════════════════
const GLOSSARY = [
  { term: 'Revenue (Ventas)', def: 'Ingresos totales por la venta de productos o servicios. Punto de partida del Estado de Resultados.' },
  { term: 'COGS', def: 'Cost of Goods Sold — costo directo de producción o adquisición de lo que se vende. Excluye gastos operativos generales.' },
  { term: 'Gross Profit', def: 'Revenue − COGS. Mide la rentabilidad antes de los gastos operativos. Margen alto = ventaja competitiva en costos o pricing.' },
  { term: 'SG&A', def: 'Selling, General & Administrative expenses. Gastos operativos que no son costo de producción directa: ventas, marketing, administración, I+D.' },
  { term: 'D&A', def: 'Depreciación (activos físicos) y Amortización (activos intangibles). Gasto contable que no implica salida de caja.' },
  { term: 'EBIT', def: 'Earnings Before Interest and Taxes — resultado operativo puro. Excluye el efecto de deuda e impuestos. Permite comparar empresas con distinta estructura financiera.' },
  { term: 'NOPAT', def: 'Net Operating Profit After Tax = EBIT − Impuesto Operativo = EBIT × (1 − t). Utilidad operativa después de impuestos, como si la empresa no tuviera deuda. Base del ROIC, EVA y FFL.' },
  { term: 'NOF', def: 'Necesidades Operativas de Fondos = AO corriente − PO corriente. Capital "atrapado" en el ciclo operativo. Puede ser negativo (ventaja competitiva).' },
  { term: 'AFN', def: 'Activo Fijo Neto = PP&E bruto − Depreciación acumulada. Inversión en planta, equipos y propiedades que generan el negocio.' },
  { term: 'AIN', def: 'Activo Intangible Neto = Intangibles brutos − Amortización. Incluye patentes, marcas, goodwill, software activado.' },
  { term: 'Capital Invertido (CI)', def: 'CI = NOF + AFN + AIN. Todo el capital comprometido en la operación del negocio. Denominador del ROIC.' },
  { term: 'Rotación del AN', def: 'Revenue / CI. Mide la "velocidad" del negocio — cuántos pesos de revenue genera cada peso invertido. Alto en retail, bajo en farmacéutica.' },
  { term: 'ROIC', def: 'Return on Invested Capital = NOPAT / CI × 100 = Margen NOPAT × Rotación (DuPont). Rentabilidad real del negocio operativo.' },
  { term: 'WACC', def: 'Weighted Average Cost of Capital. Costo promedio del capital (deuda + equity). Si ROIC > WACC → la empresa crea valor.' },
  { term: 'Spread', def: 'ROIC − WACC. Exceso de rentabilidad sobre el costo de capital. Positivo = crea valor. Negativo = destruye valor aunque tenga ganancias.' },
  { term: 'EVA', def: 'Economic Value Added = Spread × CI / 100. Valor económico creado en el período. Es el veredicto final sobre si la empresa enriquece a sus accionistas.' },
  { term: 'DSO', def: 'Días de Cobranzas = (Cuentas por Cobrar − Ingresos Diferidos) × 365 / Ventas. Días promedio que tarda la empresa en cobrar. Menor = mejor (cobra más rápido). Si no hay ingresos diferidos en CxC, se usa CxC × 365 / Ventas.' },
  { term: 'DIO', def: 'Days Inventory Outstanding = Inventario × 365 / COGS. Días que el inventario permanece en stock. Menor = menos capital inmovilizado.' },
  { term: 'DPO', def: 'Days Payable Outstanding = CxP × 365 / COGS. Días que tarda la empresa en pagar a proveedores. Mayor = mejor (retiene más caja).' },
  { term: 'CCC', def: 'Ciclo de Conversión de Caja = Días de cobranzas + Días de inventario − Días de pago. Días que la empresa necesita financiar su operación. Negativo = modelo de financiamiento invertido (Amazon, Costco, Zara).' },
  { term: 'FFL', def: 'Flujo de Fondos Libre = EBIT − Impuesto Operativo − ΔActivo Operativo Neto = NOPAT − ΔCI. Efectivo real generado después de reinvertir en el negocio. Si FFL > 0: puede pagar deuda o dividendos.' },
  { term: 'ΔCI', def: 'Inversión neta en Capital Invertido = CI actual − CI anterior. Cuánto creció el capital comprometido en el período.' },
  { term: 'NOF negativo', def: 'Los Pasivos Operativos superan a los Activos Operativos. Los proveedores, clientes o empleados financian el ciclo operativo. Ventaja competitiva de capital de trabajo (Costco, Amazon, Mercado Libre).' },
  { term: 'Identidad DuPont', def: 'ROIC = Margen NOPAT × Rotación Activo Neto. Un ROIC alto puede venir de margen alto (pharma) o rotación alta (retail). Ambos caminos son válidos.' },
  // ── Estructura financiera y ratios ──────────────────────
  { term: 'Ecuación Patrimonial', def: 'Activos − Pasivos = Patrimonio Neto. La identidad contable fundamental.' },
  { term: 'Activo Operativo Neto', def: 'Capital Propio + Deuda Financiera Neta = Capital Invertido = NOF + AFN + AIN + Otros Neto. Es la base del ROIC.' },
  { term: 'Margen Bruto', def: 'Resultado Bruto / Ventas. Lo que queda de cada peso de ventas después del costo directo de producción.' },
  { term: 'Margen Operativo (EBIT)', def: 'EBIT / Ventas. Rentabilidad operativa pura, sin efecto de deuda ni impuestos.' },
  { term: 'Margen Neto', def: 'Resultado Neto / Ventas. Incluye el efecto de intereses e impuestos.' },
  { term: 'ROA', def: 'Return on Assets = EBIT / Activos. Retorno sobre activos totales. A diferencia del ROIC, incluye activos financieros (caja) en el denominador.' },
  { term: 'ROE', def: 'Return on Equity = Resultado Neto / Patrimonio Neto. Retorno para el accionista. Puede ser alto por rentabilidad real o por apalancamiento.' },
  { term: 'Ratio de Liquidez', def: 'Activo Corriente / Pasivo Corriente. Mide la capacidad de pagar obligaciones de corto plazo. > 1 es la referencia mínima.' },
  { term: 'Debt Ratio', def: 'Total Liabilities / Total Assets. Porcentaje de activos financiados con deuda. Cuanto mayor, más apalancada la empresa.' },
  { term: 'Interest Coverage Ratio', def: 'EBIT / Interest Expense. Cuántas veces el resultado operativo cubre los intereses. < 1.5× es señal de alerta.' },
  { term: 'Debt Service Coverage Ratio', def: 'Operating Cash Flow / Debt Service. Capacidad de cubrir el servicio de deuda con flujo operativo.' },
  { term: 'Tasa Impositiva Efectiva', def: 'Income Tax Expense / EBT. Tasa real pagada, a diferencia de la tasa nominal legal.' },
  // ── Costo de capital ────────────────────────────────────
  { term: 'CAPM', def: 'Capital Asset Pricing Model: Ke = Rf + (β × PRM) + Prima de Riesgo País. Modelo para calcular el retorno requerido por el accionista.' },
  { term: 'Beta (β) Levered', def: 'Sensibilidad del retorno de la acción respecto al mercado, incluyendo el efecto del apalancamiento financiero. βL = Cov(Activo i; Ancla) / Var(Ancla).' },
  { term: 'Beta (β) Unlevered', def: 'Beta sin efecto de deuda = βL / (1 + (1−t) × D/E). Refleja solo el riesgo operativo del negocio.' },
  { term: 'Prima de Riesgo de Mercado (PRM)', def: 'PRM = R Mercado − Risk Free. Exceso de retorno del mercado sobre el activo libre de riesgo.' },
  { term: 'Costo de Deuda (Kd)', def: 'Kd = Rf + δ, donde δ es el spread de crédito. El costo de la deuda se usa neto de impuestos (Kd × (1−t)) en el WACC.' },
  { term: 'WACC', def: 'Weighted Average Cost of Capital = Ke × (E/EV) + Kd × (D/EV) × (1−t). Costo promedio ponderado de capital. Tasa de descuento para valuar la empresa.' },
  // ── Valuación ───────────────────────────────────────────
  { term: 'Enterprise Value (EV)', def: 'EV = Equity Value + Deuda − Caja. Valor total de la empresa independientemente de su estructura de financiamiento.' },
  { term: 'Equity Value', def: 'EV − Deuda + Caja = Share Price × Shares Outstanding. Valor de mercado del patrimonio.' },
  { term: 'Valor Residual', def: 'Free Cash Flow(n) × (1+g) / (r−g). Valor presente de los flujos desde el año n+1 en adelante, asumiendo crecimiento perpetuo g.' },
  { term: 'Ratio de Sharpe', def: 'E(Rp) − Rf / σ(p). Mide el retorno ajustado por riesgo de un portafolio. Cuanto mayor, mejor la relación retorno/riesgo.' },
  { term: 'Retorno Esperado del Portafolio', def: 'E(Rp) = Σ(E(Ri) × Wi). Suma ponderada de los retornos esperados de cada activo en el portafolio.' },
];

function openGlossary() {
  document.getElementById('glossaryPanel').classList.add('open');
  const overlay = document.getElementById('glossaryOverlay');
  if (overlay) overlay.style.display = 'block';
}
function closeGlossary() {
  document.getElementById('glossaryPanel').classList.remove('open');
  const overlay = document.getElementById('glossaryOverlay');
  if (overlay) overlay.style.display = 'none';
}
function toggleGlossary() {
  const panel = document.getElementById('glossaryPanel');
  if (panel.classList.contains('open')) closeGlossary();
  else openGlossary();
}
function filterGlossary(q) {
  const term = q.toLowerCase();
  document.querySelectorAll('.gloss-item').forEach(el => {
    el.style.display = el.dataset.term.includes(term) ? 'block' : 'none';
  });
}

function renderGlossary() {
  document.getElementById('glossaryList').innerHTML = GLOSSARY.map(g =>
    `<div class="gloss-item" data-term="${g.term.toLowerCase()}">
      <div class="gloss-term">${g.term}</div>
      <div class="gloss-def">${g.def}</div>
    </div>`
  ).join('');
}


// ═══════════════════════════════════════════════════════════
// NUBANK — CLASIFICADOR + DATA ROOM
// ═══════════════════════════════════════════════════════════
function stepNuClassify(c, sn, badge) {
  state.nuClsChoices = {};
  state.nuClsLocked  = {};
  const items = [
    {id:'creditos',  label:'Creditos a clientes (tarjetas + prestamos)',   val:'$17,600M', correct:'AO', tip:'El dinero que presta el banco genera ingresos -> AO principal.'},
    {id:'depositos', label:'Depositos de clientes (cuentas digitales)',      val:'$28,300M', correct:'PO', tip:'Los clientes depositan -> el banco les debe ese dinero. Surge del negocio bancario -> PO. Es el motor del NOF negativo.'},
    {id:'caja',      label:'Caja + inversiones financieras del holding',     val:'$9,200M',  correct:'AF', tip:'Excedente de capital, no del ciclo operativo de creditos -> AF.'},
    {id:'ppe',       label:'PP&E neto (oficinas minimas, sin sucursales)',   val:'$30M',     correct:'AF', tip:'Activo fijo neto (AFN) → no es del ciclo operativo corriente → AF.'},
    {id:'intang',    label:'Plataforma tecnologica + goodwill',              val:'$800M',    correct:'AF', tip:'Activo intangible neto (AIN): plataforma tech + goodwill → AF.'},
    {id:'deuda',     label:'Deuda financiera emitida (bonos)',               val:'$800M',    correct:'PF', tip:'Financiamiento elegido por la empresa, no del ciclo operativo -> PF.'}
  ];
  state._nuClsItems = items;
  const rows = items.map(it =>
    '<div class="classify-row" id="nucls_' + it.id + '">' +
    '<div class="cls-info"><span class="cls-label">' + it.label + '</span><span class="cls-amount">' + it.val + '</span></div>' +
    '<div class="cls-btns">' +
    '<button class="cls-cat-btn sel-AO" data-cat="AO" onclick="selectNuCls(\'' + it.id + '\',\'AO\')">AO</button>' +
    '<button class="cls-cat-btn sel-PO" data-cat="PO" onclick="selectNuCls(\'' + it.id + '\',\'PO\')">PO</button>' +
    '<button class="cls-cat-btn sel-AF" data-cat="AF" onclick="selectNuCls(\'' + it.id + '\',\'AF\')">AF</button>' +
    '<button class="cls-cat-btn sel-PF" data-cat="PF" onclick="selectNuCls(\'' + it.id + '\',\'PF\')">PF</button>' +
    '</div><div class="cls-tip" id="nuclstip_' + it.id + '"></div></div>'
  ).join('');

  return '<div class="step-header">' +
    '<div class="step-number">' + sn + '</div>' +
    '<div class="step-badge">' + badge + '</div>' +
    '<div class="step-title">Como funciona un banco digital?</div>' +
    '<div class="step-task">Este banco no tiene sucursales, casi no tiene activos fisicos, pero tiene $68,000M en activos. Clasifica estas 6 cuentas clave en AO, PO, AF o PF.</div>' +
    '</div>' +
    '<div class="concept-box"><strong>El modelo bancario digital:</strong> El banco toma depositos de clientes (PO barato) y los presta como creditos (AO que genera ingresos). Sin sucursales, el costo es minimo. Los depositos PO > creditos AO = NOF negativo enorme.</div>' +
    '<div class="cls-legend">' +
    '<span class="cls-leg-item sel-AO">AO = Activo Operativo</span>' +
    '<span class="cls-leg-item sel-PO">PO = Pasivo Operativo</span>' +
    '<span class="cls-leg-item sel-AF">AF = Activo Financiero</span>' +
    '<span class="cls-leg-item sel-PF">PF = Pasivo Financiero</span></div>' +
    '<div class="classify-container">' + rows + '</div>' +
    '<div class="cls-progress" id="nuClsProgress">0 / ' + items.length + ' clasificadas</div>' +
    '<div class="answer-row" style="margin-top:4px"><button class="btn-verify" onclick="verifyNuClassify()">Verificar &rarr;</button>' +
    (state.difficulty.hints ? '<button class="btn-hint" onclick="toggleHint()">&#128161; Pista</button>' : '') +
    '</div>' +
    '<div class="attempts-row" id="attemptsRow">' + fmtDots() + '</div>' +
    '<div class="hint-box" id="hintBox">Los depositos son PO (obligaciones del ciclo bancario). Los creditos otorgados son AO (activos que generan ingresos). La caja excedente del holding es AF.</div>' +
    '<div class="feedback-box" id="feedbackBox"></div>' +
    '<button class="btn-next" id="btnNext" onclick="nextStep()">Siguiente paso &rarr;</button>';
}

function selectNuCls(id, cat) {
  if (state.nuClsLocked && state.nuClsLocked[id]) return;
  state.nuClsChoices[id] = cat;
  const row = document.getElementById('nucls_' + id);
  if (!row) return;
  row.querySelectorAll('.cls-cat-btn').forEach(function(b){ b.classList.toggle('active', b.dataset.cat === cat); });
  const total = state._nuClsItems.filter(function(it){ return state.nuClsChoices[it.id] || (state.nuClsLocked && state.nuClsLocked[it.id]); }).length;
  const prog = document.getElementById('nuClsProgress');
  if (prog) prog.textContent = total + ' / ' + state._nuClsItems.length + ' clasificadas';
}

function verifyNuClassify() {
  const items = state._nuClsItems;
  const choices = state.nuClsChoices || {};
  const si = state.currentStep;
  if (!state.nuClsLocked) state.nuClsLocked = {};
  const pending = items.filter(function(it){ return !state.nuClsLocked[it.id] && !choices[it.id]; });
  if (pending.length > 0) { showFeedback('Clasifica todas las cuentas primero (' + pending.length + ' pendientes).', 'wrong'); return; }
  const att = ++state.stepAttempts[si];
  markAttemptDot(att - 1);
  const maxA = state.difficulty.maxAttempts;
  let correctTotal = Object.keys(state.nuClsLocked).length;
  items.forEach(function(it) {
    if (state.nuClsLocked[it.id]) return;
    const row = document.getElementById('nucls_' + it.id);
    const tipEl = document.getElementById('nuclstip_' + it.id);
    if (choices[it.id] === it.correct) {
      correctTotal++;
      state.nuClsLocked[it.id] = true;
      if (row) { row.classList.remove('cls-wrong'); row.classList.add('cls-correct'); }
      if (row) row.querySelectorAll('.cls-cat-btn').forEach(function(b){ b.disabled = true; });
    } else {
      if (row) { row.classList.remove('cls-correct'); row.classList.add('cls-wrong'); }
      if (tipEl) { tipEl.textContent = '&#128161; ' + (it.tip || 'Correcta: ' + it.correct); tipEl.style.display = 'block'; }
    }
  });
  if (correctTotal === items.length) {
    awardPoints(si, att);
    document.querySelector('.btn-verify').disabled = true;
    showFeedback('\u2705 Perfecto! ' + items.length + '/' + items.length + ' correctas. Ahora vas a calcular los margenes y ver como el NOF negativo determina el Capital Invertido.', 'correct');
    showNextBtn();
  } else if (att >= maxA) {
    items.forEach(function(it) {
      if (state.nuClsLocked[it.id]) return;
      const row = document.getElementById('nucls_' + it.id);
      const tipEl = document.getElementById('nuclstip_' + it.id);
      if (row) { row.classList.remove('cls-wrong'); row.classList.add('cls-revealed'); }
      if (row) row.querySelectorAll('.cls-cat-btn').forEach(function(b){ b.disabled = true; });
      if (tipEl) { tipEl.textContent = '\u2713 Respuesta: ' + it.correct + '. ' + (it.tip || ''); tipEl.style.display = 'block'; }
    });
    awardPoints(si, maxA + 1);
    document.querySelector('.btn-verify').disabled = true;
    showFeedback('Sin puntos. Respuestas reveladas.', 'wrong');
    showNextBtn();
  } else {
    showFeedback(correctTotal + '/' + items.length + ' correctas. Intentos restantes: ' + (maxA - att) + '.', 'wrong');
  }
}

function renderDataRoomVBM(c, sid) {
  const hlER  = ['grossProfit','ebit','nopat','vbm_memNopat','mc_vbm_memModel'].includes(sid);
  const hlWC  = ['nof','ci'].includes(sid);
  const hlROIC = ['vbm_roic22','vbm_roic23','roic','rotacion'].includes(sid);
  const hlEVA  = ['eva','vbm_evaAcum','vbm_roicMarginal','vbm_evaMarginal','spread'].includes(sid);
  const hlFFL  = ['ffl'].includes(sid);
  const hlVAL  = ['vbm_val0','vbm_valG','vbm_impliedG'].includes(sid);
  const hlDiv  = ['vbm_specialDiv','mc_vbm_decision'].includes(sid);

  const row = (lbl, val, given=false, extra='') =>
    `<div class="dr-row"${extra}><span class="dr-row-label">${lbl}</span><span class="dr-row-val${given?' dr-given':''}">${val}</span></div>`;

  document.getElementById('dataRoom').innerHTML =
    `<div class="dr-title">📊 Data Room — Costco VBM · FY2022–FY2024</div>` +

    // ── Estado de Resultados ──────────────────────────────────
    `<div class="dr-section ${hlER?'highlight':''}">` +
    `<div class="dr-section-title">📈 Estado de Resultados</div>` +
    `<table style="width:100%;font-size:.7rem;border-collapse:collapse">` +
    `<thead><tr><th style="text-align:left;padding:2px 4px;color:var(--muted)">Item</th><th style="text-align:right;padding:2px 4px;color:var(--muted)">FY2022</th><th style="text-align:right;padding:2px 4px;color:var(--muted)">FY2023</th><th style="text-align:right;padding:2px 4px;color:var(--teal)">FY2024</th></tr></thead>` +
    `<tbody>` +
    `<tr><td style="padding:2px 4px">Revenue</td><td style="text-align:right;padding:2px 4px">$${fmt(c.revenue22)}M</td><td style="text-align:right;padding:2px 4px">$${fmt(c.revenue23)}M</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">$${fmt(c.revenue)}M</td></tr>` +
    `<tr><td style="padding:2px 4px">COGS</td><td style="text-align:right;padding:2px 4px">-</td><td style="text-align:right;padding:2px 4px">-</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">($${fmt(c.cogs)}M)</td></tr>` +
    `<tr><td style="padding:2px 4px">SG&amp;A</td><td style="text-align:right;padding:2px 4px">-</td><td style="text-align:right;padding:2px 4px">-</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">($${fmt(c.sga)}M)</td></tr>` +
    `<tr style="border-top:1px solid var(--border)"><td style="padding:2px 4px;font-weight:700">EBIT</td><td style="text-align:right;padding:2px 4px;font-weight:700">$${fmt(c.ebit22)}M</td><td style="text-align:right;padding:2px 4px;font-weight:700">$${fmt(c.ebit23)}M</td><td style="text-align:right;padding:2px 4px;font-weight:700;color:var(--teal)">$${fmt(c.ebit)}M</td></tr>` +
    `<tr><td style="padding:2px 4px">Tax rate</td><td style="text-align:right;padding:2px 4px">${c.tax22}%</td><td style="text-align:right;padding:2px 4px">${c.tax23}%</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">${c.tax}%</td></tr>` +
    `<tr><td style="padding:2px 4px">D&amp;A</td><td style="text-align:right;padding:2px 4px">$${fmt(c.da22)}M</td><td style="text-align:right;padding:2px 4px">$${fmt(c.da23)}M</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">$${fmt(c.da)}M</td></tr>` +
    `<tr style="border-top:1px solid var(--border)"><td style="padding:2px 4px;color:var(--blue)">Cuotas membresía</td><td style="text-align:right;padding:2px 4px;color:var(--blue)">$${fmt(c.membershipFees22)}M</td><td style="text-align:right;padding:2px 4px;color:var(--blue)">$${fmt(c.membershipFees23)}M</td><td style="text-align:right;padding:2px 4px;color:var(--blue)">$${fmt(c.membershipFees)}M</td></tr>` +
    `</tbody></table></div>` +

    // ── Balance / Capital ─────────────────────────────────────
    `<div class="dr-section ${hlWC?'highlight':''}">` +
    `<div class="dr-section-title">💼 Capital Invertido</div>` +
    `<table style="width:100%;font-size:.7rem;border-collapse:collapse">` +
    `<thead><tr><th style="text-align:left;padding:2px 4px;color:var(--muted)">Item</th><th style="text-align:right;padding:2px 4px;color:var(--muted)">FY2022</th><th style="text-align:right;padding:2px 4px;color:var(--muted)">FY2023</th><th style="text-align:right;padding:2px 4px;color:var(--teal)">FY2024</th></tr></thead>` +
    `<tbody>` +
    `<tr><td style="padding:2px 4px">AR (Ctas. cobrar)</td><td style="text-align:right;padding:2px 4px">$${fmt(c.ar22)}M</td><td style="text-align:right;padding:2px 4px">$${fmt(c.ar23)}M</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">$${fmt(c.ar)}M</td></tr>` +
    `<tr><td style="padding:2px 4px">Inventario</td><td style="text-align:right;padding:2px 4px">$${fmt(c.inventory22)}M</td><td style="text-align:right;padding:2px 4px">$${fmt(c.inventory23)}M</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">$${fmt(c.inventory)}M</td></tr>` +
    `<tr><td style="padding:2px 4px">AP (Ctas. pagar)</td><td style="text-align:right;padding:2px 4px">($${fmt(c.ap22)}M)</td><td style="text-align:right;padding:2px 4px">($${fmt(c.ap23)}M)</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">($${fmt(c.ap)}M)</td></tr>` +
    `<tr><td style="padding:2px 4px">Accrued + Membresías dif.</td><td style="text-align:right;padding:2px 4px">($${fmt(c.accrued22)}M)</td><td style="text-align:right;padding:2px 4px">($${fmt(c.accrued23)}M)</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">($${fmt(c.accrued)}M)</td></tr>` +
    `<tr style="border-top:1px solid var(--border);font-weight:700"><td style="padding:2px 4px">NOF</td><td style="text-align:right;padding:2px 4px">($${fmt(Math.abs(c.nof22))}M)</td><td style="text-align:right;padding:2px 4px">($${fmt(Math.abs(c.nof23))}M)</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">($${fmt(Math.abs(c.nof))}M)</td></tr>` +
    `<tr><td style="padding:2px 4px">PP&amp;E neto (AFN)</td><td style="text-align:right;padding:2px 4px">$${fmt(c.afn22)}M</td><td style="text-align:right;padding:2px 4px">$${fmt(c.afn23)}M</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">$${fmt(c.afn)}M</td></tr>` +
    `<tr style="border-top:1px solid var(--border);font-weight:700"><td style="padding:2px 4px">CI total</td><td style="text-align:right;padding:2px 4px">$${fmt(c.ci22)}M</td><td style="text-align:right;padding:2px 4px">$${fmt(c.ci23)}M</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">$${fmt(c.ci)}M</td></tr>` +
    `</tbody></table></div>` +

    // ── ROIC histórico ────────────────────────────────────────
    `<div class="dr-section ${hlROIC?'highlight':''}">` +
    `<div class="dr-section-title">📈 ROIC Multi-período</div>` +
    `<table style="width:100%;font-size:.7rem;border-collapse:collapse">` +
    `<thead><tr><th style="text-align:left;padding:2px 4px;color:var(--muted)">Métrica</th><th style="text-align:right;padding:2px 4px;color:var(--muted)">FY2022</th><th style="text-align:right;padding:2px 4px;color:var(--muted)">FY2023</th><th style="text-align:right;padding:2px 4px;color:var(--teal)">FY2024</th></tr></thead>` +
    `<tbody>` +
    `<tr><td style="padding:2px 4px">NOPAT</td><td style="text-align:right;padding:2px 4px">$${fmt(c.nopat22)}M</td><td style="text-align:right;padding:2px 4px">$${fmt(c.nopat23)}M</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">$${fmt(c.nopat)}M</td></tr>` +
    `<tr><td style="padding:2px 4px">CI</td><td style="text-align:right;padding:2px 4px">$${fmt(c.ci22)}M</td><td style="text-align:right;padding:2px 4px">$${fmt(c.ci23)}M</td><td style="text-align:right;padding:2px 4px;color:var(--teal)">$${fmt(c.ci)}M</td></tr>` +
    `<tr style="border-top:1px solid var(--border)"><td style="padding:2px 4px">WACC</td><td colspan="3" style="text-align:right;padding:2px 4px" class="dr-given">${c.wacc}% (dado)</td></tr>` +
    `</tbody></table></div>` +

    // ── EVA y Valuación ───────────────────────────────────────
    `<div class="dr-section ${(hlEVA||hlVAL)?'highlight':''}">` +
    `<div class="dr-section-title">⭐ EVA &amp; Valuación</div>` +
    `${row('EVA FY2022','$'+fmt(c.eva22)+'M',true)}` +
    `${row('EVA FY2023','$'+fmt(c.eva23)+'M',true)}` +
    `${row('TEV mercado (market cap adj.)','$'+fmt(c.marketTEV)+'M',true)}` +
    `${row('Shares outstanding',fmt(c.shares)+'M',true)}` +
    `${row('Dividendo especial FY2024 (total)','$'+fmt(c.specialDivTotal)+'M',true)}` +
    `</div>` +

    // ── Datos adicionales ─────────────────────────────────────
    `<div class="dr-section ${(hlFFL||hlDiv)?'highlight':''}">` +
    `<div class="dr-section-title">📋 Datos adicionales</div>` +
    `${row('Total Assets FY2024','$'+fmt(c.totalAssets)+'M',true)}` +
    `${row('Patrimonio Neto FY2024','$'+fmt(c.pn)+'M',true)}` +
    `${row('Net Income FY2024','$'+fmt(c.netIncome)+'M',true)}` +
    `${row('CapEx FY2024 (nuevas tiendas)','$4,710M',true)}` +
    `</div>`;
}

function renderDataRoomCase6(c, sid) {
  const hlER = ['grossProfit','margenBruto','ebit','nopat','margenNopat'].includes(sid);
  const hlWC = ['nof','mc_nu_depositos'].includes(sid);
  const hlLP = ['ci','rotacion','roic','roa','roe','spread','eva','ffl','mc_nu_expansion'].includes(sid);

  document.getElementById('dataRoom').innerHTML =
    '<div class="dr-title">&#128202; Data Room &mdash; Banco Digital LatAm</div>' +

    '<div class="dr-section ' + (hlER ? 'highlight' : '') + '">' +
    '<div class="dr-section-title">&#128200; Estado de Resultados</div>' +
    '<div class="dr-row"><span class="dr-row-label">Revenue (intereses + comisiones)</span><span class="dr-row-val">$' + fmt(c.revenue) + 'M</span></div>' +
    '<div class="dr-row"><span class="dr-row-label">COGS (fondeo + perdidas credito)</span><span class="dr-row-val">($' + fmt(c.cogs) + 'M)</span></div>' +
    '<div class="dr-row" style="padding-left:4px;border-left:2px solid var(--border)"><span class="dr-row-label" style="font-size:.7rem">= Gross Profit</span><span class="dr-row-val" style="color:var(--text)">$' + fmt(c.grossProfit) + 'M</span></div>' +
    '<div class="dr-row"><span class="dr-row-label">SG&amp;A (tech + personal)</span><span class="dr-row-val">($' + fmt(c.sga) + 'M)</span></div>' +
    '<div class="dr-row"><span class="dr-row-label">D&amp;A (minima, sin activos fisicos)</span><span class="dr-row-val">($' + fmt(c.da) + 'M)</span></div>' +
    '<div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px"><span class="dr-row-label" style="font-weight:700">= EBIT</span><span class="dr-row-val" style="color:var(--text)">$' + fmt(c.ebit) + 'M</span></div>' +
    '<div class="dr-row"><span class="dr-row-label">Tasa impositiva (Brasil)</span><span class="dr-row-val dr-given">' + c.tax + '%</span></div>' +
    '</div>' +

    '<div class="dr-section ' + (hlWC ? 'highlight' : '') + '">' +
    '<div class="dr-section-title">&#128201; Activos Operativos Corrientes</div>' +
    '<div class="dr-row"><span class="dr-row-label">Creditos a clientes (AO principal)</span><span class="dr-row-val">$' + fmt(c.ar) + 'M</span></div>' +
    '<div class="dr-row"><span class="dr-row-label">Inventario fisico</span><span class="dr-row-val">$0M <span style="font-size:.65rem;color:var(--muted)">(banco digital)</span></span></div>' +
    '<div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px"><span class="dr-row-label" style="font-weight:700">Total AO corriente</span><span class="dr-row-val" style="color:var(--text)">$' + fmt(c.totalAO) + 'M</span></div>' +
    '</div>' +

    '<div class="dr-section ' + (hlWC ? 'highlight' : '') + '">' +
    '<div class="dr-section-title">&#128203; Pasivos Operativos Corrientes</div>' +
    '<div class="dr-row"><span class="dr-row-label">Depositos de clientes (PO clave)</span><span class="dr-row-val">$' + fmt(c.ap) + 'M</span></div>' +
    '<div class="dr-row"><span class="dr-row-label">Otros pasivos operativos</span><span class="dr-row-val">$' + fmt(c.accrued) + 'M</span></div>' +
    '<div class="dr-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:4px"><span class="dr-row-label" style="font-weight:700">Total PO corriente</span><span class="dr-row-val" style="color:var(--text)">$' + fmt(c.totalPO) + 'M</span></div>' +
    '</div>' +

    '<div class="dr-section ' + (hlLP ? 'highlight' : '') + '">' +
    '<div class="dr-section-title">&#127970; Activos de Largo Plazo</div>' +
    '<div class="dr-row"><span class="dr-row-label">PP&amp;E neto (oficinas minimas)</span><span class="dr-row-val">$' + fmt(c.afn) + 'M &#128552;</span></div>' +
    '<div class="dr-row"><span class="dr-row-label">Intangibles netos (plataforma + GW)</span><span class="dr-row-val">$' + fmt(c.ain) + 'M</span></div>' +
    '<div class="dr-row"><span class="dr-row-label" style="color:var(--blue);font-size:.72rem">CI incluye capital regulatorio minimo</span><span class="dr-row-val dr-given">$' + fmt(c.prevCI) + 'M ant.</span></div>' +
    '</div>' +

    '<div class="dr-section ' + (hlLP ? 'highlight' : '') + '">' +
    '<div class="dr-section-title">&#128202; Datos adicionales</div>' +
    '<div class="dr-row"><span class="dr-row-label">WACC</span><span class="dr-row-val dr-given">' + c.wacc + '%</span></div>' +
    '<div class="dr-row"><span class="dr-row-label">Total Assets</span><span class="dr-row-val dr-given">$' + fmt(c.totalAssets) + 'M</span></div>' +
    '<div class="dr-row"><span class="dr-row-label">Patrimonio Neto</span><span class="dr-row-val dr-given">$' + fmt(c.pn) + 'M</span></div>' +
    '<div class="dr-row"><span class="dr-row-label">Net Income FY2024</span><span class="dr-row-val dr-given">$' + fmt(c.netIncome) + 'M</span></div>' +
    '</div>';
}

// ═══════════════════════════════════════════════════════════
// EXAM MODE — TIMER ENGINE
// ═══════════════════════════════════════════════════════════
let examTimer = null;
let examStepStartTime = null;
let examStepTimes = []; // seconds spent per step

function examStartStepTimer() {
  if (!state.difficulty.examMode) return;
  examStepStartTime = Date.now();
  const secs = state.difficulty.stepSeconds || 180;
  let remaining = secs;
  updateTimerDisplay(remaining);

  examTimer = setInterval(() => {
    remaining--;
    updateTimerDisplay(remaining);
    if (remaining <= 10) {
      const bar = document.getElementById('examTimerBar');
      if (bar) bar.style.background = 'var(--red)';
    }
    if (remaining <= 0) {
      clearInterval(examTimer);
      examTimer = null;
      examTimeUp();
    }
  }, 1000);
}

function examStopStepTimer() {
  if (examTimer) { clearInterval(examTimer); examTimer = null; }
  const elapsed = examStepStartTime ? Math.round((Date.now() - examStepStartTime) / 1000) : 0;
  examStepTimes[state.currentStep] = elapsed;
  examStepStartTime = null;
}

function updateTimerDisplay(secs) {
  const el = document.getElementById('examTimerLabel');
  const bar = document.getElementById('examTimerBar');
  if (!el) return;
  const m = Math.floor(secs / 60), s = secs % 60;
  el.textContent = `⏱️ ${m}:${s.toString().padStart(2,'0')}`;
  const total = state.difficulty.stepSeconds || 180;
  const pct = Math.max(0, secs / total * 100);
  if (bar) {
    bar.style.width = pct + '%';
    bar.style.background = secs <= 10 ? 'var(--red)' : secs <= 30 ? 'var(--yellow)' : 'var(--teal)';
  }
}

function examTimeUp() {
  // Force wrong answer and move forward
  const si = state.currentStep;
  state.stepAttempts[si] = state.difficulty.maxAttempts;
  state.stepScores[si] = 0;
  showFeedback('⏰ Tiempo agotado para este paso.', 'wrong');
  // disable inputs
  const inp = document.getElementById('answerInput');
  if (inp) { inp.disabled = true; }
  const vbtn = document.querySelector('.btn-verify');
  if (vbtn) vbtn.disabled = true;
  // disable MC options
  document.querySelectorAll('.mc-option').forEach(b => b.disabled = true);
  showNextBtn();
}

// ═══════════════════════════════════════════════════════════
// DATA ROOM — ilumina la sección relevante al paso actual
// ═══════════════════════════════════════════════════════════
function renderDataRoom() {
  const c   = state.currentCase;
  const sid = state.steps[state.currentStep] || '';

  if (c.id === 5) { renderDataRoomCase6(c, sid); return; }
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
  // VBM-specific steps: show the multi-period comparative view
  const vbmSteps = ['vbm_roic22','vbm_roic23','vbm_evaAcum','vbm_roicMarginal','vbm_evaMarginal',
                    'vbm_val0','vbm_valG','vbm_impliedG','vbm_specialDiv','mc_vbm_decision',
                    'vbm_memNopat','mc_vbm_memModel'];
  if (vbmSteps.includes(sid)) { renderDataRoomVBM(c, sid); return; }

  const hlER  = ['grossProfit','margenBruto','ebit','ebitda','nopat','margenNopat'].includes(sid);
  const hlWC  = ['nof','dso','dio','dpo','ccc'].includes(sid);
  const hlLP  = ['ci','deltaAN','rotacion','roic','spread','eva','ffl'].includes(sid);
  const hlRet = ['rotacion','roa','roe','roic','spread','eva'].includes(sid);
  const hlCls = sid === 'classifyAccounts';

  document.getElementById('dataRoom').innerHTML = `
    <div class="dr-title">📊 Data Room — ${c.name} FY2024</div>

    <div class="dr-section ${hlER ? 'highlight' : ''}">
      <div class="dr-section-title">📈 Estado de Resultados</div>
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

  // Case 3 — Costco Integrador: notebook completo
  if (c.id === 2) {
    html += '<div class="nb-section">CLASIFICACIÓN</div>';
    if (nb.classification) {
      const items = c.classifyItems;
      html += row('AO', `${items.filter(i=>nb.classification[i.id]==='AO').length} ctas`, true);
      html += row('PO', `${items.filter(i=>nb.classification[i.id]==='PO').length} ctas`, true);
      html += row('AF', `${items.filter(i=>nb.classification[i.id]==='AF').length} ctas`, true);
      html += row('PF', `${items.filter(i=>nb.classification[i.id]==='PF').length} ctas`, true);
    } else { html += row('Estado', null); }

    html += '<div class="nb-section">RESULTADOS FY2024</div>';
    html += row('Gross Profit', nb.grossProfit !== undefined ? `$${nb.grossProfit}M` : null);
    html += row('EBIT',     nb.ebit     !== undefined ? `$${nb.ebit}M`      : null);
    html += row('EBITDA',   nb.ebitda   !== undefined ? `$${nb.ebitda}M`    : null);
    html += row('NOPAT',    nb.nopat    !== undefined ? `$${nb.nopat}M`     : null);
    html += row('NOPAT membresías', nb.vbm_memNopat !== undefined ? `$${nb.vbm_memNopat}M` : null);

    html += '<div class="nb-section">CAPITAL INVERTIDO</div>';
    html += row('NOF',   nb.nof     !== undefined ? `$${nb.nof}M`     : null);
    html += row('CI',    nb.ci      !== undefined ? `$${nb.ci}M`      : null);
    html += row('ΔCI',   nb.deltaAN !== undefined ? `$${nb.deltaAN}M` : null);

    html += '<div class="nb-section">CICLO DE CAJA</div>';
    html += row('DSO/DIO/DPO', (nb.dso&&nb.dio&&nb.dpo) ? `${nb.dso}d/${nb.dio}d/${nb.dpo}d` : null);
    html += row('CCC', nb.ccc !== undefined ? `${nb.ccc} días` : null);

    html += '<div class="nb-section">ROIC MULTI-PERÍODO</div>';
    html += row('ROIC FY2022', nb.vbm_roic22 !== undefined ? `${nb.vbm_roic22}%` : null);
    html += row('ROIC FY2023', nb.vbm_roic23 !== undefined ? `${nb.vbm_roic23}%` : null);
    html += row('Rotación',    nb.rotacion   !== undefined ? `${nb.rotacion}x`   : null);
    html += row('ROIC FY2024', nb.roic       !== undefined ? `${nb.roic}%`       : null);
    html += row('ROA / ROE',   (nb.roa&&nb.roe) ? `${nb.roa}% / ${nb.roe}%`     : null);

    html += '<div class="nb-section">CREACIÓN DE VALOR</div>';
    html += row('Spread',        nb.spread          !== undefined ? `${nb.spread}%`           : null);
    html += row('EVA FY2024',    nb.eva             !== undefined ? `$${nb.eva}M`             : null);
    html += row('EVA acumulado', nb.vbm_evaAcum     !== undefined ? `$${nb.vbm_evaAcum}M`    : null);
    html += row('ROIC marginal', nb.vbm_roicMarginal !== undefined ? `${nb.vbm_roicMarginal}%` : null);
    html += row('EVA marginal',  nb.vbm_evaMarginal  !== undefined ? `$${nb.vbm_evaMarginal}M` : null);

    html += '<div class="nb-section">FLUJO &amp; VALUACIÓN</div>';
    html += row('FFL',             nb.ffl            !== undefined ? `$${nb.ffl}M`             : null);
    html += row('V₀ (sin crec.)', nb.vbm_val0        !== undefined ? `$${nb.vbm_val0}M`        : null);
    html += row('Vg (g=3%)',       nb.vbm_valG        !== undefined ? `$${nb.vbm_valG}M`        : null);
    html += row('g implícita',     nb.vbm_impliedG    !== undefined ? `${nb.vbm_impliedG}%`     : null);
    html += row('Div. espec./acc', nb.vbm_specialDiv  !== undefined ? `$${nb.vbm_specialDiv}`   : null);

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
// FEEDBACK ADAPTATIVO — diagnose(val) por métrica
// Recibe el valor ingresado, devuelve mensaje específico
// ═══════════════════════════════════════════════════════════
function diagnoseGrossProfit(val, c) {
  if (Math.abs(val - c.revenue) < 10) return '📌 Pusiste el Revenue completo — recordá restar el COGS.';
  if (Math.abs(val - c.cogs) < 10) return '📌 Eso es el COGS, no el Gross Profit. GP = Revenue − COGS.';
  if (Math.abs(val - (c.revenue + c.cogs)) < 10) return '📌 Sumaste en vez de restar. GP = Revenue − COGS.';
  if (val > c.revenue) return '📌 El Gross Profit no puede superar el Revenue.';
  if (val < 0) return '📌 Un Gross Profit negativo significaría vender por debajo del costo — revisá los datos.';
  return null;
}

function diagnoseMargen(val, correct, metrica) {
  if (val > 100) return `📌 Un margen no puede superar 100%. ¿Dividiste bien por Revenue y multiplicaste por 100?`;
  if (val < 0) return `📌 Este margen es positivo. Revisá los signos.`;
  if (Math.abs(val - correct * 100) < 1) return `📌 Casi — parece que te faltó multiplicar por 100. El margen va en %, no en decimal.`;
  if (Math.abs(val - correct / 100) < 0.01) return `📌 Dividiste de más. Margen = Resultado / Revenue × 100.`;
  return null;
}

function diagnoseNopat(val, c) {
  const ebit = c.ebit;
  if (Math.abs(val - ebit) < 5) return `📌 Pusiste el EBIT sin restar el Impuesto Operativo. NOPAT = EBIT − (EBIT × t) = EBIT × (1 − ${c.tax}%).`;
  if (Math.abs(val - ebit * c.tax / 100) < 5) return `📌 Eso es el Impuesto Operativo, no el NOPAT. NOPAT = EBIT − Impuesto Operativo = EBIT × (1 − t).`;
  if (Math.abs(val - ebit * (1 + c.tax/100)) < 5) return `📌 Sumaste el factor en vez de restarlo. NOPAT = EBIT × (1 − t).`;
  return null;
}

function diagnoseNof(val, c) {
  if (Math.abs(val - c.totalAO) < 5) return `📌 Eso son solo los Activos Operativos. NOF = AO − PO, falta restar los Pasivos Operativos ($${fmt(c.totalPO)}M).`;
  if (Math.abs(val - c.totalPO) < 5) return `📌 Eso son solo los Pasivos Operativos. NOF = AO − PO = $${fmt(c.totalAO)}M − $${fmt(c.totalPO)}M.`;
  if (Math.abs(val - (c.totalAO + c.totalPO)) < 5) return `📌 Sumaste en vez de restar. NOF = AO − PO.`;
  if (val > 0 && c.nof < 0) return `📌 El resultado debería ser negativo — los Pasivos Operativos superan a los Activos Operativos en este caso.`;
  return null;
}

function diagnoseCi(val, c) {
  if (Math.abs(val - (c.afn + c.ain)) < 5) return `📌 Olvidaste sumar el NOF ($${fmt(c.nof)}M). CI = NOF + AFN + AIN.`;
  if (Math.abs(val - c.nof) < 5) return `📌 Eso es solo el NOF. CI = NOF + AFN + AIN.`;
  if (Math.abs(val - (c.nof + c.afn)) < 5) return `📌 Falta sumar el AIN ($${fmt(c.ain)}M). CI = NOF + AFN + AIN.`;
  if (Math.abs(val - (c.nof + c.ain)) < 5) return `📌 Falta sumar el AFN ($${fmt(c.afn)}M). CI = NOF + AFN + AIN.`;
  return null;
}

function diagnoseRotacion(val, c) {
  if (Math.abs(val - c.ci / c.revenue) < 0.05) return `📌 Dividiste al revés. Rotación = Revenue / CI, no CI / Revenue.`;
  if (Math.abs(val - c.nopatMargin) < 0.5) return `📌 Eso es el Margen NOPAT. Rotación = Revenue / CI.`;
  return null;
}

function diagnoseRoic(val, c) {
  if (Math.abs(val - c.nopatMargin * c.rotacion) < 0.5) return null; // correct via different path
  if (Math.abs(val - c.nopatMargin) < 0.5) return `📌 Eso es el Margen NOPAT, no el ROIC. ROIC = Margen NOPAT × Rotación.`;
  if (Math.abs(val - c.nopat / c.ci) < 0.5) return `📌 Casi — pero el resultado tiene que estar en %. Multiplicá por 100.`;
  if (Math.abs(val - c.rotacion) < 0.1) return `📌 Eso es la Rotación. ROIC = Margen NOPAT (%) × Rotación (x).`;
  if (val > 100) return `📌 Un ROIC no puede superar 100% en condiciones normales. Revisá la fórmula.`;
  return null;
}

function diagnoseEva(val, c) {
  if (Math.abs(val - c.spread * c.ci) < 5) return `📌 El spread está en %, no en decimal. EVA = Spread% × CI / 100.`;
  if (Math.abs(val - c.ci * c.roic / 100) < 5) return `📌 Eso es NOPAT de otra forma, no EVA. EVA = (ROIC − WACC) × CI / 100 = Spread × CI / 100.`;
  if (val < 0 && c.eva > 0) return `📌 El EVA de esta empresa es positivo (ROIC > WACC). Revisá el spread.`;
  return null;
}

function diagnoseDso(val, c) {
  if (Math.abs(val - c.ar / c.revenue * 365) < 0.5) return null;
  if (Math.abs(val - c.revenue / c.ar) < 0.5) return `📌 Eso es la rotación de CxC, no los días. DSO = CxC × 365 / Revenue.`;
  if (Math.abs(val - c.ar * c.revenue / 365) < 5) return `📌 Multiplicaste CxC × Revenue en vez de dividir. DSO = CxC × 365 / Revenue.`;
  if (val < 1) return `📌 El resultado debería ser en días (número entero o con 1 decimal). Revisá la fórmula.`;
  return null;
}

function diagnoseDio(val, c) {
  if (Math.abs(val - c.inventory / c.cogs * 365) < 0.5) return null;
  if (Math.abs(val - c.cogs / c.inventory) < 0.5) return `📌 Eso es la rotación de inventario. DIO = Inventario × 365 / COGS.`;
  if (Math.abs(val - c.inventory * c.revenue / 365) < 5) return `📌 Usaste Revenue en vez de COGS. DIO = Inventario × 365 / COGS.`;
  return null;
}

function diagnoseDpo(val, c) {
  if (Math.abs(val - c.ap / c.cogs * 365) < 0.5) return null;
  if (Math.abs(val - c.ap / c.revenue * 365) < 0.5) return `📌 Usaste Revenue en vez de COGS. DPO = CxP × 365 / COGS.`;
  if (Math.abs(val - c.cogs / c.ap) < 0.5) return `📌 Eso es la rotación de CxP. DPO = CxP × 365 / COGS.`;
  return null;
}

function diagnoseCcc(val, c) {
  if (Math.abs(val - (c.dso + c.dio + c.dpo)) < 1) return `📌 Sumaste el DPO en vez de restarlo. CCC = DSO + DIO − DPO.`;
  if (Math.abs(val - (c.dso - c.dio - c.dpo)) < 1) return `📌 Restaste el DIO también. CCC = DSO + DIO − DPO.`;
  if (val > 0 && c.ccc < 0) return `📌 El CCC de esta empresa es negativo (cobran antes de pagar). Revisá los signos.`;
  return null;
}

function diagnoseFfl(val, c) {
  if (Math.abs(val - c.nopat) < 5) return `📌 Pusiste el NOPAT solo, sin restar el ΔActivo Operativo Neto. FFL = NOPAT − ΔCI = $${fmt(c.nopat)}M − $${fmt(c.invNeta)}M.`;
  if (Math.abs(val - c.invNeta) < 5) return `📌 Eso es el ΔCI (inversión neta). FFL = NOPAT − ΔCI.`;
  if (Math.abs(val - (c.nopat + c.invNeta)) < 5) return `📌 Sumaste el ΔCI en vez de restarlo. FFL = NOPAT − ΔCI.`;
  if (val > c.nopat) return `📌 El FFL no puede ser mayor que el NOPAT (a menos que el CI haya bajado). Revisá el ΔCI.`;
  return null;
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
    // Feedback adaptativo: analizar qué error cometió
    const adaptiveMsg = opts.diagnose ? opts.diagnose(val) : null;
    if (att >= maxA) {
      if (state.difficulty.showSolution) {
        const base = opts.feedbackWrong || `Respuesta correcta: ${opts.correct}`;
        showFeedback(adaptiveMsg ? `${adaptiveMsg} → ${base}` : base, 'wrong');
        document.getElementById('answerInput').value = opts.correct;
      } else {
        showFeedback(adaptiveMsg || `Límite de intentos alcanzado.`, 'wrong');
      }
      document.getElementById('answerInput').disabled = true;
      document.querySelector('.btn-verify').disabled  = true;
      awardPoints(si, att);
      if (opts.nbKey !== undefined)
        fillNotebook(opts.nbKey, opts.nbVal !== undefined ? opts.nbVal : opts.correct);
      if (opts.onCorrect) opts.onCorrect();
      showNextBtn();
    } else {
      const tryMsg = adaptiveMsg || opts.tryAgain || '';
      showFeedback(`${tryMsg}${tryMsg && ' · '}Intentos restantes: ${maxA-att}`, 'wrong');
    }
  }
}

// ═══════════════════════════════════════════════════════════
// RENDERIZADO DE PASOS
// ═══════════════════════════════════════════════════════════
function renderStep() {
  examStopStepTimer();
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
  examStartStepTimer();
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

// ═══════════════════════════════════════════════════════════
// VBM STEP FUNCTIONS — Costco Multi-período (id:6)
// ═══════════════════════════════════════════════════════════

function stepVbmMemNopat(c, sn, badge) {
  return baseStep(sn, badge,
    'Contribución de Membresías al NOPAT',
    `Las cuotas de membresía de Costco son casi 100% NOPAT porque tienen costo marginal ≈ 0. Usando las cuotas FY2024 y la tasa impositiva, calculá cuánto aportan al NOPAT total. Expresá en $M enteros.`,
    'NOPAT membresías = Cuotas membresía × (1 − t)',
    `Cuotas FY2024 = $${fmt(c.membershipFees)}M · Tasa impositiva = ${c.tax}%`,
    'NOPAT de membresías ($M)',
    'M USD',
    'verifyVbmMemNopat',
    infoBoxes([['Cuotas membresía FY2024', `$${fmt(c.membershipFees)}M`], ['Tasa impositiva', `${c.tax}%`], ['NOPAT total', `$${fmt(c.nopat)}M`]])
  );
}
function verifyVbmMemNopat() {
  const c = state.currentCase;
  genericVerify({
    correct: c.memNopat, tolerance: 50,
    nbKey: 'vbm_memNopat', nbVal: c.memNopat,
    feedbackCorrect: `✅ Correcto. $${fmt(c.membershipFees)}M × (1 − ${c.tax}%) = $${fmt(c.memNopat)}M ≈ ${c.memNopotPct}% del NOPAT total.`,
    feedbackWrong:   `NOPAT membresías = $${fmt(c.membershipFees)}M × (1 − ${c.tax/100}) = $${fmt(c.memNopat)}M`,
    tryAgain: `Fórmula: Cuotas × (1 − tasa impositiva)`
  });
}

function stepVbmRoic22(c, sn, badge) {
  return baseStep(sn, badge,
    'ROIC FY2022',
    'Calculá el ROIC de Costco para FY2022 usando el NOPAT y el Capital Invertido de ese año.',
    'ROIC = NOPAT / CI × 100',
    `NOPAT FY2022 = $${fmt(c.nopat22)}M; CI FY2022 = $${fmt(c.ci22)}M`,
    'ROIC FY2022',
    '%',
    'verifyVbmRoic22'
  );
}
function verifyVbmRoic22() {
  const c = state.currentCase;
  genericVerify({
    correct: c.roic22, tolerance: 0.5,
    nbKey: 'vbm_roic22', nbVal: c.roic22,
    feedbackCorrect: `✅ ROIC FY2022 = ${c.roic22}%. Base del análisis de tendencia.`,
    feedbackWrong:   `ROIC FY2022 = $${fmt(c.nopat22)}M / $${fmt(c.ci22)}M = ${c.roic22}%`,
    tryAgain: `Fórmula: NOPAT / CI × 100`
  });
}

function stepVbmRoic23(c, sn, badge) {
  return baseStep(sn, badge,
    'ROIC FY2023',
    'Calculá el ROIC de Costco para FY2023.',
    'ROIC = NOPAT / CI × 100',
    `NOPAT FY2023 = $${fmt(c.nopat23)}M; CI FY2023 = $${fmt(c.ci23)}M`,
    'ROIC FY2023',
    '%',
    'verifyVbmRoic23'
  );
}
function verifyVbmRoic23() {
  const c = state.currentCase;
  genericVerify({
    correct: c.roic23, tolerance: 0.5,
    nbKey: 'vbm_roic23', nbVal: c.roic23,
    feedbackCorrect: `✅ ROIC FY2023 = ${c.roic23}%. La tendencia FY22→FY23→FY24: ${c.roic22}% → ${c.roic23}% → ${c.roic}%`,
    feedbackWrong:   `ROIC FY2023 = $${fmt(c.nopat23)}M / $${fmt(c.ci23)}M = ${c.roic23}%`,
    tryAgain: `Fórmula: NOPAT / CI × 100`
  });
}

function stepVbmEvaAcum(c, sn, badge) {
  return baseStep(sn, badge,
    'EVA Acumulado FY2022–FY2024',
    'Sumá el EVA de los tres años para calcular cuánto valor total creó Costco en el período.',
    'EVA acum. = EVA₂₂ + EVA₂₃ + EVA₂₄',
    `EVA FY2022 = $${fmt(c.eva22)}M (dado); EVA FY2023 = $${fmt(c.eva23)}M (dado); EVA FY2024 = calculado en paso anterior`,
    'EVA acumulado',
    'M USD',
    'verifyVbmEvaAcum'
  );
}
function verifyVbmEvaAcum() {
  const c = state.currentCase;
  genericVerify({
    correct: c.evaAcum, tolerance: 100,
    nbKey: 'vbm_evaAcum', nbVal: c.evaAcum,
    feedbackCorrect: `✅ EVA acumulado = $${fmt(c.eva22)}M + $${fmt(c.eva23)}M + $${fmt(c.eva)}M = $${fmt(c.evaAcum)}M en 3 años. Creación de valor consistente.`,
    feedbackWrong:   `EVA acum. = $${fmt(c.eva22)}M + $${fmt(c.eva23)}M + $${fmt(c.eva)}M = $${fmt(c.evaAcum)}M`,
    tryAgain: `Sumá los EVA de los tres años`
  });
}

function stepVbmRoicMarginal(c, sn, badge) {
  return baseStep(sn, badge,
    'ROIC Marginal FY2023→FY2024',
    'El ROIC marginal mide la rentabilidad del capital <em>incremental</em>. Calculá cuánto NOPAT adicional generó cada peso adicional de CI invertido entre FY2023 y FY2024.',
    'ROIC marginal = ΔNOPAT / ΔCI × 100',
    `NOPAT FY2024 = $${fmt(c.nopat)}M; NOPAT FY2023 = $${fmt(c.nopat23)}M<br>CI FY2024 = $${fmt(c.ci)}M; CI FY2023 = $${fmt(c.ci23)}M`,
    'ROIC marginal',
    '%',
    'verifyVbmRoicMarginal'
  );
}
function verifyVbmRoicMarginal() {
  const c = state.currentCase;
  genericVerify({
    correct: c.roicMarginal, tolerance: 1,
    nbKey: 'vbm_roicMarginal', nbVal: c.roicMarginal,
    feedbackCorrect: `✅ ROIC marginal = ($${fmt(c.nopat)} − $${fmt(c.nopat23)}M) / ($${fmt(c.ci)} − $${fmt(c.ci23)}M) = $${fmt(c.deltaNopat)}M / $${fmt(c.invNeta)}M = ${c.roicMarginal}%. Mayor que el WACC → el crecimiento crea valor.`,
    feedbackWrong:   `ROIC marg. = ΔNOPAT/ΔCI = $${fmt(c.deltaNopat)}M / $${fmt(c.invNeta)}M = ${c.roicMarginal}%`,
    tryAgain: `ΔNOPAT = NOPAT₂₄ − NOPAT₂₃; ΔCI = CI₂₄ − CI₂₃`
  });
}

function stepVbmEvaMarginal(c, sn, badge) {
  return baseStep(sn, badge,
    'EVA Marginal: ¿el último peso crea valor?',
    'Calculá el EVA marginal: el valor creado por el capital incremental invertido en FY2024.',
    'EVA marginal = (ROIC marginal − WACC) × ΔCI / 100',
    `ROIC marginal = ${c.roicMarginal}%; WACC = ${c.wacc}%; ΔCI = $${fmt(c.invNeta)}M`,
    'EVA marginal',
    'M USD',
    'verifyVbmEvaMarginal'
  );
}
function verifyVbmEvaMarginal() {
  const c = state.currentCase;
  genericVerify({
    correct: c.evaMarginal, tolerance: 30,
    nbKey: 'vbm_evaMarginal', nbVal: c.evaMarginal,
    feedbackCorrect: `✅ EVA marginal = (${c.roicMarginal}% − ${c.wacc}%) × $${fmt(c.invNeta)}M = $${fmt(c.evaMarginal)}M. Cada dollar nuevo de inversión crea valor.`,
    feedbackWrong:   `EVA marg. = (${c.roicMarginal}% − ${c.wacc}%) × $${fmt(c.invNeta)}M = $${fmt(c.evaMarginal)}M`,
    tryAgain: `(ROIC_marg − WACC) × ΔCI / 100`
  });
}

function stepVbmVal0(c, sn, badge) {
  return baseStep(sn, badge,
    'Valuación por Perpetuidad — Sin Crecimiento',
    'Usando el modelo EVA, el valor de una empresa es igual al Capital Invertido más el valor presente de los EVA futuros. Calculá V₀ asumiendo que el EVA de FY2024 se mantiene como perpetuidad (sin crecimiento).',
    'V₀ = CI + EVA / WACC',
    `CI FY2024 = $${fmt(c.ci)}M; EVA FY2024 = $${fmt(c.eva)}M; WACC = ${c.wacc}%`,
    'V₀ (sin crecimiento)',
    'M USD',
    'verifyVbmVal0'
  );
}
function verifyVbmVal0() {
  const c = state.currentCase;
  genericVerify({
    correct: c.valuation0, tolerance: 500,
    nbKey: 'vbm_val0', nbVal: c.valuation0,
    feedbackCorrect: `✅ V₀ = $${fmt(c.ci)}M + $${fmt(c.eva)}M / ${c.wacc}% = $${fmt(c.valuation0)}M. El TEV de mercado es $${fmt(c.marketTEV)}M → el mercado premia el crecimiento.`,
    feedbackWrong:   `V₀ = $${fmt(c.ci)}M + $${fmt(c.eva)}M / 0.${c.wacc} = $${fmt(c.valuation0)}M`,
    tryAgain: `V₀ = CI + EVA/WACC`
  });
}

function stepVbmValG(c, sn, badge) {
  return baseStep(sn, badge,
    'Valuación por Perpetuidad — Con Crecimiento (g = 3%)',
    'Recalculá el valor asumiendo que el EVA crece al 3% anual para siempre (perpetuidad con crecimiento de Gordon).',
    'Vg = CI + EVA / (WACC − g)',
    `CI = $${fmt(c.ci)}M; EVA = $${fmt(c.eva)}M; WACC = ${c.wacc}%; g = 3%`,
    'Vg (g = 3%)',
    'M USD',
    'verifyVbmValG'
  );
}
function verifyVbmValG() {
  const c = state.currentCase;
  genericVerify({
    correct: c.valuationG, tolerance: 1000,
    nbKey: 'vbm_valG', nbVal: c.valuationG,
    feedbackCorrect: `✅ Vg = $${fmt(c.ci)}M + $${fmt(c.eva)}M / (${c.wacc}% − 3%) = $${fmt(c.valuationG)}M. El TEV de mercado ($${fmt(c.marketTEV)}M) sigue siendo mayor → el mercado descuenta crecimiento aún más alto.`,
    feedbackWrong:   `Vg = $${fmt(c.ci)}M + $${fmt(c.eva)}M / (0.${c.wacc} − 0.03) = $${fmt(c.valuationG)}M`,
    tryAgain: `Vg = CI + EVA/(WACC − g); WACC − g = ${c.wacc}% − 3% = ${c.wacc-3}%`
  });
}

function stepVbmImpliedG(c, sn, badge) {
  return baseStep(sn, badge,
    'Tasa de Crecimiento Implícita del Mercado',
    'El TEV de mercado de Costco es $412,000M. Despejá g de la fórmula de valuación para encontrar qué tasa de crecimiento descuenta el mercado.',
    'TEV = CI + EVA/(WACC − g)  →  g = WACC − EVA/(TEV − CI)',
    `TEV = $${fmt(c.marketTEV)}M; CI = $${fmt(c.ci)}M; EVA = $${fmt(c.eva)}M; WACC = ${c.wacc}%`,
    'g implícita',
    '%',
    'verifyVbmImpliedG'
  );
}
function verifyVbmImpliedG() {
  const c = state.currentCase;
  genericVerify({
    correct: c.impliedG, tolerance: 0.3,
    nbKey: 'vbm_impliedG', nbVal: c.impliedG,
    feedbackCorrect: `✅ g = ${c.wacc}% − $${fmt(c.eva)}M / ($${fmt(c.marketTEV)}M − $${fmt(c.ci)}M) = ${c.impliedG}%. El mercado descuenta un crecimiento del EVA del ~${c.impliedG}% anual. ¿Es razonable?`,
    feedbackWrong:   `g = WACC − EVA/(TEV − CI) = ${c.wacc}% − $${fmt(c.eva)}M/${fmt(c.marketTEV-c.ci)}M = ${c.impliedG}%`,
    tryAgain: `Despejá g: g = WACC − EVA / (TEV − CI)`
  });
}

function stepVbmSpecialDiv(c, sn, badge) {
  return baseStep(sn, badge,
    'Dividendo Especial por Acción',
    'En FY2024 Costco pagó un dividendo especial de $6,655M. Calculá el valor por acción.',
    'Dividendo/acc = Total dividendo / Shares outstanding',
    `Dividendo total = $${fmt(c.specialDivTotal)}M; Acciones = ${fmt(c.shares)}M`,
    'Dividendo especial por acción',
    'USD/acc',
    'verifyVbmSpecialDiv'
  );
}
function verifyVbmSpecialDiv() {
  const c = state.currentCase;
  genericVerify({
    correct: c.specialDivPS, tolerance: 0.5,
    nbKey: 'vbm_specialDiv', nbVal: c.specialDivPS,
    feedbackCorrect: `✅ $${fmt(c.specialDivTotal)}M / ${fmt(c.shares)}M acciones = $${c.specialDivPS}/acción. Señal de confianza: la empresa retorna capital porque el mercado ya paga una g implícita muy alta.`,
    feedbackWrong:   `$${fmt(c.specialDivTotal)}M / ${fmt(c.shares)}M = $${c.specialDivPS}/acc`,
    tryAgain: `Dividendo / Shares outstanding`
  });
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
      task: `Costco tiene un margen NOPAT de solo ${c.nopatMargin}%  pero un ROIC del ${c.roic}%. ¿Cómo es posible?`,
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
      title: '🔬 Antes de Calcular el CI — Una Pregunta',
      task: `PharmaCore tiene un Margen NOPAT del ${c.nopatMargin}% y un Margen Bruto del ${c.grossMargin}%. Muchos esperarían un ROIC altísimo. ¿Qué elemento del balance podría comprimirlo?`,
      concept: `Margen Bruto = ${c.grossMargin}% · Margen NOPAT = ${c.nopatMargin}% · Sector: Farmacéutico · I+D en SG&A · Patentes y plantas como activos principales`,
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
    },
    // ── NUBANK (id=5) ──
    mc_nu_spread: {
      title: '💰 ¿De Dónde Viene el Gross Profit de un Banco?',
      task: 'El banco tiene Gross Profit de $5,240M (45.6%). En una empresa industrial GP = Revenue − COGS de producción. En un banco, ¿qué representa ese Gross Profit?',
      concept: 'Revenue = $11,500M (intereses cobrados + comisiones) · COGS = $6,260M (costo de fondeo + mora) · Gross Profit = $5,240M · Tasa activa ~18% · Tasa pasiva ~8%',
      correctIdx: 2,
      feedbackCorrect: 'El Gross Profit bancario = ingresos por intereses − costo de fondeo − pérdidas por incobrables. El spread (diferencia entre tasa activa y pasiva) es el equivalente al margen bruto industrial.',
      options: [
        'A) La diferencia entre el valor de mercado de los créditos y su costo contable',
        'B) Los ingresos por comisiones descontados los gastos de procesamiento',
        'C) Los intereses cobrados a deudores menos el costo de fondeo y las pérdidas por mora',
        'D) El valor de los depósitos menos los créditos otorgados'
      ],
      explanations: [
        '❌ Los bancos no reconocen ganancias por valor de mercado en sus créditos hasta que se realizan.',
        '❌ Las comisiones son solo una parte del Revenue. El componente principal son los intereses cobrados.',
        '✅ Correcto. Revenue = intereses cobrados + comisiones. COGS = intereses pagados a depositantes + pérdidas por mora. El spread entre tasa activa (~18%) y pasiva (~8%) es el motor del negocio bancario.',
        '❌ Eso describe el NOF, no el Gross Profit del Estado de Resultados.'
      ]
    },
    mc_nu_depositos: {
      title: '📐 ¿Qué Pasa con el ROIC si los Depósitos Crecen 20%?',
      task: 'Los depósitos crecen de $28,300M a $33,960M (+20%), manteniendo el mismo NOPAT. ¿Cómo afecta al ROIC?',
      concept: 'NOF actual = AO $17,600M − PO $29,500M = −$11,900M · CI actual = $4,300M · ROIC actual = 28% · Si PO sube $5,660M → nuevo NOF = 17,600 − 35,160 = −$17,560M → nuevo CI se reduce',
      correctIdx: 2,
      feedbackCorrect: 'Más depósitos → PO más grande → NOF más negativo → CI más pequeño → mismo NOPAT sobre menos capital → ROIC sube. Esta es la palanca de crecimiento del modelo bancario digital.',
      options: [
        'A) El ROIC no cambia porque los depósitos son PO y no afectan el NOPAT',
        'B) El ROIC baja porque hay más pasivos operativos que administrar',
        'C) El ROIC sube: más PO → NOF más negativo → CI más pequeño → mismo NOPAT sobre menos capital',
        'D) No se puede saber sin conocer la tasa de interés de los nuevos depósitos'
      ],
      explanations: [
        '❌ Los depósitos no afectan el NOPAT aquí, pero sí afectan el CI a través del NOF. ROIC = NOPAT / CI.',
        '❌ Más PO reduce el NOF (más negativo), lo que reduce el CI. El ROIC sube, no baja.',
        '✅ Nuevo NOF = 17,600 − 35,160 = −17,560M → CI se comprime → ROIC = mismo NOPAT / CI menor = sube. Es la palanca clave del modelo: cada nuevo depositante reduce el CI y amplifica el ROIC.',
        '❌ En este análisis asumimos NOPAT constante. La pregunta evalúa el impacto del NOF sobre el CI y el ROIC.'
      ]
    },
    mc_nu_roa_vs_roic: {
      title: '🔬 ROA 2.6% vs. ROIC 28% — ¿Cómo es Posible?',
      task: 'El banco tiene ROA = 2.6% y ROIC = 28%. ¿Cuál es la explicación correcta de esta diferencia de 10x?',
      concept: 'Total Assets = $68,000M · CI = $4,300M · EBIT = $1,800M · NOPAT = $1,206M · ROA = EBIT / Total Assets = 1,800 / 68,000 = 2.6% · ROIC = NOPAT / CI = 1,206 / 4,300 = 28%',
      correctIdx: 3,
      feedbackCorrect: 'Los depósitos ($28,300M) están en Total Assets pero NO en el CI. El CI solo incluye el capital aportado por accionistas y acreedores financieros. Los depósitos inflan el denominador del ROA sin inflar el del ROIC — por eso ROA/ROIC ≈ CI/Total Assets.',
      options: [
        'A) Porque el ROA usa EBIT y el ROIC usa NOPAT — la diferencia es solo el impuesto',
        'B) Porque el banco tiene mucha deuda financiera que infla el Total Assets',
        'C) Porque el ROA es incorrecto para bancos y no debe calcularse',
        'D) Porque los depósitos ($28,300M) inflan el Total Assets pero no el CI — el denominador del ROA es 15x mayor que el del ROIC'
      ],
      explanations: [
        '❌ La diferencia de impuesto explica poco. El impacto principal está en el denominador: Total Assets vs CI.',
        '❌ La deuda financiera es solo $800M. Lo que infla el balance son los depósitos operativos ($28,300M).',
        '❌ El ROA es válido, pero mide algo diferente: eficiencia sobre todos los activos. Para medir retorno sobre capital propio + deuda financiera, el ROIC es más preciso.',
        '✅ Total Assets = $68,000M incluye $28,300M de depósitos. CI = $4,300M los excluye. Ratio = 68,000 / 4,300 ≈ 16x, similar a la diferencia ROIC/ROA = 28% / 2.6% ≈ 11x.'
      ]
    },
    // ── VBM / Costco (id:6) ──────────────────────────────────
    mc_vbm_memModel: {
      title: '🏷️ El Modelo de Membresía como Ventaja Competitiva',
      task: `Las membresías de Costco aportaron $${c.membershipFees||2501}M en FY2024. ¿Por qué este ingreso es estratégicamente diferente al revenue por ventas?`,
      concept: `Revenue total: $254,453M · Membresías: $2,501M (≈1% del revenue) · NOPAT total: $7,010M · NOPAT membresías: ~$1,890M (≈27%) · Margen neto de ventas de mercancía: ≈0.1%`,
      correctIdx: 2,
      feedbackCorrect: 'Las membresías son una línea de ingreso casi pura NOPAT: costo marginal ≈ 0, cobradas por adelantado (mejoran NOF), y con tasa de renovación >90%. Permiten vender mercancía casi al costo para atraer volumen. Es el "flywheel" del modelo.',
      options: [
        'A) Porque las membresías crecen más rápido que las ventas de mercancía',
        'B) Porque son ingresos recurrentes que reducen la volatilidad estacional del negocio',
        'C) Porque tienen costo marginal cercano a cero, se cobran adelantadas (mejoran NOF) y cubren gran parte del NOPAT, permitiendo vender mercancía casi al costo',
        'D) Porque diversifican el modelo de negocio hacia servicios financieros'
      ],
      explanations: [
        '❌ El crecimiento relativo no es lo clave; lo importante es el margen y el impacto en NOF.',
        '❌ La recurrencia ayuda, pero no explica por qué son estratégicamente distintas al revenue de mercancía.',
        '✅ Exacto. Con margen ≈100% sobre membresías y cobro adelantado, Costco puede vender a márgenes mínimos en mercancía y aun así generar ROIC >25%. Es la lógica del "loss leader" amplificada.',
        '❌ Las membresías son de acceso al warehouse, no un servicio financiero.'
      ]
    },
    mc_vbm_decision: {
      title: '🎯 ¿Vale la Pena Pagar el Precio de Mercado por Costco?',
      task: `El TEV de mercado es $412,000M. Usando el análisis VBM completado (ROIC ${c.roic||25}%, g implícita ${c.impliedG||7.8}%, EVA acum. $${fmt(c.evaAcum||12157)}M), ¿cuál es la evaluación más rigurosa?`,
      concept: `V₀ (sin crec.) = $77,778M · Vg(3%) = $102,667M · TEV mercado = $412,000M · g implícita = ${c.impliedG||7.8}% · ROIC FY22-24: 23.9%→24.2%→25.0% · WACC = ${c.wacc||9}%`,
      correctIdx: 1,
      feedbackCorrect: `El mercado descuenta una g implícita del ${c.impliedG||7.8}% perpetua, que es ambiciosa pero no irracional para Costco dado su expansión internacional (29 nuevas tiendas en FY2024) y el modelo de membresías. El ROIC marginal (35.5%) > WACC (9%) justifica el crecimiento. La inversión es cara en términos absolutos pero tiene fundamentos VBM sólidos.`,
      options: [
        'A) El TEV de $412,000M es imposible de justificar: ninguna empresa puede crecer al 7.8% para siempre',
        'B) El precio es exigente pero razonable: el ROIC marginal (35.5%) >> WACC (9%), el modelo de membresías es un "moat" duradero, y la expansión internacional justifica una g implícita elevada por varios años',
        'C) Conviene comprar porque el modelo de membresías garantiza flujos predecibles y el dividendo especial demuestra solidez financiera',
        'D) El precio es irracional porque la g implícita (7.8%) supera el WACC (9%), lo que matemáticamente hace la valuación indefinida'
      ],
      explanations: [
        '❌ La g implícita es para el EVA (no el revenue), y solo necesita sostenerse mientras el ROIC > WACC — no en perpetuidad estricta.',
        '✅ Correcto. El análisis VBM muestra que el negocio crea valor de forma consistente y el crecimiento marginal destruye valor positivo (ROIC marg. 35.5%). La g implícita (7.8%) es alta pero no irracional en el horizonte de expansión internacional. El inversor paga un "premium" por la calidad del modelo.',
        '❌ Un análisis correcto no recomienda comprar sin comparar precio vs. valor. Los flujos predecibles son una ventaja pero no justifican automáticamente el precio.',
        '❌ La g implícita (7.8%) < WACC (9%), por lo que el denominador (WACC − g) = 1.2% > 0. No hay problema matemático.'
      ]
    },
    mc_nu_expansion: {
      title: '🔄 Banco Digital vs. Costco — Dos NOF Negativos Distintos',
      task: 'Banco Digital y Costco tienen NOF muy negativos, pero por razones distintas. ¿Cuál es la diferencia clave?',
      concept: 'Banco Digital: NOF = −$11,900M · PO principal = Depósitos $28,300M · AO = Créditos $17,600M · Costco: NOF = −$7,783M · PO principal = CxP proveedores $19,421M + Cuotas $2,501M · AO = Inventario $18,647M',
      correctIdx: 3,
      feedbackCorrect: 'En Costco el NOF negativo es ventaja comercial: paga tarde a proveedores y cobra cuotas adelantadas. En el banco es estructura del negocio: los depósitos son el insumo necesario para operar. Mismo resultado contable, lógica opuesta.',
      options: [
        'A) No hay diferencia: en ambos casos proveedores y depositantes financian el negocio sin costo',
        'B) Costco tiene más ventaja porque su poder de negociación con proveedores es más sostenible',
        'C) El banco tiene más ventaja porque los depósitos son más predecibles que las cuentas por pagar',
        'D) En Costco es ventaja comercial (pagar tarde, cobrar antes). En el banco es la estructura del negocio: los depósitos son el insumo necesario para prestar, no una ventaja negociada'
      ],
      explanations: [
        '❌ Los depósitos del banco no son gratis — tienen un costo de interés. En Costco las CxP sí son sin costo explícito.',
        '❌ Lo relevante no es cuál ventaja es más sostenible sino cuál es el origen del NOF negativo en cada modelo.',
        '❌ La estabilidad es operativa, no explica la diferencia de origen del NOF negativo.',
        '✅ Exacto. Costco negocia activamente 31 días de DPO con sus proveedores y cobra cuotas antes → ventaja comercial. El banco recibe depósitos porque eso es su negocio (intermediación) → estructura del modelo. Mismo número, lógica completamente diferente.'
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
    case 'lati_classify':       return stepLatiClassify(c, sn, badge);
    case 'nu_classify':         return stepNuClassify(c, sn, badge);
    case 'vbm_memNopat':        return stepVbmMemNopat(c, sn, badge);
    case 'vbm_roic22':          return stepVbmRoic22(c, sn, badge);
    case 'vbm_roic23':          return stepVbmRoic23(c, sn, badge);
    case 'vbm_evaAcum':         return stepVbmEvaAcum(c, sn, badge);
    case 'vbm_roicMarginal':    return stepVbmRoicMarginal(c, sn, badge);
    case 'vbm_evaMarginal':     return stepVbmEvaMarginal(c, sn, badge);
    case 'vbm_val0':            return stepVbmVal0(c, sn, badge);
    case 'vbm_valG':            return stepVbmValG(c, sn, badge);
    case 'vbm_impliedG':        return stepVbmImpliedG(c, sn, badge);
    case 'vbm_specialDiv':      return stepVbmSpecialDiv(c, sn, badge);
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
  examStopStepTimer();
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
    c.id === 4
      ? `Calculá el Gross Profit de ${c.name}. En farmacéutica, el costo de producción de los medicamentos (COGS) es bajísimo respecto al revenue — la mayor parte del costo está en I+D y patentes, que van en SG&A.`
      : `Calculá el Gross Profit de ${c.name}. Es lo que queda del revenue después de los costos directos de producción (COGS).`,
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
    diagnose: diagnoseGrossProfit, diagnose: val => diagnoseGrossProfit(val, c),
    nbKey: 'grossProfit', nbVal: c.grossProfit,
    feedbackCorrect: c.id === 4
      ? `✅ Gross Profit = $${fmt(c.grossProfit)}M. Margen Bruto = ${c.grossMargin}% — altísimo para cualquier industria. En pharma el COGS es bajo porque fabricar el medicamento es barato; el costo real está en los años de I+D para llegar a ese medicamento.`
      : `✅ Gross Profit = $${fmt(c.grossProfit)}M. Margen Bruto = ${c.grossMargin}%. De cada $100 de ventas, $${c.grossMargin} quedan después de los costos directos.`,
    feedbackWrong:   `Respuesta: $${fmt(c.grossProfit)}M → Revenue − COGS = ${fmt(c.revenue)} − ${fmt(c.cogs)}.`,
    tryAgain: 'GP = Revenue − COGS.'
  });
}

function stepMargenBruto(c, sn, badge) {
  const gp = state.notebook.grossProfit !== undefined ? state.notebook.grossProfit : c.grossProfit;
  return baseStep(sn, badge,
    'Margen Bruto %',
    `¿Qué porcentaje del revenue es Gross Profit? Expresá en % con 1 decimal.`,
    `Margen Bruto = Resultado Bruto / Ventas\n= $${fmt(gp)}M / $${fmt(c.revenue)}M × 100 = ${c.grossMargin}%`,
    `Dividí el Gross Profit entre Revenue y multiplicá por 100.`,
    'Margen Bruto (%)', '%', 'verifyMargenBruto',
    infoBoxes([['Gross Profit', `$${fmt(gp)}M`], ['Revenue', `$${fmt(c.revenue)}M`]])
  );
}
function verifyMargenBruto() {
  const c = state.currentCase;
  genericVerify({
    correct: c.grossMargin, tolerance: 0.5, diagnose: val => diagnoseMargen(val, c.grossMargin, 'Margen Bruto'),
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
    `Margen Operativo = EBIT / Ventas\n= $${fmt(ebit)}M / $${fmt(c.revenue)}M × 100 = ${c.ebitMargin}%`,
    `Dividí EBIT entre Revenue y multiplicá por 100.`,
    'Margen EBIT (%)', '%', 'verifyMargenEbit',
    infoBoxes([['EBIT', `$${fmt(ebit)}M`], ['Revenue', `$${fmt(c.revenue)}M`]])
  );
}
function verifyMargenEbit() {
  const c = state.currentCase;
  genericVerify({
    correct: c.ebitMargin, tolerance: 0.5, diagnose: val => diagnoseMargen(val, c.ebitMargin, 'Margen EBIT'),
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
    `NOPAT = EBIT − Impuesto Operativo\n= EBIT × (1 − t) = $${fmt(ebit)}M × (1 − ${c.tax}%) = $${fmt(c.nopat)}M`,
    `Impuesto Operativo = EBIT × t = $${fmt(ebit)}M × ${c.tax}% = $${Math.round(ebit*c.tax/100)}M → NOPAT = ${fmt(ebit)} − ${Math.round(ebit*c.tax/100)}.`,
    'NOPAT ($M)', '$M', 'verifyNopat',
    infoBoxes([['EBIT', `$${fmt(ebit)}M`], ['Tasa impositiva (t)', `${c.tax}%`], ['Imp. Operativo', `$${Math.round(ebit*c.tax/100)}M`]]),
    `<strong>NOPAT</strong> (Net Operating Profit After Tax) es la base de todos los indicadores de valor: ROIC, EVA y FFL. Elimina la distorsión financiera del EBIT.`
  );
}
function verifyNopat() {
  const c = state.currentCase;
  genericVerify({
    correct: c.nopat, tolerance: 5, diagnose: val => diagnoseNopat(val, c),
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
    `Margen NOPAT = NOPAT / Ventas\n= $${fmt(nopat)}M / $${fmt(c.revenue)}M × 100 = ${c.nopatMargin}%`,
    `Dividí NOPAT entre Revenue y multiplicá por 100.`,
    'Margen NOPAT (%)', '%', 'verifyMargenNopat',
    infoBoxes([['NOPAT', `$${fmt(nopat)}M`], ['Revenue', `$${fmt(c.revenue)}M`]]),
    `<strong>Identidad DuPont:</strong> ROIC = Margen NOPAT × Rotación del Activo Neto. Vas a usar este margen en el próximo bloque.`
  );
}
function verifyMargenNopat() {
  const c = state.currentCase;
  genericVerify({
    correct: c.nopatMargin, tolerance: 0.3, diagnose: val => diagnoseMargen(val, c.nopatMargin, 'Margen NOPAT'),
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
    ? ` Sumá los AO corrientes (CxC + Inventario) y los PO corrientes (CxP + Gastos devengados + Cuotas membresía diferidas). ¡Las cuotas de membresía son la clave!`
    : c.id === 3
    ? ` Ya clasificaste las cuentas. Identificá los AO y PO corrientes en el Data Room y calculá la diferencia.`
    : c.id === 1
    ? ` Los AO corrientes y PO corrientes están en el Data Room. Calculá los totales y restalos.`
    : '';
  const conceptNOF = c.id === 2
    ? `<strong>NOF negativo</strong> en Costco: los proveedores y los miembros (cuotas diferidas cobradas por adelantado) financian el inventario. Este "subsidio" libera capital enorme y explica por qué Costco tiene ROIC tan alto con márgenes tan bajos.`
    : `<strong>NOF positivo</strong> → la empresa financia su ciclo con capital propio/deuda. <strong>NOF negativo</strong> → los proveedores financian el negocio (ventaja competitiva de capital de trabajo).`;
  return baseStep(sn, badge,
    'NOF — Necesidades Operativas de Fondos',
    `Las NOF son el capital "atrapado" en el ciclo operativo.${taskExtra} El resultado puede ser negativo.`,
    `NOF = Total Activos Operativos corrientes − Total Pasivos Operativos corrientes`,
    `Primero calculá ΣAO (CxC + Inventario + otros AO) y ΣPO (CxP + Devengados + otros PO), luego restá.`,
    'NOF ($M, puede ser negativo)', '$M', 'verifyNof',
    '',
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
    diagnose: diagnoseNof, diagnose: val => diagnoseNof(val, c),
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
    task    = `Calculá el Capital Invertido sumando NOF (ya calculado), PP&E neto (AFN), intangibles (AIN) y otros activos operativos netos. Los valores están en el Data Room.`;
    formula = `CI = NOF + AFN (PP&E neto) + AIN (intangibles) + Otros activos op. netos`;
    hint    = `Usá el NOF que calculaste antes y buscá AFN, AIN y Otros en la sección de Activos No Corrientes del Data Room.`;
    boxes   = infoBoxes([['NOF (calculado)', `$${fmt(nof)}M`]]);
    concept = `Costco tiene CI mucho menor que Total Assets porque: 1) la Caja ($${fmt(c.actFin)}M) se excluye (activo financiero) y 2) el NOF <strong>negativo</strong> reduce el denominador. Esto amplifica el ROIC vs ROA.`;
  } else {
    task    = `El CI suma todo el capital que la empresa necesita para operar. Buscá NOF (calculado), PP&E neto (AFN) e intangibles (AIN) en el Data Room.`;
    formula = `CI = NOF + AFN (PP&E neto) + AIN (intangibles)`;
    hint    = `Usá el NOF ya calculado y buscá AFN e AIN en la sección de Activos No Corrientes del Data Room.`;
    boxes   = infoBoxes([['NOF (calculado)', `$${fmt(nof)}M`]]);
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
    diagnose: diagnoseCi, diagnose: val => diagnoseCi(val, c),
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
    c.id === 4
      ? `¿Cuántos pesos de revenue genera cada peso de Capital Invertido? En PharmaCore, el CI es enorme por las patentes y plantas. Esto va a explicar por qué el ROIC es mucho más bajo que el margen NOPAT. Expresá como múltiplo con 1 decimal.`
      : `¿Cuántos pesos de revenue genera cada peso de Capital Invertido? Es la "velocidad" del negocio. Expresá como múltiplo con 1 decimal.`,
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
    diagnose: diagnoseRotacion, diagnose: val => diagnoseRotacion(val, c),
    nbKey: 'rotacion', nbVal: c.rotacion,
    feedbackCorrect: c.id === 4
      ? `✅ Rotación = ${c.rotacion}x. Por cada $1 de CI, PharmaCore genera solo $${c.rotacion} de revenue. Es una rotación muy baja — el capital "trabaja lento". Combinado con el margen NOPAT, esto determina el ROIC final.`
      : `✅ Rotación = ${c.rotacion}x. Por cada $1 de CI, ${c.name} genera $${c.rotacion} de revenue.`,
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
      : c.id === 4
      ? `Momento clave: PharmaCore tiene un Margen NOPAT de ${margen}% pero una Rotación de solo ${rot}x. ¿Qué ROIC resulta? Este es el número que determina si la empresa crea valor para sus accionistas. Expresá en % con 1 decimal.`
      : `El ROIC mide la rentabilidad real del negocio. Calculalo usando la identidad DuPont: Margen NOPAT × Rotación. Expresá en % con 1 decimal.`,
    `ROIC = NOPAT / Activo Neto = Margen × Rotación Activo Neto\n= ${margen}% × ${rot}x = ${c.roic}%`,
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
    diagnose: diagnoseRoic, diagnose: val => diagnoseRoic(val, c),
    nbKey: 'roic', nbVal: c.roic,
    feedbackCorrect: c.id === 4
      ? `✅ ROIC = ${c.roic}% — mucho menor que el Margen NOPAT de ${c.nopatMargin}%. ¿Por qué? Por la baja rotación (${c.rotacion}x) causada por el CI enorme en patentes ($${fmt(c.ain)}M). Aun así, ROIC ${c.roic}% > WACC ${c.wacc}% → crea valor.`
      : `✅ ROIC = ${c.roic}% vs WACC = ${c.wacc}%. ${c.roic > c.wacc ? '🟢 ROIC > WACC → la empresa CREA valor económico.' : '🔴 ROIC < WACC → destruye valor.'}`,
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
    : `EVA = (ROIC − WACC) × Capital Invertido = Spread × CI\n= ${spread}% × $${fmt(ci)}M / 100 = $${fmt(c.eva)}M`;
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
    diagnose: diagnoseEva, diagnose: val => diagnoseEva(val, c),
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
  // Fórmula del formulario: (CxC − Ingresos Diferidos) × 365 / Ventas
  // Para casos sin ingresos diferidos en CxC, el término es 0
  const unearned = c.membershipFees || 0; // Costco tiene cuotas diferidas
  const arNet    = c.ar - unearned;
  const formulaStr = unearned > 0
    ? `DSO = (CxC − Ing. Diferidos) × 365 / Revenue\n= ($${fmt(c.ar)}M − $${fmt(unearned)}M) × 365 / $${fmt(c.revenue)}M = ${c.dso} días`
    : `DSO = CxC × 365 / Revenue\n= $${fmt(c.ar)}M × 365 / $${fmt(c.revenue)}M = ${c.dso} días`;
  const hintStr = unearned > 0
    ? `(CxC − Ingresos Diferidos) × 365 / Revenue = (${fmt(c.ar)} − ${fmt(unearned)}) × 365 / ${fmt(c.revenue)}.`
    : `CxC × 365 / Revenue = ${fmt(c.ar)} × 365 / ${fmt(c.revenue)}.`;
  const boxes = unearned > 0
    ? infoBoxes([['CxC', `$${fmt(c.ar)}M`], ['Ing. Diferidos', `$${fmt(unearned)}M`], ['Revenue', `$${fmt(c.revenue)}M`]])
    : infoBoxes([['CxC (AR)', `$${fmt(c.ar)}M`], ['Revenue', `$${fmt(c.revenue)}M`]]);
  return baseStep(sn, badge,
    'DSO — Días de Cobranzas',
    `¿Cuántos días tarda ${c.name} en cobrar a sus clientes? Cuanto menor, mejor: el efectivo entra antes. Expresá en días con 1 decimal.`,
    formulaStr, hintStr, 'DSO (días)', 'días', 'verifyDso', boxes
  );
}
function verifyDso() {
  const c = state.currentCase;
  const unearned = c.membershipFees || 0;
  genericVerify({
    correct: c.dso, tolerance: 0.5, diagnose: val => diagnoseDso(val, c),
    nbKey: 'dso', nbVal: c.dso,
    feedbackCorrect: `✅ DSO = ${c.dso} días. ${c.name} tarda ${c.dso} días en cobrar. Cada día de reducción libera $${Math.round(c.revenue/365)}M de caja.`,
    feedbackWrong:   unearned > 0
      ? `Respuesta: ${c.dso} días → (CxC − Ing.Dif.) × 365 / Revenue = (${c.ar} − ${unearned}) × 365 / ${c.revenue}.`
      : `Respuesta: ${c.dso} días → CxC × 365 / Revenue = ${c.ar} × 365 / ${c.revenue}.`,
    tryAgain: unearned > 0 ? 'DSO = (CxC − Ingresos Diferidos) × 365 / Revenue.' : 'DSO = CxC × 365 / Revenue.'
  });
}

function stepDio(c, sn, badge) {
  return baseStep(sn, badge,
    'DIO — Days Inventory Outstanding',
    `¿Cuántos días tarda ${c.name} en rotar su inventario? Cuanto menor, menos capital inmovilizado. Inventario = $${fmt(c.inventory)}M. Expresá en días con 1 decimal.`,
    `DIO = Inventario × 365 / Costo de Ventas\n= $${fmt(c.inventory)}M × 365 / $${fmt(c.cogs)}M = ${c.dio} días`,
    `Multiplicá Inventario por 365 y dividí por COGS: ${c.inventory} × 365 / ${c.cogs}.`,
    'DIO (días)', 'días', 'verifyDio',
    infoBoxes([['Inventario', `$${fmt(c.inventory)}M`], ['COGS', `$${fmt(c.cogs)}M`]])
  );
}
function verifyDio() {
  const c = state.currentCase;
  genericVerify({
    correct: c.dio, tolerance: 0.5, diagnose: val => diagnoseDio(val, c),
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
    `DPO = Cuentas por Pagar × 365 / Costo de Ventas\n= $${fmt(c.ap)}M × 365 / $${fmt(c.cogs)}M = ${c.dpo} días`,
    `Multiplicá CxP por 365 y dividí por COGS: ${c.ap} × 365 / ${c.cogs}.`,
    'DPO (días)', 'días', 'verifyDpo',
    infoBoxes([['CxP (AP)', `$${fmt(c.ap)}M`], ['COGS', `$${fmt(c.cogs)}M`]])
  );
}
function verifyDpo() {
  const c = state.currentCase;
  genericVerify({
    correct: c.dpo, tolerance: 0.5, diagnose: val => diagnoseDpo(val, c),
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
    `Ciclo de Conversión de Caja = Días de cobranzas + Días de inventario − Días de pago\n= ${dso} + ${dio} − ${dpo} = ${c.ccc} días`,
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
    diagnose: diagnoseCcc, diagnose: val => diagnoseCcc(val, c),
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
    `FFL = EBIT − Impuesto Operativo − ΔActivo Operativo Neto\n= NOPAT − ΔCI = $${fmt(nopat)}M − $${fmt(c.invNeta)}M = $${fmt(c.ffl)}M`,
    `ΔActivo Operativo Neto = ΔCI = CI actual − CI anterior = ${fmt(c.ci)} − ${fmt(c.prevCI)} = $${fmt(c.invNeta)}M → FFL = ${fmt(nopat)} − ${fmt(c.invNeta)}.`,
    'FFL ($M)', '$M', 'verifyFfl',
    infoBoxes([['NOPAT', `$${fmt(nopat)}M`], ['ΔCI (ΔAct. Op. Neto)', `$${fmt(c.invNeta)}M`], ['CI ant.', `$${fmt(c.prevCI)}M`]]),
    `<strong>FFL = EBIT − Impuesto Operativo − ΔActivo Operativo Neto = NOPAT − ΔCI.</strong> Si FFL > 0: genera más de lo que invierte → puede pagar deuda o distribuir dividendos. Si FFL < 0: etapa de crecimiento, necesita financiamiento externo.`
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
    diagnose: diagnoseFfl, diagnose: val => diagnoseFfl(val, c),
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
    `ROA = EBIT / Activos × 100\n= $${fmt(ebit)}M / $${fmt(c.totalAssets)}M × 100 = ${c.roa}%`,
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
    `ROE = Resultado Neto / Patrimonio Neto × 100\n= $${fmt(c.netIncome)}M / $${fmt(c.pn)}M × 100 = ${c.roe}%`,
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
  saveProgress();
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

  // ── Costco Integrador: custom results table ──────────────────────────
  if (c.id === 2) {
    const vbmRows = [
      ['Gross Profit FY2024',   `$${fmt(c.grossProfit)}M`,    `Margen Bruto = ${c.grossMargin}%`],
      ['EBIT FY2024',           `$${fmt(c.ebit)}M`,           `Margen EBIT = ${c.ebitMargin}%`],
      ['NOPAT FY2024',          `$${fmt(c.nopat)}M`,          `EBIT × (1 − ${c.tax}%) · Margen ${c.nopatMargin}%`],
      ['NOPAT membresías',      `$${fmt(c.memNopat)}M`,       `${c.memNopotPct}% del NOPAT total — margen ≈100%`],
      ['NOF FY2024',            `$${fmt(c.nof)}M`,            `NOF negativo: proveedores + cuotas adelantadas financian el ciclo`],
      ['CI FY2024',             `$${fmt(c.ci)}M`,             `NOF + AFN + AIN`],
      ['ROIC FY2022',           `${c.roic22}%`,               `NOPAT $${fmt(c.nopat22)}M / CI $${fmt(c.ci22)}M`],
      ['ROIC FY2023',           `${c.roic23}%`,               `NOPAT $${fmt(c.nopat23)}M / CI $${fmt(c.ci23)}M`],
      ['ROIC FY2024',           `${c.roic}%`,                 `Tendencia: ${c.roic22}% → ${c.roic23}% → ${c.roic}% ✅`],
      ['WACC',                  `${c.wacc}%`,                 `Costo de capital (dado)`],
      ['Spread',                `+${c.spread}%`,              `ROIC − WACC = ${c.roic}% − ${c.wacc}%`],
      ['EVA FY2024',            `+$${fmt(c.eva)}M`,           `Spread × CI / 100`],
      ['EVA Acumulado 3 años',  `$${fmt(c.evaAcum)}M`,        `FY2022+FY2023+FY2024: $${fmt(c.eva22)}M+$${fmt(c.eva23)}M+$${fmt(c.eva)}M`],
      ['ROIC Marginal',         `${c.roicMarginal}%`,         `ΔNOPAT/ΔCI = $${fmt(c.deltaNopat)}M/$${fmt(c.invNeta)}M — mayor que WACC ✅`],
      ['EVA Marginal',          `$${fmt(c.evaMarginal)}M`,    `(ROIC_marg − WACC) × ΔCI = (${c.roicMarginal}%−${c.wacc}%) × $${fmt(c.invNeta)}M`],
      ['FFL',                   `$${fmt(c.ffl)}M`,            `NOPAT − ΔCI = $${fmt(c.nopat)}M − $${fmt(c.invNeta)}M`],
      ['V₀ (sin crecimiento)',  `$${fmt(c.valuation0)}M`,     `CI + EVA/WACC`],
      ['Vg (g = 3%)',           `$${fmt(c.valuationG)}M`,     `CI + EVA/(WACC−3%)`],
      ['TEV mercado',           `$${fmt(c.marketTEV)}M`,      `Market cap ajustada (referencia)`],
      ['g implícita mercado',   `${c.impliedG}%`,             `WACC − EVA/(TEV−CI) — el mercado descuenta crecimiento alto`],
      ['Dividendo esp./acción', `$${c.specialDivPS}`,         `$${fmt(c.specialDivTotal)}M / ${fmt(c.shares)}M acciones`],
    ];
    document.getElementById('resultsBody').innerHTML = vbmRows.map(([n,v,d]) =>
      `<tr><td class="metric-name">${n}</td><td class="metric-val">${v}</td><td class="metric-clase">${d}</td></tr>`
    ).join('');
    // (fall through to score/rank code)
  } else {

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
  } // end else (non-VBM cases)

  // Score y rank
  const maxScore = state.steps.length * 100 * state.difficulty.multiplier;
  saveProgress(state.currentCase.id, state.diffKey, state.score, state.steps.length);
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

  // Exam mode: detailed step breakdown
  const examBreakdown = document.getElementById('examBreakdown');
  if (examBreakdown) {
    if (state.difficulty.examMode) {
      examBreakdown.style.display = 'block';
      const rows = state.steps.map((sid, i) => {
        const pts   = state.stepScores[i] || 0;
        const atts  = state.stepAttempts[i] || 0;
        const secs  = examStepTimes[i] || 0;
        const m     = Math.floor(secs/60), s = secs%60;
        const icon  = pts > 0 ? '✅' : (atts > 0 ? '❌' : '⏰');
        const label = sid.startsWith('mc_') ? '💡 ' + (sid.replace('mc_','').replace(/_/g,' ')) : sid;
        return `<tr>
          <td style="color:var(--muted);font-size:.75rem">${i+1}</td>
          <td style="font-size:.78rem">${label}</td>
          <td style="text-align:center">${icon}</td>
          <td style="font-family:'JetBrains Mono',monospace;color:var(--yellow);text-align:center">${pts}</td>
          <td style="font-family:'JetBrains Mono',monospace;color:var(--muted);text-align:center">${m}:${s.toString().padStart(2,'0')}</td>
        </tr>`;
      }).join('');
      examBreakdown.innerHTML = `
        <h3 style="font-size:.85rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:14px">📋 Detalle por paso — Modo Examen</h3>
        <table class="results-table" style="margin-bottom:0">
          <thead><tr>
            <th>#</th><th>Paso</th><th style="text-align:center">Resultado</th>
            <th style="text-align:center">Pts</th><th style="text-align:center">Tiempo</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>`;
    } else {
      examBreakdown.style.display = 'none';
    }
  }

  showScreen('resultsScreen');
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
renderGlossary();
renderHome();
