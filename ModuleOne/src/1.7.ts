{
    // Spread Operator
    let firstFriendList = ["Sakib", "Akib", "Rony"]
    let secondFriendList = ["Sumon", "Nedi", "Rakib"]

    let fullFriendList = [...firstFriendList, secondFriendList]

    let firstPeriodMentorList = {
        MongoDB: "Akib",
        NextJS: "Sumon",
        RDBMS: "Sakib",
    }

    let secondPeriodMentorList = {
        HTML: "Suvro", 
        CSS: "Ropi",
        JS: "Proloy"
    }

    let MentorList = {
        ...firstFriendList,
        ...secondFriendList
    }

    
    // Rest Operator
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi, ${friend}`))
    } 

    greetFriends("Sakib", "Rakib", "Shafiq", "Suvro")

    // Destructuring

}