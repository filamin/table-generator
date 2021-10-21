<template>
  <div id="app">
    <button @click="generate">
      <span>Сгенерировать</span>
    </button>
    <div class="table">
      <div class="header">
        <span class="cell name">
          Наименования
        </span>
        <span class="cell price">
          Цена
        </span>
        <span class="cell count">
          Количество
        </span>
        <span class="cell total">
          Стоимость
        </span>
      </div>
        <div v-for="row in randomData" :key="row.name" class="row">
          <div class="cell name">
            {{ row.name }}
          </div>
          <div class="cell price">
            {{ row.price }}
          </div>
          <div class="cell count">
            {{ row.count }}
          </div>
          <div class="cell total">
            {{ row.total }}
          </div>
        </div>
      <div class="cell summary">
        Итого: {{ sum }}
      </div>
    </div>
  </div>
</template>

<script>

const DATA_COUNT = 50

export default {
  name: 'App',
  data() {
    return {
      randomData: [],
    }
  },
  computed: {
    sum() {
      return +(this.randomData.reduce((sum,item) => sum + item.total, 0).toFixed(2));
    }
  },
  methods: {
    generate() {
      const generatedRandomData = [ ...Array(DATA_COUNT).keys() ].map(() => {
        let item = {
          name: this.generateName(5),
          price: this.generateRandomFloat(0.01, 1000),
          count: this.generateRandomInt(1, 100),
        }
        item.total = +((item.price * item.count).toFixed(2))
        return item
      })
      this.randomData = generatedRandomData;
    },
    generateName(max) {
      let result = '';
      for (let i = 0; i < max; i++) {
        result += String.fromCharCode(this.generateRandomInt(1040, 1103));
      }
      return result;
    },
    generateRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    generateRandomFloat(min, max) {
      return +((Math.random() * (max - min) + min).toFixed(2))
    },
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');
#app {
  font-family: 'Roboto Mono', monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  font-family: 'Roboto Mono', monospace;
  border: none;
  background-color: #e71919;
  color: white;
  padding: 10px 30px;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: #f35454;
    transform: scale(1.05);
  }
  &:active {
    background-color: #ab2f2f;
  }
}
.table {
  color: black;
  background-color: grey;
  border-bottom: 2px solid grey;
  border-right: 2px solid grey;
  border-left: 2px solid grey;
  .header, .row{
    display: grid;
    grid-template: auto / repeat(4, 1fr);
    grid-gap: 2px;
  }
  .cell {
    border-top: 2px solid grey;
    padding: 10px;
    background-color: white;
  }
}
.flip-list-move {
  transition: transform 1s;
}
</style>
