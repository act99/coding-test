const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("resolved");
  } else {
    reject("rejected");
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

const test = async () => {
  const variable = await promise;
  console.log(variable);
};

test();

const test2 = async () => {
  const condition = true;
  const promise = new Promise((resolve, reject) => {
    if (condition) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });
  try {
    const result = await promise;
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

test2();
