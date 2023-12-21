'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "28595e5ecb64b04b63e2b483c29daf35",
".git/config": "6b966a6eab1ea4307f5e60e2372f6062",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7b8cd2b57c9aa036b9c93f308a39bcb0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "27ed90cf658358893b89f700a5e04633",
".git/logs/refs/heads/main": "b64654b73f915e7f6a5486a3d963476c",
".git/logs/refs/remotes/origin/main": "c1e24e38067288a550a2939ca4d683f3",
".git/objects/00/00b08ec41832d6b5834c2304f13691be2eaed4": "52c944892c821cc8aed37642b83f2ee6",
".git/objects/05/ece83de3f82bd671f2b479080a274a4421cc77": "5876e3697c0c35ad260ea77f06b5cae2",
".git/objects/06/4b832de2abe2b17f497a9bcf7844743686346a": "d180023d400f2d6fb53906b5c562e437",
".git/objects/08/088c3318d8b7396d72308338179f99401bce9a": "293395bdf9e402d787623f856361b919",
".git/objects/09/f9719cfa1cc8c2b35081d53caa0d6242d3fa54": "7e0089acc199a7f6486c555c978fd201",
".git/objects/0a/03eb35857387c68fb9f2032be9151105b0be07": "754de72c9eceefed3fd89f3eecb16530",
".git/objects/0b/06adb0b9bf6659215afb8a15f8e80dd7f150b4": "ffe361515db7b2adb459ca32995ec9db",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0c/101ba9905f9084c06e906fb8242637bf7fa8e0": "4fd36ce417ea719429ff78ce4fd35d5b",
".git/objects/0f/0ec0e891ccd4c6ad0884a46eb4314147e3c0c6": "e65606b1170a93bdd809d3ff2e3ea331",
".git/objects/0f/92e3d9ff3adfc826d9c33a30e40b1f1424310f": "4726b96fc89ea7f4b026b8c4f3d69e67",
".git/objects/10/44970204cb78fcaa20f5bc069e99b1b5f00042": "32fc089006ce2619123eb08c63e85891",
".git/objects/11/469f6f23cb92d50fcc7c457d6dc5d5f7815051": "6eaf2abc174cd2eba4930d9ebeb1abf1",
".git/objects/12/3cc0b1019d070e05e9612b14f2581bb8d6a774": "31046425c9f2fa2fee6a598938fbec89",
".git/objects/16/196a4f4b84dba37de801afd4f167267321aaae": "9d50945463e4d3f07b938cd96273ab23",
".git/objects/17/2d03b0784580cf3d41f876cc02d327e2e08050": "a2234128bb14e9426c6ffbfa1fc1be7e",
".git/objects/1b/7d45f2a4f533ec6fb8b79a4a0d2e5afe9d764f": "12d0f79a09882ebe155fa29f3ebf1c3e",
".git/objects/1d/8c2cee9193a74a1942cb5a02f031e97ac2299d": "186de9113af58a3ed508f177e13798e2",
".git/objects/1e/0b15dcb8f3ba3e9fd200ff5e2a61a6019c1e4f": "41225c40f88c50a2f58369e645f89ce5",
".git/objects/1e/1994247cafc8270ae5cdc37ee1ee9c7ec50d5d": "2f52781da5449601fed1b99de107976d",
".git/objects/1f/3faa29c8dd932ddb718ccb23de5d05a93e4f26": "8582526cd8eec08ef86c6301d1bd0a7c",
".git/objects/1f/59632c425f83521643ddd32d4d47dbf77669da": "49b750a7d13f653bd3088c37c956e4f6",
".git/objects/21/64a0001d1f03f3114b44508427b80b4c280c32": "fbb62debc18d753473e7b8cfdc431daf",
".git/objects/24/723124838819d7a8b3a030a7707f70c7bbbd5a": "447d7cd9f53cf0945bb5936e07de4da3",
".git/objects/28/36024841715fc5226d409cd5fcafe17966a31b": "2279a8ab13313b6a65faf4943d633639",
".git/objects/2a/60c530613eaccc795b3006a412159a0d75c26e": "01d923bd5f50532271b54c7339f39010",
".git/objects/2b/05b90ec2283ee23fc6743fd89d199df171e29b": "214f4cff4d5a6399b3d99ada4d4cd46a",
".git/objects/2d/8df0eb3f41c017ab4725cc32bf84854594a6b9": "472a19c436938a3b4a0f750b1a9982e3",
".git/objects/33/479614ad09010999748a336480d39a9dec842b": "dc0fc9dc4db030c278abf774cb3e4575",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/97be8e279440068a7ebbcda7f5ac31ec1fff25": "9277c56b22e3bc9f5a13db73012358d9",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/39/adcd32f8a4dfef51ff91cd01de03d42e693d65": "0625c73ceb8e573c572c202e032d9832",
".git/objects/39/fcd1f66d86538cfc221354ec86101a31401b71": "395bd24cc7c8e2bcac2860d98fbe5d21",
".git/objects/3c/4024f70d375acce0be82694ea26431199fe2f1": "afb463814d97e36bc70c1ea1c8b4784b",
".git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
".git/objects/49/3e26fa9e4382bf45690cc8b121d9d3c671d1f5": "f9de63cb8f9ce4d214e7dc91d1d0fdb7",
".git/objects/4a/2c1e6c907be4522e962c153ca29d4b508b3039": "a3b5a77b2d5904454999bad78ad55d9e",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/4f/7682da53a04f4f1330e824d1b5113a0f9d43eb": "c53cec8d89c7b3e8c07462b187eb1eaa",
".git/objects/52/aefb72f69f358cb8526cc4c62d8465d95cf804": "a4391084f16efd428ae9e7e89f02d771",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/ab241974c07670ca07ff0a23c8ef542b973d48": "0b6619f8d3fc20128cdaaaee6b9dad87",
".git/objects/54/44ab998e8ed0d106bfc0cf02a53f15e340c79e": "684d892fb79acf638ed8ae1dd70930d9",
".git/objects/54/9afb7fa6d2a1b16471cb011535ae86ff9b9217": "1b6454364d353bfa6bcbfc7934b51239",
".git/objects/59/ab1119f82cf2259c64700e3812b007fb0c53f7": "259a3e55c428488d0bfcfaca4bb1d5e8",
".git/objects/5a/e160eb42cf00c47a276dc35f771295c2fbdade": "d4605a9691ff3b24e7f26f840fd5381b",
".git/objects/5b/1feb5dc066485562424a64fa131e0ddc8a4cb3": "67a1575f648dbe58f4af4afb1d6b68ec",
".git/objects/60/b888189f5a9dfd52050fcd2a278f340fdbd57d": "4aa640288eb77a226016ae61a86796d6",
".git/objects/63/db235c4066009da57737fb00632126c335b20a": "07a6c9770e5965509704dc096044af60",
".git/objects/69/c9deaa07c0b84109e7b53a4f95d0a67859c3c3": "395b903286c644aea5127de45d65c96c",
".git/objects/6b/a4eccba8dc1f2380a4b27f9b9573913c77fd85": "fddab3661132acbdb1c74bd631a0fb0e",
".git/objects/6b/a940b2a1e046a3e66e6689870c2f390769f27c": "59186d5789d18d772d532c5a40060510",
".git/objects/71/ca26f2f7461c32873f5533079002a97c770d58": "e0273a8c8afee6c0d1d70f0b6d97c554",
".git/objects/74/95ced019533096517c6d5167c183003d299a4a": "421e0278889ebeecda9fa3f4841737ab",
".git/objects/74/cb24b5d88875b2209fea0394bce2ae0df024f1": "f89bf161654251e24e0faff6720f96be",
".git/objects/76/c54c6bbf21d06629c163be09d3df0473cf05c3": "217304946c1063912342ebef97e830f9",
".git/objects/77/97f7c6a7356b0d451d11a49925df854c22e978": "1aa892ecd25dc2a457249503f1fe6ea8",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/78/5c83b6bc54c3fba246cb3fd72c6b34a8323077": "539f909c0e1ce7a2e3f54ad061c47d62",
".git/objects/82/bb1cf74169e3d1a8bdc71ca7260c6c8f56297a": "60b6fddcd90ef88e37641e25cf7a0aac",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/85/8666db07805076cf9c9fe117606b5dc1e46849": "c201a18330a81199930d5e313bd38de6",
".git/objects/86/ff286d85df060ffdf193fe35787c10e7b29da7": "8ef48ecfa2bae702ba1fa1e8bcf873a4",
".git/objects/8d/55a9af6f4bb61f0ea2ee99ef93cdfad798ea1b": "afdc114f2761487972f408364d95f357",
".git/objects/8d/b48dd4b16402684a63e164b7d47acde2f7ed54": "172f27cc8a83193c435996f52f13356a",
".git/objects/8e/c8edaddfd8d79739a4d5afe1891788653d68c7": "697b672f6d1e79076554ce6e9410c4aa",
".git/objects/8e/f6caedd85d97123276c30a72fcd61e1a18c6dd": "a3fedd8a15bd5e7f8b1fb344a2cfdceb",
".git/objects/8f/19cf1a4107b1d9823871630c8da147a063bf84": "ebafb8bed4bada8b07cbc66c193b26cb",
".git/objects/93/30b4abad3896d7bfa8e7795dd2564d7c0cc4cc": "8b758bd944cff85c0089465ee5a7d4f6",
".git/objects/93/c596cbd7fa6a3eec5fb087c2055003d9ae6a32": "94a605290ee017432e752e1dd025923d",
".git/objects/9c/d6d0ab5cd9e07f334033d2b1a409155903743f": "25926e0675ffa4306b4078c2d611df97",
".git/objects/9f/7419bbd7dbc1dc67f71f83478cd52545da71a4": "ab007da044686cd68bff823289231fae",
".git/objects/9f/c5684b983e0a1d5123d4cdc181824f8226b7c7": "89fc720582b50ad6f7210e7ac97d2433",
".git/objects/a1/77a776b504d87c4bf1c3a0bc20a467d18dd0e3": "0e994da0d427c8879be020ad99eadb04",
".git/objects/a5/67fe6e1339bf632ca94fda5739b8dbf26d3c8f": "67feb594e44470bc26a5e2b3aa628f2d",
".git/objects/a5/ca3cc633129c97515fa6a356f962e6af18e3f0": "57c37b57f1eb7a9f100c887d022f3c99",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/744a9a615d4569648187c1e1ca1700018c8d60": "872edd59bc522f741bde6862577f4a06",
".git/objects/ad/ba15be09afb77004bd306be1342c2aa2549398": "f6aa9efb6f427e7a5b67b073ad4fc483",
".git/objects/ae/8e6099367c62a0ce44c8f546d8f56616acad45": "5dd8d36e27c611903a1b9052f708ca32",
".git/objects/b1/5b843742e02119b6313a971d0652e5eb32dd75": "f019450fb28d6f11f54a0319a0b994a2",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/1ee06a42397dd7b50207dc948254798c8a7dc7": "2e6ecd83437d0cb1febb7cc7421ff9f5",
".git/objects/bc/d73bbf3416d770fb8a80ead8c676584153ccfb": "f767ac7a6e8d94f84c0c19e56149d0f9",
".git/objects/be/097544b6a3af6896670e56d8918d17b1e02801": "96c3542d7caf2781da6025f7057879cf",
".git/objects/c2/289cd5ea6a704fe53927336e337c0ddbec052c": "79364bd74e565bb542010534fc207a7b",
".git/objects/c2/8ffadf49b6750389c0d405ce526bf70eb488aa": "a6701a083ac8c065c186c1099ec53761",
".git/objects/c3/a24565f8d7de7b5f6395d7c020204bbb599b0d": "0330b47a761d30a52164827ba7a1b59e",
".git/objects/c3/ac3b89d07088e76fbdea13f03dc17608bb66a9": "eb7d34fb1b04c4e2ccc640e3e492136d",
".git/objects/c6/3dd9461a92b2cf86b5b1785dfeacc865f090e2": "0b914df858ddc1ae7ffa9769fef41eb6",
".git/objects/c6/a09222388f91b100a4f0dcfe01aa70c81ba0c1": "5f11e9c6c344d32cb9b23f80bbd12df5",
".git/objects/c7/98b922341905eebea1d4645db47c763089f594": "9b5935151d9c52901132240055d42e85",
".git/objects/c8/e7a6cf3e8403a648a0e7fa9a37ada03a5b2655": "0ce9eaee1a68562d5d46c61fcdb3b953",
".git/objects/ca/2ece86039c22e765208649533216d111904185": "c3c039d0ded623d702a7da057b8a0d37",
".git/objects/cc/8758d3d47b838969ee4e41fd9aa76a08291948": "d78210e05500f593dfda8072c81ad417",
".git/objects/cc/ef949ee36f27f231117837df52eda6b5eba18b": "f752fba5f1061d2d61e7e6f1f34c1aaf",
".git/objects/ce/4c86b73f13fec915f1cd699865a117ea501619": "12b59f1f4bee6df59ebd4eef5ecaec2f",
".git/objects/cf/007bf5cce47658fb6b46257583e8ad00176ca8": "1e95508bdb85e8633fc6791cd04c2295",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/dd/9e4f782528cd7450f37eaed8a2883007cf7d74": "db194f8af15a66a3e8d77f9ce2f0959b",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/30b5b1b2fdf1ed29ba3aef7c851de757a0f417": "a04c7033ec9d337dd3f0d0e9aaf23e58",
".git/objects/e6/8d3ea4bd39e52f88e2381b49263aef43b01d27": "b93807b978aa6b3bdca730a5bde67edf",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/c0716932a5b368a9112c8e748f9bb1e0bab538": "4cce3441acc4fa00bf20c0783e7c91bd",
".git/objects/e8/c2e418facf4d654ae9e134d1b93049bf8d12bb": "f037fd7c2bac66b4d6333c6dc5edab15",
".git/objects/e9/c67b7fe0cfbf0933e31609f7864c35b146f01d": "4389339ba76a1934945bc9f862576de0",
".git/objects/eb/1796ab859a798c14149c1ce96ee6227fbc9084": "57a9d0c84265d50eb939d1d2c8dd68d7",
".git/objects/ec/d8e393503531be292070b8109c2ab892f5bfb1": "cf81efbb8dedb5111e350bea7df859b7",
".git/objects/ed/0a1f0a0a8b7da0f5615e18ba05d78a2d1fd335": "6b98c376854b20284146cbadc7c35502",
".git/objects/f7/dc194fa59ed5848639df694633c0ffa1e8eb17": "d280adf1ffacdf3984370e0080320cc1",
".git/objects/fc/06455e8a7695b8ad1a2e1298598e6e6634a629": "06e601445e9b401f51df73ec467dbd93",
".git/objects/fc/4052c915b35ea1a90ade7ed7d7fff640087128": "82fc6928c2172d0de940693afcaa0b88",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/be2b669e6ecb8c52765b8a170b972be1b16d97": "6125ca2485ad8570888ff755a6acc181",
".git/objects/fe/4fdd5f0102dd2efb68a6197698c02552dde223": "6fcddeb029a4121d17be9aec0c2625ec",
".git/objects/ff/e39aa8495341069791f419c6fa6fc7bde07f55": "fc7d4d390ed528145f86f5e6e67823af",
".git/refs/heads/main": "d620a7e323926921ade8596089cb4ff7",
".git/refs/remotes/origin/main": "d620a7e323926921ade8596089cb4ff7",
"assets/AssetManifest.bin": "dd85f34b66f8a9146c0358017a0f9712",
"assets/AssetManifest.json": "d8e8d7e1af1c8cd35f30aecc700cfa4f",
"assets/assets/cv/KemdirimDavid.pdf": "e7cb97879b2af82db765d405b73d7ae7",
"assets/assets/icons/acecore_logo_1.jpg": "c8b72e6354e76fefcb15d6f6f52e1811",
"assets/assets/icons/acecore_logo_2.jpg": "078985760881c26dc1c12652920fe697",
"assets/assets/icons/aws.png": "b48cddea811c1b925c99c0b7107db990",
"assets/assets/icons/cite_logo.png": "586f54133d2b8ae71d0a0fb326e29e7d",
"assets/assets/icons/cloudinary.png": "60fc2b1f2fea4afefa26d73aab6f4c10",
"assets/assets/icons/cyclic.png": "34253c3f27576d36acce0010db118d1f",
"assets/assets/icons/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/icons/django.png": "27935b84d12947fc00e162304924b87f",
"assets/assets/icons/double_right_black.png": "d68bebf4c0197edad6e132d5e0c4135c",
"assets/assets/icons/double_right_white.png": "00c7fb682eff1e5625663eb464cbde24",
"assets/assets/icons/firebase.png": "45ec5c8523c42019e2aa9fe5436750af",
"assets/assets/icons/flask.png": "4552499691d708daced6f216af46c162",
"assets/assets/icons/git.png": "221762f09039ad5be0491c21775709f9",
"assets/assets/icons/github.png": "e45ebd5258d77392cb78ceb7b3133eeb",
"assets/assets/icons/home_design.png": "44da1906c9c1d836c76b626ed8ba5bcb",
"assets/assets/icons/huawei_logo.jpg": "92f3d3ca6f1ed6a5885ca52f93ee32d6",
"assets/assets/icons/javascript.png": "319356ec500fa715973405e17c47d19f",
"assets/assets/icons/logo.png": "d2df481e7883000a8bc96152e7855dfc",
"assets/assets/icons/mail.png": "db3921367084308347fcbd09111c7ef3",
"assets/assets/icons/netlify.png": "a2147829cad76b2932066d58592c0625",
"assets/assets/icons/nodejs.png": "70637588b45634cebb451b2efb778d73",
"assets/assets/icons/python.png": "2aae2ae0b55ad76dafe20d06bc788e90",
"assets/assets/icons/railway.png": "b3de74255833ad6688e68ea4841ce5b8",
"assets/assets/icons/right-black.png": "fab7ca218bc082ddb8bf1072bda8977f",
"assets/assets/icons/right-white.png": "588c9a56933bfa441ad24c016fa4d631",
"assets/assets/icons/user_black.png": "69bb0ec11e240e166a968e0635462a2c",
"assets/assets/icons/user_white.png": "ca42ca2fe6f80a6a7b30344c86b547b0",
"assets/assets/images/award.jpg": "37996ef1f4951fd686f27eb16bb0da4d",
"assets/assets/images/background.jpg": "2781fa2781d77eb112429128fed6e443",
"assets/assets/images/certificates/ai.png": "e931f74e3ba09362d000b31f71d10e7b",
"assets/assets/images/certificates/bigdata.png": "7082229b85b1ebb3956d1df85760e7e0",
"assets/assets/images/certificates/datacom.png": "67f3c3330d77cfa8f54d43f423d71c63",
"assets/assets/images/certificates/storage.png": "93eaccb26c7d2f4010b6d726b3b1cbb2",
"assets/assets/images/me_3.jpg": "b6ee3c433aa37d52f25753a55596cea2",
"assets/assets/images/me_4.jpg": "4cc105f9d2e238c8e8acda5aa13992f2",
"assets/assets/images/me_5.jpg": "deba5869a6fb2f7a3c633be23d78a104",
"assets/assets/images/projects/bbj/1.jpg": "ce226b11b3f602a3f41ecf6f7a9e74cf",
"assets/assets/images/projects/bbj/2.jpg": "109127da310ca68dc190fb49f46e53fb",
"assets/assets/images/projects/bbj/3.jpg": "028f7a789224d78ab86a050cfdb254b3",
"assets/assets/images/projects/bbj/4.jpg": "b80f72d0aa331011f5f7e58d891cd792",
"assets/assets/images/projects/bbj/5.jpg": "c8ae8ff1a76e6ec458ff16faca9408dd",
"assets/assets/images/projects/bbj/6.jpg": "380105106127a18caf6fcaf3c52b908e",
"assets/assets/images/projects/jogenicsHMS/1.png": "e658ab889f34a7f3ea4c702eb15f5a6f",
"assets/assets/images/projects/jogenicsHMS/2.png": "d38c1d42af0c88f363151464f039504b",
"assets/assets/images/projects/jogenicsHMS/3.png": "e90c4de531ddb7ba90d0b4235eca6224",
"assets/assets/images/projects/jogenicsHMS/4.png": "3fb3ea62161167789a380d1ba8716d16",
"assets/assets/images/projects/jogenicsHMS/5.png": "79e42b8de1466c66ad5f3b2f24b25b21",
"assets/assets/images/projects/jogenicsHMS/6.png": "1585d52793f7b69ba2f7bdc4e92e7046",
"assets/assets/images/projects/omokupreneurs/1.png": "55727c11736cb96cb094a23edcdc6934",
"assets/assets/images/projects/omokupreneurs/2.png": "db816ed44fb165a363c652125e916f07",
"assets/assets/images/projects/omokupreneurs/3.png": "e1a6796391a254db0db890f9a5763627",
"assets/assets/images/projects/peculyn/1.png": "9a11c304999a8b00954cb667c16a29c0",
"assets/assets/images/projects/peculyn/2.png": "c352209b8a8fff837cf8663ed96440b6",
"assets/assets/images/projects/peculyn/3.png": "83133566b43c0b942dc89b64f6bbf6eb",
"assets/assets/images/projects/peculyn/4.png": "e53080ed35163e1610cdf18c871e2cf1",
"assets/assets/images/projects/peculyn/5.png": "c826b4642c8e470f4520f8aa39839912",
"assets/assets/images/projects/powercore/1.png": "7790834eb32d1fbbeefbd2d76603318a",
"assets/assets/images/projects/powercore/2.png": "ce449fa89c2cb4f144b2d14f37f8dd97",
"assets/assets/images/projects/powercore/3.png": "b8e9b8167f55c7673c5cb33578fe8acd",
"assets/assets/images/projects/sar/1.png": "99aa27f51047c589f08597d89850b443",
"assets/assets/images/projects/sar/2.png": "2dca16435418326cfbd671d85fb4ccbf",
"assets/assets/images/projects/sar/3.png": "ba8ebb7262f39bfbda9e8bfa735cdf5d",
"assets/assets/images/projects/sar/4.png": "38b72e971d32356362a4639aaffbbc57",
"assets/assets/images/projects/sar/5.png": "845fbff54d94a2aa12629752a333bc4e",
"assets/assets/images/projects/sirenjournals/1.png": "11df47d2b2f81274fca79350a7e64c2c",
"assets/assets/images/projects/sirenjournals/2.png": "96f7eb402faec7c64b4eba35c13e148f",
"assets/assets/images/projects/sirenjournals/3.png": "b05352828a9dbf602aa013dd6d4e20d4",
"assets/assets/images/projects/sirenjournals/4.png": "54f42411786f1b12326e292fc672c421",
"assets/FontManifest.json": "58410749bacb2e28e1bc1d2b18181f04",
"assets/fonts/MaterialIcons-Regular.otf": "a115d063335b463948079f9a07ce270b",
"assets/NOTICES": "010e8a123aa7bbd66deb10e727c4c17d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_devicon/fonts/FlutterDEVICON.ttf": "20e50df99a2adaab0678501ffb5c81cd",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "3957641ef2344393a2d488896f99bc3f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "8fb898ece4ed443f4cf8a323343b3992",
"icons/Icon-512.png": "1b44ae5bb5fbb8c2c1cdeffa34a47242",
"icons/Icon-maskable-192.png": "8fb898ece4ed443f4cf8a323343b3992",
"icons/Icon-maskable-512.png": "1b44ae5bb5fbb8c2c1cdeffa34a47242",
"index.html": "f5268dfa07188e2d1e4b24ec4df230ee",
"/": "f5268dfa07188e2d1e4b24ec4df230ee",
"main.dart.js": "fe5ee754a0b955e05e1796b2e471235d",
"manifest.json": "fab3ac118c61686161d7f6187f8eac84",
"version.json": "dd1fa1864a66da335eb5b58af0061f9a",
"_redirects": "ef952d360ec42c652095dfeb72a350a6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
