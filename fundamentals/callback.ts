function customFetch(
  callback: (error: Error | null, data?: string) => void
): void {
  setTimeout(() => {
    const success = Math.random() > 0.3;

    if (success) {
      callback(null, "success");
    }

    callback(new Error("error"));
  }, 1000);
}

customFetch((error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// Callback Hell Problem
function step1(callback: (error: Error | null, result?: string) => void) {
  setTimeout(() => callback(null, "Step 1 complete"), 500);
}

function step2(
  data: string,
  callback: (error: Error | null, result?: string) => void
) {
  setTimeout(() => callback(null, data + " -> Step 2 complete"), 500);
}

function step3(
  data: string,
  callback: (error: Error | null, result?: string) => void
) {
  setTimeout(() => callback(null, data + " -> Step 3 complete"), 500);
}

// Nested callbacks (Callback Hell)
step1((err1, result1) => {
  if (err1) {
    console.error(err1);
    return;
  }

  step2(result1!, (err2, result2) => {
    if (err2) {
      console.error(err2);
      return;
    }

    step3(result2!, (err3, result3) => {
      if (err3) {
        console.error(err3);
        return;
      }

      console.log("Final result:", result3);
    });
  });
});
