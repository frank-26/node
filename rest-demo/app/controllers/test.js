const db = [{
  name: '李雷'
}, {
  name: '寒梅'
}]

class Test {
  find(ctx) {
    // x // 500
    ctx.body = db
  }
  findById(ctx) {
    if(ctx.params.id>db.length-1){
      ctx.throw(412,'先决条件失败')
    }
    ctx.body = db[ctx.params.id * 1]
  }
  create(ctx) {
    db.push(ctx.request.body)
    ctx.body = ctx.request.body
  }
  update(ctx) {
    db[ctx.params.id * 1] = ctx.request.body;
    ctx.body = ctx.request.body
  }
  delete(ctx) {
    db.splice(ctx.params.id, 1);
    ctx.status = 204
  }

}

module.exports = new Test();