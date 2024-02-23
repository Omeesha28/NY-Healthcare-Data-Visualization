let cities = [
  {name: "Montefiore Med Center - Jack D Weiler Hosp of A Einstein College Div",
  location: [40.849278, -73.846121
  ]},
  {name: "Montefiore Medical Center-Wakefield Hospital",
  location: [40.894103, -73.861005
  ]},
  {name: "Montefiore Medical Center - Henry & Lucy Moses Div",
  location: [40.880838701507194, -73.87845315096689
  ]},
  {name: "Montefiore Nyack",
  location: [41.09619051448216, -73.92598903006
  ]},
  {name: "New York Presbyterian Hospital - Allen Hospital",
  location: [40.87358055180271, -73.91313883377192
  ]},
  {name: "Mount Sinai Beth Israel",
  location: [40.733874851354884, -73.9820988376651
  ]},
  {name: "Mount Sinai West",
  location: [40.77239098108636, -73.9862194458094
  ]},
  {name: "White Plains Hospital Center",
  location: [41.0268751916386, -73.76914474862461
  ]},
  {name: "New York-Presbyterian Hospital - Columbia Presbyterian Center",
  location: [40.84203899963645, -73.94123207262948
  ]},
  {name: "Kings County Hospital Center",
  location: [40.6574918994489, -73.94292126595339
  ]},
  {name: "Bellevue Hospital Center",
  location: [40.74048410647692, -73.97622568007415
  ]},
  {name: "North Central Bronx Hospital",
  location: [40.880962574530834, -73.88092160784652
  ]},
  {name: "Mount Sinai Hospital",
  location: [40.8001646874029, -73.94916940575027
  ]},
  {name: "Jacobi Medical Center",
  location: [40.857328794691554, -73.84723816524084
  ]},
  {name: "Coney Island Hospital",
  location: [40.5854, -73.9651
  ]},
  {name: "Mount Sinai Brooklyn",
  location: [40.6203138628892, -73.94285458990448
  ]},
  {name: "Henry J. Carter Specialty Hospital",
  location: [40.80333482456015, -73.94104601682848
  ]},
  {name: "Lincoln Medical & Mental Health Center",
  location: [40.81627222426686, -73.92487276284766
  ]},
  {name: "Metropolitan Hospital Center",
  location: [40.78519888820979, -73.94482583032426
  ]},
  {name: "Queens Hospital Center",
  location: [40.723380038928454, -73.80502566144852
  ]},
  {name: "Elmhurst Hospital Center",
  location: [40.744890399634414, -73.88597651760081
  ]},
  {name: "Harlem Hospital Center",
  location: [40.81435638155107, -73.93949505468966
  ]},
  {name: "Woodhull Medical & Mental Health Center",
  location: [40.69965388426324, -73.9427312745026
  ]},
  {name: "Montefiore Mount Vernon Hospital",
  location: [40.91297893603179, -73.84051581682392
  ]},
  {name: "Montefiore New Rochelle Hospital",
  location: [40.912602108173374, -73.78717058798902
  ]},
  {name: "New York-Presbyterian Westchester Behavioral Health Center",
  location: [41.028911912680684, -73.7546035206575
  ]},
  {name: "New York-Presbyterian/Lower Manhattan Hospital",
  location: [40.710552623680954, -74.00503863032729
  ]},
  {name: "New York-Presbyterian Hospital - New York Weill Cornell Center",
  location: [40.764605687416385, -73.95411356298752
  ]},
  {name: "St Lukes Cornwall Hospital/Newburgh",
  location: [41.50364297219882, -74.01478639752325
  ]},
  {name: "Winifred Masterson Burke Rehabilitation Hospital",
  location: [41.01760381647074, -73.75232331866457
  ]},
  {name: "Good Samaritan Hospital of Suffern",
  location: [41.11162597446913, -74.13579381497101
  ]},
  {name: "St Anthony Community Hospital",
  location: [41.26155535995283, -74.35759618981953
  ]},
  {name: "Bon Secours Community Hospital",
  location: [41.36783725920874, -74.6817702303003
  ]},
  {name: "Mount Sinai Morningside",
  location: [40.80562121921303, -73.9614104996436
  ]},
  {name: "New York - Presbyterian Hospital",
  location: [40.84215633793582, -73.93805461270303
  ]},
  {name: "NYU Langone Orthopedic Hospital",
  location: [40.7348043757593, -73.9829018683051
  ]},
  {name: "NYU Langone Hospital-Long Island",
  location: [40.740956198002706, -73.64310542250229
  ]},
  {name: "NYU Langone Hospital-Brooklyn",
  location: [40.64677886229028, -74.0206325879999
  ]},
  {name: "NYU Langone Hospitals",
  location: [40.7421, 73.9740
  ]},
  {name: "Garnet Health Medical Center",
  location: [41.46632184112908, -74.38351139148061
  ]},
  {name: "Garnet Health Medical Center - Catskills",
  location: [41.709627224206486, -74.73800340514089
  ]},
  {name: "Nassau University Medical Center",
  location: [40.72823553175287, -73.55340543235992
  ]},
  {name: "Helen Hayes Hospital",
  location: [41.214750658697156, -73.98813092966475
  ]},
  {name: "A.O. Fox Memorial Hospital",
  location: [42.458063810783926, -75.05230233209957
  ]},
  {name: "Little Falls Hospital",
  location: [43.04424417153068, -74.84770671857952
  ]},
  {name: "OConnor Hospital",
  location: [42.26864661209679, -74.91617887259278
  ]},
  {name: "Mary Imogene Bassett Hospital",
  location: [42.69592294504635, -74.92358380325453
  ]},
  {name: "University Hospital of Brooklyn",
  location: [40.66039286102754, -73.94222427406785
  ]},
  {name: "Highland Hospital",
  location: [41.267954155785766, -73.94631753617642
  ]},
  {name: "New York - Presbyterian/Queens",
  location: [40.752529943209424, -73.82556506455704
  ]},
  {name: "F.F. Thompson Hospital",
  location: [42.876412805083056, -77.28971927441181
  ]},
  {name: "SJRH - Park Care Pavilion",
  location: [40.94044177875228, -73.89163914750267
  ]},
  {name: "SJRH - Dobbs Ferry Pavillion",
  location: [41.0145945371515, -73.86193750332478
  ]},
  {name: "Strong Memorial Hospital",
  location: [43.12278091232602, -77.62570567624614
  ]},
  {name: "Guthrie Cortland Medical Center",
  location: [42.60886571628304, -76.18743421675327
  ]},
  {name: "St. Josephs MC-St. Vincents Westchester Division",
  location: [40.9893579285765, -73.70863507449081
  ]},
  {name: "Columbia Memorial Hospital",
  location: [42.28960800024347, -73.7623590679741
  ]},
  {name: "Albany Medical Center - South Clinical Campus",
  location: [42.64605102047178, -73.78018888976153
  ]},
  {name: "Albany Medical Center Hospital",
  location: [42.65356232442636, -73.7764892609263
  ]},
  {name: "New York - Presbyterian Brooklyn Methodist Hospital",
  location: [40.66859617271769, -73.97985632250233
  ]},
  {name: "Stony Brook Eastern Long Island Hospital",
  location: [41.110452141315825, -72.36090558798087
  ]},
  {name: "Crouse Hospital",
  location: [43.04165156137193, -76.13866337624965
  ]},
  {name: "Crouse Hospital - Commonwealth Division",
  location: [43.098580686654024, -76.10740053022741
  ]},
  {name: "Community Memorial Hospital Inc",
  location: [42.823780143975746, -75.53563350400826
  ]},
  {name: "Long Island Community Hospital",
  location: [40.78075145207547, -72.97677333216924
  ]},
  {name: "Corning Hospital",
  location: [42.1358771919276, -76.9696918474531
  ]},
  {name: "BronxCare Hospital Center",
  location: [40.84372060466396, -73.91104839898495
  ]},
  {name: "Calvary Hospital Inc",
  location: [40.85733417376212, -73.84145224252386
  ]},
  {name: "Brooklyn Hospital Center - Downtown Campus",
  location: [40.690629991868555, -73.978398874503
  ]},
  {name: "Auburn Community Hospital",
  location: [42.94161121390045, -76.5644701148943
  ]},
  {name: "Blythedale Childrens Hospital",
  location: [41.07503975773447, -73.79989905914739
  ]},
  {name: "St. Marys Healthcare - Amsterdam Memorial Campus",
  location: [42.95926481029782, -74.18721023023342
  ]},
  {name: "Jamaica Hospital Medical Center",
  location: [40.70374671985183, -73.81582412985568
  ]},
  {name: "SJRH - St Johns Division",
  location: [40.96918139989128, -73.88616830148177
  ]},
  {name: "Flushing Hospital Medical Center",
  location: [40.75561295930991, -73.81625114751017
  ]},
  {name: "Erie County Medical Center",
  location: [42.92535749833675, -78.83059871673977
  ]},
  {name: "Hospital for Special Surgery",
  location: [40.76529892337079, -73.95287618108908
  ]},
  {name: "Samaritan Medical Center",
  location: [40.755804377716345, -73.97882234548852
  ]},
  {name: "Lakeview Center for Mental Health and Wellness",
  location: [43.45948622417124, -76.50682844537577
  ]},
  {name: "Unity Specialty Hospital",
  location: [43.14866288468071, -77.63712938771779
  ]},
  {name: "Soldiers and Sailors Memorial Hospital of Yates County",
  location: [42.670727883838886, -77.06098185890248
  ]},
  {name: "Newark-Wayne Community Hospital",
  location: [43.06072178647339, -77.10183201840665
  ]},
  {name: "United Memorial Medical Center North Street Campus",
  location: [43.0055973050163, -78.17648670121703
  ]},
  {name: "The Unity Hospital of Rochester",
  location: [43.19852871241984, -77.70382983019744
  ]},
  {name: "Clifton Springs Hospital and Clinic",
  location: [42.96058386160249, -77.13616365704077
  ]},
  {name: "United Memorial Medical Center Bank Street Campus",
  location: [42.999051751959215, -78.18095460306672
  ]},
  {name: "Rochester General Hospital",
  location: [43.192561856412574, -77.58641997607225
  ]},
  {name: "Oswego Hospital",
  location: [43.45391159663976, -76.51632685886916
  ]},
  {name: "Geneva General Hospital",
  location: [42.876672355137075, -76.98826916074314
  ]},
  {name: "John T Mather Memorial Hospital of Port Jefferson New York Inc",
  location: [40.939839803483224, -73.05361410315228
  ]},
  {name: "Cobleskill Regional Hospital",
  location: [42.687194936607824, -74.4819143319156
  ]},
  {name: "HealthAlliance Hospital Broadway Campus",
  location: [41.92659461683645, -73.99519674359117
  ]},
  {name: "Margaretville Hospital",
  location: [42.146797028650006, -74.64179545707513
  ]},
  {name: "St Elizabeth Medical Center",
  location: [43.132921025354584, -70.96782150814468
  ]},
  {name: "Ellis Hospital",
  location: [42.83352777422534, -73.91548538475128
  ]},
  {name: "Faxton-St Lukes Healthcare St Lukes Division",
  location: [43.0970, - 75.2761
  ]},
  {name: "Our Lady of Lourdes Memorial Hospital",
  location: [42.092620108121054, -75.93550298591298
  ]},
  {name: "Gouverneur Hospital",
  location: [40.7132 , -73.9878
  ]},
  {name: "Schuyler Hospital",
  location: [42.35264234762552, -76.85989927240908
  ]},
  {name: "New York Eye and Ear Infirmary of Mount Sinai",
  location: [40.73328167769677, -73.9844394941792
  ]},
  {name: "Staten Island University Hosp-North",
  location: [40.5853824770798, -74.08532590501616
  ]},
  {name: "Kenmore Mercy Hospital",
  location: [42.97789025464956, -78.87994860306765
  ]},
  {name: "Mercy Hospital of Buffalo",
  location: [42.847957020545664, -78.81319750307313
  ]},
  {name: "Mount St. Marys Hospital and Health Center",
  location: [43.15414608045772, -79.03270850833478
  ]},
  {name: "Sisters of Charity Hospital",
  location: [42.92857346230813, -78.84813211101459
  ]},
  {name: "Staten Island University Hospital Princes Bay",
  location: [40.51704474534998, -74.19629493385452
  ]},
  {name: "Sisters of Charity Hospital - St. Joseph Campus",
  location: [42.9144101513304, -78.78241721656352
  ]},
  {name: "Arnot Ogden Medical Center",
  location: [42.10032538393902, -76.82745629940571
  ]},
  {name: "Clifton-Fine Hospital",
  location: [44.162574211738786, -75.05638164534537
  ]},
  {name: "Stony Brook Southampton Hospital",
  location: [40.88531526239111, -72.38027696267521
  ]},
  {name: "Massena Hospital",
  location: [44.93627668904909, -74.90893437229768
  ]},
  {name: "St. Josephs Hospital",
  location: [43.874150850477925, -76.05272849775714
  ]},
  {name: "Ira Davenport Memorial Hospital",
  location: [42.37461544279032, -77.27882084357239
  ]},
  {name: "Syosset Hospital",
  location: [40.8111007999693, -73.50866893014381
  ]},
  {name: "North Shore University Hospital",
  location: [40.78024634741691, -73.70114930279749
  ]},
  {name: "Glen Cove Hospital",
  location: [40.87114504384771, -73.62241358966203
  ]},
  {name: "Roswell Park Cancer Institute",
  location: [42.89898201698569, -78.86447408218021
  ]},
  {name: "Long Island Jewish Forest Hills",
  location: [40.729160539051804, -73.85162297432522
  ]},
  {name: "South Shore University Hospital",
  location: [40.72586390173409, -73.24128053014718
  ]},
  {name: "Lenox Hill Hospital",
  location: [40.77391724357497, -73.96078971665223
  ]},
  {name: "Peconic Bay Medical Center",
  location: [40.934229276159876, -72.67339206082391
  ]},
  {name: "St. Josephs Medical Center",
  location: [40.9029, -74.1663
  ]},
  {name: "Long Island Jewish Valley Stream",
  location: [40.681402329330396, -73.68633140131341
  ]},
  {name: "St. Josephs Hospital Health Center",
  location: [40.9025 -74.1658
  ]},
  {name: "Phelps Hospital Plainview Hospital",
  location: [41.12981778318828, -73.85807927741357
  ]},
  {name: "St. Marys Healthcare",
  location: [42.9545, -74.2163
  ]},
  {name: "The University of Vermont Health Network - Elizabethtown Community Hospital",
  location: [44.2159636932731, -73.59581244349361
  ]},
  {name: "Huntington Hospital UPMC Chautauqua at WCA",
  location: [42.093290868076025, -79.23195584144581
  ]},
  {name: "United Health Services Hospitals Inc. - Wilson Medical Center",
  location: [42.11440086349835, -75.95839318961089
  ]},
  {name: "Vassar Brothers Medical Center",
  location: [41.694066563469946, -73.93576934360078
  ]},
  {name: "Delaware Valley Hospital Inc",
  location: [42.16459522964857, -75.12879604543063
  ]},
  {name: "Northern Dutchess Hospital",
  location: [41.93569040563832, -73.91281081475513
  ]},
  {name: "Oneida Health Hospital",
  location: [43.07781615052304, -75.65395364354269
  ]},
  {name: "Putnam Hospital",
  location: [41.38368098364721, -73.66314992881817
  ]},
  {name: "United Health Services Hospitals Inc. - Binghamton General Hospital",
  location: [42.08648156351463, -75.91436392214652
  ]},
  {name: "Chenango Memorial Hospital Inc",
  location: [42.541577283355544, -75.52626873192172
  ]},
  {name: "Niagara Falls Memorial Medical Center",
  location: [43.09360472501746, -79.04933102819949
  ]},
  {name: "Cayuga Medical Center at Ithaca",
  location: [42.469118108271076, -76.53781321658224
  ]},
  {name: "Canton-Potsdam Hospital",
  location: [44.676660008055656, -74.98213925696655
  ]},
  {name: "Glens Falls Hospital",
  location: [43.30650005432357, -73.64612041421586
  ]},
  {name: "Mid-Hudson Valley Division of Westchester Medical Center",
  location: [41.0510, - 73.4820
  ]},
  {name: "Maimonides Medical Center",
  location: [40.639766896593436, -73.99874654734272
  ]},
  {name: "Westfield Memorial Hospital Inc",
  location: [42.32890666964906, -79.5697824435743
  ]},
  {name: "Westchester Medical Center",
  location: [41.088990213219844, -73.80580927431065
  ]},
  {name: "Cohen Childrens Medical Center",
  location: [40.75509763149914, -73.70867010006992
  ]},
  {name: "Long Island Jewish Medical Center",
  location: [40.75745194708609, -73.70613958523157
  ]},
  {name: "Northern Westchester Hospital",
  location: [41.19698704629303, -73.7259410049913
  ]},
  {name: "Stony Brook University Hospital",
  location: [40.90961960346939, -73.11542868966049
  ]},
  {name: "Nathan Littauer Hospital",
  location: [43.07162694487057, -74.3317253453924
  ]},
  {name: "Ellenville Regional Hospital",
  location: [41.73319289991072, -74.37934284544859
  ]},
  {name: "Claxton-Hepburn Medical Center",
  location: [44.696435054108406, -75.49957485743825
  ]},
  {name: "Memorial Hospital for Cancer and Allied Diseases",
  location: [40.76435499229881, -73.95622957432384
  ]},
  {name: "Mount Sinai South Nassau",
  location: [40.65316762065191, -73.6297498319996
  ]},
  {name: "Richmond University Medical Center",
  location: [40.64634824442629, -74.1031849542538
  ]},
  {name: "David H. Koch Center For Cancer Care",
  location: [40.76734053638006, -73.95117356268003
  ]},
  {name: "Wyoming County Community Hospital",
  location: [42.75448306306213, -78.13096124540584
  ]},
  {name: "UPSTATE University Hospital at Community General",
  location: [43.00757850286965, -76.16973540306637
  ]},
  {name: "Brooks-TLC Hospital System, Inc.",
  location: [42.48017036207083, -79.33459808774614
  ]},
  {name: "Eastern Niagara Hospital - Lockport Division",
  location: [43.178681997490585, -78.67132328264529
  ]},
  {name: "Adirondack Medical Center-Saranac Lake Site",
  location: [44.345070921959, -74.14329762705107
  ]},
  {name: "Olean General Hospital",
  location: [42.0902477302118, -78.42728105892684
  ]},
  {name: "St Johns Episcopal Hospital So Shore",
  location: [40.62365704615748, -73.74779696274491
  ]},
  {name: "University Hospital SUNY Health Science Center",
  location: [43.196762375549035, -76.13733369089009
  ]},
  {name: "Saratoga Hospital",
  location: [43.08639398197591, -73.79771143374799
  ]},
  {name: "Rome Memorial Hospital, Inc",
  location: [43.23002847859821, -75.44313761794226
  ]},
  {name: "Lewis County General Hospital",
  location: [43.79642104178174, -75.49891030118302
  ]},
  {name: "St. James Hospital",
  location: [42.86560993968281, -77.51120259332674
  ]},
  {name: "Bertrand Chaffee Hospital",
  location: [42.50938095915859, -78.65910903377245
  ]},
  {name: "SBH Health System",
  location: [40.85298039708139, -73.89143793199146
  ]},
  {name: "Wyckoff Heights Medical Center",
  location: [40.70444998856833, -73.9173544669287
  ]},
  {name: "St. Francis Hospital & Heart Center",
  location: [40.804431394252774, -73.67044167432228
  ]},
  {name: "Carthage Area Hospital Inc",
  location: [43.98724478062301, -75.59411077603797
  ]},
  {name: "Ellis Hospital - Bellevue Womans Care Center Division",
  location: [42.79282984995273, -73.8789304588973
  ]},
  {name: "Good Samaritan Hospital Medical Center",
  location: [41.85573596235053, -73.97388893139565
  ]},
  {name: "Millard Fillmore Suburban Hospital",
  location: [42.99666151269333, -78.73066395861127
  ]},
  {name: "Buffalo General Medical Center",
  location: [42.90084024116725, -78.86606098772836
  ]},
  {name: "John R. Oishei Childrens Hospital",
  location: [42.90115786558279, -78.86783204355015
  ]},
  {name: "St Catherine of Siena Hospital",
  location: [40.86852063729446, -73.2231986031553
  ]},
  {name: "Nicholas H. Noyes Memorial Hospital",
  location: [42.55254791075501, -77.69779391075686
  ]},
  {name: "Garnet Health Medical Center - Catskills - G. Hermann Site",
  location: [41.74063488687117, -75.04725860127013
  ]},
  {name: "Memorial Hosp of Wm F & Gertrude F Jones A/K/A Jones Memorial Hosp",
  location: [42.1897483146772, -77.96633995887055
  ]},
  {name: "Mercy Hospital",
  location: [40.69318487813853, -73.63154909857298
  ]},
  {name: "St. Joseph Hospital",
  location: [40.9029, -74.1663
  ]},
  {name: "River Hospital, Inc.",
  location: [44.49846178907664, -75.89303780730032
  ]},
  {name: "Brookdale Hospital Medical Center",
  location: [40.65507387874011, -73.91222149182252
  ]},
  {name: "Interfaith Medical Center",
  location: [40.67941328579961, -73.93748773878205
  ]},
  {name: "St. Charles Hospital",
  location: [40.94679603778565, -73.06083427264771
  ]},
  {name: "NewYork-Presbyterian/Hudson Valley Hospital",
  location: [41.292900214911135, -73.89277264564342
  ]},
  {name: "New York Community Hospital of Brooklyn, Inc",
  location: [40.61419304716092, -73.94842070334107
  ]},
  {name: "Medina Memorial Hospital",
  location: [43.22392624749001, -78.39761426090186
  ]},
  {name: "The University of Vermont Health Network - Champlain Valley Physicians Hospital",
  location: [44.7000405607134, -73.46917614976826
  ]},
  {name: "Mount Sinai Hospital - Mount Sinai Hospital of Queens",
  location: [40.768236405949416, -73.92488033216976
  ]},
  {name: "Kingsbrook Jewish Medical Center",
  location: [40.65952827054511, -73.93326506100922
  ]},
  {name: "Cuba Memorial Hospital Inc",
  location: [42.21316482927392, -78.28773910327497
  ]},
  {name: "Calvary Hospital",
  location: [40.85689019177574, -73.84339774205355
  ]},
  {name: "New York-Presbyterian David H. Koch Center",
  location: [40.764847694962896, -73.95589296100498
  ]},
  {name: "HealthAlliance Hospital Marys Avenue Campus",
  location: [41.92082148213121, -74.00001180144241
  ]},
  {name: "The University of Vermont Health Network - Alice Hyde Medical Center",
  location: [44.85726733064621, -74.29166573199542
  ]}
  ];
   



