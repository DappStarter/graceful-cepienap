require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain hole idea enroll fortune season'; 
let testAccounts = [
"0x377ea2a4664e1b2ee8e903ef2d689f93b203712809e96440ad284e89d439fa2d",
"0xaf0ec19e9eefb1b88cd70c83e2bc0cd0ae1a74c2101c016148f11b4b5ab0f088",
"0x8a8689196816f534ee602e0a1c762418a6e41a25b09de0496a22fdac6e271499",
"0xa6768cc60bde648b6f6e82fb8211ec4ef6ba679425a66b592320b951db6f71b7",
"0x06fe69e58e776e504e049c4d0795e896aeb79f5e694ccb96441f29602e6aa0c1",
"0xc7695e60d37a8ab1d6075031b6fef29d659badf6fb02837a84fb007b8770560f",
"0x4dc4e1b29cb39e7a8eaecf7f5a1ccd7b59657916bc12118af29714f648ad64ae",
"0xdde520ea84200e43c08b8ef67ced14fbab082cdde020426680c632e08ee9b3ca",
"0x57e1b75a48ab05d1329babca68863da384c31be4ffbae0058c27a412575fe153",
"0x26b7b4481bc477d10591316adcd48875fe15037f34d1a9423bfd113481125139"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
