'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0977f0b0b6ad3cb04fd8b99ea0a27c87",
".git/logs/refs/heads/main": "cc79e7a3e37261be77ecf6cc5a105163",
".git/logs/refs/remotes/origin/main": "cb04469a52b7e12525bb3fef8ac643a3",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/index": "a8519ad88b7e352de31589ab8b179089",
".git/config": "a4d5f95e7f796764839cb34e08fb7e5b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/heads/main": "e30f7f7e433d9c892f2092432f88ec1c",
".git/refs/remotes/origin/main": "e30f7f7e433d9c892f2092432f88ec1c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "6c5c9baefe62fed37fbe6762588d4f15",
".git/objects/90/c6b23cc8bcb519af38d3c9fe6987b069d5456c": "80a66dbd54eb5f228d3e55e839c9bc0f",
".git/objects/76/4708fa15f88eaf1f8c31c3fcd06666fedb5688": "5dbadb4b290eacb457dc1dcf48b0a004",
".git/objects/8c/99d67288d7f98ae50e8b1e91af888edf54a8d9": "44d1de9b4724e0f0c575d933ab7da073",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/f5/240b817ddec0094940fac8dc782704e12349a5": "e68eeb6b3908c194b3e1c61b9d0e89be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5d/333d3fc98f6bfce6c73773717b87c615fe7d3e": "48336892caf8eee439ab4b343d76f76c",
".git/objects/42/c662bc443fe1d5367049c854abbce991cb84da": "31971b967105af912cafccfa4f82fabb",
".git/objects/42/641261d49baf13dffae2a77c9cb879a3d88b75": "b94db320ab820af9fb615654200359fe",
".git/objects/02/cb6bf486d56004d5335c2cd39dcb82c8457491": "e7b0cd7ad79aea82b7dacc44747abb1c",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/fb/5fa3ad773d2ed4d7f0ef4c473efb55830deb13": "12f86ff0286c1a9116791b7b4f7643fc",
".git/objects/61/862230829f1d58b2db2e8df52f4aa4f8f28923": "6c23249296c6c4afcdbc182fda9a5449",
".git/objects/ad/72d118f40388dbf11c86f303a4e2c085fe2df7": "e98ae2fdd45df122a343b1ee45564db2",
".git/objects/72/a1c55601d0408ae3d15f18a97bb2290d4fa117": "151ebd9553eb4d7429028c3a7958dd43",
".git/objects/6b/1d68995cc2f8241ea08495190af10b27448ed9": "742f4523339c074f8984079e4ab31f11",
".git/objects/89/c7e37cd78117ebe22138401d90ef5c8bdee863": "945ae0ae3594ad870ed5ecec01f7f938",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/4e/85aca1710f5b8b5c4a644e2b26f686274a59be": "e863424a0ae662a136b03edccae59952",
".git/objects/81/797bf541c6af5100027bfbf5c109cb2a15da34": "a3e61ae1ba2a8c55f5f48eda572cb7fd",
".git/objects/5c/30ba55973955bb7624c94a9f1e483a4d7a5275": "ee43ea35b39ce5c44ae834ac5c4cce95",
".git/objects/b1/f46313024f9c3318911444016d37d02eb9f3b9": "a46b9b5e04d5ffd032d08a9b2062e6cc",
".git/objects/f3/bee6fd6fe186d80af3369a9c9e7ddc02901223": "7a9ab80fd88ca707579990d5a5a3267e",
".git/objects/f4/a0e6c029730463072d85356eda4ad69563f955": "4f2330a6018f0d1b7ca1592aa7e2a5eb",
".git/objects/fc/ee0a377ada99583dd256dcee9d05fa4ecdefb8": "7d761dbd5e2c2ac4f32dc11987f2a201",
".git/objects/f0/464f2059e4b6ea9f09481536c1b891f167b4bd": "98b40c08f1c5417c4a6c8b3c37b30aeb",
".git/objects/f0/d8aebae2c19331fca3863f6eb51352e5069469": "a22866013214a199795cbfe1751d174b",
".git/objects/85/dfbac186904998c9121efe141972f7cc7e9ae5": "4e3808cbc86073f5522f75e5407dca0e",
".git/objects/0f/1ac36155eb193703d8d4f3a30d380f15cb6bfc": "d49f2b46a64fc54a317098002617d21b",
".git/objects/0f/86ec995f3cfa2fb6a80c93684417f67db63139": "c47de21ea984f74cc3c0c286468b0850",
".git/objects/24/1a35fef26b7411aa2e5cfb233dde58c1fcbf51": "fab4bd668784a6eb610aef1f6b63a7b3",
".git/objects/24/4acd18776b25bb1032461cdaf2c2aa431a4054": "091777e612d4fd41881ea1b2821f46f2",
".git/objects/c1/b6a434c7afb7948e7d7fff805704bc15db6c38": "23647f780914160887442125c9aebec2",
".git/objects/db/b44844de1f0c554cded0ce131cf96a6cd3f8e4": "ffb2a155720f574d28053e8a583b4faa",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/cd/6d5dd49d7332a893dfd180a6c871c863a3a7fc": "18095cecb7d26143532bb73cb61779e1",
".git/objects/e4/df985ef1356fe4016cd874ec94d5c253d3924b": "31ea13a9010bc5586e554a4b0a6d6354",
".git/objects/cf/03c0c7984e9d9fa4e872f93684235e14c6b6e6": "16835e7df77ee76e3c7fc0db6e40d964",
".git/objects/cf/e5e58f138c40d334505fa819ff6e55b20d39c5": "91126f1007d9d3fd10dd5c829809e349",
".git/objects/bb/faf9685a24cbb2438e13020a1c73c0bd46ba1a": "13ae6530f43ecb24d06c6503ea39e2d4",
".git/objects/4d/dead36e808d089f59dac82614aa2500ae5f410": "61c6323a117143d3dfbecbcca0e1eb2e",
".git/objects/8d/3be331d36b62399b660fb157cf5c05c91f027d": "7f2ccd75d72411796c033a5d08feb67a",
".git/objects/12/f97d6705bf5d619debeba1ecfd8f4a770ad4b1": "448da0f406444c677c9f452ec46cb2e2",
".git/objects/a5/83cb942e1b5ab7c52ba780914bfc1a405e77af": "0b29c6ffb6ab54646f4a44b67cc1c1c9",
".git/objects/3d/ce4f0e569fb43ff1c831dd1cdfa5926bc597fb": "db5e33a4e300ffa3f956f6a37d1ee39b",
".git/objects/56/664347ce81d6ef46452d85fdfe6c08a6a82715": "e94d2602e69766aa7fd06246cea663ed",
".git/objects/56/41959d65b22e4571f5c51f9a623ea5c00dbb84": "89716a4beb77ad0377f2482493517a51",
".git/objects/16/34caccd1dfe17a6dc818db8ee6ca3f9ec68195": "37109879a043caacc737d6f2ab7ce256",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/70/32c0408de8d4a5733f4170d9c5996d9cc56bcb": "27c9e50890169b0a5774160e0073f25e",
".git/objects/86/252a48426583a8b840145f5ebfe79db3396488": "efd1fd9a9c97fb0b81304d65d6d9e677",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a2/137604e26239534a586ec5748e070b65d65d65": "aee97af16f92dccb5b83c245e4f131f0",
".git/objects/a2/d17e7e62db53ff795bf0d0ffb2a3b2fd4bf8de": "746cbb51879392d4a2c0fa61e0387eb0",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/d9/c5733007e0fbb41d65f3be5e6bef7f54cbe0db": "64bb8463ebbad33e9451d3330a811445",
".git/objects/de/09ffe9f345b4865e5961096a7337bc32fed4d5": "8998b2fb2e85e1d1b1be201346cb585b",
".git/objects/0a/a4242969184f5a43972c5bed2f4012a0bc7ae8": "d45273f68ad22581ce6762d25002e6a6",
".git/objects/c4/e1f6704b1e982d393593780740f8b257366f93": "1a3b54cc7170effbb7cf78b1b1b18b92",
".git/objects/6a/9bcf6de245f60287602ac9a539c572af9c5c4c": "ff27a3b93a0cd08d545cf4e1b918f76b",
".git/objects/41/947be9dca73a04ec2bed31665d6e9493343ac4": "9bcde354b220b2afba6ed8e4b394d1ed",
".git/objects/6e/daf99bf86241ce19fe498af538f946f68a08e8": "e8aa10b539f05f705b64cbee6a3ea774",
".git/objects/1d/4e14e2a9c4cf15ac1d72ebe5750fc5914e463c": "b269ef3cde5d257fd238987fd0db236e",
".git/objects/3b/4c29b45347e4cdfa8fab12d624cb480ba62046": "a8e61fe9f452b0edf255fc8345672bdb",
".git/objects/3b/16c37dcfe05987554a6e7ede3b11145354aafd": "972600945d401f1e3a9736c5e0333e81",
".git/objects/d3/aee347f4f68d853fd42565ff7915aba4bbcf27": "eadd6876697fbfca7766a7e114edb7a7",
".git/objects/9c/e2ca1fd68f288d7be428f7b2e798ba32508691": "e896e0e597d0a6e2bd30ef7386d925f3",
".git/objects/d8/127a5ce4dd7fea28bdf7ade8e142607e293c45": "aec93aef711c9e3d3c92a830affb927c",
".git/objects/c9/7eec8a9300e973d08086fe2e80846019e192f6": "de2bb186783a8e5f7d1c931ef1f4bc40",
"manifest.json": "846f95787ffa97710c92daf923b11c41",
"main.dart.js": "5f5f12ee7d4bb0374876a62924428cb2",
"index.html": "7893c3743c9655d55c8bf7c0813cc8af",
"/": "7893c3743c9655d55c8bf7c0813cc8af",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/AssetManifest.json": "3a8101c65c7fb0fb7dff4f5c8fb22b43",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/cli.png": "3d39b71a7e587d33c141ee52deef96c5",
"assets/assets/images/math.jpg": "b4f7e41313e6b06ec4c76c5ef82f18f5",
"assets/assets/images/flutter.png": "7a48d7c8f2d7f65d904aaa538e7252ca",
"assets/assets/images/sani.PNG": "636df92332186786c93f729a268f603a",
"assets/assets/images/ios.jpg": "09eb980c086475735448ad3070325837",
"assets/assets/images/python_circle.png": "b85d209d9c34e721a8f420175edf1a04",
"assets/assets/images/ihm_mg.png": "52d9dd5dd37af700f11f96a523521323",
"assets/assets/images/aliou.png": "5e512c116ae6feaf4b06b5f5c1fda424",
"assets/assets/images/pds.PNG": "77ec6a8ba702d1b76eb0e1c9248582fb",
"assets/assets/images/designpattern/derollcontainer.png": "4c102413b414d16c5171ffcc81fa42f9",
"assets/assets/images/designpattern/debasniveau.jpg": "173db1311dc60a7582e5d41b92252b7c",
"assets/assets/images/designpattern/desequencejouer.jpg": "670f189a0b2a05ca895aa2cdb5d4757f",
"assets/assets/images/designpattern/desequencescore.jpg": "c84ac3188d7f406cd0fa982adcccd75b",
"assets/assets/images/designpattern/deactivitescore.png": "eabe24bf129f577782503b1ae848d2f0",
"assets/assets/images/designpattern/deusecase.png": "a6c493ef82e3ad62b3a506322d92a87b",
"assets/assets/images/designpattern/decodedeview.png": "2ddcda0d092f240158aad7b9231c6d77",
"assets/assets/images/designpattern/dehautniveau.png": "5abfa78ccce704da9e636fe63c4e2704",
"assets/assets/images/designpattern/defactory.png": "f17c1729868b18531d23ac179612980f",
"assets/assets/images/designpattern/decodede.png": "0c494efd8fef8581296a06092c3eb775",
"assets/assets/images/designpattern/depagecontainer.png": "50a44a54b0149bfc7bdf60534d3836d1",
"assets/assets/images/designpattern/desingleton.png": "6a115e5b4df54ccf1a168077fa95f19e",
"assets/assets/images/designpattern/depagemain.png": "ba60b4d9f1a21dad9ac810e869019ddb",
"assets/assets/images/designpattern/deactivitejouer.png": "8e66b558f0157cfe5706d66125f3efe2",
"assets/assets/images/designpattern/deobserver.png": "840c69b0f5737ff187c3a69ed3e8fdde",
"assets/assets/images/javaa.png": "c53162d2770d046c57f66e060440a02d",
"assets/assets/images/dart.png": "d01ff86bf66d8eb56972646646c964d8",
"assets/assets/images/clusterisation.png": "2d9cbd9ada5bc9d321eee34eb370beda",
"assets/assets/images/ios.png": "ff50a25509093a3cc728ab0a5721ea41",
"assets/assets/images/clustering.jpg": "5c865bc5e0c0f028af9fd528d3b68427",
"assets/assets/images/clustering.PNG": "8ab2d3c14b4e451a5b62c321fa88a4ed",
"assets/assets/images/scrapper.png": "4c9c47f70898cba3b89a5dbbf7f01840",
"assets/assets/images/facebook.png": "1c131dbd08b8636ada8dbd9758b57ddb",
"assets/assets/images/python.png": "64aeac68d191109b6041934d98b8847c",
"assets/assets/images/linkedIn.png": "539e826d2e9efd907a4a487e3fd4c27a",
"assets/assets/images/javascript.png": "1a756eb6ca471177cdbd231745af5885",
"assets/assets/images/java.png": "8f7e4cc176298fd0724a1fe3b1c3f18e",
"assets/assets/images/github.png": "b17444f181dfac9004b1138776afc162",
"assets/assets/images/patate.png": "64aec03072e3b9202a7858562d94f09b",
"assets/assets/images/orange.png": "faa3d8a475e81ec23e83dcb40c5f38ca",
"assets/assets/images/backend.png": "0ebc182c1d9edd588d260e8a19d50f42",
"assets/assets/images/talend.png": "92ec5447fba07bb6902f4af2699bcbed",
"assets/assets/images/djate.PNG": "78aa3b85b6a694e043afc28da83383ec",
"assets/assets/images/wallet.PNG": "61718aca136ba4951bd9d49c64793790",
"assets/assets/images/nima.PNG": "5ad99368d3270ef7b3c7ee05c4b65d2f",
"assets/assets/images/clusturisation.png": "cb994b8a2d926903d058f5623e4fdb43",
"assets/assets/images/aliou.jpg": "f1c1394658b1a280ec13d7c8f75a8cd7",
"assets/assets/images/csshtml.png": "8c7b3503a47f109fa9907f12e6f3aed6",
"assets/assets/images/pds/pdsprofil.png": "eafbe4f731acc110eadaf370aed2f275",
"assets/assets/images/pds/pdsaccueil.png": "dda8bc8fe444b87f50df2edbff084e07",
"assets/assets/images/pds/pdscreationcompte.png": "9a4478c869638c7bfd33d1cca3bd21b3",
"assets/assets/images/pds/samamoney.png": "4bfd063b18cb20380ff8be05418b5288",
"assets/assets/images/pds/pdsparametre.png": "a855a2c9ce99653cda8f8ea535ae0c98",
"assets/assets/images/pds/pdsdetailcompte.png": "97711b0fe77c99cf377d50e2e7018141",
"assets/assets/images/pds/orangemoney.png": "d0c17b2e20f6ca503180ced5d651f070",
"assets/assets/images/pds/wave.png": "9744ed76f92b9e9f63231be8b732b787",
"assets/assets/images/pds/pdsrechercher.png": "d7836c05ad2b2771c5e761fc24c8f906",
"assets/assets/images/java_circle.png": "cb18683cd0bb39f5ea863c4fe9ee2b2c",
"assets/assets/images/powerbi.png": "041c02d2dd14eecee5a078977fcf5993",
"assets/assets/images/sql.png": "fd600848f0774ea75d7c8a9370cb77ba",
"assets/assets/images/flutter_circle.png": "59abe6cc666a648c33f9488e53663858",
"assets/assets/images/sani/accueil.JPG": "bdfac40a97d0d3480c229da9ab0f820f",
"assets/assets/images/sani/facturefrite.JPG": "3b3eec3e245600ffe9bc6885218b2abb",
"assets/assets/images/sani/menu.JPG": "3fd5cc292d2755d5592eee3d98d6c883",
"assets/assets/images/sani/validationcommandeincomplet.JPG": "708d41cfcee996fc57a320574350e3ff",
"assets/assets/images/sani/livraison.JPG": "2e7eeda116caad02cc6ef0d920347175",
"assets/assets/images/sani/commandevalider.JPG": "2a28fd452d387d1b8053844cfc6944bd",
"assets/assets/images/sani/livraisondesactiver.JPG": "089bb6703491b7031d1e469c666593db",
"assets/assets/images/sani/facturevide.JPG": "cde8fcfd5ae11b77cd7da2537cf15d52",
"assets/assets/images/scrapper.PNG": "5520e566d653d936585235b8e6b34117",
"assets/assets/images/rittm.PNG": "46361a53fb8fae91f4a1cb2e9cfe5645",
"assets/assets/images/rittm.png": "c1cae639a54479a221162e2e8db78c39",
"assets/assets/images/backend_icon.png": "a9f40c5e289f8a24b377154ee3f61af9",
"assets/assets/images/blockchain.jpg": "10063f2f45f6db231bef788f7b99c1d5",
"assets/assets/images/web.jpeg": "56db86f80a2b6768be1d6f211bd949b4",
"assets/assets/images/math.jpeg": "ed2f0ec4814b8bcca2584296cc046261",
"assets/assets/images/designpattern.PNG": "6bd1bb0653539463351d558406e5bd22",
"assets/assets/images/html.png": "d909e2bb0c03387bd5bdbf0f0a3c2861",
"assets/assets/images/clustering/TCPIBk8.png": "ba21ec78e50902d63890f589a3bd35fb",
"assets/assets/images/clustering/superficiek8.png": "8bce40554c033ad4328d7b677da7a6b5",
"assets/assets/images/clustering/densitepopulation_interpretation.png": "e74f9b0e530b13b4b8603f7ffd354a21",
"assets/assets/images/clustering/superficiek4.png": "6cdd455024caf54ec52d422081ed6063",
"assets/assets/images/clustering/TCPIBk6.png": "47f61261015969ae2c812175ca0df7a2",
"assets/assets/images/clustering/donnees.png": "0e6f09843238ca0666535911a5cab22d",
"assets/assets/images/clustering/densitepopulationk6.png": "d17195d33786a34f346920799003b05a",
"assets/assets/images/clustering/boitemoustache.png": "dd964ad197ab778590ee9ebffe7c9485",
"assets/assets/images/clustering/TCPIBk10.png": "b85f6448a78022271857512c90e46125",
"assets/assets/images/clustering/TCPIB_orange.png": "b03b31a0d3ebb2b3f2987a766aba3c2e",
"assets/assets/images/clustering/pibk10.png": "cd4666dc76c98748c3fc05cf916f35bb",
"assets/assets/images/clustering/population_frequence.png": "668fb3c9a478cf8385f0037bdfbaa5f1",
"assets/assets/images/clustering/populationk4.png": "f515c69e9a07c81c0f1aac3b0386bd74",
"assets/assets/images/clustering/pibhabitant_orange.png": "f9b3bb3a95f882495e7ee88ce99543eb",
"assets/assets/images/clustering/clusterisationglk8.png": "d704d6fcde9d3792676fc7ad62f5b269",
"assets/assets/images/clustering/populationk8.png": "04e45dda72797a4396c4a38b5c8c70c0",
"assets/assets/images/clustering/densitepopulation_orange.png": "b2ffaa3f99b951c858fefc9c57e0cd6e",
"assets/assets/images/clustering/pibk4.png": "53d173137979606b004850bf6e3216d5",
"assets/assets/images/clustering/pibhabitantk10.png": "2b41850a181be5b18aa13ade9eca1644",
"assets/assets/images/clustering/pibhabitantk8.png": "f2bfdb9242cfbab24c9b0f24dc1a582d",
"assets/assets/images/clustering/population_distribution.png": "123226fdb9a89eafd8a940855ee3361f",
"assets/assets/images/clustering/clusterisationgl_orange.png": "0c48a2d52efa1508db26ea583821bf95",
"assets/assets/images/clustering/clusterisationglk10.png": "1fafd72378a9654524df61985f9bf27f",
"assets/assets/images/clustering/superficiek10.png": "d265faa5e8067d2dacbdc3b339c5aca5",
"assets/assets/images/clustering/population_orange.png": "78e512d22595da4790c441c3f501c8f2",
"assets/assets/images/clustering/populationk10.png": "7ef5d4732bdb4a6711e2f7d741b235fb",
"assets/assets/images/clustering/clusterisationglk4.png": "4f32055744cea3902e0587d1af9dba65",
"assets/assets/images/clustering/populationk6.png": "1007e6dcf3d33596e0613fb778e7792b",
"assets/assets/images/clustering/superficiek6.png": "be9dd597d867146d91a5a610a0763297",
"assets/assets/images/clustering/TCPIBk4.png": "e38eba294e9d388016067424b2df328a",
"assets/assets/images/clustering/densitepopulationk10.png": "1c4e8ea372ef38da9a69f290f6c9faff",
"assets/assets/images/clustering/densitepopulationk8.png": "d61b4d4951b038122f68dd6cf34837dd",
"assets/assets/images/clustering/pibk8.png": "c2e3a6a8a13c24ae04a57337b122717b",
"assets/assets/images/clustering/clusterisationglk6.png": "6506c5d4e9a10ebe6332d93532bd7f72",
"assets/assets/images/clustering/pibk6.png": "b150ffc434462b23bf4bf0f5be923883",
"assets/assets/images/clustering/pib_orange.png": "c4a858c32a80d9cbb9e4640b0379190d",
"assets/assets/images/clustering/superficie_orange.png": "56f112ca2816221b0b718ab929d5dc5d",
"assets/assets/images/clustering/pibhabitantk4.png": "4f42da99bdb20cb6b6d2b732efe06202",
"assets/assets/images/clustering/pibhabitantk6.png": "60b381caf22057ec6d82126ee87daeda",
"assets/assets/images/clustering/densitepopulationk4.png": "b4cf5b5946d4ade972e87cf2350cabb0",
"assets/assets/images/aliou.PNG": "30ae3d624f8f52ddf930c5dd4d5676a5",
"assets/assets/images/brain.png": "d13f4ca8cd9e443354ad19f0e2cb2e9d",
"assets/assets/images/jee.png": "7b7d8dae25b16a99b18fa5a34cffbaf6",
"assets/assets/images/scrapper/jumia_robot.png": "db8aa9bb03d07f299188877e3c2a27d4",
"assets/assets/images/scrapper/scrappingfromlast.png": "7e600dda3f02ffa09443676d97a75471",
"assets/assets/images/scrapper/redis.png": "203d3a65a6032214a2f010cfb4d98c23",
"assets/assets/images/scrapper/dom.png": "0020294a5c9ebf8bb2fb99bc3e4c2eef",
"assets/assets/images/scrapper/conceptionscrapper.png": "9a79e05d7ad3cc1a5d8a5ffa1f497be3",
"assets/assets/images/scrapper/marjanehtmldom.png": "e028c74a7035dc7e2b2525d948f64698",
"assets/assets/images/scrapper/celery.png": "620bad416205eafedf657ba8aaa128b1",
"assets/assets/images/scrapper/scrappersnippetstockage.png": "b13843b93a2ce517d1fcb90ac34384d0",
"assets/assets/images/scrapper/marjanelastsnippet.png": "7c0691928758128e7ca6ca50889ef54e",
"assets/assets/images/scrapper/marjanesecondsnippet.png": "68eed59f1f37c3b9f65433a69e56aa9c",
"assets/assets/images/scrapper/selenium.png": "7926979333ab54ee5968fe04fea399a4",
"assets/assets/images/scrapper/marjanesnippet.png": "315745d282d78f82e824ae0b3399f13e",
"assets/assets/images/scrapper/executionscrapper.png": "c74bac4b94cf1cc3a71efc4f2c51aa17",
"assets/assets/images/scrapper/marjanerobot.png": "aa8dde1d0537a2b40737181273446cab",
"assets/assets/images/scrapper/marjanedb.png": "6de2bde013288405bfb0f5e3181a3d93",
"assets/assets/images/scrapper/xpath.png": "2900e18666cd2d11fe1dd42a5bf73071",
"assets/assets/images/scrapper/marjaneaccueil.png": "0930fc544bea6f0fad2f7177bff1eb03",
"assets/assets/images/scrapper/phaino.png": "eb980459351477c949e5201a07f1a07b",
"assets/assets/images/scrapper/appelscrapper.png": "1c171d5c587f12c7274b12a3e0cdce8e",
"assets/assets/images/css.png": "efee652a34f601fdf44e84e8de59a4b3",
"assets/assets/images/math_enfant/djateaccueil.png": "06b201fd2c70c05caf99bdd688736af4",
"assets/assets/images/math_enfant/djatefelicitation.png": "596e63d7c9500f2f1d350cd4c2eafae0",
"assets/assets/images/math_enfant/djateordrefalse.png": "3a0da338b969e7675ee7e2ee721e2a15",
"assets/assets/images/math_enfant/djateordrecroissant.png": "4c30e51e1581802ef55cbc158ad2c716",
"assets/assets/images/math_enfant/djatecalcul.png": "c07fbef53abd9130dd8f5f554da9ae44",
"assets/assets/images/math_enfant/djateordrecorrect.png": "388a6dff6e65602cd8c7e479ffc95858",
"assets/assets/images/android.jpg": "a9c6c505208fb490ab56bfb288f1a34b",
"assets/assets/images/scrapper.jpg": "5bdeb98e8bf6ca492ede09a9560ad337",
"assets/assets/images/nima/nimaetudeexistant.png": "f84353818f6a90b834e29ffed06cefb1",
"assets/assets/images/nima/nimabpm.png": "d321bafc6322f8f560d3d57cb051bea6",
"assets/assets/images/nima/nimausecase1.png": "48da95f21ce39db7f240a9899dbb1c17",
"assets/assets/images/nima/nimaconnection.png": "9db1406f847de46e5cdd0273d9e2c2f8",
"assets/assets/images/nima/nimaajoutclientui.png": "2927773e91edf823224b875d80d551b4",
"assets/assets/images/nima/nimaajoutclient.png": "ea74a4eaec0a4c1303003d4c1d31ed40",
"assets/assets/images/nima/nimaaddcommande.png": "3b8e98083e88b6f3ce55c4fa4100f230",
"assets/assets/images/nima/nimausecase2.png": "8a29e09d22fd21f2093c1e44833648a0",
"assets/assets/images/nima/NimaOverview.png": "947b1b8f65dbf169643c188259d144e2",
"assets/assets/images/nima/Nimacommandes.png": "7ca08f2a9a978880b69a9261b50d12ca",
"assets/assets/images/nima/nimaclasse1.png": "69f285ffa2a4710adecfbe590a51ee80",
"assets/assets/images/nima/nimausecase3.png": "a0de36cf75a625f8c0485a852becdce2",
"assets/assets/images/nima/nimaclasse2.png": "48471874be628de002be6f5bf8ef5e74",
"assets/assets/images/nima/nimasequenceinscrire.png": "08cf38ab164c1addb3e531770446f18a",
"assets/assets/images/nima/nimaajoutcommande.png": "4b726b8467941e2f49b9a42eb2637431",
"assets/assets/images/nima/nimainscriptionui.png": "cd0a7fea8c5494cc554dfad5fe4efb21",
"assets/assets/images/logo.png": "3bfbb92357254ae0bd4ffa8a4dcd392a",
"assets/assets/markdowns/pds.md": "0216d32a88d6c0b55c26980fdf7ccae9",
"assets/assets/markdowns/nima.md": "2869e94872121447ff225a32598c5e2f",
"assets/assets/markdowns/sani.md": "1841d1079688140b210668497ca1e9db",
"assets/assets/markdowns/math_enfant.md": "643264111d2d9f983ca7ee6b82000bfa",
"assets/assets/markdowns/clustering.md": "88008be6ccf1029fed06a27cea742548",
"assets/assets/markdowns/designpattern.md": "f114dcf051acbe1cfb6dbc1de869820f",
"assets/assets/markdowns/scrapper.md": "5d6eb6ffc4a71b5b876aabcf68174d78",
"assets/NOTICES": "c6752a0d9ec41fa943f90f6718baf554",
"icons/icon-192.png": "10cb611203171b17d7a112813f8e4260",
"icons/icon-512.png": "be0be3ac9d719bed147c786242ebef4d",
"README.md": "e763eef9eb59a86b6d19a86296eddffb",
"favicon.ico": "f55fc14a5aacfc43e10d62eae5df16a6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
