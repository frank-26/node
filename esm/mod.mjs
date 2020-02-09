// mod.js
function C() {
  this.sum = 0;
  this.add = function () {
    this.sum += 1;
  };
  this.show = function () {
    console.log('C:', this.sum);
  };
}
// 输出的是一个C的实例。不同的脚本加载这个模块，得到的都是同一个实例。
export let c = new C();