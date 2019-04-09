const MyTRC721 = artifacts.require('./MyTRC721');

const config = require('config');

module.exports = function(deployer) {
    return deployer.deploy(MyTRC721, 'MyTRC721', 'MyTRC721');
};
