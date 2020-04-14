module.exports = function(bundler){
    bundler.addAssetType('.js', require.resolve('./assets/SucraseAsset'));
    bundler.addAssetType('.ts', require.resolve('./assets/SucraseAsset'))
    bundler.addAssetType('.tsx', require.resolve('./assets/SucraseAsset'))
    bundler.addAssetType('.jsx', require.resolve('./assets/SucraseAsset'))
}

