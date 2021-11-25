const info = {
    name: "why",
    friend: {
    //   girlFriend: {
    //     name: "hmm"
    //   }
    }
}

// ES11提供了可选链(Optional Chainling)
console.log(info?.name,info.friend?.girlFriend?.name)