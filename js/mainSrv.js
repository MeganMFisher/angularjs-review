angular.module('app').service('mainSrv', function() {

    this.animals = [{"id":1,"name":"Goat, mountain","scientificName":"Oreamnos americanus"},
    {"id":2,"name":"Monkey, black spider","scientificName":"Ateles paniscus"},
    {"id":3,"name":"Ibex","scientificName":"Capra ibex"},
    {"id":4,"name":"Cat, european wild","scientificName":"Felis silvestris lybica"},
    {"id":5,"name":"Turkey, common","scientificName":"Meleagris gallopavo"},
    {"id":6,"name":"Cape Barren goose","scientificName":"Cereopsis novaehollandiae"},
    {"id":7,"name":"Sloth, two-toed tree","scientificName":"Choloepus hoffmani"},
    {"id":8,"name":"White-throated toucan","scientificName":"Ramphastos tucanus"},
    {"id":9,"name":"Silver gull","scientificName":"Larus novaehollandiae"},
    {"id":10,"name":"Frilled dragon","scientificName":"Chlamydosaurus kingii"},
    {"id":11,"name":"White-headed vulture","scientificName":"Aegypius occipitalis"},
    {"id":12,"name":"Mouflon","scientificName":"Ovis musimon"},
    {"id":13,"name":"Peccary, collared","scientificName":"Tayassu tajacu"},
    {"id":14,"name":"Asian openbill","scientificName":"Anastomus oscitans"},
    {"id":15,"name":"White-necked raven","scientificName":"Corvus albicollis"},
    {"id":16,"name":"White-mantled colobus","scientificName":"Colobus guerza"},
    {"id":17,"name":"Lemming, collared","scientificName":"Dicrostonyx groenlandicus"},
    {"id":18,"name":"Ox, musk","scientificName":"Ovibos moschatus"},
    {"id":19,"name":"Flicker, field","scientificName":"Colaptes campestroides"},
    {"id":20,"name":"Ostrich","scientificName":"Struthio camelus"},
    {"id":21,"name":"Toucan, red-billed","scientificName":"Ramphastos tucanus"},
    {"id":22,"name":"Oystercatcher, blackish","scientificName":"Haematopus ater"},
    {"id":23,"name":"Squirrel, grey-footed","scientificName":"Paraxerus cepapi"},
    {"id":24,"name":"Jabiru stork","scientificName":"Ephippiorhynchus mycteria"},
    {"id":25,"name":"Bush dog","scientificName":"Speothos vanaticus"},
    {"id":26,"name":"Squirrel, antelope ground","scientificName":"Ammospermophilus nelsoni"},
    {"id":27,"name":"Possum, ring-tailed","scientificName":"Pseudocheirus peregrinus"},
    {"id":28,"name":"Jackal, golden","scientificName":"Canis aureus"},
    {"id":29,"name":"Bustard, kori","scientificName":"Choriotis kori"},
    {"id":30,"name":"Savanna baboon","scientificName":"Papio cynocephalus"},
    {"id":31,"name":"Skunk, western spotted","scientificName":"Spilogale gracilis"},
    {"id":32,"name":"Pine siskin","scientificName":"Carduelis pinus"},
    {"id":33,"name":"Racer, american","scientificName":"Coluber constrictor"},
    {"id":34,"name":"Sociable weaver","scientificName":"Philetairus socius"},
    {"id":35,"name":"Collared lizard","scientificName":"Crotaphytus collaris"},
    {"id":36,"name":"Chacma baboon","scientificName":"Papio ursinus"},
    {"id":37,"name":"Genoveva","scientificName":"Junonia genoveua"},
    {"id":38,"name":"Eastern cottontail rabbit","scientificName":"Sylvilagus floridanus"},
    {"id":39,"name":"Glider, sugar","scientificName":"Petaurus breviceps"},
    {"id":40,"name":"Black-throated butcher bird","scientificName":"Cracticus nigroagularis"},
    {"id":41,"name":"Comb duck","scientificName":"Sarkidornis melanotos"},
    {"id":42,"name":"Nilgai","scientificName":"Boselaphus tragocamelus"},
    {"id":43,"name":"Bear, sloth","scientificName":"Melursus ursinus"},
    {"id":44,"name":"Seal, common","scientificName":"Phoca vitulina"},
    {"id":45,"name":"Little blue penguin","scientificName":"Eudyptula minor"},
    {"id":46,"name":"Campo flicker","scientificName":"Colaptes campestroides"},
    {"id":47,"name":"Common raccoon","scientificName":"Procyon lotor"},
    {"id":48,"name":"Elk, Wapiti","scientificName":"Cervus canadensis"},
    {"id":49,"name":"Hen, sage","scientificName":"Centrocercus urophasianus"},
    {"id":50,"name":"Nubian bee-eater","scientificName":"Merops nubicus"},
    {"id":51,"name":"Tiger cat","scientificName":"Dasyurus maculatus"},
    {"id":52,"name":"Eastern dwarf mongoose","scientificName":"Helogale undulata"},
    {"id":53,"name":"Raven, white-necked","scientificName":"Corvus albicollis"},
    {"id":54,"name":"Blackish oystercatcher","scientificName":"Haematopus ater"},
    {"id":55,"name":"Least chipmunk","scientificName":"Eutamias minimus"},
    {"id":56,"name":"Yellow-rumped siskin","scientificName":"Carduelis uropygialis"},
    {"id":57,"name":"Eagle, pallas's fish","scientificName":"Haliaeetus leucoryphus"},
    {"id":58,"name":"Legaan, Monitor (unidentified)","scientificName":"Varanus sp."},
    {"id":59,"name":"Tern, white-winged black","scientificName":"Chlidonias leucopterus"},
    {"id":60,"name":"Beaver, american","scientificName":"Castor canadensis"},
    {"id":61,"name":"Lesser double-collared sunbird","scientificName":"Nectarinia chalybea"},
    {"id":62,"name":"Flamingo, roseat","scientificName":"Phoenicopterus ruber"},
    {"id":63,"name":"Langur, hanuman","scientificName":"Semnopithecus entellus"},
    {"id":64,"name":"Squirrel, arctic ground","scientificName":"Spermophilus parryii"},
    {"id":65,"name":"Sarus crane","scientificName":"Grus antigone"},
    {"id":66,"name":"White-tailed deer","scientificName":"Odocoilenaus virginianus"},
    {"id":67,"name":"Civet (unidentified)","scientificName":"unavailable"},
    {"id":68,"name":"Cockatoo, long-billed","scientificName":"Cacatua tenuirostris"},
    {"id":69,"name":"Brown lemur","scientificName":"Lemur fulvus"},
    {"id":70,"name":"Brown pelican","scientificName":"Pelecanus occidentalis"},
    {"id":71,"name":"Eagle, crowned","scientificName":"Spizaetus coronatus"},
    {"id":72,"name":"Common raccoon","scientificName":"Procyon lotor"},
    {"id":73,"name":"Crested porcupine","scientificName":"Hystrix cristata"},
    {"id":74,"name":"Cattle egret","scientificName":"Bubulcus ibis"},
    {"id":75,"name":"Common brushtail possum","scientificName":"Trichosurus vulpecula"},
    {"id":76,"name":"Red phalarope","scientificName":"Phalaropus fulicarius"},
    {"id":77,"name":"Ring dove","scientificName":"Columba palumbus"},
    {"id":78,"name":"Roadrunner, greater","scientificName":"Geococcyx californianus"},
    {"id":79,"name":"Trotter, lily","scientificName":"Actophilornis africanus"},
    {"id":80,"name":"Southern brown bandicoot","scientificName":"Isoodon obesulus"},
    {"id":81,"name":"Little blue penguin","scientificName":"Eudyptula minor"},
    {"id":82,"name":"Capuchin, weeper","scientificName":"Cebus nigrivittatus"},
    {"id":83,"name":"Bateleur eagle","scientificName":"Terathopius ecaudatus"},
    {"id":84,"name":"Monkey, rhesus","scientificName":"Macaca mulatta"},
    {"id":85,"name":"Brush-tailed phascogale","scientificName":"Phascogale tapoatafa"},
    {"id":86,"name":"Lemming, arctic","scientificName":"Dicrostonyx groenlandicus"},
    {"id":87,"name":"Waved albatross","scientificName":"Diomedea irrorata"},
    {"id":88,"name":"Plover, three-banded","scientificName":"Charadrius tricollaris"},
    {"id":89,"name":"Fox, asian red","scientificName":"Vulpes vulpes"},
    {"id":90,"name":"Skink, african","scientificName":"Mabuya spilogaster"},
    {"id":91,"name":"Common boubou shrike","scientificName":"Laniarius ferrugineus"},
    {"id":92,"name":"Wild water buffalo","scientificName":"Bubalus arnee"},
    {"id":93,"name":"South American puma","scientificName":"Felis concolor"},
    {"id":94,"name":"Sidewinder","scientificName":"Crotalus cerastes"},
    {"id":95,"name":"Emu","scientificName":"Dromaeus novaehollandiae"},
    {"id":96,"name":"Emu","scientificName":"Dromaeus novaehollandiae"},
    {"id":97,"name":"Russian dragonfly","scientificName":"Libellula quadrimaculata"},
    {"id":98,"name":"Eagle, white-bellied sea","scientificName":"Haliaetus leucogaster"},
    {"id":99,"name":"Grant's gazelle","scientificName":"Gazella granti"},
    {"id":100,"name":"Glider, squirrel","scientificName":"Petaurus norfolcensis"}]
})