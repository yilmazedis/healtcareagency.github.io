'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "77a44009d9a2ea7f3b15509c739676c2",
"version.json": "9a0946be2bb6b2ac4d42af9d83cbd2b2",
"index.html": "c6aa9cc83365a73c0d65e0ad0d8e4565",
"/": "c6aa9cc83365a73c0d65e0ad0d8e4565",
"main.dart.js": "3c0402b2fc84542a706adbf420c94960",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.wasm.map": "265a6d3fd8fb820cc6523ad9045a0950",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "dbeedb297511dbcc1579c7ea2971c73d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ba3b60694edbaec5a0d42e5a124bcafe",
"main.dart.wasm": "69417e8a48e20bb54bb76a4671c54ffe",
".git/config": "6e9f73fdc68bf72bb4b23ebffd540465",
".git/objects/0d/253845bef86d393a5f4b46e95f023eab800548": "7dd0c3c7bc702907847fa02f82884ef7",
".git/objects/95/e161b1b8bafd17591636ce88b3696af4c4f8ac": "d8a75df5561d2a7a7e576be2730ca9da",
".git/objects/95/890234552565db32c23330dac8f9a9ba07a217": "73f8709795c4ce29c3ade5585f8b93a3",
".git/objects/92/cbc99d3225baf334039f2cdfec09c025cfd513": "e902188cabf542e8ec8139f4648a4b48",
".git/objects/0c/712e0927b1153b971c7b9bafa93144d5a803ce": "0da438ea96e7f2de927d17573903c88e",
".git/objects/3e/70e93cd7e3b43d02ae997dcbed1fb3aaa690d3": "f8b94900a39ae4a8a4408a70f5893380",
".git/objects/68/7803cff40752ac784088e901f9282b0f7e344f": "14c4ace35bafaee89afdc7fdaa28b6be",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/e220702df1618796725cd1269e8d9624aca8c3": "9fc2eb830a160b2595c495dad82e0880",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/6f/3a23fba7a0a8dd0d650da0c09b72a41c84b585": "d80cd00e268ae2e309c1b279997eecf2",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/6a/410d0fba7ac34add7ed39dfde51e08d90cf8c3": "bececa3e80a08d9cb86b56e6bb2cd9da",
".git/objects/32/feccc1a8f9c46be39d341cf70e39d5ba17d0a2": "a4a36d70126a9612b5b803b3bd9635aa",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/56/3b6bd9c2fdc9dfe3795480d4ae298f75546827": "718507a01dcd3c50337864217fc92680",
".git/objects/51/b4304626e3ddff2fffbb4587f588acafdd91f4": "8908236ff310b48046fab1a325236333",
".git/objects/51/ed7f977f590c78049651a0e3b856daf89069b4": "be9abcbc3c171ad1f458433e2917423c",
".git/objects/3d/4d97a99d7e6d8ef5189b3f36c4083b5a698160": "b3af2871ac4346ab086e461e1ab81d27",
".git/objects/93/c356b2e76ee144382a57f2ea19c61de0965380": "4be9d46dc63d18a32b20b5b63b93fa24",
".git/objects/94/18b25a1d35fce8b965d72bb4f1c76479cbd0fb": "a480bba5908b20d47db4646977b6f7bf",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/e60c60278d09dc9469ec719ca5872482167b38": "e35ab870571ef9cb88c9b930a75a616c",
".git/objects/33/de8a789e280bd32e0c05d10924991dcececbcd": "6f4a223dc005723e1b0bc88a0b2efc71",
".git/objects/05/4bc7bbefa1a1e78917d69dde5027abe305983a": "ea04be95f7b2e291b8b6abc1dc99ae41",
".git/objects/02/722b36606f6def75130a83c32c8af12a71367d": "91a93771bce300a3390e45a8b65ecd66",
".git/objects/b2/d6414cf30eb4306a66f4325310128bff7b98d9": "13b43f6b389179e56a9f978ef6221d23",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b3/21a2ac753cc073969483ebaa5bb0ff6eb1d1a8": "decb930b7b318cf92ac1bb30bcceed37",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/e0a7fbef047a25de01374f98b6b39844d70648": "62ff132af979a2b1300cb31adc65449f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/4c3b062daa41181e9856459cc603bbdba6b59d": "6c777b4add82e18880728b51b727bdba",
".git/objects/d8/1e17c132c54d293f517343c4390072678247c0": "152fee243f454c8828725891da388cab",
".git/objects/ab/58556c5bf14e931ffa72a60567da5a6fb465eb": "45772619da115cd2a8f37d614bcb95e6",
".git/objects/e2/5599f36339e986716efad0baacd7dbdfff3eda": "0a3f0c29494ff7cfca221bbc094161e4",
".git/objects/e2/a4f5e4782eebfca18c2ba91d705c4d2550ced5": "58ffb32a225b337434408bacb08af93f",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/386c94ef5ade879b20a4189781e2d9496356e6": "4f974a44b8efcdaa1500cedeff735c60",
".git/objects/c7/3581e8d967a531027ce21af27cc73af3e1e0d4": "423cfabee1781ce4c5a0d3e92857b6ce",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/c8/04954b8d696b04774ac06d22fe056ee6a9a463": "af15973166703296fbfb2c1b661adccb",
".git/objects/29/717931ccf1f7dd84d75ed1ac94f25fb5ab0fc4": "4df53506b1e26219bef6dbba2c366eb1",
".git/objects/29/de2092ea36621f3831eb92796934936cb22641": "46775b060d6fcb7c1d375e6e86b3d38d",
".git/objects/29/43eb8f1232f1cda651a270f18eed0efb8aa3b6": "e1bb04df6a4c70df296258357eae1191",
".git/objects/16/2e6869a0a814fcb808f8425f90017aa2a8cc8d": "22b1d260fc43c2264c38936358dc1cec",
".git/objects/73/f85af36b799f75c7cb584ba8ca9044e86465c0": "01e28f0b2b233321cc45fbe153d67f70",
".git/objects/73/dceb1b957442a389d4bb5bd5017094bb944e7c": "2d34f0bc99d0171ea67dc9983127e0a4",
".git/objects/73/dd9d0776be4dac55c483ec6d25a8a09d8f2830": "8cacf0e231124585662809e3b66fd45a",
".git/objects/87/ea0d440f60bbf9715ed51bc7c74d79785108bd": "50740706c99f606ab1d25e93730ece83",
".git/objects/74/d084328cdc2c8e1ab7896f7a7fa38e15927a96": "d03db20815d12e26a8bc39a7aa3212e8",
".git/objects/28/b79715768cfca463d88103581e6e52a9a89118": "e94395d8a4b1c23f89c27dd2248365a6",
".git/objects/17/912a61d927415018eb84e78b38dd955fe6e836": "78082ef2f0bf112e063325f931290377",
".git/objects/7b/9801c280642d1d69a790b183d051ea1f20faee": "87013758f2f96f866f7cf5deff6073de",
".git/objects/7b/a8fbfc95b2c616f948b0853d2b5970a366542a": "18936c7e6435543c5ef8bebf2bf86cf3",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/552bc02f8dbe156e2ed43c96f6b49e30d22d6a": "608d1a7e934a27a2842b06ec11caeae9",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/21/dec20ef1c782aa588ef289677a8d593c7b5bfa": "aca6a55d59a886a3ad029029b703504d",
".git/objects/4d/e2f199b8e9a44a73e5971f33b1c6eb4dcd08b6": "8db9c941e2ab9aab08859f3ac51a276a",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/44/3e3d68ea4b1c0f272b4bfc4b6fd44c4abc2300": "c2bdf9c35fce050c37dca476a85a0048",
".git/objects/2f/2fefaa6370f9f75aa995f814095c871b049f62": "dc7473edd0cbee2a38ea857be60b7030",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/9a/0181c34e763fa4e34c42bd57a2e2a809e209ca": "e72727be5fa5db33d456e61c2060947a",
".git/objects/9a/e54284199a1fc24feafd38bcce3d9299069bf7": "fd2c4574e29aded588908e32e32293cb",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/09/6d059b21ffc5b9e114ef9d9b699935f22ffc68": "1bd72dca169bc8e4f6d0d2a327dacda5",
".git/objects/09/0778d83c66b5d3686ca4a38fd1ec46a6f0cf67": "fde5cfae060ca08bb15539ae6f127a7e",
".git/objects/91/02287f07a4aad5431e72eb4bb09a65c4670c8a": "3da2dd0dba26bd3a5e868f6adf850144",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/54/3ce9b064e1a1fb7ce8dd1c15a85b4dde59a4d1": "ecbd742bbfc039577444b349bf3dc78e",
".git/objects/54/8c3c8c96bb8646763533e6c9a30f89ee0370b6": "6dc37facf3347f345262ead707c5ada2",
".git/objects/5e/fe3c7df965069146df7018d8fa878d7446a505": "1a690b8f327c6a0369380b10570b8f65",
".git/objects/08/a73895fa7481169a87476dfb2dbd9a08d49b05": "2ca5a421252eb419dd5f04fd03b47d5f",
".git/objects/39/6698ee01653ef40bcc809351bd07d3c98c7adf": "c73d57ffa63b1a636a831afb4522804e",
".git/objects/52/a0bd70adf384220d462848e2db183f6c7b7087": "b6b6908d55e84bd10a0971e6b81b1bb6",
".git/objects/55/3373b459f9d416f5df75b07292727ce9400648": "f0d5a25aa924fb69c8f096fcb876bb08",
".git/objects/63/b109bc87cfcc8340d2cde2d12d117845ff2533": "f3dee1d0db680a6f1dd4a2327bdbaac9",
".git/objects/63/c4d549b89a9350a606d204e46bbf05b8aa119b": "44f2b098f271e8d59d74fc4ac6e232ee",
".git/objects/0f/c503801edfdefa3f431417e3366559afcbde9d": "827aa5d9b4682b7b4113180a2c2471aa",
".git/objects/0a/f3ac879afbf1614501f0b2f835a5dd1ccef56e": "382817b2e632015e06d021b1e2b22f02",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/1997a1f7ab301378d9cb7f56bda139dfa1a453": "bb00bfe0f595934e208541b217c405f1",
".git/objects/a0/5b7050f90a697793d8ddb5f9225db86ce18dd7": "757eab9f9e8e69a7c52b3a490ed12776",
".git/objects/a0/06f3eb6b20e7de106fba4f48ba1d6108770166": "5ec34ac0607f0ce459e5bc872222a2f1",
".git/objects/dd/de1ac38f0e09a510141159f21acbb40b41a08a": "42bd6a3f4a9611de16de14a39ac7c76b",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/d5/d8f3ce290225c1aaa1babbad64b4979a4753fa": "a1bcd5794f7ba0d1fa067be13fd88989",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/6d148b347dd23c60a544d5a94073f2a7e8d33a": "790a201575719c09ef303af2acaa0497",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/12a1e539f66d6f98dc5cfa984a0bc54adff954": "9404f6652ce19d5bf4e1bf15358ab661",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/4910a5e312a6b33c74db084b45102acc2a93b6": "30e50f9877b59ee48211afe4d7c82897",
".git/objects/a6/6f29a17834b537280c0ecea978753e28713bfb": "b1bea67c0fde8e5615558cd043bc3ec1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/bbe40fdbe3ca3d5c4c36147fd8c8beed2eec1d": "44592d77260409f11c169febc58be6a9",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/59d4d818dad610e4fa2f0c7d10fa1c5ab1211f": "5c5caa73e8d1e3bc4926fb093c91421c",
".git/objects/c2/a47752de4364511635a10451351ff0c0e35fb1": "3bdd10848aa4482858a6c6bd29ea3f07",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/35e2c9fd018a5451b8c0b858d3e63c80015eae": "775bc90b7a0e9fe22b91a1d9adcb11fd",
".git/objects/f1/cde3ac8caa6327c9d7962668c562c6b24a95fb": "d4ec55e68d9b1be5b7850ab5a2201287",
".git/objects/e7/5f8d1d6f8dced3e3047ada37839227638f4e68": "6bdd0325c8d4088f6200c2cdf16a8f76",
".git/objects/e0/8f67596155a52d6dec1f42e06e4e67b84449f2": "7aaf34c7a61d8b6a97670d0ea208e780",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/21b2d8d3a8166b8bafa21eaa15149d7a6e1632": "f618f1149bbde04e68012b8adf1e50bb",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/70/7383e58317628e77d6275bafd31e83c49406bc": "b8bc0e9c4808a6465e0bd6727c5cb8dc",
".git/objects/1e/419219a28631418e56f05408ca281512122aeb": "9737e2fbabbce1ba67843bc899ba39d9",
".git/objects/84/af6818368656e49c1df89f940ef71ae090f16e": "4d51835b444000fccdaf19d28057a6a5",
".git/objects/24/060a6288f2e91e220101b001ae110f01144630": "7a53108f5fa5bb9327b5c3480b7ba56b",
".git/objects/23/8a95eb032bc31129bb203bd4ece11d9ab8af61": "8575f2cdece11cb019e46353b5219836",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/5917f6aebc86b4e8a7839d1fd4b60017600fe9": "63e10660e350f5ba4b622d99c84af32f",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/5dcdbb363b2f36fa9de8cc2d3c062e18245c1c": "efcc3cc0d255e21eff9ebfdfcd394f31",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/8b/7fcfbb2faa206c7e229cf380efeda1023b8494": "cf25ce66775a44802a527af7756e2dd5",
".git/objects/8b/e6d1ae07ef862e8a5887b51a0b77cdb6abda6c": "ede6e2c6e95d044f6e048a666bf81de0",
".git/objects/8e/96f6715e10be99d1659ae727dabb68efdbcd20": "0cef5e60b24dad7842c222e809aab823",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/25/dcac26a262b5597c569dfd27a1790519de38c7": "2d9a7a24dd23d35ac4470bbb30859f12",
".git/objects/25/32016d60a4ea1dbec23be9d962f8f34a559b31": "7c89b9c0f462144f9de352d2da35e810",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "915cf2b8fcbd5b3175ddbee230dc088b",
".git/logs/refs/heads/main": "757315478eeb4c3b5fb9009a5ffc1803",
".git/logs/refs/remotes/origin/main": "5bfc22bd5636750524d3161e30e006f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d7efc5a55ba1b781c987c0527675498b",
".git/refs/remotes/origin/main": "a1edc5cd791a41e9f0b5b8b630ab0794",
".git/index": "2a33645c3b58409815125faae38ff319",
".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
"assets/AssetManifest.json": "91f1ea0685bd8a589a34347474e1f519",
"assets/NOTICES": "48493789fbdc4cbd1cf00bf4d90ffd7a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "806437441bdb4518675a93779e1e6893",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "62a264b0e9b85a3f2b9adfd45cc050ad",
"assets/fonts/MaterialIcons-Regular.otf": "374a3bc1e2c771028e77abc8a1202eea",
"assets/assets/images/trustpilot_logo.png": "a24cf0c8d1b2403ec1ee6adce34f1d85",
"assets/assets/images/background.jpg": "8302fd9b0994fa1e84fb34908f1749b9",
"assets/assets/images/experiences/Burun-Estetigi-LP-Cover-2.jpg": "4dd96f86472ef88774d8892e9872b745",
"assets/assets/images/experiences/Lamine-Dis-Kaplama-LP-Cover.jpg": "8d94f70cb625af919b628c4c382c9cdc",
"assets/assets/images/experiences/Dis-Implanti-LP-Cover-2.jpg": "97ef5dcb9b16b3b3c6f9bea8eb162eee",
"assets/assets/images/experiences/Eksozom-Sac-Tedavisi-LP-Cover-2.jpg": "99a0540ec8e9dc5a5446af68bb03e32d",
"assets/assets/images/experiences/Sac-Ekimi-LP-Cover-1.jpg": "6da7d6d4708e76e5b97974cb3c23f3aa",
"assets/assets/images/clinics/clinic_4.png": "342acc71b6353e8b35b04cf9937b1400",
"assets/assets/images/clinics/clinic_1.png": "4f5bea87529da09c68598a1e87c7ddfd",
"assets/assets/images/clinics/clinic_3.png": "e1be0cea388fa36519119ad578b05456",
"assets/assets/images/clinics/clinic_2.png": "587804dae10ab8822d0b25cb02e6cbe4",
"assets/assets/images/logo.png": "078a2cb9077d55d75b846620d9e5108e",
"assets/assets/images/google_logo.png": "6ee8140dca63e42b9808e98ea00682b5",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
