### Promise - object - async tasks ( third party process doing the task )

Creating a promise

Using a promise

this - is always  used inside a function - merely a reference to another object

this inside a function, inside a method, function run with call, apply and bind

### Async-await
Do you know what happens when we add an 𝗮𝘀𝘆𝗻𝗰 keyword to a function?

When we add an 𝗮𝘀𝘆𝗻𝗰 keyword to the function, the function always returns a promise fulfilled with the returned value.

So the below code:

𝘤𝘰𝘯𝘴𝘵 𝘴𝘢𝘺𝘏𝘦𝘭𝘭𝘰 = 𝘢𝘴𝘺𝘯𝘤 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 () {
𝘳𝘦𝘵𝘶𝘳𝘯 '𝘏𝘦𝘭𝘭𝘰';
};

is the same as:

𝘤𝘰𝘯𝘴𝘵 𝘴𝘢𝘺𝘏𝘦𝘭𝘭𝘰 = 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 () {
𝘳𝘦𝘵𝘶𝘳𝘯 𝘯𝘦𝘸 𝘗𝘳𝘰𝘮𝘪𝘴𝘦(𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 (𝘳𝘦𝘴𝘰𝘭𝘷𝘦, 𝘳𝘦𝘫𝘦𝘤𝘵) {
𝘳𝘦𝘴𝘰𝘭𝘷𝘦('𝘏𝘦𝘭𝘭𝘰');
});
};

which is same as:

𝘤𝘰𝘯𝘴𝘵 𝘴𝘢𝘺𝘏𝘦𝘭𝘭𝘰 = 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 () {
𝘳𝘦𝘵𝘶𝘳𝘯 𝘗𝘳𝘰𝘮𝘪𝘴𝘦.𝘳𝘦𝘴𝘰𝘭𝘷𝘦('𝘏𝘦𝘭𝘭𝘰');
};

So to get the actual string 𝗛𝗲𝗹𝗹𝗼, we need to add .𝘁𝗵𝗲𝗻 handler like this:

𝘴𝘢𝘺𝘏𝘦𝘭𝘭𝘰()
.𝘵𝘩𝘦𝘯(𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 (𝘳𝘦𝘴𝘶𝘭𝘵) {
𝘤𝘰𝘯𝘴𝘰𝘭𝘦.𝘭𝘰𝘨(𝘳𝘦𝘴𝘶𝘭𝘵); // 𝘏𝘦𝘭𝘭𝘰
});

𝗣𝗦: 𝗮𝘀𝘆𝗻𝗰 is used along with 𝗮𝘄𝗮𝗶𝘁 keyword to perform some async operation like this:

𝘤𝘰𝘯𝘴𝘵 𝘨𝘦𝘵𝘋𝘢𝘵𝘢 = 𝘢𝘴𝘺𝘯𝘤 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 () {
𝘵𝘳𝘺 {
𝘤𝘰𝘯𝘴𝘵 {𝘥𝘢𝘵𝘢} = 𝘢𝘸𝘢𝘪𝘵 𝘢𝘹𝘪𝘰𝘴.𝘨𝘦𝘵('𝘶𝘳𝘭');
𝘳𝘦𝘵𝘶𝘳𝘯 𝘥𝘢𝘵𝘢;
} 𝘤𝘢𝘵𝘤𝘩(𝘦𝘳𝘳𝘰𝘳) { }
};

𝘨𝘦𝘵𝘋𝘢𝘵𝘢()
.𝘵𝘩𝘦𝘯(𝘳𝘦𝘴𝘶𝘭𝘵 => 𝘤𝘰𝘯𝘴𝘰𝘭𝘦.𝘭𝘰𝘨(𝘳𝘦𝘴𝘶𝘭𝘵))
.𝘤𝘢𝘵𝘤𝘩(𝘦𝘳𝘳𝘰𝘳 => 𝘤𝘰𝘯𝘴𝘰𝘭𝘦.𝘭𝘰𝘨(𝘦𝘳𝘳𝘰𝘳));

𝗧𝗶𝗽: Always add .𝗰𝗮𝘁𝗰𝗵 handler after .𝘁𝗵𝗲𝗻 to avoid breaking the application If there is some issue while executing the API call.

𝗖𝗵𝗲𝗰𝗸 𝗼𝘂𝘁 𝘁𝗵𝗲 𝗹𝗶𝗻𝗸 𝗶𝗻 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗲𝗻𝘁 𝘁𝗼 𝘀𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 𝘁𝗼 𝗺𝘆 𝘄𝗲𝗲𝗸𝗹𝘆 𝗻𝗲𝘄𝘀𝗹𝗲𝘁𝘁𝗲𝗿 𝗮𝗻𝗱 𝗴𝗲𝘁 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗰𝗼𝗻𝘁𝗲𝗻𝘁 𝗱𝗶𝗿𝗲𝗰𝘁𝗹𝘆 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗶𝗻𝗯𝗼𝘅.


###
`
Promise.resolve(10)
    .then((r) => {
        throw (r + 10)
    })
    .catch((e) => {
        return e + 24;
    })
    .then(console.log)
    .catch((e) => {
        console.log(20 + e)
    })
`

### Async Iteration

Generator function can generate multiple values

Generators:Normal :: Async Iteration::Promises
Async Iteration

Reactive programming - separate branch of programming
  eg; Observables in Angular


Symbol.asyncIterator

for await(...) {

}
