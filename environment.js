import Constant from "expo-constants"; const ENV = {
    dev: {
        apiUrl: "https://api.petfinder.com/v2/animals/eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJPZUsyanpia1NIVnVBTkhNODJDcmhCbHRXa1ZqUlBXMEE4emFmaDlvY2l0MmQ0ZTd5cCIsImp0aSI6ImJiNDI1YTcxMzQ4MGMxZTg2NjBjOTdiYzE4NmEyZjAzZTk2NTllNjU0YmYzMDQ5OTBmY2UzNGJmMzE1ZTVmNjhlNDc0NmU2ZjcyZTMzZjAwIiwiaWF0IjoxNjI0NTE2NzEwLCJuYmYiOjE2MjQ1MTY3MTAsImV4cCI6MTYyNDUyMDMxMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.zuEmyXnIQ--LL3PFJOw9TbDGJ8TOkCZZ5ZX-cxXFKhRhCkANkHXXL0COPwzGWkiKDvMaCZ_NsZrKkbd-vkbuzvw4y49-IaNMcSxmxSqr1qsbQnDtKYGRqAwAVuSeaPtAQ8X0rOXtP8jNUX7kbWSucnv3GceGKeyPvfWyeRpbzvNaa3ypaI_C2XS4VpmRJFS7TdHATIkoK6AZuQA2sdzb7uWTx_QeLn70Q9Hct6Q9ImpJnMbqkxENGBd8PKbMW7hCBQTS6bZ_XJJBqDcXw0CARR8Y7JXfPGA-bOdJIqwWanILcDpaxHkuJzP7oPAo_t5t09LMBox4ZbhmYjR9_MupmA",
        imageUrl:
            "https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=300",
    },
    production: {
        apiUrl: "https://api.petfinder.com/v2/animals/eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJPZUsyanpia1NIVnVBTkhNODJDcmhCbHRXa1ZqUlBXMEE4emFmaDlvY2l0MmQ0ZTd5cCIsImp0aSI6ImJiNDI1YTcxMzQ4MGMxZTg2NjBjOTdiYzE4NmEyZjAzZTk2NTllNjU0YmYzMDQ5OTBmY2UzNGJmMzE1ZTVmNjhlNDc0NmU2ZjcyZTMzZjAwIiwiaWF0IjoxNjI0NTE2NzEwLCJuYmYiOjE2MjQ1MTY3MTAsImV4cCI6MTYyNDUyMDMxMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.zuEmyXnIQ--LL3PFJOw9TbDGJ8TOkCZZ5ZX-cxXFKhRhCkANkHXXL0COPwzGWkiKDvMaCZ_NsZrKkbd-vkbuzvw4y49-IaNMcSxmxSqr1qsbQnDtKYGRqAwAVuSeaPtAQ8X0rOXtP8jNUX7kbWSucnv3GceGKeyPvfWyeRpbzvNaa3ypaI_C2XS4VpmRJFS7TdHATIkoK6AZuQA2sdzb7uWTx_QeLn70Q9Hct6Q9ImpJnMbqkxENGBd8PKbMW7hCBQTS6bZ_XJJBqDcXw0CARR8Y7JXfPGA-bOdJIqwWanILcDpaxHkuJzP7oPAo_t5t09LMBox4ZbhmYjR9_MupmA",
        imageUrl:
            "https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=300",
    },
}; const getEnvVars = (env = Constant.manifest.releaseChannel) => {
    if (__DEV__) return ENV.dev;
    else if (env === "staging") return ENV.dev;
    else if (env === "production" || env === "default") return ENV.production;
}; export default getEnvVars;
