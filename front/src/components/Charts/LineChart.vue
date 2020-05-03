<template>
  <div :style="{height: height+'px'}">
    <div v-if='loading' class="lds-ripple">
        <div>
        </div>
        <div>
        </div>
    </div>
    <svg :id="name" width=0 height=0></svg>
  </div>
</template>

<script>
import * as d3 from "d3"
import api from '@/api'

export default {
    name: 'LineChart',
    props: {
        name: {
            type: String,
            required: true
        },
        dataPath: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 200
        }
    },
    data() {
        return {
            loading: false,
            data: {}
        }
    },
    watch: {
        dataPath() {
            let svg = d3.select(`#${this.name}`)
                .attr("width", 0)
                .attr("height", 0)
            svg.html("");
            this.getData()
        },
        data() {
            let margin = {top: 20, right: 20, bottom: 50, left: 70},
                width = this.width - margin.left - margin.right,
                height = this.height - margin.top - margin.bottom;

            // parse the date / time
            let parseTime = d3.timeParse("%m/%d/%y");

            // set the ranges
            let x = d3.scaleTime().range([0, width]);
            let y = d3.scaleLinear().range([height, 0]);

            // define the line
            let valueline = d3.line()
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.confirmed); });

            // append the svg obgect to the body of the page
            // appends a 'group' element to 'svg'
            // moves the 'group' element to the top left margin
            let svg = d3.select(`#${this.name}`)
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");
            
            // format the data
            this.data.forEach(function(d) {
                d.date = parseTime(d.date);
                d.confirmed = +d.confirmed;
            });

            // Scale the range of the data
            x.domain(d3.extent(this.data, function(d) { return d.date; }));
            y.domain([0, d3.max(this.data, function(d) { return d.confirmed; })]);

            // Add the valueline path.
            svg.append("path")
                .data([this.data])
                .attr("class", "line")
                .attr("d", valueline);

            // Add the x Axis
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            // Add the y Axis
            svg.append("g")
                .call(d3.axisLeft(y));
        }
    },
    mounted() {
        this.getData()
    },
    beforeDestroy() {
        this.data = {}
    },
    methods: {
        getData(){
            this.loading = true
            api.get('/global/confirmed/')
            .then(response => {
                this.data = response.data
                this.loading = false
            })
        }
    }
}
</script>

<style>
.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 2px;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  left: 45%;
  top: 30%;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #56a1c7;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

</style>