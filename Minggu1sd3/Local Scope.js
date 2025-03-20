// Local Scope
function showLocal() {
  let localVar = "Saya hanya ada di dalam function ini!";
  console.log(localVar);
}

showLocal();

// ❌ Error: localVar is not defined
console.log(localVar);
