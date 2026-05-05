export const CN_NAMES = {
  1:'氢',2:'氦',3:'锂',4:'铍',5:'硼',6:'碳',7:'氮',8:'氧',9:'氟',10:'氖',
  11:'钠',12:'镁',13:'铝',14:'硅',15:'磷',16:'硫',17:'氯',18:'氩',19:'钾',20:'钙',
  21:'钪',22:'钛',23:'钒',24:'铬',25:'锰',26:'铁',27:'钴',28:'镍',29:'铜',30:'锌',
  31:'镓',32:'锗',33:'砷',34:'硒',35:'溴',36:'氪',37:'铷',38:'锶',39:'钇',40:'锆',
  41:'铌',42:'钼',43:'锝',44:'钌',45:'铑',46:'钯',47:'银',48:'镉',49:'铟',50:'锡',
  51:'锑',52:'碲',53:'碘',54:'氙',55:'铯',56:'钡',57:'镧',58:'铈',59:'镨',60:'钕',
  61:'钷',62:'钐',63:'铕',64:'钆',65:'铽',66:'镝',67:'钬',68:'铒',69:'铥',70:'镱',
  71:'镥',72:'铪',73:'钽',74:'钨',75:'铼',76:'锇',77:'铱',78:'铂',79:'金',80:'汞',
  81:'铊',82:'铅',83:'铋',84:'钋',85:'砹',86:'氡',87:'钫',88:'镭',89:'锕',90:'钍',
  91:'镤',92:'铀',93:'镎',94:'钚',95:'镅',96:'锔',97:'锫',98:'锎',99:'锿',100:'镄',
  101:'钔',102:'锘',103:'铹',104:'𬬻',105:'𬭊',106:'𬭳',107:'𬭛',108:'𬭶',109:'鿏',110:'𫟼',
  111:'𬬭',112:'鎶',113:'鉨',114:'𫓧',115:'镆',116:'鉝',117:'鿬',118:'鿫'
};



export const CAT_LABEL_ZH = {
  nonmetal:'非金属', noble:'稀有气体', alkali:'碱金属',
  alkaline:'碱土金属', transition:'过渡金属',
  posttrans:'后过渡金属', metalloid:'类金属',
  lanthanide:'镧系元素', actinide:'锕系元素'
};



export const UI_ZH = {
  title:'元素周期表', subtitle:'118种元素 · 点击查看详情 · 按类别筛选',
  search:'搜索名称、符号或原子序数…',
  all:'全部', phase:'相态', period:'周期', group:'族',
  mass:'相对原子质量', config:'电子构型', placeholder:'← 点击任意元素查看属性'
};


export const UI_EN = {
  title:'Periodic Table', subtitle:'118 elements · Click any element for details · Filter by category',
  search:'Search name, symbol, or number…',
  all:'All', phase:'Phase (STP)', period:'Period', group:'Group',
  mass:'Atomic mass', config:'Electron configuration', placeholder:'← Click any element to view its properties'
};



export const CAT_COLORS = {
  nonmetal:'#3b82f6', noble:'#a855f7', alkali:'#ef4444',
  alkaline:'#f97316', transition:'#0891b2', posttrans:'#6b7280',
  metalloid:'#10b981', lanthanide:'#ec4899', actinide:'#d97706'
};


export const CAT_LABEL = {
  nonmetal:'Nonmetal', noble:'Noble gas', alkali:'Alkali metal',
  alkaline:'Alkaline earth', transition:'Transition metal',
  posttrans:'Post-transition', metalloid:'Metalloid',
  lanthanide:'Lanthanide', actinide:'Actinide'
};



