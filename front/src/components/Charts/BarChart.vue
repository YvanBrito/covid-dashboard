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
    name: 'BarChart',
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
            loading: true,
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
        data(){
            let svg = d3.select(`#${this.name}`),
            margin = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 50
            },
            width = this.width - margin.left - margin.right,
            height = this.height - margin.top - margin.bottom
            
            svg.attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            
            let g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            let x = d3.scaleBand()
                .rangeRound([0, width])
                .padding(0.1);

            let y = d3.scaleLinear()
                .rangeRound([height, 0]);
            
            x.domain(this.data.map(function (d) {
                    return d.Run;
                }));
            y.domain([0, d3.max(this.data, function (d) {
                        return Number(d.Speed);
                    })]);

            g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

            g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Speed");

            g.selectAll(".bar")
            .data(this.data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
                return x(d.Run);
            })
            .attr("y", function (d) {
                return y(Number(d.Speed));
            })
            .attr("width", x.bandwidth())
            .attr("height", function (d) {
                return height - y(Number(d.Speed));
            });
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
            api.get('/hello2')
            .then(response => {
                this.data = response.data
                this.loading = false
            })
        }
    }
}
</script>

<style>
.bar {
    fill: steelblue;
}

.bar:hover {
    fill: brown;
}
</style>