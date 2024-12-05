function calcul() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;

  try {
    if (b == 0) throw new Error("interdit");
    let c = a / b;
    console.log(c);
  } catch (e) {
    console.error(e.message);
  }
}
