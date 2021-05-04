class Template {
  constructor(file, data) {
    this.file = file;
    this.data = data;
    this.pos = 0;
    this.curr_char = this.file[this.pos];
  }
  error() {
    console.error("error");
  }
  advance() {
    this.pos++;
    this.curr_char = this.file[this.pos];
  }
  peek() {
    return this.file[this.pos + 1];
  }
  get_value(str) {
    return str.split('.')
      .reduce((x, y) => {
        return x && x[y];
      }, this.data );
  }
  get_data() {
    let result = "", i = this.pos;
    while (this.file[i] != '}') {
      result += this.file[i];
      i++;
    }
    this.file = this.file.replace(
      `{${result}}`, this.get_value(result)
    );
  }
  fn() {
    let result = "_", i = this.pos;
    while (this.file[i] != ' ') {
      result += this.file[i];
      i++;
    }
    this[result]();
  }
  _if() {
    let condition = "", i = this.pos + 2, block = "";
    while (this.file[i] != '}') {
      if(this.file[i] != ' ') {
        condition += this.file[i];
      }
      i++;
    }
    i++;
    while(`${this.file[i]}${this.file[i + 1]}` != '{/') {
      block += this.file[i];
      i++;
    }
    if (this.get_value(condition)) {
      this.file = this.file.replace(
        `{@if ${condition}}`, '');
      this.file = this.file.replace(
        `{/if}`, '');
    } else {
      this.file = this.file.replace(
        `{@if ${condition}}${block}{/if}`, '');
    }
  }
  _each() {
    let statement = "", 
        i = this.pos + 5, 
        item = "$", 
        arr = "",
        block = "";
    while (this.file[i] != '}') {
      statement += this.file[i];
      i++;
    }
    i++;
    while (this.file[i] != '{') {
      block += this.file[i];
      i++;
    }
    let temp = block;
    this.file = this.file.replace(
        `{@each ${statement}}`, '');
    statement = statement.split(" ");
    if (statement.length == 3) {
      item += statement[0];
      arr = this.get_value(statement[2]);
      block = block.repeat(arr.length);
      arr.forEach((p) => {
        block = block.replace(item, p);
      });
      this.file = this.file.replace(
        `${temp}{/each}`, block);
    } else {
      this.error();
    }
  }
  replace() {
    if(this.curr_char == '{' && this.peek() == '@') {
      this.advance();
      this.advance();
      this.fn();
    } else {
      this.advance();
      this.get_data();
    }
  }
  get_next_token() {
    while(this.pos < this.file.length) {
      if (this.curr_char == '{') {
        this.replace();
      }
      this.advance();
    }
  }
  compile() {
    this.get_next_token();
    this.file = this.file.replace(/^\s*[\r\n]/gm, "");
    console.log(this.file);
  }
}

module.exports = Tmpl
