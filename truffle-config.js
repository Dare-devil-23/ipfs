
module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './build/contracts',
  compilers: {
    solc: {
       optimizer: {
         enabled: true,
         runs: 200
       },
      }
    }
  }

