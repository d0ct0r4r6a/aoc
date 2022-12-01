import fs from "fs";

function solve() {
  const input = fs.readFileSync("./inputs/1.txt", {
    encoding: "utf-8",
    flag: "r",
  });
  const elfCalories = input
    .split("\n\n")
    .map((calorieString) =>
      calorieString.split("\n").reduce((acc, num) => acc + Number(num), 0)
    );
  console.log(
    elfCalories
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((acc, num) => acc + num, 0)
  );
}

solve();
