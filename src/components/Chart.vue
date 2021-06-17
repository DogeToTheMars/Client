<template>
    <div class="Chart">
      <h2>{{ coinName }}</h2>
      <apexchart ref="chart1" type="candlestick" height="400" width="920" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Chart',
  data() {
    return {
      timer: '',
      series:
      [{
        name: 'candle',
        data: this.$refs.coinChart
      }],
      
      chartOptions: {
        chart: {
          type: 'candlestick',
          height: 100
        },
        title: {
          text: '', //titme 입력
          align: 'center'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        },
        plotOptions: {
          candlestick: {
            colors: {
              downward: '#3C90EB',
              upward: '#DF7D46'
            },
            wick: {
              // useFillColor: false,
            }
          }
        }
      },
    }
  },
  methods: {
    ...mapActions([
      'clearChartData',
      'updateCoinName',
    ]),
    drawChart() {
          axios.get(`https://api.upbit.com/v1/candles/minutes/1?market=${this.coinMarketName}&count=200`)
          .then(res => {
            // console.log(res.data)
            this.clearChartData()
            for(var i=0; i<res.data.length; i++){
              this.coinChart.push([res.data[i].candle_date_time_kst, 
              res.data[i].opening_price, res.data[i].high_price, res.data[i].low_price, res.data[i].trade_price])
              }
            this.$refs.chart1.updateSeries([{
                  name: 'Coin',
                  data: this.coinChart
            }])
            this.$refs.chart1.updateOptions({
                  title: {
                    text: `${this.coinName}`
            }
          })
        })
      },
    },
  computed: {
    ...mapState([
      'coinChart',
      'coinMarketName',
      'coinName',
    ]),
  },
  created: function() {
    this.drawChart()
    this.timer = setInterval(this.drawChart, 3000); // 3초마다 업데이트
  },
  beforeDestroy: function() {
    this.updateCoinName('BTC-DOGE')
    this.clearChartData()
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
.stock {
  width: 70%;
  margin: 0 auto
}
</style>