export const ELEMENTS = [
  {n:1,sym:'H',name:'Hydrogen',cat:'nonmetal',mass:'1.008',row:1,col:1,phase:'Gas',group:'1',period:'1',config:'1s¹',desc:'The lightest and most abundant element in the universe. Forms water and is key to all organic chemistry.'},
  {n:2,sym:'He',name:'Helium',cat:'noble',mass:'4.003',row:1,col:18,phase:'Gas',group:'18',period:'1',config:'1s²',desc:'Second lightest element; chemically inert, used in balloons and as coolant for superconducting magnets.'},
  {n:3,sym:'Li',name:'Lithium',cat:'alkali',mass:'6.941',row:2,col:1,phase:'Solid',group:'1',period:'2',config:'[He] 2s¹',desc:'Softest metallic element; key component of lithium-ion batteries powering modern electronics.'},
  {n:4,sym:'Be',name:'Beryllium',cat:'alkaline',mass:'9.012',row:2,col:2,phase:'Solid',group:'2',period:'2',config:'[He] 2s²',desc:'Lightweight, stiff metal used in aerospace structures and X-ray transparent windows.'},
  {n:5,sym:'B',name:'Boron',cat:'metalloid',mass:'10.81',row:2,col:13,phase:'Solid',group:'13',period:'2',config:'[He] 2s² 2p¹',desc:'Metalloid used in glass, ceramics, and as a neutron absorber in nuclear reactors.'},
  {n:6,sym:'C',name:'Carbon',cat:'nonmetal',mass:'12.01',row:2,col:14,phase:'Solid',group:'14',period:'2',config:'[He] 2s² 2p²',desc:'Basis of all known life; exists as graphite, diamond, graphene, and fullerenes with wildly different properties.'},
  {n:7,sym:'N',name:'Nitrogen',cat:'nonmetal',mass:'14.01',row:2,col:15,phase:'Gas',group:'15',period:'2',config:'[He] 2s² 2p³',desc:'Comprises 78% of Earth\'s atmosphere; essential component of amino acids and DNA.'},
  {n:8,sym:'O',name:'Oxygen',cat:'nonmetal',mass:'16.00',row:2,col:16,phase:'Gas',group:'16',period:'2',config:'[He] 2s² 2p⁴',desc:'Essential for respiration and combustion; makes up 21% of Earth\'s atmosphere.'},
  {n:9,sym:'F',name:'Fluorine',cat:'nonmetal',mass:'19.00',row:2,col:17,phase:'Gas',group:'17',period:'2',config:'[He] 2s² 2p⁵',desc:'Most electronegative and reactive of all elements; used in Teflon and dental fluoride treatments.'},
  {n:10,sym:'Ne',name:'Neon',cat:'noble',mass:'20.18',row:2,col:18,phase:'Gas',group:'18',period:'2',config:'[He] 2s² 2p⁶',desc:'Chemically inert noble gas; gives off an orange-red glow in discharge tubes — the classic neon sign.'},
  {n:11,sym:'Na',name:'Sodium',cat:'alkali',mass:'22.99',row:3,col:1,phase:'Solid',group:'1',period:'3',config:'[Ne] 3s¹',desc:'Highly reactive soft metal; essential electrolyte in living organisms, reacts violently with water.'},
  {n:12,sym:'Mg',name:'Magnesium',cat:'alkaline',mass:'24.31',row:3,col:2,phase:'Solid',group:'2',period:'3',config:'[Ne] 3s²',desc:'Lightweight structural metal essential to chlorophyll; used in aerospace alloys and fireworks.'},
  {n:13,sym:'Al',name:'Aluminum',cat:'posttrans',mass:'26.98',row:3,col:13,phase:'Solid',group:'13',period:'3',config:'[Ne] 3s² 3p¹',desc:'Most abundant metal in Earth\'s crust; lightweight, corrosion-resistant, and endlessly recyclable.'},
  {n:14,sym:'Si',name:'Silicon',cat:'metalloid',mass:'28.09',row:3,col:14,phase:'Solid',group:'14',period:'3',config:'[Ne] 3s² 3p²',desc:'Backbone of the semiconductor industry; second most abundant element in Earth\'s crust by mass.'},
  {n:15,sym:'P',name:'Phosphorus',cat:'nonmetal',mass:'30.97',row:3,col:15,phase:'Solid',group:'15',period:'3',config:'[Ne] 3s² 3p³',desc:'Essential for DNA, RNA, and ATP; critical nutrient in fertilizers that sustains global agriculture.'},
  {n:16,sym:'S',name:'Sulfur',cat:'nonmetal',mass:'32.07',row:3,col:16,phase:'Solid',group:'16',period:'3',config:'[Ne] 3s² 3p⁴',desc:'Bright yellow nonmetal; essential for proteins, and the basis of sulfuric acid production.'},
  {n:17,sym:'Cl',name:'Chlorine',cat:'nonmetal',mass:'35.45',row:3,col:17,phase:'Gas',group:'17',period:'3',config:'[Ne] 3s² 3p⁵',desc:'Used in water purification and as a disinfectant; key ingredient in PVC and many pharmaceuticals.'},
  {n:18,sym:'Ar',name:'Argon',cat:'noble',mass:'39.95',row:3,col:18,phase:'Gas',group:'18',period:'3',config:'[Ne] 3s² 3p⁶',desc:'Most abundant noble gas on Earth; provides inert atmosphere for welding and incandescent lighting.'},
  {n:19,sym:'K',name:'Potassium',cat:'alkali',mass:'39.10',row:4,col:1,phase:'Solid',group:'1',period:'4',config:'[Ar] 4s¹',desc:'Essential for nerve signal transmission and muscle contraction; reacts vigorously with water.'},
  {n:20,sym:'Ca',name:'Calcium',cat:'alkaline',mass:'40.08',row:4,col:2,phase:'Solid',group:'2',period:'4',config:'[Ar] 4s²',desc:'Most abundant metal in the human body; essential for bones, teeth, and muscle function.'},
  {n:21,sym:'Sc',name:'Scandium',cat:'transition',mass:'44.96',row:4,col:3,phase:'Solid',group:'3',period:'4',config:'[Ar] 3d¹ 4s²',desc:'Rare light transition metal; used in aerospace alloys and high-intensity metal halide lamps.'},
  {n:22,sym:'Ti',name:'Titanium',cat:'transition',mass:'47.87',row:4,col:4,phase:'Solid',group:'4',period:'4',config:'[Ar] 3d² 4s²',desc:'Exceptional strength-to-weight ratio and corrosion resistance; key in aerospace and medical implants.'},
  {n:23,sym:'V',name:'Vanadium',cat:'transition',mass:'50.94',row:4,col:5,phase:'Solid',group:'5',period:'4',config:'[Ar] 3d³ 4s²',desc:'Strengthens steel alloys; vanadium redox flow batteries are emerging for grid-scale energy storage.'},
  {n:24,sym:'Cr',name:'Chromium',cat:'transition',mass:'52.00',row:4,col:6,phase:'Solid',group:'6',period:'4',config:'[Ar] 3d⁵ 4s¹',desc:'Key component of stainless steel; chromium plating creates the shiny, corrosion-resistant finish on metals.'},
  {n:25,sym:'Mn',name:'Manganese',cat:'transition',mass:'54.94',row:4,col:7,phase:'Solid',group:'7',period:'4',config:'[Ar] 3d⁵ 4s²',desc:'Essential trace element for enzymes; critical in steel production for strength and hardness.'},
  {n:26,sym:'Fe',name:'Iron',cat:'transition',mass:'55.85',row:4,col:8,phase:'Solid',group:'8',period:'4',config:'[Ar] 3d⁶ 4s²',desc:'Most widely used metal in history; the iron in your hemoglobin carries oxygen to every cell in your body.'},
  {n:27,sym:'Co',name:'Cobalt',cat:'transition',mass:'58.93',row:4,col:9,phase:'Solid',group:'9',period:'4',config:'[Ar] 3d⁷ 4s²',desc:'Critical mineral for lithium-ion batteries and superalloys in jet engines; produces a deep blue pigment.'},
  {n:28,sym:'Ni',name:'Nickel',cat:'transition',mass:'58.69',row:4,col:10,phase:'Solid',group:'10',period:'4',config:'[Ar] 3d⁸ 4s²',desc:'Corrosion-resistant metal used in coins, stainless steel alloys, and rechargeable batteries.'},
  {n:29,sym:'Cu',name:'Copper',cat:'transition',mass:'63.55',row:4,col:11,phase:'Solid',group:'11',period:'4',config:'[Ar] 3d¹⁰ 4s¹',desc:'Best electrical conductor among common metals; one of the first metals used by humanity, over 10,000 years ago.'},
  {n:30,sym:'Zn',name:'Zinc',cat:'transition',mass:'65.38',row:4,col:12,phase:'Solid',group:'12',period:'4',config:'[Ar] 3d¹⁰ 4s²',desc:'Used to galvanize steel against rust; essential dietary mineral for immune function and wound healing.'},
  {n:31,sym:'Ga',name:'Gallium',cat:'posttrans',mass:'69.72',row:4,col:13,phase:'Solid',group:'13',period:'4',config:'[Ar] 3d¹⁰ 4s² 4p¹',desc:'Melts just above room temperature at 29.8°C; key in GaN semiconductors for LEDs and 5G chips.'},
  {n:32,sym:'Ge',name:'Germanium',cat:'metalloid',mass:'72.63',row:4,col:14,phase:'Solid',group:'14',period:'4',config:'[Ar] 3d¹⁰ 4s² 4p²',desc:'Semiconductor used in fiber optic cables and infrared night-vision optics.'},
  {n:33,sym:'As',name:'Arsenic',cat:'metalloid',mass:'74.92',row:4,col:15,phase:'Solid',group:'15',period:'4',config:'[Ar] 3d¹⁰ 4s² 4p³',desc:'Toxic metalloid; used in GaAs semiconductors for solar cells and high-speed electronics.'},
  {n:34,sym:'Se',name:'Selenium',cat:'nonmetal',mass:'78.97',row:4,col:16,phase:'Solid',group:'16',period:'4',config:'[Ar] 3d¹⁰ 4s² 4p⁴',desc:'Essential trace element for antioxidant enzymes; used in solar cells and glass decolorization.'},
  {n:35,sym:'Br',name:'Bromine',cat:'nonmetal',mass:'79.90',row:4,col:17,phase:'Liquid',group:'17',period:'4',config:'[Ar] 3d¹⁰ 4s² 4p⁵',desc:'One of only two liquid elements at room temperature; used in flame retardants and photographic film.'},
  {n:36,sym:'Kr',name:'Krypton',cat:'noble',mass:'83.80',row:4,col:18,phase:'Gas',group:'18',period:'4',config:'[Ar] 3d¹⁰ 4s² 4p⁶',desc:'Used in photographic flashes, fluorescent lamps, and was once used to define the standard meter.'},
  {n:37,sym:'Rb',name:'Rubidium',cat:'alkali',mass:'85.47',row:5,col:1,phase:'Solid',group:'1',period:'5',config:'[Kr] 5s¹',desc:'Highly reactive alkali metal; used in atomic clocks and research into Bose-Einstein condensates.'},
  {n:38,sym:'Sr',name:'Strontium',cat:'alkaline',mass:'87.62',row:5,col:2,phase:'Solid',group:'2',period:'5',config:'[Kr] 5s²',desc:'Produces brilliant red color in fireworks; ⁹⁰Sr is a dangerous radioactive fission product.'},
  {n:39,sym:'Y',name:'Yttrium',cat:'transition',mass:'88.91',row:5,col:3,phase:'Solid',group:'3',period:'5',config:'[Kr] 4d¹ 5s²',desc:'Used in red phosphors for LED screens and in the YBa₂Cu₃O₇ high-temperature superconductor.'},
  {n:40,sym:'Zr',name:'Zirconium',cat:'transition',mass:'91.22',row:5,col:4,phase:'Solid',group:'4',period:'5',config:'[Kr] 4d² 5s²',desc:'Extremely corrosion-resistant; used in nuclear reactor fuel rod cladding because it barely absorbs neutrons.'},
  {n:41,sym:'Nb',name:'Niobium',cat:'transition',mass:'92.91',row:5,col:5,phase:'Solid',group:'5',period:'5',config:'[Kr] 4d⁴ 5s¹',desc:'Used in high-strength low-alloy steels for pipelines and in superconducting magnets for MRI.'},
  {n:42,sym:'Mo',name:'Molybdenum',cat:'transition',mass:'95.96',row:5,col:6,phase:'Solid',group:'6',period:'5',config:'[Kr] 4d⁵ 5s¹',desc:'Extremely high melting point; essential in high-strength steel alloys and as an industrial catalyst.'},
  {n:43,sym:'Tc',name:'Technetium',cat:'transition',mass:'(98)',row:5,col:7,phase:'Solid',group:'7',period:'5',config:'[Kr] 4d⁵ 5s²',desc:'First artificially produced element; ⁹⁹ᵐTc is the most widely used radioisotope in nuclear medicine imaging.'},
  {n:44,sym:'Ru',name:'Ruthenium',cat:'transition',mass:'101.1',row:5,col:8,phase:'Solid',group:'8',period:'5',config:'[Kr] 4d⁷ 5s¹',desc:'Rare platinum group metal; used as a catalyst and to harden platinum and palladium alloys.'},
  {n:45,sym:'Rh',name:'Rhodium',cat:'transition',mass:'102.9',row:5,col:9,phase:'Solid',group:'9',period:'5',config:'[Kr] 4d⁸ 5s¹',desc:'One of the rarest and most expensive metals; essential in the three-way catalytic converter.'},
  {n:46,sym:'Pd',name:'Palladium',cat:'transition',mass:'106.4',row:5,col:10,phase:'Solid',group:'10',period:'5',config:'[Kr] 4d¹⁰',desc:'Platinum group metal; absorbs up to 900 times its volume in hydrogen — used in catalytic converters.'},
  {n:47,sym:'Ag',name:'Silver',cat:'transition',mass:'107.9',row:5,col:11,phase:'Solid',group:'11',period:'5',config:'[Kr] 4d¹⁰ 5s¹',desc:'Best electrical and thermal conductor of all elements; used in jewelry, photography, and antimicrobial applications.'},
  {n:48,sym:'Cd',name:'Cadmium',cat:'transition',mass:'112.4',row:5,col:12,phase:'Solid',group:'12',period:'5',config:'[Kr] 4d¹⁰ 5s²',desc:'Toxic heavy metal; used in NiCd rechargeable batteries and as a red/yellow pigment in paints.'},
  {n:49,sym:'In',name:'Indium',cat:'posttrans',mass:'114.8',row:5,col:13,phase:'Solid',group:'13',period:'5',config:'[Kr] 4d¹⁰ 5s² 5p¹',desc:'Used in indium tin oxide (ITO) for transparent electrodes in touchscreens and flat panel displays.'},
  {n:50,sym:'Sn',name:'Tin',cat:'posttrans',mass:'118.7',row:5,col:14,phase:'Solid',group:'14',period:'5',config:'[Kr] 4d¹⁰ 5s² 5p²',desc:'Used in solder for electronics and in tin-plated steel for food cans; known since antiquity.'},
  {n:51,sym:'Sb',name:'Antimony',cat:'metalloid',mass:'121.8',row:5,col:15,phase:'Solid',group:'15',period:'5',config:'[Kr] 4d¹⁰ 5s² 5p³',desc:'Used in flame retardants, lead-acid battery electrodes, and semiconductor manufacturing.'},
  {n:52,sym:'Te',name:'Tellurium',cat:'metalloid',mass:'127.6',row:5,col:16,phase:'Solid',group:'16',period:'5',config:'[Kr] 4d¹⁰ 5s² 5p⁴',desc:'Used in CdTe thin-film solar panels and as an additive to improve the machinability of steel.'},
  {n:53,sym:'I',name:'Iodine',cat:'nonmetal',mass:'126.9',row:5,col:17,phase:'Solid',group:'17',period:'5',config:'[Kr] 4d¹⁰ 5s² 5p⁵',desc:'Essential for thyroid hormones; used as an antiseptic, in photography, and in radiation protection.'},
  {n:54,sym:'Xe',name:'Xenon',cat:'noble',mass:'131.3',row:5,col:18,phase:'Gas',group:'18',period:'5',config:'[Kr] 4d¹⁰ 5s² 5p⁶',desc:'Used in high-intensity HID lamps, ion propulsion engines for spacecraft, and as an anesthetic.'},
  {n:55,sym:'Cs',name:'Cesium',cat:'alkali',mass:'132.9',row:6,col:1,phase:'Solid',group:'1',period:'6',config:'[Xe] 6s¹',desc:'Used in cesium atomic clocks that define the SI second; melts at just 28.5°C.'},
  {n:56,sym:'Ba',name:'Barium',cat:'alkaline',mass:'137.3',row:6,col:2,phase:'Solid',group:'2',period:'6',config:'[Xe] 6s²',desc:'Barium sulfate swallowed as a "barium meal" makes the gastrointestinal tract visible in X-rays.'},
  {n:57,sym:'La',name:'Lanthanum',cat:'lanthanide',mass:'138.9',row:8,col:3,phase:'Solid',group:'3',period:'6',config:'[Xe] 5d¹ 6s²',desc:'First lanthanide; used in camera and telescope lenses, hydrogen storage alloys, and fluid cracking catalysts.'},
  {n:58,sym:'Ce',name:'Cerium',cat:'lanthanide',mass:'140.1',row:8,col:4,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f¹ 5d¹ 6s²',desc:'Most abundant rare earth element; used in catalytic converters and as a polishing agent for glass.'},
  {n:59,sym:'Pr',name:'Praseodymium',cat:'lanthanide',mass:'140.9',row:8,col:5,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f³ 6s²',desc:'Used in strong permanent magnets and to give glass and enamel a distinctive yellow-green color.'},
  {n:60,sym:'Nd',name:'Neodymium',cat:'lanthanide',mass:'144.2',row:8,col:6,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f⁴ 6s²',desc:'Makes the strongest permanent magnets (Nd₂Fe₁₄B); essential in EV motors and wind turbine generators.'},
  {n:61,sym:'Pm',name:'Promethium',cat:'lanthanide',mass:'(145)',row:8,col:7,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f⁵ 6s²',desc:'Only naturally radioactive lanthanide; used in atomic batteries for spacecraft and heart pacemakers.'},
  {n:62,sym:'Sm',name:'Samarium',cat:'lanthanide',mass:'150.4',row:8,col:8,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f⁶ 6s²',desc:'SmCo magnets work at extreme temperatures; ¹⁵³Sm is used in targeted cancer radiotherapy.'},
  {n:63,sym:'Eu',name:'Europium',cat:'lanthanide',mass:'152.0',row:8,col:9,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f⁷ 6s²',desc:'Strongest phosphor activator; gives euro banknotes their fluorescent security feature under UV light.'},
  {n:64,sym:'Gd',name:'Gadolinium',cat:'lanthanide',mass:'157.3',row:8,col:10,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f⁷ 5d¹ 6s²',desc:'Gadolinium-based contrast agents are injected intravenously to enhance MRI scan images.'},
  {n:65,sym:'Tb',name:'Terbium',cat:'lanthanide',mass:'158.9',row:8,col:11,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f⁹ 6s²',desc:'Used in Terfenol-D magnetostrictive alloys, green phosphors for displays, and solid-state devices.'},
  {n:66,sym:'Dy',name:'Dysprosium',cat:'lanthanide',mass:'162.5',row:8,col:12,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f¹⁰ 6s²',desc:'Added to neodymium magnets to maintain performance at high temperatures in EV motors.'},
  {n:67,sym:'Ho',name:'Holmium',cat:'lanthanide',mass:'164.9',row:8,col:13,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f¹¹ 6s²',desc:'Has the highest magnetic moment of any element; used in powerful magnets and Ho:YAG surgical lasers.'},
  {n:68,sym:'Er',name:'Erbium',cat:'lanthanide',mass:'167.3',row:8,col:14,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f¹² 6s²',desc:'Used as a dopant in fiber-optic amplifiers (EDFAs) that boost internet signals across continents.'},
  {n:69,sym:'Tm',name:'Thulium',cat:'lanthanide',mass:'168.9',row:8,col:15,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f¹³ 6s²',desc:'Rarest stable lanthanide; radioactive ¹⁷⁰Tm is used in portable X-ray devices.'},
  {n:70,sym:'Yb',name:'Ytterbium',cat:'lanthanide',mass:'173.1',row:8,col:16,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f¹⁴ 6s²',desc:'Used in the most accurate atomic clocks and as a dopant in stainless steel for grain refinement.'},
  {n:71,sym:'Lu',name:'Lutetium',cat:'lanthanide',mass:'175.0',row:8,col:17,phase:'Solid',group:'—',period:'6',config:'[Xe] 4f¹⁴ 5d¹ 6s²',desc:'Hardest and densest lanthanide; lutetium oxyorthosilicate crystals are used in PET scanners.'},
  {n:72,sym:'Hf',name:'Hafnium',cat:'transition',mass:'178.5',row:6,col:4,phase:'Solid',group:'4',period:'6',config:'[Xe] 4f¹⁴ 5d² 6s²',desc:'Used in nuclear reactor control rods; hafnium oxide is now the gate dielectric in Intel\'s transistors.'},
  {n:73,sym:'Ta',name:'Tantalum',cat:'transition',mass:'180.9',row:6,col:5,phase:'Solid',group:'5',period:'6',config:'[Xe] 4f¹⁴ 5d³ 6s²',desc:'Biocompatible and corrosion-resistant; used in capacitors in mobile phones and medical implants.'},
  {n:74,sym:'W',name:'Tungsten',cat:'transition',mass:'183.8',row:6,col:6,phase:'Solid',group:'6',period:'6',config:'[Xe] 4f¹⁴ 5d⁴ 6s²',desc:'Highest melting point (3422°C) of all metals; used in incandescent bulb filaments and cutting tools.'},
  {n:75,sym:'Re',name:'Rhenium',cat:'transition',mass:'186.2',row:6,col:7,phase:'Solid',group:'7',period:'6',config:'[Xe] 4f¹⁴ 5d⁵ 6s²',desc:'One of the rarest and densest elements; used in turbine blades of jet engines with W-Re superalloys.'},
  {n:76,sym:'Os',name:'Osmium',cat:'transition',mass:'190.2',row:6,col:8,phase:'Solid',group:'8',period:'6',config:'[Xe] 4f¹⁴ 5d⁶ 6s²',desc:'Densest naturally occurring element (22.59 g/cm³); used in fountain pen tips and instrument pivots.'},
  {n:77,sym:'Ir',name:'Iridium',cat:'transition',mass:'192.2',row:6,col:9,phase:'Solid',group:'9',period:'6',config:'[Xe] 4f¹⁴ 5d⁷ 6s²',desc:'Most corrosion-resistant metal; the iridium anomaly in the K-Pg boundary layer is evidence for the dinosaur-killing asteroid.'},
  {n:78,sym:'Pt',name:'Platinum',cat:'transition',mass:'195.1',row:6,col:10,phase:'Solid',group:'10',period:'6',config:'[Xe] 4f¹⁴ 5d⁹ 6s¹',desc:'Precious metal essential in catalytic converters, fuel cells for hydrogen vehicles, and cancer chemotherapy (cisplatin).'},
  {n:79,sym:'Au',name:'Gold',cat:'transition',mass:'197.0',row:6,col:11,phase:'Solid',group:'11',period:'6',config:'[Xe] 4f¹⁴ 5d¹⁰ 6s¹',desc:'Most ductile metal and chemically inert; formed in neutron star collisions and has served as money for millennia.'},
  {n:80,sym:'Hg',name:'Mercury',cat:'transition',mass:'200.6',row:6,col:12,phase:'Liquid',group:'12',period:'6',config:'[Xe] 4f¹⁴ 5d¹⁰ 6s²',desc:'Only metal that is liquid at room temperature; used in thermometers, fluorescent lamps, and dental amalgam.'},
  {n:81,sym:'Tl',name:'Thallium',cat:'posttrans',mass:'204.4',row:6,col:13,phase:'Solid',group:'13',period:'6',config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹',desc:'Highly toxic heavy metal; ²⁰¹Tl is used in cardiac stress tests; formerly used in rodenticides.'},
  {n:82,sym:'Pb',name:'Lead',cat:'posttrans',mass:'207.2',row:6,col:14,phase:'Solid',group:'14',period:'6',config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',desc:'Dense, malleable metal; used in radiation shielding and lead-acid batteries in cars.'},
  {n:83,sym:'Bi',name:'Bismuth',cat:'posttrans',mass:'209.0',row:6,col:15,phase:'Solid',group:'15',period:'6',config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',desc:'Heaviest stable element; used in Pepto-Bismol, cosmetics, and beautiful rainbow-colored lab crystals.'},
  {n:84,sym:'Po',name:'Polonium',cat:'nonmetal',mass:'(209)',row:6,col:16,phase:'Solid',group:'16',period:'6',config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',desc:'Extremely radioactive; discovered by Marie Curie in 1898; used in anti-static brushes for film.'},
  {n:85,sym:'At',name:'Astatine',cat:'nonmetal',mass:'(210)',row:6,col:17,phase:'Solid',group:'17',period:'6',config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵',desc:'Rarest naturally occurring element; only a few grams exist on Earth at any time.'},
  {n:86,sym:'Rn',name:'Radon',cat:'noble',mass:'(222)',row:6,col:18,phase:'Gas',group:'18',period:'6',config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',desc:'Radioactive noble gas seeping from rocks; the second leading cause of lung cancer after smoking.'},
  {n:87,sym:'Fr',name:'Francium',cat:'alkali',mass:'(223)',row:7,col:1,phase:'Solid',group:'1',period:'7',config:'[Rn] 7s¹',desc:'Rarest naturally occurring element; most unstable of the first 101 elements with a 22-minute half-life.'},
  {n:88,sym:'Ra',name:'Radium',cat:'alkaline',mass:'(226)',row:7,col:2,phase:'Solid',group:'2',period:'7',config:'[Rn] 7s²',desc:'Radioactive element discovered by Marie Curie; formerly painted on watch dials to make them glow in the dark.'},
  {n:89,sym:'Ac',name:'Actinium',cat:'actinide',mass:'(227)',row:9,col:3,phase:'Solid',group:'3',period:'7',config:'[Rn] 6d¹ 7s²',desc:'First actinide; ²²⁵Ac is being investigated for targeted alpha therapy in cancer treatment.'},
  {n:90,sym:'Th',name:'Thorium',cat:'actinide',mass:'232.0',row:9,col:4,phase:'Solid',group:'—',period:'7',config:'[Rn] 6d² 7s²',desc:'Radioactive but far more abundant than uranium; considered a potentially safer nuclear fuel.'},
  {n:91,sym:'Pa',name:'Protactinium',cat:'actinide',mass:'231.0',row:9,col:5,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f² 6d¹ 7s²',desc:'Rare and radioactive; an intermediate product in the uranium-235 decay chain.'},
  {n:92,sym:'U',name:'Uranium',cat:'actinide',mass:'238.0',row:9,col:6,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f³ 6d¹ 7s²',desc:'Primary fuel for nuclear power plants; ²³⁵U undergoes fission and powers about 10% of global electricity.'},
  {n:93,sym:'Np',name:'Neptunium',cat:'actinide',mass:'(237)',row:9,col:7,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f⁴ 6d¹ 7s²',desc:'First transuranium element; produced in nuclear reactors as a step toward plutonium production.'},
  {n:94,sym:'Pu',name:'Plutonium',cat:'actinide',mass:'(244)',row:9,col:8,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f⁶ 7s²',desc:'Fissile material used in nuclear weapons and mixed-oxide reactor fuel; glows faintly blue in the dark.'},
  {n:95,sym:'Am',name:'Americium',cat:'actinide',mass:'(243)',row:9,col:9,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f⁷ 7s²',desc:'²⁴¹Am is the radioactive source in household smoke detectors; produced in nuclear reactors.'},
  {n:96,sym:'Cm',name:'Curium',cat:'actinide',mass:'(247)',row:9,col:10,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f⁷ 6d¹ 7s²',desc:'Named after Marie and Pierre Curie; used in radioisotope thermoelectric generators for deep space probes.'},
  {n:97,sym:'Bk',name:'Berkelium',cat:'actinide',mass:'(247)',row:9,col:11,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f⁹ 7s²',desc:'Named after Berkeley, California; produced in the cyclotron only in tiny quantities for research.'},
  {n:98,sym:'Cf',name:'Californium',cat:'actinide',mass:'(251)',row:9,col:12,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f¹⁰ 7s²',desc:'Intense neutron source; used in startup detectors for nuclear reactors and cancer treatment.'},
  {n:99,sym:'Es',name:'Einsteinium',cat:'actinide',mass:'(252)',row:9,col:13,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f¹¹ 7s²',desc:'Named after Albert Einstein; discovered in the fallout of the first hydrogen bomb test in 1952.'},
  {n:100,sym:'Fm',name:'Fermium',cat:'actinide',mass:'(257)',row:9,col:14,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f¹² 7s²',desc:'Named after Enrico Fermi; the heaviest element that can be made by neutron bombardment.'},
  {n:101,sym:'Md',name:'Mendelevium',cat:'actinide',mass:'(258)',row:9,col:15,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f¹³ 7s²',desc:'Named after Dmitri Mendeleev, who published the first periodic table in 1869.'},
  {n:102,sym:'No',name:'Nobelium',cat:'actinide',mass:'(259)',row:9,col:16,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f¹⁴ 7s²',desc:'Named after Alfred Nobel; first produced at the Flerov Laboratory in Dubna in 1966.'},
  {n:103,sym:'Lr',name:'Lawrencium',cat:'actinide',mass:'(266)',row:9,col:17,phase:'Solid',group:'—',period:'7',config:'[Rn] 5f¹⁴ 7s² 7p¹',desc:'Last actinide; named after Ernest Lawrence, inventor of the cyclotron particle accelerator.'},
  {n:104,sym:'Rf',name:'Rutherfordium',cat:'transition',mass:'(267)',row:7,col:4,phase:'Solid',group:'4',period:'7',config:'[Rn] 5f¹⁴ 6d² 7s²',desc:'Named after Ernest Rutherford; first transactinide element, produced one atom at a time.'},
  {n:105,sym:'Db',name:'Dubnium',cat:'transition',mass:'(268)',row:7,col:5,phase:'Solid',group:'5',period:'7',config:'[Rn] 5f¹⁴ 6d³ 7s²',desc:'Named after Dubna, Russia; discovered independently by US and Soviet teams during the Cold War.'},
  {n:106,sym:'Sg',name:'Seaborgium',cat:'transition',mass:'(269)',row:7,col:6,phase:'Solid',group:'6',period:'7',config:'[Rn] 5f¹⁴ 6d⁴ 7s²',desc:'Named after Glenn Seaborg; the first element named after a living person, while he was still alive.'},
  {n:107,sym:'Bh',name:'Bohrium',cat:'transition',mass:'(270)',row:7,col:7,phase:'Solid',group:'7',period:'7',config:'[Rn] 5f¹⁴ 6d⁵ 7s²',desc:'Named after Niels Bohr; synthesized in 1981 by bombarding bismuth-209 with chromium-54.'},
  {n:108,sym:'Hs',name:'Hassium',cat:'transition',mass:'(269)',row:7,col:8,phase:'Solid',group:'8',period:'7',config:'[Rn] 5f¹⁴ 6d⁶ 7s²',desc:'Named after the German state of Hesse (Hassia); only a few atoms have ever been synthesized.'},
  {n:109,sym:'Mt',name:'Meitnerium',cat:'transition',mass:'(278)',row:7,col:9,phase:'Solid',group:'9',period:'7',config:'[Rn] 5f¹⁴ 6d⁷ 7s²',desc:'Named after Lise Meitner, who co-discovered nuclear fission but was controversially denied the Nobel Prize.'},
  {n:110,sym:'Ds',name:'Darmstadtium',cat:'transition',mass:'(281)',row:7,col:10,phase:'Solid',group:'10',period:'7',config:'[Rn] 5f¹⁴ 6d⁸ 7s²',desc:'Named after Darmstadt, Germany, where GSI Helmholtzzentrum is located; first synthesized in 1994.'},
  {n:111,sym:'Rg',name:'Roentgenium',cat:'transition',mass:'(282)',row:7,col:11,phase:'Solid',group:'11',period:'7',config:'[Rn] 5f¹⁴ 6d¹⁰ 7s¹',desc:'Named after Wilhelm Röntgen, discoverer of X-rays; extremely unstable with half-life under 30 seconds.'},
  {n:112,sym:'Cn',name:'Copernicium',cat:'transition',mass:'(285)',row:7,col:12,phase:'Gas',group:'12',period:'7',config:'[Rn] 5f¹⁴ 6d¹⁰ 7s²',desc:'Named after Nicolaus Copernicus; relativistic effects may cause it to behave more like a noble gas than a metal.'},
  {n:113,sym:'Nh',name:'Nihonium',cat:'posttrans',mass:'(286)',row:7,col:13,phase:'Solid',group:'13',period:'7',config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',desc:'Named after Japan (Nihon in Japanese); the first element discovered in Asia, confirmed in 2016.'},
  {n:114,sym:'Fl',name:'Flerovium',cat:'posttrans',mass:'(289)',row:7,col:14,phase:'Solid',group:'14',period:'7',config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',desc:'Named after Flerov Laboratory of Nuclear Reactions in Dubna; may be a gas at room temperature.'},
  {n:115,sym:'Mc',name:'Moscovium',cat:'posttrans',mass:'(290)',row:7,col:15,phase:'Solid',group:'15',period:'7',config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',desc:'Named after Moscow Oblast, Russia; confirmed by IUPAC in 2016.'},
  {n:116,sym:'Lv',name:'Livermorium',cat:'posttrans',mass:'(293)',row:7,col:16,phase:'Solid',group:'16',period:'7',config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',desc:'Named after Lawrence Livermore National Laboratory; synthesized in a US-Russia collaboration.'},
  {n:117,sym:'Ts',name:'Tennessine',cat:'nonmetal',mass:'(294)',row:7,col:17,phase:'Solid',group:'17',period:'7',config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',desc:'Named after Tennessee; the second-heaviest element confirmed, joining the halogen group.'},
  {n:118,sym:'Og',name:'Oganesson',cat:'noble',mass:'(294)',row:7,col:18,phase:'Unknown',group:'18',period:'7',config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',desc:'Named after Yuri Oganessian; heaviest element known; theoretically may be solid, not a gas like other noble gases.'},
];
